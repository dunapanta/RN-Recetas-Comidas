import Category from '../models/category'
import Meal from '../models/meal'

export const CATEGORIES = [
    new Category('c1', 'Italiana', '#e57373'),
    new Category('c2', 'Rápido y Sencillo', '#ba68c8'),
    new Category('c3', 'Hamburguesas', '#ffa726'),
    new Category('c4', 'Ecuatoriana', '#f5d142'),
    new Category('c5', 'Ligero', '#7986cb'),
    new Category('c6', 'Exótico', '#4fc3f7'),
    new Category('c7', 'Desayunos', '#81c784'),
    new Category('c8', 'Asiático', '#dce775'),
    new Category('c9', 'Francesa', '#ff8a65'),
    new Category('c10', 'Verano', '#26c6da')
]

export const MEALS = [
    new Meal(
      'm1',
      ['c1', 'c2'],
      'Espagueti con Salsa de Tomate',
      'asequible',
      'simple',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
      20,
      [
        '4 Tomates',
        '1 Cucharada de Aceite de Oliva',
        '1 Cebolla',
        '250g de Espagueti',
        'Especias',
        'Queso (opcional)'
      ],
      [
        'Cortar los tomates y la cebolla en trozos pequeños.',
        'Hierva un poco de agua, agregue sal una vez que hierva.',
        'Pon los espaguetis en el agua hirviendo; deben estar listos en unos 10 a 12 minutos.',
        'Mientras tanto, calentar un poco de aceite de oliva y añadir la cebolla cortada.',
        'Después de 2 minutos, agregue los trozos de tomate, sal, pimienta y sus otras especias.',
        'La salsa estará lista una vez que estén los espaguetis.',
        'Siéntase libre de agregar un poco de queso encima del plato terminado.'
      ],
      false,
      true,
      true,
      true
    ),
  
    new Meal(
      'm2',
      ['c2'],
      'Brindis Hawaii',
      'asequible',
      'simple',
      'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
      10,
      [
        '1 Rebanada de pan blanco',
        '1 Rebanada de Jamon',
        '1 Rodaja de Piña',
        '1-2 Rebanadas de Queso',
        'Mantequilla'
      ],
      [
        'Unte con mantequilla un lado del pan blanco',
        'Capa de jamón, piña y queso sobre el pan blanco',
        'Hornee la tostada durante unos 10 minutos en el horno a 200 ° C'
      ],
      false,
      false,
      false,
      false
    ),
  
    new Meal(
      'm3',
      ['c3'],
      'Hamburguesa Clásica',
      'caro',
      'simple',
      'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
      45,
      [
        '300g Carne',
        '1 Tomate',
        '1 Pepino',
        '1 Cebolla',
        'Ketchup',
        '2 Bollos'
      ],
      [
        'Forma 2 empanadas',
        'Freír las hamburguesas por 4 minutos por cada lado',
        'Freír rápidamente los bollos durante 1 minuto por cada lado',
        'Agrege ketchup a los bollos',
        'Sirve la hamburguesa con tomate, pepino y cebolla.'
      ],
      false,
      false,
      false,
      true
    ),
  
    new Meal(
      'm4',
      ['c4'],
      'Encebollado',
      'lujoso',
      'media',
      'https://www.cocina-ecuatoriana.com/base/stock/Recipe/19-image/19-image_web.jpg',
      60,
      [
        '2 libras de atún fresco',
        '1 libra de yuca fresca o congelada',
        '2 cucharadas de aceite',
        '2 tomates picados',
        '½ cebolla picada',
        '1 cucharadita de aji no picante en polvo',
        '2 cucharaditas de comino molido',
        '8 tazas de agua',
        '5 ramitas de cilantro o culantro',
        'Sal al gusto'
      ],
      [
        'Prepare un refrito con la cebolla, el tomate, al comino, el aji y la sal.',
        'Añada el agua y las ramitas de cilantro.',
        'Añada el atún cuando el agua empiece a hervir, cocine hasta que el atún esté listo, aproximadamente unos 15 minutos.',
        'Cierna el caldo donde se cocinó el agua y guárdelo para cocinar la yuca.',
        'Separe el atún en lonjas, guarde para añadir más tarde',
        'Haga hervir el caldo de atún y añada las yucas, cocine hasta que estén suaves',
        'Saque las yucas y córtelos en pedazos pequeños.',
        'Vuelva a poner las yucas picadas y las lonjas de atún en el caldo, rectifique la sal y caliente hasta que esté listo para servir. Para darle más sabor, también se puede preparar una porción adicional de refrito y licuarlo con un poco del caldo, e incorporar esta mezcla a la sopa.',
        'Para servir el encebollado de pescado se pone una buena porción del curtido de cebolla y tomate encima de cada plato de sopa.'
      ],
      true,
      false,
      false,
      true
    ),
  
    new Meal(
      'm5',
      ['c2', 'c5', 'c10'],
      'Ensalada de Salmón Ahumado',
      'lujoso',
      'simple',
      'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
      15,
      [
        'Rúcula',
        "Hojas de Canónigos",
        'Perejil',
        'Hinojo',
        '200g de Salmón Ahumado',
        'Mostaza',
        'Vinagre balsámico',
        'Aceite de oliva',
        'Sal y Pimienta'
      ],
      [
        'Lavar y cortar la ensalada y las hierbas.',
        'Cortar el salmón en dados',
        'Procese la mostaza, el vinagre y el aceite de oliva en una salsa.',
        'Prepara la ensalada',
        'Agregue los cubitos de salmón y el aderezo'
      ],
      true,
      false,
      true,
      true
    ),
  
    new Meal(
      'm6',
      ['c6', 'c10'],
      'Deliciosa Mousse de Naranja',
      'asequible',
      'dificil',
      'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
      240,
      [
        '4 hojas de gelatina',
        '150 ml de jugo de naranja',
        '80g de Azucar',
        '300g de Yoghurt',
        '200g  de Creama',
        'Piel de Naranja'
      ],
      [
        'Disuelva la gelatina en una olla.',
        'Agrega jugo de naranja y azúcar.',
        'Saca la olla de la estufa',
        'Agrega 2 cucharadas de yogur.',
        'Revuelva la gelatina debajo del yogur restante.',
        'Enfriar todo en el frigorífico',
        'Montar la nata y levantarla debajo de la masa de naranja.',
        'Vuelva a enfriar durante al menos 4 horas',
        'Sirve con piel de naranja.'
      ],
      true,
      false,
      true,
      false
    ),
  
    new Meal(
      'm7',
      ['c7'],
      'Panqueques',
      'asequible',
      'simple',
      'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
      20,
      [
        '1/2 taza de harina para todo uso',
        '3 1/2 cucharadita de polvo para hornear',
        '1 Cucharadita de sal',
        '1 Cucharada de azúcar blanco',
        '1/4 taza de leche',
        '1 Huevo',
        '3 Cucharadas de mantequilla derretida'
      ],
      [
        'En un tazón grande, tamice la harina, el polvo de hornear, la sal y el azúcar.',
        'Hacer un hueco en el centro y verter la leche, el huevo y la mantequilla derretida; mezclar hasta que quede suave.',
        'Caliente una plancha o sartén ligeramente engrasada a fuego medio alto.',
        'Vierta o coloque la masa en la plancha, usando aproximadamente 1/4 de taza para cada panqueque. Dorar por ambos lados y servir caliente.'
      ],
      true,
      false,
      true,
      false
    ),
  
    new Meal(
      'm8',
      ['c8'],
      'Pollo al curry indio cremoso',
      'caro',
      'media',
      'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
      35,
      [
        '4 Pechugas de pollo',
        '1 Cebolla',
        '2 Dientes de ajo',
        '1 Pedazo de jengibre',
        '4 Cucharadas de almendras',
        '1 Cucharadita de pimienta de cayena',
        '500ml de Leche de coco'
      ],
      [
        'Cortar y freír la pechuga de pollo',
        'Procese la cebolla, el ajo y el jengibre hasta obtener una pasta y saltee todo.',
        'Agregue especias y saltee',
        'Agrega la pechuga de pollo + 250ml de agua y cocina todo durante 10 minutos',
        'Agrega leche de coco',
        'Servir con arroz'
      ],
      true,
      false,
      false,
      true
    ),
  
    new Meal(
      'm9',
      ['c9'],
      'Suflé de chocolate',
      'asequible',
      'dificil',
      'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
      45,
      [
        '1 Cucharadita de mantequilla derretida',
        '2 Cucharadas de azúcar blanca',
        '2 Onzas de chocolate amargo al 70%, partido en pedazos',
        '1 Cucharada de mantequilla',
        '1 Cucharada de harina para todo uso',
        '4 1/3 cucharadas de leche fría',
        '1 Pizca de sal',
        '1 1 pizca de pimienta de cayena',
        '1 Yema de huevo grande',
        '2 Claras de huevo grandes',
        '1 pizca de cremor tártaro',
        '1 Cucharada de azúcar blanca'
      ],
      [
        'Precalienta el horno a 190 ° C. Cubra una bandeja para hornear con borde con papel pergamino.',
        'Unte ligeramente el fondo y los lados de 2 moldes con 1 cucharadita de mantequilla derretida; cubra la parte inferior y los lados hasta el borde.',
        'Agregue 1 cucharada de azúcar blanca a los moldes. Gire los moldes hasta que el azúcar cubra todas las superficies.',
        'Coloque los trozos de chocolate en un tazón de metal para mezclar.',
        'Coloque el tazón sobre una olla de aproximadamente 3 tazas de agua caliente a fuego lento.',
        'Derrita 1 cucharada de mantequilla en una sartén a fuego medio. Espolvorea harina. Batir hasta que la harina se incorpore a la mantequilla y la mezcla se espese.',
        'Batir la leche fría hasta que la mezcla se vuelva suave y espesa. Transfiera la mezcla a un tazón con chocolate derretido.',
        'Agregue sal y pimienta de cayena. Mezclar bien. Agregue la yema de huevo y mezcle para combinar.',
        'Deje el tazón sobre el agua caliente (no hirviendo) para mantener el chocolate caliente mientras bate las claras de huevo.',
        'Coloque 2 claras de huevo en un tazón; agregue el crémor tártaro. Batir hasta que la mezcla comience a espesarse y una llovizna del batidor permanezca en la superficie aproximadamente 1 segundo antes de desaparecer en la mezcla.',
        'Agregue 1/3 de azúcar y mezcle. Agregue un poco más de azúcar durante unos 15 segundos.',
        'agregue el resto del azúcar. Continúe batiendo hasta que la mezcla sea tan espesa como la crema de afeitar y tenga picos suaves, de 3 a 5 minutos.',
        'Transfiera un poco menos de la mitad de las claras de huevo al chocolate.',
        'Mezclar hasta que las claras de huevo estén bien incorporadas al chocolate.',
        'Agrega el resto de las claras de huevo; Doblar suavemente en el chocolate con una espátula, levantando desde el fondo y doblando.',
        'Deje de mezclar después de que desaparezca la clara de huevo. Divida la mezcla entre 2 moldes preparados. Coloque los moldes en una bandeja para hornear preparada.',
        'Hornee en horno precalentado hasta que las peleas se inflen y hayan subido por encima de los bordes, de 12 a 15 minutos.'
      ],
      true,
      false,
      true,
      false
    ),
    new Meal(
      'm10',
      ['c2', 'c5', 'c10'],
      'Ensalada De Espárragos Con Tomates Cherry',
      'lujoso',
      'simple',
      'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
      30,
      [
        'Espárragos Blancos y Verdes',
        '30g de piñones',
        '300 g de tomates cherry',
        'Ensalada',
        'Sal, Pimienta y Aceite de Oliva'
      ],
      [
        'Lavar, pelar y cortar los espárragos',
        'Cocine en agua con sal',
        'Salpimentar los espárragos',
        'Asa los piñones',
        'Cortar los tomates por la mitad',
        'Mezclar con espárragos, ensalada y aderezo.',
        'Sirva con Baguette'
      ],
      true,
      true,
      true,
      true
    ),
    new Meal(
      'm11',
      ['c8'],
      'Tallarines Chinos con Verduras',
      'caro',
      'media',
      'https://www.recetasdesbieta.com/wp-content/uploads/2015/03/tallarines-chinos-verdura-01.jpg.webp',
      30,
      [
        '1 pimiento rojo',
        '1 pimiento verde',
        '1 zanahoria',
        '1 grande cebolleta',
        '2-3 dientes ajo',
        '60 g jengibre',
        '150-200 g setas',
        '7 cdas. salsa de soja',
        '200 ml aceite de girasol',
        '600 g tallarines frescos'
      ],
      [
        'En un bol mezclamos yemas, agua y sal. Añadimos harina y hacemos la pasta igual como lo explico en esta entrada.',
        'Cortamos en juliana todas la verduras.',
        'También cortamos las hojas verdes de la cebolleta. Espolvorearemos con ellas los tallarines al final.',
        'Cortamos en tiras, perpendicular a las fibras, la carne.',
        'Pelamos y rallamos el jengibre',
        'Cortamos, si son muy grandes, las setas.',
        'Cocemos la pasta.',
        'En una sartén grande y alta calentamos aceite y dejamos que eche humo unos 5 segundos.',
        'Añadimos la carne y la salteamos hasta que se dore, 2-3 minutos. Hacemos todo a fuego muy alto.',
        'Añadimos todas las verduras, las setas y salteamos todo, a fuego muy alto, 4-5 minutos o hasta que queden como nos gustan.',
        'Añadimos los tallarines, la salsa de soja',
        'Removemos, espolvoreamos con cebolleta verde y servimos.'
      ],
      false,
      false,
      false,
      true
    ),
    new Meal(
      'm12',
      ['c4', 'c6'],
      'Seco de pollo o gallina',
      'caro',
      'media',
      'https://www.deliciosi.com/images/1900/1951/mejoras-de-pollo.jpg',
      50,
      [
        '4 a 5 libras de pollo o gallina',
        '2 cucharaditas de comino molido',
        '2 cucharaditas de achiote molido',
        '2 a 3 cucharadas de aceite',
        '1 cebolla',
        '6 a 8 dientes de ajo',
        '1 a 2 tazas de cervez',
        '1 taza de jugo de naranjilla',
        '4 a 6 tomates',
        '2 pimientos',
        '1 aji o chile picante',
        '1 manojo de cilantro o culantro',
        '2 cucharaditas de orégano seco',
        'Sal y pimienta al gusto'
      ],
      [
        'Espolvoree las presas de pollo con el comino molido, el achiote molido, sal, y pimienta.',
        'Licue la cerveza y el jugo de naranjilla con los trozos de tomate, cebolla, dientes de ajos, pimientos, aji o chile si lo desea usar, cilantro, perejil, y orégano hasta obtener un puré o una salsa espesa.',
        'Caliente el aceite en una olla grande – en caso de usar las semillas de achiote, se las agrega al aceite a fuego bajo hasta que salga el color, y se quitan las semillas antes de agregar el pollo).',
        'Dore las presas de pollo (antes solía hacer un refrito con un poquito de cebolla picada y condimentos antes de dorar el pollo – si lo desea lo puede preparar así o seguir con la versión simplificada).',
        'Añada la mezcla licuada, haga hervir, y cocine a fuego lento hasta que la carne de pollo este muy suave, casi una hora (dependiendo de si es carne de pollo o carne de gallina).',
        'Si el pollo esta tierno pero la salsa aún no se ha espesado a su gusto, puede retirar las presas, y cocinar la salsa a fuego medio/alto hasta que se espese, unos 10 a 15 minutos. En este momento también la puede probar y ajustar la sal.',
        'Servir con arroz amarillo, plátanos maduros fritos, aguacate, papas, ensalada, etc.'
      ],
      true,
      false,
      false,
      true
    ),
    new Meal(
      'm13',
      ['c3', 'c6'],
      'Hamburguesa Vegana Mexicana',
      'caro',
      'media',
      'https://delantaldealces.com/wp-content/uploads/2014/06/hamburguesa-vegana-mexicana-300x225.jpg',
      40,
      [
        '200 gr. de judías negras o frijoles cocidos',
        '1 pimiento rojo',
        '1/2 cebolla',
        'Pan rallado',
        '1 lata de tomates pelados enteros',
        'Orégano',
        '1/2 cucharada de azúcar morena',
        '1 ajo pequeño',
        '1 pimienta de Cayena',
        '2 jalapeños o pimientos picantes',
        'Queso vegano tipo Cheddar en lonchas',
        'Sal al gusto'
      ],
      [
        'Cortamos el pimiento rojo y la cebolla en trozos pequeños. Calentamos un poco de aceite en una sartén y empezamos a sofreír el pimiento. Cuando empiece a estar algo blando, añadimos la mitad de la cebolla y un poquito de sal. Dejamos cocina hasta que ambos ingredientes queden bien sofritos.',
        'Limpiamos los frijoles (si son envasados) y los dejamos escurrir. Le añadimos el sofrito. Chafamos con la ayuda de un tenedor y añadimos pan rallado hasta obtener una mezcla consistente. Formamos bolas de 100gr. que luego chafaremos para darles la forma de hamburguesa.',
        'Para preparar la salsa, ponemos a calentar un poco de aceite en un cazo pequeño. Cuando esté caliente añadimos los tomates (incluyendo el líquido), el azúcar, la pimienta de cayena muy picada, el ajo picado, lo que nos queda de cebolla cortada en trozos pequeños, el orégano, el cilantro y un poquito de sal. Dejamos que se cocine a fuego lento hasta que la sala se reduzca y pierda casi todo el líquido. Cuando esté listo, trituraremos un poco los tomates en la misma cazuela. Introduciremos el pie de la trituradora, a velocidad mínima, tres o cuatro veces, lo justo para que el tomate quede cortado en trozos pequeños y quede una salsa grumosa.',
        'Preparamos nuestras hamburguesas a la sartén con muy poco aceite, lo justo para que no se peguen (podéis aprovechar lo que queda de preparar el sofrito). Antes de retirarlas del fuego, les pondremos encima una loncha de queso para que se funda. Para servir nuestras hamburguesas en el pan, las acompañaremos con un poco de salsa y unos jalapeños cortados en rodajas.',
      ],
      false,
      true,
      true,
      true
    ),
    new Meal(
      'm14',
      ['c6', 'c8', 'c10'],
      'Sushi',
      'caro',
      'media',
      'https://img-global.cpcdn.com/recipes/77972312febd8f58/640x640sq70/photo.webp',
      35,
      [
        '500 g. arroz para sushi ',
        '75 ml. (5 cucharaditas) vinagre de arroz',
        '15 ml. (1 cucharaditas) mirin.',
        '45 mg. ( 3 cucharaditas) azúcar',
        '30 mg. (2 cucharaditas) sal.',
        '300-400 g. atún fresquísimo previamente congelado',
        '300-400 g. salmón fresquísimo previamente congelado',
        '8 langostinos crudos',
        '1 pepino',
        '1-2 aguacates',
        '8 palitos cangrejo',
        'Salsa de soja',
        'Alga nori (unas 10 hojas)',
        'Wasabi',
        'Jengibre en conserva',
        'Sésamo tostado',
        'Huevas de salmón o trucha'
      ],
      [
        'Lo primero de todo es empezar lavando el arroz en un bol y debajo del chorro del grifo hasta que el agua salga totalmente clara y transparente. Colocar el arroz limpio en una bandeja extendido y dejar secar durante al menos 1 hora.',
        'Mientras tanto vamos preparando los otros ingredientes, pelamos el aguacate y lo cortamos, el pepino, los palitos de cangrejo. Colocamos en el lugar donde vamos a hacer nuestro sushi, todos los ingredientes y utensilios. Es muy importante que todo lo tengáis organizado y a mano para cuando empecéis sea más cómodo y rápido.',
        'Para cocer los langostinos, debéis quitarles la cabeza y con una brocheta de madera los ponéis derechos por la parte de arriba, de manera que cuando se cuezan queden un poco rectos, como veis en la foto',
        'Una vez cocidos durante 1 minuto los sacamos, los dejamos enfriar y sacamos la brocheta y pelamos dejándoles la colita. A continuación los abrimos por la parte de lo que sería su espalda sin llegar hasta el final y le quitamos (MUY IMPORTANTE) el intestino porque contiene arenilla y es muy desagradable al comerlo.',
        'Una vez tenemos los ingredientes preparados, intentamos mantener el pescado en frío, vamos a preparar el arroz.',
        'MODO DE PREPARACIÓN DEL ARROZ. Vamos midiendo el arroz con una taza que no sea muy grande, contamos las tazas que nos salen y lo ponemos en una olla, le añadimos la misma cantidad de agua que de arroz y un poco mas.',
        'Lo ponemos en el fuego, cuando está a punto de empezar a hervir, yo lo muevo con una cuchara de madera para que no se pegue en el fondo y luego ya no se mueve más, se tapa y se deja hervir a fuego fuerte unos 4 minutos y luego se baja y se deja hasta que haya absorbido todo el agua que será más o menos unos10 minutos. Apagamos el fuego y dejamos reposar unos 8 minutos más.',
        'Mientras tanto preparamos la mezcla de vinagre de arroz, mirin, azúcar y sal y la ponemos al fuego hasta que se disuelva y en caliente la vamos echando por encima del arroz a la vez que lo vamos moviendo con una espátula de madera, luego nos queda enfriarlo con un abanico o si tenéis un secador de pelo con aire frío, podéis ir separando los granos de arroz con la espátula a medida que vayáis secándolo. El arroz no debe quedar muy húmedo.',
        ' De igual manera que el maki pero el relleno lo vamos a extender de forma horizontal.',
        'Disponga el arroz encima del alga nori en sentido longitudinal, aquí podéis ponerle sésamo, huevas, sucedáneo de caviar, lo que queráis, coloque un papel film y ponga el arroz sobre el plástico nos quedará la parte contraria del alga y lo rellenaremos con lo que más nos guste, enrollarlo de manera que quede bien cerrado, apretar con el plástico como si de un caramelo se tratara.',
        'Moldee unos 30 mg. de arroz (2 cucharadas) de arroz en forma de bola, mas o menos el tamaño de una pelota de ping-pong. Abra la mano izquierda y coloque un trozo de pescado, póngale un poco de wasabi en el pescado y con la otra mano coloque la bola de arroz encima de la loncha, apriete un poco cerrando la mano con el puño. Una vez tengamos todos los rollitos y makis preparados vamos a ir cortándolos y es muy importante tener un buen cuchillo que lo mojaremos un poco con agua cada vez que cortemos. '
      ],
      false,
      false,
      false,
      false
    ),
  ];
  