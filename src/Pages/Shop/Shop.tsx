import Cart from "../../UI/cart/Cart";
import useProducts from "../../hooks/Prouduct";
import { Link } from "react-router-dom"
import { IProduct } from "../../Utils/intefaces";
interface IProps {}
const Shop = ({} : IProps) => {
    const { data, isLoading, isError, error } = useProducts();
    if(isLoading){
      return <div>loding...........</div>
    }
    if(isError){
      console.log(error)
    }
  return (
    <>
<div className="container mx-auto mt-24 bg-gray-200 p-5 rounded-lg " >
<nav className="text-sm text-gray-600">
    <ol className="list-reset flex">
        <li>
            <Link to="/" className="hover:underline hover:text-blue-600">Home</Link>
        </li>
        <li>
            <span className="mx-2">/</span>
        </li>
        <li className="text-gray-800 font-semibold">
            Shop
        </li>
    </ol>
</nav>
</div>

    <div className="container mx-auto h-auto mt-24  grid grid-cols-1 lg:grid-cols-6">
    <div className="col-span-1 h-auto">
    <h1 className="font-bold mb-2">Category</h1>
    <ul className="space-y-1">
        <li className="cursor-pointer hover:text-blue-600 active:scale-95 transition">Item 1</li>
        <li className="cursor-pointer hover:text-blue-600 active:scale-95 transition">Item 2</li>
        <li className="cursor-pointer hover:text-blue-600 active:scale-95 transition">Item 3</li>
        <li className="cursor-pointer hover:text-blue-600 active:scale-95 transition">Item 4</li>
        <li className="cursor-pointer hover:text-blue-600 active:scale-95 transition">Item 5</li>
    </ul>
</div>
        <div className="col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
      data? data.map((item:IProduct) => {
        const tumbnilUrl = item.image[0]?.formats.thumbnail.url
        const fullUrl = `${import.meta.env.VITE_SERVER_URL}${tumbnilUrl}`
        return (
          <Cart key={item.id} documentId={item.documentId} id={item.id} qty={item.qty} description={item.description} url={item.url} title={item.title} price={item.price} image={fullUrl}/>
        )
}) : ''
      }
           
        </div> 

    </div>
    </>
  )
}
export default Shop