async function logout() {
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });
  console.log("hello");
  document.location.replace("/");
}

document.querySelector("#logout-button").addEventListener("click", logout);
