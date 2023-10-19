function setupGrabbing(stage) {

  let isDragging = false;

  stage.on('mousedown', (e) => {
    if (e.evt.button === 0) { // Clic derecho
      isDragging = false;
      stage.container().style.cursor = 'initial'; // Cambiar el cursor a la mano cerrada (arrastrar)
  }
    if (e.evt.button === 2) { // Clic derecho
        isDragging = true;
        stage.container().style.cursor = 'grabbing'; // Cambiar el cursor a la mano cerrada (arrastrar)
    }
});
  
  stage.on('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        stage.container().style.cursor = 'grab'; // Cambiar el cursor a la mano abierta (agarrar)
    }
});
  
  stage.on('mousemove', (e) => {
      if (isDragging) {
          const x = stage.x() + e.evt.movementX;
          const y = stage.y() + e.evt.movementY;
          stage.position({ x, y });
          stage.batchDraw();
      }
  });
  
  stage.on('contextmenu', (e) => {
    e.evt.preventDefault(); // Prevenir el menú contextual del navegador
});

}