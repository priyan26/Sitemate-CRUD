const express = require("express")
const mongoose = require("mongoose")

const issuesRoute = require("./routes/issues")

const mongoDbUrl = "mongodb+srv://pabeyasekare:4DowoNk5uAEkUSd9@cluster0.yuhmoig.mongodb.net/"

const app =  express()

mongoose.connect(mongoDbUrl,{useNewUrlParser:true})

const connection = mongoose.connection

connection.on("open", function(){
    console.log("connected to mongodb")
})

app.use(express.json())

app.use("/issues",issuesRoute)

app.listen(9000, function(){
    console.log("Server running in port 9000")
})