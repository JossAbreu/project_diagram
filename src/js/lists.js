const apiUrl = 'http://gizmo.local/api/test/stages'; // Reemplaza esto con la URL correcta


// const stagesList = []

// axios.get(apiUrl)
//   .then((response) => {
//     stagesList.splice(0)
//     response.data.slice(0, 10)
//     stagesList.push(...(response.data.slice(0, 10)))
//     stagesList = response.data;
   
//     renderStages(stagesList)

//   })
//   .catch((error) => {
//     console.error('Error al obtener la lista de transiciones:', error);
//   });




   // Obtener el contenedor donde se agregarán los elementos
   const container_stages = document.getElementById('stagesContainer');
  


const stagesList = [
  {id: 1 ,text:"stage 1", type: "stages"},
  {id: 2 ,text:"stage 2", type: "stages"},
  {id: 3 ,text:"stage 3", type: "stages"},
  {id: 4 ,text:"stage 4", type: "stages"},
  {id: 5 ,text:"stage 5", type: "stages"},
  {id: 6 ,text:"stage 6", type: "stages"}]

const renderStages =  (stagesList) => {
    // Crear y agregar los elementos <div> basados en el array
    stagesList.forEach(stage => {
      const div = document.createElement('div');
      div.id = stage.id;
      div.classList.add(
        'bg-accent-base',
        'text-center',
        'px-10',
        'py-1',
        'select-none',
        'flex',
        'items-center',
        'justify-center',
        'cursor-pointer',
        'hover:bg-accent-base',
        'text-black',
        'transition',
        'ease-in-out',
        'hover:text-black',
        'ring-2',
        'ring-dark-surface_4',
        'text-md',
        'hover:scale-105'
      );
      div.draggable = true;
      div.textContent = stage.text;
      div.setAttribute('ondragstart', `event.dataTransfer.setData('id', '${stage.id}'); event.dataTransfer.setData('text', '${stage.text}'); event.dataTransfer.setData('type', '${stage.type}')`);
      container_stages.appendChild(div);
    });
}

  
renderStages(stagesList);

// #############################################################




const apiUrl_groups = 'http://gizmo.local/api/test/groups'; // Reemplaza esto con la URL correcta

// const groupsList = []
// axios.get(apiUrl_groups)
//   .then((response) => {
//     groupsList.splice(0)
//     // response.data.slice(0, 10)
//     groupsList.push(...(response.data.slice(0, 10)))
  
   
//     renderGroups(groupsList)

//   })
//   .catch((error) => {
//     console.error('Error al obtener la lista de grupos:', error);
//   });

     // Obtener el contenedor donde se agregarán los elementos
     const container_groups_panel = document.getElementById('groupsContainer_panel');
     const container_groups_workspace = document.getElementById('groupsContainer_workspace');


     const groupsList = [
      {id: 1 ,text:"group 1", type: "groups"},
      {id: 2 ,text:"group 2", type: "groups"},
      {id: 3 ,text:"group 3", type: "groups"},
      {id: 4 ,text:"group 4", type: "groups"},
      {id: 5 ,text:"group 5", type: "groups"},
      {id: 6 ,text:"group 6", type: "groups"}]

   

const renderGroups =  (groupsList) => {
    // Crear y agregar los elementos <div> basados en el array
    groupsList.forEach(group => {
      const div = document.createElement('div');
      div.id = group.id;
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
      div.draggable = true;
      div.textContent = group.text;
      div.setAttribute('ondragstart', `event.dataTransfer.setData('id', '${group.id}'); event.dataTransfer.setData('text', '${group.text}'); event.dataTransfer.setData('type', '${group.type}')`);
      const divCopy = div.cloneNode(true); // Clona el elemento div
      container_groups_panel.appendChild(div);
      container_groups_workspace.appendChild(divCopy);
    });
}


renderGroups(groupsList);
     