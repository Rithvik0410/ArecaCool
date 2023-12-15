document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("error-message").textContent = "Invalid username or password";

    window.location.href = "image-page.html";
});
