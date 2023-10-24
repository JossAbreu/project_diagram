var element_select = null;
// funcion para las opciones de contextmenu
function openMenucontext_options(event, element) {
  element_select = element;
  // Si no se encontró ningún grupo en las conexiones o la lista se actualizó, abre el menú
  const menu = document.getElementById('contextMenu_options');
  menu.style.left = `${event.pageX}px`;
  menu.style.top = `${event.pageY}px`;
  menu.style.display = "block";
 
}

// Función para cerrar el menú contextual
function closeMenuContext_options() {
  const menu = document.getElementById('contextMenu_options');
  menu.style.display = "none";
  isContextMenuOpen = false; // Marcar que el menú está cerrado
}




// ##################################################
//funcion para abrir el contextmenu de group

var button_addGroup= document.querySelector('#button_add_group');
button_addGroup.addEventListener("click",function(event){
  closeMenuContext_users();
console.log('test',element_select)
  // Verificar si el atributo 'connection' del elemento contiene un grupo cuyo texto coincide con algún grupo en 'groupsList'
  if (element_select.attributes.connections) {
    const elementConnections = element_select.attributes.connections;
    const updatedGroupsList = groupsList.filter(group => {
      // Filtrar grupos que no coinciden con ninguna conexión del elemento
      return !elementConnections.includes(group.text);
    });

    // Actualizar la lista de grupos para excluir los grupos coincidentes
    renderGroups(updatedGroupsList);
  }

  // Si no se encontró ningún grupo en las conexiones o la lista se actualizó, abre el menú
  const menu = document.getElementById('contextMenu_groups');
  menu.style.left = `${event.pageX}px`;
  menu.style.top = `${event.pageY}px`;
  menu.style.display = "block";

})


// Función para cerrar el menú contextual
function closeMenuContext_group() {
  const menu = document.getElementById('contextMenu_groups');
  menu.style.display = "none";
  isContextMenuOpen = false; // Marcar que el menú está cerrado

}

// ###########################################################

//funcion para abrir el contextmenu de users

var button_addUser = document.querySelector('#button_add_users');
button_addUser.addEventListener("click",function(event){
closeMenuContext_group();
console.log('test',element_select)
  // Verificar si el atributo 'connection' del elemento contiene un grupo cuyo texto coincide con algún grupo en 'groupsList'
  if (element_select.attributes.connections) {
    const elementConnections = element_select.attributes.connections;
    const updatedUsersList = usersList_workspace.filter(user => {
      // Filtrar grupos que no coinciden con ninguna conexión del elemento
      return !elementConnections.includes(user.text);
    });

    // Actualizar la lista de grupos para excluir los grupos coincidentes
    renderUsers(updatedUsersList);
  }

  // Si no se encontró ningún grupo en las conexiones o la lista se actualizó, abre el menú
  const menu = document.getElementById('contextMenu_users');
  menu.style.left = `${event.pageX}px`;
  menu.style.top = `${event.pageY}px`;
  menu.style.display = "block";

})


// Función para cerrar el menú contextual
function closeMenuContext_users() {
  const menu = document.getElementById('contextMenu_users');
  menu.style.display = "none";
  isContextMenuOpen = false; // Marcar que el menú está cerrado

}
// ############################################

function closeAll_contextMenu() {
closeMenuContext_group();
closeMenuContext_options();
closeMenuContext_users();
}


// Evitar el menú contextual del navegador en toda la página
window.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});







