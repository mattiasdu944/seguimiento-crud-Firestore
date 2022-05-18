import React, {useState} from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListaPacientes from './components/ListaPacientes'

const App = () => {


  // LISTADO DE PACIENTES
  const [pacientes, setPacientes] = useState([]);

  // PACIENTE INDIVIDUAL
  const [paciente, setPaciente] = useState({})


  return (
    <div className="container mx-auto mt-20">
      <Header 
      />
      <div className='mt-12 md:flex'>
        <Formulario
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}

        />
        <ListaPacientes
          pacientes = {pacientes}
          setPaciente = {setPaciente}
        />
      </div>
    </div>
  )
}

export default App