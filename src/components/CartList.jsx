import { CartCard } from "./Index";

const CartList = ({ cartItems, handleDispatch,handleQuantityDispatch }) => {
  return (
    <>
      <div className="grid grid-cols-10 pb-4 border-b border-b-gray-300">
        <h5 className="col-span-4 text-gray-700 font-medium">Product Code</h5>
        <h5 className="col-span-3 text-gray-700 font-medium">Quantity</h5>
        <h5 className="col-span-2 text-gray-700 font-medium">Total</h5>
        <h5 className="col-span-1 text-gray-700 font-medium text-right">
          Action
        </h5>
      </div>
      <div>
        {cartItems?.length === 0 ? (
          <div className="flex justify-center items-center h-25">
            <h2 className="text-2xl text-gray-600 font-semibold">
              No Items added yet.
            </h2>
          </div>
        ) : (
          cartItems.map((item) => <CartCard
            key={item.id}
            item={item}
            handleDispatch={handleDispatch}
            handleQuantityDispatch={handleQuantityDispatch}
          />)
        )}
      </div>
    </>
  );
};

export default CartList;
