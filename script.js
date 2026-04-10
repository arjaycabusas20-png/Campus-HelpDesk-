function login() {
    window.location.href = "dashboard.html";
}

function submitConcern() {
    let text = document.querySelector("textarea").value;
    let list = document.getElementById("list");

    let li = document.createElement("li");
    li.textContent = text;

    list.appendChild(li);
}
