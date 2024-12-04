const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
    fs.writeFile("index.json", JSON.stringify(req.body), "utf-8", (err) => {
        if (err) {
            // Send failure.html with a 500 status code (Internal Server Error)
            res.status(500).sendFile(path.join(__dirname, "failure.html"));
        } else {
            // Send success.html with a 200 status code (OK)
            res.status(200).sendFile(path.join(__dirname, "success.html"));
        }
    });
});

const port = 3007;
app.listen(port, () => {
    console.log("Server is running at http://localhost:" + port);
});
