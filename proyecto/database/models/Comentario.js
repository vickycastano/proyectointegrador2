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
        },
        textoComentario:{
            type: DataTypes.STRING(300)
        }
    };

let config ={
    tableName: "comentarios",
    timestamps: false,
    underscored: false,
}
    let Comentario = sequelize.define(alias, cols, config);

// muchos a uno 
    Comentario.associate = function(models) {
        Comentario.belongsTo(models.Producto, {
            as: "productos",
            foreignKey: "idPost"
        });

        Comentario.belongsTo(models.Usuario, {
            as: "usuarios",
            foreignKey: "idUsuario"
        });
    }

    return Comentario;
};
