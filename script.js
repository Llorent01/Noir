/* ============================================================
   NOIR — script.js
   Reemplaza WHATSAPP_NUMBER por tu número real (con indicativo,
   sin +, sin espacios). Ej: Colombia = 57 3001234567
   ============================================================ */
const WHATSAPP_NUMBER = "573205104511";

/* ============================================================
   DATOS DE PRODUCTOS
   Un perfume = un producto. Las presentaciones son variantes:
     price5, price10  -> siempre el foco principal (decants)
     price15, price20 -> opcionales, agrégalos solo si ofreces
                          esa fragancia en esos tamaños
     full100           -> precio del frasco completo (100 ML).
                          null/ausente = esa fragancia solo
                          existe en decant, sin frasco completo
   Todas las presentaciones se eligen dentro de "Ver fragancia".
   ============================================================ */
const PRODUCTS = [
  {
    id: 1, image: "img/Perfume 100ml/Night out.jpg", name: "9PM Night Out", brand: "Afnan", gender: "Hombre",
    family: "Oriental Especiado", familyTag: "Oriental",
    notes: "Pitahaya, bergamota, coñac, lavanda, manzana, cardamomo, Mahonial, gamuza, toffee, cedro, haba tonka, Akigalawood, Ambrofix y pachulí",
    desc: "Un oriental especiado intenso y magnético, creado para la noche. Su salida frutal y licorosa evoluciona hacia un corazón cálido de cardamomo, gamuza y toffee, sobre un fondo amaderado de haba tonka y pachulí.",
    price5: 25000, price10: 45000, full100: 320000,
    bestSeller: true, inStock: false
  },
  {
  id: 2, image: "img/Perfume 100ml/Hawas Fire.jpg", name: "Hawas Fire", brand: "Rasasi", gender: "Hombre",

  family: "Amaderado Especiado", familyTag: "Amaderado",

  notes: "Canela, mandarina, pimienta rosa, lavanda, incienso, flor de azahar, vainilla, ámbar y maderas",

  desc: "Una fragancia intensa y moderna con una combinación cálida de especias, notas aromáticas y un fondo amaderado. Su carácter envolvente y llamativo la convierte en una excelente opción para la noche y ocasiones especiales.",

  price5: 25000, price10: 45000, full100: 380000,

  bestSeller: false, inStock: true
  },
  {
  id: 3, image: "img/Perfume 100ml/Khamrah dukhan.jpg", name: "Khamrah Dukhan", brand: "Lattafa", gender: "Unisex",

  family: "Ambarado Especiado", familyTag: "Ambarado",

  notes: "Canela, pimienta, mandarina, tabaco, incienso, cítricos, haba tonka, ámbar, benjuí y maderas",

  desc: "Una fragancia cálida, especiada y envolvente con un carácter dulce y ahumado. Su combinación de tabaco, especias y notas ambaradas crea un aroma intenso y sofisticado, ideal para la noche y ocasiones especiales.",

  price5: 25000, price10: 45000, full100: 295000,

  bestSeller: false, inStock: true
  },
  {
    id: 8, image: "img/Perfume 100ml/9pm.jpg", name: "9PM", brand: "Afnan", gender: "Hombre",
    family: "Oriental Especiado", familyTag: "Oriental",
    notes: "Manzana, canela, vainilla, ámbar",
    desc: "Cálido, dulce y envolvente. Una fragancia oriental pensada para las noches donde quieres dejar huella.",
    price5: 25000, price10: 45000, full100: 280000,
    bestSeller: false, inStock: true
  },
  {
    id: 9, image: "img/Perfume 100ml/Intense man.jpg", name: "Club de Nuit Intense Man", brand: "Afnan", gender: "Hombre",
    family: "Aromático Amaderado", familyTag: "Amaderado",
    notes: "Piña, manzana, abedul, almizcle",
    desc: "Fresco, afrutado y con una estela amaderada intensa. Un clásico moderno con una relación calidad-precio excepcional.",
    price5: 25000, price10: 45000, full100: 245000,
    bestSeller: true, inStock: true
  },
  {
    id: 10, image: "img/Perfume 100ml/9am dive.jpg", name: "9AM Dive", brand: "Afnan", gender: "Hombre",
    family: "Acuático Fresco", familyTag: "Fresco",
    notes: "Bergamota, sal marina, ámbar, almizcle",
    desc: "Fresco y acuático, inspirado en la brisa del mar. Ideal para el uso diario en climas cálidos.",
    price5: 25000, price10: 45000, full100: 255000,
    bestSeller: true, inStock: true
  },
  {
  id: 11, image: "img/Perfume 100ml/Yara.jpg", name: "Yara", brand: "Lattafa", gender: "Mujer",

  family: "Floral Gourmand", familyTag: "Floral",

  notes: "Orquídea, heliotropo, mandarina, frutas tropicales, vainilla, sándalo y almizcle",

  desc: "Una fragancia dulce, cremosa y femenina que combina la delicadeza de las flores con un corazón tropical y gourmand. Su fondo de vainilla, sándalo y almizcle aporta una sensación cálida y envolvente, ideal para quienes buscan un aroma suave, dulce y encantador.",

  price5: 25000, price10: 45000, full100: 220000,

  bestSeller: false, inStock: true
},

{
  id: 12, image: "img/Perfume 100ml/Liquid Brun.jpg", name: "Liquid Brun", brand: "French Avenue", gender: "Hombre",

  family: "Amaderado Ambarado", familyTag: "Amaderado",

  notes: "Canela, bergamota, cardamomo, flor de azahar, vainilla bourbon, elemí, praliné, ambroxan, almizcle y madera de gaiac",

  desc: "Una fragancia cálida, dulce y sofisticada que combina especias aromáticas con una vainilla cremosa y un fondo amaderado. Su carácter envolvente y elegante la convierte en una excelente opción para noches, ocasiones especiales y climas frescos.",

  price5: 25000, price10: 45000, full100: 320000,

  bestSeller: false, inStock: true
},

{
  id: 13, image: "img/Perfume 100ml/Odyssey Aqua.jpg", name: "Odyssey Aqua", brand: "Armaf", gender: "Hombre",

  family: "Aromático Fresco", familyTag: "Aromático",

  notes: "Naranja, toronja, abrótano, menta, lavanda, ambroxan, ciprés y pachulí",

  desc: "Una fragancia fresca y energética que combina cítricos brillantes con menta y lavanda sobre un fondo amaderado y ambarado. Su carácter limpio y refrescante la convierte en una excelente opción para el día, climas cálidos y ocasiones casuales.",

  price5: 25000, price10: 45000, full100: 280000,

  bestSeller: false, inStock: true
},

{
  id: 14, image: "img/Perfume 100ml/You Are My Fire.jpg", name: "You Are My Fire", brand: "Zakat", gender: "Unisex",

  family: "Frutal Especiado", familyTag: "Frutal",

  notes: "Mango, limón, bayas rosadas, jengibre, cumarina azul, jazmín, maderas secas, oud, nagarmota, almizcle y ámbar",

  desc: "Una fragancia vibrante y llamativa que combina la jugosidad del mango y los cítricos con un toque especiado de jengibre. Su corazón floral y su fondo de oud, almizcle y ámbar aportan profundidad y calidez, creando un aroma moderno, intenso y magnético.",

  price5: 25000, price10: 45000, full100: 230000,

  bestSeller: false, inStock: true
},
{
  id: 15,
  image: "img/Perfume 100ml/Ahli Gemini.jpg",
  name: "Gemini",
  brand: "Ahli",
  gender: "Unisex",
  family: "Amaderado Especiado",
  familyTag: "Amaderado",
  notes: "Bergamota, especias, notas amaderadas, ámbar y almizcle",
  desc: "Una fragancia elegante y equilibrada que combina una salida fresca y especiada con un corazón amaderado. Su fondo de ámbar y almizcle aporta calidez y profundidad, creando un aroma versátil y sofisticado.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 16,
  image: "img/Perfume 100ml/Ahli Karpos Special Edition.jpg",
  name: "Karpos Special Edition",
  brand: "Ahli",
  gender: "Unisex",
  family: "Amaderado Aromático",
  familyTag: "Amaderado",
  notes: "Cítricos, especias, notas aromáticas, maderas, ámbar y almizcle",
  desc: "Una composición moderna y refinada que mezcla frescura cítrica con matices especiados y aromáticos. El fondo amaderado y almizclado le da una presencia elegante y duradera.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 17,
  image: "img/Perfume 100ml/Ahli Ursa.jpg",
  name: "Ursa",
  brand: "Ahli",
  gender: "Unisex",
  family: "Amaderado Especiado",
  familyTag: "Amaderado",
  notes: "Especias, cítricos, maderas, ámbar, vainilla y almizcle",
  desc: "Un aroma intenso y envolvente que combina especias cálidas con una base amaderada y ligeramente dulce. Su carácter profundo transmite elegancia y una presencia marcada.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 18,
  image: "img/Perfume 100ml/Ahli Corvus Special Edition.jpg",
  name: "Corvus Special Edition",
  brand: "Ahli",
  gender: "Unisex",
  family: "Amaderado Oriental",
  familyTag: "Amaderado",
  notes: "Especias, incienso, maderas oscuras, ámbar y almizcle",
  desc: "Una fragancia de carácter oscuro y elegante, construida alrededor de especias y acordes amaderados profundos. El ámbar y el almizcle aportan un fondo cálido y sofisticado.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 19,
  image: "img/Perfume 100ml/Ahli Vega Special Edition.jpg",
  name: "Vega Special Edition",
  brand: "Ahli",
  gender: "Femenino",
  family: "Frutal Floral",
  familyTag: "Frutal",
  notes: "Fresa, frambuesa, lichi, ciruela, rosa, magnolia, ámbar y vainilla",
  desc: "Una fragancia alegre y femenina donde las frutas jugosas se mezclan con flores delicadas. Su fondo de ámbar y vainilla aporta dulzura y calidez, creando un aroma luminoso y seductor.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 20,
  image: "img/Perfume 100ml/Ahli Macamel.jpg",
  name: "Macamel",
  brand: "Ahli",
  gender: "Unisex",
  family: "Dulce Gourmand",
  familyTag: "Gourmand",
  notes: "Caramelo, vainilla, frutas dulces, ámbar y almizcle",
  desc: "Una fragancia dulce y reconfortante con una marcada sensación gourmand. Sus acordes de caramelo y vainilla se combinan con un fondo cálido y almizclado que la hace envolvente y adictiva.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 21,
  image: "img/Perfume 100ml/Ahli Vega Gold.jpg",
  name: "Vega Gold",
  brand: "Ahli",
  gender: "Femenino",
  family: "Frutal Floral",
  familyTag: "Frutal",
  notes: "Fresa, frambuesa, lichi, ciruela, rosa, magnolia, ámbar y vainilla",
  desc: "Una composición frutal, dulce y femenina que abre con una explosión de frutas jugosas. Las flores aportan delicadeza mientras el ámbar y la vainilla dejan un fondo cálido, suave y seductor.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 22,
  image: "img/Perfume 100ml/Ahli Pegasus.jpg",
  name: "Pegasus",
  brand: "Ahli",
  gender: "Masculino",
  family: "Oriental Fougère",
  familyTag: "Oriental",
  notes: "Heliotropo, comino, bergamota, pimienta rosa, almendra amarga, lavanda, jazmín, vainilla, sándalo, ámbar, almizcle y cedro",
  desc: "Una fragancia sofisticada que combina una salida fresca y especiada con un corazón cremoso de almendra, lavanda y jazmín. Su fondo de vainilla, sándalo, ámbar y almizcle aporta profundidad y elegancia.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 23,
  image: "img/Perfume 100ml/Ahli Overdose.jpg",
  name: "Overdose",
  brand: "Ahli",
  gender: "Unisex",
  family: "Frutal Amaderado",
  familyTag: "Frutal",
  notes: "Bergamota, naranja, notas verdes, ámbar, melón, pera, piña, almizcle, maderas y vainilla",
  desc: "Una fragancia fresca y dinámica que combina cítricos y frutas jugosas con un fondo cálido. La vainilla, el almizcle y las maderas aportan suavidad y profundidad sin perder su carácter moderno.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 24,
  image: "img/Perfume 100ml/Le Rouge Baroque.jpg",
  name: "Le Rouge Baroque",
  brand: "Al Haramain",
  gender: "Unisex",
  family: "Floral Oriental",
  familyTag: "Floral",
  notes: "Frutas, flores blancas, rosa, vainilla, almizcle y ámbar",
  desc: "Una fragancia elegante y opulenta que mezcla acordes florales con una base cálida y dulce. Su carácter oriental le aporta una sensación lujosa, envolvente y sofisticada.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 25,
  image: "img/Perfume 100ml/L'Aventure Femme.jpg",
  name: "L'Aventure Femme",
  brand: "Al Haramain",
  gender: "Femenino",
  family: "Floral Frutal",
  familyTag: "Frutal",
  notes: "Piña, grosella negra, bergamota, bayas silvestres, cedro, fresia, rosa, almizcle, sándalo, ámbar y vainilla",
  desc: "Una fragancia femenina, fresca y sofisticada que combina frutas tropicales y cítricos con un corazón floral. Su fondo de vainilla, ámbar, sándalo y almizcle aporta una sensación cálida y elegante.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 26,
  image: "img/Perfume 100ml/Reyna.jpg",
  name: "Reyna",
  brand: "Maison Alhambra",
  gender: "Femenino",
  family: "Floral Frutal",
  familyTag: "Frutal",
  notes: "Mandarina, bergamota, toronja, frambuesa, flor de azahar, grosella negra, malvavisco, crema batida, almizcle y ambreta",
  desc: "Una fragancia femenina, dulce y luminosa que combina cítricos con frutos rojos y flores blancas. El fondo de malvavisco, crema y almizcle crea un acabado suave, cremoso y delicadamente dulce.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 27,
  image: "img/Perfume 100ml/Cloud.jpg",
  name: "Cloud",
  brand: "Ariana Grande",
  gender: "Femenino",
  family: "Floral Gourmand",
  familyTag: "Gourmand",
  notes: "Lavanda, pera, bergamota, coco, praliné, vainilla, orquídea, almizcle y maderas",
  desc: "Una fragancia dulce, cremosa y envolvente que combina frutas frescas con coco y praliné. Su fondo de vainilla, almizcle y maderas crea un aroma suave, moderno y reconfortante.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 28,
  image: "img/Perfume 100ml/Cloud Pink.jpg",
  name: "Cloud Pink",
  brand: "Ariana Grande",
  gender: "Femenino",
  family: "Frutal Floral",
  familyTag: "Frutal",
  notes: "Piña rosada, pitahaya, bayas, orquídea de vainilla, agua de coco, ambreta, musgo, maderas de ámbar, almizcle y praliné",
  desc: "Una fragancia dulce y juguetona que combina frutas tropicales y bayas con un corazón cremoso de coco y vainilla. El fondo de almizcle, praliné y maderas de ámbar aporta calidez y suavidad.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 29,
  image: "img/Perfume 100ml/Thank U Next.jpg",
  name: "Thank U Next",
  brand: "Ariana Grande",
  gender: "Femenino",
  family: "Floral Frutal Gourmand",
  familyTag: "Gourmand",
  notes: "Frambuesa, pera, coco, rosa, macarrón y almizcle",
  desc: "Una fragancia dulce y juvenil que combina frutas jugosas con coco y rosa. Su fondo gourmand de macarrón y almizcle aporta una sensación cremosa, suave y adictiva.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 30,
  image: "img/Perfume 100ml/Thank U Next 2.0.jpg",
  name: "Thank U Next 2.0",
  brand: "Ariana Grande",
  gender: "Femenino",
  family: "Floral Frutal",
  familyTag: "Frutal",
  notes: "Jugo de manzana, fresa silvestre, granada, orquídea blanca, jazmín, malvavisco, almizcle y sándalo",
  desc: "Una versión más frutal y jugosa que combina manzana, fresa y granada con un corazón floral. El malvavisco, el almizcle y el sándalo aportan un fondo dulce, suave y acogedor.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 31,
  image: "img/Perfume 100ml/R.E.M.jpg",
  name: "R.E.M",
  brand: "Ariana Grande",
  gender: "Femenino",
  family: "Floral Gourmand",
  familyTag: "Gourmand",
  notes: "Pera, higo, caramelo salado, lavanda, almizcle, haba tonka y sándalo",
  desc: "Una fragancia dulce y relajante que mezcla frutas suaves con lavanda y un acorde de caramelo salado. El fondo de haba tonka, almizcle y sándalo le da una sensación cremosa y envolvente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 32,
  image: "img/Perfume 100ml/Mood Vanilla.jpg",
  name: "Mood Vanilla",
  brand: "Ariana Grande",
  gender: "Femenino",
  family: "Vainilla Gourmand",
  familyTag: "Gourmand",
  notes: "Vainilla, cacao, frutas, flores y almizcle",
  desc: "Una fragancia cálida y dulce centrada en la vainilla. Sus matices cremosos y gourmand crean un aroma acogedor y suave, ideal para quienes disfrutan de perfumes dulces y envolventes.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 33,
  image: "img/Perfume 100ml/Mood Blush.jpg",
  name: "Mood Blush",
  brand: "Ariana Grande",
  gender: "Femenino",
  family: "Floral Frutal",
  familyTag: "Floral",
  notes: "Frutas rojas, flores, vainilla y almizcle",
  desc: "Una composición delicada y femenina que combina acordes frutales con flores suaves. Su fondo dulce y almizclado crea una sensación limpia, romántica y agradable.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 34,
  image: "img/Perfume 100ml/Ari EDP.jpg",
  name: "Ari EDP",
  brand: "Ariana Grande",
  gender: "Femenino",
  family: "Floral Frutal Gourmand",
  familyTag: "Frutal",
  notes: "Pera, toronja, frambuesa, rosa, vainilla, orquídea, malvavisco, almizcle y maderas",
  desc: "Una fragancia dulce y femenina que combina frutas jugosas con un corazón floral. El malvavisco y la vainilla aportan un acabado cremoso y gourmand acompañado de un fondo almizclado.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 35,
  image: "img/Perfume 100ml/Moonlight.jpg",
  name: "Moonlight",
  brand: "Ariana Grande",
  gender: "Femenino",
  family: "Floral Frutal",
  familyTag: "Floral",
  notes: "Ciruela, grosella negra, malvavisco, peonía, sándalo, vainilla y almizcle",
  desc: "Una fragancia femenina y dulce que combina frutas oscuras con flores delicadas. El malvavisco y la vainilla suavizan la composición mientras el sándalo y el almizcle aportan profundidad.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 36,
  image: "img/Perfume 100ml/God Is A Woman.jpg",
  name: "God Is A Woman",
  brand: "Ariana Grande",
  gender: "Femenino",
  family: "Frutal Floral",
  familyTag: "Frutal",
  notes: "Pera, ambreta, iris, orris, rosa turca, vainilla y sándalo",
  desc: "Una fragancia elegante y femenina que abre con una sensación fresca y frutal. El corazón floral se une a una base cremosa de vainilla y sándalo para crear un aroma suave y sofisticado.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 37,
  image: "img/Perfume 100ml/Odyssey Mandarinsky.jpg",
  name: "Odyssey Mandarinsky",
  brand: "Armaf",
  gender: "Masculino",
  family: "Cítrico Amaderado",
  familyTag: "Cítrico",
  notes: "Mandarina, cítricos, especias, maderas, ámbar y almizcle",
  desc: "Una fragancia fresca y energética construida alrededor de los cítricos. Sus acordes especiados y amaderados aportan profundidad, convirtiéndola en una opción versátil y moderna.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 38,
  image: "img/Perfume 100ml/Odyssey Mega.jpg",
  name: "Odyssey Mega",
  brand: "Armaf",
  gender: "Masculino",
  family: "Aromático Amaderado",
  familyTag: "Aromático",
  notes: "Cítricos, notas aromáticas, especias, lavanda, maderas, ámbar y almizcle",
  desc: "Una fragancia fresca y masculina que combina cítricos con notas aromáticas y especiadas. Su base amaderada y almizclada aporta una sensación limpia, elegante y persistente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 39,
  image: "img/Perfume 100ml/Odyssey Candee.jpg",
  name: "Odyssey Candee",
  brand: "Armaf",
  gender: "Femenino",
  family: "Dulce Floral",
  familyTag: "Gourmand",
  notes: "Frutas, flores, vainilla, caramelo, almizcle y maderas",
  desc: "Una fragancia dulce y femenina con una combinación de frutas y acordes florales. La vainilla y los matices gourmand aportan una sensación cremosa, cálida y juvenil.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 40,
  image: "img/Perfume 100ml/Club de Nuit Intense.jpg",
  name: "Club de Nuit Intense",
  brand: "Armaf",
  gender: "Masculino",
  family: "Cítrico Amaderado",
  familyTag: "Amaderado",
  notes: "Limón, piña, bergamota, grosella negra, manzana, abedul, jazmín, rosa, almizcle, ámbar, vainilla y pachulí",
  desc: "Una fragancia masculina intensa que combina una salida cítrica y frutal con un corazón floral y ligeramente ahumado. Su fondo de almizcle, ámbar, vainilla y pachulí aporta profundidad y carácter.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 41,
  image: "img/Perfume 100ml/Beach Party.jpg",
  name: "Beach Party",
  brand: "Armaf",
  gender: "Unisex",
  family: "Acuático Aromático",
  familyTag: "Acuático",
  notes: "Cítricos, frutas tropicales, notas acuáticas, flores blancas, maderas y almizcle",
  desc: "Una fragancia fresca y tropical inspirada en una sensación de verano. Sus acordes acuáticos y frutales se mezclan con flores y maderas para crear un aroma ligero, alegre y versátil.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 42,
  image: "img/Perfume 100ml/Yum Yum.jpg",
  name: "Yum Yum",
  brand: "Armaf",
  gender: "Femenino",
  family: "Floral Frutal",
  familyTag: "Frutal",
  notes: "Frutas rojas, cítricos, flores, vainilla, almizcle y maderas",
  desc: "Una fragancia femenina y dulce con una apertura frutal y luminosa. El corazón floral y el fondo de vainilla y almizcle crean un aroma suave, coqueto y agradable.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 43,
  image: "img/Perfume 100ml/Island Bliss.jpg",
  name: "Island Bliss",
  brand: "Armaf",
  gender: "Femenino",
  family: "Frutal Floral",
  familyTag: "Frutal",
  notes: "Frutas tropicales, cítricos, flores blancas, coco, almizcle y maderas",
  desc: "Una fragancia tropical y luminosa que combina frutas jugosas con acordes florales y cremosos. Su carácter fresco transmite una sensación relajada y veraniega.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 44,
  image: "img/Perfume 100ml/Club de Nuit Oud.jpg",
  name: "Club de Nuit Oud",
  brand: "Armaf",
  gender: "Unisex",
  family: "Oriental Amaderado",
  familyTag: "Oriental",
  notes: "Frutas, especias, oud, cuero, pachulí, ámbar, vainilla y almizcle",
  desc: "Una fragancia intensa y sofisticada donde el oud se combina con especias y acordes oscuros. El fondo de ámbar, vainilla y almizcle aporta calidez y una presencia profunda.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 45,
  image: "img/Perfume 100ml/His Majesty The Oud.jpg",
  name: "His Majesty The Oud",
  brand: "Atkinsons",
  gender: "Unisex",
  family: "Amaderado Oriental",
  familyTag: "Amaderado",
  notes: "Oud, azafrán, incienso, cuero, ámbar, madera de agar y especias",
  desc: "Una fragancia lujosa y profunda centrada en el carácter oscuro y sofisticado del oud. Las especias, el incienso y el cuero aportan una sensación intensa, mientras el ámbar suaviza el conjunto.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 46,
  image: "img/Perfume 100ml/Bharara King Parfum.jpg",
  name: "King Parfum",
  brand: "Bharara",
  gender: "Masculino",
  family: "Frutal Amaderado",
  familyTag: "Frutal",
  notes: "Piña, bergamota, naranja, manzana, frutos rojos, vainilla, ámbar y almizcle",
  desc: "Una fragancia masculina potente y llamativa que combina frutas jugosas con cítricos y un fondo dulce. La vainilla, el ámbar y el almizcle aportan una sensación cálida y envolvente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 47,
  image: "img/Perfume 100ml/Bharara Viking Cairo.jpg",
  name: "Viking Cairo",
  brand: "Bharara",
  gender: "Masculino",
  family: "Amaderado Especiado",
  familyTag: "Amaderado",
  notes: "Cítricos, especias, frutas, maderas, ámbar y almizcle",
  desc: "Una fragancia masculina de carácter moderno que combina frescura cítrica con especias y acordes amaderados. El fondo cálido aporta profundidad y una presencia elegante.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 48,
  image: "img/Perfume 100ml/Oriental Elixir.jpg",
  name: "Oriental Elixir",
  brand: "Blackoud",
  gender: "Unisex",
  family: "Oriental Amaderado",
  familyTag: "Oriental",
  notes: "Especias, oud, ámbar, vainilla, maderas y almizcle",
  desc: "Una composición intensa y oriental donde las especias y las maderas oscuras se combinan con oud y ámbar. La vainilla aporta un toque cálido y envolvente al fondo.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 49,
  image: "img/Perfume 100ml/Oriental Rose.jpg",
  name: "Oriental Rose",
  brand: "Blackoud",
  gender: "Unisex",
  family: "Floral Oriental",
  familyTag: "Floral",
  notes: "Rosa, especias, oud, ámbar, vainilla y almizcle",
  desc: "Una fragancia elegante que combina la intensidad de la rosa con acordes orientales profundos. El oud, el ámbar y la vainilla crean un fondo cálido, sensual y sofisticado.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 50,
  image: "img/Perfume 100ml/By Drew.jpg",
  name: "By Drew",
  brand: "Blackoud",
  gender: "Unisex",
  family: "Amaderado Oriental",
  familyTag: "Amaderado",
  notes: "Especias, maderas, oud, ámbar y almizcle",
  desc: "Una fragancia profunda y elegante con un marcado carácter amaderado. Sus acordes orientales aportan intensidad mientras el almizcle y el ámbar suavizan el fondo.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 51,
  image: "img/Perfume 100ml/Okinawa.jpg",
  name: "Okinawa",
  brand: "Blackoud",
  gender: "Unisex",
  family: "Acuático Aromático",
  familyTag: "Acuático",
  notes: "Cítricos, notas acuáticas, frutas, flores, maderas y almizcle",
  desc: "Una fragancia fresca y limpia que combina acordes acuáticos con frutas y cítricos. Su fondo amaderado y almizclado aporta una sensación equilibrada y versátil.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 52,
  image: "img/Perfume 100ml/Chance EDP.jpg",
  name: "Chance EDP",
  brand: "Chanel",
  gender: "Femenino",
  family: "Floral Chipre",
  familyTag: "Floral",
  notes: "Pimienta rosa, jazmín, iris, pachulí, vainilla, almizcle y ámbar",
  desc: "Una fragancia elegante y femenina con una salida ligeramente especiada y un corazón floral refinado. El pachulí, la vainilla y el almizcle crean un fondo sofisticado y envolvente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 53,
  image: "img/Perfume 100ml/Creed Viking.jpg",
  name: "Viking",
  brand: "Creed",
  gender: "Masculino",
  family: "Aromático Amaderado",
  familyTag: "Aromático",
  notes: "Pimienta rosa, bergamota, limón, absenta, menta, lavanda, rosa, sándalo, vetiver, pachulí y cedro",
  desc: "Una fragancia masculina fresca y sofisticada que combina cítricos, menta y especias con un corazón aromático. El fondo de vetiver, sándalo, cedro y pachulí aporta carácter y elegancia.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 54,
  image: "img/Perfume 100ml/Deep Smoke.jpg",
  name: "Deep Smoke",
  brand: "Devier",
  gender: "Unisex",
  family: "Amaderado Ahumado",
  familyTag: "Amaderado",
  notes: "Maderas ahumadas, especias, incienso, ámbar y almizcle",
  desc: "Una fragancia oscura y elegante con un marcado carácter ahumado. Las maderas y especias crean profundidad mientras el ámbar y el almizcle aportan calidez.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 55,
  image: "img/Perfume 100ml/Hong Kong.jpg",
  name: "Hong Kong",
  brand: "Elivi",
  gender: "Unisex",
  family: "Oriental Floral",
  familyTag: "Oriental",
  notes: "Flores, frutas, especias, vainilla, ámbar y almizcle",
  desc: "Una composición sofisticada que combina acordes florales y frutales con un fondo cálido y dulce. El ámbar y el almizcle aportan profundidad y una sensación envolvente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 56,
  image: "img/Perfume 100ml/Inebriante EDP.jpg",
  name: "Inebriante EDP",
  brand: "Hinode",
  gender: "Unisex",
  family: "Floral Oriental",
  familyTag: "Floral",
  notes: "Frutas, flores, especias, vainilla, ámbar y almizcle",
  desc: "Una fragancia intensa y envolvente que combina matices florales con acordes dulces y cálidos. Su fondo de ámbar y almizcle le aporta profundidad y elegancia.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 57,
  image: "img/Perfume 100ml/Arte.jpg",
  name: "Arte",
  brand: "Ilmin",
  gender: "Unisex",
  family: "Amaderado Oriental",
  familyTag: "Amaderado",
  notes: "Especias, flores, maderas, ámbar y almizcle",
  desc: "Una fragancia refinada que combina notas especiadas y florales con una base amaderada. El ámbar y el almizcle aportan calidez y profundidad a la composición.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 58,
  image: "img/Perfume 100ml/Ego.jpg",
  name: "Ego",
  brand: "Ilmin",
  gender: "Unisex",
  family: "Amaderado Especiado",
  familyTag: "Amaderado",
  notes: "Especias, cítricos, maderas, ámbar y almizcle",
  desc: "Una composición elegante y segura que combina frescura cítrica con especias y maderas. Su fondo cálido aporta carácter y presencia sin perder sofisticación.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 59,
  image: "img/Perfume 100ml/Monastery III.jpg",
  name: "Monastery III",
  brand: "Ilmin",
  gender: "Unisex",
  family: "Amaderado Aromático",
  familyTag: "Aromático",
  notes: "Incienso, especias, hierbas aromáticas, maderas, ámbar y almizcle",
  desc: "Una fragancia profunda y contemplativa donde los acordes aromáticos y el incienso se mezclan con maderas cálidas. Su carácter es elegante, sobrio y envolvente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 60,
  image: "img/Perfume 100ml/Vita.jpg",
  name: "Vita",
  brand: "Ilmin",
  gender: "Unisex",
  family: "Floral Amaderado",
  familyTag: "Floral",
  notes: "Cítricos, flores, frutas, maderas, ámbar y almizcle",
  desc: "Una fragancia luminosa y equilibrada que combina frescura frutal con acordes florales y amaderados. El fondo aporta una sensación cálida y sofisticada.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 61,
  image: "img/Perfume 100ml/Bordeaux.jpg",
  name: "Bordeaux",
  brand: "Ilmin",
  gender: "Unisex",
  family: "Amaderado Oriental",
  familyTag: "Oriental",
  notes: "Frutas oscuras, especias, maderas, ámbar y almizcle",
  desc: "Una fragancia intensa y sofisticada con una combinación de frutas profundas y especias. Las maderas y el ámbar crean un fondo cálido y elegante.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 62,
  image: "img/Perfume 100ml/Femme.jpg",
  name: "Femme",
  brand: "Ilmin",
  gender: "Femenino",
  family: "Floral Frutal",
  familyTag: "Floral",
  notes: "Frutas, flores blancas, rosa, vainilla, almizcle y ámbar",
  desc: "Una fragancia femenina y delicada que combina frutas y flores con una base cálida. La vainilla y el almizcle aportan suavidad y una sensación envolvente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 63,
  image: "img/Perfume 100ml/Piete.jpg",
  name: "Piete",
  brand: "Ilmin",
  gender: "Unisex",
  family: "Amaderado Oriental",
  familyTag: "Amaderado",
  notes: "Especias, incienso, maderas, ámbar, vainilla y almizcle",
  desc: "Una composición cálida y profunda que mezcla especias e incienso con acordes amaderados. La vainilla y el ámbar aportan un acabado suave y envolvente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 64,
  image: "img/Perfume 100ml/Sexuel.jpg",
  name: "Sexuel",
  brand: "Ilmin",
  gender: "Unisex",
  family: "Oriental Amaderado",
  familyTag: "Oriental",
  notes: "Especias, flores, maderas, ámbar, vainilla y almizcle",
  desc: "Una fragancia intensa y seductora que combina acordes especiados con flores y maderas. Su fondo cálido y dulce aporta profundidad y una presencia marcada.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 65,
  image: "img/Perfume 100ml/Roso.jpg",
  name: "Roso",
  brand: "Ilmin",
  gender: "Unisex",
  family: "Floral Amaderado",
  familyTag: "Floral",
  notes: "Rosa, flores, especias, maderas, ámbar y almizcle",
  desc: "Una fragancia elegante centrada en acordes florales y especialmente rosados. Las especias y maderas aportan profundidad mientras el ámbar y el almizcle suavizan el fondo.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 66,
  image: "img/Perfume 100ml/Oud for Greatness.jpg",
  name: "Oud for Greatness",
  brand: "Initio",
  gender: "Unisex",
  family: "Amaderado Oriental",
  familyTag: "Oriental",
  notes: "Azafrán, nuez moscada, lavanda, oud, pachulí y almizcle",
  desc: "Una fragancia intensa y lujosa donde el oud domina una composición especiada y aromática. El azafrán y la nuez moscada aportan carácter mientras el pachulí y el almizcle profundizan el fondo.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 67,
  image: "img/Perfume 100ml/Game of Spades Rouge.jpg",
  name: "Game of Spades Rouge",
  brand: "Jo Milano",
  gender: "Unisex",
  family: "Amaderado Ámbar",
  familyTag: "Ámbar",
  notes: "Azafrán, jazmín, ámbar gris, ámbar y cedro",
  desc: "Una fragancia sofisticada y llamativa que combina azafrán y flores con un fondo ambarado y amaderado. Su perfil resulta elegante, cálido y moderno.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 68,
  image: "img/Perfume 100ml/Vanilla Vibes.jpg",
  name: "Vanilla Vibes",
  brand: "Juliette Has a Gun",
  gender: "Unisex",
  family: "Acuático Vainilla",
  familyTag: "Vainilla",
  notes: "Sal marina, vainilla, orquídea, sándalo, haba tonka y almizcle",
  desc: "Una interpretación diferente de la vainilla que combina su dulzura con una sensación salada y acuática. El sándalo y el almizcle aportan una base cremosa y elegante.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 69,
  image: "img/Perfume 100ml/Pear Inc.jpg",
  name: "Pear Inc",
  brand: "Juliette Has a Gun",
  gender: "Unisex",
  family: "Frutal Almizclado",
  familyTag: "Frutal",
  notes: "Pera, ambroxan y almizcle",
  desc: "Una fragancia minimalista y limpia centrada en la frescura jugosa de la pera. El almizcle y el ambroxan crean un fondo suave, moderno y agradable sobre la piel.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 70,
  image: "img/Perfume 100ml/Lust for Sun.jpg",
  name: "Lust for Sun",
  brand: "Juliette Has a Gun",
  gender: "Femenino",
  family: "Floral Solar",
  familyTag: "Floral",
  notes: "Ylang-ylang, flor de tiaré, gardenia, coco, vainilla, almizcle y ámbar",
  desc: "Una fragancia luminosa y tropical con un marcado carácter solar. Las flores blancas y el coco se mezclan con vainilla y almizcle para crear un aroma cálido, cremoso y sensual.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 71,
  image: "img/Perfume 100ml/Not a Perfume.jpg",
  name: "Not a Perfume",
  brand: "Juliette Has a Gun",
  gender: "Unisex",
  family: "Almizclado Ambarado",
  familyTag: "Almizclado",
  notes: "Cetalox",
  desc: "Una fragancia minimalista construida alrededor de un solo acorde principal. Su perfil limpio, almizclado y ligeramente ambarado resulta moderno, discreto y muy versátil.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 72,
  image: "img/Perfume 100ml/Yasmina.jpg",
  name: "Yasmina",
  brand: "Kajal",
  gender: "Femenino",
  family: "Floral Frutal",
  familyTag: "Floral",
  notes: "Frutas, cítricos, rosa, jazmín, vainilla, almizcle y maderas",
  desc: "Una fragancia elegante y femenina que combina frutas frescas con un corazón floral refinado. Su fondo cálido y almizclado aporta suavidad y profundidad.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 73,
  image: "img/Perfume 100ml/Musky Signature.jpg",
  name: "Musky Signature",
  brand: "Korbaj",
  gender: "Unisex",
  family: "Almizclado Amaderado",
  familyTag: "Almizclado",
  notes: "Almizcle, flores, maderas, ámbar y vainilla",
  desc: "Una fragancia elegante y suave centrada en el almizcle. Las flores y maderas aportan estructura mientras el ámbar y la vainilla crean un fondo cálido y envolvente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 74,
  image: "img/Perfume 100ml/Toxic Desire.jpg",
  name: "Toxic Desire",
  brand: "Korbaj",
  gender: "Unisex",
  family: "Oriental Gourmand",
  familyTag: "Oriental",
  notes: "Frutas, flores, especias, vainilla, ámbar y almizcle",
  desc: "Una composición intensa y seductora que combina dulzura frutal con acordes florales y especiados. Su fondo cálido aporta una sensación profunda y envolvente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 75,
  image: "img/Perfume 100ml/Khamrah.jpg",
  name: "Khamrah",
  brand: "Lattafa",
  gender: "Unisex",
  family: "Oriental Gourmand",
  familyTag: "Gourmand",
  notes: "Canela, nuez moscada, bergamota, dátiles, praliné, tuberosa, mahleb, vainilla, haba tonka, ámbar y mirra",
  desc: "Una fragancia cálida y dulce con una marcada personalidad gourmand. Las especias y los dátiles crean una apertura intensa mientras el praliné, la vainilla y el haba tonka aportan un fondo cremoso y adictivo.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 76,
  image: "img/Perfume 100ml/Khamrah Qahwa.jpg",
  name: "Khamrah Qahwa",
  brand: "Lattafa",
  gender: "Unisex",
  family: "Oriental Gourmand",
  familyTag: "Gourmand",
  notes: "Canela, cardamomo, jengibre, café, praliné, frutas confitadas, vainilla, haba tonka y almizcle",
  desc: "Una interpretación más tostada y especiada de la familia Khamrah. El café se mezcla con especias, praliné y vainilla para crear un aroma cálido, dulce, intenso y envolvente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 77,
  image: "img/Perfume 100ml/Khamrah Waha.jpg",
  name: "Khamrah Waha",
  brand: "Lattafa",
  gender: "Unisex",
  family: "Oriental Gourmand",
  familyTag: "Gourmand",
  notes: "Frutas, especias, vainilla, ámbar, caramelo y almizcle",
  desc: "Una fragancia cálida y dulce con un perfil gourmand y especiado. Las frutas aportan luminosidad mientras la vainilla, el caramelo y el ámbar crean un fondo cremoso y envolvente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 78,
  image: "img/Perfume 100ml/Mayar.jpg",
  name: "Mayar",
  brand: "Lattafa",
  gender: "Femenino",
  family: "Frutal Floral",
  familyTag: "Frutal",
  notes: "Lichi, frambuesa, hojas de violeta, jazmín, rosa blanca, peonía, vainilla y almizcle",
  desc: "Una fragancia femenina, fresca y dulce que combina frutas jugosas con flores delicadas. La vainilla y el almizcle aportan suavidad y un acabado limpio y envolvente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 79,
  image: "img/Perfume 100ml/Oud for Glory.jpg",
  name: "Oud for Glory",
  brand: "Lattafa",
  gender: "Unisex",
  family: "Amaderado Oriental",
  familyTag: "Oriental",
  notes: "Azafrán, nuez moscada, lavanda, oud, pachulí y almizcle",
  desc: "Una fragancia intensa y elegante dominada por el oud y las especias. El azafrán y la nuez moscada aportan carácter mientras el pachulí y el almizcle crean un fondo profundo y sofisticado.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 80,
  image: "img/Perfume 100ml/Asad.jpg",
  name: "Asad",
  brand: "Lattafa",
  gender: "Masculino",
  family: "Oriental Especiado",
  familyTag: "Especiado",
  notes: "Pimienta negra, tabaco, piña, café, pachulí, iris, vainilla, ámbar, maderas secas y benjuí",
  desc: "Una fragancia masculina intensa y especiada con un carácter cálido y oscuro. El tabaco y el café se combinan con vainilla, ámbar y maderas para crear un aroma potente y envolvente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 81,
  image: "img/Perfume 100ml/Amethyst.jpg",
  name: "Amethyst",
  brand: "Lattafa",
  gender: "Unisex",
  family: "Floral Oriental",
  familyTag: "Floral",
  notes: "Pimienta rosa, bergamota, rosa, jazmín, ámbar, oud y vainilla",
  desc: "Una fragancia floral y oriental que combina una rosa intensa con especias y acordes de oud. La vainilla y el ámbar aportan calidez y suavidad al fondo.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 82,
  image: "img/Perfume 100ml/Sublime.jpg",
  name: "Sublime",
  brand: "Lattafa",
  gender: "Femenino",
  family: "Frutal Floral",
  familyTag: "Frutal",
  notes: "Frutas tropicales, manzana, ciruela, flores, vainilla y almizcle",
  desc: "Una fragancia femenina y alegre que combina frutas jugosas con acordes florales. Su fondo dulce y almizclado aporta suavidad y una sensación juvenil.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 83,
  image: "img/Perfume 100ml/Ejaazi.jpg",
  name: "Ejaazi",
  brand: "Lattafa",
  gender: "Masculino",
  family: "Aromático Amaderado",
  familyTag: "Aromático",
  notes: "Cítricos, frutas, especias, notas aromáticas, maderas, ámbar y almizcle",
  desc: "Una fragancia masculina fresca y versátil que combina cítricos y frutas con especias y notas aromáticas. El fondo amaderado aporta elegancia y profundidad.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 84,
  image: "img/Perfume 100ml/Fakhar Blanca.jpg",
  name: "Fakhar Blanca",
  brand: "Lattafa",
  gender: "Masculino",
  family: "Aromático Amaderado",
  familyTag: "Aromático",
  notes: "Manzana, jengibre, lavanda, bergamota, salvia, bayas de enebro, geranio, haba tonka, cedro y ámbar",
  desc: "Una fragancia masculina fresca y elegante que combina manzana y cítricos con un corazón aromático. Su base de cedro, haba tonka y ámbar aporta profundidad y sofisticación.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 85,
  image: "img/Perfume 100ml/Fakhar Dorada.jpg",
  name: "Fakhar Dorada",
  brand: "Lattafa",
  gender: "Femenino",
  family: "Floral Frutal",
  familyTag: "Floral",
  notes: "Frutas, cítricos, flores blancas, jazmín, tuberosa, vainilla y almizcle",
  desc: "Una fragancia femenina luminosa que combina frutas frescas con un corazón de flores blancas. La vainilla y el almizcle crean un fondo dulce, suave y elegante.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 86,
  image: "img/Perfume 100ml/Lail Maleki.jpg",
  name: "Lail Maleki",
  brand: "Lattafa",
  gender: "Unisex",
  family: "Oriental Amaderado",
  familyTag: "Oriental",
  notes: "Frutas, canela, caramelo, miel, vainilla, oud, ámbar, almizcle y maderas",
  desc: "Una fragancia oriental intensa y dulce que combina frutas y especias con acordes gourmand. El oud, el ámbar y el almizcle crean un fondo profundo, cálido y envolvente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 87,
  image: "img/Perfume 100ml/Riders.jpg",
  name: "Riders",
  brand: "Lattafa",
  gender: "Masculino",
  family: "Amaderado Aromático",
  familyTag: "Amaderado",
  notes: "Cítricos, especias, notas aromáticas, maderas, ámbar y almizcle",
  desc: "Una fragancia masculina fresca y dinámica con un perfil aromático y amaderado. Las especias aportan carácter mientras el fondo cálido le da profundidad.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 88,
  image: "img/Perfume 100ml/Maahir.jpg",
  name: "Maahir",
  brand: "Lattafa",
  gender: "Unisex",
  family: "Oriental Amaderado",
  familyTag: "Oriental",
  notes: "Bayas rojas, melocotón, naranja sanguina, heliotropo, jazmín, peonía, vainilla, sándalo y oud",
  desc: "Una fragancia compleja y envolvente que combina frutas dulces con flores delicadas. Su base de vainilla, sándalo y oud aporta profundidad y un carácter oriental sofisticado.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 89,
  image: "img/Perfume 100ml/Noble Blush.jpg",
  name: "Noble Blush",
  brand: "Lattafa",
  gender: "Femenino",
  family: "Floral Gourmand",
  familyTag: "Gourmand",
  notes: "Pistacho, almendra, kumquat, peonía, jazmín, vainilla, cacao, sándalo y almizcle",
  desc: "Una fragancia femenina, cremosa y dulce que combina frutos secos con flores delicadas. La vainilla, el cacao, el sándalo y el almizcle crean un fondo cálido y gourmand.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 90,
  image: "img/Perfume 100ml/Sing.jpg",
  name: "Sing",
  brand: "Lattafa",
  gender: "Unisex",
  family: "Floral Frutal",
  familyTag: "Frutal",
  notes: "Frutas, cítricos, flores, vainilla y almizcle",
  desc: "Una fragancia fresca y dulce que combina frutas y flores con una base suave de vainilla y almizcle. Su perfil resulta fácil de llevar y agradable.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 91,
  image: "img/Perfume 100ml/Al Noble Safeer.jpg",
  name: "Al Noble Safeer",
  brand: "Lattafa",
  gender: "Unisex",
  family: "Amaderado Especiado",
  familyTag: "Amaderado",
  notes: "Piña, manzana, pimienta rosa, canela, cedro, vainilla, ámbar y almizcle",
  desc: "Una fragancia moderna que combina frutas jugosas con especias cálidas. Su fondo de cedro, vainilla, ámbar y almizcle aporta profundidad y un carácter elegante.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 92,
  image: "img/Perfume 100ml/Opulent Musk.jpg",
  name: "Opulent Musk",
  brand: "Lattafa",
  gender: "Unisex",
  family: "Almizclado Floral",
  familyTag: "Almizclado",
  notes: "Almizcle blanco, flores blancas, azafrán, cítricos y maderas",
  desc: "Una fragancia limpia y elegante dominada por el almizcle blanco. Los acordes florales y ligeramente especiados aportan personalidad mientras las maderas equilibran el fondo.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 93,
  image: "img/Perfume 100ml/Ana Abiyedh Rouge.jpg",
  name: "Ana Abiyedh Rouge",
  brand: "Lattafa",
  gender: "Unisex",
  family: "Amaderado Ámbar",
  familyTag: "Ámbar",
  notes: "Pera, kumquat, almizcle, ámbar, ambroxan, azafrán, musgo de roble y maderas",
  desc: "Una fragancia moderna y llamativa que combina frutas frescas con un corazón ambarado. El ambroxan, el almizcle y las maderas crean un fondo cálido, limpio y sofisticado.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 94,
  image: "img/Perfume 100ml/Rave Now Man.jpg",
  name: "Rave Now Man",
  brand: "Lattafa",
  gender: "Masculino",
  family: "Frutal Amaderado",
  familyTag: "Frutal",
  notes: "Piña, limón, manzana, grosella negra, jazmín, cedro, musgo de roble, almizcle y vainilla",
  desc: "Una fragancia masculina fresca y frutal con una apertura jugosa de piña y cítricos. El fondo amaderado y almizclado aporta profundidad y un acabado moderno.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 95,
  image: "img/Perfume 100ml/Bayaan.jpg",
  name: "Bayaan",
  brand: "Lattafa",
  gender: "Femenino",
  family: "Floral Frutal",
  familyTag: "Frutal",
  notes: "Lichi, pera, grosella negra, mandarina, jazmín, azahar, vainilla, praliné y almizcle",
  desc: "Una fragancia femenina dulce y luminosa que combina frutas jugosas con flores blancas. La vainilla y el praliné aportan un fondo cremoso y gourmand acompañado de almizcle.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 96,
  image: "img/Perfume 100ml/Eclaire.jpg",
  name: "Eclaire",
  brand: "Lattafa",
  gender: "Femenino",
  family: "Gourmand Dulce",
  familyTag: "Gourmand",
  notes: "Caramelo, leche, azúcar, miel, vainilla, praliné y almizcle",
  desc: "Una fragancia intensamente dulce y cremosa inspirada en un postre. El caramelo, la leche y la vainilla crean un perfil gourmand muy envolvente, mientras el almizcle aporta suavidad al fondo.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 97,
  image: "img/Perfume 100ml/Pax.jpg",
  name: "Pax",
  brand: "Lorenzo Pazzaglia",
  gender: "Unisex",
  family: "Amaderado Aromático",
  familyTag: "Amaderado",
  notes: "Cítricos, especias, hierbas aromáticas, maderas, ámbar y almizcle",
  desc: "Una composición sofisticada y compleja que mezcla frescura, especias y acordes aromáticos. Su base amaderada aporta estructura y profundidad, creando una fragancia elegante y con personalidad.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 98,
  image: "img/Perfume 100ml/Philos Opus Noir.jpg",
  name: "Philos Opus Noir",
  brand: "Maison Alhambra",
  gender: "Unisex",
  family: "Amaderado Ámbar",
  familyTag: "Amaderado",
  notes: "Cítricos, especias, flores, maderas, ámbar y almizcle",
  desc: "Una fragancia elegante y moderna que combina frescura cítrica con acordes florales y especiados. El fondo amaderado y ambarado aporta profundidad y sofisticación.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 99,
  image: "img/Perfume 100ml/Jean Lowe Maitre.jpg",
  name: "Jean Lowe Maitre",
  brand: "Maison Alhambra",
  gender: "Unisex",
  family: "Amaderado Floral",
  familyTag: "Amaderado",
  notes: "Frutas, flores, incienso, maderas, oud, ámbar y almizcle",
  desc: "Una fragancia refinada que combina acordes frutales y florales con un fondo amaderado y oriental. El incienso y el oud aportan profundidad y una sensación lujosa.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 100,
  image: "img/Perfume 100ml/Aoud Lemon Mint.jpg",
  name: "Aoud Lemon Mint",
  brand: "Mancera",
  gender: "Unisex",
  family: "Cítrico Amaderado",
  familyTag: "Cítrico",
  notes: "Limón, almendra, pimienta, menta, pachulí, jazmín, café, cuero, oud, vainilla, ámbar y almizcle",
  desc: "Una fragancia fresca y compleja que combina limón y menta con un fondo intenso de oud y cuero. Los acordes de almendra, café y vainilla aportan un contraste cálido y cremoso.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 101,
  image: "img/Perfume 100ml/Gold Intensive Aoud.jpg",
  name: "Gold Intensive Aoud",
  brand: "Mancera",
  gender: "Unisex",
  family: "Amaderado Oriental",
  familyTag: "Oriental",
  notes: "Oud, rosa, azafrán, bergamota, geranio, vainilla, ámbar y almizcle blanco",
  desc: "Una fragancia lujosa donde el oud y la rosa forman el centro de la composición. El azafrán y la bergamota aportan contraste mientras la vainilla, el ámbar y el almizcle suavizan el fondo.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 102,
  image: "img/Perfume 100ml/Sicily.jpg",
  name: "Sicily",
  brand: "Mancera",
  gender: "Unisex",
  family: "Cítrico Frutal",
  familyTag: "Cítrico",
  notes: "Mandarina, naranja, bergamota, melocotón, manzana, rosa, jazmín, almizcle blanco y vainilla",
  desc: "Una fragancia luminosa y mediterránea que combina cítricos y frutas jugosas con flores delicadas. El almizcle y la vainilla aportan suavidad y un acabado elegante.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 103,
  image: "img/Perfume 100ml/Tonka Cola.jpg",
  name: "Tonka Cola",
  brand: "Mancera",
  gender: "Unisex",
  family: "Gourmand Especiado",
  familyTag: "Gourmand",
  notes: "Canela, cereza, nuez moscada, cola, limón, ámbar, vainilla, tonka y benjuí",
  desc: "Una fragancia original y gourmand que recrea una combinación dulce, especiada y chispeante. La canela, la cereza y la cola se mezclan con vainilla y haba tonka para crear un fondo cálido.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 104,
  image: "img/Perfume 100ml/Jasmin Exclusif.jpg",
  name: "Jasmin Exclusif",
  brand: "Mancera",
  gender: "Unisex",
  family: "Floral Oriental",
  familyTag: "Floral",
  notes: "Jazmín, bergamota, almendra, canela, vainilla, haba tonka, sándalo y almizcle",
  desc: "Una fragancia floral y cremosa donde el jazmín se combina con almendra y especias. La vainilla, el haba tonka y el sándalo aportan un fondo cálido y envolvente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 105,
  image: "img/Perfume 100ml/Crazy for Oud.jpg",
  name: "Crazy for Oud",
  brand: "Mancera",
  gender: "Unisex",
  family: "Amaderado Oriental",
  familyTag: "Oriental",
  notes: "Oud, azafrán, rosa, pachulí, ámbar, vainilla y almizcle",
  desc: "Una fragancia intensa y sofisticada dominada por el oud. Las especias y la rosa aportan contraste mientras el ámbar, la vainilla y el almizcle crean un fondo cálido.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 106,
  image: "img/Perfume 100ml/Fig Extasy.jpg",
  name: "Fig Extasy",
  brand: "Mancera",
  gender: "Unisex",
  family: "Frutal Amaderado",
  familyTag: "Frutal",
  notes: "Higo, coco, bergamota, pimienta rosa, jazmín, sándalo, cedro, vainilla y almizcle",
  desc: "Una fragancia cremosa y sofisticada donde el higo y el coco aportan un carácter frutal y tropical. Las maderas, la vainilla y el almizcle crean un fondo suave y elegante.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 107,
  image: "img/Perfume 100ml/Hindu Kush.jpg",
  name: "Hindu Kush",
  brand: "Mancera",
  gender: "Unisex",
  family: "Amaderado Oriental",
  familyTag: "Oriental",
  notes: "Especias, incienso, cannabis, ámbar, vainilla, maderas y almizcle",
  desc: "Una fragancia oscura y misteriosa con una combinación de especias, incienso y acordes resinosos. La vainilla y el ámbar suavizan la composición mientras las maderas aportan profundidad.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 108,
  image: "img/Perfume 100ml/Roses Greedy.jpg",
  name: "Roses Greedy",
  brand: "Mancera",
  gender: "Unisex",
  family: "Floral Gourmand",
  familyTag: "Floral",
  notes: "Rosa, mandarina, melocotón, coco, azúcar, vainilla, ámbar y almizcle",
  desc: "Una fragancia dulce y floral donde la rosa se combina con frutas y coco. El azúcar, la vainilla y el almizcle crean un fondo cremoso, cálido y envolvente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 109,
  image: "img/Perfume 100ml/Velvet Vanilla.jpg",
  name: "Velvet Vanilla",
  brand: "Mancera",
  gender: "Unisex",
  family: "Floral Vainilla",
  familyTag: "Vainilla",
  notes: "Mandarina, angélica, rosa, jazmín, vainilla, vainillina, clavo, almizcle y cedro",
  desc: "Una fragancia floral y dulce con una marcada presencia de vainilla. Las flores y las especias aportan personalidad mientras el almizcle y el cedro equilibran el fondo.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 110,
  image: "img/Perfume 100ml/Aoud Vanille.jpg",
  name: "Aoud Vanille",
  brand: "Mancera",
  gender: "Unisex",
  family: "Amaderado Vainilla",
  familyTag: "Vainilla",
  notes: "Oud, especias, azafrán, vainilla, sándalo, ámbar y almizcle",
  desc: "Una combinación intensa y cálida de oud y vainilla. Las especias y el azafrán aportan carácter mientras el sándalo, el ámbar y el almizcle crean un fondo cremoso.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 111,
  image: "img/Perfume 100ml/Royal Vanilla.jpg",
  name: "Royal Vanilla",
  brand: "Mancera",
  gender: "Unisex",
  family: "Vainilla Amaderada",
  familyTag: "Vainilla",
  notes: "Vainilla, caramelo, especias, maderas, ámbar y almizcle",
  desc: "Una fragancia cálida y dulce donde la vainilla ocupa el protagonismo. Los acordes amaderados y ambarados aportan profundidad y elegancia a su perfil gourmand.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 112,
  image: "img/Perfume 100ml/Roses Vanille.jpg",
  name: "Roses Vanille",
  brand: "Mancera",
  gender: "Femenino",
  family: "Floral Gourmand",
  familyTag: "Floral",
  notes: "Limón, agua de rosa, azúcar, rosa, vainilla, cedro, almizcle blanco y azúcar moreno",
  desc: "Una fragancia dulce y romántica donde la rosa se mezcla con una intensa vainilla. Los acordes azucarados y el almizcle crean un fondo cremoso, cálido y envolvente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 113,
  image: "img/Perfume 100ml/Sahara.jpg",
  name: "Sahara",
  brand: "Matai",
  gender: "Unisex",
  family: "Oriental Amaderado",
  familyTag: "Oriental",
  notes: "Especias, frutas, maderas, ámbar, vainilla y almizcle",
  desc: "Una fragancia cálida e intensa inspirada en acordes orientales. Las especias y frutas se combinan con maderas y un fondo dulce de ámbar y vainilla.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 114,
  image: "img/Perfume 100ml/Zenith.jpg",
  name: "Zenith",
  brand: "Matai",
  gender: "Unisex",
  family: "Amaderado Aromático",
  familyTag: "Amaderado",
  notes: "Cítricos, especias, notas aromáticas, maderas y almizcle",
  desc: "Una fragancia equilibrada que combina frescura cítrica con acordes aromáticos y amaderados. Su fondo almizclado aporta suavidad y versatilidad.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 115,
  image: "img/Perfume 100ml/Nasim.jpg",
  name: "Nasim",
  brand: "Matai",
  gender: "Unisex",
  family: "Aromático Fresco",
  familyTag: "Aromático",
  notes: "Cítricos, frutas, hierbas aromáticas, flores, maderas y almizcle",
  desc: "Una fragancia fresca y ligera que combina frutas y cítricos con notas aromáticas. Las maderas y el almizcle aportan equilibrio y una sensación limpia.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 116,
  image: "img/Perfume 100ml/Falcon Leather.jpg",
  name: "Falcon Leather",
  brand: "Matiere Premiere",
  gender: "Unisex",
  family: "Cuero Amaderado",
  familyTag: "Cuero",
  notes: "Azafrán, cuero, abedul, oud, ámbar y vainilla",
  desc: "Una fragancia intensa y sofisticada centrada en un acorde de cuero elegante. El azafrán y el oud aportan profundidad mientras la vainilla y el ámbar suavizan el carácter oscuro.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 117,
  image: "img/Perfume 100ml/Arabians.jpg",
  name: "Arabians",
  brand: "Montale",
  gender: "Unisex",
  family: "Oriental Amaderado",
  familyTag: "Oriental",
  notes: "Rosa, oud, cuero, especias, pachulí, ámbar y almizcle",
  desc: "Una fragancia oriental intensa que combina rosa y oud con cuero y especias. Su fondo ambarado y almizclado aporta profundidad, calidez y un carácter lujoso.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 118,
  image: "img/Perfume 100ml/Day Dreams.jpg",
  name: "Day Dreams",
  brand: "Montale",
  gender: "Femenino",
  family: "Floral Frutal",
  familyTag: "Floral",
  notes: "Naranja, bergamota, lichi, jazmín, rosa, peonía, almizcle, sándalo y vainilla",
  desc: "Una fragancia luminosa y femenina que combina cítricos y frutas con un corazón floral. La vainilla, el sándalo y el almizcle aportan un acabado suave y elegante.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 119,
  image: "img/Perfume 100ml/Intense Black Aoud.jpg",
  name: "Intense Black Aoud",
  brand: "Montale",
  gender: "Unisex",
  family: "Amaderado Oriental",
  familyTag: "Oriental",
  notes: "Oud, rosa, pachulí, mandarina, almizcle y maderas",
  desc: "Una fragancia oscura e intensa que combina oud y rosa con pachulí. Los cítricos aportan contraste mientras el almizcle y las maderas profundizan el aroma.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 120,
  image: "img/Perfume 100ml/Amber Musk.jpg",
  name: "Amber Musk",
  brand: "Montale",
  gender: "Unisex",
  family: "Ámbar Almizclado",
  familyTag: "Ámbar",
  notes: "Ámbar, almizcle, vainilla y maderas",
  desc: "Una fragancia cálida y envolvente construida alrededor del ámbar y el almizcle. La vainilla aporta dulzura mientras las maderas aportan profundidad.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 121,
  image: "img/Perfume 100ml/Rose Elixir.jpg",
  name: "Rose Elixir",
  brand: "Montale",
  gender: "Femenino",
  family: "Floral Frutal",
  familyTag: "Floral",
  notes: "Fresa, mandarina, rosa, jazmín, azahar, vainilla, almizcle y ámbar",
  desc: "Una fragancia femenina y dulce que combina frutas rojas con una rosa intensa y flores blancas. La vainilla, el almizcle y el ámbar aportan un fondo cálido y seductor.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 122,
  image: "img/Perfume 100ml/Red Vetiver.jpg",
  name: "Red Vetiver",
  brand: "Montale",
  gender: "Masculino",
  family: "Amaderado Especiado",
  familyTag: "Amaderado",
  notes: "Naranja sanguina, bergamota, pimienta, pachulí, vetiver, cedro y maderas",
  desc: "Una fragancia masculina seca y elegante con una apertura cítrica y especiada. El vetiver, el cedro y el pachulí crean un fondo amaderado con mucho carácter.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 123,
  image: "img/Perfume 100ml/Dallachai.jpg",
  name: "Dallachai",
  brand: "Montale",
  gender: "Unisex",
  family: "Amaderado Oriental",
  familyTag: "Oriental",
  notes: "Rosa, azafrán, oud, especias, ámbar, vainilla y almizcle",
  desc: "Una composición oriental intensa que combina rosa y azafrán con oud y especias. El fondo ambarado y avainillado aporta calidez y profundidad.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 124,
  image: "img/Perfume 100ml/Vanilla Cake.jpg",
  name: "Vanilla Cake",
  brand: "Montale",
  gender: "Unisex",
  family: "Gourmand Vainilla",
  familyTag: "Gourmand",
  notes: "Vainilla, leche, caramelo, almendra y azúcar",
  desc: "Una fragancia claramente gourmand que recuerda a un postre de vainilla. Sus acordes cremosos, azucarados y caramelizados crean un aroma cálido y reconfortante.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 125,
  image: "img/Perfume 100ml/Ristretto Intense Cafe.jpg",
  name: "Ristretto Intense Café",
  brand: "Montale",
  gender: "Unisex",
  family: "Gourmand Floral",
  familyTag: "Gourmand",
  notes: "Café, rosa, vainilla, ámbar, caramelo y almizcle",
  desc: "Una fragancia intensa que combina café tostado con una rosa dulce y envolvente. La vainilla, el ámbar y el caramelo crean un fondo cálido y gourmand.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 126,
  image: "img/Perfume 100ml/Soleil de Capri.jpg",
  name: "Soleil de Capri",
  brand: "Montale",
  gender: "Unisex",
  family: "Cítrico Frutal",
  familyTag: "Cítrico",
  notes: "Naranja, mandarina, pomelo, kumquat, flores blancas y almizcle",
  desc: "Una fragancia luminosa y mediterránea con una salida cítrica y refrescante. Las flores blancas y el almizcle aportan suavidad y elegancia al fondo.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 127,
  image: "img/Perfume 100ml/Infinity.jpg",
  name: "Infinity",
  brand: "Montale",
  gender: "Unisex",
  family: "Amaderado Oriental",
  familyTag: "Oriental",
  notes: "Cítricos, especias, flores, vainilla, ámbar y maderas",
  desc: "Una composición elegante y envolvente que mezcla frescura cítrica con especias y flores. La vainilla, el ámbar y las maderas crean un fondo cálido y sofisticado.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 128,
  image: "img/Perfume 100ml/Fiore di Portofino.jpg",
  name: "Fiore di Portofino",
  brand: "Moresque",
  gender: "Unisex",
  family: "Floral Cítrico",
  familyTag: "Floral",
  notes: "Cítricos, flores blancas, jazmín, neroli, maderas y almizcle",
  desc: "Una fragancia elegante y luminosa inspirada en un jardín mediterráneo. Los cítricos y las flores blancas crean una sensación fresca mientras las maderas y el almizcle aportan profundidad.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 129,
  image: "img/Perfume 100ml/Contessa.jpg",
  name: "Contessa",
  brand: "Moresque",
  gender: "Femenino",
  family: "Floral Oriental",
  familyTag: "Floral",
  notes: "Frutas, flores blancas, rosa, vainilla, ámbar y almizcle",
  desc: "Una fragancia femenina y sofisticada que combina frutas y flores con un fondo cálido. La vainilla y el ámbar aportan una sensación lujosa y envolvente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 130,
  image: "img/Perfume 100ml/Fresh Couture.jpg",
  name: "Fresh Couture",
  brand: "Moschino",
  gender: "Femenino",
  family: "Floral Frutal",
  familyTag: "Floral",
  notes: "Mandarina, bergamota, ylang-ylang, peonía, frambuesa, osmanthus, pachulí, maderas y ambroxan",
  desc: "Una fragancia fresca y femenina que combina cítricos con frutas y flores. El pachulí, las maderas y el ambroxan aportan estructura y un acabado moderno.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 131,
  image: "img/Perfume 100ml/Torre Eiffel.jpg",
  name: "Torre Eiffel",
  brand: "Mundus",
  gender: "Unisex",
  family: "Floral Frutal",
  familyTag: "Floral",
  notes: "Frutas, cítricos, flores, vainilla y almizcle",
  desc: "Una fragancia versátil y agradable que combina frescura frutal con acordes florales. Su fondo dulce y almizclado aporta suavidad y comodidad.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 132,
  image: "img/Perfume 100ml/Legend of Nilo.jpg",
  name: "Legend of Nilo",
  brand: "Mundus",
  gender: "Unisex",
  family: "Aromático Amaderado",
  familyTag: "Aromático",
  notes: "Cítricos, hierbas aromáticas, especias, flores, maderas y almizcle",
  desc: "Una fragancia fresca y equilibrada que mezcla cítricos y acordes aromáticos con especias. Su fondo amaderado y almizclado aporta profundidad y elegancia.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 133,
  image: "img/Perfume 100ml/Moire de Kalha.jpg",
  name: "Moire de Kalha",
  brand: "Orens",
  gender: "Unisex",
  family: "Oriental Floral",
  familyTag: "Oriental",
  notes: "Rosa, flores, especias, vainilla, ámbar y almizcle",
  desc: "Una fragancia sofisticada y elegante que combina flores con acordes cálidos y especiados. La vainilla, el ámbar y el almizcle crean un fondo profundo y envolvente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 134,
  image: "img/Perfume 100ml/Silenda d'Ecume.jpg",
  name: "Silenda d'Ecume",
  brand: "Orens",
  gender: "Unisex",
  family: "Acuático Floral",
  familyTag: "Acuático",
  notes: "Notas marinas, cítricos, flores blancas, maderas y almizcle",
  desc: "Una fragancia fresca y elegante con una sensación marina y luminosa. Los cítricos y las flores aportan frescura mientras las maderas y el almizcle equilibran la composición.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 135,
  image: "img/Perfume 100ml/Fatale.jpg",
  name: "Fatale",
  brand: "Philip Plein",
  gender: "Femenino",
  family: "Floral Gourmand",
  familyTag: "Gourmand",
  notes: "Frutas rojas, flores, vainilla, caramelo, ámbar y almizcle",
  desc: "Una fragancia femenina intensa y dulce que combina frutas con acordes florales. La vainilla, el caramelo y el ámbar crean un fondo cálido y seductor.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 136,
  image: "img/Perfume 100ml/No Limits Super Fresh.jpg",
  name: "No Limits Super Fresh",
  brand: "Philip Plein",
  gender: "Masculino",
  family: "Cítrico Aromático",
  familyTag: "Cítrico",
  notes: "Cítricos, frutas, notas acuáticas, especias, maderas y almizcle",
  desc: "Una fragancia masculina fresca y energética que combina cítricos con acordes acuáticos y aromáticos. El fondo amaderado y almizclado aporta profundidad y versatilidad.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 137,
  image: "img/Perfume 100ml/Elixir Parfum Pour Femme.jpg",
  name: "Elixir Parfum Pour Femme",
  brand: "Roja",
  gender: "Femenino",
  family: "Floral Oriental",
  familyTag: "Floral",
  notes: "Cítricos, frutas, flores, rosa, jazmín, vainilla, ámbar, maderas y almizcle",
  desc: "Una composición lujosa y sofisticada que combina frescura cítrica con un corazón floral complejo. Su fondo cálido y amaderado aporta profundidad, elegancia y una sensación opulenta.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 138,
  image: "img/Perfume 100ml/Elysium Parfum Pour Homme.jpg",
  name: "Elysium Parfum Pour Homme",
  brand: "Roja",
  gender: "Masculino",
  family: "Cítrico Aromático",
  familyTag: "Cítrico",
  notes: "Limón, pomelo, bergamota, manzana, piña, enebro, pimienta rosa, vetiver, cedro, ámbar y almizcle",
  desc: "Una fragancia masculina fresca y sofisticada que combina una salida cítrica y frutal con un corazón aromático. El vetiver, el cedro, el ámbar y el almizcle aportan profundidad y elegancia.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 139,
  image: "img/Perfume 100ml/Shaghaf for Oud.jpg",
  name: "Shaghaf for Oud",
  brand: "Swiss Arabian",
  gender: "Unisex",
  family: "Oriental Gourmand",
  familyTag: "Oriental",
  notes: "Azafrán, oud, rosa, praliné, vainilla y oud camboyano",
  desc: "Una fragancia intensa y dulce donde el oud se combina con rosa y azafrán. El praliné y la vainilla aportan un carácter gourmand, cálido y envolvente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 140,
  image: "img/Perfume 100ml/Shaghaf for Men.jpg",
  name: "Shaghaf for Men",
  brand: "Swiss Arabian",
  gender: "Masculino",
  family: "Aromático Amaderado",
  familyTag: "Amaderado",
  notes: "Cítricos, especias, lavanda, maderas, ámbar y almizcle",
  desc: "Una fragancia masculina fresca y elegante que combina cítricos y especias con un corazón aromático. Las maderas y el ámbar crean un fondo cálido y sofisticado.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 141,
  image: "img/Perfume 100ml/Shaghaf for Women.jpg",
  name: "Shaghaf for Women",
  brand: "Swiss Arabian",
  gender: "Femenino",
  family: "Floral Oriental",
  familyTag: "Floral",
  notes: "Frutas, flores, rosa, vainilla, ámbar y almizcle",
  desc: "Una fragancia femenina y elegante que combina frutas y flores con un fondo cálido. La vainilla y el ámbar aportan dulzura y profundidad mientras el almizcle suaviza la composición.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 142,
  image: "img/Perfume 100ml/Vanilla 01.jpg",
  name: "Vanilla 01",
  brand: "Swiss Arabian",
  gender: "Unisex",
  family: "Vainilla Gourmand",
  familyTag: "Vainilla",
  notes: "Vainilla, caramelo, ámbar, almizcle y maderas",
  desc: "Una fragancia cálida y dulce centrada en la vainilla. Los acordes caramelizados y ambarados crean un fondo cremoso, acogedor y envolvente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 143,
  image: "img/Perfume 100ml/More More Pink.jpg",
  name: "More More Pink",
  brand: "Tous",
  gender: "Femenino",
  family: "Floral Frutal",
  familyTag: "Floral",
  notes: "Frutas rojas, cítricos, flores, rosa, vainilla y almizcle",
  desc: "Una fragancia femenina alegre y delicada que combina frutas frescas con flores suaves. Su fondo de vainilla y almizcle aporta dulzura y una sensación confortable.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 144,
  image: "img/Perfume 100ml/Eros Pour Homme.jpg",
  name: "Eros Pour Homme",
  brand: "Versace",
  gender: "Masculino",
  family: "Aromático Amaderado",
  familyTag: "Aromático",
  notes: "Menta, manzana verde, limón, haba tonka, ambroxan, geranio, vainilla, cedro, musgo de roble y vetiver",
  desc: "Una fragancia masculina fresca y potente que combina menta y cítricos con manzana verde. La vainilla y el haba tonka aportan dulzura mientras las maderas crean un fondo marcado y elegante.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 145,
  image: "img/Perfume 100ml/Spicebomb.jpg",
  name: "Spicebomb",
  brand: "Viktor & Rolf",
  gender: "Masculino",
  family: "Especiado Amaderado",
  familyTag: "Especiado",
  notes: "Pimienta rosa, bergamota, pomelo, canela, azafrán, pimentón, vetiver, tabaco y cuero",
  desc: "Una fragancia masculina intensa y especiada que combina cítricos con canela y otras especias. El tabaco, cuero y vetiver aportan un fondo cálido, oscuro y potente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 146,
  image: "img/Perfume 100ml/Spicebomb Dark Leather.jpg",
  name: "Spicebomb Dark Leather",
  brand: "Viktor & Rolf",
  gender: "Masculino",
  family: "Cuero Especiado",
  familyTag: "Cuero",
  notes: "Pimienta, especias, cuero, tabaco, vetiver, ámbar y maderas",
  desc: "Una fragancia intensa y oscura que combina especias con un marcado acorde de cuero. El tabaco, el vetiver y las maderas aportan profundidad y una personalidad fuerte.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 147,
  image: "img/Perfume 100ml/Velvet Flame.jpg",
  name: "Velvet Flame",
  brand: "Voet",
  gender: "Unisex",
  family: "Ámbar Floral",
  familyTag: "Ámbar",
  notes: "Flores, especias, ámbar, vainilla, maderas y almizcle",
  desc: "Una fragancia cálida y sofisticada que combina flores y especias con una base ambarada. La vainilla y el almizcle aportan suavidad y profundidad.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 148,
  image: "img/Perfume 100ml/Sacred Tonka.jpg",
  name: "Sacred Tonka",
  brand: "Voet",
  gender: "Unisex",
  family: "Gourmand Amaderado",
  familyTag: "Gourmand",
  notes: "Haba tonka, vainilla, especias, almendra, ámbar y maderas",
  desc: "Una fragancia cálida y cremosa centrada en el haba tonka. Las especias, la vainilla y las maderas aportan profundidad mientras el ámbar suaviza el conjunto.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 149,
  image: "img/Perfume 100ml/Amber Skin.jpg",
  name: "Amber Skin",
  brand: "Voet",
  gender: "Unisex",
  family: "Ámbar Almizclado",
  familyTag: "Ámbar",
  notes: "Ámbar, almizcle, vainilla, maderas y especias",
  desc: "Una fragancia cálida y cercana a la piel con un marcado carácter ambarado. La vainilla y el almizcle aportan suavidad mientras las maderas añaden profundidad.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 150,
  image: "img/Perfume 100ml/Erba Pura.jpg",
  name: "Erba Pura",
  brand: "Xerjoff",
  gender: "Unisex",
  family: "Frutal Almizclado",
  familyTag: "Frutal",
  notes: "Naranja, bergamota, limón, frutas mediterráneas, almizcle blanco, ámbar y vainilla",
  desc: "Una fragancia vibrante y frutal que combina cítricos con un acorde de frutas dulces. El almizcle blanco, el ámbar y la vainilla crean un fondo suave, cálido y persistente.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 151,
  image: "img/Perfume 100ml/Lira.jpg",
  name: "Lira",
  brand: "Xerjoff",
  gender: "Femenino",
  family: "Gourmand Cítrico",
  familyTag: "Gourmand",
  notes: "Naranja sanguina, bergamota, lavanda, canela, caramelo, vainilla y almizcle",
  desc: "Una fragancia elegante y gourmand que combina cítricos con canela y lavanda. El caramelo y la vainilla crean un fondo dulce, cremoso y reconfortante.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 152,
  image: "img/Perfume 100ml/Tony Iommi.jpg",
  name: "Tony Iommi",
  brand: "Xerjoff",
  gender: "Unisex",
  family: "Oriental Gourmand",
  familyTag: "Gourmand",
  notes: "Ron, canela, bergamota, pachulí, cuero, rosa, vainilla, caramelo, sándalo, ámbar y almizcle",
  desc: "Una fragancia intensa y atrevida que combina ron, especias y cuero con un corazón floral. El caramelo, la vainilla, el sándalo y el ámbar crean un fondo oscuro, dulce y sofisticado.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
},

{
  id: 153,
  image: "img/Perfume 100ml/World Cup.jpg",
  name: "World Cup",
  brand: "Zakat",
  gender: "Masculino",
  family: "Aromático Amaderado",
  familyTag: "Aromático",
  notes: "Cítricos, frutas, especias, notas aromáticas, maderas, ámbar y almizcle",
  desc: "Una fragancia masculina fresca y dinámica que combina acordes cítricos y frutales con especias y notas aromáticas. El fondo amaderado y almizclado aporta profundidad y una sensación moderna.",
  price5: 25000, price10: 45000, full100: 0,
  bestSeller: false, inStock: true
}
];

