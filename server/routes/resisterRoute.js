import express from "express"
import { register } from "../controllers/register.js"
const router=express.Router()

router.route("/").post(register)

export default router
