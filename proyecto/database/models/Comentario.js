module.exports=function(sequelize,dataTypes) {
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idPost: {
            type: dataTypes.INTEGER
        },
        idUsuario: {
            type: dataTypes.INTEGER
        },
        comentario: {
            type: dataTypes.STRING
        },
        createdAt:{
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }
    }

    let config = {
        tableName: "comentarios",
        timestamps: false
    };

    const Comentario = sequelize.define(alias, cols, config);

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
}