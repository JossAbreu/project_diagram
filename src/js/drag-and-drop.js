// Agregar eventos para permitir el arrastre y soltar elementos

paper.el.addEventListener("dragover", function (event) {
  event.preventDefault();
});

paper.el.addEventListener("drop", function (event) {
  event.preventDefault();

  var id = event.dataTransfer.getData("id");
  var text = event.dataTransfer.getData("text");
  var type = event.dataTransfer.getData("type");
  var x = event.clientX - paper.el.getBoundingClientRect().left;
  var y = event.clientY - paper.el.getBoundingClientRect().top;

// Formatear el texto con la primera letra en mayúscula
var formattedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();


  if (type === "stages") {

     // Crear un elemento de texto invisible para medir su tamaño
     var textElement = document.createElement("span");
     textElement.textContent = text;
     textElement.style.visibility = "hidden";
     textElement.style.position = "absolute";
     document.body.appendChild(textElement);
 
     // Obtener el ancho y el alto del texto
     var textWidth = textElement.offsetWidth;
     var textHeight = textElement.offsetHeight;
 
     // Eliminar el elemento de texto invisible
     document.body.removeChild(textElement);
     
     var rectWidth = textWidth + 50;
     var rectHeight = textHeight + 20;
     var fontFamily = "Arial, sans-serif"; // Reemplaza con la fuente que desees

    var rect = new joint.shapes.standard.Rectangle({
      position: { x: x, y: y },
      size: { width: rectWidth, height: rectHeight },
      type: "basic.Rect",
      element: "stage",
      text: text ,
      id_element: id,
      connections: [],
      markup: 
            '<rect class="body"></rect><text class="text" text-anchor="middle" ></text><g class="icon" > <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Zm300-440Zm86 160h134v-240H510l-16-80H280v240h290l16 80Z"/></svg></g>' ,
        
      attrs: {
        '.body': {
          width: rectWidth,
          height: rectHeight,
                fill: "#065F46", 
                stroke: "#064E3B",
                strokeWidth: 3 ,
                rx:"10",
                 ry:"10",
              },
              '.text': {
                text: formattedText,
                ref: '.body',
                'ref-x': 0.6, // Centra horizontalmente en relación al cuerpo
                'ref-y': 0.5, // Centra verticalmente en relación al cuerpo
                fill: "white",
                fontSize: "14",
                fontWeight: "600",
                'text-anchor': 'middle', // Asegura que el texto esté centrado horizontalmente
                'y-alignment': 'middle', // Asegura que el texto esté centrado verticalmente
                'font-family': fontFamily, // Establece la fuente aquí
                'text-transform': 'capitalize', // Aplica la capitalización
              },
              '.icon': {
                fill:"white",
                ref: '.body',
                'ref-x': 0.1, // Centra horizontalmente en relación al cuerpo
                'ref-y': 0.2, // Centra verticalmente en relación al cuerpo
                // transform: "translate(10, 10)"
              },
             


      },
    });

    rect.addTo(graph);

    console.log(rect);
    deselect_allElements();
    //  Encuentra el elemento en el menú por su id y elimínalo
    const draggedElement = document.getElementById(id);
  
    if (draggedElement) {
      container_stages.removeChild(draggedElement);

      console.log(`Elemento eliminado del menú por id: ${id}`);
    }
  }

  if (type === "groups" && isPanelmenu) {
      // Crear un elemento de texto invisible para medir su tamaño
      var textElement = document.createElement("span");
      textElement.textContent = text;
      textElement.style.visibility = "hidden";
      textElement.style.position = "absolute";
      document.body.appendChild(textElement);
  
      // Obtener el ancho y el alto del texto
      var textWidth = textElement.offsetWidth;
      var textHeight = textElement.offsetHeight;
  
      // Eliminar el elemento de texto invisible
      document.body.removeChild(textElement);
      
      var rectWidth = textWidth + 50;
      var rectHeight = textHeight + 20;
      var fontFamily = "Arial, sans-serif"; // Reemplaza con la fuente que desees



    var rect = new joint.shapes.standard.Rectangle({
      position: { x: x, y: y },
      size: { width: rectWidth, height: rectHeight },
      type: "basic.Rect",
      text: text ,
      id_element: id,
      element: "group",
      connections: [],
      markup: 
            '<rect class="body"></rect><text class="text" text-anchor="middle" ></text><g class="icon" > <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg></g>' ,
        
      attrs: {
        '.body': {
          width: rectWidth,
          height: rectHeight,
                fill: "#881337", 
                stroke: "#4c0519",
                strokeWidth: 3 ,
                rx:"10",
                 ry:"10",
              },
              '.text': {
                text: formattedText,
                ref: '.body',
                'ref-x': 0.6, // Centra horizontalmente en relación al cuerpo
                'ref-y': 0.5, // Centra verticalmente en relación al cuerpo
                fill: "white",
                fontSize: "14",
                fontWeight: "600",
                'text-anchor': 'middle', // Asegura que el texto esté centrado horizontalmente
                'y-alignment': 'middle', // Asegura que el texto esté centrado verticalmente
                'font-family': fontFamily, // Establece la fuente aquí
                'text-transform': 'capitalize', // Aplica la capitalización
              },
              '.icon': {
                fill:"white",
                ref: '.body',
                'ref-x': 0.1, // Centra horizontalmente en relación al cuerpo
                'ref-y': 0.2, // Centra verticalmente en relación al cuerpo
                // transform: "translate(10, 10)"
              },
             


      },
    });

    rect.addTo(graph);


    
    deselect_allElements();
    console.log(rect);
    var boundaryTool = new joint.elementTools.Boundary({
      padding: 10,
      rotate: true,
      useModelGeometry: true,
    });

    var removeButton = new joint.elementTools.Remove({
      focusOpacity: 0.5,
      rotate: true,
      useModelGeometry: true,
      action: function (evt) {
        Swal.fire({
          title: "Are you sure to delete the element? ",
          html: `<span class="text-accent-base font-bold">${text}  </span> `,
          showCancelButton: true,
          confirmButtonText: "remove ",
          allowOutsideClick: false,
          background: "#141414",
          border: "solid 2px red",
          customClass: {
            container: "#141414",
            cancelButton:
              "bg-neutral-800 px-3 py-1 hover:bg-neutral-950  hover:text-white ml-3 rounded-md text-white",
            confirmButton:
              "bg-red-500 px-3 py-1 hover:bg-red-700 hover:text-white mr-3  rounded-md text-black",
            title: "text-xl text-white", // Clase personalizada para el título
            text: "text-white",
          },
          buttonsStyling: false,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.model.remove();
            Swal.fire({
              icon: "success",
              html: `<span class="text-white font-bold"> Element <span class="text-accent-base ">${text} </span> removed!</span> `,
              showCancelButton: false,
              showConfirmButton: false,
              allowOutsideClick: false,
              background: "#141414",
              border: "solid 2px red",
              timer: 1200,
            });
            addElementBackToMenuAndList(text, id, type);
            selectedElements = [];
          }
        });
      },
    });

    var toolsView = new joint.dia.ToolsView({
      tools: [boundaryTool, removeButton],
    });

    var elementView = rect.findView(paper);
    elementView.addTools(toolsView);
    elementView.hideTools();

    paper.on("element:pointerdown", function (elementView) {
      elementView.showTools();
    });

    paper.on("blank:pointerdown", function () {
      elementView.hideTools();
      var conection_btn = document.querySelector("#conection_btn");
      conection_btn.style.display = "none";
      // Al hacer clic en el área en blanco (fuera de los elementos), deseleccionar elementos
      selectedElements.forEach(
        (element) => element.findView(paper).unhighlight(),
        (selectedElements = [])
      );
    });
  }

  if (type === "users" && isPanelmenu) {
      // Crear un elemento de texto invisible para medir su tamaño
      var textElement = document.createElement("span");
      textElement.textContent = text;
      textElement.style.visibility = "hidden";
      textElement.style.position = "absolute";
      document.body.appendChild(textElement);
  
      // Obtener el ancho y el alto del texto
      var textWidth = textElement.offsetWidth;
      var textHeight = textElement.offsetHeight;
  
      // Eliminar el elemento de texto invisible
      document.body.removeChild(textElement);
      
      var rectWidth = textWidth + 50;
      var rectHeight = textHeight + 20;
      var fontFamily = "Arial, sans-serif"; // Reemplaza con la fuente que desees



    var rect = new joint.shapes.standard.Rectangle({
      position: { x: x, y: y },
      size: { width: rectWidth, height: rectHeight },
      type: "basic.Rect",
      element: "user",
      text: text ,
      id_element: id,
  
      connections: [],
      markup: 
            '<rect class="body"></rect><text class="text" text-anchor="middle" ></text><g class="icon" > <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg></g>' ,
        
      attrs: {
        '.body': {
          width: rectWidth,
          height: rectHeight,
                fill: "#0C4A6E", 
                stroke: "#082f49",
                strokeWidth: 3 ,
                rx:"10",
                ry:"10",
              },
              '.text': {
                text: formattedText,
                ref: '.body',
                'ref-x': 0.6, // Centra horizontalmente en relación al cuerpo
                'ref-y': 0.5, // Centra verticalmente en relación al cuerpo
                fill: "white",
                fontSize: "14",
                fontWeight: "600",
                'text-anchor': 'middle', // Asegura que el texto esté centrado horizontalmente
                'y-alignment': 'middle', // Asegura que el texto esté centrado verticalmente
                'font-family': fontFamily, // Establece la fuente aquí
                'text-transform': 'capitalize', // Aplica la capitalización
              },
              '.icon': {
                fill:"white",
                ref: '.body',
                'ref-x': 0.1, // Centra horizontalmente en relación al cuerpo
                'ref-y': 0.2, // Centra verticalmente en relación al cuerpo
                // transform: "translate(10, 10)"
              },
             


      },
    });

    rect.addTo(graph);

    var boundaryTool = new joint.elementTools.Boundary({
      padding: 10,
      rotate: true,
      useModelGeometry: true,
    });

    var removeButton = new joint.elementTools.Remove({
      focusOpacity: 0.5,
      rotate: true,
      useModelGeometry: true,
      action: function (evt) {
        Swal.fire({
          title: "Are you sure to delete the element? ",
          html: `<span class="text-accent-base font-bold">${text}  </span> `,
          showCancelButton: true,
          confirmButtonText: "remove ",
          allowOutsideClick: false,
          background: "#141414",
          border: "solid 2px red",
          customClass: {
            container: "#141414",
            cancelButton:
              "bg-neutral-800 px-3 py-1 hover:bg-neutral-950  hover:text-white ml-3 rounded-md text-white",
            confirmButton:
              "bg-red-500 px-3 py-1 hover:bg-red-700 hover:text-white mr-3  rounded-md text-black",
            title: "text-xl text-white", // Clase personalizada para el título
            text: "text-white",
          },
          buttonsStyling: false,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.model.remove();
            Swal.fire({
              icon: "success",
              html: `<span class="text-white font-bold"> Element <span class="text-accent-base ">${text} </span> removed!</span> `,
              showCancelButton: false,
              showConfirmButton: false,
              allowOutsideClick: false,
              background: "#141414",
              border: "solid 2px red",
              timer: 1200,
            });
            addElementBackToMenuAndList(text, id, type);
            selectedElements = [];
          }
        });
      },
    });

    var toolsView = new joint.dia.ToolsView({
      tools: [boundaryTool, removeButton],
    });

    var elementView = rect.findView(paper);
    elementView.addTools(toolsView);
    elementView.hideTools();

    paper.on("element:pointerdown", function (elementView) {
      elementView.showTools();
    });

    paper.on("blank:pointerdown", function () {
      elementView.hideTools();
      var conection_btn = document.querySelector("#conection_btn");
      conection_btn.style.display = "none";
      // Al hacer clic en el área en blanco (fuera de los elementos), deseleccionar elementos
      selectedElements.forEach(
        (element) => element.findView(paper).unhighlight(),
        (selectedElements = [])
      );
    });
  }
