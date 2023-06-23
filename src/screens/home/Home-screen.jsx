import React from "react";
import { RiNewspaperLine } from "react-icons/ri";
import { BiHomeAlt } from "react-icons/bi";
import { IoMdPeople } from "react-icons/io";
import { HiOutlineArrowRight } from "react-icons/hi";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const uberimage ="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png"
const Home = () => {
	return (
        <div >
            <Navbar />
            <div className=" bg-bac ">
                
            </div>
			<div>
				<p className=" text-4xl pl-20 mb-8 mt-10  text-gray-700  font-bold">
					Focused on safety, wherever you go
				</p>
			</div>
			<div className="flex   ">
				<div className="pl-20   w-1/2">
					<img
						src={uberimage}
						alt=""
					/>
					<p className="text-2xl mt-4">
						Our commitment to your safety
					</p>
					<p className=" mt-6 mb-6 ">
						With every safety feature and every standard in our
						Community Guidelines, we're committed to helping to
						create a safe environment for our users.
					</p>
					<div className=" flex gap-7 ">
						<p>Read about our Community Guidelines</p>
						<p>See all safety features</p>
					</div>
				</div>
				<div className="pr-20 w-1/2">
					<img
						className=""
						src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png"
						alt=""
					/>
					<p className="text-2xl mt-4">
						Setting 10,000+ cities in motion
					</p>
					<p className="mt-6 mb-6 ">
						The app is available in thousands of cities worldwide,
						so you can request a ride even when you’re far from
						home.
					</p>

					<p>View all cities</p>
				</div>
			</div>
			<div className="flex pl-20 gap-4 pt-24 pb-16">
				<div>
					<p className="text-3xl">
						<IoMdPeople />
					</p>

					<p className="pt-3 pb-3 font-bold text-xl  text-gray-500">
						About us
					</p>
					<p className="pb-7 text-gray-700">
						Find out how we started, what drives us, and how we’re
						reimagining how the world moves.
					</p>
					<p className="  text-gray-700"> Learn more about Uber</p>
				</div>
				<div>
					<p className="text-3xl">
						<RiNewspaperLine />
					</p>

					<p className="pt-3 pb-3 font-bold text-xl  text-gray-500">
						Newsroom
					</p>
					<p className="pb-7  text-gray-700">
						See announcements about our latest releases,
						initiatives, and partnerships.
					</p>
					<p className="  text-gray-700">Go to Newsroom</p>
				</div>
				<div>
					<p className="text-3xl">
						<BiHomeAlt />
					</p>
					<p className="pt-3 pb-3 font-bold text-xl  text-gray-500">
						Global citizenship
					</p>
					<p className="pb-7  text-gray-700">
						Read about our commitment to making a positive impact in
						the cities we serve.
					</p>
					<p className="  text-gray-700">See our partnerships</p>
				</div>
			</div>
			<div className="bg-gray-100 pb-8   ">
				<p className=" text-4xl pl-20 pb-16 pt-12 text-gray-700  font-bold ">
					There’s more to love in the apps
				</p>
				<div className="flex w-full gap-12 pb-10">
					<div className="flex gap-5 bg-white w-1/2 h-50	 pl-8 ml-20">
						<div className="bg-black text-white w-40 mt-10 mb-9 font-bold text-5xl pt-9 pl-5 ">
							<p>Uber</p>
							<p>
								<HiOutlineArrowRight />
							</p>
						</div>
						<p className="mt-24 text-2xl font-bold ">
							Download the Driver app
						</p>
						<p className="mt-24  text-4xl">
							<HiOutlineArrowRight />
						</p>
					</div>
					<div className="flex gap-5 bg-white w-1/2 h-50 pl-8 mr-20 ">
						<div className="bg-black text-white w-40 mt-10 mb-9 font-bold text-5xl pt-12 pl-5 ">
							<p>Uber</p>
						</div>
						<p className="mt-24 text-2xl font-bold ">
							Download the Driver app
						</p>
						<p className="mt-24  text-4xl">
							<HiOutlineArrowRight />
						</p>
					</div>
				</div>
			</div>
			<div className="w-full flex  pl-20  h-44 ">
				<div className="text- font-bold flex gap-60 pt-10 w-1/2">
					<p className="text-4xl">Sign up to drive</p>
					<p className=" text-5xl ">
						<HiOutlineArrowRight />
					</p>
				</div>
				<div className="text- font-bold flex gap-60 pt-10 w-1/2">
					<p className="text-4xl">Sign up to drive</p>
					<p className=" text-5xl ">
						<HiOutlineArrowRight />
					</p>
				</div>
            </div>
            <Footer/>
		</div>
	);
};

export default Home;
