import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    
    return (
        <div className='w-full mt-24 bg-blue-950 text-blue-200' py-2 px-2>
            <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-2 border-b-2 border-white py-8 px-4'>
                <div >
                    <h6 className='font-bold uppercase pt-2'>Services</h6>
                    <ul>
                        <li className='py-1'><a className='text-blue-200 hover:text-blue-400 inline-block' href="home">Home</a></li>
                        <li className='py-1'><a className='text-blue-200 hover:text-blue-400 inline-block' href="doctors">Doctors</a></li>
                        <li className='py-1'><a className='text-blue-200 hover:text-blue-400 inline-block' href="doctors">Services</a></li>
                        <li className='py-1'><a className='text-blue-200 hover:text-blue-400 inline-block' href="doctors">Book an Appointment</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold z-20 uppercase pt-2'>Contact</h6>
                    <ul>
                        <li className='py-1'>Phone: 123-456-7890</li>
                        <li className='py-1'>Email: info@example.com</li>
                        <li className='py-1'>Address: 123 Main St, City, State, ZIP</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-blue-200'>
                <p className='py-4'>©2024 Hospital NCT Website. All rights reserved.</p>
                <div className='flex justify-between sm:w-[300px-pt-4 px-2 gap-6 text-3xl'>
                    <FaFacebook size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitter size={30}/>
                </div>
            </div>

        </div>
    )
}
export default Footer;