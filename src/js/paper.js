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

function createLinkBetweenSelectedElements() {
  var conection_btn = document.querySelector('#conection_btn');
  conection_btn.style.display = 'none';
  if (selectedElements.length === 2) {
   
    var sourceElement = selectedElements[0];
    var targetElement = selectedElements[1];
    var link_from = sourceElement.attributes.attrs.label.text
    var link_to = targetElement.attributes.attrs.label.text
    console.log(link_from);
    var link = new joint.shapes.standard.Link({
      attrs: {
        line: {
          strokeDasharray: '5 5',
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
              background:  '#141414',
              border: 'solid 2px red',
              customClass: {
                container: '#141414',
                cancelButton: 'bg-neutral-800 px-3 py-1 hover:bg-neutral-950  hover:text-white ml-3 rounded-md text-white',
                confirmButton: 'bg-red-500 px-3 py-1 hover:bg-red-700 hover:text-white mr-3  rounded-md text-black',
                title: 'text-xl text-white' // Clase personalizada para el título
              },
              buttonsStyling: false
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                this.model.remove();
            
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'element removed',
                  showConfirmButton: false,
                  timer: 1300
                })
                selectedElements = [];
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
    selectedElements = [];
  } else {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "You need to select two items",
      showConfirmButton: false,
      timer: 1300,
    });
  }
}



var selectedElements = [];

paper.on("element:pointerclick", function (elementView) {
  var element = elementView.model;

  var conection_btn = document.querySelector('#conection_btn');
  console.log(conection_btn);



  if (selectedElements.length < 2) {
    conection_btn.style.display = 'block';
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
     
      // Si el elemento ya está en la lista de seleccionados, quítalo
      selectedElements = selectedElements.filter(
        (selectedElement) => selectedElement !== element
      );
      elementView.unhighlight();
      selectedElements = [];
    }
  }



});


 

paper.on("blank:pointerdown", function (evt, x, y) {
  
console.log(selectedElements.length)

  // Itera a través de todos los enlaces en el gráfico y oculta sus herramientas.
  graph.getLinks().forEach(function (link) {
    var linkView = paper.findViewByModel(link);
    if (linkView) {
      linkView.hideTools();
    }
  });
});
let isContextMenuOpen = false; 

paper.on("element:contextmenu", function (elementView, event) {

  var element = elementView.model.attributes.type;
  console.log("Elemento clicado:", element);
  if (element === "stage") {
    openMenucontext(event);
    isContextMenuOpen = true; // Marcar que el menú está abierto
  } else {
    console.log('no se encontró el elemento');
  }
});

function validation_stages_and_groups (){
  
}