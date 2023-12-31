import {auth,db} from "../FirebaseConfig/firebase.js"
import {doc,setDoc,getDoc } from "firebase/firestore"

let user=undefined
export async function getUser(req,res){
    try {
        user=auth?.currentUser?.email
        const docRef=doc(db,"Users",user)
        const docdata=await getDoc(docRef)
        res.status(200).json(docdata.data())
    } catch (error) {
        console.log(error)
    }
}

export async function addTask(req,res){
    try {
        const {newTask,email}=req.body
        const docRef=doc(db,"Users",user)
        const docData=await getDoc(docRef)
        let newData=docData.data()
        let tasks=newData.tasks
        tasks.push(newTask)
        newData.tasks=tasks
        await setDoc(docRef,newData)
        res.status(200).json({success:true})
    } catch (error) {
        res.status(200).json({success:false})
        console.log(error)
    }
}
export async function getTask(req,res){
    try {
        const {id}=req.params
        const docRef=doc(db,"Users",user)
            const docData=await getDoc(docRef)
            let newData=docData.data()
            let tasks=newData.tasks
            let task=tasks.filter(val=>val.id==id)
        res.status(200).json({message:true,task:task[0]})
    } catch (error) {
        res.status(200).json({success:false})
        console.log(error)
    }
}
export async function getAllTask(req,res){
    try {
        const docRef=doc(db,"Users",user)
        const docData=await getDoc(docRef)
        let newData=docData.data()
        let tasks=newData.tasks
    res.status(200).json({success:true,tasks})
    } catch (error) {
        res.status(200).json({success:false})
        console.log(error)
    }
    
}
export async function checked(req,res){
    try {
        const {id,completed}=req.body
        const docRef=doc(db,"Users",user)
        const docData=await getDoc(docRef)
        let newData=docData.data()
        let tasks=newData.tasks
        for(let i=0;i<tasks.length;i++){
            if(tasks[i].id==id) tasks[i].completed=completed
        }
        newData.tasks=tasks
        await setDoc(docRef,newData)
        res.status(200).json({success:true})
    } catch (error) {
        res.status(200).json({success:false})
        console.log(error)
    }
}
export async function editTask(req,res){
    try {
        const {name,important}=req.body
        const {id}=req.params
        const docRef=doc(db,"Users",user)
        const docData=await getDoc(docRef)
        let newData=docData.data()
        let tasks=newData.tasks
        tasks=tasks.filter(val=>val.id!=id)
        tasks.push({id,completed:false,name,important})
        newData.tasks=tasks
        await setDoc(docRef,newData)
        res.status(200).json({success:true})
    } catch (error) {
        res.status(200).json({success:false})
        console.log(error)
    }
    
}
export async function deleteTask(req,res){
    const {id}=req.params
    const docRef=doc(db,"Users",user)
        const docData=await getDoc(docRef)
        let newData=docData.data()
        let tasks=newData.tasks
        tasks=tasks.filter(val=>val.id!=id)
        newData.tasks=tasks
        await setDoc(docRef,newData)
        res.status(200).json({success:true})
}