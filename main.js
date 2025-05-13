const {
    getAllUsers,
    insertUser,
    deleteUser,
    updateUser,
} = require("./Models/userModel.js");

// Show all users
/* let rows = getAllUsers();

rows.then((result) => {
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
});  */

// insert a user
/* insertUser("John", "Chena", "Student").then((result) => {
    if (result) {
        console.log("User has been successfully added to db");
    }
}); */

// delete a user
/* deleteUser("John").then((result) => {
    if(result) {
        console.log("User deleted");
    }
}); */

// update a user
/* updateUser("Rick", "admin").then((result) => {
    if (result) {
        console.log("User has been updated!");
    }
}); */
