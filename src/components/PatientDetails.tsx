import { toast } from 'react-toastify'
import type { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import { usePantientStore } from "../store"

type PatientDetailsProps = {
    patient: Patient
}

function PatientDetails({patient} : PatientDetailsProps) {

   const deletePatient = usePantientStore((state) => state.deletePatient)
   const getPatientById = usePantientStore((state) => state.getPatientById)

   const handleClick = () => {
      deletePatient(patient.id)
      toast('Paciente Eliminado', {
         type: 'error'
      })
   }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-sl">
       <PatientDetailItem label="ID" data={patient.id}/>
       <PatientDetailItem label='Nombre' data={patient.name}/>
       <PatientDetailItem label="Propietario" data={patient.caretaker}/>
       <PatientDetailItem label='Email' data={patient.email}/>
       <PatientDetailItem label='Fecha Alta' data={patient.date.toString()}/>
       <PatientDetailItem label='Sintomas' data={patient.symptoms}/>

       <div className="flex flex-col lg:flex-row justify-between gap-3 mt-3">
         <button 
            type='button'
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase rounded-lg font-bold"
            onClick={() => getPatientById(patient.id)}>
            Editar
         </button>

         <button
            type="button" 
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase rounded-lg font-bold"
            onClick={handleClick}>
            Eliminar
         </button>
       </div>
    </div>
  )
}

export default PatientDetails
