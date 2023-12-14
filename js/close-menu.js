function initialize() {
  const CLOSE_MENU_ICON = document.getElementById("close-icon");
  CLOSE_MENU_ICON.addEventListener("click", closeSideMenu)

}

function closeSideMenu() {
  const SIDE_MENU = document.getElementById("side-menu")
  SIDE_MENU.classList.remove("side-menu-open")
  SIDE_MENU.classList.add("side-menu-close")

}

initialize();