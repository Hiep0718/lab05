export default function Foot(){
    return(
        <>
        <div className="flex w-full h-auto gap-4 bg-[#1d2228]">
            <div className="flex-2 p-4 text-white">
                <h2 className="font-bold">About Us</h2>
                <p>Welcome to our website, a wonderful place to explore and leam how to
                cook like a pro.</p>
                <div className="w-full">
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-110 p-2 pl-10 border-0 rounded-xl bg-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <button className="bg-[#f34e88] !important ml-8">Send</button>
                </div>
                <div className="w-full flex justify-between items-center mt-20">
                    <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505124/white_chefify_ib4lpe.png" alt="" />
                    <p>2023 Chefify Company</p>
                    <p>Terms of Servicel Privacy Policy</p>
                </div>
            </div>
            <div className="flex-1 p-4 text-white pl-10">
                <div className="w-full flex-col">
                    <div>
                        <h2 className="font-bold pl-20">Learn more</h2>
                        <p className="pl-20">Our Cook</p>
                        <p className="pl-20">See Our Features</p>
                        <p className="pl-20">FAQ</p>
                    </div>
                    <div className="mt-15 pl-20">
                        <h2 className="font-bold">Shop</h2>
                        <p>Gift Subscription</p>
                        <p>Send Us Feedback</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 p-4 pl-10 text-white flex flex-col justify-between">
                <h2 className="font-bold">Recipes</h2>
                <p>What to Cook This Week</p>
                <p>Pasta</p>
                <p>Dinner</p>
                <p>Healthy</p>
                <p>Vegetarian</p>
                <p>Vegan</p>
                <p>Christmas</p>
            </div>
        </div>
        </>
    )
}