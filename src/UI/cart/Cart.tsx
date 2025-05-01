interface IProps {
    title:string;
    desc?:string;
    image:string;
    price:number;
}
const Cart = ({title,price,image} : IProps) => {    
  return (
    <>

                <div className="lg:w-60 w-72 bg-white border rounded-lg overflow-hidden group relative shadow hover:shadow-lg transition mx-auto mt-10">
    {/* <!-- صورة المنتج --> */}
    <div className="relative">
        <img src={image} alt="Product" className="w-full h-52 object-cover" />

        {/* <!-- أيقونات تظهر عند الهوفر --> */}
        <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition">
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                ❤️
            </button>
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                🔄
            </button>
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                🔍
            </button>
        </div>
    </div>

    {/* <!-- محتوى البطاقة --> */}
    <div className="p-4">
        {/* <!-- Add to Cart يظهر عند الهوفر --> */}
        <p className="cursor-pointer text-red-500 text-sm font-semibold mb-1 opacity-0 group-hover:opacity-100 transition">
            + Add To Cart
        </p>
        <h6 className='font-semibold mb-1'>{title}</h6>
        {/* <!-- التقييم --> */}
        <div className="flex space-x-1 mb-1">
            ⭐ ⭐ ⭐ ⭐ ⭐
        </div>

        {/* <!-- السعر --> */}
        <p className="text-xl font-bold mb-2">
            ${price}
        </p>
    </div>
</div>



    </>
  )
}
export default Cart