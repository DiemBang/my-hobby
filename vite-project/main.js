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
let travelPage = document.getElementById("travelPage");
let galleryPage = document.getElementById("galleryPage");

aboutLink.addEventListener("click", function (event) {
  event.preventDefault();
  aboutPage.classList.remove("hidden");
  travelPage.classList.add("hidden");
  galleryPage.classList.add("hidden");
});

travelLink.addEventListener("click", function (event) {
  event.preventDefault();
  travelPage.classList.remove("hidden");
  aboutPage.classList.add("hidden");
  galleryPage.classList.add("hidden");
});

galleryLink.addEventListener("click", function (event) {
  event.preventDefault();
  galleryPage.classList.remove("hidden");
  aboutPage.classList.add("hidden");
  travelPage.classList.add("hidden");
  galleryPage.innerHTML = `
  
      <div class="container">
        <div class="mySlides">
          <div class="numbertext">1 / 12</div>
          <img src="/assets/slideshow/brooklyn.jpeg" />
        </div>

        <div class="mySlides">
          <div class="numbertext">2 / 12</div>
          <img src="/assets/slideshow/kyotostreetfood.jpg" />
        </div>

        <div class="mySlides">
          <div class="numbertext">3 / 12</div>
          <img src="/assets/slideshow/naradeers.jpg"  />
        </div>

        <div class="mySlides">
          <div class="numbertext">4 / 12</div>
          <img src="/assets/slideshow/kinosakicrab.JPG"  />
        </div>

        <div class="mySlides">
          <div class="numbertext">5 / 12</div>
          <img src="/assets/slideshow/kyotoautumn.JPG"  />
        </div>

        <div class="mySlides">
          <div class="numbertext">6 / 12</div>
          <img src="/assets/slideshow/kyotobreakfast.JPG"  />
        </div>

        <div class="mySlides">
          <div class="numbertext">7 / 12</div>
          <img src="/assets/slideshow/venicebeach.jpeg"  />
        </div>

        <div class="mySlides">
          <div class="numbertext">12 / 12</div>
          <img src="/assets/slideshow/ninhbinh.jpeg"  />
        </div>

        <div class="mySlides">
          <div class="numbertext">9 / 12</div>
          <img src="/assets/slideshow/osakanight.jpg"  />
        </div>

        <div class="mySlides">
          <div class="numbertext">12 / 12</div>
          <img src="/assets/slideshow/osakasushi.jpg"  />
        </div>

        <div class="mySlides">
          <div class="numbertext">11 / 12</div>
          <img src="/assets/slideshow/sanfran.jpeg"  />
        </div>

        <div class="mySlides">
          <div class="numbertext">12 / 12</div>
          <img src="/assets/slideshow/studioghibli.jpg"  />
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
              onclick="currentSlide(1)"
              alt="Hello (Manhattan) from the other side!"
            />
          </div>
          <div class="column">
            <img
              class="demo cursor"
              src="/assets/slideshow/kyotostreetfood.jpg"
              onclick="currentSlide(2)"
              alt="Street food in Japan is a must. These takoyakis were indulged in Kyoto."
            />
          </div>
          <div class="column">
            <img
              class="demo cursor"
              src="/assets/slideshow/naradeers.jpg"
              onclick="currentSlide(3)"
              alt="Nara Park is home to hundreds of freely roaming deer."
            />
          </div>
          <div class="column">
            <img
              class="demo cursor"
              src="/assets/slideshow/kinosakicrab.JPG"
              onclick="currentSlide(4)"
              alt="The famous hot spring town Kinosaki in west Japan is also known for the crabs."
            />
          </div>
          <div class="column">
            <img
              class="demo cursor"
              src="/assets/slideshow/kyotoautumn.JPG"
              onclick="currentSlide(5)"
              alt="Autumn in Kyoto is magical. "
            />
          </div>
          <div class="column">
            <img
              class="demo cursor"
              src="/assets/slideshow/kyotobreakfast.JPG"
              onclick="currentSlide(6)"
              alt="I can have Japanese breakfast EVERY DAY for the rest of my life."
            />
          </div>
          <div class="column">
            <img
              class="demo cursor"
              src="/assets/slideshow/venicebeach.jpeg"
              onclick="currentSlide(7)"
              alt="One of my favourite spots in LA. The houses here are so dreamy."
            />
          </div>
          <div class="column">
            <img
              class="demo cursor"
              src="/assets/slideshow/ninhbinh.jpeg"
              onclick="currentSlide(8)"
              alt="One sweaty hike up a mountain later and this is the reward: views over Ninh Binh."
            />
          </div>
          <div class="column">
            <img
              class="demo cursor"
              src="/assets/slideshow/osakanight.jpg"
              onclick="currentSlide(9)"
              alt="Osaka at night offers vibrant night views, exiting entertainment and top dining."
            />
          </div>
          <div class="column">
            <img
              class="demo cursor"
              src="/assets/slideshow/osakasushi.jpg"
              onclick="currentSlide(10)"
              alt="These fresh tuna rolls from a market in Osaka are out of this world."
            />
          </div>
          <div class="column">
          <img
            class="demo cursor"
            src="/assets/slideshow/sanfran.jpeg"
            onclick="currentSlide(11)"
            alt="'Everywhere you look, everywhere you go...' The Painted Ladies in San Francisco."
          />
        </div>
        <div class="column">
        <img
          class="demo cursor"
          src="/assets/slideshow/studioghibli.jpg"
          onclick="currentSlide(12)"
          alt="Couldn't snag tickets to Studio Ghibli in Tokyo, but running into Totoro outside did softened the blow."
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
