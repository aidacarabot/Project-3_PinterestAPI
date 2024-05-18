
//! CREAR NAVBAR
const createNav = () => {
  const navbar = document.querySelector('#navbar');
  const logo = document.createElement('img');
  const ul = document.createElement('ul');
  const inicio = document.createElement('li');
  const explorar = document.createElement('li');
  const crear = document.createElement('li');
  const buscador = document.createElement('form');
  const inputBuscar = document.createElement('input');
  const btnBuscar = document.createElement('button');
  const btnImg = document.createElement('img');
  const notificaciones = document.createElement('img');
  const mensajes = document.createElement('img');
  const perfil = document.createElement('img');

  logo.src = "./assets/logo.png";
  logo.classList.add('logo');
  inicio.textContent = 'Inicio';
  inicio.classList.add('inicio');
  explorar.textContent = 'Explorar';
  crear.textContent = 'Crear';
  buscador.classList.add('search-form');
  inputBuscar.type = 'text';
  inputBuscar.placeholder = 'Buscar';
  inputBuscar.classList.add('search-bar');
  btnBuscar.type = 'submit';
  btnBuscar.classList.add('search-button');
  btnImg.src = './assets/logo-buscar.png';
  btnImg.classList.add('button-img');
  notificaciones.src = './assets/notificaciones-logo.png';
  mensajes.src = './assets/mensajes-logo.png';
  perfil.src = './assets/perfil-logo.png';
  perfil.classList.add('perfil');
  mensajes.classList.add('mensajes');
  notificaciones.classList.add('notificaciones');

  navbar.append(logo);
  navbar.appendChild(ul);
  ul.appendChild(inicio);
  ul.appendChild(explorar);
  ul.appendChild(crear);
  navbar.append(buscador);
  buscador.appendChild(btnBuscar);
  btnBuscar.append(btnImg);
  buscador.appendChild(inputBuscar);
  navbar.append(notificaciones);
  navbar.append(mensajes);
  navbar.append(perfil);
};
createNav();


//! OBTENER VALOR DEL INPUT PARA BUSCAR IMÁGENES
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-bar');
const imageContainer = document.querySelector('#gallery');

//! Variables globales para gestionar el estado de la búsqueda
let pageNumber = 1; // Inicializamos el número de página en 1
let currentSearchValue = 'surf'; // Valor de búsqueda predeterminado

// Búsqueda inicial con el término "surf" -> para que salgan algunas imágenes al principio
performSearch(currentSearchValue, pageNumber);

searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Previene el envío del formulario
  currentSearchValue = searchInput.value; // Obtiene el valor del input
  imageContainer.innerHTML = ''; // Limpia el contenedor de imágenes antes de la nueva búsqueda
  pageNumber = 1; // Resetea el número de página a 1 en una nueva búsqueda
  performSearch(currentSearchValue, pageNumber);
})


function performSearch(query, page) {
//! FETCH API
const gallerySection = document.querySelector('#gallery'); 
   fetch(`https://api.unsplash.com/search/photos?page=${page}&per_page=30&query=${query}&client_id=DKX8RFHjXo-PYoAveyuGV5a7gFdUXra8DvHlgOJPU8E`)
   .then((res) => res.json())
   .then((pics) => {
    if (pics.results.length) {
      printImages(pics.results);
    }
    else{
      gallerySection.classList.add('gallery-error');
      showError(); // comprobamos si hay imágenes pintadas, y si no, llamamos a la función de error.
    }
  });
  };

  //! BOTÓN CARGAR MÁS IMÁGENES
  const loadMoreDiv = document.querySelector('#loadMore');
  const loadMoreBtn = document.createElement('button');

  loadMoreBtn.classList.add('loadMore-button');
  loadMoreBtn.textContent = 'Cargar más imágenes';

  loadMoreDiv.append(loadMoreBtn);

  loadMoreBtn.addEventListener('click', () => {
    pageNumber++; // Incrementamos el número de página
    performSearch(currentSearchValue, pageNumber); // Realizamos una nueva búsqueda con el número de página incrementado
  });




//! PINTAR IMÁGENES
 const gallerySection = document.querySelector('#gallery');
 const printImages = (images) => {
   for (const image of images) {
     const img = document.createElement('img');
     img.src = image.urls.regular;
     img.classList.add('pic-pinterest', 'scale-on-scroll');
     gallerySection.appendChild(img);
   }
 };

   //! MOSTRAR ERROR
   const showError = () => {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'La palabra que estás intentando buscar no existe.';
    errorMessage.classList.add('error-message');

    const retryButton = document.createElement('button');
    retryButton.textContent = 'Prueba con otra palabra';
    retryButton.classList.add('retry-button');
    retryButton.addEventListener('click', () => {
      location.reload(); // recarga la página desde el principio
      window.scrollTo(0, 0)
    })

    gallerySection.appendChild(errorMessage);
    gallerySection.appendChild(retryButton);

    //? No mostrar botón de cargar más imágenes
    loadMoreBtn.classList.add('hidden');
   };

   //! VOVLER A INICIO
   const logoInicio = document.querySelector('.logo');
   const InicioButton = document.querySelector('.inicio');

   logoInicio.addEventListener('click', () => {
    location.reload();
    window.scrollTo(0, 0) // para que empiece arriba del todo la página
   });

   InicioButton.addEventListener('click', () => {
    location.reload();
    window.scrollTo(0, 0)
   });