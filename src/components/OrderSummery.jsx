import { IndianRupee, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { vouchers } from "../utils/voucher";
import { DELIVERY_FEE } from "../utils/constants";

const OrderSummery = ({ cartItems }) => {
  const [voucherName, setVoucherName] = useState('');
  const [appliedVoucher, setAppliedVoucher] = useState(null);

  const deliveryFee = DELIVERY_FEE;

  // calculate the subtotal as per product selected
  const subTotal = useMemo(() => {
    return cartItems?.reduce((prev, item) => 
      prev + ((item?.price ?? 0) * (item?.quantity ?? 1)), 0) ?? 0;
  }, [cartItems]);


  // calculate the discount price based on the subtotal price and vouchers
  const discount = useMemo(() => {
    const percentage = appliedVoucher?.discountPercentage ?? 0;
    return {
      discountPercentage: percentage,
      discountPrice: (subTotal * percentage) / 100
    }
  }, [subTotal, appliedVoucher]);


  // calculate the total price
  const totalPrice = useMemo(() => {
    return ((subTotal - discount?.discountPrice) + deliveryFee);
  }, [subTotal, discount]);



  const handleVoucherDetails = (e) => {
    e.preventDefault();
    const voucher = vouchers?.find(
      (voucher) =>
        voucher?.name.toUpperCase() === voucherName.toUpperCase() && voucher?.isExpired === false,
    );

    if (!voucher) {
      setVoucherName('')
      setAppliedVoucher(null);
      alert("Invalid Voucher or already expired.");

    }
    setAppliedVoucher(voucher)
    setVoucherName('')
  };

  return (
    <>
      <div>
        {/* order herder section */}
        <div>
          <h3 className="text-gray-700 font-medium">Order Summery</h3>
        </div>
        {/* end order herder section */}

        {/* voucher section */}
        <div className="mt-8">

          <form
            onSubmit={handleVoucherDetails}
            className="grid grid-cols-6 gap-3 items-center"
          >
            <div className="col-span-4">
              <input
                value={voucherName}
                onChange={(e) => setVoucherName(e.target.value)}
                className="w-full border border-gray-400 outline-0 rounded-full px-6 py-2 text-gray-600 transition-all duration-200 focus:border-gray-200 focus:ring-1 focus:ring-gray-200"
                type="text"
                placeholder="Discount voucher"
              />
            </div>
            <div className="col-span-2">
              <button className="w-full border border-gray-400 outline-0 rounded-full  py-2 text-gray-400 font-medium cursor-pointer transition-all hover:border-gray-500 active:scale-x-90">
                Apply
              </button>
            </div>
          </form>
        </div>
        {/* end voucher section */}

        {/* subtotal, discount ,delivery fee and grand total section */}
        <div className="mt-7">
          <div className="flex justify-between pb-1">
            <h5 className="text-sm text-gray-500 font-medium">Sub Total</h5>
            <div className="flex items-center">
              <IndianRupee size={15} className="pt-0.5" />
              <h5 className="text-sm font-bold">{subTotal.toFixed(2)}</h5>
            </div>
          </div>
          <div className="flex justify-between pb-1">
            <h5 className="text-sm text-gray-500 font-medium">{`Discount(${discount?.discountPercentage}%)`}</h5>
            <div className="flex items-center">
              <IndianRupee size={15} className="pt-0.5" />
              <h5 className="text-sm font-bold">-{discount?.discountPrice.toFixed(2)}</h5>
            </div>
          </div>
          <div className="flex justify-between">
            <h5 className="text-sm text-gray-500 font-medium">Delivery fee</h5>
            <div className="flex items-center">
              <IndianRupee size={15} className="pt-0.5" />
              <h5 className="text-sm font-bold">{deliveryFee.toFixed(2)}</h5>
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <h5 className="text-sm text-gray-600 font-bold">Total</h5>
            <div className="flex items-center">
              <IndianRupee size={18} className="pt-0.5" />
              <h5 className="font-bold text-lg">{totalPrice.toFixed(2)}</h5>
            </div>
          </div>
        </div>
        {/* end subtotal, discount ,delivery fee and grand total section */}

        {/* return policy information section */}
        <div className="mt-7 flex gap-2 items-start">
          <div className="pt-1">
            <ShieldCheck size={20} />
          </div>
          <div>
            <p className="text-sm">
              <span className="font-bold  text-gray-800">
                90 Day Limited Warrenty{" "}
              </span>
              against manufacturer's defects{" "}
              <span className="font-bold  text-gray-800 underline">
                Details
              </span>
            </p>
          </div>
        </div>
        {/* end return policy information section */}

        {/* checkout button section  */}
        <div className="flex justify-center items-cente px-2 pb-4 pt-10">
          <button className="bg-black text-white font-semibold py-2 rounded-full w-full cursor-pointer active:scale-x-95 transition-all">
            Checkout Now
          </button>
        </div>
        {/* end checkout button section  */}
      </div>
    </>
  );
};

export default OrderSummery;
