// Función para abrir el menú contextual
function openMenucontext(event) {

  const menu = document.getElementById('modal_addTag');
  menu.style.left = `${event.pageX}px`;
  menu.style.top = `${event.pageY}px`;
  menu.style.display = "block";
}

// Función para cerrar el menú contextual
function closeMenuContext() {
  const menu = document.getElementById('modal_addTag');
  menu.style.display = "none";
  isContextMenuOpen = false; // Marcar que el menú está cerrado


}

// Escuchar clics en cualquier lugar de la página
window.addEventListener("click", function (e) {
  if (isContextMenuOpen) {
    closeMenuContext();
  }
});

// Evitar el menú contextual del navegador en toda la página
window.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});






