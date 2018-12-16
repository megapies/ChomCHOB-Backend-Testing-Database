const ItemStock = sequelize.define('ItemStock', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  item_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  code: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('READY', 'SOLD_OUT'),
    defaultValue: 'SOLD_OUT'
  }
})

ItemStock.associate = (models) => {
  models.ItemStock.belongsTo(models.Item, { foreignKey: 'item_id' })
}