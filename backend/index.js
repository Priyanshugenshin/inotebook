const connectToMongoose =  require("./db")
const express = require("express")
const app = express()

connectToMongoose()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.listen(6000,()=>{
    console.log("server is started at port 6000")
})
