(() => {
  gsap.registerPlugin(ScrollToPlugin);

  gsap.to(".hero-logo", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 0.3,
  });

  gsap.to(".hero-title", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 0.5,
  });
  gsap.to(".hero-subtitle", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 0.7,
  });
  gsap.to(".button", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power3.out",
    delay: 0.9,
  });

  //x-ray
  let imageCon = document.querySelector("#imageCon"),
    drag = document.querySelector(".image-drag"),
    left = document.querySelector(".image-left"),
    dragging = false,
    min = 0,
    max = imageCon.offsetWidth;

  // function
  function onDown() {
    dragging = true;
    console.log("on down Called");
  }

  function onUp() {
    dragging = false;
    console.log("on up Called");
  }

  function onMove(event) {
    if (dragging === true) {
      let x = event.clientX - imageCon.getBoundingClientRect().left;
      if (x < min) {
        x = min;
      } else if (x > max) {
        x = max - 4;
      }

      drag.style.left = x + "px";
      left.style.width = x + "px";
    }
  }

  // event listeners
  drag.addEventListener("mousedown", onDown);
  document.body.addEventListener("mouseup", onUp);
  document.body.addEventListener("mousemove", onMove);
  //animation

  const canvas = document.querySelector("#jaz-pods");
  const context = canvas.getContext("2d");
  canvas.width = 1920;
  canvas.height = 1080;
  const frameCount = 150;
  const images = [];
  let loadedImages = 0;

  const buds = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.onload = function () {
      loadedImages++;
      if (loadedImages === frameCount) {
        startAnimation();
      }
    };
    img.src = `images/${(i + 1).toString().padStart(3, "0")}.jpg`;
    images.push(img);
  }

  function startAnimation() {
    gsap.to(buds, {
      frame: 149,
      snap: "frame",
      scrollTrigger: {
        trigger: "#jaz-pods",
        pin: true,
        scrub: 5,
        start: "center center",
      },
      onUpdate: render,
    });
  }

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (images[buds.frame]) {
      context.drawImage(images[buds.frame], 0, 0);
    }
  }

  //-------product
  document.querySelectorAll(".product").forEach(function (button) {
    button.addEventListener("click", function () {
      gsap.to(window, { duration: 1, scrollTo: ".ar-buds" });
    });
  });

  document
    .getElementById("exploreButton")
    .addEventListener("click", function () {
      gsap.to(window, { duration: 1, scrollTo: ".ar-buds" });
    });

  // buy-now

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".content", {
    scrollTrigger: {
      trigger: ".buy-now-section",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1.5,
  });
  // end

  //  image moving
  gsap.from(".image-container img", {
    scrollTrigger: {
      trigger: ".buy-now",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: 50,
    duration: 1.5,
  });

  let menu = document.querySelector("#hammenu"),
    mobileNav = document.querySelector(".mobile-menu");

  function toggleMenu() {
    mobileNav.classList.toggle("hidden");
  }

  menu.addEventListener("click", toggleMenu);

  // hotspots Selection

  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const InfoBoxes = [
    {
      title: "Quick Charging Technology",
      text: "Utilize advanced charging technologies like Qualcomm Quick Charge, USB Power Delivery, or proprietary fast charging methods to ensure rapid charging",
      image: "../images/hotspot.svg",
    },
    {
      title: "Sound Quality",
      text: "High-quality audio drivers for clear and balanced sound,Noise isolation or cancellation for a better listening experience",
      image: "../images/hotspot.svg",
    },
    {
      title: "Intuitive Control Mapping",
      text: "Design intuitive tap mappings, such as double-tap for play/pause, triple-tap for the next track, and so on. Make it easy for users to remember and use these controls.",
      image: "../images/hotspot.svg",
    },
    {
      title: "Transparency Mode",
      text: "a transparency mode that allows external sounds to pass through for safety or awareness.",
      image: "../images/hotspot.svg",
    },
  ];

  function modelLoaded() {
    hotspots.forEach((hotspot) => {
      hotspot.style.display = "block";
    });
  }

  function loadInfo() {
    InfoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);

      const titleElement = document.createElement("h2");
      titleElement.textContent = infoBox.title;

      const textElement = document.createElement("p");
      textElement.textContent = infoBox.text;

      selected.appendChild(titleElement);
      selected.appendChild(textElement);
    });
  }
  loadInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event Listener
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });

  //end-hotspots

  //home-scroll
  document.querySelectorAll(".home").forEach(function (button) {
    button.addEventListener("click", function () {
      gsap.to(window, { duration: 1, scrollTo: ".hero" });
    });
  });

  //buy-scroll

  document.querySelectorAll(".buy").forEach(function (button) {
    button.addEventListener("click", function () {
      gsap.to(window, { duration: 1, scrollTo: ".buynow" });
    });
  });

  // footer-nav
  gsap.from("#site-footer", {
    scrollTrigger: {
      trigger: "#site-footer",
      start: "top bottom", // Trigger animation when the top of the footer hits the bottom of the viewport
    },
    y: 50, // Start 50 pixels below its starting position
    opacity: 0,
    duration: 1,
  });
})();