const TICKER_MESSAGES = [
  "Perfumes 100% originales", "Decants de 5 ML y 10 ML",
  "Envíos a toda Colombia", "Empaque discreto y cuidado",
  "Prueba antes de comprar el frasco completo", "Fraccionado artesanal"
];

/* ============================================================
   HELPERS
   ============================================================ */
const fmt = n => "$" + Number(n).toLocaleString("es-CO");
const byId = id => PRODUCTS.find(p => p.id === id);

function waLink(message){
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}

function svgDecant(){
  return `<svg class="ripple-svg" viewBox="0 0 120 160"><g class="bottle">
    <rect x="30" y="40" width="60" height="105" rx="5"/>
    <rect x="48" y="16" width="24" height="26" rx="2"/>
    <rect x="42" y="4" width="36" height="14" rx="3" class="bottle-cap"/>
    <line x1="38" y1="72" x2="82" y2="72" stroke-width=".6"/>
    <line x1="38" y1="92" x2="82" y2="92" stroke-width=".6"/>
    <line x1="38" y1="112" x2="82" y2="112" stroke-width=".6"/>
  </g></svg>`;
}
function svgFull(){
  return `<svg class="ripple-svg" viewBox="0 0 120 170"><g class="bottle">
    <rect x="18" y="46" width="84" height="112" rx="6"/>
    <rect x="44" y="14" width="32" height="34" rx="3"/>
    <rect x="36" y="2" width="48" height="14" rx="3" class="bottle-cap"/>
    <line x1="28" y1="82" x2="92" y2="82" stroke-width=".6"/>
    <line x1="28" y1="102" x2="92" y2="102" stroke-width=".6"/>
    <line x1="28" y1="122" x2="92" y2="122" stroke-width=".6"/>
  </g></svg>`;
}

