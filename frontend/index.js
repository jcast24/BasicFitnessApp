// submit the form
document.getElementById("dataForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const role = document.getElementById("role").value;

    const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname, lastname, role }),
    });

    const result = await response.json();
    alert(result.message || result.error);
});

// Load all users
document.getElementById("loadUsers").addEventListener("click", async () => {
    const res = await fetch("http://localhost:3000/users");
    const users = await res.json();


    const userList = document.getElementById("userList");
    userList.innerHTML = "";

    users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = `${user.firstname} ${user.lastname} ${user.role}`;
        userList.appendChild(li);
    });
});
