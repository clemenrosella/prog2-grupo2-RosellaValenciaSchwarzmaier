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
            nombre: "Cafetera Moulineex",
            descripcion: "Este es nuestro segundo post",
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
            nombre: "Cafetera Moulineex",
            descripcion: "Este es nuestro tercer post",
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
            nombre: "Cafetera Moulineex",
            descripcion: "Este es nuestro cuarto post",
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