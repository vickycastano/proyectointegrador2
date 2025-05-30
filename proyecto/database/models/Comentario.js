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

  
    Comentario.associate = function(models) {
         // muchos a uno 
        Comentario.belongsTo(models.Producto, {
            as: "productos",
            foreignKey: "idPost"
        });
        // muchos a uno 
        Comentario.belongsTo(models.Usuario, {
            as: "usuarios",
            foreignKey: "idUsuario"
        });
    }
    
    return Comentario;
}