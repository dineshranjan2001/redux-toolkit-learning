import { useDispatch, useSelector } from "react-redux";
import { CartList, OrderSummery } from "../components/Index";
import { removeItem } from "../redux/slice";

const AddToCartList = () => {

  const cartItems=useSelector((state)=>state?.cart?.items);
  const dispatch=useDispatch();

  const handleDispatch=(item)=>{
      dispatch(removeItem(item));
  }
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 px-5 m-10 items-start">
        <div className="lg:col-span-5 px-5 pt-4 rounded-2xl border border-gray-300">
          <CartList cartItems={cartItems} handleDispatch={handleDispatch}/>
        </div>
        <div className="lg:col-span-2 rounded-2xl border border-gray-300 px-5 pt-4 self-start">
          <OrderSummery cartItems={cartItems}/>
        </div>
      </div>
    </>
  );
};

export default AddToCartList;
