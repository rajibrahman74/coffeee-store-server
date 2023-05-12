const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


// coffeeeMaster
// lJ3h1wLRXnYUYZKD



// const uri = "mongodb+srv://<username>:<password>@cluster0.tcsk2jo.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb+srv://coffeeeMaster:lJ3h1wLRXnYUYZKD@cluster0.tcsk2jo.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);







// root
app.get("/", (req, res) => {
  res.send("coffe making server is running");
});

app.listen(port, () => {
  console.log(`COFFEEE SERVER IS RUNNING ON PORT ${port}`);
});