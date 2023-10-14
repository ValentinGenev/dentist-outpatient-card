class PatientsDataRepository {
  static getById(id) {
    return findRowsByValue(PATIENTS_DATA_SHEET, id)
  }

  static add(id, data) {
    PATIENTS_DATA_SHEET.appendRow(PatientDataMapper.mapDataToTable(id, data))
  }

  static edit(id, data) {
    const rowIndex = this.findRowIndexByPatientId(id)
    if (rowIndex === -1) {
      throw { code: 'NOT_FOUND', message: `Row with id: ${id} was not found.` }
    }

    this.updateRow(rowIndex, PatientDataMapper.mapDataToTable(id, data))
  }

  static updateRow(rowIndex, data) {
    const range = PATIENTS_DATA_SHEET.getRange(rowIndex + 1, 1, 1, data.length) // ranges start from 1?
    range.setValues([data])
  }

  static findRowIndexByPatientId(patientId) {
    const values = PATIENTS_DATA_SHEET.getDataRange().getValues()
    
    for (let i = 0; i < values.length; i++) {
      if (values[i][PATIENTS_DATA_COLUMNS.patientId] === patientId) {
        return i
      }
    }

    return -1
  }
}