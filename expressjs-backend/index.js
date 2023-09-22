const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");
var bodyParser = require("body-parser");

var corsOptions = {
    origin: "http://localhost",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

let items = { Apples: 10, Mangoes: 10, Oranges: 10, Bags: 5 };

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
        if (
            items[item] === null ||
            (items[item] < 10 && item !== "Bags") ||
            (items[item] < 5 && item === "Bags")
        ) {
            items = { ...items, [item]: items[item] + 1 };
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
            items = { ...items, [item]: items[item] > 1 ? items[item] - 1 : null };
            res.send("Item removed / bought");
        }
        res.send("Item not available");
    } catch (e) {
        res.send(e.toString());
    }
});

app.put("/items", function (req, res) {
    try {
        console.log("Items bought/removed");
        items = req.body;
        console.log(items);
        res.send(JSON.stringify(req.body));
    } catch (e) {
        res.send(e.toString());
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
