const { Sequelize, Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {

    static associate(models) {
        Role.associate = (models) => {
            Role.hasMany(models.User, { foreignKey: 'RoleId' });
        };
    }
  }
  Role.init({
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};