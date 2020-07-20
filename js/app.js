const checkbox = document.getElementById("checkbox");

if (window.matchMedia("(prefers-color-scheme)").matches) {
  checkbox.setAttribute("checked", true);
}

checkbox.addEventListener("change", function (event) {
  document.body.classList.toggle("is-dark-mode");
});
