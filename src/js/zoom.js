function setupZoom(stage, layer) {
  var zoomFactor = 1.1; // Factor de zoom para el scroll
  var zoomEnabled = false;

  stage.container().addEventListener("wheel", function (e) {
    if (zoomEnabled) {
      e.preventDefault();
      var scaleBy = zoomFactor;

      var oldScale = stage.scaleX();
      var mousePointTo = stage.getPointerPosition();

      var newScale = e.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
      stage.scale({ x: newScale, y: newScale });

      // Calcula la nueva posición para mantener el punto bajo el cursor del ratón
      var newPos = {
        x: mousePointTo.x - (mousePointTo.x - stage.x()) * (newScale / oldScale),
        y: mousePointTo.y - (mousePointTo.y - stage.y()) * (newScale / oldScale),
      };

      stage.position(newPos);
      stage.batchDraw();

      // Llama a la función para actualizar el número de líneas después del zoom
      updateLines(newScale);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Shift") {
      zoomEnabled = true;
    }
  });

  document.addEventListener("keyup", function (e) {
    if (e.key === "Shift") {
      zoomEnabled = false;
    }
  });
}
