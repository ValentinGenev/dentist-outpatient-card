class MedicalHistoryService {
  static edit(patientId: string, data: MedicalHistory) {
    MedicalHistoryRepository.edit(patientId, data)

    return patientId
  }
}
