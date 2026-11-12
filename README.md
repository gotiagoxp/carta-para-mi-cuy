# Carta animada para tu novia 💕

## Cómo verla

1. Abre `index.html` en Chrome, Edge o Firefox (doble clic en el archivo).
2. Toca **Te amo** → aparece la carta **cerrada** (efecto “pum”).
3. Toca el **sello** (tu imagen del cuy) → se abre la hoja con el poema.

### Imagen del sello

1. Guarda tu imagen en la carpeta `imagenes/` como **`sello-cuy.png`** (o el nombre que quieras).
2. Si usas otro nombre, edita en `poema.js` la línea `imagenSello: "imagenes/tu-archivo.png"`.
3. Hasta que exista el archivo, verás un **círculo en blanco** en el sobre (la carta igual se abre al tocar).

## Cómo escribir tu poema

Edita el archivo **`poema.js`**:

- `para`: nombre o apodo de ella (ej. `"María"`).
- `poema`: tu texto completo. Usa varias líneas entre comillas invertidas `` ` ``.
- `firma` y `tuNombre`: cómo quieres firmar.
- `fecha`: opcional (`"2026-11-12"`) o `null` para la fecha de hoy.

Guarda el archivo y recarga la página en el navegador.

## Archivos

| Archivo      | Qué hace                          |
|-------------|-----------------------------------|
| `index.html`| Estructura de las pantallas       |
| `estilos.css` | Animaciones y diseño            |
| `poema.js`  | **Tu carta** (edítalo aquí)       |
| `app.js`    | Lógica de clic y apertura         |
