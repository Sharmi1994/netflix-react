const express = require("express");
require("dotenv").config();
const app = express();

const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3002",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello world");
});

function validateJson(fname, lname) {
  if (!fname || typeof fname !== "string") {
    return {
      isValid: false,
      message: "fname is incorrect",
    };
  }
  if (!lname || typeof lname !== "string") {
    return {
      isValid: false,
      message: "lname is incorrect",
    };
  }
}

async function insertIntoDb(fname, lname, Password2) {
  const uri = process.env.MongoURI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    //connected to mongoDB
    await client.connect();

    const database = client.db("NetflixDB");
    const collection = database.collection("customers");
    const result = await collection.insertOne({ fname, lname, Password2 });
    return {
      inserted: true,
      result,
    };
  } catch (error) {
    console.log(error);
    return {
      inserted: false,
      error: error,
    };
  } finally {
    await client.close();
  }
}

app.post("/", async function (req, res) {
  const { fname, lname, Password2 } = req.body;

  try {
    const validate = validateJson(fname, lname);
    if (validate.isValid) {
      const insertop = await insertIntoDb(fname, lname, Password2);
      if (insertop.inserted) {
        res.json(insertop.result);
      } else {
        res.status(500).send(insertop.error);
      }
    } else {
      res.send(validate.message);
    }
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(8082, function () {
  console.log("server up and running in 8082");
});
