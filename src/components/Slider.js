import React from 'react';




const Slider = () => {



    return (
        <div className='w-full bg-blue-400 flex items-center justify-center'>
            <div className=" w-full bg-blue-200">
                <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner relative w-full overflow-hidden">
                        <div className="carousel-item h-screen active relative float-left w-full">
                            <img
                                src="https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="block w-full"
                                alt="..."
                            />
                            <div className="carousel-caption bg-sky-800 opacity-80 py-72 flex flex-col items-center absolute text-center">
                                <div className=' mb-5 rounded-xl flex justify-center'>
                                    <h5 className="text-5xl w-11/12 rounded-full  py-10">Enjoy the profiteble opportunities of RealEstateApp</h5>
                                    {/* <p>Some representative placeholder content for the first slide.</p> */}
                                </div>
                                <div className='flex text-2xl w-2/4 justify-evenly'>
                                    <button className='bg-sky-600 hover:bg-sky-400 px-10 py-4 rounded-full'>Get Started</button>
                                    <button className='bg-sky-600 hover:bg-sky-400 px-10 py-4 rounded-full'>Sign In</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item h-screen relative float-left w-full">
                            <img
                                src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="block w-full"
                                alt="..."
                            />
                            <div className="carousel-caption bg-sky-800 opacity-80 py-72 flex flex-col items-center absolute text-center">
                                <div className=' mb-5 rounded-xl flex justify-center'>
                                    <h5 className="text-5xl w-11/12 rounded-full  py-10">Enjoy the profiteble opportunities of RealEstateApp</h5>
                                    {/* <p>Some representative placeholder content for the first slide.</p> */}
                                </div>
                                <div className='flex text-2xl w-2/4 justify-evenly'>
                                    <button className='bg-sky-600 hover:bg-sky-400 px-10 py-4 rounded-full'>Get Started</button>
                                    <button className='bg-sky-600 hover:bg-sky-400 px-10 py-4 rounded-full'>Sign In</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item h-screen relative float-left w-full">
                            <img
                                src="https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg"
                                className="block w-full"
                                alt="..."
                            />
                            <div className="carousel-caption bg-sky-800 opacity-60 py-72 flex flex-col items-center absolute text-center">
                                <div className=' mb-5 rounded-xl flex justify-center'>
                                    <h5 className="text-5xl w-11/12 rounded-full  py-10">Enjoy the profiteble opportunities of RealEstateApp</h5>
                                    {/* <p>Some representative placeholder content for the first slide.</p> */}
                                </div>
                                <div className='flex text-2xl w-2/4 justify-evenly'>
                                    <button className='bg-sky-600 hover:bg-sky-400 px-10 py-4 rounded-full'>Get Started</button>
                                    <button className='bg-sky-600 hover:bg-sky-400 px-10 py-4 rounded-full'>Sign In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>


        </div >





    )
}

export default Slider