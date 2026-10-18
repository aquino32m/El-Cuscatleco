# El Cuscatleco: página web

## El negocio

**El Cuscatleco**, pupusería y restaurante de comida salvadoreña (también hondureña y guatemalteca)
en el área de Upper Darby, Pensilvania. La página está en español y sirve para que la gente vea
el menú y llame o pida por WhatsApp.

## Quién la hace

Soy **Denilson Aquino** y hago páginas web para restaurantes latinos.

## Publicación

- Se publica sola en **Netlify** (https://elcuscatleco.netlify.app) cada vez que se guarda en la
  rama **`main`** de GitHub. No hay que compilar nada.
- `index.html` está en la raíz del repositorio para que Netlify lo publique directo.

## Cómo está hecha

Solo HTML, CSS y JavaScript, sin herramientas de build.

| Archivo / carpeta  | Qué tiene                                                                |
| ------------------ | ------------------------------------------------------------------------ |
| `index.html`       | Toda la página y sus textos: portada, menú, nosotros, horario, mapa.     |
| `css/styles.css`   | Estilos. Diseño pensado primero para celular.                            |
| `js/main.js`       | Menú del celular, pestañas del menú, animaciones, día de hoy, WhatsApp.  |
| `images/fotos.js`  | Las rutas de todas las fotos (ver `images/README.md`).                   |

- Colores: azul `#0B2E6B` y blanco/masa `#FFF8EA` (El Salvador), amarillo maíz `#F4C542`.
- Tipografías: Bricolage Grotesque (títulos) y DM Sans (texto), desde Google Fonts.
- Estilo y textos tomados de la página anterior en https://el-cuscatleco.higgsfield.app.
- Animaciones con la clase `.reveal`; se desactivan si el celular pide "reducir movimiento".
- Para probarla basta con abrir `index.html` en el navegador.

## Reglas

- **No inventar datos.** Si falta un dato real, se pone `PENDIENTE`.
- Revisar siempre cómo se ve en celular primero.

## Datos PENDIENTES

Busca `PENDIENTE` en `index.html` y `js/main.js` para encontrarlos.

- [ ] **Número de WhatsApp**: va en `WHATSAPP` al principio de `js/main.js` (solo dígitos con
      código de país, ej. `14845551234`). Mientras esté vacío, los botones de WhatsApp muestran un
      aviso con el teléfono.
- [ ] **Horario de sábado y domingo**.
- [ ] **Precios del menú**. Solo hay precio de: pupusa revuelta ($9.50), carne asada ($19.00),
      parrillada hondureña ($23.50) y pollo con tajadas ($14.00). Todos los demás dicen PENDIENTE.
- [ ] **Bebidas**: qué bebidas venden, sabores de frescos, marcas de sodas y precios. La sección
      solo tiene "Horchata", "Frescos naturales" y "Sodas" como ejemplo, sin confirmar.
- [ ] **Fotos reales** del restaurante y los platos (ahora son fotos de Unsplash de referencia,
      y la de pupusas no es de pupusas reales). Ver `images/README.md`.

### Datos tomados de la página anterior (confirmar con el dueño)

- Teléfono: (484) 461-3156
- Dirección: 29 Garrett Rd, Upper Darby, PA 19082 (cerca de la terminal de la 69th Street)
- Horario: lunes a jueves de 10:00 am a 10:00 pm; viernes de 10:00 am a 10:30 pm
- Abierto desde 2011
- Pedidos en línea: https://order.online/en-US/store/el-cuscatleco-upper-darby-302107
- Facebook: https://www.facebook.com/p/El-Cuscatleco-pupuseria-y-restaurant-100051906105933/
