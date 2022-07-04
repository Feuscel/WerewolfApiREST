require('dotenv').config()
var express = require("express");
var app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@werewolfgame.pkrai.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  console.log("mongodb connected",err);
  client.close();
});

var server = app.listen(3000, () => {
    console.log(`Server is running on : http://localhost:${server.address().port}`);

});
app.use(express.static(__dirname));