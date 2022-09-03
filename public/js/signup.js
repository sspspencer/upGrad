function signupEventHandler(event) {
  event.preventDefault();
}

document
  .querySelector("#signup-submit")
  .addEventListener("submit", signupEventHandler);
