let roleta = document.querySelector(".roleta");
let btn = document.querySelector(".btn-roleta");
let roletaCor = document.querySelectorAll(".premio:nth-child(odd)");
let genero = document.querySelector("#genero");
let valor = Math.ceil(Math.random() * 3600);

btn.onclick = () => {
  roleta.style.transform = "rotate(" + valor + "deg)";
  valor += Math.ceil(Math.random() * 3600);
};

genero.addEventListener("click", () => {
  roletaCor.forEach((c) => {
    if (genero.options[genero.selectedIndex].value === "o") {
      c.style.backgroundColor = "blue";
    } else {
      c.style.backgroundColor = "red";
    }
  });
});
