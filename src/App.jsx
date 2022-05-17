import React, {useState} from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListaPacientes from './components/ListaPacientes'

const App = () => {


  // LISTADO DE PACIENTES
  const [pacientes, setPacientes] = useState([]);

  // PACIENTE INDIVIDUAL
  const [paciente, setPaciente] = useState({})


  const eliminarPaciente = (id) =>{
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    // console.log(pacientesActualizados);
    setPacientes(pacientesActualizados);
    // console.log('eliminando paciente', id);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header 
      />
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}

        />
        <ListaPacientes
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App