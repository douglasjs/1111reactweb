//Open New Window Icon

// Set a variable for our button element.
const scrollToTopButton = document.getElementById('js-top');

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {

  scrollToTopButton.className = "top-link show";

  // Get the current scroll value
  //let y = window.scrollY;
  
  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  /*if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }*/
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  // Let's set a variable for the number of pixels we are from the top of the document.
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  
  // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
  // We'll also animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '10' value to get a smoother/slower scroll!
    window.scrollTo(0, c - c / 10);
  }
};

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  window.open("https://www.1111.com.tw/corp/1355006/#c4");
  //scrollToTop();
}


//Go Top Icon

// Set a variable for our button element.
const scrollToTopButtonIcon = document.getElementById('js-top-icon');

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFuncIcon = () => {

  scrollToTopButtonIcon.className = "top-link-icon show";

  // Get the current scroll value
  //let y = window.scrollY;
  
  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  /*if (y > 0) {
    scrollToTopButtonIcon.className = "top-link-icon show";
  } else {
    scrollToTopButtonIcon.className = "top-link-icon hide";
  }*/
};

window.addEventListener("scroll", scrollFuncIcon);

const scrollToTopIcon = () => {
  // Let's set a variable for the number of pixels we are from the top of the document.
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  
  // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
  // We'll also animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (c > 0) {
    window.requestAnimationFrame(scrollToTopIcon);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '10' value to get a smoother/slower scroll!
    window.scrollTo(0, c - c / 10);
  }
};

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButtonIcon.onclick = function(e) {
  e.preventDefault();
  scrollToTopIcon();
}