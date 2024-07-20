const cambiarColorBoton = document.getElementById("cambiar-color-boton");
    const codigoColorDisplay = document.getElementById("codigo-color");

    cambiarColorBoton.addEventListener("click", () => {
      // Generar un color hexadecimal aleatorio
      const colorAleatorio = getColorAleatorio();

      // Establecer el color de fondo del cuerpo
      document.body.style.backgroundColor = colorAleatorio;

      // Mostrar el código de color
      codigoColorDisplay.textContent = `Color: ${colorAleatorio}`;
    });

    function getColorAleatorio() {
      const letras = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
      }
      return color;
    }
