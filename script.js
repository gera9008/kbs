document.addEventListener("DOMContentLoaded", () => {
  const helloElement = document.getElementById("hello");

  setTimeout(() => {
    helloElement.classList.add("visible");
  }, 500);
});
