const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

router.post('/Signup', async (req, res) => {
  const { fname,lname } = req.body;

  console.log(req.body);

  const uri = 'mongodb+srv://sharmi:sharmi@cluster0.ewiwycg.mongodb.net/NetflixDB';
  const client = new MongoClient(uri);

  try {
    await client.connect();
 console.log("connected to the server successfully");
    const database = client.db('NetflixDB');
    const collection = database.collection('samplecollection');

    const result = await collection.insertOne({ fname,lname });
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal server error');
  } finally {
    await client.close();
  }
});

module.exports = router;
