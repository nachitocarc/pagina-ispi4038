// Cotizaciones
// Dolar Euro
const apiUrl = "https://dolarapi.com/v1/cotizaciones";
const content = document.getElementById("cotizaciones");


async function consultarCotizacion() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      content.innerHTML = "";
      for (const dat of data) {
        if (dat.moneda === "USD" || dat.moneda === "EUR") {
          content.innerHTML += `
          <div class="cotizacion">
            <div>
              <a href="#" class="logo-cotizacion">
                <i class="fa-solid fa-coins"></i>
              </a>
            </div>
            <div class="par">${dat.moneda}/ARS</div>
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
    }

    // BTC y ETH
    const apiUrlBtc = "https://api.cocos.capital/api/v1/public/crypto/prices";
    const responseBtc = await fetch(apiUrlBtc);
    if (responseBtc.ok) {
      const dataBtc = await responseBtc.json();
      for (const crypto of dataBtc) {
        if (crypto.baseTicker === "BTC" || crypto.baseTicker === "ETH") {
          content.innerHTML += `
            <div class="cotizacion">
              <div>
                <a href="#" class="logo-cotizacion">
                  <i class="fa-solid fa-coins"></i>
                </a>
              </div>
              <div class="par">${crypto.baseTicker}/ARS</div>
              <div id="compra-venta">
                <div>
                  <h3>Compra</h3>
                  <div class="valor">${Number(crypto.ask).toFixed(2)}</div>
                </div>
                <div>
                  <h3>Venta</h3>
                  <div class="valor">${Number(crypto.bid).toFixed(2)}</div>
                </div>
              </div>
              <div class="variacion"></div>
            </div>
          `;
        }
      }
    }

    const spanActualizacion = document.getElementById("ultima-actualizacion");
    if (spanActualizacion) {
      const ahora = new Date();
      const fechaHora = ahora.toLocaleString();
      spanActualizacion.textContent = `Última actualización: ${fechaHora}`;
    }
  } catch (error) {
    console.error("Error al consultar la API:", error);
  }
}


document.addEventListener("DOMContentLoaded", function () {
  consultarCotizacion();
  setInterval(consultarCotizacion, 20000);
});

// Información academica

function mostrarInformacionAcademica() {
  let info = document.getElementById("infoAcademica");
  if (info.style.display === "none") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
}
function mostrarInformacionInstitucional() {
  let info = document.getElementById("infoInstitucional");
  if (info.style.display === "none") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
}



