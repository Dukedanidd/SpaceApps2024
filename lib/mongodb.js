// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Usar variables de entorno para la URI
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
    // En desarrollo, usar MongoClient directamente
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // En producción, usar MongoClient normalmente
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;
