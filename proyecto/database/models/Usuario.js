module.exports = function(sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING
        }, 
        contraseña:{
            type:  dataTypes.STRING
        },
        fechaDeNacimiento: {
            type:dataTypes.DATE
        }, 
        dni: {
            type: dataTypes.INTEGER
        }, 
        fotoDePerfil: {
            type:dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        }, 
        updatedAt:{
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        },
    };

    let config = {
        tableName: "usuarios",
        timestamps: true
    };

    let Usuario = sequelize.define(alias, cols, config);

    
     Usuario.associate = function(models) {
       // uno a muchos 
        Usuario.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "idUsuario"
        });
        // uno a muchos 
        Usuario.hasMany(models.Producto,{
            as: "productos",
            foreignKey: "usuarioId"
        })
    };

    return Usuario;
};