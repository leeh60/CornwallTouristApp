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
