import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import morgan from "morgan"
import fetch from "node-fetch"

const app = express()
app.use(morgan.dev())

const PORT = process.env.PORT || 8080

app.get('/token',async(req,res)=>{
    const res = await fetch('')
})

app.listen(PORT, ()=>{
    console.log(`listening on https://localhost:${PORT}/`)
})