import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { CircleCheck, IndianRupee } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAll } from "../redux/slice";
import { removeAllOrders } from "../redux/orderSlice";

const OrderComfirmModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { orderItems, orderSummeries } = useSelector((state) => state?.orders);
  const dispatch=useDispatch();
  const handleContinue = () => {
    onClose();
    dispatch(removeAll());
    dispatch(removeAllOrders());
    navigate("/products");
  };

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={() => { }}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/40 transition duration-300 ease-out data-closed:opacity-0" aria-hidden="true">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full border border-gray-200  max-w-3xl rounded-2xl bg-gray-100 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 data-closed:scale-80
    data-closed:translate-y-6"
            >
              <DialogTitle
                as="h3"
                className="font-medium flex justify-center items-center flex-col pt-5 "
              >
                <CircleCheck size={80} className="text-green-500" />
                <span className="text-2xl text-gray-600">
                  Order Placed Successfully🎉
                </span>
              </DialogTitle>
              {/* product details */}
              <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory scrollbar-none max-w-4xl mx-auto w-full">

                {orderItems?.map((item,index) => (
                  <div key={index} className="w-full shrink-0 snap-center my-4 flex justify-between items-center bg-gray-100 px-4 py-3 rounded-2xl border border-gray-200">
                    <div className="flex gap-6 items-center">
                      <div className="overflow-hidden rounded-2xl">
                        <img
                          className="w-15 h-15 object-fill rounded-2xl "
                          src={item?.orderThumbnail}
                          alt="order-item-photo"
                        />
                      </div>
                      <div>
                        <h5 className="text-sm text-gray-600 font-medium capitalize">
                          {item?.orderCategory}
                        </h5>
                        <h5 className="text-sm font-bold text-gray-800">
                          {item?.orderTitle}
                        </h5>
                        <h5 className="text-sm text-gray-500 font-medium">
                          {item?.orderBrand}
                        </h5>
                      </div>
                    </div>
                    <div>
                      <h5 className="flex items-center text-sm font-bold text-gray-800">
                        <IndianRupee size={18} className="pt-1" />
                        {item?.orderPrice.toFixed(2)}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-100 px-4 py-3 rounded-2xl border border-gray-200">
                <div className="pt-1 pb-2  border-b border-b-gray-200">
                  <h4 className="font-bold text-gray-700 text-[1rem]">
                    Order Summary
                  </h4>
                </div>
                <div className="py-2">
                  {
                    orderSummeries.map((summary,index) => (
                      <>
                        <div key={index} className="flex justify-between pb-2">
                          <span className="text-gray-500 font-medium text-sm">Order ID</span>
                          <span className="text-gray-700 font-medium text-sm">
                            {summary?.orderId}
                          </span>
                        </div>
                        <div className="flex justify-between pb-2">
                          <span className="text-gray-500 font-medium text-sm">
                            Shipping Address
                          </span>
                          <span className="text-gray-700 font-medium text-sm">
                            {summary?.shippingAddress}
                          </span>
                        </div>
                        <div className="flex justify-between pb-2">
                          <span className="text-gray-500 font-medium text-sm">
                            Tracking ID
                          </span>
                          <span className="text-gray-700 font-medium text-sm">
                            {summary?.trackId}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 font-medium text-sm">
                            Estimated Delivery Date
                          </span>
                          <span className="text-gray-700 font-medium text-sm">
                            {summary?.extimateDeliveryDate}
                          </span>
                        </div>
                      </>
                    ))
                  }

                </div>
              </div>
              <div className="mt-4 flex justify-center items-center">
                <Button
                  className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-10 py-3 text-sm/6 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 cursor-pointer"
                  onClick={handleContinue}
                >
                  Continue Shopping
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default OrderComfirmModal;
