const apiUrl = 'http://gizmo.local/api/test/stages'; // Reemplaza esto con la URL correcta


const stagesList = []

const renderStages =  (stagesList) => {
    // Crear y agregar los elementos <div> basados en el array
    stagesList.forEach(stage => {
      const div = document.createElement('div');
      div.id = stage.id;
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
      div.textContent = stage.text;
      div.setAttribute('ondragstart', `event.dataTransfer.setData('id', '${stage.id}'); event.dataTransfer.setData('text', '${stage.text}'); event.dataTransfer.setData('type', '${stage.type}')`);
      container_stages.appendChild(div);
    });
}
axios.get(apiUrl)
  .then((response) => {
    stagesList.splice(0)
    // response.data.slice(0, 10)
    stagesList.push(...(response.data.slice(0, 10)))
    //stagesList = response.data;
   
    renderStages(stagesList)

  })
  .catch((error) => {
    console.error('Error al obtener la lista de transiciones:', error);
  });




   // Obtener el contenedor donde se agregarán los elementos
   const container_stages = document.getElementById('stagesContainer');
  
  
  

// #############################################################




const apiUrl_groups = 'http://gizmo.local/api/test/groups'; // Reemplaza esto con la URL correcta


const groupsList = []

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
axios.get(apiUrl_groups)
  .then((response) => {
    groupsList.splice(0)
    // response.data.slice(0, 10)
    groupsList.push(...(response.data.slice(0, 10)))
  
   
    renderGroups(groupsList)

  })
  .catch((error) => {
    console.error('Error al obtener la lista de grupos:', error);
  });

     // Obtener el contenedor donde se agregarán los elementos
     const container_groups_panel = document.getElementById('groupsContainer_panel');
     const container_groups_workspace = document.getElementById('groupsContainer_workspace');
     