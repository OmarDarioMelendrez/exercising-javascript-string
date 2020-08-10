// Reto 1 El usuario debe ingresar dos números y nosotros le indicaremos si son iguales ó cual de los dos números es el mayor.

const retoUnoInputA = document.getElementById("reto-1-input-a");
const retoUnoInputB = document.getElementById("reto-1-input-b");
const retoUnoContenedor = document.getElementById("reto-1-resultado");

const retoUno = () => {
  let primerNum = parseInt(retoUnoInputA.value);
  let segundoNum = parseInt(retoUnoInputB.value);
  if (primerNum > segundoNum) {
    if (primerNum == segundoNum) {
      retoUnoContenedor.textContent = `Los dos números son iguales. `;
      retoUnoContenedor.setAttribute("class", "reto-resultado");
    } else {
      let diferencia = primerNum - segundoNum;
      retoUnoContenedor.textContent = `El número mayor de los dos es ${primerNum} y su diferencia es de ${diferencia} `;
      retoUnoContenedor.setAttribute("class", "reto-resultado");
    }
  } else {
    if (primerNum == segundoNum) {
      retoUnoContenedor.textContent = `Los dos números son iguales. `;
      retoUnoContenedor.setAttribute("class", "reto-resultado");
    } else {
      let diferencia = segundoNum - primerNum;
      retoUnoContenedor.textContent = `El número mayor de los dos es ${segundoNum} y su diferencia es de ${diferencia} `;
      retoUnoContenedor.setAttribute("class", "reto-resultado");
    }
  }
};

// Reto 2 Pide al usuario que indique 2 números: uno que servirá como límite y otro para comparar. Si el segundo número es menor al primero, mostrarás un mensaje diciendo “El número ‘x’ se encuentra en el rango, gracias” y en caso contrario dirá “El número ‘x’ excede el límite permitido”.

const retoDosInputA = document.getElementById("reto-2-input-a");
const retoDosInputB = document.getElementById("reto-2-input-b");
const retoDosContenedor = document.getElementById("reto-2-resultado");

const retoDos = () => {
  let primerNum = parseInt(retoDosInputA.value);
  let segundoNum = parseInt(retoDosInputB.value);
  if (primerNum > segundoNum) {
    retoDosContenedor.textContent = `El número ${segundoNum} se encuentra en el rango, gracias`;
    retoDosContenedor.setAttribute("class", "reto-resultado");
  } else {
    retoDosContenedor.textContent = `El número ${segundoNum} excede el límite permitido.`;
    retoDosContenedor.setAttribute("class", "reto-resultado");
  }
};

// Reto 3 indique 3 números: un límite superior, un límite inferior y uno de comparación. Si el número de comparación se encuentra entre los 2 primeros, comunicarlo en pantalla. En caso estar por debajo del límite inferior o por arriba del límite superior, también mostrarlo en pantalla.

const retoTresInputA = document.getElementById("reto-3-input-a");
const retoTresInputB = document.getElementById("reto-3-input-b");
const retoTresInputC = document.getElementById("reto-3-input-c");
const retoTresContenedor = document.getElementById("reto-3-resultado");

const retoTres = () => {
  let rangoSup = parseInt(retoTresInputA.value);
  let rangoInf = parseInt(retoTresInputB.value);
  let numero = parseInt(retoTresInputC.value);

  if (rangoSup > rangoInf) {
    if (numero < rangoSup && numero > rangoInf) {
      retoTresContenedor.textContent = `El número ingresado se encuentra dentro del rango.✅`;
      retoTresContenedor.setAttribute("class", "reto-resultado");
    } else if (numero > rangoSup) {
      retoTresContenedor.textContent = `El número ingresado es MAYOR que el rango.`;
      retoTresContenedor.setAttribute("class", "reto-resultado");
    } else {
      retoTresContenedor.textContent = `El número ingresado es MENOR que el rango.`;
      retoTresContenedor.setAttribute("class", "reto-resultado");
    }
  } else {
    retoTresContenedor.textContent = `El rango superior debe ser MAYOR que el rango inferior.`;
    retoTresContenedor.setAttribute("class", "reto-resultado");
  }
};

// Reto 4 Escribe un programa que pida al usuario ingrese su animal favorito, si coloca ‘Tortuga’, ‘tortuga’, ‘TORTUGA’ o cualquier otra variante de la palabra entonces mostrar en pantalla “También me gustan las tortugas”. En caso contrario mostrar el mensaje “Ese animal es genial, pero prefiero las tortugas”.

const retoCuatroInputA = document.getElementById("reto-4-input-a");
const retoCuatroContenedor = document.getElementById("reto-4-resultado");

const retoCuatro = () => {
  let animal = retoCuatroInputA.value.toLowerCase();
  if (animal == "tortuga") {
    retoCuatroContenedor.textContent = `También me gustan las Tortugas`;
    retoCuatroContenedor.setAttribute("class", "reto-resultado");
  } else {
    retoCuatroContenedor.textContent = `Lxs ${animal}s también son geniales, a mí me gustan las tortugas.`;
    retoCuatroContenedor.setAttribute("class", "reto-resultado");
  }
};

