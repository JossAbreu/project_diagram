var graph = new joint.dia.Graph();
var paper = new joint.dia.Paper({
  el: document.getElementById("work_space"),
  model: graph,
  width: "100%",
  height: "100%",
  gridSize: 20,
  drawGrid: true,

  background: {
    color: "rgba(0, 0, 0, 0.5)",
  },
});




// Definir las herramientas de edición
var verticesTool = new joint.linkTools.Vertices();
var segmentsTool = new joint.linkTools.Segments();
var sourceArrowheadTool = new joint.linkTools.SourceArrowhead();
var targetArrowheadTool = new joint.linkTools.TargetArrowhead();
var sourceAnchorTool = new joint.linkTools.SourceAnchor();
var targetAnchorTool = new joint.linkTools.TargetAnchor();
var boundaryTool = new joint.linkTools.Boundary();
var isContextmenu = false;
isPanelmenu = false;
var removeButton = new joint.linkTools.Remove({
  distance: 20,
});

var toolsView = new joint.dia.ToolsView({
  tools: [
    verticesTool,
    segmentsTool,
    sourceArrowheadTool,
    targetArrowheadTool,
    sourceAnchorTool,
    targetAnchorTool,
    boundaryTool,
    removeButton,
  ],
});


// Agrega un controlador de eventos al botón "Guardar en JSON".
document.getElementById("save_btn").addEventListener("click", function () {
  // Obtiene el contenido del papel en formato JSON utilizando el método `toJSON` del objeto `Graph`.
  contenidoPapelJSON = paper.model.toJSON();

  // También puedes incluir la información de las herramientas en el JSON, si las has configurado previamente.
  contenidoPapelJSON.tools = paper.options.tools;

  // Convierte el contenido JSON a una cadena de texto.
  const contenidoPapelJSONString = JSON.stringify(contenidoPapelJSON);

  // Puedes mostrar la cadena de texto en la consola para verificar.
  console.log("Contenido", contenidoPapelJSONString);
});

