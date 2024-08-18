import { Link, useParams } from "react-router-dom";
import { data } from "../utils/data";
const ProductDetails = () => {
  const { id: index } = useParams();
  const product = data[index];
  return (
    <div className="bg-zinc-500 min-h-[100vh] p-3 ">
      <Link
        className="fixed bg-red-500 left-20 top-[3px] text-red-50 px-3 py-2 rounded-md"
        to={"/products"}
      >
        back
      </Link>
      <div className="flex gap-10 mt-10 flex-wrap justify-center">
        <div className="flex bg-zinc-300 flex-col gap-1 rounded-sm w-[10rem] md:w-[15rem]">
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
                product.availability === "yes"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {product.availability === "yes" ? "instock" : "out of stock"}
            </span>
          </div>
        </div>
        <div className="bg-white w-full p-2">this is product description</div>
      </div>
    </div>
  );
};

export default ProductDetails;
