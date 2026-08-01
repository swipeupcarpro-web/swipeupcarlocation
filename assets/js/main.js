/* =========================================================
   SWIPEUPCAR — Script principal
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  const burger = document.querySelector(".burger");
  const mobileNav = document.querySelector(".mobile-nav");
  const closeNav = document.querySelector(".close-nav");
  if (burger && mobileNav) {
    burger.addEventListener("click", () => mobileNav.classList.add("open"));
  }
  if (closeNav && mobileNav) {
    closeNav.addEventListener("click", () => mobileNav.classList.remove("open"));
  }
  document.querySelectorAll(".mobile-nav a").forEach(a => {
    a.addEventListener("click", () => mobileNav.classList.remove("open"));
  });

  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("visible"));
  }

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = document.getElementById("form-msg");
      const name = document.getElementById("f-name")?.value.trim() || "";
      const model = document.getElementById("f-model")?.value || "";
      const phone = document.getElementById("f-phone")?.value.trim() || "";
      const message = document.getElementById("f-message")?.value.trim() || "";

      const text = `Bonjour SWIPEUPCAR, je suis ${name}. Je suis intéressé par le véhicule : ${model || "à définir"}. Téléphone : ${phone}. Message : ${message}`;
      const waLink = `https://wa.me/33759007288?text=${encodeURIComponent(text)}`;

      if (msg) {
        msg.textContent = "Merci ! Votre demande a bien été préparée. Vous allez être redirigé vers WhatsApp pour la confirmer.";
        msg.classList.add("show", "success");
      }

      setTimeout(() => { window.open(waLink, "_blank"); }, 900);
      form.reset();
    });
  }

  const grid = document.getElementById("catalogue-grid");
  if (grid && typeof CARS !== "undefined") {
    grid.innerHTML = CARS.map(renderCarCard).join("");
  }

  const featuredGrid = document.getElementById("featured-grid");
  if (featuredGrid && typeof CARS !== "undefined") {
    const featured = CARS.filter(c => ["audi-q3", "vw-golf-8", "bmw-x2", "mercedes-classe-a"].includes(c.id));
    featuredGrid.innerHTML = featured.map(renderCarCard).join("");
  }
});

function renderCarCard(car) {
  return `
    <div class="car-card">
      <div class="car-photo">
        <span class="car-badge-year">${car.year}</span>
        <img src="assets/js/cars-data.js/${car.id}.png" alt="${car.brand} ${car.model}">
      </div>
      <div class="car-body">
        <span class="car-brand">${car.brand}</span>
        <h3 class="car-name">${car.model}</h3>
        <p class="car-price">${car.price} € <span>/ mois</span></p>
        <a class="btn btn-dark car-cta" href="contact.html?vehicule=${encodeURIComponent(car.brand + ' ' + car.model)}">Je suis intéressé</a>
      </div>
    </div>`;
}
