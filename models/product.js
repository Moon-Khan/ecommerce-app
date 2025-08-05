import { DataTypes } from "sequelize";
const sequelize = require('./index');

const Product = sequelize.define('Product', {
    title : {
        type: DataTypes.STRING,
        allowNUll: false
    },
    price : {
        type: DataTypes.FLOAT,
        allowNUll: false
    },
    description : {
        type: DataTypes.TEXT
    },
    category : {
        type : DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    rating_rate: {
        type: DataTypes.FLOAT
    },
    rating_count: {
        type: DataTypes.INTEGER
    },
},
     {
      timestamps: true
    }
);

module.exports = Product;