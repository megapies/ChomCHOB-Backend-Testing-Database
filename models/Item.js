const Item = sequelize.define('Item', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  detail: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  start_date: {
    type: Sequelize.DATE,
  },
  end_date: {
    type: Sequelize.DATE
  },
  limit_type: {
    type: Sequelize.ENUM('LIMIT', 'UNLIMIT')
  },
  limit: {
    type: Sequelize.INTEGER,
  },
  stock_type: {
    type: Sequelize.ENUM('IN_STOCK', 'CREATE_ON_USE'),
  }
})

Item.associate = (models) => {
  models.Item.hasMany(models.ItemStock, { foreignKey: 'item_id' })
  models.Item.hasMany(models.ItemSaleMap, { foreignKey: 'item_id' })
}