/* ============================================================
   STATE
   ============================================================ */
let cart = []; // {id, size:'5'|'10'|'100', qty}
let selectedSize = {}; // productId -> '5' | '10'  (per card selection)
let modalProductId = null;
let modalSize = "5";

/* ============================================================
   DOM REFS
   ============================================================ */
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

const bestsellerRail = $("#bestsellerRail");
const catalogGrid    = $("#catalogGrid");

/* ============================================================
   CARD BUILDERS
   ============================================================ */
function sizeToggleHTML(p, size){
  return `
  <div class="size-toggle" data-id="${p.id}">
    <button type="button" class="size-opt ${size==='5'?'active':''}" data-size="5">5 ML</button>
    <button type="button" class="size-opt ${size==='10'?'active':''}" data-size="10">10 ML</button>
  </div>`;
}

function priceFor(p, size){
  if (size === "100") return p.full100;
  return p["price" + size];
}

// Todas las presentaciones que un perfume realmente ofrece, en el orden
// en que deben mostrarse: primero 5/10 ML (foco del negocio), luego
// 15/20 ML si existen, y al final 100 ML como alternativa secundaria.
function variantList(p){
  const list = [];
  if (p.price5)  list.push({ size: "5",   price: p.price5,  tier: "primary" });
  if (p.price10) list.push({ size: "10",  price: p.price10, tier: "primary" });
  if (p.price15) list.push({ size: "15",  price: p.price15, tier: "secondary" });
  if (p.price20) list.push({ size: "20",  price: p.price20, tier: "secondary" });
  if (p.full100) list.push({ size: "100", price: p.full100, tier: "full" });
  return list;
}

