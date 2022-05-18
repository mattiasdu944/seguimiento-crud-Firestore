import React from 'react'
import {db} from '../firebase'
import { doc, deleteDoc } from "firebase/firestore";

const Paciente = ({ paciente, setPaciente }) => {
  const { nombre, propietario, email, fecha,sintomas, id } = paciente

  const handleEliminar = async () => {
    const respuesta = confirm('Deseas eliminar este paciente?');
    if (respuesta) {
      console.log('eliminando paciente', id);
      await deleteDoc(doc(db, "pacientes", id))
    }
  }

  return (
    <div className=" m-3 bg-white px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Popietario: <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:{" "}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:{" "}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:{" "}
        <span className="font-normal normal-case">
          {sintomas}
        </span>
      </p>

      <div className='flex justify-around'>
        <button type='button'
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 cursor-pointer transition-colors text-white font-bold rounded-md mt-5'
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button 
          type='button'
          className='py-2 px-10 bg-red-600 hover:bg-red-700 cursor-pointer transition-colors text-white font-bold rounded-md mt-5'
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente