function active_menu (){
    isPanelmenu = true;
    isContextmenu = false;
}




function filter_stage() {
    // Obtén el valor del campo de búsqueda
    var filterValue = document.querySelector("#filterInput_stages").value.toLowerCase();
  
  
    // Obtén las listas de elementos
    var stagesContainer = document.getElementById("stagesContainer");

  
    // Obtén todos los elementos de las listas
    var stagesItems = stagesContainer.getElementsByClassName("item");

    // Itera a través de los elementos y muestra/oculta según el valor de búsqueda
    for (var i = 0; i < stagesItems.length; i++) {
      var stageItem = stagesItems[i];
      if (stageItem.textContent.toLowerCase().includes(filterValue)) {
        stageItem.style.display = "block";
      } else {
        stageItem.style.display = "none";
      }
    }
  
    // for (var i = 0; i < taskItems.length; i++) {
    //   var taskItem = taskItems[i];
    //   if (taskItem.textContent.toLowerCase().includes(filterValue)) {
    //     taskItem.style.display = "block";
    //   } else {
    //     taskItem.style.display = "none";
    //   }
    // }
      
    
  }
  
  function filter_groups() {
    // Obtén el valor del campo de búsqueda
    var filterValue = document.querySelector("#filterInput_groups").value.toLowerCase();
    // Obtén las listas de elementos
    var groupsContainer = document.getElementById("groupsContainer_panel");
   
    // Obtén todos los elementos de las listas
    var groupsItems = groupsContainer.getElementsByClassName("item");
 
  
   
  
    for (var i = 0; i < groupsItems.length; i++) {
      var groupItem = groupsItems[i];
      if (groupItem.textContent.toLowerCase().includes(filterValue)) {
        groupItem.style.display = "block";
      } else {
        groupItem.style.display = "none";
      }
    }
      
  }


  function filter_users() {
    // Obtén el valor del campo de búsqueda
    var filterValue = document.querySelector("#filterInput_users").value.toLowerCase();
  
  
    // Obtén las listas de elementos

    var usersContainer = document.getElementById("usersContainer_panel");
    var taskContainer = document.getElementById("Task");
  
    // Obtén todos los elementos de las listas
    
    var usersItems = usersContainer.getElementsByClassName("item");
 
  
    for (var i = 0; i < usersItems.length; i++) {
        var usersItem = usersItems[i];
        if (usersItem.textContent.toLowerCase().includes(filterValue)) {
            usersItem.style.display = "block";
        } else {
            usersItem.style.display = "none";
        }
      }
    
      
    
  }
  function filterItems_contexmenu_groups() {
    // Obtén el valor del campo de búsqueda
    var filterValue_workspace = document.getElementById("filterInput_workspace_groups").value.toLowerCase();
  
    // Obtén las listas de elementos
    var groupsContainer_workspace = document.getElementById("groupsContainer_workspace");
  
    // Obtén todos los elementos de las listas
    var groupsItems_workspace = groupsContainer_workspace.getElementsByClassName("item_workspace");
  
    // Itera a través de los elementos y muestra/oculta según el valor de búsqueda
    for (var i = 0; i < groupsItems_workspace.length; i++) {
      var group_item_contexmenu = groupsItems_workspace[i]; // Cambia el nombre de la variable
      if (group_item_contexmenu.textContent.toLowerCase().includes(filterValue_workspace)) {
        group_item_contexmenu.style.display = "block";
      } else {
        group_item_contexmenu.style.display = "none";
      }
    }
  }
  
  function filterItems_contexmenu_users() {
    // Obtén el valor del campo de búsqueda
    var filterValue_workspace = document.getElementById("filterInput_workspace_users").value.toLowerCase();
  
    // Obtén las listas de elementos
    var usersContainer_workspace = document.getElementById("usersContainer_workspace");
  
    // Obtén todos los elementos de las listas
    var usersItems_workspace = usersContainer_workspace.getElementsByClassName("item_workspace");
  
    // Itera a través de los elementos y muestra/oculta según el valor de búsqueda
    for (var i = 0; i < usersItems_workspace.length; i++) {
      var users_item_contexmenu = usersItems_workspace[i]; // Cambia el nombre de la variable
      if (users_item_contexmenu.textContent.toLowerCase().includes(filterValue_workspace)) {
        users_item_contexmenu.style.display = "block";
      } else {
        users_item_contexmenu.style.display = "none";
      }
    }
  }
  

  function show_shortcuts () {
    Swal.fire({
      position: 'center',
      title: `<span class="flex items-center gap-2">Shortcuts <span class="material-symbols-outlined text-accent-base">keyboard_alt</span></span>`,
      html: `    
  <ul class="flex flex-col gap-2">
      <li class="grid grid-cols-2 gap-4 items-center  bg-neutral-800 rounded-md px-3 py-1 ring-1 ring-black">
          <div class="grid grid-cols-3 gap-1 items-center">
              <div class="flex flex-col items-center">
                  <img src="./src/images/icons8-llave-del-espacio-48.png" alt="img_ctrl">
                  <label class="text-xs text-white ">Space</label>
              </div>
              
              <div class="flex flex-col items-center">
                  <img src="./src/images/icons8-plus-emoji-48.png" class="w-7 h-7  " alt="img_plus">
                  <label class="text-xs text-white "></label>
              </div>
              <div class="flex flex-col items-center gap-2">
                  <img src="./src/images/icons8-clic-izquierdo-.png"  alt="img_click">
                  <label class="text-xs text-white ">Click</label>
              </div>
            
          </div> 
           <h1 class="font-semibold text-white">Grabbing</h1>
          </li>

          <li class="grid grid-cols-2 gap-4 items-center  bg-neutral-800 rounded-md px-3 py-1 ring-1 ring-black">
              <div class="grid grid-cols-3 gap-1 items-center">
                  <div class="flex flex-col items-center">
                      <img src="./src/images/icons-ctrl.png" alt="img_ctrl">
                      <label class="text-xs text-white ">Ctrl</label>
                  </div>
                  
                  <div class="flex flex-col items-center">
                      <img src="./src/images/icons8-plus-emoji-48.png" class="w-7 h-7  " alt="img_plus">
                      <label class="text-xs text-white "></label>
                  </div>
                  <div class="flex flex-col items-center ">
                      <img src="./src/images/icon-c.png"  alt="img_c">
                      <label class="text-xs text-white ">C</label>
                  </div>
                
              </div> 
               <h1 class="font-semibold text-white">Connect elements</h1>
              </li>

              <li class="grid grid-cols-2 gap-4 items-center  bg-neutral-800 rounded-md px-3 py-1 ring-1 ring-black">
                  <div class="grid grid-cols-3 gap-1 items-center">
                      <div class="flex flex-col items-center">
                          <img src="./src/images/icons8-cambio-40.png" alt="img_shift">
                          <label class="text-xs text-white ">Shift</label>
                      </div>
                      
                      <div class="flex flex-col items-center">
                          <img src="./src/images/icons8-plus-emoji-48.png" class="w-7 h-7  " alt="img_plus">
                          <label class="text-xs text-white "></label>
                      </div>
                      <div class="flex flex-col items-center ">
                          <img src="./src/images/icons-scrolling.png"  alt="img_c">
                          <label class="text-xs text-white ">Scrolling</label>
                      </div>
                    
                  </div> 
                   <h1 class="font-semibold text-white">Zoom In and Zoom Out</h1>
                  </li>
     
                  <li class="grid grid-cols-2 gap-4 items-center  bg-neutral-800 rounded-md px-3 py-1 ring-1 ring-black">
                      <div class="grid grid-cols-3 gap-1 items-center">
                          <div class="flex flex-col items-center">
                              <img src="./src/images/icons-ctrl.png" alt="img_ctrl">
                              <label class="text-xs text-white ">Ctrl</label>
                          </div>
                          
                          <div class="flex flex-col items-center">
                              <img src="./src/images/icons8-plus-emoji-48.png" class="w-7 h-7  " alt="img_plus">
                              <label class="text-xs text-white "></label>
                          </div>
                          <div class="flex flex-col items-center ">
                              <img src="./src/images/icons8-llave-s-48.png"  alt="img_s">
                              <label class="text-xs text-white ">S</label>
                          </div>
                        
                      </div> 
                       <h1 class="font-semibold text-white">Save transition</h1>
                      </li>

                      <li class="grid grid-cols-2 gap-4 items-center  bg-neutral-800 rounded-md px-3 py-1 ring-1 ring-black">
                          <div class="grid grid-cols-3 gap-1 items-center">
                              <div class="flex flex-col items-center">
                                  <img src="./src/images/icons-ctrl.png" alt="img_ctrl">
                                  <label class="text-xs text-white ">Ctrl</label>
                              </div>
                              
                              <div class="flex flex-col items-center">
                                  <img src="./src/images/icons8-plus-emoji-48.png" class="w-7 h-7  " alt="img_plus">
                                  <label class="text-xs text-white "></label>
                              </div>
                              <div class="flex flex-col items-center ">
                                  <img src="./src/images/icons-e.png"  alt="img_s">
                                  <label class="text-xs text-white ">E</label>
                              </div>
                            
                          </div> 
                           <h1 class="font-semibold text-white">Export Image</h1>
                          </li>

                  <li class="grid grid-cols-2 gap-4 items-center  bg-neutral-800 rounded-md px-3 py-1 ring-1 ring-black">
                      <div class="grid grid-cols-1 gap-1 items-center">
                          <div class="flex flex-col items-center">
                              <img src="./src/images/icon-esc.png" alt="img_ctrl">
                              <label class="text-xs text-white ">Esc</label>
                          </div>
                          
                         
                        
                      </div> 
                       <h1 class="font-semibold text-white">Exit full screen</h1>
                      </li>


           
  </ul>

   `,
      showConfirmButton: false,
      showCancelButton: true,
      confirmButtonText: "remove",
      cancelButtonText: "Close",
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
     
    });
  }
  