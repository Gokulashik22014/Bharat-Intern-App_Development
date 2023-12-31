import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, Text,Image, View,Animated, TouchableOpacity, TextInput,ScrollView,FlatList} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SwipeListView } from 'react-native-swipe-list-view';
import * as Progress from "react-native-progress"
import { useEffect, useState,useId,useReducer } from 'react';
import axios from 'axios';
import uuid from 'react-native-uuid';
import Toast from "react-native-toast-message"
//importing the custom components
import Close from "../assests/Close"
import {LoginSmall} from "../assests/Login"
import Add from "../assests/Add"
import Task from '../components/Task';
import Delete from '../assests/Delete';
import Alert from "../assests/Alert"
import Edit from "../assests/Edit"
import Logo from "../assests/Logo"
import LoginMenu from "../components/LoginMenu.js"

const width=Dimensions.get("screen").width
const height=Dimensions.get("screen").height


export default function HomeScreen({navigation}) {
    const [showMenu,setShowMenu]=useState(false)
    const [showLogin,setShowLogin]=useState(false)
    //data for the users
    const [username,setUsername]=useState(undefined)
    const [tasks,setTasks]=useState([])
    const [email,setEmail]=useState(undefined)
    const [profile,setProfile]=useState(undefined)
    //task info
    const [taskName,setTaskName]=useState(undefined)
    const [important,setImportant]=useState(false)
    const [progress,setProgress]=useState(0)
    const [editId,setEditId]=useState(undefined)
    //edit menu
    const [edit,setEdit]=useState(false)
    function add(){
        let newTask={
            id:uuid.v4(),
            name:taskName,
            completed:false,
            important:important
        }
        try {
            axios.post("http://10.0.2.2:3000/user/addtask",{newTask,email})
        } catch (error) {
            console.log(error)
        }
        setTasks(old=>[...old,newTask])
        setShowMenu(old=>!old)
        setTaskName("")
        setImportant(false)
    }
    useEffect(()=>{
        axios.get("http://10.0.2.2:3000/user/getuser").then((response)=>{
            const {username,tasks,email,profile}=response.data
            setUsername(username)
            setTasks(tasks)
            setEmail(email)
            setProfile(profile)
            
        }).catch(error=>{
            console.log("here is the error"+error)
        })
    },[])
    
   
    function Options(data,rowMap){
        function editTaskBtn(data){
            setEdit(true)
            const id=data.item.id
            setEditId(id)
            setShowMenu(old=>!old)
            try {
                axios.get(`http://10.0.2.2:3000/user/gettask/${id}`).then(response=>{
                    setTaskName(response.data.task.name)
                    setImportant(response.data.task.important)
                }).catch(error=>console.log(error))
            } catch (error) {   
                console.log(error)
            }
        }
        function deleteTask(data){
           const id=data.item.id
           try{
            axios.post(`http://10.0.2.2:3000/user/deletetask/${id}`)
            setTasks(old=>old.filter(i=>i.id!=id))
        }catch(error){
            console.log(error)
        }
        }
        return(
            <View style={styles.options}>
                <TouchableOpacity style={[{backgroundColor:"#89FF51"},styles.optionText]} onPress={()=>editTaskBtn(data)}>
                    <Edit/>
                </TouchableOpacity>
                <TouchableOpacity style={[{backgroundColor:"#FF307B"},styles.optionText]} onPress={()=>deleteTask(data)}>
                    <Delete/>
                </TouchableOpacity>
            </View>
        )
    }
    async function editTask(){
        try{
            axios.post(`http://10.0.2.2:3000/user/edittask/${editId}`,{name:taskName,important})
            setTasks(old=>{
                let temp=old.filter(i=>i.id!=editId)
                temp.push({id:editId,completed:false,name:taskName,important})
                return temp
            })
            setEdit(false)
            setShowMenu(false)
        }catch(error){
            console.log(error)
        }
    }
  return (
    <SafeAreaView>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgb(161,105,230)','rgb(164,100,255)','rgb(136,64,237)','rgb(129,40,255)']}
        style={styles.container}
      >
        <View style={styles.navBar}>
                <View style={styles.logoContainer}>
                    <View style={styles.logo}>
                        <Logo/>
                    </View>
                    <View>
                        <Text style={styles.text}>NoteDown</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>setShowLogin(true)}>
                    <LoginSmall/>
                </TouchableOpacity>
        </View>
        <View style={styles.header}>
            <View style={styles.control}>
                <View>
                    <Text style={{fontSize:16,color:"#FFFFFF"}}>Hi! <Text style={{fontWeight:"bold"}}>{username}</Text></Text>
                    <Text style={{fontSize:26,color:"#FFFFFF",fontWeight:"bold"}}>Today's work</Text>
                </View>
                <TouchableOpacity onPress={()=>{
                    setTaskName(undefined)
                    setImportant(false)
                    setShowMenu(old=>!old)
                }}>
                    <View style={styles.add}>
                        <Add/>
                    </View>
                </TouchableOpacity>
            </View>
            <Progress.Bar 
                progress={progress==undefined?0:progress} 
                width={400} 
                height={10} 
                color="#26E244" 
                unfilledColor='#26A9E2' 
                borderColor="transparent" 
                borderRadius={10}
            />
        </View>
        {
            tasks.length!=0?<ScrollView>
            <View style={styles.task}>
                <SwipeListView
                    data={tasks}
                    renderItem={ (data, rowMap) =><Task id={data.item.id} name={data.item.name} importantVal={data.item.important} checked={data.item.completed} setProgress={setProgress} val={1/tasks.length}/>}
                    renderHiddenItem={Options}
                    leftOpenValue={160}
                    rightOpenValue={0}
                />
            </View>
        </ScrollView>:<View style={{alignItems:"center"}}>
            <Image source={require('../assests/wavingAnimal.gif')} />
            <Text style={{fontSize:24,color:"white"}}>You have no task</Text>
        </View>
        }

        {
            showMenu&& <View style={styles.addContainer}>
                <View style={styles.addMenu}>
                    <View style={{width:"100%",alignItems:"flex-end"}}>
                        <TouchableOpacity onPress={()=>{
                            setShowMenu(false)
                            setEdit(false)
                        }}>
                            <Close/>
                        </TouchableOpacity>
                    </View>
                    <TextInput placeholder='Your task' style={{fontSize:18}} value={taskName} onChangeText={(value)=>setTaskName(value)}/>
                    <View style={{width:"60%"}}>
                        <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",width:"100%",backgroundColor:important?"#008080":"transparent",borderRadius:12}} onPress={()=>setImportant((old)=>!old)}>
                            <Alert/>
                            {important?<Text>Remove</Text>:<Text>Mark as important</Text>}
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={edit?editTask:add}>
                        <Text style={styles.addBtn}>{edit?"EDIT":"ADD"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        }
        {
            showLogin&&<LoginMenu name={username} email={email} profile={profile} setShowLogin={setShowLogin} navigation={navigation} val={tasks.length}/>
        }
        <Toast/>
        </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        width:width,
        height:height,
    },
    logo:{
        borderColor: "#E1E1E1", // Specify your desired border color for the logo box
        borderRadius: 2,
        borderWidth: 3, // Specify the width of the border
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8F8F8",
        marginRight:9
    },
    text:{
        fontSize:12,
        color:"#FFFFFF"
    },
    navBar:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:35,
        backgroundColor:"#9D76C1",
        alignItems:"center",
        paddingHorizontal:20,
        paddingVertical:5,
        margin:10,
        borderRadius:12
    },
    logoContainer:{
        flexDirection:"row",
        gap:2,
        alignItems:"center",
    },
    header:{
        gap:4,
        marginBottom:23,
    },
    control:{
        flexDirection:"row",
        justifyContent:"space-between",
        margin:8,
    },
    add:{
        backgroundColor:"#9D76C1",
        padding:6,
        borderRadius:50,
    },
    addContainer:{
        position:"absolute",
        width:width,
        height:height,
        backgroundColor: 'rgba(52, 52, 52, 0.3)'
    },
    addMenu:{
        position:"absolute",
        top:height/3,
        left:width/10,
        backgroundColor:"rgba(229,207,247,0.9)",
        padding:10,
        borderColor:"#ffffff40",
        borderWidth:1,
        borderRadius:12,
        width:"80%",
        height:250,
        justifyContent:"space-between",
        alignItems:"center",
    },
    addBtn:{
        backgroundColor:"#9D76C1",
        paddingHorizontal:20,
        paddingVertical:6,
        fontSize:16,
        borderRadius:12
    },    
    task:{
        padding:12
    },
    options:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:"#9D76C1",
        height:46,
        borderRadius:8,
    },
    optionText:{
        width:"18%",
        height:"90%",
        borderRadius:12,
        alignItems:'center',
        justifyContent:"center",
        marginLeft:8
    }
});