function decantCard(p, mode){
  // mode: 'full' -> add to cart + whatsapp buttons (featured / bestsellers)
  // mode: 'catalog' -> "Ver fragancia" button
  const size = selectedSize[p.id] || "5";
  const price = priceFor(p, size);
  const badge = p.bestSeller ? `<span class="card-badge">Más vendido</span>` : (!p.inStock ? `<span class="card-badge badge-outline">Agotado</span>` : "");

  const actions = mode === "full"
    ? `<div class="card-actions">
         <button type="button" class="btn btn-primary btn-sm add-cart-btn" data-id="${p.id}" ${!p.inStock?"disabled":""}>Agregar al carrito</button>
         <a class="btn btn-whatsapp btn-sm quick-wa-btn" data-id="${p.id}" target="_blank" rel="noopener">
           <img src="assets/whatsapp.svg" alt="" aria-hidden="true">
           Comprar por WhatsApp
         </a>
       </div>`
    : `<div class="card-actions">
         <button type="button" class="btn btn-outline btn-sm btn-block view-btn" data-id="${p.id}">Ver fragancia</button>
       </div>`;

  return `
  <article class="card" data-card-id="${p.id}">
    <div class="card-media">
      ${badge}
      <img src="${p.image}" alt="${p.name}">
    </div>
    <div class="card-body">
      <span class="card-brand">${p.brand}</span>
      <h3 class="card-name">${p.name}</h3>
      <span class="card-family">${p.family}</span>
      ${sizeToggleHTML(p, size)}
      <div class="card-price">${fmt(price)}<small>/ ${size} ML</small></div>
      ${actions}
    </div>
  </article>`;
}

