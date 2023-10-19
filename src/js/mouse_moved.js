function setupZoom(stage,layer) {
    var isDragging = false;
    var lastPointerPosition;
    
    layer.on("mousedown", function (e) {
      if (e.evt.button === 2) {
        isDragging = true;
        lastPointerPosition = layer.getPointerPosition();
      }
    });
    
    layer.on("mousemove", function (e) {
      if (isDragging) {
        var dx = e.evt.clientX - lastPointerPosition.x;
        var dy = e.evt.clientY - lastPointerPosition.y;
        stage.x(stage.x() + dx);
        stage.y(stage.y() + dy);
        lastPointerPosition = layer.getPointerPosition();
        layer.draw();
      }
    });
    
    layer.on("mouseup", function (e) {
      if (e.evt.button === 2) {
        isDragging = false;
      }
    });

}



