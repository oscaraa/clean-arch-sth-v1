import { MongoClient } from 'mongodb';

const url = process.env.DB_URL;
const dbName = process.env.DB_NAME;
const client = new MongoClient(url, { useNewUrlParser: true });


export async function makeConnection() {
    if(!client.isConnected()) {
        await client.connect();
    }
    
    return client.db(dbName);
}