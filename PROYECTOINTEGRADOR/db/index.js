const moduloDatos = {
    productos: [
        {
            id: 1,
            idUsuarios: 1,
            comentarios: [
                {
                    id: 1,
                    idUsuarios: 1,
                    texto: "Mi primer comentario"

                }
            ]
        }
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