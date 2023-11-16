


// const apiUrl = "/api/test/stages"; // Replace this with the correct URL
const stagesList = [
  {id: 1 ,text:"stage 1", type: "stages"},
  {id: 2 ,text:"stage 2", type: "stages"},
  {id: 3 ,text:"stage 3", type: "stages"},
  {id: 4 ,text:"stage 4", type: "stages"},
  {id: 5 ,text:"stage 5", type: "stages"},
  {id: 6 ,text:"stage 6", type: "stages"}]
  
// loadingBackdrop.style.display = "flex";
// loadingIndicator.style.display = "flex";

// $.ajax({
//   url: apiUrl,
//   method: 'GET',
//   success: function(response) {
//     stagesList.splice(0);
//     stagesList.push(...response);

//     // Get all IDs in the paper
//     const allIds = findAllIdsInPaper(paper);

//     console.log("Todos los IDs en el papel:", allIds);
//     console.log("Todos los IDs stages :", stagesList);

//     // Filter stages that do not exist in the paper
//     const filteredStages = stagesList.filter((stage) => {
//       return allIds.filter((i) => i.id === stage.id).length === 0;
//     });

//     console.log("Lista filtrada de stages:", filteredStages);

//     renderStages(filteredStages);
//   },
//   error: function(error) {
//     console.error("Error al obtener la lista de stages:", error);
//   }
// });

// Obtener el contenedor donde se agregarán los elementos
const container_stages = document.getElementById("stagesContainer");

const renderStages = (stagesList) => {
  // Crear y agregar los elementos <div> basados en el array
  stagesList.forEach((stage) => {
    const div = document.createElement("div");
    div.id = stage.id;
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
    textElement.textContent = stage.text;

    // Agregar el texto al contenedor
    textContainer.appendChild(textElement);

    // Agregar el contenedor al elemento div
    div.appendChild(textContainer);

    div.setAttribute(
      "ondragstart",
      `event.dataTransfer.setData('id', '${stage.id}'); event.dataTransfer.setData('text', '${stage.text}'); event.dataTransfer.setData('type', '${stage.type}');event.dataTransfer.setData('location', 'menu')`
    );
    div.setAttribute("connections", "[]");
    div.setAttribute("data-tooltip", "Top directed tooltip");
    div.setAttribute("data-tooltip-position", "top");
    container_stages.appendChild(div);
    loadingBackdrop.style.display = "none";
    loadingIndicator.style.display = "none";
  });
};


renderStages(stagesList);
// #############################################################

// const apiUrl_groups = "/api/test/groups"; // Reemplaza esto con la URL correcta

// // const groupsList = [];
const groupsList = [
  {id: 1 ,text:"group 1", type: "groups"},
  {id: 2 ,text:"group 2", type: "groups"},
  {id: 3 ,text:"group 3", type: "groups"},
  {id: 4 ,text:"group 4", type: "groups"},
  {id: 5 ,text:"group 5", type: "groups"},
  {id: 6 ,text:"group 6", type: "groups"}]

// $.ajax({
//   url: apiUrl_groups,
//   method: 'GET',
//   success: function(response) {
//     groupsList.splice(0);
//     groupsList.push(...response);

//     renderGroups(groupsList);
//   },
//   error: function(error) {
//     console.error("Error al obtener la lista de grupos:", error);
//   }
// });
// // Obtener el contenedor donde se agregarán los elementos

const container_groups_workspace = document.getElementById(
  "groupsContainer_workspace"
);

