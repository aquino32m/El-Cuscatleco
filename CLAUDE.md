# El Cuscatleco: página web

## El negocio

**El Cuscatleco**, pupusería y restaurante de comida salvadoreña (también hondureña, guatemalteca y mexicana)
en el área de Upper Darby, Pensilvania. La página está en español y sirve para que la gente vea
el menú y llame o pida por WhatsApp.

## Quién la hace

Soy **Denilson Aquino** y hago páginas web para restaurantes latinos.

## Publicación

- Se publica sola en **Netlify** (https://elcuscatleco-pa.netlify.app) cada vez que se guarda en la
  rama **`main`** de GitHub. No hay que compilar nada.
- `index.html` está en la raíz del repositorio para que Netlify lo publique directo.

## Cómo está hecha

Solo HTML, CSS y JavaScript, sin herramientas de build.

| Archivo / carpeta  | Qué tiene                                                                |
| ------------------ | ------------------------------------------------------------------------ |
| `index.html`       | Toda la página y sus textos: portada, nosotros, horario, mapa.           |
| `js/menu.js`       | **El menú completo con precios.** Para cambiar un plato o precio, aquí.  |
| `css/styles.css`   | Estilos. Diseño pensado primero para celular.                            |
| `js/main.js`       | Arma el menú desde `menu.js`, pestañas, animaciones, día de hoy, WhatsApp. |
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

Busca `PENDIENTE` en `index.html`, `js/menu.js` y `js/main.js` para encontrarlos.

- [ ] **Número de WhatsApp**: va en `WHATSAPP` al principio de `js/main.js` (solo dígitos con
      código de país, ej. `14845551234`). Mientras esté vacío, los botones de WhatsApp muestran un
      aviso con el teléfono.
- [ ] **Horario de sábado y domingo**.
- [ ] **Precios de bebidas frías**: horchata, frescos del día, sodas y Jarritos, sodas y jugos de
      lata. En el menú impreso esos precios están tachados con marcador.
- [ ] **Confirmar precios escritos a mano** en el menú impreso (se leyeron así): pollo con papas
      pierna y muslo $13.00, pollo guisado $13.00, carnes asadas y churrascos $19.00, parrillada
      salvadoreña $22.50, parrillada hondureña $23.50, baleadas con huevo $12.00, baleadas con huevo
      y chorizo $13.00, tacos dorados $13.00.
- [ ] **Fotos reales** del restaurante y los platos (ahora son fotos de Unsplash de referencia,
      y la de pupusas no es de pupusas reales). Ver `images/README.md`.

### De dónde salen los datos

- **Menú y precios** (`js/menu.js`): fotos del menú impreso de las mesas, tomadas por Denilson.
  Se dejó fuera un plato de pollo con nombre tachado en el menú ("chicken chao mein", $14.00).
- La propina está incluida en mesas de 5 o más personas (dice el menú impreso).

### Datos tomados de la página anterior (confirmar con el dueño)

- Teléfono: (484) 461-3156
- Dirección: 29 Garrett Rd, Upper Darby, PA 19082 (cerca de la terminal de la 69th Street)
- Horario: lunes a jueves de 10:00 am a 10:00 pm; viernes de 10:00 am a 10:30 pm
- Abierto desde 2011
- Pedidos en línea: https://order.online/en-US/store/el-cuscatleco-upper-darby-302107
- Facebook: https://www.facebook.com/p/El-Cuscatleco-pupuseria-y-restaurant-100051906105933/
