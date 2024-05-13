const moduloDatos = {
    productos: [
        {
            id: 1,
            nombre: "Secador de pelo Remington Thermacare D12A negro 220V",
            descripcion: "Lo que tienes que saber de este producto: Si hay algo que no puede faltar en tu baño es un secador de pelo Remington Thermacare. En ondas, rulos, lacio, usalo como más te guste. Este producto se encargará de cuidar la salud de tu cabello y de crear el look perfecto para cada ocasión. Es pequeño, liviano y viene a completar tu set de belleza en el hogar",
            imagen: "/images/products/secadorpelo.webp",
            idUsuario: 1,
            comentarios: [
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Muy buen secador. Liviano. El sopleteo justo para tu peluquín. La temperatura tbn ideal.",
                    nombreUsuario: "laura.perez",
                    foto_Perfil: "ftp1.png"
                },
                {
                    id: 2,
                    idUsuario: 2,
                    texto: "Mi hija quedó feliz 😄 💕 😊.",
                    nombreUsuario: "juan.martinez",
                    foto_Perfil: "ftp3.png"
                },
                {
                    id: 3,
                    idUsuario: 3,
                    texto: "Muy buen producto!! funciona de diez, yo en lo personal lo primero que hago antes de comprar algo, es revisar los malos comentarios de cada producto y vi que este tenía pocos malos comentarios y le encare nomas , gracias a dios todo joya!! funciona de 10!!.",
                    nombreUsuario: "ana.lopez",
                    foto_Perfil: "ftp2.png"
                }
            ]
        },
        {
            id: 2,
            nombre: "Rizadora de Barril GAMA",
            descripcion: "25 mm de diametro color negro/rojo 110V/220V",
            imagen:"/images/products/BUCLERA.png",
            idUsuario: 1,
            comentarios: [
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Lo compre para usar a diario es buen producto y se lo regale a mi hija ya que la función cumple para trabajar profesionalmente! excelente ",
                    nombreUsuario: "laura.perez",
                    foto_Perfil: "ftp1.png"

                },
                {
                    id: 2,
                    idUsuario: 2,
                    texto: "Totalmente recomendable el producto.",
                    nombreUsuario: "juan.martinez",
                    foto_Perfil: "ftp3.png"

                },
                {
                    id: 3,
                    idUsuario: 3,
                    texto: "El producto es perfecto, lo unico malo es que la caja vino toda desarmada y super aplastada, un poco más y el producto estaba fuera de su caja. Entiendo que quizas en el viaje se pueda abrir si tambien llevan otros productos, pero al menos pongan cinta para que no se abra. Si uno compra algo se espera que la caja donde viene el producto también llegue en buenas condiciones.",
                    nombreUsuario: "carlos.rodriguez",
                    foto_Perfil: "ftp4.png"

                }
            ]
        },
        {
            id: 3,
            nombre: "Gama Planchita De Pelo Slice ceramic Shine Ion",
            descripcion: "Tecnología de vanguardia. Sus placas de ceramico facilitan el alisado y te ayudarán a conseguir un lacio perfecto, como recién salido de la peluquería.",
            imagen:"/images/products/PLANCHITA.png",
            idUsuario: 1,
            comentarios: [
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "La mejor compra que hice chicas",
                    nombreUsuario: "ana.lopez",
                    foto_Perfil: "ftp2.png"

                },
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Excelente planchado, en dos pasadas ya me deja lacio hermoso y tengo el pelo con ondas. Es cómoda, había leído que se calentaba mucho el plástico y no me parece así, o sea si se calienta pero no al nivel de largar olor y quemarte. Es larga por lo tanto mechón que agarre mechón que lo plancha genial. Realmente estoy enamorada de lo práctica que es. Ahora solo espero que dure porque es muy linda.",
                    nombreUsuario: "carlos.rodriguez",
                    foto_Perfil: "ftp4.png"

                },
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "La planchita es altamente valorada por su capacidad de calentar rápido y dejar el pelo perfecto en pocas pasadas. Los usuarios destacan su excelente calidad, su practicidad y lo liviana que es, facilitando su uso. Además, se menciona que es muy buena para controlar el frizz y que las placas dejan el cabello suave y brillante. Es considerada una opción recomendable por su relación calidadprecio.",
                    nombreUsuario: "juan.martinez",
                    foto_Perfil: "ftp3.png"
                }
            ]
        },
        {
            id: 4,
            nombre: "Organizador de Maquillaje",
            descripcion: "Organizador con cajones. Ideal para tener todo tu maquillaje y cremas, ordenados en un solo lugar. Está hecho de material acrílico muy resistente y mucho más fuerte que el vidrio. Duradero y moderno.",
            imagen: "/images/products/organizadormkp.png",
            idUsuario: 1,
            comentarios: [
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Es hermoso, me encanto el material y el modelo, súper práctico.",
                    nombreUsuario: "carlos.rodriguez",
                    foto_Perfil: "ftp4.png"

                },
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Me sirvió para lo que quería, que es ordenar mi maquillaje, cremas, etc. Pero no es para muchas cosas, en mi caso tengo lo justo y necesario y entra perfecto. Si bien no es mal producto, creo que el precio no es acorde ya que no es la mejor calidad.",
                    nombreUsuario: "maria.gonzalez",
                    foto_Perfil: "ftp5.png"

                },
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Era para mi novia y le gustó mucho.",
                    nombreUsuario: "laura.perez",
                    foto_Perfil: "ftp1.png"

                }
            ]
        },
        {
            id: 5,
            nombre: "Alfaparf Milano",
            descripcion: "Este shampoo de alta calidad, libre de sulfatos, está especialmente diseñado para limpiar y nutrir tu cabello, devolviéndole su vitalidad y brillo natural.",
            imagen: "/images/products/shampoo.png",
            idUsuario: 1,
            comentarios: [
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Me lo recomendó mi estilista. Es la segunda vez q lo compro. Tengo el pelo procesado x la decoloración, y este combo me deja divino el pelo. Lo recomiendo =).",
                    nombreUsuario: "juan.martinez",
                    foto_Perfil: "ftp3.png"

                },
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Me dejo el pelo sedoso y brillante. 10/10",
                    nombreUsuario: "ana.lopez",
                    foto_Perfil: "ftp2.png"

                },
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Feliz con los resultados",
                    nombreUsuario: "carlos.rodriguez",
                    foto_Perfil: "ftp4.png"

                }
            ]
        },
        {
            id: 6,
            nombre: "L'oréal Professionnel Serie",
            descripcion: "Cuidá tus mechas rubias con Blondifier Gloss Shampoo, un shampoo con sistema de reparación e iluminación.",
            imagen: "/images/products/acondicionador.png",
            idUsuario: 1,
            comentarios: [
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Excelente producto, lastima que para nosotros este bastante caro. Pero dura bastante, solo se usa poca cantidad para obtener un buen lavado. Lo volvería a comprar.",
                    nombreUsuario: "maria.gonzalez",
                    foto_Perfil: "ftp5.png"

                },
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Es muy buen producto, marca y calidad!!!.",
                    nombreUsuario: "laura.perez",
                    foto_Perfil: "ftp1.png"

                },
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Buenisimo producto",
                    nombreUsuario: "juan.martinez",
                    foto_Perfil: "ftp3.png"

                }
            ]
        },
        {
            id: 7,
            nombre: "Dyson",
            descripcion: "Si hay algo que no puede faltar en tu baño es un secador de pelo Dyson Supersonic. En ondas, rulos, lacio, usalo como más te guste. Este producto se encargará de cuidar la salud de tu cabello y de crear el look perfecto para cada ocasión. Es pequeño, liviano y viene a completar tu set de belleza en el hogar.",
            imagen: "/images/products/dyson.png",
            idUsuario: 1,
            comentarios: [
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Dónde estuvo éste secador toda mí vida?",
                    nombreUsuario: "carlos.rodriguez",
                    foto_Perfil: "ftp4.png"

                },
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Me dejó el pelo mejor de lo que me dejan en la pelu, incluso ni planchita hizo falta, cero frizz, una sublime suavidad.",
                    nombreUsuario: "ana.lopez",
                    foto_Perfil: "ftp2.png"

                },
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Seca rápido, no hace casi ruido, es liviano, cable bien largo. Larga vida al marciano soplapelo!.",
                    nombreUsuario: "laura.perez",
                    foto_Perfil: "ftp1.png"
                }
            ]
        },
        {
            id: 8,
            nombre: "Lipgloss",
            descripcion: "¡Glossy, juicy, plumpy, baby! Logra ese brillo voluminoso con It-gloss, ahora en colores audaces que rellenan los labios con un color brillante en barra. Estos tonos seductores se deslizan de forma vibrante y se funden de forma neutra para unos labios nutridos e hidratados con volumen.",
            imagen: "/images/products/lipgloss.png",
            idUsuario: 1,
            comentarios: [
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Notás la boca más hinchada. Si estás buscando eso, es una buena opción. El efecto es súper glossy. ",
                    nombreUsuario: "maria.gonzalez",
                    foto_Perfil: "ftp5.png"

                },
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Es una propuesta original porque realmente voluminiza y es muy brillante, pero precio-calidad no convence tanto.",
                    nombreUsuario: "juan.martinez",
                    foto_Perfil: "ftp3.png"
                },
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Recomiendo utilizar algún aceite antes (yo uso de rosa mosqueta) o cualquier hidratante, y luego poner el producto distribuyéndolo por fuera de los bordes para que haga el efecto voluminizador y no se resequen los labios.",
                    nombreUsuario: "carlos.rodriguez",
                    foto_Perfil: "ftp4.png"

                }
            ]
        },
        {
            id: 9,
            nombre: "Maquina de afeitar",
            descripcion: "Con esta multigroomer de OM disfrutar de un producto de calidad, cuyos resultados estéticos son excelentes, es posible. Gracias a su funcionalidad podrás relucir el look que más te guste.",
            imagen: "/images/products/maquina-de-afeitar.png",
            idUsuario: 1,
            comentarios: [
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Bastante bueno, más teniendo en cuenta el precio. No le tenía mucha fe, no les voy a mentir.",
                    nombreUsuario: "laura.perez",
                    foto_Perfil: "ftp1.png"

                },
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Buenisima",
                    nombreUsuario: "ana.lopez",
                    foto_Perfil: "ftp2.png"

                },
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Se me rompio a la semana",
                    nombreUsuario: "maria.gonzalez",
                    foto_Perfil: "ftp5.png"

                }
            ]
        },
        {
            id: 10,
            nombre: "Serum",
            descripcion: "Este serum antiarrugas es el 1er tratamiento antiedad que repara las arrugas y las rellena, promoviendo la producción de colágeno gracias al ácido hialurónico.",
            imagen: "/images/products/serum.png",
            idUsuario: 1,
            comentarios: [
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Tengo la piel mas brillante que nunca. ",
                    nombreUsuario: "carlos.rodriguez",
                    foto_Perfil: "ftp4.png"

                },
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Un poco caro, pero vale cada centavo, excelente producto.",
                    nombreUsuario: "juan.martinez",
                    foto_Perfil: "ftp3.png"

                },
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Me noto 10 años mas joven",
                    nombreUsuario: "ana.lopez",
                    foto_Perfil: "ftp2.png"

                }
            ]
        },
        
    ],

   // Array de usuarios
   usuarios: [
    {
        id: 1, // ID del usuario
        username: "maria.gonzales",
        email: "maria.gonzales@example.com",
        contrasenia: "contrasenia1",
        fotoPerfil: "/images/users/ftp5.png",
        createdAt: "2000-01-01 00:00:00",
        updatedAt: "2024-04-12 10:32:57",
        deletedAt: ""
    },
    {
        id: 2, // ID del usuario
        username: "juan.martinez",
        email: "juan.martinez@example.com",
        contrasenia: "contrasenia2",
        fotoPerfil: "/images/users/ftp3.png",
        createdAt: "2000-01-01 00:00:00",
        updatedAt: "2024-04-12 10:32:57",
        deletedAt: ""
    },
    {
        id: 3, // ID del usuario
        username: "ana.lopez",
        email: "ana.lopez@example.com",
        contrasenia: "contrasenia3",
        fotoPerfil: "/images/users/ftp2.png",
        createdAt: "2000-01-01 00:00:00",
        updatedAt: "2024-04-12 10:32:57",
        deletedAt: ""
    },
    {
        id: 4, // ID del usuario
        username: "carlos.rodriguez",
        email: "carlos.rodriguez@example.com",
        contrasenia: "contrasenia4",
        fotoPerfil: "/images/users/ftp4.png",
        createdAt: "2000-01-01 00:00:00",
        updatedAt: "2024-04-12 10:32:57",
        deletedAt: ""
    },
    {
        id: 5, // ID del usuario
        username: "laura.perez",
        email: "laura.perez@example.com",
        contrasenia: "contrasenia5",
        fotoPerfil: "/images/users/ftp1.png",
        createdAt: "2000-01-01 00:00:00",
        updatedAt: "2024-04-12 10:32:57",
        deletedAt: ""
    },
    {
        id: 6, // ID del usuario
        username: "carla.aloy",
        email: "carla.aloy@example.com",
        contrasenia: "contrasenia6",
        fotoPerfil: "./images/users/default-image.png",
        createdAt: "2000-01-01 00:00:00",
        updatedAt: "2024-04-12 10:32:57",
        deletedAt: ""
    },
    {
        id: 7, // ID del usuario
        username: "susana.garcia",
        email: "susana.garcia@gmail.com",
        contrasenia: "contrasenia7",
        fotoPerfil: "./images/users/default-image.png",
        createdAt: "2000-01-01 00:00:00",
        updatedAt: "2024-04-12 10:32:57",
        deletedAt: ""
    },
],
};
module.exports = moduloDatos; 