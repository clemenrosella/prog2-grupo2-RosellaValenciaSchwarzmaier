module.exports = function(sequelize, dataTypes){

    let alias = "Comment"

    let cols ={
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },

        texto_comentario:{
            type: dataTypes.STRING(500)
        },
        // createdAt:{
        //     type: dataTypes.DATE
        // },

        // updatedAt:{
        //     type: dataTypes.DATE
        // },

        // deletedAt:{
        //     type: dataTypes.DATE
        // },

        id_usuario:{
            type: dataTypes.INTEGER
        },

        id_producto:{
            type: dataTypes.INTEGER
        }
    }

    let config= {
        tableName: "comentarios",
        timestamps: false,
        underscored: true,
    }

    let Comment = sequelize.define(alias, cols, config)

    Comment.associate = function(models) {
        Comment.belongsTo(models.Product, {
            as: 'producto_comentario',
            foreignKey: 'id_producto'
        }), 
        Comment.belongsTo(models.User, {
            as: "usuario_comentario",
            foreignKey: "id_usuario"
        })
    }


    return Comment
}