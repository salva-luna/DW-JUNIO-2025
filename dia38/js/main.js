//Ejercicio 1
document.getElementById("btn1").addEventListener("click", () => {
  cargarContenido("contenido1.html");
});

document.getElementById("btn2").addEventListener("click", () => {
  cargarContenido("contenido2.html");
});

function cargarContenido(archivo) {
  const div = document.getElementById("contenido");
  
  // Ocultar antes de cambiar
  div.classList.remove("show");
  
  fetch(archivo)
    .then(respuesta => respuesta.text())
    .then(data => {
      div.innerHTML = data;
      // Forzar un reflow antes de aplicar show
      setTimeout(() => {
        div.classList.add("show");
      }, 50);
    })
    .catch(error => {
      div.innerHTML = "<p style='color:red;'>Error al cargar el contenido.</p>";
      console.error(error);
    });
}

//Ejercicio 2//

const apiKey = "2bdc5ad2c8a6c845e41c7013e35ceb72";
const buscarBtn = document.getElementById("buscarBtn");
const ciudadInput = document.getElementById("ciudadInput");
const resultado = document.getElementById("resultado");

// Detectar ubicación al cargar la página
window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        obtenerClimaPorCoords(lat, lon);
      },
      error => {
        resultado.innerHTML = "<p style='color:red;'>No se pudo obtener tu ubicación. Escribe una ciudad.</p>";
      }
    );
  } else {
    resultado.innerHTML = "<p style='color:red;'>Tu navegador no soporta geolocalización.</p>";
  }
});

// Buscar ciudad 
buscarBtn.addEventListener("click", () => {
  const ciudad = ciudadInput.value.trim();
  if (ciudad !== "") {
    obtenerClimaPorCiudad(ciudad);
  } else {
    resultado.innerHTML = "<p style='color:red;'>Por favor, escribe una ciudad.</p>";
  }
});

// Clima por coordenadas
function obtenerClimaPorCoords(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`;
  fetchClima(url);
}

// Clima por ciudad
function obtenerClimaPorCiudad(ciudad) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;
  fetchClima(url);
}

// Llamada fetch
function fetchClima(url) {
  resultado.innerHTML = "Cargando clima...";
  fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error("Ciudad no encontrada");
      }
      return res.json();
    })
    .then(data => {
      mostrarClima(data);
    })
    .catch(error => {
      resultado.innerHTML = `<p style='color:red;'>${error.message}</p>`;
    });
}

// Mostrar datos
function mostrarClima(data) {
  const nombreCiudad = data.name;
  const temperatura = Math.round(data.main.temp);
  const descripcion = data.weather[0].description;
  const icono = data.weather[0].icon;

  resultado.innerHTML = `
    <h2>${nombreCiudad}</h2>
    <img src="https://openweathermap.org/img/wn/${icono}@2x.png" alt="${descripcion}">
    <p><strong>${temperatura}°C</strong></p>
    <p>${descripcion.charAt(0).toUpperCase() + descripcion.slice(1)}</p>
  `;
}

//Ejercicio 3//
const movieApiKey = "f66330ba8ae8563c3dfc4a0b978f86a6";
const movieBtn = document.getElementById("movie-btn");
const movieInput = document.getElementById("movie-input");
const movieResultados = document.getElementById("movie-resultados");
const movieLoader = document.getElementById("movie-loader");

let moviePagina = 1;
let movieBusqueda = "";

movieBtn.addEventListener("click", () => {
  movieBusqueda = movieInput.value.trim();
  if (movieBusqueda !== "") {
    moviePagina = 1;
    movieResultados.innerHTML = "";
    buscarPeliculas(movieBusqueda, moviePagina);
  }
});

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
    moviePagina++;
    buscarPeliculas(movieBusqueda, moviePagina, true);
  }
});

function buscarPeliculas(termino, pagina, agregar = false) {
  if (!termino) return;
  movieLoader.style.display = "block";

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${movieApiKey}&query=${encodeURIComponent(termino)}&page=${pagina}&language=es-ES`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      movieLoader.style.display = "none";
      if (data.results.length === 0 && pagina === 1) {
        movieResultados.innerHTML = "<p style='color:red;'>No se encontraron resultados.</p>";
        return;
      }
      mostrarPeliculas(data.results, agregar);
    })
    .catch(err => {
      movieLoader.style.display = "none";
      movieResultados.innerHTML = "<p style='color:red;'>Error al conectarse a la API.</p>";
      console.error(err);
    });
}

function mostrarPeliculas(peliculas, agregar) {
  const contenido = peliculas.map(pelicula => `
    <div class="movie-card">
      <img src="${pelicula.poster_path ? "https://image.tmdb.org/t/p/w500" + pelicula.poster_path : "https://via.placeholder.com/200x300?text=Sin+imagen"}" alt="${pelicula.title}">
      <h3>${pelicula.title}</h3>
      <p>${pelicula.release_date ? pelicula.release_date.slice(0, 4) : "N/A"}</p>
    </div>
  `).join("");

  if (agregar) {
    movieResultados.innerHTML += contenido;
  } else {
    movieResultados.innerHTML = contenido;
  }
}
