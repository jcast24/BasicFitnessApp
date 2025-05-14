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


