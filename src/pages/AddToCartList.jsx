import { useDispatch, useSelector } from "react-redux";
import { CartList, OrderSummery } from "../components/Index";
import { decreaseQuantity, increaseQuantity, removeItem } from "../redux/slice";
import { useMemo, useState } from "react";

const AddToCartList = () => {
  const cartItems = useSelector((state) => state?.cart?.items)
  const dispatch = useDispatch();


  const handleDispatch = (item) => {
    dispatch(removeItem(item));
  }

  const handleQuantityDispatch = (item, actionType) => {
    (actionType === 'increment') ? dispatch(increaseQuantity(item)) : dispatch(decreaseQuantity(item));
  }

  // const handleQuantity = (id, actionType) => {
  //   setCartItems((prev) =>
  //     prev.map((item) => {
  //       if (item.id !== id) return item;

  //       return {
  //         ...item,
  //         quantity:
  //           actionType === "increment"
  //             ? (item?.quantity ?? 1) + 1
  //             : Math.max(1, item.quantity - 1),
  //       };
  //     })
  //   );
  // };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 px-5 mx-4 my-10 items-start">
        <div className="lg:col-span-5 px-5 pt-4 rounded-2xl border border-gray-300">
          <CartList cartItems={cartItems} handleDispatch={handleDispatch} handleQuantityDispatch={handleQuantityDispatch} />
        </div>
        <div className="lg:col-span-2 rounded-2xl border border-gray-300 px-5 pt-4 self-start">
          <OrderSummery cartItems={cartItems} />
        </div>
      </div>
    </>
  );
};

export default AddToCartList;
