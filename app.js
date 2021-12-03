var objPeople = [
    {
        username: "janne",
        password: "test"
    },
    {
        username: "nathalie",
        password: "test",
    },
    {
        username: "a",
        password: "a",
    },

]


let userField = document.getElementById("username");
let passField = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");


loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    console.log("You're username: " + username + " Your password is: " + password);

    for (i = 0; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password) {
            userField.style.display = "none";
            passField.style.display = "none";
            loginBtn.style.display = "none";


            let logoutBtn = document.createElement("button");
            logoutBtn.innerHTML = "Log out"
            document.body.appendChild(logoutBtn);
            logoutBtn.id = "logoutBtn";

            result.innerHTML = "Welcome " + username
            console.log(username + " is logged in");


            logoutBtn.addEventListener("click", (e) => {
                e.preventDefault();
                logoutBtn.style.display = "none";
                userField.style.display = "initial";
                passField.style.display = "initial";
                loginBtn.style.display = "initial";

                result.innerHTML = "Welcome to login "

            })

            return;
        }
    }
    result.innerHTML = "Incorrect username or password";
    console.log("Incorrect username or password");
});

