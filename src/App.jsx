import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import DoctorCard from "./components/DoctorCard";
import ServiceList from "./components/ServiceList";
import AppointmentForm from "./components/AppointmentForm";
import Footer from "./components/Footer";

function App() {
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);
  const doctorRef = useRef();

  useEffect(() => {
    // Simula la carga de datos desde un API
    const fetchedDoctors = [
      { id: 1, name: "Dr. Joe Doe", specialty: "Cardiologist", experience: "12 years", image: "https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg" },
      { id: 2, name: "Dr. Jane Doe", specialty: "Dermatologist", experience: "8 years", image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=360" },
      { id: 3, name: "Dr. Sammy Smith", specialty: "Oncology", experience: "8 years", image: "https://img.freepik.com/foto-gratis/atractivo-profesional-medico-uniforme-pie-brazos-cruzados-contra-fondo-aislado_662251-416.jpg" },
      { id: 4, name: "Dr. Judy Doe", specialty: "Pediatrics", experience: "10 years", image: "https://i.pinimg.com/736x/c5/a3/90/c5a3904b38eb241dd03dd30889599dc4.jpg" },
      { id: 5, name: "Dr. Michael Johnson", specialty: "Gynecology", experience: "15 years", image: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg" },
      { id: 6, name: "Dr. Any Smith", specialty: "Gastroenterology", experience: "16 years", image: "https://t3.ftcdn.net/jpg/01/30/45/54/360_F_130455409_fTuinPO1LXECv5hlk9VBREnL6yowYUo3.jpg" }
    ];
    const fetchedServices = [
      { id: 1, name: "Cardiology:", prev: "\nComprehensive heart care by our experienced cardiologists." },
      { id: 2, name: "Dermatology", prev: "\nSkin care and treatments for common skin conditions." },
      { id: 3, name: "Pediatrics:", prev: "\nExperienced pediatricians treat children with complications and their families." },
      { id: 4, name: "Oncology:", prev: "\nOur oncologists specialize in cancer care." },
      { id: 5, name: "Gynecology:", prev: "\nOur gynecologists provide comprehensive gynaecological care." },
      { id: 6, name: "Gastroenterology:", prev: "\nOur gastroenterologists specialize in gastric and duodenal diseases." }
    ];
    setDoctors(fetchedDoctors);
    setServices(fetchedServices);
  }, []);

  return (
    <React.Fragment>
      <div>
        <Navbar />
        <Homepage />
        <div id="doctors">
          <DoctorCard doctors={doctors} ref={doctorRef} />
        </div>
        <div id="services">
          <ServiceList services={services} />
        </div>
        <div id="schedule">
          <AppointmentForm doctors={doctors} />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;  