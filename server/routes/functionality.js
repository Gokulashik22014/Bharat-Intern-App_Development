import express from "express"
import {getUser,addTask,getTask,editTask,deleteTask,getAllTask, checked} from "../controllers/functionality.js"
const router=express.Router()

router.route("/getuser").get(getUser)
router.route("/addtask").post(addTask)
router.route("/gettask/:id").get(getTask)
router.route("/getalltask").get(getAllTask)
router.route("/edittask/:id").post(editTask)
router.route("/deletetask/:id").post(deleteTask)
router.route("/checked").post(checked)

export default router
