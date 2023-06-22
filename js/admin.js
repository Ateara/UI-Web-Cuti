const menu = document.getElementById('sidebarToggleTop');
const sidebar = document.getElementsByClassName('sidebar')[0];

menu.addEventListener('click', function () {
  sidebar.classList.toggle('hide');
})