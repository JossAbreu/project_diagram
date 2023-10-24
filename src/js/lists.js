// const apiUrl = "http://gizmo.local/api/test/stages"; // Reemplaza esto con la URL correcta

// const stagesList = [];
// loadingBackdrop.style.display = "flex";
// loadingIndicator.style.display = "flex";


// axios
//   .get(apiUrl)
//   .then((response) => {
//     stagesList.splice(0);
//     // response.data.slice(0, 10);
//     stagesList.push(...response.data);
//     renderStages(stagesList);

//   })
//   .catch((error) => {
//     console.error("Error al obtener la lista de stages:", error);
//   });


const stagesList = [
  {id: 1 ,text:"stage 1", type: "stages"},
  {id: 2 ,text:"stage 2", type: "stages"},
  {id: 3 ,text:"stage 3", type: "stages"},
  {id: 4 ,text:"stage 4", type: "stages"},
  {id: 5 ,text:"stage 5", type: "stages"},
  {id: 6 ,text:"stage 6", type: "stages"}]
// Obtener el contenedor donde se agregarán los elementos
const container_stages = document.getElementById("stagesContainer");

const renderStages = (stagesList) => {

  // Crear y agregar los elementos <div> basados en el array
  stagesList.forEach((stage) => {
    const div = document.createElement("div");
    div.id = stage.id;
    div.classList.add(
      "bg-accent-base",
      "text-center",
      "px-10",
      "py-1",
      "select-none",
      "item",
      "flex",
      "items-center",
      "justify-center",
      "cursor-pointer",
      "hover:bg-accent-base",
      "text-black",
      "transition",
      "ease-in-out",
      "hover:text-black",
      "ring-2",
      "ring-dark-surface_4",
      "text-md",
      "hover:scale-105"
    );
    div.draggable = true;
    div.textContent = stage.text;
    div.setAttribute(
      "ondragstart",
      `event.dataTransfer.setData('id', '${stage.id}'); event.dataTransfer.setData('text', '${stage.text}'); event.dataTransfer.setData('type', '${stage.type}');event.dataTransfer.setData('location', 'menu')`
    );
    div.setAttribute(
      "connections",
      "[]"
    );
   // Agregar el atributo "connections" al elemento div y establecerlo como un arreglo vacío

 
    container_stages.appendChild(div);
    loadingBackdrop.style.display = "none";
    loadingIndicator.style.display = "none";
  });
};



// #############################################################

// const apiUrl_groups = "http://gizmo.local/api/test/groups"; // Reemplaza esto con la URL correcta

// const groupsList = [];
const groupsList = [
  {id: 1 ,text:"group 1", type: "groups"},
  {id: 2 ,text:"group 2", type: "groups"},
  {id: 3 ,text:"group 3", type: "groups"},
  {id: 4 ,text:"group 4", type: "groups"},
  {id: 5 ,text:"group 5", type: "groups"},
  {id: 6 ,text:"group 6", type: "groups"}]

// axios
//   .get(apiUrl_groups)
//   .then((response) => {
//     groupsList.splice(0);
//     // response.data.slice(0, 10)
//     groupsList.push(...response.data);

//     renderGroups(groupsList);
//   })
//   .catch((error) => {
//     console.error("Error al obtener la lista de grupos:", error);
//   });

// Obtener el contenedor donde se agregarán los elementos

const container_groups_workspace = document.getElementById(
  "groupsContainer_workspace"
);

