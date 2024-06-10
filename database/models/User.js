module.exports = function(sequelize, dataTypes){

    let alias = "User"

    let cols ={
        id: {
            autoIncrenent: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email: {
            type: dataTypes.STRING(500)
        },
        contraseña: {
            type: dataTypes.STRING(500)
        },
        fecha: {
            type: dataTypes.DATE
        },
        dni: {
            type:dataTypes.INTEGER
        },
        foto_de_perfil:{
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        },
        deleatedAt: {
            type: dataTypes.DATE
        },
    }

    let config= {
        tableName: "usuarios",
        timestamps: true,
        underscored: true,
    }

    let User = sequelize.define(alias, cols, config)
    
    User.associate = function(models) {
        User.hasMany(models.Product, {
            as: 'productos_usuario',
            foreignKey: 'id_usuario'
        }),
        User.hasMany(models.Comment, {
            as:'comentarios_usuario',
            foreignKey: 'id_producto'
        })
    }
    return User

}