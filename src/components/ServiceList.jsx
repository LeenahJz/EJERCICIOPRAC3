import React from "react";

const ServiceList = ({ services }) => {
    return (
        <div className="bg-blue-950 text-white py-12 px-6">
            <h2 className="text-4xl font-bold text-center text-blue-300 mb-10">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-8 p-4">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white text-blue-900 font-bold p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
                    >
                        <h3 className="font-bold text-xl">{service.name}</h3>
                        <p className='text-blue-800'>{service.prev}</p>
                    </div>
                ))}
            </div>
        </div>

    )
};


export default ServiceList;
