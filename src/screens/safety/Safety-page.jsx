import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import { AiFillCar } from "react-icons/ai";
import { GiSteeringWheel } from "react-icons/gi";
const SafetyImage =
  "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1554939474/assets/c9/190147-2ad1-446c-a2c8-144f373a67dc/original/UberIM_010182_3x2.jpg";
  const DriverSafety =
		"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1554950718/assets/29/f92bd4-4ae0-461b-b7ec-206e111e2afe/original/2up-%281%29.jpg";
 
    const RiderSafety =
		"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1554950662/assets/97/86dc41-26b0-41bd-910a-db682021cb9f/original/2_up%282%29.jpg";
const partner =
	"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1555364496/assets/19/af3712-6675-4e5a-8682-de2df750ad07/original/default.jpg";



const Safety = () => {
  return (
		<div>
			<Navbar />

			{/* FIRST SECTION***************************************** */}

			<div className="flex  pl-24 pr-16 pt-12">
				<div className="w-1/2">
					<p className="text-5xl font-bold text-gray-700 flex-col flex  pt-12">
						Our commitment
						<span className="pt-4 pb-12">to safety</span>
					</p>
					<p className=" text-gray-900  flex flex-col text-lg">
						We want you to move freely, make the most of your time,
						and
						<span>
							be connected to the people and places that matter
							most to
						</span>
						<span>
							you. That’s why we are committed to safety, from the
							creation
						</span>
						<span>
							of new standards to the development of technology
							with the
						</span>
						aim of reducing incidents.
					</p>
				</div>
				<div className="w-1/2">
					<img src={SafetyImage} alt="" />
				</div>
			</div>

			{/* SECOND SECTION***************************************** */}

			<div className=" pl-24 pt-48">
				<p className="text-4xl font-bold text-gray-900 flex-col flex  ">
					Helping to keep each other safe during
					<span className="pt-4 pb-7">COVID-19</span>
				</p>
				<p className=" text-gray-800  flex flex-col text-lg">
					We’re actively monitoring the coronavirus (COVID-19)
					situation and are continually working to help
					<span>
						keep those who rely on our platform healthy and safe.
					</span>
				</p>
				<div className="flex gap-12 mt-8 text-lg  ">
					<p>Go to Uber’s COVID-19 hub</p>
					<p>Read about our new Door-to-Door Safety Standard</p>
				</div>
			</div>

			{/* THIRD SECTION***************************************** */}

			<div className="pl-24 mt-28 pr-20">
				<div>
					<p className=" text-4xl    text-gray-800  font-bold">
						How safety is built into your experience
					</p>
				</div>
				<div className="flex  mt-8 gap-6  pb-16">
					<div>
						<p className="pt-3 pb-3 font-bold text-xl  text-gray-800">
							Safety features in the app
						</p>
						<p className=" text-gray-800">
							Share your trip details with loved ones. Track your
							trip during your ride. Our technology helps put
							peace of mind at your fingertips.
						</p>
					</div>
					<div>
						<p className="pt-3 pb-3 font-bold text-xl  text-gray-800">
							An inclusive community
						</p>
						<p className="  text-gray-800">
							Millions of riders and drivers share a set of
							Community Guidelines, holding each other accountable
							to do the right thing.
						</p>
					</div>
					<div>
						<p className="pt-3 pb-3 font-bold text-xl  text-gray-800">
							Support at every turn
						</p>
						<p className="  text-gray-800">
							A specially trained team is available 24/7. Reach
							them in the app, day or night, with any questions or
							safety concerns.
						</p>
					</div>
				</div>
			</div>

			{/* FOURTH SECTION***************************************** */}
			<div className=" pl-24 pr-16">
				<div>
					<p className=" text-4xl  mb-10 mt-20  text-gray-700  font-bold">
						Building safer journeys for everyone
					</p>
				</div>
				<div className="flex">
					<div className="  w-1/2">
						<img src={DriverSafety} alt="" />
						<p className="text-xl mt-4">Driver safety</p>
						<p className=" mt-3 mb-6   text-gray-700 flex flex-col">
							Count on 24/7 support to help with any questions or
							safety concerns. Share
							<span>
								your trip with loved ones. Our focus is on your
								safety, so you can go where
							</span>
							the opportunity is.
						</p>

						<p className="text-lg">Learn more</p>
					</div>
					<div className=" w-1/2">
						<img className="" src={RiderSafety} alt="" />
						<p className="text-xl mt-4">Rider safety</p>
						<p className="mt-3 mb-6  text-gray-700  flex flex-col">
							Millions of rides are requested every day. Every
							rider has access to safety
							<span>
								features built into the app. And every ride has
								a support team if you
							</span>
							need them.
						</p>

						<p className="text-lg">Learn more</p>
					</div>
				</div>
			</div>

			{/* FIFTH SECTION***************************************** */}

			<div className="bg-blue-600 h-64 mt-16 text-white pl-24 pt-16 ">
				<p className="flex flex-col text-xl ">
					“Every day, our technology puts millions of people together
					in cars in cities around the world. Helping keep people safe
					is a huge
					<span>responsibility and one we do not take lightly.”</span>
				</p>
				<p className="text-lg mt-6">Dara Khosrowshahi, Uber CEO</p>
			</div>

			{/* SIXTH SECTION***************************************** */}

			<div className="flex    pl-24 pr-16 pt-16 mb-20">
				<div className="w-1/2 ">
					<img src={partner} alt="" />
				</div>
				<div className="w-1/2 pl-16">
					<p className="text-4xl font-bold text-gray-700 flex-col flex  pt-12">
						Partnering to make a
						<span className="pt-4 pb-12">difference</span>
					</p>
					<p className=" text-gray-800  flex flex-col text-lg ">
						Our commitment to safety goes beyond your ride. We have
						<span>
							teamed up with leading experts—from public safety
							officials
						</span>
						<span>
							to anti-violence organizations—to help make roads
							and cities
						</span>
						safer for all.
					</p>

					<p className="text-lg mt-6">Learn more</p>
				</div>
			</div>

			{/* SEVENTH SECTION***************************************** */}

			<div className="flex gap-52 pl-24  pt-24 pb-32">
				<div>
					<p className="text-3xl">
						<GiSteeringWheel />
					</p>

					<p className="pt-3 pb-3 font-bold text-xl  text-gray-800">
						Driver safety
					</p>
					<p className="pb-7 text-lg text-gray-700">
						Drive when and where you want with confidence.
					</p>
					<p className="  text-gray-800 text-xl"> Learn more</p>
				</div>
				<div>
					<p className="text-3xl">
						<AiFillCar />
					</p>

					<p className="pt-3 pb-3 font-bold text-xl  text-gray-800">
						Rider safety
					</p>
					<p className="pb-7  text-lg text-gray-700">
						Go anytime and get there comfortably.
					</p>
					<p className="  text-gray-800 text-xl">Learn more</p>
				</div>
			</div>

			{/* EIGHTH SECTION***************************************** */}

			<div className="pl-24 pb-16  text-gray-800  ">
				<p>
					*Certain requirements and features vary by region and may be
					unavailable.
				</p>
			</div>
			<Footer />
		</div>
  );
}

export default Safety