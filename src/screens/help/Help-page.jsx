import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
const Help = () => {
  return (
		<div>
			<Navbar />
			<div>
				<h1 className=' bg-white text-black  pl-16 h-14 font-bold text-2xl'>Help</h1>
				<div className='bg-help bg-  h-screen '>
					<h1>Welcome to Uber Support</h1>
					<p>How can we help?</p>
                  <div className='flex gap-12 mt-52  '>
                       <p className='bg-white w-36 h-40'>Riders</p>
                       <p  className='bg-white w-36 h-40'> Driving & <br/> Delivering </p>
                       <p  className='bg-white w-36 h-40'> Uber Eats</p>
                       <p className='bg-white w-36 h-40'> Merchants & <br/> Restaurants </p>
                       <p className='bg-white w-36 h-40'>Bikes & <br/> Scooters </p>
                       <p className='bg-white w-36 h-40'> Business</p>
                       <p className='bg-white w-36 h-40'>Freight</p> 
                    </div>
				</div>
			</div>

			<Footer />
		</div>
  );
}

export default Help