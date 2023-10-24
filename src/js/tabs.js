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
  }

  // Mostrar la pestaña seleccionada y marcar el botón correspondiente
  document.getElementById(tabValue).style.display = "flex";
  document.querySelector(`[data-tab="${tabValue}"]`).classList.add("active");

  // Actualizar la selección en el <select>
  document.getElementById("tabs_select").value = tabValue;
}
document.getElementById("default_open").click();

