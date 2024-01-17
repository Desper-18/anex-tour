const scrollToTopBtn = document.querySelector('.scroll-to-top');

console.log(scrollToTopBtn);
window.addEventListener("scroll", handleScroll);
function handleScroll() {
  const scrollValue = window.scrollY;
  if (scrollValue >= 500) {
    scrollToTopBtn.classList.remove('d-none')
  } else {
    scrollToTopBtn.classList.add('d-none');
  }
}
scrollToTopBtn.addEventListener('click', scrollToTop);

function scrollToTop() {
  window.scrollTo(0, 0);
}
