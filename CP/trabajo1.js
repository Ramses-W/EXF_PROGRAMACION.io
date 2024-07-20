// Arreglo de imágenes
const properties = [
    {
      image: "images/1.jpg",
      price: "$78,850",
      area: "57.40 m2"
    },
    {
      image: "images/2.jpg",
      price: "$90,000",
      area: "70.00 m2"
    },
    {
      image: "images/3.jpg",
      price: "$120,000",
      area: "90.00 m2"
    },
    {
      image: "images/4.jpg",
      price: "$150,000",
      area: "110.00 m2"
    },
    {
      image: "images/5.jpg",
      price: "$180,000",
      area: "130.00 m2"
    },
    {
      image: "images/6.jpg",
      price: "$200,000",
      area: "150.00 m2"
    },
    {
      image: "images/7.jpg",
      price: "$220,000",
      area: "170.00 m2"
    },
    {
      image: "images/8.jpg",
      price: "$250,000",
      area: "190.00 m2"
    },
    {
      image: "images/9.jpg",
      price: "$280,000",
      area: "210.00 m2"
    },
    {
      image: "images/10.jpg",
      price: "$300,000",
      area: "230.00 m2"
    }
  ];

  let currentImageIndex = 0;
// Función para mostrar
  const image = document.getElementById("image");
  const priceElement = document.getElementById("price");
  const areaElement = document.getElementById("area");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
// Función para avanzar a la siguiente imagen
  function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= properties.length) {
      currentImageIndex = 0;
    }
    updateImage();
  }
// Función para retroceder a la imagen anterior
  function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = properties.length - 1;
    }
    updateImage();
  }

  function updateImage() {
    image.src = properties[currentImageIndex].image;
    priceElement.textContent = properties[currentImageIndex].price;
    areaElement.textContent = properties[currentImageIndex].area;
  }
// Mostrar la primera imagen al cargar la página
  updateImage();