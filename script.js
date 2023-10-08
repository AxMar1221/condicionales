// Función para calcular Página Verdadero o Falso
function calcularVerdaderoFalso() {
  const esMayorDeEdad = document.getElementById("esMayorDeEdad").checked;
  const tienePermiso = document.getElementById("tienePermiso").checked;

  const resultado = `
                <p>Es mayor de edad es: ${esMayorDeEdad}</p>
                <p>Tiene permiso es: ${tienePermiso}</p>
            `;

  document.getElementById("paginaVerdaderoFalso").innerHTML = resultado;
}

// Función para calcular Página Comparación
function calcularComparacion() {
  const x = parseFloat(document.getElementById("x").value);
  const y = parseFloat(document.getElementById("y").value);

  const resultado = `
                <p>x === y: ${x === y}</p>
                <p>x !== y: ${x !== y}</p>
                <p>x > y: ${x > y}</p>
                <p>x < y: ${x < y}</p>
                <p>x >= y: ${x >= y}</p>
                <p>x <= y: ${x <= y}</p>
            `;

  document.getElementById("paginaComparacion").innerHTML = resultado;
}

// Función para calcular Página Operadores Lógicos
function calcularOperadoresLogicos() {
  const esEstudiante = document.getElementById("esEstudiante").checked;
  const esTrabajador = document.getElementById("esTrabajador").checked;

  const resultado = `
                <p>Estudiante && es trabajador es: ${
                  esEstudiante && esTrabajador
                }</p>
                <p>Estudiante || es trabajador es: ${
                  esEstudiante || esTrabajador
                }</p>
                <p>!Estudiante es: ${!esEstudiante}</p>
                <p>!Trabajador es: ${!esTrabajador}</p>
            `;

  document.getElementById("paginaOperadoresLogicos").innerHTML = resultado;
}

// Función para calcular Ejemplo Práctico
function calcularEjemploPractico() {
  const edad = parseFloat(document.getElementById("edad").value);
  const tienePermisoDeConducir = document.getElementById(
    "tienePermisoDeConducir"
  ).checked;
  let resultado = "";

  if (edad >= 18 && tienePermisoDeConducir) {
    resultado = "Puedes conducir un automóvil.";
  } else if (edad >= 16 && tienePermisoDeConducir) {
    resultado = "Puedes conducir un automóvil.";
  } else if (edad >= 18 || edad >= 16) {
    resultado = "Puedes conducir una moto.";
  } else {
    resultado = "No puedes conducir.";
  }

  document.getElementById("ejemploPractico").innerHTML = `<p>${resultado}</p>`;
}

let currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;
