let express = require("express");
let app = express()
let fs = require("fs");
let cors = require("cors");
app.use(cors());
app.get("/",(req,res)=>{
    fs.readFile('./index.json',"utf-8",(err,data)=>{
        if(err){
            res.send(err.message);
        }
        else{
            console.log(JSON.parse(data));
            res.send(JSON.parse(data));
        }
    })

});
let port = 3002;
app.listen(port,()=>{
    console.log(`server has started http://localhost:${port}`);
})
