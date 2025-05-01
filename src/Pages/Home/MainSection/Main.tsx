import './main.css'
interface IProps { }

const Main = ({ }: IProps) => {
    return (
        <>
            <div className="container mx-auto max-w-6xl p-4 space-y-6">
                <div className="flex flex-col md:flex-row-reverse items-center  p-4">
                    <img src="img/banner/banner-1.jpg" alt="" className="h-80 w-96 mr-20 object-cover panner" />
                    <div className="p-4 text-center md:text-left">
                        <h3 className="text-4xl  font-bold"><span className='md:block'>Clothing</span> Collections 2030</h3>
                        <a href="#" className="text-sm underline mt-2 inline-block border-line">Shop Now</a>
                    </div>
                </div>

                {/* العنصر الثاني */}
                <div className='lg:flex items-center justify-between panner-2'>
                    <div className="p-4 lg:relative bottom-24 panner scpanner" >
                        <img src="img/banner/banner-2.jpg" alt="" className=" object-cover sm:w-fit h-80" style={{ height: "30rem", width: "25rem" }} />
                        <div className="p-4 md:text-left text-center">
                            <h3 className="text-4xl  font-bold">Accessories</h3>
                            <a href="#" className="text-sm underline mt-2 inline-block border-line">Shop Now</a>
                        </div>
                    </div>


                    <div className="panner-child-2 sm:w-full lg:w-fit flex flex-col md:flex-row-reverse items-center  p-4 relative  w-fit panner h-fit panner">
                        <img src="img/banner/banner-3.jpg" alt="" className="h-80 object-cover md:w-auto lg:w-96" />
                        <div className="p-4 text-center md:text-left ml-9  lg:absolute -left-52">
                            <h3 className="text-4xl font-bold">Shoes Spring <span className='block'>2030</span></h3>
                            <a href="#" className="text-sm underline mt-2 inline-block border-line">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
export default Main