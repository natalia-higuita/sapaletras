
// Obtener el número de palabras del usuario
var numPalabras = parseInt(prompt("cuantas palabras va tener la sopa de letras :"));

// Crear un array vacío
var palabras = [];

// Iterar para solicitar las palabras al usuario
for (var i = 0; i < numPalabras; i++) {
  var palabra = prompt("Ingrese una palabra " + (i+1) + ":");
  palabras.push(palabra);
}

// Obtener la referencia a la lista en HTML
var lista = document.getElementById("palabrasList");

// Agregar las palabras a la lista
for (var i = 0; i < palabras.length; i++) {
  // Crear un nuevo elemento de lista
  var elementoLista = document.createElement("li");
  
  // Establecer el contenido del elemento como la palabra correspondiente
  elementoLista.textContent = palabras[i];
  
  // Agregar el elemento a la lista
  lista.appendChild(elementoLista);
}


// Obtener el tamaño de la matriz 
var filas =16;
var columnas = 16;

// Crear una matriz vacía
var matriz = [];

// Iterar para crear cada fila de la matriz
for (var i = 0; i < filas; i++) {
  // Crear un array para cada fila
  var fila = [];
  
  // Iterar para solicitar las letras de cada columna
  for (var j = 0; j < columnas; j++) {
    var letra = prompt("Ingrese una  letra [" + i + "][" + j + "]:");
    fila.push(letra);
  }
  
  // Agregar la fila a la matriz
  matriz.push(fila);
}

// Obtener la referencia a la tabla en HTML
var tabla = document.getElementById("matrizTable");

// Crear las filas y celdas de la tabla
for (var i = 0; i < filas; i++) {
  // Crear una nueva fila
  var filaHTML = document.createElement("tr");
  
  // Iterar para crear las celdas de la fila
  for (var j = 0; j < columnas; j++) {
    // Crear una nueva celda
    var celdaHTML = document.createElement("td");
    
    // Establecer el contenido de la celda como la letra correspondiente de la matriz
    celdaHTML.textContent = matriz[i][j];
    
    // Agregar la celda a la fila
    filaHTML.appendChild(celdaHTML);
  }
  
  // Agregar la fila a la tabla
  tabla.appendChild(filaHTML);
}

