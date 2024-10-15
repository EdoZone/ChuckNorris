let frase = document.getElementById("frase");

const obtenerDatos = async () => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const datos = await response.json();
    frase.innerHTML = datos.value
  } catch (error) {
    alert(
      "Se ha interrumpido la conexxion con el servidor y no se puede obtener la frase"
    );
  }
};

obtenerDatos();
