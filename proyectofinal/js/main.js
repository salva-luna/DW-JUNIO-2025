// Roles //

(function () {
  //Selecciona todos los elementos con la clase .hero__role dentro de .hero__roles//
  const roles = Array.from(
    document.querySelectorAll(".hero__roles .hero__role")
  );
  //Verifica si hay roles disponibles//
  if (!roles.length) return;

  // Respeta “reducir movimiento”
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let i = 0;

  //Recorre los roles y elimina la clase is-active de cada uno//
  roles.forEach((r) => r.classList.remove("is-active"));
  roles[0].classList.add("is-active");
  if (reduce) return;

  //Cambia el rol activo cada segundo//
  setInterval(() => {
    roles[i].classList.remove("is-active");
    i = (i + 1) % roles.length;
    roles[i].classList.add("is-active");
  }, 1000); // cambia cada 1s
})();

//========================================================================================================================================//

// Menu Hamburguesa //
(() => {
  //Se llaman los elementos del DOM//
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");
  if (!toggle || !nav) return;

  //Se agrega el evento de click//
  toggle.addEventListener("click", () => {
    //Se alterna la clase "is-open"//
    const isOpen = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    //Se actualiza el atributo aria-expanded (le indica al lector de pantalla si un elemento interactivo y expandible, como un menú desplegable o un acordeón, está actualmente expandido)//
    toggle.setAttribute("aria-expanded", isOpen);
  });
})();

//========================================================================================================================================//

//Capsula de contactos//

(function () {
  //Selecciona todos los elementos con la clase .contacto__palabras dentro de .contacto__adjetivos//
  const roles = Array.from(
    document.querySelectorAll(".contacto__adjetivos .contacto__palabras")
  );
  //Verifica si hay roles disponibles//
  if (!roles.length) return;

  // Respeta “reducir movimiento”
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let i = 0;

  //Recorre los roles y elimina la clase is-active de cada uno//
  roles.forEach((r) => r.classList.remove("is-active"));
  roles[0].classList.add("is-active");

  if (reduce) return;

  //Cambia el rol activo cada segundo//
  setInterval(() => {
    roles[i].classList.remove("is-active");
    i = (i + 1) % roles.length;
    roles[i].classList.add("is-active");
  }, 1000); // cambia cada 1s
})();

//========================================================================================================================================//

// Slider
(function () {
  // Se llaman los elementos del DOM //
  const root = document.querySelector(".proyecto__slider");
  // Verifica si el elemento root existe //
  if (!root) return;

  const track = root.querySelector(".slider__track");
  const slides = Array.from(root.querySelectorAll(".slider__slide"));
  const prevBtn = root.querySelector(".slider__btn--prev");
  const nextBtn = root.querySelector(".slider__btn--next");

  // Puntos de navegación
  const dotsWrap = document.querySelector(".proyecto__puntos");
  const dots = dotsWrap ? Array.from(dotsWrap.children) : [];

  let i = 0; // índice actual

  // Función para ir a un slide específico. Se toma el index como parámetro //
  function goTo(index) {
    i = (index + slides.length) % slides.length;
    track.style.transform = `translateX(${-i * 100}%)`;
    // Actualiza los puntos de navegación
    dots.forEach((d, idx) => d.classList.toggle("is-active", idx === i));
  }

  // Funciones para ir al siguiente y al anterior slide //
  const next = () => goTo(i + 1);
  const prev = () => goTo(i - 1);

  // Aquí se agregan los event listeners a los botones //
  if (nextBtn) nextBtn.addEventListener("click", next);
  if (prevBtn) prevBtn.addEventListener("click", prev);

  // Gestos táctiles, se usa pointerdown/pointerup cuando pueden haber dispositivos que usen pen o touch //
  let startX = null;
  track.addEventListener("pointerdown", (e) => {
    startX = e.clientX;
  });
  window.addEventListener("pointerup", (e) => {
    if (startX == null) return;
    const dx = e.clientX - startX;
    if (dx > 40) prev();
    if (dx < -40) next();
    startX = null;
  });

  // Navegación con teclado //
  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  });
  // Permitir que el contenedor del slider reciba el foco //
  root.setAttribute("tabindex", "0");

  // Auto-play cada 5 segundos //
  setInterval(next, 5000);

  // Inicializa el slider en el primer slide //
  goTo(0);
})();

//========================================================================================================================================//