/* ============================================================
   RENDER
   ============================================================ */
function renderBestsellers(){
  const items = PRODUCTS.filter(p => p.bestSeller);
  bestsellerRail.innerHTML = items.map(p => decantCard(p, "full")).join("");
}

function renderCatalog(list){
  catalogGrid.innerHTML = list.length
    ? list.map(p => decantCard(p, "catalog")).join("")
    : `<p class="empty-state">No encontramos fragancias con esos filtros. Intenta ajustar tu búsqueda.</p>`;
  $("#filtersCount").textContent = list.length ? `${list.length} fragancias` : "";
}

function renderTicker(){
  const seq = [...TICKER_MESSAGES, ...TICKER_MESSAGES];
  $("#tickerTrack").innerHTML = seq.map(t => `<span class="ticker-item">${t}</span>`).join("");
}

function populateFilters(){
  const brands = [...new Set(PRODUCTS.map(p => p.brand))].sort();
  const families = [...new Set(PRODUCTS.map(p => p.familyTag))].sort();
  const brandSel = $("#filterBrand");
  const familySel = $("#filterFamily");
  brands.forEach(b => brandSel.insertAdjacentHTML("beforeend", `<option value="${b}">${b}</option>`));
  families.forEach(f => familySel.insertAdjacentHTML("beforeend", `<option value="${f}">${f}</option>`));
}

