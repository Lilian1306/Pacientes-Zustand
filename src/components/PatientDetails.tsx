import type { Patient } from "../types"

type PatientDetailsProps = {
    patient: Patient
}

function PatientDetails({patient} : PatientDetailsProps) {
  return (
    <div>
      {patient.name}
    </div>
  )
}

export default PatientDetails
