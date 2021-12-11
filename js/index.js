//Array de productos
let camisetas = [
  {
    equipo: "Boca Juniors",
    descripcion: "camiseta año 2007",
    imagen: "../assets/camiseta-boca-retro.png",
    precio: 4500,
    category: "retro",
  },
  {
    equipo: "Boca Juniors",
    descripcion: "camiseta suplente año 2020/21",
    imagen: "../assets/camiseta-suplente-boca.png",
    precio: 6500,
    category: "nacionales",
  },
  {
    equipo: "FC Barcelona",
    descripcion: "camiseta retro año 2004",
    imagen: "../assets/camiseta-barcelona-retro.png",
    precio: 5000,
    category: "retro",
  },
  {
    equipo: "AC Milan",
    descripcion: "camiseta retro año 2006",
    imagen: "../assets/camiseta-milan-retro.png",
    precio: 4800,
    category: "retro",
  },
  {
    equipo: "Francia",
    descripcion: "camiseta retro año 2002",
    imagen: "../assets/camiseta-francia-retro.png",
    precio: 5500,
    category: "retro",
  },
  {
    equipo: "Racing de Avellaneda",
    descripcion: "camiseta titular año 2016 ",
    imagen: "../assets/camiseta-racing-nacional.png",
    precio: 4000,
    category: "nacionales",
  },
  {
    equipo: "Ferro Carril Oeste",
    descripcion: "camiseta titular año 2014",
    imagen: "../assets/camiseta-ferro.png",
    precio: 3500,
    category: "nacionales",
  },
  {
    equipo: "Talleres de Córdoba",
    descripcion: "camiseta titular año 2018",
    imagen: "../assets/camiseta-talleres.png",
    precio: 3800,
    category: "nacionales",
  },
  {
    equipo: "Manchester City",
    descripcion: "camiseta titular año 2015",
    imagen: "../assets/camiseta-city.png",
    precio: 6000,
    category: "internacionales",
  },
  {
    equipo: "Paris Saint-Germain",
    descripcion: "camiseta titular año 2020",
    imagen: "../assets/camiseta-psg.png",
    precio: 8000,
    category: "internacionales",
  },
  {
    equipo: "Bayer Munich",
    descripcion: "camiseta titular año 2019",
    imagen: "../assets/camiseta-bayer.png",
    precio: 6000,
    category: "internacionales",
  },
  {
    equipo: "Real Madrid",
    descripcion: "camiseta titular año 2017",
    imagen: "../assets/camiseta-real.png",
    precio: 6500,
    category: "internacionales",
  },
];

let productsContainer = document.querySelector("#productsContainer");

//Funcion para insertar HTML en div
let insertarProd = (productos) => {
  productos.map((camiseta) => {
    productsContainer.innerHTML += `
    <div   class="product-item" category="retro">
              <img src="${camiseta.imagen}" alt="${camiseta.equipo}/${camiseta.descripcion}" class="product--img">
              <p class="product--name">${camiseta.equipo} ${camiseta.descripcion} <br>Precio: $${camiseta.precio}</p>
            </div>
    `;
  });
};

//Inicializando funcion mostrando productos
let mostrarProd = () => {
  insertarProd(camisetas);
};

//Inicializando la función cuando carga la página
window.onload = mostrarProd;

let buscador = document.querySelector("#buscador");
let buscadorForm = document.querySelector("#formBuscador");

//Funcion de buscador

const manejoBusqueda = (e) => {
  e.preventDefault();
  productsContainer.innerHTML = "";
  if (buscador.value === "") {
    return;
  }

  let filtroCat = camisetas.filter(
    (camiseta) => camiseta.category.toLowerCase() === buscador.value
  );
  let filtroEquipo = camisetas.filter(
    (camiseta) => camiseta.equipo.toLowerCase() === buscador.value
  );
  insertarProd(filtroCat);
  insertarProd(filtroEquipo);
  buscador.value = "";
};

buscadorForm.addEventListener("submit", manejoBusqueda);
