
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database='student'

async function dbconnect()
{
  let result=await client.connect();
  let db=result.db(database)
  return db.collection('record');
}

module.exports=dbconnect
