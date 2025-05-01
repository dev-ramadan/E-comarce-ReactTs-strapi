import SwiperSlider from "./HeroSection/Sliders/SwiperSlider"
import Main from "./MainSection/Main"
import Fasion from "./FasionSEation/Fasion"
import useProducts from "../../hooks/Prouduct"
import Cart from "../../UI/cart/Cart"
import { IProduct } from "@/Utils/intefaces"


const Home = () => {
  const { data, isLoading, isError, error } = useProducts();
  if(isLoading){
    return <div>loding...........</div>
  }
  if(isError){
    console.log(error)
  }
  return (
    <>
    <SwiperSlider/>
    <Main/>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4">
    {
      data? data.map((item:IProduct) => {
        const tumbnilUrl = item.image[0]?.formats.thumbnail.url
        const fullUrl = `${import.meta.env.VITE_SERVER_URL}${tumbnilUrl}`
        return (
          <Cart key={item.id} title={item.title} price={item.price} image={fullUrl}/>
        )
}) : ''
      }
      </div>        
    <Fasion/>
    </>
  )
}
export default Home