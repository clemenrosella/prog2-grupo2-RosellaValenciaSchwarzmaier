const moduloDatos = {
    productos: [
        {
            id: 1,
            nombre: "Secador de pelo Remington Thermacare D12A negro 220V",
            descripcion: "Lo que tienes que saber de este producto: Si hay algo que no puede faltar en tu baño es un secador de pelo Remington Thermacare. En ondas, rulos, lacio, usalo como más te guste. Este producto se encargará de cuidar la salud de tu cabello y de crear el look perfecto para cada ocasión. Es pequeño, liviano y viene a completar tu set de belleza en el hogar",
            imagen: "./images/products/secadorpelo.webp",
            idUsuario: 1,
            comentarios: [
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Muy buen secador. Liviano. El sopleteo justo para tu peluquín. La temperatura tbn ideal."

                },
                {
                    id: 2,
                    idUsuario: 2,
                    texto: "Mi hija quedó feliz 😄 💕 😊."
                },
                {
                    id: 3,
                    idUsuario: 3,
                    texto: "Muy buen producto!! funciona de diez, yo en lo personal lo primero que hago antes de comprar algo, es revisar los malos comentarios de cada producto y vi que este tenía pocos malos comentarios y le encare nomas , gracias a dios todo joya!! funciona de 10!!."
                }
            ]
        },
        {
            id: 2,
            nombre: "Rizadora de Barril GAMA",
            descripcion: "25 mm de diametro color negro/rojo 110V/220V",
            imagen:"./images/products/BUCLERA.png",
            idUsuario: 1,
            comentarios: [
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Mi primer comentario"

                },
                {
                    id: 2,
                    idUsuario: 2,
                    texto: "Mi primer comentario"

                },
                {
                    id: 3,
                    idUsuario: 3,
                    texto: "Mi primer comentario"

                }
            ]
        },
        {
            id: 3,
            nombre: "Gama Planchita De Pelo Slice ceramic Shine Ion",
            descripcion: "Este es nuestro tercer post",
            imagen:"./images/products/PLANCHITA.png",
            idUsuario: 1,
            comentarios: [
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Mi primer comentario"

                },
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Mi primer comentario"

                },
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Mi primer comentario"
                }
            ]
        },
        {
            id: 4,
            nombre: "Organizador de Maquillaje",
            descripcion: "Este es nuestro cuarto post",
            imagen: "./images/products/organizadormkp.png",
            idUsuario: 1,
            comentarios: [
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Mi primer comentario"

                },
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Mi primer comentario"

                },
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Mi primer comentario"

                }
            ]
        },
        
    ],
    usuarios: [
        {
            id: 1, 
            productos: [
                {
                    id: 1,
                }
            ]
        }
    ],

   // Array de usuarios
   usuarios: [
    {
        id: 1, // ID del usuario
        username: "username1",
        email: "email@gmail.com",
        contrasenia: "user1234",
        fotoPerfil: "./images/users/default-image.png",
        createdAt: "2000-01-01 00:00:00",
        updatedAt: "2024-04-12 10:32:57",
        deletedAt: ""
    },
    {
        id: 2, // ID del usuario
        username: "username2",
        email: "email@gmail.com",
        contrasenia: "user1234",
        fotoPerfil: "./images/users/default-image.png",
        createdAt: "2000-01-01 00:00:00",
        updatedAt: "2024-04-12 10:32:57",
        deletedAt: ""
    },
    {
        id: 3, // ID del usuario
        username: "username3",
        email: "email@gmail.com",
        contrasenia: "user1234",
        fotoPerfil: "./images/users/default-image.png",
        createdAt: "2000-01-01 00:00:00",
        updatedAt: "2024-04-12 10:32:57",
        deletedAt: ""
    },
    {
        id: 4, // ID del usuario
        username: "username4",
        email: "email@gmail.com",
        contrasenia: "user1234",
        fotoPerfil: "./images/users/default-image.png",
        createdAt: "2000-01-01 00:00:00",
        updatedAt: "2024-04-12 10:32:57",
        deletedAt: ""
    },
    {
        id: 5, // ID del usuario
        username: "username5",
        email: "email@gmail.com",
        contrasenia: "user1234",
        fotoPerfil: "./images/users/default-image.png",
        createdAt: "2000-01-01 00:00:00",
        updatedAt: "2024-04-12 10:32:57",
        deletedAt: ""
    },
    {
        id: 6, // ID del usuario
        username: "username6",
        email: "email@gmail.com",
        contrasenia: "user1234",
        fotoPerfil: "./images/users/default-image.png",
        createdAt: "2000-01-01 00:00:00",
        updatedAt: "2024-04-12 10:32:57",
        deletedAt: ""
    },
    {
        id: 7, // ID del usuario
        username: "username7",
        email: "email@gmail.com",
        contrasenia: "user1234",
        fotoPerfil: "./images/users/default-image.png",
        createdAt: "2000-01-01 00:00:00",
        updatedAt: "2024-04-12 10:32:57",
        deletedAt: ""
    },
    {
        id: 8, // ID del usuario
        username: "username8",
        email: "email@gmail.com",
        contrasenia: "user1234",
        fotoPerfil: "./images/users/default-image.png",
        createdAt: "2000-01-01 00:00:00",
        updatedAt: "2024-04-12 10:32:57",
        deletedAt: ""
    },
    {
        id: 9, // ID del usuario
        username: "username9",
        email: "email@gmail.com",
        contrasenia: "user1234",
        fotoPerfil: "./images/users/default-image.png",
        createdAt: "2000-01-01 00:00:00",
        updatedAt: "2024-04-12 10:32:57",
        deletedAt: ""
    },
    {
        id: 10, // ID del usuario
        username: "username10",
        email: "email@gmail.com",
        contrasenia: "user1234",
        fotoPerfil: "./images/users/default-image.png",
        createdAt: "2000-01-01 00:00:00",
        updatedAt: "2024-04-12 10:32:57",
        deletedAt: ""
    },
],
};
module.exports = moduloDatos; 