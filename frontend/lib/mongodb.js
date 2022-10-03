import { MongoClient } from 'mongodb';

let cached = global.mongo
if (!cached) cached = global.mongo = {}

export async function connectToDatabase() {
    if (cached.conn) return cached.conn
    if(!cached.promise) {
      const conn = {}
      const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
      cached.promise = MongoClient.connect('mongodb+srv://gorgey:gorgey@cluster0.syfog.mongodb.net/sample_posts?retryWrites=true&w=majority', opts)
        .then((client) => {
          conn.client = client
          return client.db('sample_posts')
        })
        .then((db)=>{
          conn.db = db
          cached.conn = conn
        })
    }
    await cached.promise
    return cached.conn
}