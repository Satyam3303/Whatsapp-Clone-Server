import mongoose from "mongoose";

import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD

const Connection = async()=>{
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@whatsapp-clone.typhz4d.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true});
        console.log("Databse connected");
    }
    catch(error){
        console.log(`Databse not connected ${error.message}`);
    }
}

export default Connection;