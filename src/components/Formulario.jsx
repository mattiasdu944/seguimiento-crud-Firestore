
import React, { useState, useEffect } from "react";
import Error from "./Error";

import { db } from "../firebase";
import { doc, setDoc, getDocs,collection } from "firebase/firestore";
import { async } from "@firebase/util";

const Formulario = ({ setPacientes, pacientes, setPaciente, paciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  // Extraer valores del paciente DESDE EL BOTON EDITAR
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente])


  const showPaciente = async () => {
    // const docRef =  doc(db, "pacientes","euntbfnjwxul39hgxb3");
    // const docSnap = await getDoc(docRef);
    // console.log(docRef);
    const querySnapshot = await getDocs(collection(db, "pacientes"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }

  useEffect(() => {
    showPaciente();

  }, [])


  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const addPaciente = async (e) => {
    e.preventDefault();

    // VALIDACION DEL FORMULARIO
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Hay un campo vacio");
      setError(true);
      return;
    }

    setError(false);

    // creando objeto para pasar al arreglo de app
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };


    await setDoc(doc(db, "pacientes", generarId()), objetoPaciente);
    // console.log(objetoPaciente);
    // console.log(db);

    // if (paciente.id) {
    //   //EDITANDO REGISTRO
    //   objetoPaciente.id = paciente.id;

    //   // EDITAR PACIENTE EN EL ARREGLO
    //   const pacientesEditados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
    //   setPacientes(pacientesEditados);
    //   setPaciente({});

    // } else {
    //   //NUEVO REGISTRO  
    //   objetoPaciente.id = generarId();
    //   setPacientes([...pacientes, objetoPaciente]);


    // }

    // REINICIAR EL FORM
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDACION DEL FORMULARIO
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Hay un campo vacio");
      setError(true);
      return;
    }

    setError(false);

    // creando objeto para pasar al arreglo de app
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };



    if (paciente.id) {
      //EDITANDO REGISTRO
      objetoPaciente.id = paciente.id;

      // EDITAR PACIENTE EN EL ARREGLO
      const pacientesEditados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
      setPacientes(pacientesEditados);
      setPaciente({});

    } else {
      //NUEVO REGISTRO  
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);


    }

    // REINICIAR EL FORM
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg text-center mt-5 mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold ">Administrarlo</span>
      </p>

      <form
        // onSubmit={handleSubmit}
        onSubmit={addPaciente}
        className="bg-white shadow-md rounded-lg py-7 px-5 mb-10"
      >
        {error && <Error>Todos los campos son obligatorios</Error>}

        {/* registrar nombre de la mascota */}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        {/* registrar al propietario */}
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        {/* registrar email */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email contacto propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* registrar fecha de alta */}
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de Alta
          </label>
          <input
            id="date"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        {/* registrar los sintomas */}
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>

          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        {/* boton tipo submit */}
        <input
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 w-full cursor-pointer transition-colors text-white font-bold py-2 px-4 rounded-md mt-5"
          value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
        />
      </form>
    </div>
  );
};

export default Formulario;
