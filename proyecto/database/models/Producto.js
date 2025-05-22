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
        }
    };

    let config = {
        tableName: "productos",
        timestamps: false,
        underscored: false
    };

    let Producto = sequelize.define(alias, cols, config);

// uno a muchos (un producto tiene muchos comentarios)
    Producto.associate = function(models) {
        Producto.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "idPost"
        });
    };

    return Producto;
};
