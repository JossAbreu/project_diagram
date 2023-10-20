
  function openTabs(evt, option) {
    isPanelmenu = true;
  // Declare all variables
  var i, hidden, tablinks ;

  // Get all elements with class="hidden" and hide them
  hidden = document.getElementsByClassName("hidden");
  for (i = 0; i < hidden.length; i++) {
    hidden[i].style.display = "none";
  }

  // Get all elements with class="tablinks " and remove the class "active"
  tablinks  = document.getElementsByClassName("tablinks ");
  for (i = 0; i < tablinks .length; i++) {
    tablinks [i].className = tablinks [i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(option).style.display = "block";
  evt.currentTarget.className += " active";
}


  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
