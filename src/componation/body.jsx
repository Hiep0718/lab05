export default function  Body(){
    return(
        <>
        <div className="flex w-full bg-white h-auto">
            <div className="basis-1/3 flex-grow p-4">
                <div className="flex flex-col rounded-lg border border-gray-300">
                    <div className="flex p-2">
                        <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505100/list_filter_bsehsw.png" alt="" />
                        <h2 className="font-bold">FILTERS</h2>
                    </div>
                    <div className="flex justify-between p-2">
                        <h2 className="font-bold">Type</h2>
                        <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741504524/Chevron_up_large_1_r3cbbv.png" alt="" />
                    </div>
                    <div className="flex w-full">
                        <div className="basis-1/2 p-2 flex flex-col">
                            <div className="flex m-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505098/checkbox_qpprtn.png" alt="" />
                                <p>Pan-fried</p>
                            </div>
                            <div className="flex m-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505099/checkboxpink_apf6vq.png" alt="" />
                                <p>Grilled</p>
                            </div>
                            <div className="flex m-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505098/checkbox_qpprtn.png" alt="" />
                                <p>Sauteed</p>
                            </div>
                            <div className="flex m-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505098/checkbox_qpprtn.png" alt="" />
                                <p>Steamed</p>
                            </div>
                        </div>
                        <div className="basis-1/2 p-2 flex flex-col">
                        <div className="flex m-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505098/checkbox_qpprtn.png" alt="" />
                                <p>Stir-fried</p>
                            </div>
                            <div className="flex m-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505099/checkboxpink_apf6vq.png" alt="" />
                                <p>Roasted</p>
                            </div>
                            <div className="flex m-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505098/checkbox_qpprtn.png" alt="" />
                                <p>Baked</p>
                            </div>
                            <div className="flex m-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505098/checkbox_qpprtn.png" alt="" />
                                <p>Stewed</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border-t border-gray-300">
                        <div className="flex justify-between p-2 ">
                            <h2 className="font-bold">Time</h2>
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741504524/Chevron_up_large_1_r3cbbv.png" alt="" />
                        </div>
                        <div className="flex justify-center"> 
                            <p className="mr-2.5">30 minutes</p>
                            <p className="ml-2.5">50 minutes</p>
                        </div>
                        <div className="flex justify-center">
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505095/slider_hxpbi2.png" alt="" />
                        </div>        
                    </div>
                    <div className="w-full border-t border-gray-300">
                        <div className="flex justify-between p-2">
                            <h2 className="font-bold">Rating</h2>
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741504524/Chevron_up_large_1_r3cbbv.png" alt="" />
                        </div>
                        <div className="flex p-2 justify-start">
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505098/checkbox_qpprtn.png" alt="" />
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505095/rating_5_v18c7m.png" alt="" />
                        </div>
                        <div className="flex p-2 justify-start">
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505098/checkbox_qpprtn.png" alt="" />
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505095/rating_4_ijq176.png" alt="" />
                        </div>
                        <div className="flex p-2 justify-start">
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505099/checkboxpink_apf6vq.png" alt="" />
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505095/rating_3_npohab.png" alt="" />
                        </div>
                        <div className="flex p-2 justify-start">
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505099/checkboxpink_apf6vq.png" alt="" />
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505095/rating_2_mornon.png" alt="" />
                        </div>
                        <div className="flex p-2 justify-start">
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505099/checkboxpink_apf6vq.png" alt="" />
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741504528/Rating_11_qvo2mq.png" alt="" />
                        </div>
                    </div>
                    <div className="w-full border-t border-gray-300 p-4">
                        <div className="w-full">
                            <button className="w-full border-0 bg-[#f34e88] text-white">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-2/3 flex-grow bg-red-500 p-4">Item 2</div>
        </div>
        </>
    )
}