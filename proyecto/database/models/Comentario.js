module.exports = function(sequelize, DataTypes){

    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED
        },
        idPost: {
            type: DataTypes.INTEGER.UNSIGNED,
            
        },
        idUsuario: {
            type: DataTypes.INTEGER.UNSIGNED,
            
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

let config ={
    tableName: "comentarios",
    timestamps: false,
    underscored: false,
}
    let Comentario = sequelize.define(alias, cols, config);


// uno a uno (un comentario le pertenece a un producto)
    Comentario.associate = function(models) {
        Comentario.belongsTo(models.Producto, {
            as: "producto",
            foreignKey: "idPost"
        }); 
    }
// uno a uno (un comentario le pertenece a un usuario )
    Comentario.associate = function(models){
         Comentario.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "idUsuario"
        });
    }

    return Comentario;
};
