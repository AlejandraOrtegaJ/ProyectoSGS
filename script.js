const planetas = {
  Mercurio: 0.24,
  Venus: 0.62,
  Tierra: 1,
  Marte: 1.88,
  Júpiter: 11.86,
  Saturno: 29.46,
  Urano: 84.01,
  Neptuno: 164.8,
};

function calcularEdad() {
  const fechaNacimiento = document.getElementById("birthdate").value;
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = "";

  if (!fechaNacimiento) {
    alert("Por favor, escribe tu fecha de nacimiento.");
    return;
  }

  const edadTierra = obtenerEdadEnTierra(new Date(fechaNacimiento));
  
  for (let planeta in planetas) {
    const edad = (edadTierra / planetas[planeta]).toFixed(2);

    const div = document.createElement("div");
    div.className = "planet";

    const imagen = document.createElement("img");
    imagen.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/` + obtenerImagen(planeta);
    imagen.alt = planeta;

    const texto = document.createElement("p");
    texto.innerHTML = `<strong>${planeta}</strong><br>${edad} años`;

    div.appendChild(imagen);
    div.appendChild(texto);
    resultados.appendChild(div);
  }
}

function obtenerEdadEnTierra(nacimiento) {
  const hoy = new Date();
  const diff = hoy - nacimiento;
  const edad = diff / (1000 * 60 * 60 * 24 * 365.25);
  return edad;
}

function obtenerImagen(planeta) {
  const imagenes = {
    Mercurio: "4/4a/Mercury_in_true_color.jpg/320px-Mercury_in_true_color.jpg",
    Venus: "e/e5/Venus-real_color.jpg/240px-Venus-real_color.jpg",
    Tierra: "9/97/The_Earth_seen_from_Apollo_17.jpg/240px-The_Earth_seen_from_Apollo_17.jpg",
    Marte: "0/02/OSIRIS_Mars_true_color.jpg/240px-OSIRIS_Mars_true_color.jpg",
    Júpiter: "e/e2/Jupiter.jpg/240px-Jupiter.jpg",
    Saturno: "c/c7/Saturn_during_Equinox.jpg/240px-Saturn_during_Equinox.jpg",
    Urano: "3/3d/Uranus2.jpg/240px-Uranus2.jpg",
    Neptuno: "5/56/Neptune_Full.jpg/240px-Neptune_Full.jpg",
  };
  return imagenes[planeta];
}
