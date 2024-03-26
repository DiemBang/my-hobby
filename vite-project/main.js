function responsiveMenu() {
  var topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
      topNav.className += " open";
  } else {
      topNav.className = "topnav";
  }
}