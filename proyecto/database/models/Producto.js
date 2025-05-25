module.exports = function(sequelize, dataTypes) {
    let alias = "Producto";
  
    let cols = {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
      },
      usuarioId: {
        type:dataTypes.INTEGER
      },
      imagenDelProducto: {
        type:dataTypes.STRING
      },
      nombreDelProducto:{
        type: dataTypes.STRING
      },
      descripcion: {
        type:dataTypes.STRING
      },
      createdAt: {
        type:dataTypes.DATE
      },
      updatedAt: {
        type:dataTypes.DATE
      }, 
      deletedAt: {
        type: dataTypes.DATE
      },
    };
  
    let config = {
      tableName: "productos",
      timestamps: true
    };
  
    const Producto = sequelize.define(alias, cols, config);

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
  