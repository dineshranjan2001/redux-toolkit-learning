import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { useEffect } from "react";
import { ArrowUpRight, IndianRupee } from "lucide-react";
import { addItem, removeItem } from "../redux/slice";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productSelector = useSelector((state) => state.products.items);

  const cartSelector = useSelector((state) => state.cart.items);

  return (
    <>
      <div className="m-10 grid grid-cols-4 gap-6">
        {productSelector.map((product) => (
          <div
            className="w-80 min-h-115 rounded-2xl overflow-hidden  p-3 mb-8 flex flex-col justify-between border border-gray-300"
            key={product?.id}
          >
            <div>
              <div className="relative">
                <div className="absolute w-full z-10 p-1">
                  <div className="flex justify-between items-center">
                    <span
                      className={`${product?.stock === 0 ? "bg-red-400" : "bg-green-400 text-white"} font-semibold px-3 py-1 text-xs rounded-full`}
                    >
                      {product?.stock === 0 ? "Out of Stock" : "In Stock"}
                    </span>
                    <span className="bg-gray-200 font-semibold text-xs w-4 h-4 rounded-full flex justify-center items-center p-4">
                      {product?.brand?.match(/\b\w/g)?.join("") || "N/A"}
                    </span>
                  </div>
                </div>
                <img
                  className="w-full h-50 object-contain rounded-2xl bg-gray-50"
                  src={product?.thumbnail}
                  alt={product?.title}
                />
              </div>

              <div className="px-2 mt-6">
                <h2 className="font-bold text-lg">{product?.title}</h2>
                <h4 className="text-gray-500 capitalize">
                  {product?.category}
                </h4>
                <p className="text-gray-500 text-sm mt-1">
                  {product?.description}
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-auto pt-4">
              <span className="bg-gray-200 rounded-full px-5 py-1 text-sm font-semibold flex items-center gap-1">
                <IndianRupee size={12} className="mt-0.5" />
                {product?.price}
              </span>
              {
                <button
                  onClick={() =>
                    cartSelector.find((cart) => cart?.id === product?.id)? dispatch(removeItem(product)) :dispatch(addItem(product)) 
                    
                  }
                  className={`flex gap-3 items-center ${cartSelector.find((cart) => cart?.id === product?.id) ? "bg-red-500 hover:bg-red-700 active:scale-95 transition-all cursor-pointer " : "bg-black hover:bg-gray-900 active:scale-95 transition-all cursor-pointer "}  text-white text-sm font-semibold rounded-full px-5 py-1.5`}
                >
                  {cartSelector.find((cart) => cart?.id === product?.id) ? (
                    <span>Remove from Cart</span>
                  ) : (
                    <span>Add to Cart</span>
                  )}
                  <ArrowUpRight
                    size={17}
                    className="bg-white text-black rounded-full"
                  />
                </button>
              }
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