const renderGroups = (groupsList) => {
  // Eliminar los elementos anteriores de los contenedores

  container_groups_workspace.innerHTML = "";

  // Crear y agregar los elementos <div> basados en el array
  groupsList.forEach((group) => {
    const div = document.createElement("div");
    div.id = group.id;
    div.classList.add(
    
      "bg-[#881337]",
      "ring-2",
      "ring-[#4a044e]",
      "px-2",
      "w-max",
      "select-none",
      "item_workspace",
      "gap-2",
      "flex",
      "items-center",
      "justify-start",
      "cursor-pointer",
      "hover:bg-[#4a044e]",
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
    iconElement.textContent = "groups"; // Reemplaza "insert_icon_here" con el nombre del ícono que desees

    // Agregar el ícono y el texto al elemento div
    div.appendChild(iconElement);
     // Crear un contenedor adicional para el texto
     const textContainer = document.createElement("div");
     textContainer.classList.add("truncate");
     textContainer.style.maxWidth= "9.6rem"; // Ajusta la altura máxima según tus necesidades
 
     // Crear un elemento <span> para el texto
     const textElement = document.createElement("span");
     textElement.textContent = group.text;
 
     // Agregar el texto al contenedor
     textContainer.appendChild(textElement);
 
     // Agregar el contenedor al elemento div
     div.appendChild(textContainer);

    div.setAttribute(
      "ondragstart",
      `event.dataTransfer.setData('id', '${group.id}'); event.dataTransfer.setData('text', '${group.text}'); event.dataTransfer.setData('type', '${group.type}')`
    );
    container_groups_workspace.appendChild(div);
  });
};
renderGroups(groupsList);
// #############################################

const groupsList_panel = [
  {id: 1 ,text:"group 1", type: "groups"},
  {id: 2 ,text:"group 2", type: "groups"},
  {id: 3 ,text:"group 3", type: "groups"},
  {id: 4 ,text:"group 4", type: "groups"},
  {id: 5 ,text:"group 5", type: "groups"},
  {id: 6 ,text:"group 6", type: "groups"}]

// $.ajax({
//   url: apiUrl_groups,
//   method: 'GET',
//   success: function(response) {
//     groupsList_panel.splice(0);
//     groupsList_panel.push(...response);

//     renderGroups_panel(groupsList_panel);
//   },
//   error: function(error) {
//     console.error("Error al obtener la lista de grupos:", error);
//   }
// });


// Obtener el contenedor donde se agregarán los elementos
const container_groups_panel = document.getElementById("groupsContainer_panel");

const renderGroups_panel = (groupsList_panel) => {
  // Crear y agregar los elementos <div> basados en el array
  groupsList_panel.forEach((group) => {
    const div = document.createElement("div");
    div.id = group.id;
    div.classList.add(
      
      "bg-[#881337]",
      "ring-2",
      "ring-[#4a044e]",
      "px-2",
      "w-max",
      "select-none",
      "item",
      "gap-2",
      "flex",
      "items-center",
      "justify-start",
      "cursor-pointer",
      "hover:bg-[#4a044e]",
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
    iconElement.textContent = "groups"; // Reemplaza "insert_icon_here" con el nombre del ícono que desees

    // Agregar el ícono y el texto al elemento div
    div.appendChild(iconElement);

     // Crear un contenedor adicional para el texto
     const textContainer = document.createElement("div");
     textContainer.classList.add("truncate");
     textContainer.style.maxWidth= "9.6rem"; // Ajusta la altura máxima según tus necesidades
 
     // Crear un elemento <span> para el texto
     const textElement = document.createElement("span");
     textElement.textContent = group.text;
 
     // Agregar el texto al contenedor
     textContainer.appendChild(textElement);
 
     // Agregar el contenedor al elemento div
     div.appendChild(textContainer);

    div.setAttribute(
      "ondragstart",
      `event.dataTransfer.setData('id', '${group.id}'); event.dataTransfer.setData('text', '${group.text}'); event.dataTransfer.setData('type', '${group.type}')`
    );

    container_groups_panel.appendChild(div);
  });
};
renderGroups_panel(groupsList_panel);
// #################################

// const apiUrl_users = "/api/test/users"; // Reemplaza esto con la URL correcta

const usersList_panel = [
  {id: 1 ,text:"user 1", type: "users"},
  {id: 2 ,text:"user 2", type: "users"},
  {id: 3 ,text:"user 3", type: "users"},
  {id: 4 ,text:"user 4", type: "users"},
  {id: 5 ,text:"user 5", type: "users"},
  {id: 6 ,text:"user 6", type: "users"}]

// $.ajax({
//   url: apiUrl_users,
//   method: 'GET',
//   success: function(response) {
//     usersList_panel.splice(0);
//     usersList_panel.push(...response);

//     renderUsers_panel(usersList_panel);
//   },
//   error: function(error) {
//     console.error("Error al obtener la lista de grupos:", error);
//   }
// });

// Obtener el contenedor donde se agregarán los elementos
const container_users_panel = document.getElementById("usersContainer_panel");

const renderUsers_panel = (usersList_panel) => {
  // Crear y agregar los elementos <div> basados en el array
  usersList_panel.forEach((user) => {

    const div = document.createElement("div");
    div.id = user.id;
    div.classList.add(
      "bg-[#0C4A6E]",
      "ring-2",
      "ring-[#082f49]",
      "px-2",
      "py-1",
      "select-none",
      "item",
      "gap-2",
      "flex",
      "items-center",
      "justify-start",
      "cursor-pointer",
      "hover:bg-[#082f49]",
      "text-white",
      "text-start",
      "min-h-[2.6rem]",
      "transition",
      "rounded-md",
      "ease-in-out",
      "hover:text-accent-base",
      "ring-2",
      "text-sm",
      "w-max",
      "hover:scale-105",
      "capitalize"

      ///

     
    );
    div.draggable = true;

    // Crear un elemento <i> para el ícono de Material Design Icons
    const iconElement = document.createElement("i");
    iconElement.classList.add("material-symbols-outlined");
    iconElement.textContent = "person"; // Reemplaza "insert_icon_here" con el nombre del ícono que desees

    // Agregar el ícono y el texto al elemento div
    div.appendChild(iconElement);
      // Crear un contenedor adicional para el texto
     const textContainer = document.createElement("div");
     textContainer.classList.add("truncate");
     textContainer.style.maxWidth= "9.6rem"; // Ajusta la altura máxima según tus necesidades
 
     // Crear un elemento <span> para el texto
     const textElement = document.createElement("span");
     textElement.textContent = user.text;
 
     // Agregar el texto al contenedor
     textContainer.appendChild(textElement);
 
     // Agregar el contenedor al elemento div
     div.appendChild(textContainer);


    div.setAttribute(
      "ondragstart",
      `event.dataTransfer.setData('id', '${user.id}'); event.dataTransfer.setData('text', '${user.text}'); event.dataTransfer.setData('type', '${user.type}')`
    );

    container_users_panel.appendChild(div);
  });
};

renderUsers_panel(usersList_panel);
// ####################################

const usersList_workspace = [
  {id: 1 ,text:"user 1", type: "users"},
  {id: 2 ,text:"user 2", type: "users"},
  {id: 3 ,text:"user 3", type: "users"},
  {id: 4 ,text:"user 4", type: "users"},
  {id: 5 ,text:"user 5", type: "users"},
  {id: 6 ,text:"user 6", type: "users"}]

// $.ajax({
//   url: apiUrl_users,
//   method: 'GET',
//   success: function(response) {
//     usersList_workspace.splice(0);
//     usersList_workspace.push(...response);

//     renderUsers(usersList_workspace);
//   },
//   error: function(error) {
//     console.error("Error al obtener la lista de grupos:", error);
//   }
// });


// Obtener el contenedor donde se agregarán los elementos

const container_users_workspace = document.getElementById(
  "usersContainer_workspace"
);

const renderUsers = (usersList_workspace) => {
  // Eliminar los elementos anteriores de los contenedores

  container_users_workspace.innerHTML = "";

  // Crear y agregar los elementos <div> basados en el array
  usersList_workspace.forEach((user) => {
    const div = document.createElement("div");
    div.id = user.id;
    div.classList.add(
      "bg-[#0C4A6E]",
      "ring-2",
      "ring-[#082f49]",
      "px-2",
      "py-1",
      "select-none",
      "item_workspace",
      "gap-2",
      "flex",
      "items-center",
      "justify-start",
      "cursor-pointer",
      "hover:bg-[#082f49]",
      "text-white",
      "text-start",
      "min-h-[2.6rem]",
      "transition",
      "rounded-md",
      "ease-in-out",
      "hover:text-accent-base",
      "ring-2",
      "text-sm",
      "w-max",
      "hover:scale-105",
      "capitalize"
    );
    div.draggable = true;

    // Crear un elemento <i> para el ícono de Material Design Icons
    const iconElement = document.createElement("i");
    iconElement.classList.add("material-symbols-outlined");
    iconElement.textContent = "person"; // Reemplaza "insert_icon_here" con el nombre del ícono que desees

    // Agregar el ícono y el texto al elemento div
    div.appendChild(iconElement);
    div.appendChild(document.createTextNode(user.text));

    div.setAttribute(
      "ondragstart",
      `event.dataTransfer.setData('id', '${user.id}'); event.dataTransfer.setData('text', '${user.text}'); event.dataTransfer.setData('type', '${user.type}')`
    );
    container_users_workspace.appendChild(div);
  });
};

renderUsers(usersList_workspace);
// ######################################


// const apiUrl_tasks = "/api/test/tasks"; // Reemplaza esto con la URL correcta

const tasksList_panel = [ 
{id: 1 ,text:"task 1", type: "tasks"},
{id: 2 ,text:"task 2", type: "tasks"},
{id: 3 ,text:"task 3", type: "tasks"},
{id: 4 ,text:"task 4", type: "tasks"},
{id: 5 ,text:"task 5", type: "tasks"},
{id: 6 ,text:"task 6", type: "tasks"}];

// $.ajax({
//   url: apiUrl_tasks,
//   method: 'GET',
//   success: function(response) {
//     tasksList_panel.splice(0);
//     tasksList_panel.push(...response);

//     renderTasks_panel(tasksList_panel);
//   },
//   error: function(error) {
//     console.error("Error al obtener la lista de grupos:", error);
//   }
// });

// Obtener el contenedor donde se agregarán los elementos
const container_tasks_panel = document.getElementById("tasksContainer_panel");

const renderTasks_panel = (tasksList_panel) => {
  // Crear y agregar los elementos <div> basados en el array
  tasksList_panel.forEach((task) => {

    const div = document.createElement("div");
    div.id = task.id;
    div.classList.add(
      "bg-[#854D0E]",
      "ring-2",
      "ring-[#713F12]",
      "px-2",
      "py-1",
      "select-none",
      "item",
      "gap-2",
      "flex",
      "items-center",
      "justify-start",
      "cursor-pointer",
      "hover:bg-[#713F12]",
      "text-white",
      "text-start",
      "min-h-[2.6rem]",
      "transition",
      "rounded-md",
      "ease-in-out",
      "hover:text-accent-base",
      "ring-2",
      "text-sm",
      "w-max",
      "hover:scale-105",
      "capitalize"
    );
    div.draggable = true;

    // Crear un elemento <i> para el ícono de Material Design Icons
    const iconElement = document.createElement("i");
    iconElement.classList.add("material-symbols-outlined");
    iconElement.textContent = "settings"; // Reemplaza "insert_icon_here" con el nombre del ícono que desees

    // Agregar el ícono y el texto al elemento div
    div.appendChild(iconElement);
    div.appendChild(document.createTextNode(task.text));


    div.setAttribute(
      "ondragstart",
      `event.dataTransfer.setData('id', '${task.id}'); event.dataTransfer.setData('text', '${task.text}'); event.dataTransfer.setData('type', '${task.type}')`
    );

    container_tasks_panel.appendChild(div);
  });
};

renderTasks_panel(tasksList_panel);
// ###########################


function render_multiList() {
  // Muestra el GIF de carga
  const loadingBackdrop = document.getElementById("loadingBackdrop");
  const loadingIndicator = document.getElementById("loadingIndicator");
  loadingBackdrop.style.display = "flex";
  loadingIndicator.style.display = "flex";
  // Limpia los contenedores antes de volver a renderizar
  container_stages.innerHTML = "";
  container_groups_panel.innerHTML = "";
  container_users_panel.innerHTML = "";

  // Llama a las funciones de renderizado nuevamente para obtener los datos más recientes
  $.ajax({
    url: apiUrl,
    method: 'GET',
    success: function(response) {
      stagesList.splice(0);
      stagesList.push(...response.slice(0, 10));

      // Get all IDs in the paper
      const allIds = findAllIdsInPaper(paper);

      console.log("Todos los IDs en el papel:", allIds);
      console.log("Todos los IDs stages :", stagesList);

      // Filter stages that do not exist in the paper
      const filteredStages = stagesList.filter((stage) => {
        return allIds.filter((i) => i.id === stage.id).length === 0;
      });

      console.log("Lista filtrada de stages:", filteredStages);

      renderStages(filteredStages);
    },
    error: function(error) {
      console.error("Error al obtener la lista de stages:", error);
    }
  });


  $.ajax({
  url: apiUrl_groups,
  method: 'GET',
  success: function(response) {
    groupsList_panel.splice(0);
    groupsList_panel.push(...response);

    renderGroups_panel(groupsList_panel);
  },
  error: function(error) {
    console.error("Error al obtener la lista de grupos:", error);
  }
});

$.ajax({
  url: apiUrl_users,
  method: 'GET',
  success: function(response) {
    usersList_panel.splice(0);
    usersList_panel.push(...response);

    renderUsers_panel(usersList_panel);
  },
  error: function(error) {
    console.error("Error al obtener la lista de grupos:", error);
  }
});

 
}


// search global ids
function findAllIdsInPaper(paper) {
  const allIds = [];

  // Obtén todos los IDs de los elementos en el papel
  paper.model.getElements().forEach(function(element) {
    // console.log('element for findAllIdsInPaper',element)
    allIds.push({
      id: parseInt(element.attributes.id_element)
    }); // Convierte el ID en cadena y crea un objeto
  });

  // Obtén todos los IDs de los enlaces en el papel
  paper.model.getLinks().forEach(function(link) {
    allIds.push({
      id: parseInt(link.id_element)
    }); // Convierte el ID en cadena y crea un objeto
  });

  return allIds;
}



