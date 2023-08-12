const div = document.getElementsByTagName("div")[0];
const btn = document.getElementsByTagName("button")[0];

div.addEventListener("click", () => {
  alert("Hola! soy el div");
});

btn.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("Hola!");
});
