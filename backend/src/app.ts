
//All th application code will be here 
import express from "express";
import {config} from  "dotenv";

config();
const app = express();



//middleware
app.use(express.json());
//connections and listeners

//app.listen(5000,()=>console.log("server listening on port"));
 
export default app;