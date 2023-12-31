import { View,Text,TouchableOpacity ,StyleSheet} from "react-native";
import CheckBox from "expo-checkbox";
import { useState } from "react";
import axios from "axios";
//importing custom components
import Alert from "../assests/Alert"
export default function Task({id,name,importantVal,checked,setProgress,val}){

    const [isChecked,setIsChecked]=useState(checked)
    const [fields,setFields]=useState({
        important:importantVal || false,
        notification:false
    })

    function button(){
        setIsChecked(old=>!old)
        try {
            axios.post("http:10.0.2.2:3000/user/checked",{id,completed:!isChecked})
        } catch (error) {
            console .log(error)
        }
        setProgress(old=>!isChecked?old+val:old-val)
    }

    return(
        <View style={[styles.container,{backgroundColor:fields.important?"#F4F7CF":"#E5CFF7"}]}>
            <View style={styles.content}>    
                <TouchableOpacity >
                    <CheckBox 
                        value={isChecked} 
                        name="checked"
                        onValueChange={button}
                        color={isChecked?"#89FF51":"#A185C5"}
                        style={styles.checkBox}
                    />
                </TouchableOpacity>
                    <Text style={[styles.text,{textDecorationLine:isChecked?"line-through":"none"}]}>{name}</Text>
            </View>
            {fields.notification?<Alert/>:""}
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderRadius:8,
        width:"100%",
        height:46,
        alignItems:"center",
        padding:6,
        marginBottom:20,
    },
    content:{
        flexDirection:"row",
        alignItems:"center",
        gap:8,
        marginLeft:5,
    },
    checkBox:{
        borderRadius:4,
        borderWidth:3,
        width:22,
        height:22,
    },
    text:{
        fontSize:18,
        maxWidth:"80%",
        maxHeight:45,
        overflow:"hidden",
    }
})