function createLinkBetweenSelectedElements() {
  if (selectedElements.length === 2) {
    var sourceElement = selectedElements[0];
    var targetElement = selectedElements[1];
    var link_from = sourceElement.attributes.text;
    var link_to = targetElement.attributes.text;

    if (sourceElement.attributes.element === targetElement.attributes.element) {
      Swal.fire({
        position: "center",
        icon: "warning",
        html: `<span class="text-accent-base">You cannot connect two elements of the same type</span> `,
        showConfirmButton: true,
        allowOutsideClick: false,
        background: "#141414",
        border: "solid 2px red",
        customClass: {
          container: "#141414",
          cancelButton:
            "bg-neutral-800 px-3 py-1 hover:bg-neutral-950  hover:text-white ml-3 rounded-md text-white",
          confirmButton:
            "bg-red-500 px-4 py-2 hover:bg-accent-base hover:text-white mr-3  rounded-md text-black",
          title: "text-xl text-white", // Clase personalizada para el título
        },
        buttonsStyling: false,
      });
    } else if ( sourceElement.attributes.element === "stage" || sourceElement.attributes.element === "task" && targetElement.attributes.element === "group" || targetElement.attributes.element === "task" ||targetElement.attributes.element === "stage"
    ) {

      if (sourceElement.attributes.element === "group" && targetElement.attributes.element === "stage"  ) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "You can't connect a group with a stage !!",
          showConfirmButton: true,
        });
      }else {
        if ( sourceElement.attributes.connections.includes(targetElement.attributes.id_element )
        ) {
          // Verificar si el targetElement ya existe en las conexiones del sourceElement
          Swal.fire({
            position: "center",
            icon: "warning",
            html: `<span class="text-white"> The connection from <span class="text-accent-base"> ${link_from}  </span> to <span class="text-accent-base ">${link_to}</span> already exists.</span> `,
            showConfirmButton: true,
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
            },
            buttonsStyling: false,
          });
        } else {
          var link = new joint.shapes.standard.Link({
            link_from: link_from,
            link_to: link_to,
            attrs: {
              line: {
                strokeDasharray: "5 5",
                strokeDashoffset: 7.5,
                stroke: "#10FB06",
                "stroke-width": 2,
              },
            },
          });
  
          link.source(sourceElement);
          link.target(targetElement);
  
          // Añade el enlace al gráfico o papel.
          link.addTo(graph); // Si estás utilizando un gráfico (graph).
  
          var linkTools = new joint.dia.ToolsView({
            tools: [
              new joint.linkTools.Vertices(),
              new joint.linkTools.Segments(),
              new joint.linkTools.SourceArrowhead(),
              new joint.linkTools.TargetArrowhead(),
              new joint.linkTools.SourceAnchor(),
              new joint.linkTools.TargetAnchor(),
              new joint.linkTools.Boundary(),
              new joint.linkTools.Remove({
                distance: 20,
                action: function (evt) {
                  Swal.fire({
                    title: `Are you sure you want to delete the connection from ?`,
                    html: `<span style="color: #10FB06;">${link_from}  </span><span style="color: white;">to  </span><span style="color: #10FB06;">${link_to} </span> `,
                    showCancelButton: true,
                    confirmButtonText: "remove",
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
                    },
                    buttonsStyling: false,
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      this.model.remove();
  
                      console.log("link from : ", link_from);
                      console.log("link to  : ", link_to);
  
                      // Encuentra el índice del sourceElement
                      const index = sourceElement.attributes.connections.indexOf(
                        targetElement.attributes.id_element
                      );
                      if (index !== -1) {
                        // Elimina el enlace del array
                        sourceElement.attributes.connections.splice(index, 1);
                        console.log(
                          "Conexiones del source ",
                          sourceElement.attributes.connections
                        );
                      }
  
                      // Encuentra el índice del targetElement
                      const index_target =
                        targetElement.attributes.connections.indexOf(sourceElement.attributes.id_element);
  
                      if (index_target !== -1) {
                        // Elimina el enlace del array
                        targetElement.attributes.connections.splice(index, 1);
                        console.log(
                          "Conexiones del target ",
                          targetElement.attributes.connections
                        );
                      }
  
                      console.log("Elemento source: ", sourceElement);
                      console.log("Elemento tarject: ", targetElement);
  
                      Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Element removed",
                        showConfirmButton: false,
                        timer: 1300,
                      });
                      selectedElements = []; // ¿Necesitas esta línea?
                    }
                  });
                },
              }),
            ],
          });
  
          var linkView = link.findView(paper);
  
          linkView.addTools(linkTools);
  
          paper.on("link:mouseover", function () {
            linkView.showTools();
          });
  
          paper.on("link:mouseout", function () {
            linkView.hideTools();
          });
  
          selectedElements.forEach((element) =>
            element.findView(paper).unhighlight()
          );
  
          sourceElement.attributes.connections.push(
            targetElement.attributes.id_element
          );

           targetElement.attributes.connections.push(sourceElement.attributes.id_element);
  
          console.log(
            "Connections sourceelement ",
            sourceElement.attributes.connections
          );
          console.log(
            "Connections targetElement ",
            targetElement.attributes.connections
          );
  
          selectedElements = [];
        }
      }

        
    
      
    } else {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "you can't connect a group with a stage !!",
        showConfirmButton: true,
      });
    }
  } else {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "You need to select two items",
      showConfirmButton: true,
    });
  }
}

var selectedElements = [];

