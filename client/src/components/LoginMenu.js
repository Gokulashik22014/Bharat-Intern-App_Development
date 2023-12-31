import {View,StyleSheet,Text,Dimensions, TouchableOpacity} from "react-native"
import axios from "axios"

import Close from "../assests/Close"
import {LoginBig} from "../assests/Login"
import Logout from "../assests/Logout"



const width=Dimensions.get("screen").width-100
const height=Dimensions.get("screen").height-100

export default function LoginMenu({setShowLogin,navigation,name,profile,email,val}){
    async function logout(){
        try {
            axios.post("http;//10.0.2.2:3000/login/logout",{})
            navigation.navigate("login")
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <View style={styles.container}>
            <View style={{alignItems:"flex-end",width:"100%",margin:3}}>
                <TouchableOpacity onPress={()=>setShowLogin(false)}>
                    <Close/>
                </TouchableOpacity>
            </View>
            <View>
                {profile?"":<LoginBig/>}
            </View>
            <View style={styles.data}>
                <View style={styles.text}><Text>{name}</Text></View>
                <View style={styles.text}><Text>{email}</Text></View>
                <View style={styles.text}><Text>Ongoing Task : {val}</Text></View>
            </View>
            <TouchableOpacity onPress={logout}>
                <View style={styles.logout}>
                    <Logout/>
                    <Text style={{fontSize:18}}>Logout</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        position:"absolute",
        width:width,
        height:height,
        backgroundColor:"white",
        marginTop:50,
        right:0,
        backgroundColor:"rgba(229, 207, 247,0.8)",
        bottom:60,
        borderTopStartRadius:33,
        borderBottomStartRadius:33,
        borderColor:"#ffffff40",
        borderWidth:2,
        justifyContent:"space-between",
        alignItems:"center"
    },
    logout:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"35%",
        alignItems:"center",
        marginBottom:50
    },
    data:{
        justifyContent:"space-evenly",
        height:"50%",
        width:"70%"
    },
    text:{
        backgroundColor:"#9D76C1",
        padding:12,
        borderRadius:8,
    }
})