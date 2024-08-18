/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const ProductCard = ({ product , index }) => {
    const navigate= useNavigate()
    const clickHandler = () =>{
        navigate(`/product/${index}`)
    }
  return (
    <div className="flex bg-zinc-300 flex-col gap-1 rounded-sm w-[10rem] md:w-[15rem]"
    onClick={clickHandler}
    >
      <div className="flex justify-between p-2">
        <span>discount : {product.discount}%</span>
        <span>rating : {product.rating}</span>
      </div>
      <img src="/image.png" alt="productimage" />
      <div className="text-center font-semibold">{product.productName}</div>
      <div className="flex justify-between px-2 py-2">
        <span>💲{product.price}</span>
        <span
          className={`${
            product.availability === "yes" ? "text-green-500" : "text-red-500"
          }`}
        >
          {product.availability === "yes" ? "instock" : "out of stock"}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
