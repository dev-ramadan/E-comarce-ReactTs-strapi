import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layoyt from "./components/Layout/Layoyt";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";

const route = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<Layoyt/>}>
    <Route index element={<Home/>}/>
    <Route path="shop" element={<Shop/>}/>

    </Route>
    </>
))
export default route