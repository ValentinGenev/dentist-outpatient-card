enum PatientColumns {
  name = 0,
  id = 1
}

interface Patient {
  name: string,
  middleName?: string,
  familyName: string
}

class PatientMapper {
  mapDataToTable(id: string, data: Patient) {
    const patient: any[] = []
    patient[PatientColumns.id] = id
    patient[PatientColumns.name] = `${data.name} ${data.middleName} ${data.familyName}`
    return patient
  }
}
