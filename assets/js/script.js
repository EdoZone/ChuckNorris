let frase = document.getElementById("frase");

const obtenerDatos = async () => {
  try {
    frase.innerHTML = "Cargando datos..."
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const datos = await response.json();
    frase.innerHTML = datos.value

    
  } catch (error) {
    alert(
      "Se ha interrumpido la conexxion con el servidor y no se puede obtener la frase"
    );
  }
};

// const url = `https://api.mymemory.translated.net/get?q=${datos.value}&langpair=en|es`;

obtenerDatos();
