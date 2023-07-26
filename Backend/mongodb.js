
const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://biswajit2329:T1voipAip4RSgv97@cluster0.fw5wwvc.mongodb.net/student?retryWrites=true&w=majority';
const client = new MongoClient(url);
const database='student'

async function dbconnect()
{
  let result=await client.connect();
  let db=result.db(database)
  return db.collection('record');
}

module.exports=dbconnect
