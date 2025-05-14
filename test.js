const { getAllUsers, insertUser, deleteUser, updateUser } = require("./Models/userModel.js");

// insert a user
insertUser("Steve", "Jon-Abiel", "Student").then((result) => {
    if (result) {
        console.log("User has been successfully added to db");
    }
});

// Show all users
/* const rows = getAllUsers();
rows.then((result) => {
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
});  */

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