paper.on("cell:pointerclick", function (cellView) {
  var element = cellView.model;
  var isElement = cellView.model.isElement();
  var message = (isElement ? "Element" : "Link") + " clicked";

  console.log("element", element);

  if (isElement) {
    var id = element.attributes.id_element;
    var text = element.attributes.text;
    var type = element.attributes.element;

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
          confirmButtonText: "remove",
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
          },
          buttonsStyling: false,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
         
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

        


             console.log('elemento eliminado' ,id,text,type);
            addElementBackToMenuAndList(id, text, type);
            selectedElements = [];
            this.model.remove();
          }
        });
      },
    });

    var toolsView = new joint.dia.ToolsView({
      tools: [boundaryTool, removeButton],
    });

    var elementView = element.findView(paper);
    elementView.addTools(toolsView);
    elementView.showTools();

    // alert("es un elemento");
  } else {
    // alert("es un link");

    link_from = element.attributes.link_from;
    link_to = element.attributes.link_to;

    var linkTools = new joint.dia.ToolsView({
      tools: [
        new joint.linkTools.Vertices(),
        new joint.linkTools.Segments(),
        new joint.linkTools.SourceArrowhead(),
        new joint.linkTools.TargetArrowhead(),
        new joint.linkTools.SourceAnchor(),
        new joint.linkTools.TargetAnchor(),
        new joint.linkTools.Boundary(),
        new joint.linkTools.Remove({
          distance: 20,
          action: function (evt) {
            Swal.fire({
              title: `Are you sure you want to delete the connection from ?`,
              html: `<span style="color: #10FB06;">${link_from}  </span><span style="color: white;">to  </span><span style="color: #10FB06;">${link_to} </span> `,
              showCancelButton: true,
              confirmButtonText: "remove",
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
              },
              buttonsStyling: false,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                this.model.remove();

                // Obtén una referencia al elemento en el papel por su ID
                var sourcetId = element.attributes.source.id; // Reemplaza con el ID que estás buscando
                var targectId = element.attributes.target.id; // Reemplaza con el ID que estás buscando
                var sourceElement = paper.model.getCell(sourcetId);
                var targetElement = paper.model.getCell(targectId);

                console.log("link from : ", link_from);
                console.log("link to  : ", link_to);

                // Encuentra el índice del sourceElement
                const index =
                  sourceElement.attributes.connections.indexOf(link_to);
                if (index !== -1) {
                  // Elimina el enlace del array
                  sourceElement.attributes.connections.splice(index, 1);
                  console.log(
                    "Conexiones del source ",
                    sourceElement.attributes.connections
                  );
                }

                // Encuentra el índice del targetElement
                const index_target =
                  targetElement.attributes.connections.indexOf(link_from);

                if (index_target !== -1) {
                  // Elimina el enlace del array
                  targetElement.attributes.connections.splice(index, 1);
                  console.log(
                    "Conexiones del target ",
                    targetElement.attributes.connections
                  );
                }

                console.log("Elemento source: ", sourceElement);
                console.log("Elemento tarject: ", targetElement);

                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Element removed",
                  showConfirmButton: false,
                  timer: 1300,
                });
                selectedElements = []; // ¿Necesitas esta línea?
              }
            });
          },
        }),
      ],
    });

    var linkView = element.findView(paper);

    linkView.addTools(linkTools);

    linkView.showTools();
  }
  console.log(element);
});

paper.on("element:pointerclick", function (elementView) {
  var element = elementView.model;

  if (selectedElements.includes(element)) {
    // Si el elemento ya está en la lista de seleccionados, quítalo
    selectedElements = selectedElements.filter(
      (selectedElement) => selectedElement !== element
    );
    elementView.unhighlight();
    elementView.hideTools();
  } else {
    if (selectedElements.length < 2) {
      // Agrega el elemento a la lista de seleccionados
      selectedElements.push(element);
      console.log(selectedElements);
      elementView.highlight();
      var pathElement = elementView.vel.findOne("path");
      if (pathElement) {
        pathElement.attr({
          stroke: "rgba(238, 251, 0, 1)",
          "stroke-width": 2,
          "stroke-linecap": "round",
        });
      }
    }
  }
});

paper.on("link:mouseenter", function (linkView) {
  // Muestra las herramientas del enlace cuando el mouse entra en él
  linkView.showTools();
});

paper.on("link:mouseleave", function (linkView) {
  // Oculta las herramientas del enlace cuando el mouse sale de él
  linkView.hideTools();
});

paper.on("blank:mouseover", function (evt, x, y) {
  isContextmenu = false;
  isPanelmenu = true;

  // Oculta las herramientas de todos los elementos
  paper.model.getElements().forEach(function (element) {
    element.findView(paper).hideTools();
  });

  // Oculta las herramientas de todos los enlaces
  paper.model.getLinks().forEach(function (link) {
    link.findView(paper).hideTools();
  });
});

paper.on("blank:pointerdown", function (evt, x, y, elementView) {
  closeAll_contextMenu();
  isContextmenu = false;
  isPanelmenu = true;

  // Deselecciona todos los elementos al hacer clic en un área en blanco
  deselect_allElements();
});
paper.on("blank:pointerdblclick", function (evt, x, y, elementView) {
  closeAll_contextMenu();
  isContextmenu = false;
  isPanelmenu = true;

  // Deselecciona todos los elementos al hacer clic en un área en blanco
  deselect_allElements();
});

