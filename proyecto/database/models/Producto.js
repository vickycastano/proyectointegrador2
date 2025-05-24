module.exports = function(sequelize, DataTypes){

    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED 
        },
        imagenDelProducto: {
            type: DataTypes.STRING(50)
        },
        nombreDelProducto: {
            type: DataTypes.STRING(50)
        },
        descripcion: {
            type: DataTypes.STRING(300)
        },
        createdAt: {
            type: DataTypes.DATE 
        },
        updatedAt: {
            type: DataTypes.DATE 
        },
        deletedAt: {
            type: DataTypes.DATE 
        },
        usuarioId:{
            type: DataTypes.INTEGER
        }
    };

    let config = {
        tableName: "productos",
        timestamps: true
    };

    let Producto = sequelize.define(alias, cols, config);

//1 a muchos y muchos a 1 
    Producto.associate = function(models) {
        Producto.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "idPost"
        });

        Producto.belongsTo(models.Usuario,{
            as: "usuarios",
            foreignKey: "usuario_id"
        })
    };

    return Producto;
};
