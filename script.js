// Load data when page opens
window.onload = function() {
    loadConcerns();
};

// LOGIN (simple check)
function login() {
    let username = document.querySelector("input[type='text']").value;
    let password = document.querySelector("input[type='password']").value;

    if(username && password){
        localStorage.setItem("user", username);
        window.location.href = "dashboard.html";
    } else {
        alert("Please enter login details");
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
}

// SUBMIT CONCERN
function submitConcern() {
    let text = document.getElementById("concern").value;

    if(text === ""){
        alert("Please enter a concern");
        return;
    }

    let concerns = JSON.parse(localStorage.getItem("concerns")) || [];

    let newConcern = {
        text: text,
        status: "Pending"
    };

    concerns.push(newConcern);
    localStorage.setItem("concerns", JSON.stringify(concerns));

    document.getElementById("concern").value = "";
    loadConcerns();
}

// LOAD CONCERNS
function loadConcerns() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    let concerns = JSON.parse(localStorage.getItem("concerns")) || [];

    concerns.forEach((item, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            ${item.text} - <b>${item.status}</b>
            <br>
            <button onclick="markResolved(${index})">Resolve</button>
            <button onclick="deleteConcern(${index})">Delete</button>
        `;

        list.appendChild(li);
    });
}

// MARK AS RESOLVED
function markResolved(index) {
    let concerns = JSON.parse(localStorage.getItem("concerns"));

    concerns[index].status = "Resolved";
    localStorage.setItem("concerns", JSON.stringify(concerns));

    loadConcerns();
}

// DELETE
function deleteConcern(index) {
    let concerns = JSON.parse(localStorage.getItem("concerns"));

    concerns.splice(index, 1);
    localStorage.setItem("concerns", JSON.stringify(concerns));

    loadConcerns();
}
