function setupSelection(stage, layer) {


  var deleteButton = document.getElementById("deleteButton");
  deleteButton.addEventListener("click", function () {
    deleteelement() ;
  });
  
   
    // Controlador de eventos para la tecla "Delete"
    document.addEventListener("keydown", function (e) {
      if (e.key === "Backspace" ) {
        deleteelement() ;
      }
    });

  function deleteelement() {
    var selectedShapes = stage.find(".selected");
  
    for (var i = 0; i < selectedShapes.length; i++) {
      var shape = selectedShapes[i];
     // Obtener el texto e id del elemento seleccionado
     var id = parseInt(shape.attrs.id, 10);
     var type = shape.attrs.type;
     var text = shape.findOne(".text").text();
      if (shape.getClassName() === "Arrow") {
        shape.destroy();
        var index = arrows.indexOf(shape);
        if (index !== -1) {
          arrows.splice(index, 1);
        }
      } else {
        // Si se selecciona un nodo, eliminar sus flechas conectadas
        deleteNodeAndConnectedArrows(shape);
  
     
  console.log('id element:',shape);
        // Agregar el elemento seleccionado de nuevo a la lista de menú y a la lista de transiciones
        addElementBackToMenuAndList(text, id,type);
      }
    }
  
    layer.draw();
  }


  function addElementBackToMenuAndList(text, id,type) {
    // Crear un nuevo elemento <div> basado en el texto y el id
    const div = document.createElement('div');
   
    div.draggable = true;
    div.textContent = text;
    div.id = id; // Asigna el mismo id al elemento <div>
    div.setAttribute('ondragstart', `event.dataTransfer.setData('id', '${id}'); event.dataTransfer.setData('text', '${text}'); event.dataTransfer.setData('type', '${type}')`);


   

    if (type === 'transition') {

      div.classList.add(
        'bg-neutral-900',
        'text-center',
        'px-10',
        'py-1',
        'select-none',
        'flex',
        'items-center',
        'justify-center',
        'cursor-pointer',
        'hover:bg-accent-base',
        'rounded-xl',
        'transition',
        'ease-in-out',
        'hover:text-black',
        'ring-2',
        'ring-dark-surface_4',
        'text-md',
        'hover:scale-105'
      );

    // Obtener el contenedor donde se agregarán los elementos de menú
    const container = document.getElementById('stagesContainer');
  
    // Agregar el nuevo elemento <div> al contenedor de menú
    container.appendChild(div);
  
    // Agregar el texto de vuelta a la lista de transiciones
        // Agregar el texto e id a la lista de transiciones
        transitionsList.push({ id: id ,text: text, });
    }else if (type === 'status') {

        div.classList.add(
        'bg-neutral-700',
        'text-center',
        'px-10',
        'py-1',
        'select-none',
        'flex',
        'items-center',
        'justify-center',
        'cursor-pointer',
        'hover:bg-accent-base',
        'transition',
        'ease-in-out',
        'hover:text-black',
        'ring-2',
        'ring-dark-surface_4',
        'text-md',
        'hover:scale-105'
      );
      // Obtener el contenedor donde se agregarán los elementos de menú
    const container = document.getElementById('statesContainer');
  
    // Agregar el nuevo elemento <div> al contenedor de menú
    container.appendChild(div);
  
    // Agregar el texto de vuelta a la lista de transiciones
        // Agregar el texto e id a la lista de transiciones
        status_list.push({ id: id ,text: text, });
    }


    
  }
 
    // Controlador de eventos para la tecla "conectar nodos"
    document.addEventListener("keydown", function (e) {
      if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
       
        if (selectedNodes.length === 2) {
          const fromNode = selectedNodes[0].parent;
          const toNode = selectedNodes[1].parent;
      
          const newArrow = createArrow(fromNode, toNode);
      
          // Deseleccionar todos los elementos, incluyendo nodos y flechas
          selectedNodes.forEach(function (element) {
            toggleSelection(element);
          });
      
          arrows.forEach(function (arrow) {
            if (arrow.hasName('selected')) {
              toggleSelection(arrow);
            }
          });
      
          selectedNodes = [];
      
          layer.draw();
        } else {
          // Si no se están conectando nodos, simplemente deselecciona todo
          selectedNodes.forEach(function (element) {
            toggleSelection(element);
          });
      
          arrows.forEach(function (arrow) {
            if (arrow.hasName('selected')) {
              toggleSelection(arrow);
            }
          });
      
          selectedNodes = [];
      
          layer.draw();
        }
      }
    });

  let selectedNodes = [];
  let arrows = [];

  function createArrow(fromNode, toNode) {
    const newArrow = new Konva.Arrow({
      points: [
        fromNode.x() + 75,
        fromNode.y() + 20,
        toNode.x() + 75,
        toNode.y() + 1,
      ],
      pointerLength: 8,
      pointerWidth: 8,
      fill: "black",
      name: "Arrow",
      stroke: "#9BABB8",
      strokeWidth: 1,
      draggable: false, // Permitir que las flechas se seleccionen
    });
  
    // Configurar el zIndex de la flecha con un valor bajo
    newArrow.zIndex(0); // Asegúrate de que sea un valor menor que el de los nodos
  
    // Agregar la flecha al layer
    layer.add(newArrow);
    layer.draw();
  
    fromNode.on("dragmove", () => {
      updateArrow(newArrow, fromNode, toNode);
      layer.draw();
    });
  
    toNode.on("dragmove", () => {
      updateArrow(newArrow, fromNode, toNode);
      layer.draw();
    });
  
    // Agregar evento de selección para las flechas
    newArrow.on("click", (e) => {
      toggleSelection(newArrow);
      e.cancelBubble = true;
    });
  
    return newArrow;
  }

  function updateArrow(arrow, fromNode, toNode) {
    arrow.points([
      fromNode.x() + 75,
      fromNode.y() + 20,
      toNode.x() + 75,
      toNode.y() + 1,
    ]);
  }

  const connectButton = document.getElementById("connectButton");
  connectButton.addEventListener("click", () => {
    if (selectedNodes.length === 2) {
      const fromNode = selectedNodes[0].parent;
      const toNode = selectedNodes[1].parent;
  
      const newArrow = createArrow(fromNode, toNode);
  
      // Deseleccionar todos los elementos, incluyendo nodos y flechas
      selectedNodes.forEach(function (element) {
        toggleSelection(element);
      });
  
      arrows.forEach(function (arrow) {
        if (arrow.hasName('selected')) {
          toggleSelection(arrow);
        }
      });
  
      selectedNodes = [];
  
      layer.draw();
    } else {
      // Si no se están conectando nodos, simplemente deselecciona todo
      selectedNodes.forEach(function (element) {
        toggleSelection(element);
      });
  
      arrows.forEach(function (arrow) {
        if (arrow.hasName('selected')) {
          toggleSelection(arrow);
        }
      });
  
      selectedNodes = [];
  
      layer.draw();
    }
  });

  

  stage.on("click", function (e) {
    var clickedShape = e.target;

    if (clickedShape) {
      var group = clickedShape.getParent();
    
      if (group) { // Verificar si group no es null
        if (
          group.getClassName() === "Label" ||group.getClassName() === "Arrow"
        ) {
          toggleSelection(group);
          layer.draw();
        } else if (group.getClassName() === "Arrow") {
          // Eliminar el nodo y sus flechas conectadas
          deleteNodeAndConnectedArrows(group);
          layer.draw();
        }
      }
    }
  });

  function toggleSelection(element) {
    if (element instanceof Konva.Node) {
      var isSelected = element.hasName("selected");
  
      if (isSelected) {
        element.name("");
        var tag = element.findOne(".tag");
        var text = element.findOne(".text");
  
        if (tag && text) {
          tag.stroke(null);
          text.fill("white");
          text.strokeWidth(0);
        }
  
        var index = selectedNodes.indexOf(element);
        if (index !== -1) {
          selectedNodes.splice(index, 1);
        }
  
        // Cambiar el color de los puntos de conexión del grupo al estado original
        var connectionPoints = element.find(".connectionPoint");
        for (var i = 0; i < connectionPoints.length; i++) {
          connectionPoints[i].fill("transparent"); // Reemplaza "#color_original" con el color original deseado
        }
      } else {
        element.name("selected");
        selectedNodes.push(element);
  
        var tag = element.findOne(".tag");
        var text = element.findOne(".text");
  
        // Cambiar el color de los puntos de conexión del grupo cuando está seleccionado
        var connectionPoints = element.find(".connectionPoint");
        for (var i = 0; i < connectionPoints.length; i++) {
          connectionPoints[i].fill("#10FB06"); // Cambia "#10FB06" al color que desees
        }
  
        if (tag && text) {
          tag.stroke("#10FB06");
          text.strokeWidth(2);
        }
      }
  
      layer.draw();
    }
  }
  
  
  

  // Función para obtener las flechas conectadas a un nodo
  function getConnectedArrows(node) {
    return arrows.filter(function (arrow) {
      return (
        arrow.points()[0] === node.x() + 75 ||
        arrow.points()[2] === node.x() + 75 ||
        arrow.points()[0] === node.x() + 75 - 20 ||
        arrow.points()[2] === node.x() + 75 - 20
      );
    });
  }

  // Función para eliminar un nodo y sus flechas conectadas
  function deleteNodeAndConnectedArrows(node) {
    // Eliminar las flechas conectadas al nodo
    var connectedArrows = getConnectedArrows(node);
    connectedArrows.forEach(function (arrow) {
      arrow.destroy();
      var index = arrows.indexOf(arrow);
      if (index !== -1) {
        arrows.splice(index, 1);
      }
    });

    node.destroy();
  }

  var selectionRect; // Variable para el rectángulo de selección
