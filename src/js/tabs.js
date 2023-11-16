
const search_stages= document.getElementById('search_stages');
const users_list = document.getElementById('users_list');
const search_groups = document.getElementById('search_groups');
const search_users = document.getElementById('search_users');
const search_tasks = document.getElementById('search_tasks');


const users = document.getElementById('users');
const groups = document.getElementById('groups');

function updateTab(tabValue) {

  isPanelmenu = true;
  // Ocultar todas las pestañas
  var tabs = document.getElementsByClassName("hidden");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  // Quitar la clase "active" de todos los botones de pestañas
  var tabButtons = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
    tabButtons[i].classList.remove("xyz-in");
  }

  // Mostrar la pestaña seleccionada y marcar el botón correspondiente
  document.getElementById(tabValue).style.display = "flex";
  document.getElementById(tabValue).classList.add('xyz-in');
  document.querySelector(`[data-tab="${tabValue}"]`).classList.add("active");
  
 console.log(tabValue);

 
  if(tabValue === 'stages'){
    search_stages.style.display = "flex";
    users_list.style.display = "none"; 
    search_tasks.style.display = "none";
  }else if(tabValue === 'users_list'){

    updateSelect('groups');
    search_stages.style.display = "none";
    users_list.style.display = "flex";
    search_users.style.display = "none";
    search_groups.style.display = "flex";
    search_tasks.style.display = "none";
  }else if (tabValue === 'tasks'){
    search_stages.style.display = "none";
    users_list.style.display = "none";
    search_tasks.style.display = "flex";
  }

 

}
document.getElementById("default_open").click();




function updateSelect(selectValue) {

  isPanelmenu = true;
  console.log('selectValue',selectValue);

if(selectValue === "groups"){
  users.style.display = "none";
  groups.style.display = "flex";
  search_users.style.display = "none";
  search_groups.style.display = "flex";
}else if (selectValue === "users"){
  groups.style.display = "none";
  users.style.display = "flex";
  search_users.style.display = "flex";
  search_groups.style.display = "none";
  console.log(container_users_panel);
}


}