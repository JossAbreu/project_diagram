
// Función para hacer zoom in
document.getElementById("zoom-in").addEventListener("click", function () {
    paper.scale(paper.scale().sx + 0.1, paper.scale().sy + 0.1);
  });
  
  // Función para hacer zoom out
  document.getElementById("zoom-out").addEventListener("click", function () {
    paper.scale(paper.scale().sx - 0.1, paper.scale().sy - 0.1);
  });
  
  // Función para activar el modo de pantalla completa
  document.getElementById("fullscreen").addEventListener("click", function () {
    var workSpace = document.getElementById("container");
    if (workSpace.requestFullscreen) {
      workSpace.requestFullscreen();
    } else if (workSpace.mozRequestFullScreen) {
      workSpace.mozRequestFullScreen();
    } else if (workSpace.webkitRequestFullscreen) {
      workSpace.webkitRequestFullscreen();
    } else if (workSpace.msRequestFullscreen) {
      workSpace.msRequestFullscreen();
    }
  });

  // Detector de eventos de rueda (scroll) para hacer zoom con la tecla Shift presionada
document.getElementById("container").addEventListener("wheel", function (e) {
    if (e.shiftKey) {
      e.preventDefault();
      var delta = e.deltaY;
      var zoomFactor = delta > 0 ? 1.1 : 0.9; // Ajusta el factor de zoom según la dirección de la rueda
      paper.scale(paper.scale().sx * zoomFactor, paper.scale().sy * zoomFactor);
    }
  });


// Variables para rastrear si la tecla de espacio y el clic izquierdo están presionados
var spaceKeyPressed = false;
var leftMousePressed = false;

// Variables para rastrear la posición del ratón
var lastMouseX;
var lastMouseY;

// Función para activar el seguimiento de la tecla de espacio
document.addEventListener("keydown", function (e) {
  if (e.key === " ") {
    spaceKeyPressed = true;
    document.body.style.cursor = "grab";
  }
});

// Función para desactivar el seguimiento de la tecla de espacio
document.addEventListener("keyup", function (e) {
  if (e.key === " ") {
    spaceKeyPressed = false;
    document.body.style.cursor = leftMousePressed ? "grab" : "auto";
  }
});

// Función para desactivar el seguimiento de la tecla de espacio
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey  && e.key === "c") {
    createLinkBetweenSelectedElements();
  }
});
// Función para activar el seguimiento del clic izquierdo
document.addEventListener("mousedown", function (e) {
  if (e.button === 0 && spaceKeyPressed) {
    leftMousePressed = true;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    document.body.style.cursor = "grabbing";
  }
});

// Función para desactivar el seguimiento del clic izquierdo
document.addEventListener("mouseup", function (e) {
  if (e.button === 0) {
    leftMousePressed = false;
    document.body.style.cursor = spaceKeyPressed ? "grab" : "auto";
  }
});

// Función para mover el espacio de trabajo al mantener presionada la tecla de espacio y hacer clic izquierdo
document.addEventListener("mousemove", function (e) {
  if (spaceKeyPressed && leftMousePressed) {
    var deltaX = e.clientX - lastMouseX;
    var deltaY = e.clientY - lastMouseY;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;

    // Mueve el espacio de trabajo en función del desplazamiento del ratón
    paper.translate(paper.translate().tx + deltaX, paper.translate().ty + deltaY);
  }
});