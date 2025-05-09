import SwiperSlider from "./HeroSection/Sliders/SwiperSlider"
import Main from "./MainSection/Main"
import Fasion from "./FasionSEation/Fasion"
import useProducts from "../../hooks/Prouduct"
import Cart from "../../UI/cart/Cart"
import { IProduct } from "@/Utils/intefaces"


const Home = () => {
  const { data, isLoading, isError, error } = useProducts();
  if(isError){
    console.log(error)
  }
  return (
    <>
      <SwiperSlider />
      <Main />
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {isLoading ? (
          [...Array(8)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse flex flex-col items-center border rounded-xl p-4 shadow"
            >
              <div className="bg-gray-300 h-40 w-full rounded mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
              <div className="h-6 bg-gray-400 rounded w-1/3"></div>
            </div>
          ))
        ) : data ? (
          data.map((item: IProduct) => {
            const tumbnilUrl = item.image[0]?.formats.thumbnail.url;
            const fullUrl = `${import.meta.env.VITE_SERVER_URL}${tumbnilUrl}`;
            return (
              <Cart
                key={item.id}
                documentId={item.documentId}
                id={item.id}
                qty={item.qty}
                description={item.description}
                url={item.url}
                title={item.title}
                price={item.price}
                image={fullUrl}
              />
            );
          })
        ) : (
          <div className="col-span-full text-center text-red-500">
            Failed to load products.
          </div>
        )}
      </div>
      <Fasion />
    </>
  );
  
}
export default Home