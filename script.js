
// Crear fondo con corazones flotando
const fondo = document.createElement("div");
fondo.classList.add("fondo-corazones");
document.body.appendChild(fondo);

for (let i = 0; i < 30; i++) {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");

  // posición aleatoria horizontal
  corazon.style.left = Math.random() * 100 + "vw";

  // posición inicial abajo
  corazon.style.bottom = "0";

  // duración y retraso aleatorio
  corazon.style.animationDelay = Math.random() * 5 + "s";
  corazon.style.animationDuration = 5 + Math.random() * 5 + "s";

  fondo.appendChild(corazon);
}
