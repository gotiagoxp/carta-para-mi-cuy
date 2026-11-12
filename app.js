const pantallaAmo = document.getElementById("pantalla-te-amo");
const pantallaCarta = document.getElementById("pantalla-carta");
const escena = document.getElementById("escena-carta");
const panelPoema = document.getElementById("panel-poema");
const selloCuy = document.getElementById("sello-cuy");
const instruccion = document.getElementById("instruccion-carta");

const TIEMPO_SELLO_ROMPE = 420;
const TIEMPO_CARTA_ABIERTA = 1100;

function irACarta() {
  pantallaAmo.classList.add("saliendo");
  setTimeout(() => {
    pantallaAmo.classList.remove("activa", "saliendo");
    pantallaCarta.classList.add("activa");
    escena?.classList.add("entrada-pum");
  }, 550);
}

function abrirCarta() {
  if (escena?.classList.contains("carta-abierta") || escena?.classList.contains("abriendo-caja")) return;

  selloCuy?.classList.add("rompiendo");
  selloCuy?.setAttribute("tabindex", "-1");
  instruccion?.classList.add("oculta");

  setTimeout(() => {
    escena?.classList.add("abriendo-caja");
    panelPoema?.setAttribute("aria-hidden", "false");
  }, TIEMPO_SELLO_ROMPE);

  setTimeout(() => {
    escena?.classList.add("carta-abierta");
    pantallaCarta.classList.add("leyendo");
  }, TIEMPO_CARTA_ABIERTA);
}

function cargarPoema() {
  const data = typeof CARTA !== "undefined" ? CARTA : {};
  document.getElementById("destinatario").textContent = `Para ${data.para || "ti"}:`;
  document.getElementById("contenido-poema").textContent = data.poema || "";
  const firmaEl = document.getElementById("firma");
  firmaEl.textContent = [data.firma, data.tuNombre].filter(Boolean).join("\n");
  const fecha = data.fecha ? new Date(data.fecha) : new Date();
  document.getElementById("fecha-carta").textContent = fecha.toLocaleDateString("es", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

pantallaAmo.addEventListener("click", irACarta);
pantallaAmo.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    irACarta();
  }
});

function onAbrirCarta(e) {
  if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;
  if (e.type === "keydown") e.preventDefault();
  abrirCarta();
}

selloCuy.addEventListener("click", onAbrirCarta);
selloCuy.addEventListener("keydown", onAbrirCarta);

function cargarImagenSello() {
  const img = document.getElementById("img-sello");
  const vacio = document.getElementById("sello-vacio");
  const sello = document.getElementById("sello-cuy");
  const ruta = typeof CARTA !== "undefined" && CARTA.imagenSello ? CARTA.imagenSello.trim() : "";

  if (!ruta) {
    sello.classList.add("sin-imagen");
    return;
  }

  img.addEventListener(
    "load",
    () => {
      sello.classList.add("con-imagen");
      vacio.hidden = true;
    },
    { once: true }
  );

  img.addEventListener(
    "error",
    () => {
      img.removeAttribute("src");
      sello.classList.add("sin-imagen");
      vacio.hidden = false;
    },
    { once: true }
  );

  img.src = ruta;
}

cargarPoema();
cargarImagenSello();
