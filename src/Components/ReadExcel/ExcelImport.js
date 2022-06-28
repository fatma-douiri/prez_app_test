import React, { useState, useRef } from 'react'
import * as  XLSX from "xlsx"
// import { readFile } from '../../utils'
import readXlsxFile from 'read-excel-file'
const ExcelImport = () => {
  const fileRef = useRef()
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState(null)
  const acceptableFileName = ["xlsx", "xls", "csv"]
  const [sheetNames, setSheetNames] = useState([])
  const checkFileName = (name) => {
    let check = acceptableFileName.includes(name.split(".").pop().toLowerCase())
    console.log("check :", check);
    return check
  }

  const handleChange = (e) => {
    const myFile = e.target.files[0]
    console.log(e.target.files);
    if (!myFile) return
    let check = checkFileName(myFile.name)
    if (!check) alert("Invalid type file");

    setFile(myFile)
    setFileName(myFile.name)

    let data = myFile.arrayBuffer()
    const wb = XLSX.read(data)
    console.log(wb);

    // readXlsxFile(myFile).then((rows) => {
    //   console.log(rows);
    //   // `rows` is an array of rows    // each row being an array of cells. 
    // })

  }
  const handleRemove = () => {
    setFile(null)
    setFileName(null);
    fileRef.current.value = "";

  }

  return (
    <section data-transition="slide" >

      <h3> Excel Import</h3>
      <spann style={{ color: 'white' }}>{fileName && <span>{fileName}<br /></span>}</spann>
      <spann style={{ color: 'white' }}>{!fileName && <span>Please Upload File<br /></span>}</spann>

      <input type="file" accept="xlsx, xls, csv" multiple={false}
        onChange={(e) => handleChange(e)}
        ref={fileRef}
      />{fileName && <i className="icon-remove-sign"
        onClick={() => handleRemove()}
      ></i>}
    </section>
  )
}

export default ExcelImport