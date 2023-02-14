const express = require("express");
const logger = require("morgan");
const app = express();
const RedisClient = require("./config/connectRedis");

const PORT = 1338;

app.use(express.json());
app.use(logger("dev"));

app.listen(PORT, () => {
    console.log("server is running")
    RedisClient.connect()
    .then(() => {
        console.log("Connected to redis")
    })
    .catch((e) => {
        console.error(e);
    })
});