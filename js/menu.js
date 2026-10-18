/*
 * MENÚ DE EL CUSCATLECO
 *
 * Copiado del menú impreso de las mesas. Para cambiar un precio o un plato,
 * edita solo este archivo y guarda en main: la página se actualiza sola.
 *
 * - precio: el texto que se muestra ("$9.50"). Si no se sabe, pon "PENDIENTE".
 * - foto: (opcional) nombre de una foto de images/fotos.js. Los platos con foto
 *   salen como tarjeta grande arriba de la lista.
 */
window.MENU = [
  {
    id: "pupusas",
    nombre: "Pupusas y antojitos",
    nota: "Pupusas hechas a mano con masa de maíz, servidas con salsa de tomate (no picante) y curtido.",
    platos: [
      { nombre: "Pupusas", detalle: "orden de 3", precio: "$9.50", foto: "pupusas",
        desc: "Queso, queso con loroco, queso con jalapeño, frijoles fritos, frijol con queso, frijol con queso y loroco, revuelta, revuelta con loroco o chicharrón con queso." },
      { nombre: "Baleadas sencillas", detalle: "orden de 2", precio: "$9.50", desc: "Tortilla de harina hecha a mano con frijoles, queso y crema." },
      { nombre: "Baleadas con huevo", detalle: "orden de 2", precio: "$12.00", desc: "Frijoles, queso, crema y huevo." },
      { nombre: "Baleadas con huevo y chorizo", detalle: "orden de 2", precio: "$13.00", desc: "Frijoles, queso, crema, chorizo y huevo." },
      { nombre: "Baleadas con pollo", detalle: "orden de 2", precio: "$14.00", desc: "Frijoles, crema, queso, aguacate y pollo." },
      { nombre: "Baleadas con carne de res", detalle: "orden de 2", precio: "$14.00", desc: "Frijoles, queso, crema, aguacate y carne." },
      { nombre: "Baleadas especiales", detalle: "orden de 2", precio: "$18.00", desc: "Frijoles, queso, crema, aguacate, huevo con chorizo y carne." },
      { nombre: "Tacos dorados", precio: "$13.00", desc: "Tacos de pollo fritos con repollo, queso y salsa." },
      { nombre: "Yuca frita con chicharrones", precio: "$11.25", desc: "Yuca frita con chicharrón de cerdo y ensalada." },
      { nombre: "Enchiladas salvadoreñas", precio: "$11.25", desc: "De pollo o carne molida." },
      { nombre: "Pastelitos", precio: "$8.50", desc: "De pollo o carne molida, con repollo, chimol, salsa de tomate y queso." },
      { nombre: "Tamal de elote dulce", detalle: "2", precio: "$7.00", desc: "Con crema y queso." },
      { nombre: "Plátano con todo", precio: "$7.50", desc: "Plátano maduro con crema, queso y frijoles refritos." },
      { nombre: "Rellenitos de frijol negro", detalle: "3", precio: "$9.00", desc: "De plátano maduro rellenos de frijol negro, con crema." },
      { nombre: "Empanadas salvadoreñas de leche", detalle: "3", precio: "$9.00", desc: "De plátano maduro rellenas de leche, con azúcar." },
      { nombre: "Combo salvadoreño", precio: "$14.00", desc: "Tamal dulce, plátano frito, yuca frita y 1 pupusa." }
    ]
  },
  {
    id: "carnes",
    nombre: "Carnes y parrilladas",
    nota: "Platillos centroamericanos.",
    platos: [
      { nombre: "Carne asada salvadoreña", precio: "$19.00", foto: "carneAsada", desc: "Carne asada y chorizo con casamiento (arroz y frijoles), pico de gallo, aguacate y queso." },
      { nombre: "Parrillada hondureña", precio: "$23.50", foto: "parrillada", desc: "Chuleta, pollo, carne y camarones, con arroz, frijoles, chimol, aguacate, queso y tajadas." },
      { nombre: "Churrasco guatemalteco", precio: "$19.00", foto: "churrasco", desc: "Carne asada con arroz, frijoles negros, chimol, aguacate, coditos, jalapeños, cebollín y queso." },
      { nombre: "Carne asada hondureña", precio: "$19.00", desc: "Con arroz y frijoles, pico de gallo, aguacate, tajadas y queso." },
      { nombre: "Churrasco de harina guatemalteco", precio: "$19.00" },
      { nombre: "Churrasco ecuatoriano", precio: "$19.00", desc: "Carne asada con arroz, frijoles, papas fritas, ensalada, aguacate, plátano, salchicha y huevos." },
      { nombre: "Carne asada con camarones", precio: "$20.00", desc: "Con arroz, frijoles negros, chimol, jalapeño y cebollín." },
      { nombre: "Costillas de res asadas", precio: "$18.00", desc: "Con arroz, frijoles, aguacate y ensalada." },
      { nombre: "Carne asada con tajadas", precio: "$17.00", desc: "Sobre tajadas de guineo verde, con repollo, pico de gallo y salsas." },
      { nombre: "Carne molida con tajadas", precio: "$16.00" },
      { nombre: "Cena cuscatleca", precio: "$16.00", desc: "Carne asada, huevos fritos, plátano frito, frijoles refritos, aguacate, queso y crema." },
      { nombre: "Guisado de res", precio: "$14.00" },
      { nombre: "Bistec entomatado", precio: "$16.00", desc: "Con tomate, chile verde y cebolla; con arroz, frijoles y ensalada." },
      { nombre: "Bistec encebollado", precio: "$16.00", desc: "Con cebolla y tomate; con arroz, frijoles y ensalada." },
      { nombre: "Parrillada salvadoreña", precio: "$22.50", desc: "Carne, pollo, chorizo y camarones, con arroz, frijoles, chimol, aguacate y queso." },
      { nombre: "Chuleta asada", precio: "$16.00", desc: "Con arroz, frijoles, ensalada y aguacate." },
      { nombre: "Chuleta con tajadas", precio: "$16.00" }
    ]
  },
  {
    id: "pollo",
    nombre: "Pollo y mariscos",
    platos: [
      { nombre: "Pollo con tajadas", detalle: "pierna y cadera", precio: "$14.00", foto: "polloTajadas", desc: "Pollo frito sobre tajadas de guineo verde." },
      { nombre: "Pollo con tajadas", detalle: "ala y pechuga", precio: "$16.00" },
      { nombre: "Pollo frito", precio: "$14.00", desc: "Con arroz, frijoles, ensalada y queso." },
      { nombre: "Pollo con papas", detalle: "pierna y muslo", precio: "$13.00", desc: "Pollo frito estilo guatemalteco con papas fritas, mayonesa y kétchup." },
      { nombre: "Pollo con papas", detalle: "ala y pechuga", precio: "$14.00" },
      { nombre: "Pollo guisado", precio: "$13.00", desc: "Con arroz, frijoles y ensalada." },
      { nombre: "Pechuga de pollo a la parrilla", precio: "$14.00", desc: "Con arroz, frijoles, ensalada, aguacate y queso." },
      { nombre: "Pechuga de pollo encebollada", precio: "$14.00", desc: "Con arroz, frijoles y ensalada." },
      { nombre: "Ceviche de camarones", precio: "$16.00" },
      { nombre: "Pescado frito", precio: "$20.00", desc: "Pescado entero con arroz, frijoles y ensalada." },
      { nombre: "Pescado frito con tajadas", precio: "$20.00" },
      { nombre: "Pescado con casamiento", precio: "$20.00", desc: "Pescado entero con casamiento, ensalada y tajadas." },
      { nombre: "Filete de pescado frito", precio: "$17.00", desc: "Tilapia con arroz, frijoles, ensalada y aguacate." },
      { nombre: "Filete de pescado con camarones", precio: "$20.00", desc: "Tilapia y camarones con arroz, frijoles y ensalada." },
      { nombre: "Camarones a la plancha", precio: "$16.00", desc: "Con arroz, frijoles, aguacate y ensalada." },
      { nombre: "Camarones entomatados", precio: "$16.00", desc: "Con tomate, chile verde y cebolla; con arroz, frijoles y ensalada." }
    ]
  },
  {
    id: "desayunos",
    nombre: "Desayunos",
    nota: "Se sirven todo el día.",
    platos: [
      { nombre: "Desayuno salvadoreño", precio: "$12.00", desc: "2 huevos fritos, plátano, chorizo, frijol, queso, crema y aguacate." },
      { nombre: "Desayuno hondureño", precio: "$13.00", desc: "2 huevos fritos, tajadas, chuleta, frijol, queso y crema." },
      { nombre: "Desayuno típico", precio: "$12.00", desc: "Huevos picados con tomate, cebolla y chile verde, con plátano, queso crema y frijoles fritos." },
      { nombre: "Huevos rancheros", precio: "$13.00", desc: "Con frijol frito rojo, plátano, queso, crema y aguacate." },
      { nombre: "Desayuno cuscatleco", precio: "$14.00", desc: "Huevos estrellados o picados, casamiento, chorizo, plátano, queso, crema y aguacate." },
      { nombre: "Huevos a la mexicana", precio: "$12.00", desc: "Con arroz, frijoles, aguacate y queso." }
    ]
  },
  {
    id: "mexicanos",
    nombre: "Mexicanos",
    platos: [
      { nombre: "Tacos", detalle: "orden de 3", precio: "$12.00", foto: "tacos", desc: "Pollo, bistec, campechanos, chorizo, carnitas, al pastor o pescado. Con cilantro, cebolla y salsa roja y verde. Lechuga, pico de gallo, crema y queso: $1.50 extra." },
      { nombre: "Quesadillas", precio: "$12.00", foto: "quesadilla", desc: "Tortilla de harina grande con queso Monterey Jack y pollo, bistec, carnitas, vegetales o camarones. Con crema, lechuga y pico de gallo." },
      { nombre: "Nachos con guacamole", precio: "$9.00" },
      { nombre: "Nachos", precio: "$12.00", desc: "Con queso, frijoles, crema, pico de gallo y pollo, bistec, chorizo o vegetales." },
      { nombre: "Sopes", detalle: "3", precio: "$12.00", desc: "De pollo, bistec o carnitas, con lechuga, pico de gallo, frijoles, queso y crema." },
      { nombre: "Tostadas", detalle: "3", precio: "$12.00", desc: "De carnitas, pollo o bistec, con frijoles, lechuga, pico de gallo, crema y queso." },
      { nombre: "Burritos", precio: "$10.50", desc: "Pollo, bistec, carnitas, al pastor, vegetales o camarones, con lechuga, pico de gallo, arroz, frijoles, queso y crema." },
      { nombre: "Burrito de camarones con chipotle", precio: "$10.00" },
      { nombre: "Carne asada", precio: "$19.00", desc: "Con arroz, frijoles, pico de gallo, aguacate, queso, cebollín y jalapeño." },
      { nombre: "Bistec a la mexicana", precio: "$16.00", desc: "Con tomate, jalapeño y cebolla; con arroz y frijoles." },
      { nombre: "Milanesa de pollo o bistec", precio: "$15.00", desc: "Con arroz, frijoles y ensalada." },
      { nombre: "Chuleta en salsa verde", precio: "$16.00", desc: "Con arroz y frijoles." },
      { nombre: "Fajitas de pollo, bistec o camarones", precio: "$16.00", desc: "Con arroz, frijoles, crema y queso." },
      { nombre: "Fajita mixta", precio: "$20.00", desc: "Pollo, bistec y camarones." },
      { nombre: "Enchiladas", precio: "$14.00", desc: "De pollo, bistec, camarones o queso Oaxaca, en salsa roja o verde, con crema y queso." }
    ]
  },
  {
    id: "sopas",
    nombre: "Sopas y ensaladas",
    nota: "Las sopas incluyen porción de arroz.",
    platos: [
      { nombre: "Sopa de res", precio: "$16.00", desc: "Con verduras." },
      { nombre: "Sopa de gallina asada", precio: "$17.00", desc: "Con verduras." },
      { nombre: "Sopa de mondongo hondureña", precio: "$16.00", desc: "Mondongo cocido a fuego lento con verduras." },
      { nombre: "Mariscada", precio: "$22.50", desc: "Sopa cremosa de camarones, pescado, mejillones, almejas, calamares y cangrejo." },
      { nombre: "Ensalada de pollo", precio: "$12.00", desc: "Lechuga, tomate, pepino y pollo a la plancha." },
      { nombre: "Ensalada de fajita de pollo", precio: "$12.00" },
      { nombre: "Ensalada de aguacate", precio: "$10.00" },
      { nombre: "Ensalada de carne asada con frijol y aguacate", precio: "$13.00" },
      { nombre: "Ensalada de camarones", precio: "$13.00", desc: "Camarones a la plancha." }
    ]
  },
  {
    id: "bebidas",
    nombre: "Bebidas",
    platos: [
      { nombre: "Horchata salvadoreña", precio: "PENDIENTE", foto: "frescos", desc: "Hecha con semillas de ajonjolí, canela, arroz, leche, azúcar y semillas de morro." },
      { nombre: "Frescos del día", precio: "PENDIENTE", foto: "refrescos", desc: "Jugo natural de fruta del día, con agua y azúcar. Pregunta por el sabor de hoy." },
      { nombre: "Sodas y Jarritos", precio: "PENDIENTE", desc: "Sodas mexicanas." },
      { nombre: "Sodas y jugos de lata", precio: "PENDIENTE" },
      { nombre: "Café", precio: "$2.00" },
      { nombre: "Leche con chocolate", precio: "$2.50", desc: "Chocolate caliente." },
      { nombre: "Atole", precio: "$4.00", desc: "Pregunta por el sabor del día." }
    ]
  },
  {
    id: "porciones",
    nombre: "Porciones",
    platos: [
      { nombre: "Arroz", precio: "$2.50" },
      { nombre: "Frijoles", precio: "$3.00" },
      { nombre: "Plátano con crema", precio: "$4.00" },
      { nombre: "Tajadas", precio: "$3.00" },
      { nombre: "Papas fritas", precio: "$4.00" },
      { nombre: "Chorizo", precio: "$2.50" },
      { nombre: "Jalapeño", precio: "$1.00" },
      { nombre: "Aguacate", precio: "$3.00" },
      { nombre: "Guacamole pequeño", precio: "$4.00" },
      { nombre: "2 tortillas", precio: "$1.00" },
      { nombre: "Crema", precio: "$1.00" },
      { nombre: "Aderezo", precio: "$1.00" },
      { nombre: "Queso", precio: "$1.50" },
      { nombre: "2 huevos fritos", precio: "$2.00" },
      { nombre: "3 cebollines", precio: "$2.00" },
      { nombre: "1 salchicha", precio: "$1.00" }
    ]
  },
  {
    id: "ninos",
    nombre: "Niños",
    platos: [
      { nombre: "Deditos de pollo", precio: "$7.50", desc: "Con papas fritas." },
      { nombre: "Pechugita de pollo asada", precio: "$7.50", desc: "Con arroz y frijoles." },
      { nombre: "Pechugita de pollo empanizada", precio: "$7.50", desc: "Con papas fritas." },
      { nombre: "Carne asada", precio: "$10.00", desc: "Con arroz y frijoles." },
      { nombre: "Salchipapas", precio: "$6.50", desc: "Salchichas con papas fritas." },
      { nombre: "Pollo frito con papitas", precio: "$8.50" }
    ]
  }
];
