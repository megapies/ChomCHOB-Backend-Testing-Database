const ItemSaleMap = sequelize.define('ItemSaleMap', {
  item_sale_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  item_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  }
})

ItemSaleMap.associate = (models) => {
  models.ItemSaleMap.belongsTo(models.ItemSale, { foreignKey: 'item_sale_id' })
  models.ItemSaleMap.belongsTo(models.Item, { foreignKey: 'item_id' })
}