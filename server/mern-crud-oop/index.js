const express=require('express')
 const mongoose=require('mongoose') 
const {MongoClient}=require('mongodb')
const cors=require('cors')
const bodyparser=require('body-parser')
const employeeRoutes = require('./Routes')

const app =express();
app.use(cors())
app.use(bodyparser.json())
app.use('/api',employeeRoutes)

 mongoose.connect('mongodb://127.0.0.1:27017/Employee')
.then(()=>{
    console.log('database connected');
    
}).catch((err)=>{
    console.log(err,'error in connecting database');

}) 

   /*  class Mongodb{
        constructor(){
            const connectionString='mongodb://127.0.0.1:27017/Employee'
            this.Client =new MongoClient(connectionString)
            this.db=null;
        }
        async connect(){
            if(!this.db){
                try{
                this.Client.connect();
                console.log("connected to mongodb");
                
                }catch(error){
                    console.log("failed to connect mongodb",error);
                    throw error
                    
                }
                
            }
            return this.db;
        }
        
    }
    const MongoInstance=new Mongodb();
    */
    
    


app.listen(3001,()=>{
console.log("server running on port 3001");

})