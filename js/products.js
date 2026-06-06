/**
 * KreaLab ICON — products.js
 * Fuente única de verdad para todos los productos ICON.
 * Para agregar un producto: añadir un objeto al array PRODUCTS.
 *
 * Campos:
 *   id          → slug único para la URL (?id=mc-pato)
 *   name        → nombre visible
 *   tagLabel    → etiqueta de categoría mostrada en la card
 *   tags        → array de filtros ['disney','coleccionable', etc.]
 *   price       → número (sin S/)
 *   stockLabel  → 'En stock' | 'Stock Limitado' | 'Bajo Pedido (48h)' | 'Últimas unidades'
 *   gradient    → CSS gradient para el fondo de la card (sin foto)
 *   shortDesc   → descripción corta para la card del catálogo
 *   fullDesc    → descripción larga para la página de detalle
 *   features    → array de { icon, title, desc } para la página de detalle
 */

const PRODUCTS = [

  /* ── COLECCIÓN DISNEY ─────────────────────────────────── */

  {
    id: 'mc-pato',
    name: 'Mc Pato',
    tagLabel: 'Coleccionable',
    tags: ['disney', 'coleccionable'],
    price: 85.00,
    stockLabel: 'Stock Limitado',
    gradient: 'linear-gradient(145deg, #F5D88A, #D4A840)',
    shortDesc: 'Figura coleccionable en acabado metálico dorado. Diseño exclusivo Krea Lab.',
    fullDesc: 'Mc Pato es una figura coleccionable de alta densidad impresa en resina de ingeniería con acabado metálico tipo lujo. Cada pieza es fabricada bajo pedido y viene en caja especial de la marca Krea Lab. Perfecta para escritorios, vitrinas o como regalo corporativo de alto impacto. Su postura clásica sobre monedas de oro transmite prosperidad y mentalidad de éxito.',
    features: [
      { icon: 'cube', title: 'Resina de alta calidad', desc: 'Impresión SLA de alta resolución con acabado metálico dorado.' },
      { icon: 'paint-brush', title: 'Pintado a mano', desc: 'Detalles aplicados manualmente para un acabado artesanal único.' },
      { icon: 'gift', title: 'Embalaje premium', desc: 'Viene en caja Krea Lab con protección y sello oficial.' },
      { icon: 'trophy', title: 'Ideal para coleccionistas', desc: 'Edición limitada, perfecta para exhibir en vitrinas o escritorios.' },
      { icon: 'ruler', title: 'Base personalizable', desc: 'Puedes solicitar tu nombre o frase grabada en la base.' },
      { icon: 'shield-check', title: 'Duradera y resistente', desc: 'Material de alta calidad con larga vida útil y resistencia al desgaste.' },
    ],
  },

  {
    id: 'tio-rico-mc',
    name: 'Tío Rico Mc',
    tagLabel: 'Coleccionable',
    tags: ['disney', 'coleccionable'],
    price: 65.00,
    stockLabel: 'Stock Limitado',
    gradient: 'linear-gradient(145deg, #D0D8E8, #9AA8C0)',
    shortDesc: 'Acabado metálico satinado clásico. Símbolo de prosperidad y éxito.',
    fullDesc: 'Tío Rico Mc en su versión clásica, impresa en resina con acabado metálico satinado. Una figura que representa la constancia, el trabajo duro y la visión de futuro. Perfecta para espacios de trabajo y oficinas. Cada pieza viene acompañada de caja Krea Lab con protección premium.',
    features: [
      { icon: 'cube', title: 'Resina de alta calidad', desc: 'Impresión SLA con acabado metálico satinado.' },
      { icon: 'paint-brush', title: 'Pintado a mano', desc: 'Acabados aplicados manualmente para mayor fidelidad.' },
      { icon: 'gift', title: 'Embalaje premium', desc: 'Caja Krea Lab con protección incluida.' },
      { icon: 'trophy', title: 'Ideal para coleccionistas', desc: 'Pieza con alto valor simbólico y estético.' },
      { icon: 'ruler', title: 'Base personalizable', desc: 'Solicita tu nombre o frase en la base.' },
      { icon: 'shield-check', title: 'Alta durabilidad', desc: 'Resina resistente al desgaste y al tiempo.' },
    ],
  },

  {
    id: 'tio-rico-plateado',
    name: 'Tío Rico Plateado',
    tagLabel: 'Coleccionable',
    tags: ['disney', 'coleccionable'],
    price: 65.00,
    stockLabel: 'En stock',
    gradient: 'linear-gradient(145deg, #E8E8F0, #B8B8D0)',
    shortDesc: 'Versión plateada premium de alta resolución. Acabado espejo satinado.',
    fullDesc: 'Tío Rico en su versión plateada, con acabado espejo satinado de alta resolución. Esta variante ofrece un aspecto más elegante y moderno, ideal para ambientes minimalistas y de lujo. Impresa en resina SLA con los más altos estándares de calidad.',
    features: [
      { icon: 'cube', title: 'Resina SLA premium', desc: 'Resolución ultra fina con acabado espejo plateado.' },
      { icon: 'paint-brush', title: 'Acabado espejo', desc: 'Superficie pulida a mano para efecto plateado brillante.' },
      { icon: 'gift', title: 'Embalaje premium', desc: 'Caja Krea Lab con protección incluida.' },
      { icon: 'trophy', title: 'Edición especial', desc: 'Variante exclusiva del coleccionable clásico.' },
      { icon: 'ruler', title: 'Base personalizable', desc: 'Solicita tu nombre o frase en la base.' },
      { icon: 'shield-check', title: 'Alta durabilidad', desc: 'Resina resistente al desgaste y al tiempo.' },
    ],
  },

  {
    id: 'mickey-mouse',
    name: 'Mickey Mouse',
    tagLabel: 'Disney',
    tags: ['disney', 'coleccionable'],
    price: 65.00,
    stockLabel: 'En stock',
    gradient: 'linear-gradient(145deg, #E8C8B0, #C09878)',
    shortDesc: 'Figura clásica de Mickey en acabado bronce satinado premium.',
    fullDesc: 'Mickey Mouse en su versión coleccionable premium. Fabricado en resina de alta calidad con acabado bronce satinado. Una figura icónica que combina nostalgia y elegancia, perfecta para cualquier espacio de trabajo o colección personal.',
    features: [
      { icon: 'cube', title: 'Resina de alta calidad', desc: 'Impresión SLA con acabado bronce satinado.' },
      { icon: 'paint-brush', title: 'Pintado a mano', desc: 'Detalles aplicados manualmente.' },
      { icon: 'gift', title: 'Embalaje premium', desc: 'Caja Krea Lab con protección incluida.' },
      { icon: 'trophy', title: 'Icono clásico', desc: 'El personaje más famoso de Disney en versión premium.' },
      { icon: 'ruler', title: 'Base personalizable', desc: 'Solicita tu nombre o frase en la base.' },
      { icon: 'shield-check', title: 'Alta durabilidad', desc: 'Material resistente al desgaste.' },
    ],
  },

  {
    id: 'minnie-mouse',
    name: 'Minnie Mouse',
    tagLabel: 'Disney',
    tags: ['disney', 'coleccionable'],
    price: 65.00,
    stockLabel: 'En stock',
    gradient: 'linear-gradient(145deg, #F0C8D8, #D898A8)',
    shortDesc: 'Figura de Minnie en acabado dorado rosado, perfecta para escritorios.',
    fullDesc: 'Minnie Mouse en versión coleccionable premium con acabado dorado rosado. Una figura elegante y delicada que combina el encanto del personaje con la calidad de impresión 3D en resina. Ideal como regalo o para decorar cualquier espacio.',
    features: [
      { icon: 'cube', title: 'Resina premium', desc: 'Impresión SLA con acabado dorado rosado.' },
      { icon: 'paint-brush', title: 'Pintado a mano', desc: 'Colores vibrantes aplicados artesanalmente.' },
      { icon: 'gift', title: 'Embalaje premium', desc: 'Caja Krea Lab con protección incluida.' },
      { icon: 'trophy', title: 'Para coleccionistas', desc: 'Figura icónica en versión de lujo.' },
      { icon: 'ruler', title: 'Base personalizable', desc: 'Solicita tu nombre o frase en la base.' },
      { icon: 'shield-check', title: 'Alta durabilidad', desc: 'Material resistente al desgaste.' },
    ],
  },

  {
    id: 'mickey-minnie-personalizados',
    name: 'Mickey y Minnie Personalizados',
    tagLabel: 'Personalizado',
    tags: ['disney', 'coleccionable', 'bajo-pedido'],
    price: 150.00,
    stockLabel: 'Bajo Pedido (48h)',
    gradient: 'linear-gradient(145deg, #F0D8C0, #D0A880)',
    shortDesc: 'Set de dos figuras personalizadas con nombres grabados. Ideal para parejas.',
    fullDesc: 'Set exclusivo de Mickey y Minnie personalizados. Cada figura puede llevar grabados los nombres que elijas en la base, convirtiéndolo en un regalo único e irrepetible. Fabricados en resina premium con acabado metálico dorado. Tiempo de producción 48 horas hábiles.',
    features: [
      { icon: 'cube', title: 'Resina premium', desc: 'Impresión SLA de alta resolución para ambas figuras.' },
      { icon: 'paint-brush', title: 'Acabado metálico', desc: 'Dorado premium aplicado a mano.' },
      { icon: 'gift', title: 'Set completo', desc: 'Las dos figuras en embalaje conjunto Krea Lab.' },
      { icon: 'text-t', title: 'Nombres grabados', desc: 'Personaliza con los nombres que desees en la base.' },
      { icon: 'heart', title: 'Ideal para regalos', desc: 'Perfecto para aniversarios, bodas o cumpleaños.' },
      { icon: 'shield-check', title: 'Alta durabilidad', desc: 'Material resistente al desgaste y al tiempo.' },
    ],
  },

  {
    id: 'donald-duck',
    name: 'Donald Duck',
    tagLabel: 'Disney',
    tags: ['disney', 'coleccionable'],
    price: 65.00,
    stockLabel: 'En stock',
    gradient: 'linear-gradient(145deg, #E0E8D0, #B0C098)',
    shortDesc: 'El Pato Donald en pose característica con acabado satinado de lujo.',
    fullDesc: 'Donald Duck en su versión coleccionable premium. Impreso en resina con acabado satinado de alta calidad. La figura captura perfectamente la expresividad del personaje en una pose clásica e inconfundible.',
    features: [
      { icon: 'cube', title: 'Resina de alta calidad', desc: 'Impresión SLA con acabado satinado.' },
      { icon: 'paint-brush', title: 'Pintado a mano', desc: 'Detalles aplicados manualmente.' },
      { icon: 'gift', title: 'Embalaje premium', desc: 'Caja Krea Lab con protección incluida.' },
      { icon: 'trophy', title: 'Personaje clásico', desc: 'Donald en su versión más icónica.' },
      { icon: 'ruler', title: 'Base personalizable', desc: 'Solicita tu nombre o frase en la base.' },
      { icon: 'shield-check', title: 'Alta durabilidad', desc: 'Material resistente al desgaste.' },
    ],
  },

  {
    id: 'goofy',
    name: 'Goofy Clásico',
    tagLabel: 'Disney',
    tags: ['disney', 'coleccionable'],
    price: 55.00,
    stockLabel: 'En stock',
    gradient: 'linear-gradient(145deg, #C8E0D0, #88B898)',
    shortDesc: 'Goofy en pose característica, acabado metálico satinado de lujo.',
    fullDesc: 'Goofy en su versión coleccionable con acabado metálico satinado verde dorado. Una figura llena de personalidad que captura la esencia del personaje más divertido de Disney. Fabricada en resina premium con gran nivel de detalle.',
    features: [
      { icon: 'cube', title: 'Resina premium', desc: 'Impresión SLA con acabado metálico satinado.' },
      { icon: 'paint-brush', title: 'Pintado a mano', desc: 'Detalles aplicados artesanalmente.' },
      { icon: 'gift', title: 'Embalaje premium', desc: 'Caja Krea Lab con protección incluida.' },
      { icon: 'trophy', title: 'Para coleccionistas', desc: 'Figura icónica de alta fidelidad.' },
      { icon: 'ruler', title: 'Base personalizable', desc: 'Solicita tu nombre o frase en la base.' },
      { icon: 'shield-check', title: 'Alta durabilidad', desc: 'Material resistente al desgaste.' },
    ],
  },

  {
    id: 'daisy',
    name: 'Daisy',
    tagLabel: 'Disney',
    tags: ['disney', 'coleccionable'],
    price: 65.00,
    stockLabel: 'Últimas unidades',
    gradient: 'linear-gradient(145deg, #F8D8E8, #E0A8C0)',
    shortDesc: 'Daisy Duck en acabado premium dorado con detalle de lazo.',
    fullDesc: 'Daisy Duck en versión coleccionable premium. Su característico lazo y elegante postura hacen de esta figura una pieza especial para cualquier colección. Fabricada en resina de alta resolución con acabado dorado premium.',
    features: [
      { icon: 'cube', title: 'Resina premium', desc: 'Impresión SLA con acabado dorado de lujo.' },
      { icon: 'paint-brush', title: 'Pintado a mano', desc: 'Lazo y detalles aplicados manualmente.' },
      { icon: 'gift', title: 'Embalaje premium', desc: 'Caja Krea Lab con protección incluida.' },
      { icon: 'trophy', title: 'Edición especial', desc: 'Disponibilidad limitada.' },
      { icon: 'ruler', title: 'Base personalizable', desc: 'Solicita tu nombre o frase en la base.' },
      { icon: 'shield-check', title: 'Alta durabilidad', desc: 'Material resistente al desgaste.' },
    ],
  },

  {
    id: 'pluto',
    name: 'Pluto',
    tagLabel: 'Disney',
    tags: ['disney', 'coleccionable'],
    price: 55.00,
    stockLabel: 'En stock',
    gradient: 'linear-gradient(145deg, #E8D8A8, #C0A868)',
    shortDesc: 'El fiel compañero de Mickey en acabado dorado artesanal.',
    fullDesc: 'Pluto, el fiel compañero de Mickey Mouse, en versión coleccionable premium. Impreso en resina con acabado dorado artesanal que realza cada detalle de la figura. Una pieza entrañable para cualquier fan de Disney.',
    features: [
      { icon: 'cube', title: 'Resina premium', desc: 'Impresión SLA con acabado dorado artesanal.' },
      { icon: 'paint-brush', title: 'Pintado a mano', desc: 'Detalles aplicados manualmente.' },
      { icon: 'gift', title: 'Embalaje premium', desc: 'Caja Krea Lab con protección incluida.' },
      { icon: 'trophy', title: 'Para coleccionistas', desc: 'Figura de alta fidelidad y detalle.' },
      { icon: 'ruler', title: 'Base personalizable', desc: 'Solicita tu nombre o frase en la base.' },
      { icon: 'shield-check', title: 'Alta durabilidad', desc: 'Material resistente al desgaste.' },
    ],
  },

  {
    id: 'stitch',
    name: 'Stitch',
    tagLabel: 'Disney',
    tags: ['disney', 'coleccionable'],
    price: 65.00,
    stockLabel: 'En stock',
    gradient: 'linear-gradient(145deg, #A8C8F0, #7098C8)',
    shortDesc: 'El favorito de muchos, en acabado dorado artesanal de alta fidelidad.',
    fullDesc: 'Stitch, el alien más adorable de Disney, en versión coleccionable premium. Fabricado en resina con acabado dorado artesanal que captura cada detalle del personaje. Una pieza imprescindible para cualquier coleccionista fan de Lilo & Stitch.',
    features: [
      { icon: 'cube', title: 'Resina premium', desc: 'Impresión SLA de alta resolución.' },
      { icon: 'paint-brush', title: 'Acabado artesanal', desc: 'Dorado aplicado a mano con gran detalle.' },
      { icon: 'gift', title: 'Embalaje premium', desc: 'Caja Krea Lab con protección incluida.' },
      { icon: 'trophy', title: 'Muy solicitado', desc: 'Uno de los más pedidos de la colección.' },
      { icon: 'ruler', title: 'Base personalizable', desc: 'Solicita tu nombre o frase en la base.' },
      { icon: 'shield-check', title: 'Alta durabilidad', desc: 'Material resistente al desgaste.' },
    ],
  },

  {
    id: 'principito',
    name: 'Principito',
    tagLabel: 'Coleccionable',
    tags: ['coleccionable'],
    price: 65.00,
    stockLabel: 'Últimas unidades',
    gradient: 'linear-gradient(145deg, #D8E8F8, #A0C0E0)',
    shortDesc: 'El Principito en versión plateada de alta resolución. Pieza literaria única.',
    fullDesc: 'El Principito en versión coleccionable premium con acabado plateado de alta resolución. Una pieza que rinde homenaje a uno de los libros más amados del mundo, fabricada con la precisión y calidad que merece un clásico literario. Disponibilidad muy limitada.',
    features: [
      { icon: 'cube', title: 'Resina SLA', desc: 'Alta resolución con acabado plateado.' },
      { icon: 'paint-brush', title: 'Pintado a mano', desc: 'Detalles aplicados artesanalmente.' },
      { icon: 'gift', title: 'Embalaje premium', desc: 'Caja Krea Lab con protección incluida.' },
      { icon: 'book', title: 'Homenaje literario', desc: 'Pieza inspirada en el clásico de Saint-Exupéry.' },
      { icon: 'ruler', title: 'Base personalizable', desc: 'Solicita tu frase favorita en la base.' },
      { icon: 'shield-check', title: 'Edición muy limitada', desc: 'Pocas unidades disponibles.' },
    ],
  },

  /* ── ACCESORIOS ───────────────────────────────────────── */

  {
    id: 'soporte-laptop',
    name: 'Soporte Elevador Laptop',
    tagLabel: 'Accesorio',
    tags: ['accesorio'],
    price: 49.00,
    stockLabel: 'En stock',
    gradient: 'linear-gradient(145deg, #D0C8F0, #B0A8E0)',
    shortDesc: 'Estructura ergonómica en filamento compuesto. Previene el calentamiento.',
    fullDesc: 'Soporte elevador para laptop fabricado en filamento compuesto de alta resistencia. Su diseño ergonómico eleva la pantalla a la altura ideal para reducir la fatiga cervical, mientras permite una circulación de aire óptima que previene el calentamiento del equipo. Compatible con laptops de hasta 17 pulgadas.',
    features: [
      { icon: 'monitor', title: 'Ergonómico', desc: 'Eleva la pantalla a la altura ideal para reducir fatiga.' },
      { icon: 'wind', title: 'Ventilación activa', desc: 'Diseño de rejilla que permite la circulación de aire.' },
      { icon: 'devices', title: 'Universal', desc: 'Compatible con laptops de hasta 17 pulgadas.' },
      { icon: 'cube', title: 'Filamento compuesto', desc: 'Alta resistencia estructural y durabilidad.' },
      { icon: 'paint-bucket', title: 'Colores', desc: 'Disponible en negro, blanco y gris.' },
      { icon: 'shield-check', title: 'Alta durabilidad', desc: 'Soporta hasta 5kg de carga continua.' },
    ],
  },

  {
    id: 'soporte-monitor-doble',
    name: 'Soporte Vertical Doble Monitor',
    tagLabel: 'Accesorio',
    tags: ['accesorio', 'bajo-pedido'],
    price: 98.00,
    stockLabel: 'Bajo Pedido (72h)',
    gradient: 'linear-gradient(145deg, #C8D0F8, #A0A8E8)',
    shortDesc: 'Fabricado en PETG reforzado para monitores de hasta 27". Ajuste en ángulo.',
    fullDesc: 'Soporte vertical para doble monitor fabricado en PETG reforzado. Permite ajustar el ángulo de cada monitor de forma independiente, optimizando el espacio del escritorio. Compatible con monitores de hasta 27 pulgadas y soporta hasta 8kg por brazo. Tiempo de producción 72 horas hábiles.',
    features: [
      { icon: 'monitor', title: 'Doble monitor', desc: 'Soporta dos monitores de hasta 27 pulgadas.' },
      { icon: 'arrows-out', title: 'Ángulo ajustable', desc: 'Cada brazo se ajusta de forma independiente.' },
      { icon: 'cube', title: 'PETG reforzado', desc: 'Alta resistencia con hasta 8kg por brazo.' },
      { icon: 'desk', title: 'Ahorro de espacio', desc: 'Libera espacio valioso en el escritorio.' },
      { icon: 'paint-bucket', title: 'Colores', desc: 'Disponible en negro, blanco y gris.' },
      { icon: 'shield-check', title: 'Alta durabilidad', desc: 'PETG resistente a la temperatura y deformación.' },
    ],
  },

  /* ── DECORATIVOS ──────────────────────────────────────── */

  {
    id: 'florero-twisted',
    name: 'Florero Paramétrico Twisted',
    tagLabel: 'Decorativo',
    tags: ['decorativo'],
    price: 58.00,
    stockLabel: 'En stock',
    gradient: 'linear-gradient(145deg, #E8C8F0, #C8A0E0)',
    shortDesc: 'Impreso en espiral continuo sin capas visibles. Translúcido con luz interior.',
    fullDesc: 'Florero paramétrico diseñado en espiral continuo (vase mode), técnica que elimina costuras y capas visibles para lograr una superficie completamente lisa y continua. Con una fuente de luz LED en su interior, el material translúcido crea un efecto luminoso espectacular. Disponible en varios colores.',
    features: [
      { icon: 'spiral', title: 'Vase mode', desc: 'Impresión en espiral continuo sin capas visibles.' },
      { icon: 'sun', title: 'Efecto luminoso', desc: 'Material translúcido que difumina la luz LED.' },
      { icon: 'paint-bucket', title: 'Multicolor', desc: 'Disponible en blanco, verde, azul, rojo y transparente.' },
      { icon: 'flower', title: 'Funcional', desc: 'Apto para flores naturales y artificiales.' },
      { icon: 'cube', title: 'PETG translúcido', desc: 'Material premium de alta claridad óptica.' },
      { icon: 'shield-check', title: 'Superficie lisa', desc: 'Sin costuras ni marcas de capa.' },
    ],
  },

  {
    id: 'lampara-wave',
    name: 'Pantalla Lámpara Wave',
    tagLabel: 'Decorativo',
    tags: ['decorativo', 'bajo-pedido'],
    price: 75.00,
    stockLabel: 'Bajo Pedido (48h)',
    gradient: 'linear-gradient(145deg, #E8D0C8, #C8A098)',
    shortDesc: 'Diseño paramétrico que difumina la luz LED de manera uniforme y relajante.',
    fullDesc: 'Pantalla para lámpara de diseño paramétrico Wave, fabricada en PLA translúcido de alta resolución. Su geometría ondulada difumina la luz LED de forma uniforme, creando una atmósfera cálida y relajante ideal para espacios de trabajo o dormitorios. Requiere bombilla LED E27 de hasta 10W (no incluida).',
    features: [
      { icon: 'sun', title: 'Luz difusa', desc: 'Geometría Wave que difumina la luz uniformemente.' },
      { icon: 'waves', title: 'Diseño paramétrico', desc: 'Forma generada algorítmicamente para máxima estética.' },
      { icon: 'cube', title: 'PLA translúcido', desc: 'Alta resolución con acabado suave al tacto.' },
      { icon: 'lightning', title: 'Compatible LED', desc: 'Para bombillas E27 de hasta 10W (no incluida).' },
      { icon: 'paint-bucket', title: 'Colores', desc: 'Blanco natural, ámbar y rosa pálido.' },
      { icon: 'shield-check', title: 'Bajo pedido', desc: 'Producida en 48 horas hábiles.' },
    ],
  },

  {
    id: 'organizador-modular',
    name: 'Organizador Modular Desk v1',
    tagLabel: 'Accesorio',
    tags: ['accesorio', 'decorativo'],
    price: 42.00,
    stockLabel: 'En stock',
    gradient: 'linear-gradient(145deg, #D8C0F0, #B898E0)',
    shortDesc: 'Sistema modular de organizadores apilables para escritorio. Múltiples colores.',
    fullDesc: 'Sistema modular de organizadores para escritorio compuesto por piezas apilables que se conectan entre sí. Puedes combinar y ordenar los módulos según tus necesidades: lápices, cables, tarjetas, notas. Disponible en múltiples colores para combinar con tu setup. El precio es por módulo individual.',
    features: [
      { icon: 'stack', title: 'Apilable', desc: 'Módulos que se conectan entre sí de forma estable.' },
      { icon: 'paint-bucket', title: 'Multicolor', desc: 'Amplia gama de colores para personalizar tu setup.' },
      { icon: 'cube', title: 'PLA de alta rigidez', desc: 'Estructura firme que no se deforma con el uso.' },
      { icon: 'plus-circle', title: 'Expandible', desc: 'Puedes agregar más módulos en cualquier momento.' },
      { icon: 'desktop-tower', title: 'Gamer friendly', desc: 'Diseño compatible con setups minimalistas y gamer.' },
      { icon: 'shield-check', title: 'Alta durabilidad', desc: 'Material resistente al uso diario.' },
    ],
  },

];