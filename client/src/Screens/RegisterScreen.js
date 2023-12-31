import { StatusBar } from 'expo-status-bar';
import { Dimensions, Button, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Toast from "react-native-toast-message"
import axios from "axios"

import { useState } from 'react';
//importing custom components
import Logo from '../components/Logo';

const width=Dimensions.get("screen").width
const height=Dimensions.get("screen").height
export default function RegisterScreen({navigation}) {
    //usestates
    const [username,setUsername]=useState(undefined)
    const [email,setEmail]=useState(undefined)
    const [password,setPassword]=useState(undefined)    
    //functions
    const showFailure = () => {
        Toast.show({
          type: 'error',
          text1: 'Email Already exist',
          text1Style:{fontSize:18}
        });
      }
    const showSuccess=()=>{
        Toast.show({
            type: 'success',
            text1: 'Successfully created  🥳',
            text1Style:{fontSize:14}
          });
    }
    //calling api
    function register(){
        axios.post("http://10.0.2.2:3000/register", { username, email, password })
            .then((response) => {
            showSuccess();
            setTimeout(() => {
                navigation.navigate("login")
            }, 500);
        })
        .catch(error => {
            console.log(error);
            showFailure();
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
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  
            >
                <ScrollView>
                <View style={styles.container}>
                <Text style={{marginBottom:35,color:"white",fontSize:24}}>REGISTER</Text>
                    <TextInput 
                        placeholder='Username'
                        style={styles.inputs}
                        value={username}
                        onChangeText={(value)=>setUsername(value)}
                    />
                    <TextInput 
                        placeholder='Email'
                        style={styles.inputs}
                        value={email}
                        onChangeText={(value)=>setEmail(value)}
                    />
                    <TextInput 
                        placeholder='password'
                        style={styles.inputs}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(value)=>setPassword(value)}
                    />
                    <TouchableOpacity style={styles.button} onPress={register}>
                        <Text>
                            Register
                        </Text>
                    </TouchableOpacity>
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
        marginTop:70,
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
    },
    scrollViewContainer: {
        paddingTop: StatusBar.currentHeight,

    },
});
