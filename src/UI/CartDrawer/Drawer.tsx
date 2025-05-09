import { closeDrawer } from "../../App/features/golbaleSlice";
import { RootState, useAppDispatch } from "../../App/Store";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { dicreseQty, increseQty, removeProduct, selectCart } from "../../App/features/ShopinCartSlice";
import { IProduct } from "../../Utils/intefaces";

const Drawer = () => {
  const isDrawerOpen = useSelector((state: RootState) => state.cartDrawer.isDrawerOpen);
  const dispatch = useAppDispatch();
  const { cartProducts } = useSelector(selectCart)
  return (
    <>


      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />


            <motion.div
              className="fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-4">
                <button
                  className="p-1 text-gray-700"
                  onClick={() => dispatch(closeDrawer())}
                >
                  ✖️ إغلاق
                </button>
                <ul className="mt-4 space-y-2">
                  {
                    cartProducts.map((product: IProduct) => (
                      <li key={product.id} className=" flex justify-between">
                        <div className="text-center w-fit">
                          <img src={product.image} alt="" />
                          <p className="">{product.title}</p>
                        </div>
                        <div className="flex flex-col justify-center">
                          <div className="flex justify-between flex-col"><p>Price : ${product.price}</p><p className="text-orange-400 text-lg mt-3">Quantity : {product.qty}</p></div>
                          <div className="flex justify-between">
                            <div className="flex flex-col">
                              <div className="flex justify-between">
                                <button className="bg-blue-500 p-1 rounded-full mb-2" onClick={() => dispatch(increseQty(product.id))}>+</button> <button  className="bg-blue-500 p-1 rounded-full mb-2" onClick={() => dispatch(dicreseQty(product.id))}>-</button>
                              </div>
                              <button className="border-none bg-red-700 p-1 rounded-md " onClick={() => dispatch(removeProduct(product.id))}>REMOVE</button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Drawer;
