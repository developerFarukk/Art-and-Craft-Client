

const Futures = () => {
    return (
        <div>
            {/* Title */}
            <div>
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl animate__zoomIn font-extrabold text-white animate__wobble animate__animated animate__delay-1s animate__slow">Best Future</h1>
                    <p className="mb-5 text-xl font-semibold text-green-200 animate__backInRight animate__animated animate__delay-1s animate__slow">From as low as $10 per day with limited time offer discounts.</p>
                </div>
            </div>

            {/* Details */}
            <div>
                <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
                    <div className="container mx-auto space-y-12">
                        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                                <span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
                                <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                                <p className="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                                <button type="button" className="self-start">Action</button>
                            </div>
                        </div>
                        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                            <img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                                <span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
                                <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                                <p className="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                                <button type="button" className="self-start">Action</button>
                            </div>
                        </div>
                        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src="https://source.unsplash.com/640x480/?3" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                                <span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
                                <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                                <p className="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                                <button type="button" className="self-start">Action</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Futures;