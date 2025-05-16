const pool = require("./config/databasepg.js");

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello!");
});

app.post("/submit", async (req, res) => {
    const { firstname, lastname, role } = req.body;
    try {
        await pool.query(
            "INSERT INTO users(firstname, lastname, role) VALUES ($1, $2, $3)",
            [firstname, lastname, role],
        );
        res.status(200).json({ message: "Successfully added into DB" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error." });
    }
});

app.get("/users", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users");
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
