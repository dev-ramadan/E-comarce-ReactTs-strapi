import { closeDrawer, selectDrawer } from "../../App/features/golbaleSlice";
import { useAppDispatch } from "../../App/Store";
import { useSelector } from "react-redux";
const Drawer = () => {
    const { isDrawerOpen } = useSelector(selectDrawer)
    const dispatch = useAppDispatch()
    return (
        <>
            {isDrawerOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => dispatch(closeDrawer())}
                />
            )}
            <div
                className={`fixed top-0 right-0 h-full  bg-indigo-600 w-96 shadow-lg z-50 transform ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300`}
            >
                <div className="p-4">
                    <button
                        className="p-1 text-gray-700"
                        onClick={() => dispatch(closeDrawer())}
                    >
                        ✖️ إغلاق
                    </button>
                    <ul className="mt-4 space-y-2">
                        <li>عنصر 1</li>
                        <li>عنصر 2</li>
                        <li>عنصر 3</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Drawer;
