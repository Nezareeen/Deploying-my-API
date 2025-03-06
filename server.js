const express = require("express");

const app = express();

app.get("/black",(request,response)=>{
    try{
        response.status(200).send({msg:"White"});
    }
    catch (error) {
        console.log("Server not loaded",error);
        response.status(500).send({msg:"Something went wrong"});
    }
});

app.listen(8080,()=>{
    console.log("Server connected successflly");
})