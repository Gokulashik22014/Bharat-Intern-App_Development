import {auth} from "../FirebaseConfig/firebase.js"
import { signInWithEmailAndPassword,signOut} from "firebase/auth"


export async function login(req,res){
    try {
        const {email,password}=req.body
        let userDetails={}
        await signInWithEmailAndPassword(auth,email,password).then((users)=>userDetails.email=users.user.email)
        res.status(200).json({success:true,userDetails})    
    } catch (error) {
        res.status(400).json({success:false})
        console.log(error)
    }
}

export async function logout(req,res){
    try {
        signOut(auth)
    } catch (error) {
        console.log(error)
    }
}