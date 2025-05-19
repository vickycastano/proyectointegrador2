module.exports = function(sequelize, DataTypes){

    let alias = "Usuario"
    let cols={

         id: {
            autoIncrement: true,
            primaryKey: true, 
            type: DataTypes.INTEGER.UNSIGNED
        },
        email:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        contraseña:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        fechaDeNacimiento:{
            type: DataTypes.DATE 
        },
        dni:{
            type: DataTypes.INTEGER.UNSIGNED
        },
        fotoDePerfil:{
            type: DataTypes.STRING(100)
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
    tableName: "usuarios",
    timestamps: false,
    underscored: true,
}


let Usuario = sequelize.define(alias,cols,config);
return Usuario 
}