/* ============================================================
   FILTERS
   ============================================================ */
let bestsellerOnly = false;
let stockOnly = false;

function applyFilters(){
  const brand = $("#filterBrand").value;
  const gender = $("#filterGender").value;
  const family = $("#filterFamily").value;
  const priceRange = $("#filterPrice").value;
  const query = $("#catalogSearch").value.trim().toLowerCase();

  let list = PRODUCTS.filter(p => {
    if (brand && p.brand !== brand) return false;
    if (gender && p.gender !== gender) return false;
    if (family && p.familyTag !== family) return false;
    if (bestsellerOnly && !p.bestSeller) return false;
    if (stockOnly && !p.inStock) return false;
    if (query && !(p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query))) return false;
    if (priceRange){
      const [min, max] = priceRange.split("-").map(Number);
      if (p.price5 < min || p.price5 > max) return false;
    }
    return true;
  });

  renderCatalog(list);
  attachCatalogCardEvents();
}

/* ============================================================
   CART LOGIC
   ============================================================ */
function addToCart(id, size, qty = 1){
  const existing = cart.find(c => c.id === id && c.size === size);
  if (existing){ existing.qty += qty; }
  else { cart.push({ id, size, qty }); }
  renderCart();
  const p = byId(id);
  showToast(`${p.name} — ${size} ML agregado al carrito`);
}

