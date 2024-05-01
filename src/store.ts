import { create } from 'zustand'
import { Patient } from './types'
// tipos de store

type PatientState = {
    patients: Patient[]
}

export const usePantientStore = create<PatientState>(() => ({
    patients: []
}))