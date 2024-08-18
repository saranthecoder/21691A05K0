import { useState } from "react";
import FilterBar from "../components/FilterBar";
import ProductCard from "../components/ProductCard";
import { data } from "../utils/data";
const AllProducts = () => {
    const [mydata,setMyData]=useState(data);
  return (
    <>
    <FilterBar products={mydata} setMyData={setMyData}/>
      <div className="flex w-[90%] mx-auto mt-2 gap-3 flex-wrap ">
        {mydata.length > 0 &&
          data.map((item, index) => {
            return <ProductCard key={index} product={item} index={index} />;
          })}
          {
            mydata.length ===0 && <div className="text-center mt-10 w-full">No products found.</div>
          }
      </div>
    </>
  );
};

export default AllProducts;
