function myMenuFunction() {
  var menuBth = document.getElementById("myNavMenu");

  if (menuBth.className === "nav-menu") {
    menuBth.className += " responsive";
  } else {
    menuBth.className = "nav-menu";
  }
}

/* dark mode */
const body = document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle-switch");

if (toggleSwitch) {
  toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
  });
}

/* typing effect */
var typingEffect = new Typed(".typedText", {
  strings: [
    "a Back-end Developer",
    "a Network Enthusiast",
    "a College Student",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000,
});

/* scroll animation */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social-icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });

/* active link */
const section = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  section.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* cv button */
document.getElementById("cv-button").addEventListener("click", function () {
  window.location.href =
    "https://drive.google.com/file/d/1kxY8vGOZ4e8IX6PG9GsldERAnRwAJk_1/view?usp=drive_link";
});

document.getElementById("cert1").addEventListener("click", function () {
  window.location.href =
    "https://drive.google.com/file/d/1ThGSn3kTnqH4N6YSOEYq3HMgYrQ-69_a/view?usp=drive_link";
});

document.getElementById("cert2").addEventListener("click", function () {
  window.location.href =
    "https://drive.google.com/file/d/1ZTVsq24RqK-Xt0C98woTMOfV7XrYgfri/view?usp=drive_link";
});

document.getElementById("cert3").addEventListener("click", function () {
  window.location.href =
    "https://drive.google.com/file/d/1usgvuv5LfCG2J9s62jyWxq0jvbc3F03O/view?usp=drive_link";
});

document.getElementById("instagramurl").addEventListener("click", function () {
  window.location.href =
    "https://www.instagram.com/yeet.rell_?igsh=NG52MnhxbnY1ZTB6";
});

document.getElementById("linkedinurl").addEventListener("click", function () {
  window.location.href = "https://www.linkedin.com/in/aptafarrelananto/";
});

document.getElementById("githuburl").addEventListener("click", function () {
  window.location.href = "https://github.com/Rell2724";
});
