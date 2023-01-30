const navSlide = () => {
    const burger = document.querySelector('.burger');
    // const burger = document.getElementsByClassName("burger")
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('nav-links li');
  
    burger.addEventListener('click', () => {
      // taggle nav
      nav.classList.toggle('nav-active');
    })  //animate links
  
    navlinks.forEach((link, index) => {
      if (link.style.animation)
        link.style.Animation = 'navlinkfade 0.5s ease forward 4{index / 7}s';
      console.log(index / 5);
    })
  }
  
  // slideshow/photos/js/styles *//
  
  var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 8000);
}
// Script For Automatic Slider Start //
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 8000);
}


// variable/dataTypes codes //
console.log(5+10);

var yourTripShouldBeThisManyDays = 5; // Integer (whole numbers)
console.log( yourTripShouldBeThisManyDays );

var theNumberOneTravelAgency = "TRIP-PERU"; // String (leters,numbers,symbols) 
console.log(theNumberOneTravelAgency);

var measurement = 28.7; // Float 
console.log (measurement);

// concatenation //
console.log(" the best travel egency is" + theNumberOneTravelAgency);

// statements // 
if( 20 > 19){ // if statement
console.log("yes 20 is greater than 19");

}else{
  console.log("No, that condition is false");// if else statement
}
var bimgoWinnerNumber = 16-40-11-0-50;
if (bimgoWinnerNumber == 16-41-11-1-50){
  console.log( "Bingo winner number correspond to 16-41-11-1-50");
}else{
  console.log(" bingo winnner number doesn't correspond to 16-41-11-1-50");
}
// DOM/DOM // 
var allListItems = document.getElementsByClassName( "li" );
console.log(allListItems);

document.getElementById("footer").innerHTML= "you can also find us here";

var allListItems = document.getElementsByClassName( "menu-items");
console.log(allListItems.length);

var allListItems = document.getElementsByClassName( "li");
console.log(allListItems.length);

// event on background //
document.getElementById("myBtn").onclick =
changeBackgroundColorToPeru;
function changeBackgroundColorToPeru(){
  document.querySelector('body').style.background = "Peru";
} 
// appreciation event on contact page //
function mOver(obj){
  obj.innerHTML = "We apreciate your preference!"
}
function mOut(obj){
  obj.innerHTML = "THANK YOU"
}
// recomendatiom event in cusco page //
function changeText(id) {
	id.innerHTML = "How can we help!!";
}
function changeText(id) {
	id.innerHTML = "Thank you!";
}
// js/ event on hotel page //

function mOver(obj) {
  obj.innerHTML = "Well, we're here to help you!!!"
}

function mOut(obj) {
  obj.innerHTML = "Are you looking for a Hote?"
}

// Reminder event on food page//
function changeText(id) {
  id.innerHTML = "Dont forget to try ceviche!";
}

