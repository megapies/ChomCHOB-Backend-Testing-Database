const ItemSale = sequelize.define('ItemSale', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  start_date: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  end_date: {
    type: Sequelize.DATE,
    allowNull: true,
  }
})

ItemSale.associate = (models) => {
  models.ItemSale.hasMany(models.ItemSaleMap, { foreignKey: 'item_sale_id' })
  models.ItemSale.hasMany(models.Promotion, { foreignKey: 'item_sale_id' })
}