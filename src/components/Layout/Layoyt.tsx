import { Outlet } from "react-router-dom"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import Drawer from "../../UI/CartDrawer/Drawer"

interface IProps {}

const Layoyt = ({} : IProps) => {

  return (
    <>
    <Nav/>
    <Drawer/>
    <Outlet/>
    <Footer/>
    </>
  )
}
export default Layoyt