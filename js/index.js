// Cotizaciones
// Dolar Euro
const apiUrl = "https://dolarapi.com/v1/cotizaciones";
const content = document.getElementById("cotizacion_en_vivo");
const apiUrlBtc = "https://api.cocos.capital/api/v1/public/crypto/prices";

async function consultarCotizacion() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      content.innerHTML = `<h2 id="titulo_cotizacion">Cotización en vivo</h2>`;
      for (const dat of data) {
        let logoHtml = "";

        if (dat.moneda === "USD") {
          logoHtml = `<img src="img/dollar.jpeg" alt="USD" class="logo-cotizacion-img">`;
        }
        if (dat.moneda === "EUR") {
          logoHtml = `<i class="fa-solid fa-euro-sign"></i>`;
        }
        if (dat.moneda === "USD" || dat.moneda === "EUR") {
          let fechaActualizacion = "";
          if (dat.fechaActualizacion) {
            const fecha = new Date(dat.fechaActualizacion);
            fechaActualizacion = fecha.toLocaleString();
          } else {
            fechaActualizacion = new Date().toLocaleString();
          }
          content.innerHTML += `
          <div class="cotizacion">
            <div>
              <a href="#" class="logo-cotizacion">
                ${logoHtml}
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
            <div class="ultima-actualizacion">
              Última actualización:<br>
              <span class="fecha-actualizacion">${fechaActualizacion}</span>
            </div>
          </div>
        `;
        }
      }
    }

    // BTC y ETH
    const responseBtc = await fetch(apiUrlBtc);
    if (responseBtc.ok) {
      const dataBtc = await responseBtc.json();
      const fechaActualizacionCripto = new Date().toLocaleString();
      for (const crypto of dataBtc) {
        let logoHtml = "";
        if (crypto.baseTicker === "BTC") {
          logoHtml = `<i class="fa-solid fa-bitcoin-sign"></i>`;
        }
        if (crypto.baseTicker === "ETH") {
          logoHtml = `<img src="img/logo-ethereum.png" alt="ETH" class="logo-cotizacion-img">`;
        }
        if (crypto.baseTicker === "BTC" || crypto.baseTicker === "ETH") {
          content.innerHTML += `
            <div class="cotizacion">
              <div>
                <a href="#" class="logo-cotizacion">
                  ${logoHtml}
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
              <div class="ultima-actualizacion">
                Última actualización:<br>
                <span class="fecha-actualizacion">${fechaActualizacionCripto}</span>
              </div>
            </div>
          `;
        }
      }
    }

  } catch (error) {
    console.error("Error al consultar la API:", error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  consultarCotizacion();
  setInterval(consultarCotizacion, 20000);
});

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

function abrirEnlace() {
  const link = document.getElementById("boton_noticia").getAttribute("data-link");
  if (link) {
    window.open(link, "_blank");
  }
}

function popu(elemento) {
  const titulo = elemento.getAttribute("data-titulo");
  const texto = elemento.getAttribute("data-texto");
  const link = elemento.getAttribute("data-link");

  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-titulo").innerText = titulo;
  document.getElementById("modal-texto").innerText = texto;

  const boton = document.getElementById("boton_noticia");
  boton.setAttribute("data-link", link || "");
  boton.style.display = link ? "block" : "none";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    cerrarModal();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const abrir = document.getElementById("abrir_menu");
  const cerrar = document.getElementById("cerrar_menu");
  const menu = document.querySelector(".nav_links");

  abrir.addEventListener("click", () => {
    menu.classList.add("active");
    abrir.style.display = "none";
    cerrar.style.display = "block";
  });

  cerrar.addEventListener("click", () => {
    menu.classList.remove("active");
    cerrar.style.display = "none";
    abrir.style.display = "block";
  });

  document.querySelectorAll(".nav_link").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      cerrar.style.display = "none";
      abrir.style.display = "block";
    });
  });
});

var form = document.getElementById('form')

function condicionMail(){
    
      const serviceID = 'service_0h84b9a';
        const templateID = 'template_dag09zb';

        emailjs.sendForm(serviceID, templateID, form)
            .then(() => {
                document.getElementById('mensaje-enviado').style.display = 'block';
                form.reset();
                setTimeout(function() {
                    document.getElementById('mensaje-enviado').style.display = 'none';
                }, 5000);
      }, (err) => {
                alert('Error al enviar el mensaje. Inténtalo de nuevo.');
              });
      

}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    condicionMail();
});