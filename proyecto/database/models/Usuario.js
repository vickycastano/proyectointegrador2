module.exports = function(sequelize, DataTypes){

    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true, 
            type: DataTypes.INTEGER.UNSIGNED
        },
        email: {
            type: DataTypes.STRING(50),
            
        },
        contraseña: {
            type: DataTypes.STRING(100),
            
        },
        fechaDeNacimiento: {
            type: DataTypes.DATE 
        },
        dni: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        fotoDePerfil: {
            type: DataTypes.STRING(100)
        },
        createdAt: {
            type: DataTypes.DATE 
        },
        updatedAt: {
            type: DataTypes.DATE 
        },
        deletedAt: {
            type: DataTypes.DATE 
        }
    };

    let config = {
        tableName: "usuarios",
        timestamps: true
    };

    let Usuario = sequelize.define(alias, cols, config);

// 1 a muchos 

    Usuario.associate = function(models) {
        Usuario.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "idUsuario"
        });

        Usuario.hasMany(models.Producto,{
            as: "productos",
            foreignKey: "usuario_id"
        })
    };

    return Usuario;
};
