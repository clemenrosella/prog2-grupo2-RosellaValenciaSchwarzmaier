module.exports = function(sequelize, dataTypes){

    let alias = "Product"

    let cols ={
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER, 
         },

        imagen:{
            type: dataTypes.STRING
        },
        
        nombre:{
            type: dataTypes.STRING
        },

        descripcion:{
            type: dataTypes.STRING
        },

        id_usuario: {
            type: dataTypes.INTEGER //faltaba agregar esta de nuestra tabla sql al modelo. 
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

    }

    let config= {
        tableName: "productos",
        timestamps: true,
        underscored: true,
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.User, {
            as: "usuario_producto",
            foreignKey: "id_usuario"
        }),

        Product.hasMany(models.Comment, {
            as: "comentarios_producto",
            foreignKey: "id_producto",
        })
    }
    
    return Product

}