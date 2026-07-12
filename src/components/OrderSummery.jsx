import { IndianRupee, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { vouchers } from "../utils/voucher";

const OrderSummery = ({ cartItems }) => {
  const [voucherName, setVoucherName] = useState('');
  const [discount, setDiscount] = useState({
    discountPercentage: 0,
    discountPrice: 0,
  });


  const subTotal = useMemo(() => {
    return cartItems?.reduce((prev, item) => prev + (item?.price || 0), 0) || 0;
  }, [cartItems]);




  const handleVoucherDetails = (e) => {
    e.preventDefault();
    const voucherDetails = vouchers?.find(
      (voucher) =>
        voucher?.name === voucherName && voucher?.isExpired === false,
    );
    console.log(voucherDetails);
    if (!voucherDetails) {
        setVoucherName('')
      alert("Invalid Voucher or already expired.");
      
    }
    setDiscount({
      discountPercentage: voucherDetails?.discountPercentage ?? 0,
      discountPrice:
        (subTotal * (voucherDetails?.discountPercentage ?? 0)) / 100,
    });
    setVoucherName('')
  };

  console.log(discount);

  return (
    <>
      <div>
        <div>
          <h3 className="text-gray-700 font-medium">Order Summery</h3>
        </div>
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

        <div className="mt-7">
          <div className="flex justify-between pb-1">
            <h5 className="text-sm text-gray-500 font-medium">Sub Total</h5>
            <div className="flex items-center">
              <IndianRupee size={15} className="pt-0.5" />
              <h5 className="text-sm font-bold">{subTotal}</h5>
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
              <h5 className="text-sm font-bold">50.00</h5>
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <h5 className="text-sm text-gray-600 font-bold">Total</h5>
            <div className="flex items-center">
              <IndianRupee size={20} className="pt-0.5" />
              <h5 className="font-bold text-lg">1850.00</h5>
            </div>
          </div>
        </div>

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

        <div className="flex justify-center items-cente px-2 pb-4 pt-10">
          <button className="bg-black text-white font-semibold py-2 rounded-full w-full cursor-pointer active:scale-x-95 transition-all">
            Checkout Now
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderSummery;
