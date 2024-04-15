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
    ]
};

module.exports = moduloDatos; 