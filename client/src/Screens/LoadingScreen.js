import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, Text, View,Animated} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//importing the custom components
import Logo from '../components/Logo';
import { useEffect } from 'react';

const width=Dimensions.get("screen").width
const height=Dimensions.get("screen").height
export default function LoadingScreen({navigation}) {
  useEffect(()=>{
    setTimeout(()=>navigation.navigate("login"),500)
  },[])
  return (
    <SafeAreaView style={styles.screen}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgb(161,105,230)','rgb(164,100,255)','rgb(136,64,237)','rgb(129,40,255)']}
        style={styles.container}
      >
        <Logo/>
        </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#5B0888",
        width:width,
        height:height
    },
    container:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        margin:"5%",
        flexDirection:"row",
    },
    logo:{
        borderColor: "#E1E1E1", // Specify your desired border color for the logo box
        borderRadius: 2,
        borderWidth: 3, // Specify the width of the border
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8F8F8",
        marginRight:9
    },
    text:{
        fontSize:19,
        color:"#FFFFFF"
    }
});
