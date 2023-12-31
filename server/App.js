import express from "express"
import dotenv from "dotenv"
import cors from "cors"


import registerRouter from "./routes/resisterRoute.js"
import loginRouter from "./routes/loginRoute.js"
import funRouter from "./routes/functionality.js"
dotenv.config()
const app=express()
app.use(express.json())
app.use(cors())


const PORT=process.env.PORT
app.use("/register",registerRouter)
app.use("/login",loginRouter)
app.use("/user",funRouter)

app.listen(PORT,()=>console.log(`Listerning at port ${PORT}`))
