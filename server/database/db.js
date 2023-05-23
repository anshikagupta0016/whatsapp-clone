import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME= process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD;


const Connection=async()=>{
    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-u0luetb-shard-00-00.jjcybzn.mongodb.net:27017,ac-u0luetb-shard-00-01.jjcybzn.mongodb.net:27017,ac-u0luetb-shard-00-02.jjcybzn.mongodb.net:27017/?ssl=true&replicaSet=atlas-113kl1-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology:true});
        console.log("DB connected successfully");
    }catch(error){
        console.log("error connecting to DB ", error.message);
    }
}

export default Connection;