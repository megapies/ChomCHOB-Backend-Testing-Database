const Promotion = sequelize.define('Promotion', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  item_sale_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  type: {
    type: Sequelize.ENUM('OVERRIDE', 'PERCENT'),
    defaultValue: 'OVERRIDE'
  },
  value: {
    type: Sequelize.DOUBLE,
  }
})

Promotion.associate = (models) => {
  models.Promotion.belongsTo(models.ItemSale, { foreignKey:'item_sale_id' })
}