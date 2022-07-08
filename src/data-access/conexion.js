import { config } from "dotenv";
import mongoose from 'mongoose';
const { connect } = mongoose
config();

const makeConnection = async() => {

    try {
        connect(process.env.DB_CN);
        
        console.log('DB is connected');

    } catch(e) {
        console.log(e)
        throw new Error('Error connecting to database');
    }

};

export {
    makeConnection
};