function removeFromCart(id, size){
  cart = cart.filter(c => !(c.id === id && c.size === size));
  renderCart();
}

function changeQty(id, size, delta){
  const item = cart.find(c => c.id === id && c.size === size);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0){ removeFromCart(id, size); return; }
  renderCart();
}

function cartTotal(){
  return cart.reduce((sum, c) => {
    const p = byId(c.id);
    return sum + priceFor(p, c.size) * c.qty;
  }, 0);
}

function variantLabel(size){
  return size === "100" ? "Perfume completo — 100 ML" : `Decant — ${size} ML`;
}

function renderCart(){
  const countEl = $("#cartCount");
  const totalQty = cart.reduce((s, c) => s + c.qty, 0);
  countEl.textContent = totalQty;

  const itemsEl = $("#cartItems");
  if (!cart.length){
    itemsEl.innerHTML = `<div class="cart-empty">Tu carrito está vacío.<br>Explora nuestros decants y encuentra tu próxima fragancia.</div>`;
  } else {
    itemsEl.innerHTML = cart.map(c => {
      const p = byId(c.id);
      const price = priceFor(p, c.size);
      return `
      <div class="cart-item" data-id="${c.id}" data-size="${c.size}">
        <div class="cart-item-media"><img src="${p.image}" alt="${p.name}"></div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-variant">${variantLabel(c.size)}</div>
          <div class="cart-item-row">
            <div class="qty-control">
              <button type="button" class="qty-minus">−</button>
              <span>${c.qty}</span>
              <button type="button" class="qty-plus">+</button>
            </div>
            <div class="cart-item-price">${fmt(price * c.qty)}</div>
          </div>
          <button type="button" class="cart-item-remove">Eliminar</button>
        </div>
      </div>`;
    }).join("");
  }

  $("#cartSubtotal").textContent = fmt(cartTotal());

  const waMsg = buildCartWhatsappMessage();
  $("#cartWhatsappBtn").href = waLink(waMsg);

  attachCartItemEvents();
}

