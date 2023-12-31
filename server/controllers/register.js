import {auth} from "../FirebaseConfig/firebase.js"
import {createUserWithEmailAndPassword} from "firebase/auth" 

import { db } from "../FirebaseConfig/firebase.js"
import {collection, doc,setDoc} from "firebase/firestore"

export async function register(req,res){
    try {
        const {username,email,password}=req.body
        await createUserWithEmailAndPassword(auth,email,password)
        const docData=doc(db,"Users",email)
        const data={username,tasks:[],email,profile:""}
        await setDoc(docData,data)
        console.log(username,email,password)
        res.status(200).json({success:true})
    } catch (error) {
        res.status(400).json({success:false})
        console.log(error)
    }
}
