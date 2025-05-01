interface IProps {}

const Fasion = ({} : IProps) => {

  return (
    <>
<div className="container mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-2 p-4">
    {/* <!-- شبكة الصور --> */}
    <div className="grid grid-cols-1 md:grid-cols-3  lg:col-span-2">
        <div className="">
            <img src="img/instagram/instagram-1.jpg" alt="" className="w-full h-48 object-cover sm:object-center" />
        </div>
        <div className="">
            <img src="img/instagram/instagram-2.jpg" alt="" className="w-full h-48 object-cover" />
        </div>
        <div className="">
            <img src="img/instagram/instagram-3.jpg" alt="" className="w-full h-48 object-cover" />
        </div>
        <div className="">
            <img src="img/instagram/instagram-4.jpg" alt="" className="w-full h-48 object-cover" />
        </div>
        <div className="">
            <img src="img/instagram/instagram-5.jpg" alt="" className="w-full h-48 object-cover " />
        </div>
        <div className="">
            <img src="img/instagram/instagram-6.jpg" alt="" className="w-full h-48 object-cover" />
        </div>
    </div>

    {/* <!-- النص الجانبي --> */}
    <div className="p-4 flex flex-col justify-center">
        <h1 className="font-bold text-2xl mb-14">Instagram</h1>
        <p className="text-sm mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h1 className="text-red-500 font-mono text-3xl">
            #Male_Fashion
        </h1>
    </div>
</div>

    </>
  )
}
export default Fasion