function deselect_allElements(elementView) {
  // Deselecciona todos los elementos
  selectedElements.forEach(function (selectedElement) {
    var elementView = paper.findViewByModel(selectedElement);
    if (elementView) {
      elementView.unhighlight();
      elementView.hideTools();
      var pathElement = elementView.vel.findOne("path");
      if (pathElement) {
        pathElement.attr({
          stroke: "rgba(238, 251, 0, 1)",
          "stroke-width": 2,
          "stroke-linecap": "round",
        });
      }
    }
  });

  // Limpia la lista de elementos seleccionados
  selectedElements = [];
}

let isContextMenuOpen = false;

paper.on("element:contextmenu", function (elementView, event) {
  deselect_allElements();
  isContextmenu = true;
  isPanelmenu = false;
  var element = elementView.model;
  console.log("Elemento clicado:", element);
  if (element.attributes.element === "stage") {
    openMenucontext_options(event, element);
    isContextMenuOpen = true; // Marcar que el menú está abierto
    selectedElements.push(element);
  } else {
    console.log("no se encontró el elemento");
  }

  if (selectedElements.length < 2 && element.attributes.element === "stage") {
    conection_btn.style.display = "block";

    // Si el elemento no está en la lista de seleccionados, agrégalo
    if (!selectedElements.includes(element)) {
      selectedElements.push(element);
      elementView.highlight();

      // Cambiar el color del borde a verde para el elemento completo
      elementView.vel.findOne("path").attr({
        stroke: "rgba(238, 251, 0, 1)",
        "stroke-width": 2, // Ajusta el ancho del trazo según tus preferencias
        "stroke-linecap": "round",
      });
    } else {
      // // Si el elemento ya está en la lista de seleccionados, quítalo
      // selectedElements = selectedElements.filter(
      //   (selectedElement) => selectedElement !== element
      // );
      // elementView.unhighlight();
      // selectedElements = [];
    }
  }
});

function addElementBackToMenuAndList(id, text, type) {
  console.log(
    "Añadiendo elemento de vuelta al menú y la lista:",
    id,
    text,
    type
  );

  if (type === "stage") {
    const div = document.createElement("div");
    div.id = id;
    div.classList.add(
      "bg-[#065F46]",
      "ring-2",
      "ring-[#064E3B]",
      "px-2",
      "w-max",
      "select-none",
      "item",
      "gap-2",
      "flex",
      "items-center",
      "justify-start",
      "cursor-pointer",
      "hover:bg-[#064E3B]",
      "text-white",
      "text-start",
      "min-h-[2.6rem]",
      "transition",
      "rounded-md",
      "ease-in-out",
      "hover:text-accent-base",
      "ring-2",
      "text-sm",
      "hover:scale-105",
      "capitalize"
    );
    div.draggable = true;
    
    // Crear un elemento <i> para el ícono de Material Design Icons
    const iconElement = document.createElement("i");
    iconElement.classList.add("material-symbols-outlined");
    iconElement.textContent = "flag"; // Reemplaza "insert_icon_here" con el nombre del ícono que desees

    // Agregar el ícono al elemento div
    div.appendChild(iconElement);

    // Crear un contenedor adicional para el texto
    const textContainer = document.createElement("div");
    textContainer.classList.add("truncate");
    textContainer.style.maxWidth= "9.6rem"; // Ajusta la altura máxima según tus necesidades

    // Crear un elemento <span> para el texto
    const textElement = document.createElement("span");
    textElement.textContent = text;

    // Agregar el texto al contenedor
    textContainer.appendChild(textElement);

    // Agregar el contenedor al elemento div
    div.appendChild(textContainer);
    
    div.setAttribute(
      "ondragstart",
      `event.dataTransfer.setData('id', '${id}'); event.dataTransfer.setData('text', '${text}'); event.dataTransfer.setData('type', 'stages');event.dataTransfer.setData('location', 'menu')`
    );
    div.setAttribute("connections", "[]");
    // Agregar el atributo "connections" al elemento div y establecerlo como un arreglo vacío

    // Obtener el contenedor donde se agregarán los elementos de menú
    const container = document.getElementById("stagesContainer");

    // Agregar el nuevo elemento <div> al contenedor de menú
    container.appendChild(div);
  }
}
