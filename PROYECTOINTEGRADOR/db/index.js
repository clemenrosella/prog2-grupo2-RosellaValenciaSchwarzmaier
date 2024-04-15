const moduloDatos = {
    productos: [
        {
            id: 1,
            nombre: "Cafetera Moulineex",
            descripcion: "Este es nuestro primer post",
            imagen: "./images/products/img-cafetera-moulinex.jpg",
            idUsuario: 1,
            comentarios: [
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Mi primer comentario"

                }
            ]
        },
        {
            id: 2,
            nombre: "MacBook Pro",
            descripcion: "Este es nuestro segundo post",
            imagen:"./images/products/img-macbook-pro-2019.jpg",
            idUsuario: 1,
            comentarios: [
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Mi primer comentario"

                }
            ]
        },
        {
            id: 3,
            nombre: "Samsung Galaxy S10",
            descripcion: "Este es nuestro tercer post",
            imagen:"./images/products/img-samsung-galaxy-s10.jpg",
            idUsuario: 1,
            comentarios: [
                {
                    id: 1,
                    idUsuario: 1,
                    texto: "Mi primer comentario"

                }
            ]
        },
        {
            id: 4,
            nombre: "Samsung Smart Tv",
            descripcion: "Este es nuestro cuarto post",
            imagen: "./images/products/img-tv-samsung-smart.jpg",
            idUsuario: 1,
            comentarios: [
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