import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const AppointmentForm = ({ doctors }) => {
  const [formData, setFormData] = useState({
    patientName: "",
    doctorId: "",
    date: "",
    time: "",
  });

  const [appointments, setAppointments] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedDoctor = doctors.find(
        (doc) => doc.id === parseInt(formData.doctorId)
    );

    if (selectedDoctor) {
        const newAppointment = {
            id: appointments.length + 1,
            patientName: formData.patientName,
            doctor: selectedDoctor.name,
            date: formData.date,
            time: formData.time,
        };
        setAppointments([...appointments, newAppointment]);
        setFormData({ patientName: "", doctorId: "", date: "", time: "" });
    } else {
        alert("Invalid doctor selection.");
    }
};

  return (
    <div className="bg-blue-100 w-full text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
        Schedule an Appointment
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-[600px] mx-auto bg-white text-blue-950 p-8 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="patientName"
            className="block text-blue-900 font-bold p-2 mb-4"
          >
            Full Name
          </label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            placeholder="Enter your Name"
            className="w-full px-4 py-2 bg-blue-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-bold mb-4 p-2 text-blue-900"
          >
            Select a doctor
          </label>
          <select
            name="doctorId"
            value={formData.doctorId}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-blue-200 text-blue-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="">Select a Doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name} - {doctor.specialty}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              className="block font-bold mb-4 p-2 text-blue-900"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-blue-200 border text-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label
              className="block font-bold mb-4 p-2 text-blue-900"
            >
              Time
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-blue-200 text-blue-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-300 text-blue-900 py-2 px-4 font-bold rounded-lg border-white hover:border-white hover:text-white hover:bg-blue-950 mb-2"
        >
          Submit
        </button>
      </form>
      {appointments.length > 0 && (
        <div className="mt-6">
          <h3 className="text-2xl font-bold text-blue-950 mb-4">
            Scheduled Appointments:
          </h3>
          <ul>
            {appointments.map((appointment) => (
              <li
                key={appointment.id}
                className="mb-2 p-2 bg-white text-blue-900 rounded shadow"
              >
                <strong>{appointment.patientName}</strong> with {" "}
                <strong>{appointment.doctor}</strong> on {" "}
                <strong>{appointment.date}</strong> at {" "}
                <strong>{appointment.time}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

AppointmentForm.propTypes = {
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      specialty: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AppointmentForm;
