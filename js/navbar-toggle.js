const navbarTogglers = document.querySelectorAll('[data-id="navbar-toggler"]');

for (const btn of navbarTogglers) {
  btn.addEventListener('click', handleNavbarBtn);
  btn.addEventListener('dblclick', handleNavbarBtn);
}

function handleNavbarBtn(event) {
  console.log(event.target);
  const menu = document.querySelector('#navbarMenu');
  menu.classList.toggle("d-none")
  menu.classList.add('slide-in-top');
}