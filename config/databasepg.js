require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

module.exports = pool;

/* insertUser("Rick", "Dalton", "Admin").then((result) => {
    if (result) {
        console.log("Added.");
    }
}); */


// This will be used in the service file
/* deleteUser("Ash").then((result) => {
    if (result) {
        console.log("User deleted.");
    }
}); */

/* updateUser("Rick", "student").then((result) => {
    if (result) {
        console.log("User updated!");
    }
}); */
