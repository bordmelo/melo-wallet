'use strict';
module.exports = (sequelize, DataTypes) => {
  const Investment = sequelize.define(
    'Investment',
    {
      name: DataTypes.STRING
    },
    {}
  );
  Investment.associate = function(models) {
    this.belongsTo(models.Broker);
    this.hasMany(models.Transaction);
    this.hasMany(models.BalanceUpdate);
  };
  return Investment;
};
