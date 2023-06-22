import React from "react";
import {Link}  from "react-router-dom"
const Navbar = () => {
	return (
		<div className="  pl-16 pt-3 pb-5 mb-3 flex  gap-64 bg-black w-full">
			<div className="text-white flex gap-10 pr-64">
			
                <Link  to="/">	<p className=" text-2xl  ">Uber</p></Link>
                <Link to="/company">	<p className="pt-2">Company</p></Link>
                <Link to="/safety"><p className="pt-2">Safety</p></Link>
                <Link to="/help">  <p className="pt-2">Help</p></Link>
                
			</div>
			<div className="text-white flex gap-10 pt-2">
				<p>EN</p>
				<p>Products</p>
				<p>Login</p>
				<p className="bg-white h-7 w-20 pl-3 text-black">Sign up</p>
			</div>
		</div>
	);
};

export default Navbar;
