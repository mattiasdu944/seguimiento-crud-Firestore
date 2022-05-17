
import Paciente from "./Paciente";

const ListaPacientes = ({ pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-2/5 ">
      {pacientes && pacientes.length ? 

      (
        <>
          <h2 className="font-black text-3xl text-center">ListaPacientes</h2>
          <p className="text-lg text-center mt-5 mb-10">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold ">
              Pacientes y Citas
            </span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente 
            key={paciente.id} 
            paciente={paciente} 
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg text-center mt-5 mb-10">
            Comienza agregando pacietnes{" "}
            <span className="text-indigo-600 font-bold ">
              y apareceran aqui
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListaPacientes;
