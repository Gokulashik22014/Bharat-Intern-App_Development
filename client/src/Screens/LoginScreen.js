import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from "axios"
//importing custom components
import Logo from '../components/Logo';
import { useState } from 'react';
import Toast from 'react-native-toast-message';
const width=Dimensions.get("screen").width
const height=Dimensions.get("screen").height
export default function LoginScreen({navigation}) {
    //useStates
    const [email,setEmail]=useState(undefined)    
    const [password,setPassword]=useState(undefined)
    function login(){
        axios.post("http://10.0.2.2:3000/login",{email,password})
        .then(response=>{
            console.log(response.data)
            navigation.navigate("home")
        })
        .catch(error=>{
            showFailure()
            console.log(error)
        })
        setEmail("")
        setPassword("")
    }
    const showFailure = () => {
        Toast.show({
          type: 'error',
          text1: 'Email or password is wrong',
          text1Style:{fontSize:18}
        });
      }

  return (
    <LinearGradient
        // Background Linear Gradient
        colors={['rgb(161,105,230)','rgb(164,100,255)','rgb(136,64,237)','rgb(129,40,255)']}
        style={styles.screen}
    >
        <View style={styles.logoContainer}>
            <Logo/>
        </View>
        <KeyboardAvoidingView
            behavior={Platform.OS=="ios"?"padding":"height"}
        >
            <ScrollView>
                <View
                    style={styles.container}
                >
                    <Text style={{marginBottom:35,color:"white",fontSize:24}}>LOGIN</Text>
                    <TextInput 
                        placeholder='Email'
                        style={styles.inputs}
                        value={email}
                        onChangeText={value=>setEmail(value)}
                    />
                    <TextInput 
                        placeholder='password'
                        style={styles.inputs}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={value=>setPassword(value)}
                    />
                    <TouchableOpacity style={styles.button} onPress={login}>
                        <Text style={{ color:"white"}}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:"row",gap:5}}>
                        <Text>Don’t have an account?</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('register')}>
                            <Text style={{fontWeight:"800",color:"white"}}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
        <Toast/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#5B0888",
        width:width,
        height:height,
    },
    logoContainer:{
        marginTop:70,
    },
    container:{
        justifyContent:"space-around",
        alignItems:"center",
        marginTop:100,
    },
    inputs:{
        width:"65%",
        height:50,
        backgroundColor:"#9D76C1",
        paddingLeft:7,
        borderRadius:7,
        color:"white",
        fontSize:15,
        marginBottom:35
    },
    button:{
        margin:25,
        backgroundColor:"#9D76C1",
        padding:15,
        paddingHorizontal:35,
        borderRadius:7,
    }
});
