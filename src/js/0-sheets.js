const PROPERTIES = PropertiesService.getScriptProperties()
const SHEET_ID = PROPERTIES.getProperty('SHEET_ID')

const PATIENTS_SHEET_ID = PROPERTIES.getProperty('PATIENTS_SHEET')
const PATIENTS_DATA_SHEET_ID = PROPERTIES.getProperty('PATIENTS_DATA_SHEET')
const MEDICAL_HISTORY_SHEET_ID = PROPERTIES.getProperty('MEDICAL_HISTORY_SHEET')
const VISITS_SHEET_ID = PROPERTIES.getProperty('VISITS_SHEET')

const PATIENTS_SHEET = SpreadsheetApp.openById(SHEET_ID).getSheetByName(PATIENTS_SHEET_ID)
const PATIENTS_DATA_SHEET = SpreadsheetApp.openById(SHEET_ID).getSheetByName(PATIENTS_DATA_SHEET_ID)
const MEDICAL_HISTORY_SHEET = SpreadsheetApp.openById(SHEET_ID).getSheetByName(MEDICAL_HISTORY_SHEET_ID)
const VISITS_SHEET = SpreadsheetApp.openById(SHEET_ID).getSheetByName(VISITS_SHEET_ID)