const renderGroups = (groupsList) => {
   // Eliminar los elementos anteriores de los contenedores

   container_groups_workspace.innerHTML = '';
 
  // Crear y agregar los elementos <div> basados en el array
  groupsList.forEach((group) => {
    const div = document.createElement("div");
    div.id = group.id;
    div.classList.add(
      "bg-neutral-900",
      "text-center",
      "px-10",
      "py-1",
      "item_workspace",
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
    div.draggable = true;
    div.textContent = group.text;
    div.setAttribute(
      "ondragstart",
      `event.dataTransfer.setData('id', '${group.id}'); event.dataTransfer.setData('text', '${group.text}'); event.dataTransfer.setData('type', '${group.type}')`
    );
    container_groups_workspace.appendChild(div);
  });
};

// #############################################



// const groupsList_panel = [];
const groupsList_panel = [
  {id: 1 ,text:"group 1", type: "groups"},
  {id: 2 ,text:"group 2", type: "groups"},
  {id: 3 ,text:"group 3", type: "groups"},
  {id: 4 ,text:"group 4", type: "groups"},
  {id: 5 ,text:"group 5", type: "groups"},
  {id: 6 ,text:"group 6", type: "groups"}]

// axios
//   .get(apiUrl_groups)
//   .then((response) => {
//     groupsList_panel.splice(0);
//     // response.data.slice(0, 10)
//     groupsList_panel.push(...response.data);

//     renderGroups_panel(groupsList_panel);
//   })
//   .catch((error) => {
//     console.error("Error al obtener la lista de grupos:", error);
//   });

// Obtener el contenedor donde se agregarán los elementos
const container_groups_panel = document.getElementById("groupsContainer_panel");

const renderGroups_panel = (groupsList_panel) => {

 
  // Crear y agregar los elementos <div> basados en el array
  groupsList_panel.forEach((group) => {
    const div = document.createElement("div");
    div.id = group.id;
    div.classList.add(
      "bg-neutral-900",
      "text-center",
      "px-10",
      "py-1",
      "select-none",
      "flex",
      "item",
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
    div.draggable = true;
    div.textContent = group.text;
    div.setAttribute(
      "ondragstart",
      `event.dataTransfer.setData('id', '${group.id}'); event.dataTransfer.setData('text', '${group.text}'); event.dataTransfer.setData('type', '${group.type}')`
    );

    container_groups_panel.appendChild(div);

  });
};

// #################################


// const apiUrl_users= "http://gizmo.local/api/test/teams"; // Reemplaza esto con la URL correcta

// const usersList_panel = [];
const usersList_panel = [
  {id: 1 ,text:"user 1", type: "users"},
  {id: 2 ,text:"user 2", type: "users"},
  {id: 3 ,text:"user 3", type: "users"},
  {id: 4 ,text:"user 4", type: "users"},
  {id: 5 ,text:"user 5", type: "users"},
  {id: 6 ,text:"user 6", type: "users"}]

// axios
//   .get(apiUrl_users)
//   .then((response) => {
//     usersList_panel.splice(0);
//     // response.data.slice(0, 10)
//     usersList_panel.push(...response.data);

//     renderUsers_panel(usersList_panel);
//   })
//   .catch((error) => {
//     console.error("Error al obtener la lista de users:", error);
//   });

// Obtener el contenedor donde se agregarán los elementos
const container_users_panel = document.getElementById("usersContainer_panel");

const renderUsers_panel = (usersList_panel) => {

 
  // Crear y agregar los elementos <div> basados en el array
  usersList_panel.forEach((user) => {
    const div = document.createElement("div");
    div.id = user.id;
    div.classList.add(
      "bg-neutral-900",
      "text-center",
      "px-10",
      "py-1",
      "select-none",
      "flex",
      "item-workspace",
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
    div.draggable = true;
    div.textContent = user.text;
    div.setAttribute(
      "ondragstart",
      `event.dataTransfer.setData('id', '${user.id}'); event.dataTransfer.setData('text', '${user.text}'); event.dataTransfer.setData('type', '${user.type}')`
    );

    container_users_panel.appendChild(div);

  });
};

// ####################################



// const usersList_workspace = [];
const usersList_workspace = [
  {id: 1 ,text:"user 1", type: "users"},
  {id: 2 ,text:"user 2", type: "users"},
  {id: 3 ,text:"user 3", type: "users"},
  {id: 4 ,text:"user 4", type: "users"},
  {id: 5 ,text:"user 5", type: "users"},
  {id: 6 ,text:"user 6", type: "users"}]

// axios
//   .get(apiUrl_users)
//   .then((response) => {
//     usersList_workspace.splice(0);
//     // response.data.slice(0, 10)
//     usersList_workspace.push(...response.data);

//     renderUsers(usersList_workspace);
//   })
//   .catch((error) => {
//     console.error("Error al obtener la lista de grupos:", error);
//   });

// Obtener el contenedor donde se agregarán los elementos

const container_users_workspace = document.getElementById(
  "usersContainer_workspace"
);

const renderUsers = (usersList_workspace) => {
   // Eliminar los elementos anteriores de los contenedores

   container_users_workspace.innerHTML = '';
 
  // Crear y agregar los elementos <div> basados en el array
  usersList_workspace.forEach((user) => {
    const div = document.createElement("div");
    div.id = user.id;
    div.classList.add(
      "bg-neutral-900",
      "text-center",
      "px-10",
      "py-1",
      "item_workspace",
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
    div.draggable = true;
    div.textContent = user.text;
    div.setAttribute(
      "ondragstart",
      `event.dataTransfer.setData('id', '${user.id}'); event.dataTransfer.setData('text', '${user.text}'); event.dataTransfer.setData('type', '${user.type}')`
    );
    container_users_workspace.appendChild(div);
  });
};





function render_multiList() {
  // Muestra el GIF de carga
  const loadingBackdrop = document.getElementById("loadingBackdrop");
  const loadingIndicator = document.getElementById("loadingIndicator");
  loadingBackdrop.style.display = "flex";
  loadingIndicator.style.display = "flex";
  
  // Limpia los contenedores antes de volver a renderizar
  container_stages.innerHTML = '';
  container_groups_panel.innerHTML = '';
  container_users_panel.innerHTML = '';

  

 setTimeout(() => {
  renderStages(stagesList);
renderUsers(usersList_workspace);
renderGroups(groupsList);
renderGroups_panel(groupsList_panel);
renderUsers_panel(usersList_panel);
  loadingBackdrop.style.display = "none";
    loadingIndicator.style.display = "none";
 }, 2000);
  // // Llama a las funciones de renderizado nuevamente para obtener los datos más recientes
  // axios.get(apiUrl)
  //   .then((response) => {
  //     stagesList.splice(0);
  //     stagesList.push(...response.data);
  //     renderStages(stagesList);
  //   })
  //   .catch((error) => {
  //     console.error("Error al obtener la lista de stages:", error);
  //   });

  // axios.get(apiUrl_groups)
  //   .then((response) => {
  //     groupsList_panel.splice(0);
  //     groupsList_panel.push(...response.data);
  //     renderGroups_panel(groupsList_panel);
  //   })
  //   .catch((error) => {
  //     console.error("Error al obtener la lista de grupos:", error);
  //   });

  // axios.get(apiUrl_users)
  //   .then((response) => {
  //     usersList_panel.splice(0);
  //     usersList_panel.push(...response.data);
  //     renderUsers_panel(usersList_panel);

  //     // Oculta el GIF de carga una vez que los datos se hayan cargado y renderizado
  //     loadingBackdrop.style.display = "none";
  //     loadingIndicator.style.display = "none";
    
  //   })
  //   .catch((error) => {
  //     console.error("Error al obtener la lista de users:", error);

  //     // Asegúrate de ocultar el GIF de carga en caso de error
  //     loadingBackdrop.style.display = "none";
  //     loadingIndicator.style.display = "none";
  //   });
}


renderStages(stagesList);
renderUsers(usersList_workspace);
renderGroups(groupsList);
renderGroups_panel(groupsList_panel);
renderUsers_panel(usersList_panel);
