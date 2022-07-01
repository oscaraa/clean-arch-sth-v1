// import { MongoClient } from 'mongodb';

// const url = "mongodb+srv://mern_user:Correodalaz95@cluster0.4iktetx.mongodb.net/mern_calendar";
// const dbName = process.env.DB_NAME;
// const client = new MongoClient(url);


// export async function makeConnection() {
//     console.log(client);
//     // if(!client.isConnected()) {
//     //     await client.connect();
//     // }
    
//     return client.db("STH");
// }
import { config } from "dotenv";
import mongoose from 'mongoose';
const { connect } = mongoose
config();

const makeConnection = async() => {

    try {
        await connect(process.env.DB_CN);
        
        console.log('DB is connected');

    } catch(e) {
        console.log(e)
        throw new Error('Error connecting to database');
    }

};

export {
    makeConnection
};