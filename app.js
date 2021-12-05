// ----- ARRAY FOR USERS ----- //
let userArr = [
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
];

render();
console.log(userArr);

function render() {
    // ----- GET IF ONLINE IS TRUE OR NULL ----- /
    let online = JSON.parse(localStorage.getItem("isOnline"));

    if (online == null) {
        // ----- CREATE LOG IN FORM ----- //
        let userField = document.createElement("input");
        loginForm.appendChild(userField);
        userField.setAttribute("id", "username");
        userField.setAttribute("type", "text");
        userField.setAttribute("placeholder", "janne");


        let passField = document.createElement("input");
        loginForm.appendChild(passField);
        passField.setAttribute("id", "password");
        passField.setAttribute("type", "text");
        passField.setAttribute("placeholder", "test");

        let loginBtn = document.createElement("button");
        loginForm.appendChild(loginBtn);
        loginBtn.setAttribute("id", "loginBtn");
        loginBtn.innerHTML = "Log in";

        // ----- LOG IN ----- //
        // ----- PREVENT DEFAULT TO RELOAD FORM ON CLICK----- //
        loginBtn.addEventListener("click", function (e) {
            e.preventDefault();
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            for (i = 0; i < userArr.length; i++) {
                if (username == userArr[i].username && password == userArr[i].password) {
                    // ----- TO SET WHICH USER IS ONLINE ----- //
                    let loggedIn = true;
                    localStorage.setItem("onlineUser", JSON.stringify(username));

                    localStorage.setItem("isOnline", JSON.stringify(loggedIn));
                    location.reload();

                } else {
                    result.innerHTML = "Incorrect username or password";
                    console.log("Incorrect username or password");
                }
            }

            // ----- CLEAR INPUT ----- /
            userField.value = "";
            passField.value = "";
        });

        // ----- NEW USER ----- //
        let newUserField = document.createElement("input");
        newForm.appendChild(newUserField);
        newUserField.setAttribute("id", "newUsername");
        newUserField.setAttribute("type", "text");
        newUserField.setAttribute("placeholder", "New username");

        let newPassField = document.createElement("input");
        newForm.appendChild(newPassField);
        newPassField.setAttribute("id", "newPassword");
        newPassField.setAttribute("type", "text");
        newPassField.setAttribute("placeholder", "New password");

        let newBtn = document.createElement("button");
        newForm.appendChild(newBtn);
        newBtn.setAttribute("id", "newBtn");
        newBtn.innerHTML = "Sign up";

        // ----- ADD NEW USER ----- //
        newBtn.addEventListener("click", function (e) {
            e.preventDefault();
            let newUsername = document.getElementById("newUsername").value;
            let newPassword = document.getElementById("newPassword").value;

            userArr.push({
                username: newUsername,
                password: newPassword

            });

            localStorage.setItem("userArr", JSON.stringify(userArr));

            // ----- CLEAR INPUT ----- /
            newUserField.value = "";
            newPassField.value = "";

            result.innerHTML = "Welcome " + newUsername + " you are now a member, please log in";
            console.log(userArr);

        });
    }

    if (online == true) {
        // ----- CREATE LOGOUT BUTTON ----- //
        let logoutBtn = document.createElement("button");
        loginForm.appendChild(logoutBtn);
        logoutBtn.setAttribute("id", "logoutBtn");
        logoutBtn.innerText = "Log out";

        let onlineUser = JSON.parse(localStorage.getItem("onlineUser"));

        result.innerHTML = "Welcome " + onlineUser + " you are online";

        // ----- LOG OUT ----- //
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("isOnline");
            localStorage.removeItem("onlineUser");
        })
    }
}
