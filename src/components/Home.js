
function Home()
{
    return(
        <div className="flex-1 grid justify-items-center content-center">
            <div className="container mx-auto xl:px-32 text-center lg:text-left">
                <div className="grid lg:grid-cols-2 items-center">
                    <div className="mb-12 lg:mb-0">
                        <div className="relative block rounded-lg shadow-lg px-6 py-12 m-3 md:px-14 lg:-mr-14 backdrop-contrast-75 md:backdrop-hue-rotate-60 md:backdrop-saturate-0 md:backdrop-brightness-125 md:backdrop-blur-sm md:z-10">
                            <h2 className="text-3xl font-bold mb-4 display-5 text-yellow-500">Why prefer us?</h2>
                            <p className="text-gray-300 text-justify mb-12">
                                We offer the highest quality and widest range of style options on branded bags, backpacks, laptop bags, T-Shirts, Polo shirts, formal shirts, uniforms, School uniforms, socks and medical apparel.
                            </p>

                            <div className="grid md:grid-cols-3 gap-x-6">
                            <div className="mb-12 md:mb-0">
                                <h2 className="text-3xl font-bold text-white mb-4">Bags</h2>
                                <h5 className="text-lg font-medium text-gray-500 mb-0">Coolers</h5>
                            </div>

                            <div className="mb-12 md:mb-0">
                                <h2 className="text-3xl font-bold text-white mb-4">Reel</h2>
                                <h5 className="text-lg font-medium text-gray-500 mb-0">Drawstring bag</h5>
                            </div>

                            <div className="">
                                <h2 className="text-3xl font-bold text-white mb-4">Tactical</h2>
                                <h5 className="text-lg font-medium text-gray-500 mb-0">Riffle Bags </h5>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="block mb-6 md:mb-0">
                        <div className="w-full h-full rounded-full origin-center bg-slate-200 shadow-lg z-0">
                            <img src={`${process.env.PUBLIC_URL}/img/cooler3.svg`} className="origin-center rotate-[15deg] scale-105 z-20" alt="" />
                        </div>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default Home;