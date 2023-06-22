import React from "react";
import {
	RiFacebookLine,
	RiCopyrightFill,
	RiInstagramFill,
} from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { CiYoutube, CiLinkedin } from "react-icons/ci";
import { TfiApple } from "react-icons/tfi";



const Footer = () => {
	return (
		<div>
			<div className=" bg-black pl-24  h-full ">
				<div className="  pt-16 mb-16  text-white  ">
					<h1 className="  mb-9  text-2xl   ">uber</h1>
					<p className=" text-xl">Visit Help Center</p>
				</div>
				<div className=" flex  flex-row   gap-48 text-white">
					<div className="  flex  flex-col   gap-5">
						<p className=" text-2xl">Company</p>
						<p>About us</p>
						<p>Our offering</p>
						<p>Newsroom</p>
						<p>Investors</p>
						<p>Blog</p>
						<p>Careers</p>
						<p>AI</p>
						<p>Gift cards</p>
					</div>
					<div className=" flex  flex-col   gap-5 ">
						<p className=" text-2xl">Products</p>
						<p>Ride</p>
						<p>Drive</p>
						<p>Eat</p>
						<p>Uber Freight</p>
					</div>
					<div className=" flex  flex-col   gap-5 ">
						<p className=" text-2xl">Global citizenship</p>
						<p>Saftey</p>
						<p>Diversity and inclusion </p>
					</div>
					<div className=" flex  flex-col   gap-5 ">
						<p className=" text-2xl">Travel</p>
						<p>Airports</p>
						<p>Cities</p>
					</div>
				</div>

				<div className=" flex flex-row  gap-64 mt-12 ">
					<div className=" flex flex-row mr-48 gap-24 ">
						<p className=" icon bg-white">
							<RiFacebookLine />
						</p>
						<p className="  text-white">
							<FiTwitter />
						</p>
						<p className="  text-white">
							<CiYoutube />
						</p>
						<p className="  text-white">
							<CiLinkedin />
						</p>
						<p className=" text-white  ">
							<RiInstagramFill />
						</p>
					</div>
					<div className="  text-white flex flex-row gap-10">
						<p>English </p>
						<p>Dallas-Fort Worth</p>
					</div>
				</div>
				<div className="  pl-5 flex  gap-8  ">
					<div className=" border">
						<div className="  text-white">
							<p> Get it on</p>
							<p> Google Play</p>
						</div>
					</div>
					<div className=" flex border">
                        
                        <p> <TfiApple /></p>
						<div className="text-white">
							<p> Download on the</p>
							<p> Apple Store</p>
						</div>
					</div>
				</div>
				<div className=" mt-10 text-white flex flex-row gap-64 content-between">
					<div>
						<p className="mr-64">
							<RiCopyrightFill />
							2023 uber Technologies
						</p>
					</div>
					<div className="flex flex-row gap-5">
						<h3>Privacy</h3>
						<h3> Accessibility</h3>
						<h3> Terms</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
