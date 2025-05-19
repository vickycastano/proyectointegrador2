module.exports = function(sequelize, DataTypes){

    let alias = "Comentario"
    let cols={

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED
        },
        idPost:{
            //FOREIGNKEY: true, 
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        idUsuario:{
            //FOREIGNKEY: true, 
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        createdAt:{
            type: DataTypes.DATE 
        },
        updatedAt:{
            type: DataTypes.DATE 
        },
        deletedAt:{
            type: DataTypes.DATE 
        },



    }
let config ={
    tableName: "comentarios",
    timestamps: false,
    //underscored: true,
}

let Comentario = sequelize.define(alias,cols,config);

// contraparte 
Comentario.associate = function(models) {
    Comentario.belongsTo(models.Producto, {
        as: "producto",           
        foreignKey: "idPost"
    });
};

return Comentario 
}