function buildCartWhatsappMessage(){
  if (!cart.length){
    return "Hola, quiero conocer más sobre las fragancias de Noir.";
  }
  let msg = "Hola, quiero realizar este pedido:\n\n";
  cart.forEach(c => {
    const p = byId(c.id);
    const price = priceFor(p, c.size);
    msg += `Perfume: ${p.name}\nPresentación: ${c.size === "100" ? "100 ML (frasco completo)" : c.size + " ML (decant)"}\nCantidad: ${c.qty}\nPrecio: ${fmt(price * c.qty)}\n\n`;
  });
  msg += `Total del pedido: ${fmt(cartTotal())}`;
  return msg;
}

function attachCartItemEvents(){
  $$(".cart-item").forEach(el => {
    const id = Number(el.dataset.id);
    const size = el.dataset.size;
    el.querySelector(".qty-minus").addEventListener("click", () => changeQty(id, size, -1));
    el.querySelector(".qty-plus").addEventListener("click", () => changeQty(id, size, 1));
    el.querySelector(".cart-item-remove").addEventListener("click", () => removeFromCart(id, size));
  });
}

/* ============================================================
   CARD EVENTS (size toggle, add to cart, quick whatsapp, view)
   ============================================================ */
function attachSizeToggleEvents(scopeEl){
  scopeEl.querySelectorAll(".size-toggle").forEach(toggle => {
    const id = Number(toggle.dataset.id);
    toggle.querySelectorAll(".size-opt").forEach(btn => {
      btn.addEventListener("click", () => {
        selectedSize[id] = btn.dataset.size;
        toggle.querySelectorAll(".size-opt").forEach(b => b.classList.toggle("active", b === btn));
        const card = toggle.closest(".card");
        const p = byId(id);
        const price = priceFor(p, btn.dataset.size);
        const priceEl = card.querySelector(".card-price");
        priceEl.innerHTML = `${fmt(price)}<small>/ ${btn.dataset.size} ML</small>`;
      });
    });
  });
}

function attachAddCartEvents(scopeEl){
  scopeEl.querySelectorAll(".add-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const size = selectedSize[id] || "5";
      addToCart(id, size, 1);
      openCart();
    });
  });
  scopeEl.querySelectorAll(".quick-wa-btn").forEach(btn => {
    const id = Number(btn.dataset.id);
    const size = selectedSize[id] || "5";
    const p = byId(id);
    const price = priceFor(p, size);
    const msg = `Hola, quiero realizar este pedido:\n\nPerfume: ${p.name}\nPresentación: ${size} ML (decant)\nCantidad: 1\nPrecio: ${fmt(price)}`;
    btn.href = waLink(msg);
  });
}

function attachViewEvents(scopeEl){
  scopeEl.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", () => openModal(Number(btn.dataset.id)));
  });
  scopeEl.querySelectorAll(".card-name").forEach(el => {
    el.style.cursor = "pointer";
    el.addEventListener("click", () => {
      const card = el.closest("[data-card-id]");
      if (card) openModal(Number(card.dataset.cardId));
    });
  });
}

function attachAllCardEvents(scopeEl){
  attachSizeToggleEvents(scopeEl);
  attachAddCartEvents(scopeEl);
  attachViewEvents(scopeEl);
}

function attachCatalogCardEvents(){ attachAllCardEvents(catalogGrid); }

/* ============================================================
   MODAL
   ============================================================ */
function openModal(id){
  modalProductId = id;
  const p = byId(id);
  const variants = variantList(p);
  // arranca en la primera presentación disponible (normalmente 5 ML)
  modalSize = variants.length ? variants[0].size : "5";

  $("#modalMedia").querySelector(".modal-product-image")?.remove();
  $("#modalMedia").insertAdjacentHTML(
    "beforeend",
    `<img class="modal-product-image" src="${p.image}" alt="${p.name}">`
  );
  $("#modalBrand").textContent = p.brand;
  $("#modalName").textContent = p.name;
  $("#modalDesc").textContent = p.desc;
  $("#modalNotes").textContent = p.notes;

  renderModalVariants();

  $("#modalAddCart").onclick = () => { addToCart(p.id, modalSize, 1); };
  $("#modalAddCart").disabled = !p.inStock;

  $("#modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

// Construye el selector de presentaciones dentro de "Ver fragancia":
// 5/10 ML con protagonismo, 15/20 ML más discretos (solo si existen),
// y 100 ML como una fila separada y claramente secundaria.
function renderModalVariants(){
  const p = byId(modalProductId);
  const variants = variantList(p);
  const primary   = variants.filter(v => v.tier === "primary");
  const secondary = variants.filter(v => v.tier === "secondary");
  const full      = variants.filter(v => v.tier === "full");

  const optBtn = (v, extraClass) => `
    <button type="button" class="size-opt ${extraClass} ${modalSize === v.size ? "active" : ""}" data-size="${v.size}">${v.size} ML</button>`;

  let html = "";
  if (primary.length){
    html += `<div class="variant-group"><div class="size-toggle">${primary.map(v => optBtn(v, "size-opt-primary")).join("")}</div></div>`;
  }
  if (secondary.length){
    html += `<div class="variant-group">
      <span class="variant-group-label">Presentaciones adicionales</span>
      <div class="size-toggle">${secondary.map(v => optBtn(v, "size-opt-secondary")).join("")}</div>
    </div>`;
  }
  if (full.length){
    html += `<div class="variant-full-wrap">
      <span class="variant-group-label">Perfume completo</span>
      ${full.map(v => `
      <button type="button" class="variant-full ${modalSize === v.size ? "active" : ""}" data-size="${v.size}">
        <span class="variant-full-label">100 ML — frasco original</span>
        <span class="variant-full-price">${fmt(v.price)}</span>
      </button>`).join("")}
    </div>`;
  }

  $("#modalSizeToggle").innerHTML = html;
  $("#modalSizeToggle").querySelectorAll("[data-size]").forEach(btn => {
    btn.addEventListener("click", () => {
      modalSize = btn.dataset.size;
      renderModalVariants();
      updateModalPrice();
    });
  });
  updateModalPrice();
}

function updateModalPrice(){
  const p = byId(modalProductId);
  const price = priceFor(p, modalSize);
  const isFull = modalSize === "100";
  $("#modalPrice").innerHTML = `${fmt(price)} <small style="font-family:var(--font-body); font-size:.62rem; color:var(--muted); letter-spacing:.1em;">/ ${modalSize} ML</small>`;
  const presentacion = isFull ? "100 ML (frasco completo)" : `${modalSize} ML (decant)`;
  const msg = `Hola, quiero realizar este pedido:\n\nPerfume: ${p.name}\nPresentación: ${presentacion}\nCantidad: 1\nPrecio: ${fmt(price)}`;
  $("#modalWhatsapp").href = waLink(msg);
}

function closeModal(){
  $("#modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

/* ============================================================
   CART DRAWER OPEN / CLOSE
   ============================================================ */
function openCart(){
  $("#cartDrawer").classList.add("open");
  $("#overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeCart(){
  $("#cartDrawer").classList.remove("open");
  $("#overlay").classList.remove("open");
  document.body.style.overflow = "";
}

/* ============================================================
   CARRUSEL "MÁS VENDIDOS"
   ============================================================ */
function initCarousel(){
  const rail = $("#bestsellerRail");
  const prevBtn = $("#carouselPrev");
  const nextBtn = $("#carouselNext");
  const dotsWrap = $("#carouselDots");
  if (!rail || !rail.children.length) return;

  function maxScroll(){ return Math.max(0, rail.scrollWidth - rail.clientWidth); }

  function buildDots(){
    const ms = maxScroll();
    const pages = ms > 4 ? Math.max(2, Math.ceil(rail.scrollWidth / rail.clientWidth)) : 1;
    dotsWrap.innerHTML = Array.from({ length: pages }).map((_, i) =>
      `<button type="button" class="carousel-dot" data-i="${i}" aria-label="Ir al grupo ${i + 1}"></button>`
    ).join("");
    dotsWrap.querySelectorAll(".carousel-dot").forEach(dot => {
      dot.addEventListener("click", () => {
        const i = Number(dot.dataset.i);
        rail.scrollTo({ left: (maxScroll() / Math.max(pages - 1, 1)) * i, behavior: "smooth" });
      });
    });
    updateState();
  }

  function updateState(){
    const ms = maxScroll();
    const dots = dotsWrap.querySelectorAll(".carousel-dot");
    const idx = ms > 0 ? Math.round((rail.scrollLeft / ms) * (dots.length - 1)) : 0;
    dots.forEach((d, i) => d.classList.toggle("active", i === idx));
    if (prevBtn) prevBtn.disabled = rail.scrollLeft <= 4;
    if (nextBtn) nextBtn.disabled = rail.scrollLeft >= ms - 4;
  }

  prevBtn?.addEventListener("click", () => rail.scrollBy({ left: -rail.clientWidth * 0.9, behavior: "smooth" }));
  nextBtn?.addEventListener("click", () => rail.scrollBy({ left: rail.clientWidth * 0.9, behavior: "smooth" }));
  rail.addEventListener("scroll", updateState, { passive: true });
  window.addEventListener("resize", buildDots);

  buildDots();
}

/* ============================================================
   TOAST
   ============================================================ */
let toastTimer;
function showToast(text){
  const toast = $("#toast");
  $("#toastText").textContent = text;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* ============================================================
   MOBILE NAV / SEARCH
   ============================================================ */
function initNav(){
  $("#navToggle").addEventListener("click", () => $("#mobileNav").classList.add("open"));
  $("#navClose").addEventListener("click", () => $("#mobileNav").classList.remove("open"));
  $$("#mobileNav a").forEach(a => a.addEventListener("click", () => $("#mobileNav").classList.remove("open")));

  $("#searchToggle").addEventListener("click", () => {
    $("#searchWrap").classList.toggle("open");
    if ($("#searchWrap").classList.contains("open")) $("#searchInput").focus();
  });
  $("#searchInput").addEventListener("keydown", e => {
    if (e.key === "Enter"){
      $("#catalogSearch").value = $("#searchInput").value;
      document.getElementById("decants").scrollIntoView({ behavior: "smooth" });
      applyFilters();
    }
  });
  $("#mobileSearchInput").addEventListener("keydown", e => {
    if (e.key === "Enter"){
      $("#catalogSearch").value = $("#mobileSearchInput").value;
      $("#mobileNav").classList.remove("open");
      document.getElementById("decants").scrollIntoView({ behavior: "smooth" });
      applyFilters();
    }
  });
}

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
function initReveal(){
  const els = $$(".reveal");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting){
        e.target.classList.add("is-visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => obs.observe(el));
}

/* ============================================================
   INIT
   ============================================================ */
function initWhatsappLinks(){
  const generalMsg = "Hola, quiero conocer más sobre las fragancias de Noir.";
  $("#headerWhatsapp").href = waLink(generalMsg);
  $("#fabWhatsapp").href = waLink(generalMsg);
  $("#contactWhatsappBtn").href = waLink(generalMsg);
  $("#contactWhatsappText").textContent = "+" + WHATSAPP_NUMBER.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, "$1 $2 $3 $4");
}

function init(){
  populateFilters();
  renderTicker();
  renderBestsellers();
  renderCatalog(PRODUCTS);
  renderCart();
  initWhatsappLinks();
  initNav();
  initReveal();
  initCarousel();

  attachAllCardEvents(bestsellerRail);
  attachAllCardEvents(catalogGrid);

  // Filters
  ["filterBrand","filterGender","filterFamily","filterPrice"].forEach(id => {
    $("#" + id).addEventListener("change", applyFilters);
  });
  $("#catalogSearch").addEventListener("input", applyFilters);
  $("#filterBestseller").addEventListener("click", (e) => {
    bestsellerOnly = !bestsellerOnly;
    e.target.classList.toggle("active", bestsellerOnly);
    applyFilters();
  });
  $("#filterStock").addEventListener("click", (e) => {
    stockOnly = !stockOnly;
    e.target.classList.toggle("active", stockOnly);
    applyFilters();
  });

  // Cart drawer
  $("#cartToggle").addEventListener("click", openCart);
  $("#cartClose").addEventListener("click", closeCart);
  $("#overlay").addEventListener("click", () => { closeCart(); closeModal(); });

  // Modal
  $("#modalClose").addEventListener("click", closeModal);
  $("#modalOverlay").addEventListener("click", (e) => { if (e.target.id === "modalOverlay") closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape"){ closeModal(); closeCart(); } });

  // Contact form (demo only — no backend)
  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#cfName").value;
    const msg = $("#cfMsg").value;
    const waMsg = `Hola, soy ${name}. ${msg}`;
    window.open(waLink(waMsg), "_blank");
    e.target.reset();
  });
}

document.addEventListener("DOMContentLoaded", init);
