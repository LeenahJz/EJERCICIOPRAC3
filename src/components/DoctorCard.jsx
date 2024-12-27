import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";

const DoctorCard = forwardRef(({ doctors }, ref) => {
    const [selectedSpecialty, setSelectedSpecialty] = useState("All");

    //obteniendo todas las especialidades únicas
    const specialties = ["All", ...new Set(doctors.map((doctor) => doctor.specialty))];

    //filtrandp doctores por especialidad seleccionada
    const filteredDoctors =
        selectedSpecialty === "All"
            ? doctors
            : doctors.filter((doctor) => doctor.specialty === selectedSpecialty);

    return (
        <React.Fragment>
            <div className="m-auto px-6 py-12 bg-white">
                <h2 className="text-4xl font-bold text-center text-blue-500 py-2">
                    Our Specialists
                </h2>

                {/* Selector de Especialidad */}
                <div className="text-center my-6">
                    <label htmlFor="specialty-filter" className="text-blue-500 text-lg font-bold mr-3">
                        Filter by Specialty:
                    </label>
                    <select
                        id="specialty-filter"
                        value={selectedSpecialty}
                        onChange={(e) => setSelectedSpecialty(e.target.value)}
                        className="bg-blue-100 text-blue-500 border border-blue-400 rounded-lg p-2"
                    >
                        {specialties.map((specialty) => (
                            <option key={specialty} value={specialty}>
                                {specialty}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Cards de Doctores */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredDoctors.map((doctor, index) => (
                        <div
                            key={doctor.id}
                            ref={index === 0 ? ref : null}
                            className="flex flex-col items-center bg-blue-100 text-blue-500 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
                        >
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="object-cover w-64 h-64 rounded-full mb-4"
                            />
                            <h3 className="text-3xl font-bold text-blue-500 mt-4">{doctor.name}</h3>
                            <p className="text-xl text-blue-400 mt-2">
                                Specialty: {doctor.specialty}
                            </p>
                            <p className="text-xl text-blue-400">Experience: {doctor.experience}</p>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
});

DoctorCard.propTypes = {
    doctors: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            specialty: PropTypes.string.isRequired,
            experience: PropTypes.string,
            image: PropTypes.string,
        })
    ).isRequired,
};

export default DoctorCard;