// Lightbox para ampliar imágenes del slider
(() => {
  // Se llaman los elementos del DOM //
  const lightbox = document.getElementById("lightbox");
  const big = lightbox?.querySelector("img");
  if (!lightbox || !big) return;

  // Abrir al hacer click en una imagen del slider
  document.addEventListener("click", (e) => {
    const img = e.target.closest(".slider__slide img");
    if (!img) return;
    // Actualiza la imagen grande y muestra el lightbox //
    big.src = img.currentSrc || img.src;
    big.alt = img.alt || "Project image";
    lightbox.classList.add("is-open");
    // Actualiza el atributo aria-hidden para que el lector de pantallas no lo pueda leers//
    lightbox.setAttribute("aria-hidden", "false");
  });

  // Cerrar al hacer click afuera, no quise agregar una X en este caso//
  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    big.src = "";
  });
  // Cerrar al presionar la tecla Escape //
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      big.src = "";
    }
  });
})();

//========================================================================================================================================//

//PREVIEW PROYECTOS//
//Para realizar esta sección, me aporyé de la guía de IA ya que no tenía claro cómo incluir cosas como que se moviera junto al cursor//

(function () {
  // Se llaman los elementos del DOM //
  const list = document.querySelector(".proyectos__lista");
  const preview = document.querySelector(".proyectos__preview");
  if (!list || !preview) return;

  let active = null;

  // Mueve la preview junto al cursor //
  list.addEventListener("mousemove", (e) => {
    const x = e.clientX + 24;
    const y = e.clientY + 24;
    preview.style.left = x + "px";
    preview.style.top = y + "px";
  });

  // Al pasar sobre un proyecto, cambia la imagen de preview para eso busca el atributo establecido como data-preview//
  list.addEventListener("mouseover", (e) => {
    const li = e.target.closest(".proyecto__item");
    if (!li) return;

    if (active !== li) {
      active = li;
      const url = li.getAttribute("data-preview");
      if (url) preview.style.backgroundImage = `url(${url})`;
    }
    // Hace visible la preview que originalmente esta en 0//
    preview.style.opacity = "1";
    preview.style.transform = "translate(-50%, -50%) scale(1)";
  });

  // Al salir del proyecto, oculta la preview devolviendolo a 0//
  list.addEventListener("mouseout", (e) => {
    const related = e.relatedTarget;
    if (!related || !list.contains(related)) {
      active = null;
      preview.style.opacity = "0";
      preview.style.transform = "translate(-50%, -50%) scale(.96)";
    }
  });
})();

//========================================================================================================================================//

// Desplazamiento horizontal banners - Lo realicé con ayuda de la compañera Karol, quien me dió indicaciones sobre cómo llevar el código a cabo//

function start(selector, step = 1) {
  // selecciona el carrusel por su selector CSS //
  const carrusel = document.querySelector(selector);

  if (!carrusel) return;

  // duplicamos el contenido (una sola vez) para crear efecto continuo
  carrusel.innerHTML += carrusel.innerHTML;

  // inicializamos variables para controlar el desplazamiento, el límite es la mitad del scroll total porque lo duplicamos //
  let scrollAmount = 0;
  const maxScroll = carrusel.scrollWidth / 2;

  // creamos un intervalo que se ejecuta cada 20 ms
  setInterval(() => {
    // movemos el scroll horizontalmente
    carrusel.scrollLeft += step;
    // acumulamos la distancia recorrida
    scrollAmount += step;

    // si llegamos al final de la primera mitad
    if (scrollAmount >= maxScroll) {
      carrusel.scrollLeft = 0;
      scrollAmount = 0;
      // si step es negativo (scroll hacia la izquierda)
    } else if (scrollAmount <= 0) {
      carrusel.scrollLeft = maxScroll;
      scrollAmount = maxScroll;
    }
  }, 20);
}

// inicializamos los banners con sus clases actuales
// banner principal → hacia la derecha
start(".main__scroll", 1);
// banner del footer → hacia la izquierda
start(".footer__scroll", -2);

//========================================================================================================================================//

// Anti-spam honeypot para el formulario de contacto (mailto)
(function () {
  const form = document.querySelector('.contacto__form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    const hp = form.querySelector('.contacto__hp');
    if (hp && hp.value.trim() !== '') {
      // Bot detectado: cancela el envío
      e.preventDefault();
      // Opcional: log o aviso silencioso
      console.warn('Spam bloqueado por honeypot.');
    }
  });
})();

//========================================================================================================================================//