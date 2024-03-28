function responsiveMenu() {
  var topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
    topNav.className += " open";
  } else {
    topNav.className = "topnav";
  }
}

function addNextAndPreviousEventListeners() {
  let nextButtons = document.getElementsByClassName("next");
  let prevButtons = document.getElementsByClassName("prev");

  Array.from(nextButtons).forEach((element) => {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      plusSlides(1);
    });
  });

  Array.from(prevButtons).forEach((element) => {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      plusSlides(-1);
    });
  });
}

let aboutLink = document.getElementById("aboutLink");
let travelLink = document.getElementById("travelLink");
let galleryLink = document.getElementById("galleryLink");
let aboutPage = document.getElementById("aboutPage");
let galleryPage = document.getElementById("galleryPage");

aboutLink.addEventListener("click", function (event) {
  event.preventDefault();
  aboutPage.classList.remove("hidden");
  galleryPage.classList.add("hidden");
});

travelLink.addEventListener("click", function (event) {
  event.preventDefault();
  aboutPage.classList.add("hidden");
});

galleryLink.addEventListener("click", function (event) {
  event.preventDefault();
  aboutPage.classList.add("hidden");
  galleryPage.classList.remove("hidden");
  galleryPage.innerHTML = `
  <h2 style="text-align: center">My Travel Gallery</h2>

      <div class="container">
        <div class="mySlides">
          <div class="numbertext">1 / 6</div>
          <img src="/assets/slideshow/brooklyn.jpeg" />
        </div>

        <div class="mySlides">
          <div class="numbertext">2 / 6</div>
          <img src="/assets/slideshow/kyotostreetfood.jpg" />
        </div>

        <div class="mySlides">
          <div class="numbertext">3 / 6</div>
          <img src="/assets/slideshow/naradeers.jpg"  />
        </div>

        <div class="mySlides">
          <div class="numbertext">4 / 6</div>
          <img src="/assets/slideshow/kinosakicrab.JPG"  />
        </div>

        <div class="mySlides">
          <div class="numbertext">5 / 6</div>
          <img src="/assets/slideshow/kyotoautumn.JPG"  />
        </div>

        <div class="mySlides">
          <div class="numbertext">6 / 6</div>
          <img src="/assets/slideshow/kyotobreakfast.JPG"  />
        </div>

        <div class="mySlides">
          <div class="numbertext">7 / 7</div>
          <img src="/assets/slideshow/venicebeach.jpeg"  />
        </div>

        <a class="prev">❮</a>
        <a class="next">❯</a>

        <div class="caption-container">
          <p id="caption"></p>
        </div>

        <div class="row">
          <div class="column">
            <img
              class="demo cursor"
              src="/assets/slideshow/brooklyn.jpeg"
              style="width: 100%"
              onclick="currentSlide(1)"
              alt="Hello (Manhattan) from the other side!"
            />
          </div>
          <div class="column">
            <img
              class="demo cursor"
              src="/assets/slideshow/kyotostreetfood.jpg"
              style="width: 100%"
              onclick="currentSlide(2)"
              alt="Street food in Japan is a must. These takoyakis were indulged in Kyoto."
            />
          </div>
          <div class="column">
            <img
              class="demo cursor"
              src="/assets/slideshow/naradeers.jpg"
              style="width: 100%"
              onclick="currentSlide(3)"
              alt="Nara Park is home to hundreds of freely roaming deer."
            />
          </div>
          <div class="column">
            <img
              class="demo cursor"
              src="/assets/slideshow/kinosakicrab.JPG"
              style="width: 100%"
              onclick="currentSlide(4)"
              alt="The famous hot spring town Kinosaki in west Japan is also known for the crabs."
            />
          </div>
          <div class="column">
            <img
              class="demo cursor"
              src="/assets/slideshow/kyotoautumn.JPG"
              style="width: 100%"
              onclick="currentSlide(5)"
              alt="Autumn in Kyoto is magical. "
            />
          </div>
          <div class="column">
            <img
              class="demo cursor"
              src="/assets/slideshow/kyotobreakfast.JPG"
              style="width: 100%"
              onclick="currentSlide(6)"
              alt="I can have Japanese breakfast EVERY DAY for the rest of my life."
            />
          </div>
          <div class="column">
            <img
              class="demo cursor"
              src="/assets/slideshow/venicebeach.jpeg"
              style="width: 100%"
              onclick="currentSlide(6)"
              alt="One of my favourite spots in LA. The houses here are dreamy."
            />
          </div>
        </div>
      </div>
  `;
  showSlides(1);
  addNextAndPreviousEventListeners();
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
