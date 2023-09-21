const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
var cors = require("cors");

var corsOptions = {
    origin: "http://localhost",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors());

let items = JSON.parse(fs.readFileSync("items.json"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/items", (req, res) => {
    res.send(JSON.stringify(items || "{}"));
});

app.get("/items/:item", function (req, res) {
    res.send(items[req?.params?.item || ""]?.toString() || 0);
});

app.put("/items/:item", function (req, res) {
    try {
        let item = req.params.item;
        console.log("Item added");
        if ((items[item] < 10 && item !== "Bags") || (items[item] < 5 && item === "Bags")) {
            items = { ...items, [item]: items[item] + 1 };
            fs.writeFileSync("items.json", JSON.stringify(items));
            res.send("Item added to inventory");
        }
    } catch (e) {
        res.send(e.toString());
    }
});

app.delete("/items/:item", function (req, res) {
    try {
        let item = req.params.item;
        console.log("Item bought/removed");
        if (items[item] && items[item] > 0) {
            items = { ...items, [item]: items[item] - 1 };
            fs.writeFileSync("items.json", JSON.stringify(items));
            res.send("Item removed / bought");
        }
        res.send("Item not available");
    } catch (e) {
        res.send(e.toString());
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
