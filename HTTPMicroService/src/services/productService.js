const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const BASE_URL = process.env.API_BASE_URL;

const fetchTopProducts = async (
    company, categoryName, n, minPrice, maxPrice
) => {
    const url = `${BASE_URL}/companies/${company}/categories/${categoryName}/products?top=${n}&minPrice=${minPrice}&maxPrice=${maxPrice}`;

    try {
        const response = await axios.get(url, {
            Headers: {
                Authorization :`Bearer ${token}`
            },
        
        });

  
        return response.data;
    } catch (error) {
       
        console.error(`Error fetching top product: ${error.message}`);
        throw error;
    }
};

const fetchProductById = async (company, categoryName, productId, token) => {
    const url = `${BASE_URL}/companies/${company}/categories/${categoryName}/products/${productId}`;

    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching product by ID: ${error.message}`);
        throw error;
    }
};

module.exports = {
    fetchTopProducts,
    fetchProductById,
};
