import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { routes } from "../routes/routes";
import { NavLink } from "react-router-dom";

const AddToCart = () => {
  const itemCount = useSelector((state) => state?.cart?.itemCount);
  const cartRoute = routes.find((route) => route?.name === "Cart Details");
  return (
    <>
      <NavLink to={cartRoute?.path} className={`relative`}>
        <ShoppingCart size={22} />
        <span className="absolute bg-red-500 rounded-full w-full h-full p-3 text-xs flex justify-center items-center font-semibold -top-3 left-3">
          {itemCount}
        </span>
      </NavLink>
    </>
  );
};

export default AddToCart;
