'use strict';
module.exports = (sequelize, DataTypes) => {
  const BalanceUpdate = sequelize.define(
    'BalanceUpdate',
    {
      amount: DataTypes.DECIMAL,
      date: DataTypes.DATEONLY
    },
    {}
  );
  BalanceUpdate.associate = function(models) {
    this.belongsTo(models.Investment);
  };
  return BalanceUpdate;
};
