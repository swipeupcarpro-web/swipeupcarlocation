/* =========================================================
   SWIPEUPCAR — Script principal
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Header scroll state ---------- */
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  /* ---------- Mobile nav ---------- */
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

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  /* ---------- Contact form ---------- */
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = document.getElementById("form-msg");
      const name = document.getElementById("f-name").value.trim();
      const model = document.getElementById("f-model").value;
      const phone = document.getElementById("f-phone").value.trim();
      const message = document.getElementById("f-message").value.trim();

      const text = `Bonjour SWIPEUPCAR, je suis ${name}. Je suis intéressé par le véhicule : ${model || "à définir"}. Téléphone : ${phone}. Message : ${message}`;
      const waLink = `https://wa.me/33759007288?text=${encodeURIComponent(text)}`;

      msg.textContent = "Merci ! Votre demande a bien été préparée. Vous allez être redirigé vers WhatsApp pour la confirmer.";
      msg.classList.add("show", "success");

      setTimeout(() => { window.open(waLink, "_blank"); }, 900);
      form.reset();
    });
  }

  /* ---------- Render car catalogue (full page) ---------- */
  const grid = document.getElementById("catalogue-grid");
   console.log("GRID :", grid);
console.log("CARS :", typeof CARS, CARS);
  if (grid && typeof CARS !== "undefined") {
    grid.innerHTML = CARS.map(renderCarCard).join("");
  }

  /* ---------- Render featured cars (home page) ---------- */
  const featuredGrid = document.getElementById("featured-grid");
  if (featuredGrid && typeof CARS !== "undefined") {
    const featured = CARS.filter(c => ["audi-q3","vw-golf-8","bmw-x2","mercedes-classe-a"].includes(c.id));
    featuredGrid.innerHTML = featured.map(renderCarCard).join("");
  }

  /* =========================================================
   SWIPEUPCAR — Script principal
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Header scroll state ---------- */
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  /* ---------- Mobile nav ---------- */
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

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  /* ---------- Contact form ---------- */
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = document.getElementById("form-msg");
      const name = document.getElementById("f-name").value.trim();
      const model = document.getElementById("f-model").value;
      const phone = document.getElementById("f-phone").value.trim();
      const message = document.getElementById("f-message").value.trim();

      const text = `Bonjour SWIPEUPCAR, je suis ${name}. Je suis intéressé par le véhicule : ${model || "à définir"}. Téléphone : ${phone}. Message : ${message}`;
      const waLink = `https://wa.me/33759007288?text=${encodeURIComponent(text)}`;

      msg.textContent = "Merci ! Votre demande a bien été préparée. Vous allez être redirigé vers WhatsApp pour la confirmer.";
      msg.classList.add("show", "success");

      setTimeout(() => { window.open(waLink, "_blank"); }, 900);
      form.reset();
    });
  }

  /* ---------- Render car catalogue (full page) ---------- */
  const grid = document.getElementById("catalogue-grid");
  if (grid && typeof CARS !== "undefined") {
    grid.innerHTML = CARS.map(renderCarCard).join("");
  }

  /* ---------- Render featured cars (home page) ---------- */
  const featuredGrid = document.getElementById("featured-grid");
  if (featuredGrid && typeof CARS !== "undefined") {
    const featured = CARS.filter(c => ["audi-q3","vw-golf-8","bmw-x2","mercedes-classe-a"].includes(c.id));
    featuredGrid.innerHTML = featured.map(renderCarCard).join("");
  }

  function renderCarCard(car){
    return `
      <div class="car-card reveal">
        <div class="car-photo">
          <span class="car-badge-year">${car.year}</span>
          <img src="assets/${car.id}.png" alt="${car.brand} ${car.model}">
        <div class="car-body">
          <span class="car-brand">${car.brand}</span>
          <h3 class="car-name">${car.model}</h3>
          <p class="car-price">${car.price} € <span>/ mois</span></p>
          <a class="btn btn-dark car-cta" href="contact.html?vehicule=${encodeURIComponent(car.brand + ' ' + car.model)}">Je suis intéressé</a>
        </div>
      </div>`;
  }

  function carSilhouetteSVG(){
    return `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="carGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2b2b2b"/>
          <stop offset="100%" stop-color="#0a0a0a"/>
        </linearGradient>
      </defs>
      <path d="M18 62 C18 46 34 38 50 36 L70 22 C78 16 90 13 104 13 L128 13 C142 13 154 20 160 32 L176 40 C186 44 190 50 190 58 L190 66 C190 70 187 73 183 73 L172 73 C170 62 161 54 150 54 C139 54 130 62 128 73 L70 73 C68 62 59 54 48 54 C37 54 28 62 26 73 L15 73 C11 73 8 70 8 66 L8 64 C8 63 12 62 18 62 Z" fill="url(#carGrad)" stroke="#C9A227" stroke-width="1.2"/>
      <circle cx="48" cy="73" r="12" fill="#111" stroke="#C9A227" stroke-width="1.4"/>
      <circle cx="48" cy="73" r="5" fill="#C9A227"/>
      <circle cx="150" cy="73" r="12" fill="#111" stroke="#C9A227" stroke-width="1.4"/>
      <circle cx="150" cy="73" r="5" fill="#C9A227"/>
      <path d="M74 22 L100 22 L106 36 L68 36 Z" fill="#182a2c" stroke="#C9A227" stroke-width="0.8"/>
    </svg>`;
  }
});

function renderCarCard(car){
  return `
    <div class="car-card">
      <div class="car-photo">
        <span class="car-badge-year">${car.year}</span>
        <img src="assets/${car.id}.png" alt="${car.brand} ${car.model}">
      </div>

      <div class="car-body">
        <span class="car-brand">${car.brand}</span>
        <h3 class="car-name">${car.model}</h3>
        <p class="car-price">${car.price} € <span>/ mois</span></p>
        <a class="btn btn-dark car-cta" href="contact.html?vehicule=${encodeURIComponent(car.brand + ' ' + car.model)}">Je suis intéressé</a>
      </div>
    </div>`;
}

  function carSilhouetteSVG(){
    return `<svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="carGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2b2b2b"/>
          <stop offset="100%" stop-color="#0a0a0a"/>
        </linearGradient>
      </defs>
      <path d="M18 62 C18 46 34 38 50 36 L70 22 C78 16 90 13 104 13 L128 13 C142 13 154 20 160 32 L176 40 C186 44 190 50 190 58 L190 66 C190 70 187 73 183 73 L172 73 C170 62 161 54 150 54 C139 54 130 62 128 73 L70 73 C68 62 59 54 48 54 C37 54 28 62 26 73 L15 73 C11 73 8 70 8 66 L8 64 C8 63 12 62 18 62 Z" fill="url(#carGrad)" stroke="#C9A227" stroke-width="1.2"/>
      <circle cx="48" cy="73" r="12" fill="#111" stroke="#C9A227" stroke-width="1.4"/>
      <circle cx="48" cy="73" r="5" fill="#C9A227"/>
      <circle cx="150" cy="73" r="12" fill="#111" stroke="#C9A227" stroke-width="1.4"/>
      <circle cx="150" cy="73" r="5" fill="#C9A227"/>
      <path d="M74 22 L100 22 L106 36 L68 36 Z" fill="#182a2c" stroke="#C9A227" stroke-width="0.8"/>
    </svg>`;
  }
});
