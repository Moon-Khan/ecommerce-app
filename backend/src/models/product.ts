import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";


const Product = sequelize.define("Product", {
    title : {
        type: DataTypes.STRING,
        allowNull: false
    },
    price : {
        type: DataTypes.FLOAT,
        allowNull: false
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
    is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},
     {
        tableName: "Product",
        timestamps: true
    }
);

export default Product;
