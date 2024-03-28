function responsiveMenu() {
  var topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
    topNav.className += " open";
  } else {
    topNav.className = "topnav";
  }
}

let aboutLink = document.getElementById("aboutLink");
let travelLink = document.getElementById("travelLink");
let galleryLink = document.getElementById("galleryLink");
let aboutPage = document.getElementById("aboutPage");

aboutLink.addEventListener("click", function(event) {
  event.preventDefault();
  aboutPage.classList.remove("hidden");
})

travelLink.addEventListener("click", function(event) {
  event.preventDefault();
  aboutPage.classList.add("hidden");
})

galleryLink.addEventListener("click", function(event) {
  event.preventDefault();
  aboutPage.classList.add("hidden");
});


