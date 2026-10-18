# Fotos de El Cuscatleco

Todas las fotos de la página se cambian en **un solo archivo**: [`fotos.js`](fotos.js).

Ahora mismo son fotos gratis de Unsplash (de referencia) que se cargan desde internet.
No hay fotos gratis de pupusas reales en Unsplash, así que la de pupusas es una foto parecida.

## Cómo poner una foto real

1. Sube la foto a esta carpeta `images/` con un nombre sencillo, sin espacios ni acentos
   (ej. `pupusas.jpg`).
2. En `fotos.js`, cambia el enlace de esa foto por la ruta del archivo:
   ```js
   pupusas: "images/pupusas.jpg",
   ```
3. Guarda en la rama `main` y Netlify la publica sola.

## Lista de fotos

| Nombre en `fotos.js` | Dónde aparece                 | Tamaño sugerido   |
| -------------------- | ----------------------------- | ----------------- |
| `portada`            | Fondo de la portada           | 1800 × 1200 px    |
| `pupusas`            | Menú → Pupusas                | 1200 × 900 px     |
| `carneAsada`         | Menú → Platos típicos         | 1200 × 900 px     |
| `parrillada`         | Menú → Platos típicos         | 1200 × 900 px     |
| `polloTajadas`       | Menú → Platos típicos         | 1200 × 900 px     |
| `churrasco`          | Menú → Platos típicos         | 1200 × 900 px     |
| `tacos`              | Menú → Sopas y antojitos      | 1200 × 900 px     |
| `quesadilla`         | Menú → Sopas y antojitos      | 1200 × 900 px     |
| `frescos`            | Menú → Bebidas                | 1200 × 900 px     |
| `refrescos`          | Menú → Bebidas                | 1200 × 900 px     |
| `nosotros`           | Sobre nosotros                | 1000 × 1100 px    |

Las fotos se recortan solas para llenar su espacio. Procura que cada foto pese menos de 400 KB
para que la página cargue rápido en el celular.
