const express = require ("express");
require("dotenv").config();
const app= express();

const bodyParser=require ("body-parser");
const {MongoClient}=require("mongodb");
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3002', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());




app.get("/",function(req,res){
    res.send("Hello world");
})

app.post("/", async function(req,res){

   const {fname,lname}=req.body; 
    //connected to mongoDB
const uri = process.env.MongoURI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
try {
 
    await client.connect();

    const database = client.db('NetflixDB');
    const collection = database.collection('customers');
   
    const result = await collection.insertOne({ fname, lname });
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal server error');
  } finally {
    await client.close();
  }
})

app.listen(8082,function(){
    console.log("server up and running in 8082");
})