// Reto 5 Escribe un programa que pida al usuario ingrese su animal favorito, si coloca ‘Tortuga’, ‘tortuga’, ‘TORTUGA’ o cualquier otra variante de la palabra entonces mostrar en pantalla “También me gustan las tortugas”. En caso contrario mostrar el mensaje “Ese animal es genial, pero prefiero las tortugas”.

const retoCincoInputA = document.getElementById("reto-5-input-a");
const retoCincoInputB = document.getElementById("reto-5-input-b");
const retoCincoContenedor = document.getElementById("reto-5-resultado");

const retoCinco = () => {
  let llueve = retoCincoInputA.value.toLowerCase();
  let viento = retoCincoInputB.value.toLowerCase();
  if (llueve == "si") {
    if (viento == "si") {
      retoCincoContenedor.textContent =
      "Hace mucho viento para salir con una sombrilla";
      retoCincoContenedor.setAttribute("class", "reto-resultado");
    } else if (viento == "no") {
      retoCincoContenedor.textContent =
        "Creo que deberías llevar una sombrilla";
        retoCincoContenedor.setAttribute("class", "reto-resultado");
      } else {
      retoCincoContenedor.textContent =
      "ingresa un si ó no en la casilla de viento.";
      retoCincoContenedor.setAttribute("class", "reto-resultado");
    }
  } else if (llueve == "no") {
    retoCincoContenedor.textContent = "Que tengas un hermoso día!!";
    retoCincoContenedor.setAttribute("class", "reto-resultado");
  } else {
    retoCincoContenedor.textContent =
    "ingresa un si ó no en la casilla de lluvia.";
    retoCincoContenedor.setAttribute("class", "reto-resultado");
  }
};

// Reto 6 Pide al usuario que ingrese su edad y mostrarás un mensaje correspondiente si esta coincide con las siguientes condiciones: Más de 30 años: Nunca es tarde para aprender ¿Qué curso tomaremos? Entre 29 y 18 años: Es un momento excelente para impulsar tu carrera. Menos de 18 años: ¿Sabes hacia dónde dirigir tu futuro? Seguro puedo ayudarte.

const retoSeisInputA = document.getElementById("reto-6-input-a");
const retoSeisContenedor = document.getElementById("reto-6-resultado");

const retoSeis = () => {
  edad = parseInt(retoSeisInputA.value);
  if(edad > 30){
    retoSeisContenedor.textContent = `Nunca es tarde para aprender ¿Qué curso tomaremos?`;
    retoSeisContenedor.setAttribute("class", "reto-resultado");
  } else if(edad < 30 && edad > 17){
    retoSeisContenedor.textContent = `Es un momento excelente para impulsar tu carrera.`;
    retoSeisContenedor.setAttribute("class", "reto-resultado");
  } else {
    retoSeisContenedor.textContent = `¿Sabes hacia dónde dirigir tu futuro? Seguro puedo ayudarte.`;
    retoSeisContenedor.setAttribute("class", "reto-resultado");
  }
}

// Reto 7 Pide al usuario que ingrese su edad y mostrarás un mensaje correspondiente si esta coincide con las siguientes condiciones: Más de 30 años: Nunca es tarde para aprender ¿Qué curso tomaremos? Entre 29 y 18 años: Es un momento excelente para impulsar tu carrera. Menos de 18 años: ¿Sabes hacia dónde dirigir tu futuro? Seguro puedo ayudarte.

const retoSieteInputA = document.getElementById("reto-7-input-a");
const retoSieteContenedor = document.getElementById("reto-7-resultado");

const retoSiete = () => {
  numero = parseInt(retoSieteInputA.value);
  switch (numero) {
    case 1:
      retoSieteContenedor.textContent = `Hoy aprenderemos sobre prorgamación`;
      retoSieteContenedor.setAttribute("class", "reto-resultado");
      break;
    case 2:
      retoSieteContenedor.textContent = `¿Qué tal tomar un curso de marketing digital?`;
      retoSieteContenedor.setAttribute("class", "reto-resultado");
      break;
    case 3:
      retoSieteContenedor.textContent = `Hoy es un gran día para comenzar a aprender de diseño`;
      retoSieteContenedor.setAttribute("class", "reto-resultado");
      break;
    case 4:
      retoSieteContenedor.textContent = `¿Y si aprendemos algo de negocios online?`;
      retoSieteContenedor.setAttribute("class", "reto-resultado");
      break;
    case 5:
      retoSieteContenedor.textContent = `Veamos un par de clases sobre producción audiovisual`;
      retoSieteContenedor.setAttribute("class", "reto-resultado");
      break;
    case 6:
      retoSieteContenedor.textContent = `Tal vez sea bueno desarrollar una habilidad blanda en Platzi`;
      retoSieteContenedor.setAttribute("class", "reto-resultado");
      break;
      
      default:
        retoSieteContenedor.textContent = `Ingrese un número válido por favor.`;
        retoSieteContenedor.setAttribute("class", "reto-resultado");
      break;
  }
}