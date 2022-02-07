const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    tag: {
      type: DataTypes.INTEGER,

    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;

/* 


Tag
    Doesn't allow null values

    Set as primary key

    Uses auto increment

    tag_name

    String

ProductTag

    id

    Integer

    Doesn't allow null values

    Set as primary key

    Uses auto increment

    product_id

    Integer

    References the product model's id

    tag_id

    Integer

    References the tag model's id

*/ 