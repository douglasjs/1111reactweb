const scrollToTopButton = document.getElementById('jstopicon');

const scrollFuncIcon = () => {
  let y = window.scrollY;
  
  if (y > 0) {
    scrollToTopButton.className = "top-link-icon show";
  } else {
    scrollToTopButton.className = "top-link-icon hide";
  }
};

window.addEventListener("scroll", scrollFuncIcon);

const scrollToTopIcon = () => {
  
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  
  if (c > 0) {
    window.requestAnimationFrame(scrollToTopIcon);
    window.scrollTo(0, c - c / 10);
  }
};

scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTopIcon();
}