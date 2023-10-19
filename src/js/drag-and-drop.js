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

    // Crear un rectángulo con el mismo ancho y alto que el texto
    var rect = new joint.shapes.standard.Rectangle({
      position: { x: x, y: y },
      size: { width: textWidth, height: textHeight + 20 },
      type: "stage",
      attrs: {
        body: {
          fill: "#0F0F0F",
          rx: 10, // Radio de borde horizontal
          ry: 10, // Radio de borde vertical
        },
        label: { text: text, fill: "white", fontsize: 10 },
      },
    });

    rect.addTo(graph);

    var boundaryTool = new joint.elementTools.Boundary({
      padding: 20,
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

    //  Encuentra el elemento en el menú por su id y elimínalo
    const draggedElement = document.getElementById(id);
    if (draggedElement) {
      container_stages.removeChild(draggedElement);

      console.log(`Elemento eliminado del menú por id: ${id}`);
    }
  }

  if (type === "groups") {
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

    // Crear un rectángulo con el mismo ancho y alto que el texto
    var rect = new joint.shapes.standard.Rectangle({
      position: { x: x, y: y },
      size: { width: textWidth, height: textHeight + 20 },
      type: "groups",
      attrs: {
        body: {
          fill: "#0F0F0F",
          rx: 10, // Radio de borde horizontal
          ry: 10, // Radio de borde vertical
        },
        label: { text: text, fill: "white", fontsize: 10 },
      },
    });

    rect.addTo(graph);

    var boundaryTool = new joint.elementTools.Boundary({
      padding: 20,
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

  function addElementBackToMenuAndList(text, id, type) {
    // Crear un nuevo elemento <div> basado en el texto y el id
    const div = document.createElement("div");

    div.draggable = true;
    div.textContent = text;
    div.id = id; // Asigna el mismo id al elemento <div>
    div.setAttribute(
      "ondragstart",
      `event.dataTransfer.setData('id', '${id}'); event.dataTransfer.setData('text', '${text}'); event.dataTransfer.setData('type', '${type}')`
    );

    if (type === "stages") {
      div.classList.add(
        "bg-neutral-900",
        "text-center",
        "px-10",
        "py-1",
        "select-none",
        "flex",
        "items-center",
        "justify-center",
        "cursor-pointer",
        "hover:bg-accent-base",
        "rounded-xl",
        "transition",
        "ease-in-out",
        "hover:text-black",
        "ring-2",
        "ring-dark-surface_4",
        "text-md",
        "hover:scale-105"
      );

      // Obtener el contenedor donde se agregarán los elementos de menú
      const container = document.getElementById("stagesContainer");

      // Agregar el nuevo elemento <div> al contenedor de menú
      container.appendChild(div);
    }
  }
});
