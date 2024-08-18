const express = require('express');
const dotenv = require('dotenv');
const productController = require('./src/controllers/productController');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/categories/:categoryName/products', productController.getTopProducts);
app.get('/categories/:categoryName/products/:productId', productController.getProductById);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