//END

   //   creacion de tasks del panel 
   if (type === "tasks" && isPanelmenu) {

    
    // Crear un elemento de texto invisible para medir su tamaño
    var textElement = document.createElement("span");
    textElement.textContent = text;
    textElement.style.visibility = "hidden";
    textElement.style.position = "absolute";
    document.body.appendChild(textElement);

    // Obtener el ancho y el alto del texto
    var textWidth = textElement.offsetWidth;
    var textHeight = textElement.offsetHeight;

    // Eliminar el elemento de texto invisible
    document.body.removeChild(textElement);
    
    var rectWidth = textWidth + 50;
    var rectHeight = textHeight + 20;
    var fontFamily = "Arial, sans-serif"; // Reemplaza con la fuente que desees



  var rect = new joint.shapes.standard.Rectangle({
    position: { x: x, y: y },
    size: { width: rectWidth, height: rectHeight },
    type: "basic.Rect",
    element: "task",
    text: text ,
    id_element: id,
    connections: [],
    markup: 
          '<rect class="body"></rect><text class="text" text-anchor="middle" ></text><g class="icon" > <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg></g>' ,
      
    attrs: {
      '.body': {
        width: rectWidth,
        height: rectHeight,
              fill: "#854D0E", 
              stroke: "#713F12",
              strokeWidth: 3 ,
              rx:"10",
              ry:"10",
            },
            '.text': {
              text: formattedText,
              ref: '.body',
              'ref-x': 0.6, // Centra horizontalmente en relación al cuerpo
              'ref-y': 0.5, // Centra verticalmente en relación al cuerpo
              fill: "white",
              fontSize: "14",
              fontWeight: "600",
              'text-anchor': 'middle', // Asegura que el texto esté centrado horizontalmente
              'y-alignment': 'middle', // Asegura que el texto esté centrado verticalmente
              'font-family': fontFamily, // Establece la fuente aquí
              'text-transform': 'capitalize', // Aplica la capitalización
            },
            '.icon': {
              fill:"white",
              ref: '.body',
              'ref-x': 0.1, // Centra horizontalmente en relación al cuerpo
              'ref-y': 0.2, // Centra verticalmente en relación al cuerpo
              // transform: "translate(10, 10)"
            },
           


    },
  });

  rect.addTo(graph);

  var boundaryTool = new joint.elementTools.Boundary({
    padding: 10,
    rotate: true,
    useModelGeometry: true,
  });

  var removeButton = new joint.elementTools.Remove({
    focusOpacity: 0.5,
    rotate: true,
    useModelGeometry: true,
    action: function (evt) {
      Swal.fire({
        title: "Are you sure to delete the element? ",
        html: `<span class="text-accent-base font-bold">${text}  </span> `,
        showCancelButton: true,
        confirmButtonText: "remove ",
        allowOutsideClick: false,
        background: "#141414",
        border: "solid 2px red",
        customClass: {
          container: "#141414",
          cancelButton:
            "bg-neutral-800 px-3 py-1 hover:bg-neutral-950  hover:text-white ml-3 rounded-md text-white",
          confirmButton:
            "bg-red-500 px-3 py-1 hover:bg-red-700 hover:text-white mr-3  rounded-md text-black",
          title: "text-xl text-white", // Clase personalizada para el título
          text: "text-white",
        },
        buttonsStyling: false,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.model.remove();
          Swal.fire({
            icon: "success",
            html: `<span class="text-white font-bold"> Element <span class="text-accent-base ">${text} </span> removed!</span> `,
            showCancelButton: false,
            showConfirmButton: false,
            allowOutsideClick: false,
            background: "#141414",
            border: "solid 2px red",
            timer: 1200,
          });
          addElementBackToMenuAndList(text, id, type);
          selectedElements = [];
        }
      });
    },
  });

  var toolsView = new joint.dia.ToolsView({
    tools: [boundaryTool, removeButton],
  });

  var elementView = rect.findView(paper);
  elementView.addTools(toolsView);
  elementView.hideTools();

  paper.on("element:pointerdown", function (elementView) {
    elementView.showTools();
  });

  paper.on("blank:pointerdown", function () {
    elementView.hideTools();
    var conection_btn = document.querySelector("#conection_btn");
    conection_btn.style.display = "none";
    // Al hacer clic en el área en blanco (fuera de los elementos), deseleccionar elementos
    selectedElements.forEach(
      (element) => element.findView(paper).unhighlight(),
      (selectedElements = [])
    );
  });
}

    //End 

  // funcion para conectar un grupo con stage desde el contextmenu

  if (type === "groups" && isContextmenu) {
     // Crear un elemento de texto invisible para medir su tamaño
     var textElement = document.createElement("span");
     textElement.textContent = text;
     textElement.style.visibility = "hidden";
     textElement.style.position = "absolute";
     document.body.appendChild(textElement);
 
     // Obtener el ancho y el alto del texto
     var textWidth = textElement.offsetWidth;
     var textHeight = textElement.offsetHeight;
 
     // Eliminar el elemento de texto invisible
     document.body.removeChild(textElement);
     
     var rectWidth = textWidth + 50;
     var rectHeight = textHeight + 20;
     var fontFamily = "Arial, sans-serif"; // Reemplaza con la fuente que desees



   var rect = new joint.shapes.standard.Rectangle({
     position: { x: x, y: y },
     size: { width: rectWidth, height: rectHeight },
     type: "basic.Rect",
     text: text ,
     id_element: id,
     element: "group",
     connections: [],
     markup: 
           '<rect class="body"></rect><text class="text" text-anchor="middle" ></text><g class="icon" > <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg></g>' ,
       
     attrs: {
       '.body': {
         width: rectWidth,
         height: rectHeight,
               fill: "#881337", 
               stroke: "#4c0519",
               strokeWidth: 3 ,
               rx:"10",
                ry:"10",
             },
             '.text': {
               text: formattedText,
               ref: '.body',
               'ref-x': 0.6, // Centra horizontalmente en relación al cuerpo
               'ref-y': 0.5, // Centra verticalmente en relación al cuerpo
               fill: "white",
               fontSize: "14",
               fontWeight: "600",
               'text-anchor': 'middle', // Asegura que el texto esté centrado horizontalmente
               'y-alignment': 'middle', // Asegura que el texto esté centrado verticalmente
               'font-family': fontFamily, // Establece la fuente aquí
               'text-transform': 'capitalize', // Aplica la capitalización
             },
             '.icon': {
               fill:"white",
               ref: '.body',
               'ref-x': 0.1, // Centra horizontalmente en relación al cuerpo
               'ref-y': 0.2, // Centra verticalmente en relación al cuerpo
               // transform: "translate(10, 10)"
             },
            


     },
   });

   rect.addTo(graph);
    selectedElements.push(rect);
    closeAll_contextMenu();

    console.log(selectedElements);
    var boundaryTool = new joint.elementTools.Boundary({
      padding: 10,
      rotate: true,
      useModelGeometry: true,
    });

    var removeButton = new joint.elementTools.Remove({
      focusOpacity: 0.5,
      rotate: true,
      useModelGeometry: true,
      action: function (evt) {
        Swal.fire({
          title: "Are you sure to delete the element? ",
          html: `<span class="text-accent-base font-bold">${text}  </span> `,
          showCancelButton: true,
          confirmButtonText: "remove ",
          allowOutsideClick: false,
          background: "#141414",
          border: "solid 2px red",
          customClass: {
            container: "#141414",
            cancelButton:
              "bg-neutral-800 px-3 py-1 hover:bg-neutral-950  hover:text-white ml-3 rounded-md text-white",
            confirmButton:
              "bg-red-500 px-3 py-1 hover:bg-red-700 hover:text-white mr-3  rounded-md text-black",
            title: "text-xl text-white", // Clase personalizada para el título
            text: "text-white",
          },
          buttonsStyling: false,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.model.remove();
            Swal.fire({
              icon: "success",
              html: `<span class="text-white font-bold"> Element <span class="text-accent-base ">${text} </span> removed!</span> `,
              showCancelButton: false,
              showConfirmButton: false,
              allowOutsideClick: false,
              background: "#141414",
              border: "solid 2px red",
              timer: 1200,
            });

            selectedElements = [];
          }
        });
      },
    });

    var toolsView = new joint.dia.ToolsView({
      tools: [boundaryTool, removeButton],
    });

    var elementView = rect.findView(paper);
    elementView.addTools(toolsView);
    elementView.hideTools();

    paper.on("element:pointerdown", function (elementView) {
      elementView.showTools();
    });

    paper.on("blank:pointerdown", function () {
      elementView.hideTools();
      var conection_btn = document.querySelector("#conection_btn");
      conection_btn.style.display = "none";
      // Al hacer clic en el área en blanco (fuera de los elementos), deseleccionar elementos
      selectedElements.forEach(
        (element) => element.findView(paper).unhighlight(),
        (selectedElements = [])
      );
    });

    isContextmenu = false;
    isPanelmenu = true;

    createLinkBetweenSelectedElements();
    deselect_allElements();
  }

  if (type === "users" && isContextmenu) {
     // Crear un elemento de texto invisible para medir su tamaño
     var textElement = document.createElement("span");
     textElement.textContent = text;
     textElement.style.visibility = "hidden";
     textElement.style.position = "absolute";
     document.body.appendChild(textElement);
 
     // Obtener el ancho y el alto del texto
     var textWidth = textElement.offsetWidth;
     var textHeight = textElement.offsetHeight;
 
     // Eliminar el elemento de texto invisible
     document.body.removeChild(textElement);
     
     var rectWidth = textWidth + 50;
     var rectHeight = textHeight + 20;
     var fontFamily = "Arial, sans-serif"; // Reemplaza con la fuente que desees



   var rect = new joint.shapes.standard.Rectangle({
     position: { x: x, y: y },
     size: { width: rectWidth, height: rectHeight },
     type: "basic.Rect",
     element: "user",
     text: text ,
     id_element: id,
     connections: [],
     markup: 
           '<rect class="body"></rect><text class="text" text-anchor="middle" ></text><g class="icon" > <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg></g>' ,
       
     attrs: {
       '.body': {
         width: rectWidth,
         height: rectHeight,
               fill: "#0C4A6E", 
               stroke: "#082f49",
               strokeWidth: 3 ,
               rx:"10",
               ry:"10",
             },
             '.text': {
               text: formattedText,
               ref: '.body',
               'ref-x': 0.6, // Centra horizontalmente en relación al cuerpo
               'ref-y': 0.5, // Centra verticalmente en relación al cuerpo
               fill: "white",
               fontSize: "14",
               fontWeight: "600",
               'text-anchor': 'middle', // Asegura que el texto esté centrado horizontalmente
               'y-alignment': 'middle', // Asegura que el texto esté centrado verticalmente
               'font-family': fontFamily, // Establece la fuente aquí
               'text-transform': 'capitalize', // Aplica la capitalización
             },
             '.icon': {
               fill:"white",
               ref: '.body',
               'ref-x': 0.1, // Centra horizontalmente en relación al cuerpo
               'ref-y': 0.2, // Centra verticalmente en relación al cuerpo
               // transform: "translate(10, 10)"
             },
            


     },
   });

   rect.addTo(graph);
    selectedElements.push(rect);
    closeAll_contextMenu();

    console.log(selectedElements);
    var boundaryTool = new joint.elementTools.Boundary({
      padding: 10,
      rotate: true,
      useModelGeometry: true,
    });

    var removeButton = new joint.elementTools.Remove({
      focusOpacity: 0.5,
      rotate: true,
      useModelGeometry: true,
      action: function (evt) {
        Swal.fire({
          title: "Are you sure to delete the element? ",
          html: `<span class="text-accent-base font-bold">${text}  </span> `,
          showCancelButton: true,
          confirmButtonText: "remove ",
          allowOutsideClick: false,
          background: "#141414",
          border: "solid 2px red",
          customClass: {
            container: "#141414",
            cancelButton:
              "bg-neutral-800 px-3 py-1 hover:bg-neutral-950  hover:text-white ml-3 rounded-md text-white",
            confirmButton:
              "bg-red-500 px-3 py-1 hover:bg-red-700 hover:text-white mr-3  rounded-md text-black",
            title: "text-xl text-white", // Clase personalizada para el título
            text: "text-white",
          },
          buttonsStyling: false,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.model.remove();
            Swal.fire({
              icon: "success",
              html: `<span class="text-white font-bold"> Element <span class="text-accent-base ">${text} </span> removed!</span> `,
              showCancelButton: false,
              showConfirmButton: false,
              allowOutsideClick: false,
              background: "#141414",
              border: "solid 2px red",
              timer: 1200,
            });

            selectedElements = [];
          }
        });
      },
    });

    var toolsView = new joint.dia.ToolsView({
      tools: [boundaryTool, removeButton],
    });

    var elementView = rect.findView(paper);
    elementView.addTools(toolsView);
    elementView.hideTools();

    paper.on("element:pointerdown", function (elementView) {
      elementView.showTools();
    });

    paper.on("blank:pointerdown", function () {
      elementView.hideTools();
      var conection_btn = document.querySelector("#conection_btn");
      conection_btn.style.display = "none";
      // Al hacer clic en el área en blanco (fuera de los elementos), deseleccionar elementos
      selectedElements.forEach(
        (element) => element.findView(paper).unhighlight(),
        (selectedElements = [])
      );
    });

    isContextmenu = false;
    isPanelmenu = true;

    createLinkBetweenSelectedElements();
  }
  // #######################
});
