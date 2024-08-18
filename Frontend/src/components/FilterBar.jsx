/* eslint-disable react/prop-types */
import { data } from "../utils/data";

const FilterBar = ({ setMyData, products }) => {
  const changeHandler = (e) => {
    const searchTermRaw = e.target.value;
    const searchTerm = searchTermRaw.toLowerCase().trim(); // Process the search term

    console.log("Raw Search Term:", searchTermRaw);
    console.log("Processed Search Term:", searchTerm);

    if (searchTerm.length === 0) {
      setMyData(data);
      return;
    }

    // Filter products based on the processed search term
    const filteredProducts = products.filter((product) => {
      const productNameProcessed = product.productName.toLowerCase(); // Process product names
      return productNameProcessed.includes(searchTerm);
    });

    console.log("Filtered Products:", filteredProducts);

    // Update the displayed products
    setMyData(filteredProducts);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
  };

  return (
    <form className="p-2 bg-blue-300 text-center" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for products"
        className="p-2 rounded-sm"
        onChange={changeHandler}
      />
      <button className="bg-blue-500 rounded-md px-3 py-2 ml-2 text-white">
        Search
      </button>
    </form>
  );
};

export default FilterBar;
