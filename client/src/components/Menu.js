import { Dimensions, SafeAreaView, StyleSheet, Text,Image, View,Animated, TouchableOpacity, TextInput,ScrollView,FlatList} from 'react-native';
import Close from "../assests/Close"
import Alert from "../assests/Alert"


const width=Dimensions.get("screen").width
const height=Dimensions.get("screen").height


export default function Menu({menuName,menuFunc}){
    return(
        <View style={styles.addContainer}>
        <View style={styles.addMenu}>
            <View style={{width:"100%",alignItems:"flex-end"}}>
                <TouchableOpacity onPress={()=>setShowMenu(false)}>
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
            <TouchableOpacity onPress={menuFunc}>
                <Text style={styles.addBtn}>{menuName}</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
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