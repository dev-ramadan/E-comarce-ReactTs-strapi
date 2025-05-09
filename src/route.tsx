import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layoyt from "./components/Layout/Layoyt";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import ProductDetails from "./Pages/Detils/Detils";
import Login from "./Pages/Login/Login";

const route = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<Layoyt/>}>
    <Route index element={<Home/>}/>
    <Route path="shop" element={<Shop/>}/>
    <Route path="product/:id" element={<ProductDetails/>}/>
    <Route path="login" element={<Login/>}/>
    </Route>
    </>
))
export default route