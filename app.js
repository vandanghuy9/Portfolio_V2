const express = require('express');
const app = express();

const message = require("./router");
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));

app.use('/api/message',message); // provide the base api

app.all('*',(req,res)=>{
    return res.status(404).send("404 Not Found");
})
app.listen(port,function(){
    console.log("Server is running");
});