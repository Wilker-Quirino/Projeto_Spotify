import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://admin:WqS319847021994@cluster0.628mtkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("projetoSpotify");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
