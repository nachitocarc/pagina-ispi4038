const apiUrl = "https://dolarapi.com/v1/cotizaciones";
const content = document.getElementById("cotizaciones");

async function consultarCotizacion() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      content.innerHTML = "";
      for (const dat of data) {
        content.innerHTML += `
          <div class="cotizacion">
            <div>
              <a href="#" class="logo-cotizacion">
                <i class="fa-solid fa-hand-holding-dollar"></i>
              </a>
            </div>
            <div class="par">${dat.moneda}</div>
            <div id="compra-venta">
              <div>
                <h3>Compra</h3>
                <div class="valor">${dat.compra}</div>
              </div>
              <div>
                <h3>Venta</h3>
                <div class="valor">${dat.venta}</div>
              </div>
            </div>
            <div class="variacion"></div>
          </div>
        `;
      }
    }
  } catch (error) {
    console.error("Error al consultar la API:", error);
  }
}



function mostrarInformacionInstitucional() {
  let info = document.getElementById("infoInstitucional");
  let botonInstitucional = document.getElementById("botonInstitucional");
  if (info.style.display === "none") {
    info.style.display = "block";
    botonInstitucional.innerText = "-";
    botonInstitucional.style.color = "red";
  } else {
    info.style.display = "none";
    botonInstitucional.innerText = "+";
    botonInstitucional.style.color = "green";
  }
}

function mostrarInformacionAcademica() {
  let info = document.getElementById("infoAcademica");
  let botonAcademica = document.getElementById("botonAcademica");
  if (info.style.display === "none") {
    info.style.display = "block";
    botonAcademica.innerText = "-";
    botonAcademica.style.color = "red";
  } else {
    info.style.display = "none";
    botonAcademica.innerText = "+";
    botonAcademica.style.color = "green";
  }
}


document.addEventListener("DOMContentLoaded", function() {
  consultarCotizacion();
});