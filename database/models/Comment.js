module.exports = function(sequelize, dataTypes){

    let alias = "Comment"

    let cols ={
        id:{
            autoIncrement: true,
            primarKey: true,
            type: dataTypes.INTEGER,
        },

        texto_comentario:{
            type: dataTypes.STRING(500)
        },
        createdAt:{
            type: dataTypes.DATE
        },

        updatedAt:{
            type: dataTypes.DATE
        },

        deletedAt:{
            type: dataTypes.DATE
        },

        id_usuario:{
            type: dataTypes.INTEGER
        },

        id_producto:{
            type: dataTypes.INTEGER
        }
    }

    let config= {
        tableName: "comentario",
        timestamps:true,
        underscored: true,
    }

    let Comment = sequelize.define(alias, cols, config)
    return Comment

}