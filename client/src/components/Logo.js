import { Dimensions, SafeAreaView, StyleSheet, Text, View,Animated} from 'react-native';
import LogoImg from "../assests/Logo"
export default function Logo(){
    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <LogoImg/>
            </View>
            <View>
                <Text style={styles.text}>NoteDown</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
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