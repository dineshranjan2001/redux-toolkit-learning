import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { CircleCheck, IndianRupee } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrderComfirmModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleContinue = () => {
    onClose();
    navigate("/products");
  };

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={()=>{}}
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
                <h4 className="text-2xl text-gray-600">
                  Order Placed Successfully🎉
                </h4>
              </DialogTitle>
              {/* product details */}
              <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory scrollbar-none max-w-4xl mx-auto w-full">
                <div className="w-full shrink-0 snap-center my-4 flex justify-between items-center bg-gray-100 px-4 py-3 rounded-2xl border border-gray-200">
                  <div className="flex gap-6 items-center">
                    <div className="overflow-hidden rounded-2xl">
                      <img
                        className="w-15 h-15 object-fill rounded-2xl "
                        src="https://images.unsplash.com/photo-1622434641406-a158123450f9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2h8ZW58MHx8MHx8fDA%3D"
                        alt=""
                      />
                    </div>
                    <div>
                      <h5 className="text-sm text-gray-600 font-medium">
                        Watch
                      </h5>
                      <h5 className="text-sm font-bold text-gray-800">
                        Apple Watch
                      </h5>
                      <h5 className="text-sm text-gray-500 font-medium">
                        Apple
                      </h5>
                    </div>
                  </div>
                  <div>
                    <h5 className="flex items-center text-sm font-bold text-gray-800">
                      <IndianRupee size={18} className="pt-1" />
                      1300000
                    </h5>
                  </div>
                </div>
                <div className="w-full shrink-0 snap-center my-4 flex justify-between items-center bg-gray-100 px-4 py-3 rounded-2xl border border-gray-200">
                <div className="flex gap-6 items-center">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      className="w-15 h-15 object-fill rounded-2xl "
                      src="https://images.unsplash.com/photo-1622434641406-a158123450f9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2h8ZW58MHx8MHx8fDA%3D"
                      alt=""
                    />
                  </div>
                  <div>
                    <h5 className="text-sm text-gray-600 font-medium">Watch</h5>
                    <h5 className="text-sm font-bold text-gray-800">
                      Apple Watch
                    </h5>
                    <h5 className="text-sm text-gray-500 font-medium">Apple</h5>
                  </div>
                </div>
                <div>
                  <h5 className="flex items-center text-sm font-bold text-gray-800">
                    <IndianRupee  size={18} className="pt-1"/>
                    1300000
                  </h5>
                </div>
              </div>
              </div>

              <div className="bg-gray-100 px-4 py-3 rounded-2xl border border-gray-200">
                <div className="pt-1 pb-2  border-b border-b-gray-200">
                  <h4 className="font-bold text-gray-700 text-[1rem]">
                    Order Summary
                  </h4>
                </div>
                <div className="py-2">
                  <div className="flex justify-between pb-2">
                    <span className="text-gray-500 font-medium text-sm">Order ID</span>
                    <span className="text-gray-700 font-medium text-sm">
                      151345678901
                    </span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="text-gray-500 font-medium text-sm">
                      Shipping Address
                    </span>
                    <span className="text-gray-700 font-medium text-sm">
                      Garapur, Kendrapara, Odisha, 754211
                    </span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="text-gray-500 font-medium text-sm">
                      Tracking ID
                    </span>
                    <span className="text-gray-700 font-medium text-sm">
                      151345678901
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-medium text-sm">
                      Estimated Delivery Date
                    </span>
                    <span className="text-gray-700 font-medium text-sm">
                      15/07/2026 12:06 pm
                    </span>
                  </div>
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
