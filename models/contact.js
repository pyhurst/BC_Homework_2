module.exports = function(sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.BIGINT,
      type: DataTypes.STRING,
      details: DataTypes.STRING(1234)
    });
  
    return Author;
};