var isDragging = false; // Variable para rastrear si se está arrastrando la selección

// Evento para iniciar la selección al hacer clic izquierdo
stage.on('mousedown', (e) => {
  if (e.evt.button === 0) { // Clic izquierdo
    isDragging = true;
    const pos = stage.getPointerPosition();
    selectionRect = new Konva.Rect({
      x: pos.x,
      y: pos.y,
      width: 0,
      height: 0,
      visible: true,
      fill: 'rgba(255, 255, 255, 0.2)',
      stroke: 'black',
      strokeWidth: 2,
      listening: false
    });
    layer.add(selectionRect);
  }
});

// Evento para actualizar el rectángulo de selección mientras se arrastra el ratón
stage.on('mousemove', (e) => {
  if (isDragging) {
    const pos = stage.getPointerPosition();
    const x1 = selectionRect.x();
    const y1 = selectionRect.y();
    const x2 = pos.x;
    const y2 = pos.y;
    const width = x2 - x1;
    const height = y2 - y1;

    selectionRect.setAttrs({
      x: Math.min(x1, x2),
      y: Math.min(y1, y2),
      width: Math.abs(width),
      height: Math.abs(height)
    });

    layer.batchDraw();
  }
});

// Evento para finalizar la selección al soltar el botón izquierdo
stage.on('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    selectionRect.visible(false);
    layer.batchDraw();
  }
});

}
