// contact list without using mongo db database
const express=require('express');
const app= express();
const port=3000;
const path=require('path');
const fs= require('fs');

app.get('/',function(req,res){
    fs.readFile('./home.html',function(err,data){
       if(err){console.log("error"); return;}
        return res.end(data);
    });
});


app.listen(port,function(req,res){
     console.log(`Listening at http://localhost:${port}`);
});