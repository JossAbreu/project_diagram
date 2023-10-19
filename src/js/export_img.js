function setupExportImage(stage,layer) {
    // Función para asegurarse de que el lienzo tenga el tamaño adecuado para incluir todos los elementos
    function adjustCanvasSize() {
      // Obtén los límites de todos los elementos en la capa principal del escenario
  
      var bounds = layer.getClientRect();
  
      // Asegúrate de que bounds no sea null
      if (bounds) {
        // Calcula el ancho y alto del lienzo según los límites de los elementos
        var canvasWidth = bounds.width;
        var canvasHeight = bounds.height;
  
        // Establece el ancho y alto del lienzo
        stage.width(canvasWidth);
        stage.height(canvasHeight);
      }
    }
  
    // Llama a la función para ajustar el tamaño del lienzo inicialmente
    adjustCanvasSize();
  
    // Función para descargar la imagen
    function downloadURI(uri, name) {
      var link = document.createElement('a');
      link.download = name;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      delete link;
    }
  
    // Captura el contenido completo del lienzo con un pixelRatio alto
    document.getElementById('download_drawer').addEventListener(
      'click',
      function () {
        // Llama a la función para ajustar el tamaño del lienzo antes de capturar la imagen
        adjustCanvasSize();
  
        var dataURL = stage.toDataURL({ pixelRatio: 3 }); // Puedes ajustar el valor de pixelRatio según tus necesidades
        downloadURI(dataURL, 'default_drawer.png');
      },
      false
    );
  }
  