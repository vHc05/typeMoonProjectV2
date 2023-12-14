function initialize() {
  const HEADER_MENU_ICON = document.getElementById("head-icon");
  HEADER_MENU_ICON.addEventListener("click", showSideMenu);

}

function showSideMenu() {
  const SIDE_MENU = document.getElementById("side-menu");
  SIDE_MENU.classList.remove("side-menu-close")
  SIDE_MENU.classList.add("side-menu-open")
}

initialize();

