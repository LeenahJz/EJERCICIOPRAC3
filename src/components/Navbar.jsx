import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { BsHospitalFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    document.body.style.overflow = nav ? "scroll" : "hidden";
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setNav(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <div>
      <div>
        <div className='flex flex-row justify-between p-5 lg:px:32 px-5 bg-gradient-to-r from-blue-400 to-blue-100 shadow-[0_3px_10px_rgb(0,0,0,0,2)]'>
          <div className='flex flex-row items-center cursor-pointer gap-2'>
            <h1 className="text-white font-bold text-2xl z-20">HOSPITAL NCT</h1>
            
          </div>
          <nav className='hidden md:flex flex-row items-center text-lg fonr-medium gap-8'> 
            <Link to="home" spy={true} smooth={true} duration={500} className='text-white font-bold text-xl z-20 group relative inline-block cursor-pointer hover:text-blue-300'>Home<span className='absolute insert-x-0 bottom-0 h-0.5 bg-blue-950 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>
            <Link to="doctors" spy={true} smooth={true} duration={500} className='text-white font-bold text-xl z-20 group relative inline-block cursor-pointer hover:text-blue-300'>Doctors<span className='absolute insert-x-0 bottom-0 h-0.5 bg-blue-950 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>
            <Link to="services" spy={true} smooth={true} duration={500} className='text-white font-bold text-xl z-20 group relative inline-block cursor-pointer hover:text-blue-300'>Services<span className='absolute insert-x-0 bottom-0 h-0.5 bg-blue-950 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>
            <Link to="schedule" spy={true} smooth={true} duration={500} className='text-white font-bold text-xl z-20 group relative inline-block cursor-pointer hover:text-blue-300'>Book an Appointment<span className='absolute insert-x-0 bottom-0 h-0.5 bg-blue-950 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>
          </nav>
          <TiThMenu onClick={handleNav} className="z-20 text-blue-200 cursor-pointer" size={40} />
        </div>
        <div className="absolute w-full flex justify-between p-4 items-center">

          {/* <BsHospitalFill size={50} className="text-blue-200 font-bold" />  */}
          
          <div className={nav ? "ease-in duration-300 fixed text-blue-400 left-0 top-0 w-full h-screen bg-blue-950/80 px-4 py-7 flex-col z-10" : "absolute top-0 h-screen left-[-100%] ease-in duration-300 z-10"}>
            <ul className="flex flex-col fixed w-full h-full items-center justify-center">
              <li className="p-9"><button onClick={() => scrollToSection("home")} className="text-blue-300 font-bold text-4xl p-8 bg-blue-950/10">Home</button></li>
              <li className="p-9"><button onClick={() => scrollToSection("doctors")} className="text-blue-300 font-bold text-4xl p-8 bg-blue-950/10">Doctors</button></li>
              <li className="p-9"><button onClick={() => scrollToSection("services")} className="text-blue-300 font-bold text-4xl p-8 bg-blue-950/10">Services</button></li>
              <li className="p-9"><button onClick={() => scrollToSection("schedule")} className="text-blue-300 font-bold text-4xl p-8 bg-blue-950/10">Make an Appointment</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
