const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const mongo = require("../Project3/mongo");
const func = require("../Project3/function");
dotenv.config();

//connect to db
mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true, useNEWUrlParser: true },
    () => console.log("connected to DB")
)
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");

})
app.post("/", function (req, res) {
    const url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,USDT,BUSD,BNB,DOGE&tsyms=USDT,INR,BTC";
    https.get(url, function (response) {
        response.on("data", function (data) {
            const cryptoData = JSON.parse(data);
            const FROMSYMBOL = cryptoData.RAW.BTC.USDT.FROMSYMBOL;
            // res.write("<h1>FROM SYMBOL : <h1>" + FROMSYMBOL);
            // res.send()
            const TOSYMBOL = cryptoData.RAW.BTC.USDT.TOSYMBOL;
            const PRICE = cryptoDataRAW.BTC.USDT.PRICE;

            func.saveCrypto(FROMSYMBOL, TOSYMBOL, PRICE);

        })
    })
});

app.listen(3000, function () {
    console.log("Server is runing on port 3000");
})