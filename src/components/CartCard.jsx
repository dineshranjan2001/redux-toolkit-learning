import { IndianRupee, Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

const   CartCard = ({ item, handleDispatch,handleQuantityDispatch }) => {
  return (
    <>
      <div className="card grid grid-cols-10 items-center py-4 border-b border-b-gray-300 last:border-b-0">
        <div className="col-span-4 flex items-center gap-2.5 ">
          <img
            className="w-20 h-20 rounded-2xl object-contain"
            src={item?.thumbnail}
            alt="product-photo"
          />
          <div>
            <h4 className="text-xl text-gray-700 font-semibold">
              {item?.title}
            </h4>
            <span className="text-xs text-gray-500 font-medium">
              {item?.category}
            </span>
          </div>
        </div>
        <div className="col-span-3 ">
          <div className="inline-flex items-center border border-gray-600 rounded-full px-4 py-0.5 gap-3">
            <button 
            onClick={()=>handleQuantityDispatch(item,'increment')}
            className="cursor-pointer active:scale-90 hover:text-gray-900 text-gray-800">
              <Plus size={17} />
            </button>
            <span className="text-gray-800 font-medium">{item?.quantity ?? 1}</span>
            <button 
            onClick={()=>handleQuantityDispatch(item,'decrement')}
            className="cursor-pointer active:scale-90 hover:text-gray-900 text-gray-800">
              <Minus size={17} />
            </button>
          </div>
        </div>
        <div className="col-span-2">
          <h3 className="text-xl text-gray-700 font-semibold flex items-center gap-0.5">
            <IndianRupee size={19} className="pt-0.5" /> {((item?.price)* (item?.quantity ?? 1)).toFixed(2)}
          </h3>
        </div>
        <div className="col-span-1 text-right pr-7">
          <button
            onClick={() =>handleDispatch(item)}
            className="cursor-pointer text-gray-800 active:scale-90 hover:text-gray-900"
          >
            <Trash2 size={18} className="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCard;
