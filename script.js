if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {

    console.log('Service worker registered successfully');
  }).catch(function(err) {
    console.log('Service worker registration failed: ', err);
  });
}

var burgerButton = document.getElementById("hamburger-button"),
    burgerMenu = document.getElementById("hamburger-menu"),
    burgerCloseButton = document.getElementById("hamburger-button-close");
	container = document.getElementById("container");

burgerButton.addEventListener("click", burgerClicked, false);
burgerCloseButton.addEventListener("click", burgerClicked, false);

function burgerClicked(e){
  e.preventDefault();
  if(container.classList.contains("burger-open")){
    container.classList.remove("burger-open");
  }else{
    container.classList.add("burger-open");  
  }
}
