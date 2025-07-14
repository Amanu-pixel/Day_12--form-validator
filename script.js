const form = document.getElementById("signup-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous messages
  clearErrors();

  // Simple validation
  if (username.value.trim() === "") {
    showError(username, "Username is required");
  }

  if (email.value.trim() === "") {
    showError(email, "Email is required");
  } else if (!email.value.includes("@")) {
    showError(email, "Enter a valid email");
  }

  if (password.value.trim() === "") {
    showError(password, "Password is required");
  } else if (password.value.length < 6) {
    showError(password, "Password must
