const button = document.getElementById("snapBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  document.body.classList.remove("snapped");
  void document.body.offsetWidth;
  document.body.classList.add("snapped");

  message.textContent = "I AM INEVITABLE.";
  button.textContent = "DONE";

  setTimeout(() => {
    button.textContent = "SNAP";
    message.textContent = "";
  }, 2200);
});
