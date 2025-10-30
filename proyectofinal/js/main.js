// Roles //

(function () {
  const roles = Array.from(
    document.querySelectorAll(".hero__roles .hero__role")
  );
  if (!roles.length) return;

  // Respeta “reducir movimiento”
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let i = 0;

  // Estado inicial
  roles.forEach((r) => r.classList.remove("is-active"));
  roles[0].classList.add("is-active");

  if (reduce) return; 

  setInterval(() => {
    roles[i].classList.remove("is-active");
    i = (i + 1) % roles.length;
    roles[i].classList.add("is-active");
  }, 1000); // cambia cada 2s
})();

// menu hamburguesa //
(() => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen);
  });
})();

//========================================================================================================================================//

//Capsula de contactos//

(function () {
  const roles = Array.from(
    document.querySelectorAll(".contacto__adjetivos .contacto__palabras")
  );
  if (!roles.length) return;

  // Respeta “reducir movimiento”
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let i = 0;

  // Estado inicial
  roles.forEach((r) => r.classList.remove("is-active"));
  roles[0].classList.add("is-active");

  if (reduce) return; 

  setInterval(() => {
    roles[i].classList.remove("is-active");
    i = (i + 1) % roles.length;
    roles[i].classList.add("is-active");
  }, 1000); // cambia cada 2s
})();

// menu hamburguesa //
(() => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen);
  });
})();

//========================================================================================================================================//

// Slider
(function () {
  const root = document.querySelector(".proyecto__slider");
  if (!root) return;

  const track = root.querySelector(".slider__track");
  const slides = Array.from(root.querySelectorAll(".slider__slide"));
  const prevBtn = root.querySelector(".slider__btn--prev");
  const nextBtn = root.querySelector(".slider__btn--next");

  // Puntos (si existen)
  const dotsWrap = document.querySelector(".proyecto__puntos");
  const dots = dotsWrap ? Array.from(dotsWrap.children) : [];

  let i = 0; // índice actual

  function goTo(index) {
    i = (index + slides.length) % slides.length;
    track.style.transform = `translateX(${-i * 100}%)`;
    dots.forEach((d, idx) => d.classList.toggle("is-active", idx === i));
  }

  const next = () => goTo(i + 1);
  const prev = () => goTo(i - 1);

  // Botones
  if (nextBtn) nextBtn.addEventListener("click", next);
  if (prevBtn) prevBtn.addEventListener("click", prev);

  // Swipe básico
  let startX = null;
  track.addEventListener("pointerdown", (e) => { startX = e.clientX; });
  window.addEventListener("pointerup", (e) => {
    if (startX == null) return;
    const dx = e.clientX - startX;
    if (dx > 40) prev();
    if (dx < -40) next();
    startX = null;
  });

  // Teclado
  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  });
  root.setAttribute("tabindex", "0");

  // Auto-play
  setInterval(next, 5000);

  // Inicial
  goTo(0);
})();

// Lightbox para ampliar imágenes del slider
(() => {
  const lightbox = document.getElementById("lightbox");
  const big = lightbox?.querySelector("img");
  if (!lightbox || !big) return;

 
  document.addEventListener("click", (e) => {
    const img = e.target.closest(".slider__slide img");
    if (!img) return;
    big.src = img.currentSrc || img.src; 
    big.alt = img.alt || "Project image";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  });

  // Cerrar al hacer click afuera
  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    big.src = "";
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      big.src = "";
    }
  });
})();

//========================================================================================================================================//



(function () {
  const list = document.querySelector('.proyectos__lista');
  const preview = document.querySelector('.proyectos__preview');
  if (!list || !preview) return;

  let active = null;

  list.addEventListener('mousemove', (e) => {
    const x = e.clientX + 24;
    const y = e.clientY + 24;
    preview.style.left = x + 'px';
    preview.style.top  = y + 'px';
  });

  list.addEventListener('mouseover', (e) => {
    const li = e.target.closest('.proyecto__item');
    if (!li) return;


    if (active !== li) {
      active = li;
      const url = li.getAttribute('data-preview');
      if (url) preview.style.backgroundImage = `url(${url})`;
    }
    preview.style.opacity = '1';
    preview.style.transform = 'translate(-50%, -50%) scale(1)';
  });

  list.addEventListener('mouseout', (e) => {
    const related = e.relatedTarget;
    if (!related || !list.contains(related)) {
      active = null;
      preview.style.opacity = '0';
      preview.style.transform = 'translate(-50%, -50%) scale(.96)';
    }
  });
})();

