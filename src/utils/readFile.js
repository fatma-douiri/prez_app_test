import * as  XLSX from "xlsx"

export const readDataFromExcel = (data, setSheetNames) => {
  const wb = XLSX.read(data)
  setSheetNames(wb.SheetNames)
  let mySheetData = {}

  wb.SheetNames.map((sheetName, i) => {
    let ws = wb.Sheets[sheetName];
    // let dataCsv = XLSX.utils.sheet_to_csv(ws);
    // console.log(`dataCsv sheet${i + 1}`, dataCsv);
    let dataJson = XLSX.utils.sheet_to_json(ws);
    // console.log(`dataJson sheet${i + 1}`, dataJson);
    mySheetData[sheetName] = dataJson

  })

  return mySheetData

}