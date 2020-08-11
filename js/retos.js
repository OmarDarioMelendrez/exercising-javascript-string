// Reto 1 Pide a tu usuario que ingrese el nombre de su curso favorito, obtén la longitud de ese string y muéstralo en pantalla.

const retoUnoInputA = document.getElementById("reto-1-input-a");
const retoUnoContenedor = document.getElementById("reto-1-resultado");

const retoUno = () => {
  let curso = retoUnoInputA.value.length;
  retoUnoContenedor.textContent = `El curso que deseas realizar tiene ${curso} letras.`;
  retoUnoContenedor.setAttribute("class", "reto-resultado");
};

// Reto 2 Crea un programa en el que le pidas en 3 variables distintas: nombre, apellido y comida favorita. Como salida mostrarás el mensaje Hola, mi nombres es {nombre} {apellido} y mi comida favorita es {comida} en un solo string.

const retoDosInputA = document.getElementById("reto-2-input-a");
const retoDosInputB = document.getElementById("reto-2-input-b");
const retoDosInputC = document.getElementById("reto-2-input-c");
const retoDosContenedor = document.getElementById("reto-2-resultado");

const retoDos = () => {
  let nombre = retoDosInputA.value;
  let apellido = retoDosInputB.value;
  let comida = retoDosInputC.value;
  retoDosContenedor.textContent = `Hola, mi nombre es ${nombre} ${apellido} y mi comida favorita es ${comida}`;
  retoDosContenedor.setAttribute("class", "reto-resultado");
};

// Reto 3 Ahora, pedirás a tu usuario que ingrese su nombre, apellido y país de origen en minúsculas. Después mostrarás los datos de salida con mayúscula inicial al tratarse de nombres propios.

const retoTresInputA = document.getElementById("reto-3-input-a");
const retoTresInputB = document.getElementById("reto-3-input-b");
const retoTresContenedor = document.getElementById("reto-3-resultado");

const retoTres = () => {
  let nombre = retoTresInputA.value;
  let apellido = retoTresInputB.value;
  let nombreSalida = nombre[0].toUpperCase() + nombre.slice(1);
  let apellidoSalida = apellido[0].toUpperCase() + apellido.slice(1);
  retoTresContenedor.textContent = `Hola, mi nombre es ${nombreSalida} ${apellidoSalida}`;
  retoTresContenedor.setAttribute("class", "reto-resultado");
};

// Reto 4 Solicita a tu usuario que indique una oración de 10 o más caracteres, la línea de un poema o canción funcioona excelente. Calcula la longitud del string, pide un número de rango inicial y final que esté entre la longitud del string para al final mostrar el fragmento que incluya los caracteres en ese intervalo.

const retoCuatroInputA = document.getElementById("reto-4-input-a");
const retoCuatroInputB = document.getElementById("reto-4-input-b");
const retoCuatroInputC = document.getElementById("reto-4-input-c");
const retoCuatroContenedor = document.getElementById("reto-4-resultado");

const retoCuatro = () => {
  let texto = retoCuatroInputA.value;
  let inicioCorte = parseInt(retoCuatroInputB.value - 1);
  let finCorte = parseInt(retoCuatroInputC.value);
  let textoSalida = texto.slice(inicioCorte, finCorte);
  retoCuatroContenedor.textContent = `${textoSalida}`;
  retoCuatroContenedor.setAttribute("class", "reto-resultado");
}

// Reto 5 Ahora, pedirás a tu usuario que ingrese su nombre, apellido y país de origen en minúsculas. Después mostrarás los datos de salida con mayúscula inicial al tratarse de nombres propios.

const retoCincoInputA = document.getElementById("reto-5-input-a");
const retoCincoInputB = document.getElementById("reto-5-input-b");
const retoCincoContenedor = document.getElementById("reto-5-resultado");

const retoCinco = () => {
  let palabra1 = retoCincoInputA.value;
  let palabra2 = retoCincoInputB.value;
  let palabra1Salida = palabra1.toLowerCase();
  let palabra2Salida = palabra2.toUpperCase();
  retoCincoContenedor.textContent = `Primer palabra: ${palabra1Salida}, segunda palabra: ${palabra2Salida}.`;
  retoCincoContenedor.setAttribute("class", "reto-resultado");
};

// Reto 6 Ya sabemos trabajar con nombres ¿pero qué pasa si cumple ciertas cualidades? Tu usuario ingresará su nombre, si tiene una longitud mayor a 5 caracteres mostrarás un saludo con su nombre en pantalla. Si tiene menos de 5 caracteres, pedirás su apellido, mostrarás el saludo con nombre y apellido. En ambos casos deberás mostrarlos con mayúscula inicial.

const retoSeisInputA = document.getElementById("reto-6-input-a");
const retoSeisInputB = document.getElementById("reto-6-input-b");
const retoSeisContenedor = document.getElementById("reto-6-resultado");

const retoSeis = () => {
  let nombre = retoSeisInputA.value;
  let apellido = retoSeisInputB.value;
  if(nombre.length > 5){
    let nombreSalida = nombre[0].toUpperCase() + nombre.slice(1);
    retoSeisContenedor.textContent = `Hola ${nombreSalida}, un gusto.`;
    retoSeisContenedor.setAttribute("class", "reto-resultado");
  }else{
    let nombreSalida = nombre[0].toUpperCase() + nombre.slice(1);
    let apellidoSalida = apellido[0].toUpperCase() + apellido.slice(1);
    retoSeisContenedor.textContent = `Hola ${nombreSalida} ${apellidoSalida}, un gusto.`;
    retoSeisContenedor.setAttribute("class", "reto-resultado");
  }
};

// Reto 7 Puerco Latin

const retoSieteInputA = document.getElementById("reto-7-input-a");
const retoSieteContenedor = document.getElementById("reto-7-resultado");

const retoSiete = () => {
  let palabra = retoSieteInputA.value.toLowerCase();
  let primeraLetra = palabra[0];
  let vocales = ['a', 'e', 'i', 'o', 'u'];

  const siEsVocal = vocales.find(vocal => primeraLetra === vocal);

  if(siEsVocal === primeraLetra){
    retoSieteContenedor.textContent = `${palabra.charAt(0).toUpperCase()}${palabra.slice(1)}way`;
    retoSieteContenedor.setAttribute("class", "reto-resultado");
  }else{
    retoSieteContenedor.textContent = `${palabra.charAt(1).toUpperCase()}${palabra.slice(2)}${palabra.charAt(0)}ay`;
    retoSieteContenedor.setAttribute("class", "reto-resultado");
  }
};