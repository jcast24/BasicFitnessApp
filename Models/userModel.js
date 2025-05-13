const db = require("../config/databasepg.js");

const getAllUsers = async () => {
    try {
        await db.connect();
        const result = await db.query("SELECT * FROM users");
        return result.rows;
    } catch (error) {
        console.error(error.stack);
    }
}

const insertUser = async (firstName, lastName, role) => {
    try {
        await db.connect();
        const insertQuery =
            "INSERT INTO users(firstname, lastname, role) VALUES($1, $2, $3)";
        const values = [firstName, lastName, role];
        await db.query(insertQuery, values);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } 
};

const deleteUser = async (firstName) => {
    try {
        await db.connect();
        await db.query("DELETE From users WHERE firstname = $1", [
            firstName,
        ]);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } 
};

const updateUser = async (firstName, role) => {
    try {
        await db.connect();
        await db.query("UPDATE users SET role = $1 WHERE firstname = $2", [
            role,
            firstName,
        ]);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } 
};

module.exports = { insertUser, deleteUser, updateUser };
