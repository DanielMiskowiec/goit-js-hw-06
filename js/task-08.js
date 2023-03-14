const emailElement = document.querySelector(".login-form");
emailElement.addEventListener("submit", emailElementSubmit);

function emailElementSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fiellds!");
    }

    const userAccount = { email: email.value, password: password.value };
    console.log("userAccount", userAccount);

    event.currentTarget.reset();
}
