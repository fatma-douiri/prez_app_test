import React, { useState, useRef, useEffect } from 'react'
import { readDataFromExcel } from '../../utils/readFile'



const ExcelImport = ({ props }) => {
  const fileRef = useRef()
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState(null)
  const acceptableFileName = ["xlsx", "xls", "csv"]
  const [sheetNames, setSheetNames] = useState([])
  const [sheetData, setSheetData] = useState({})
  const [checkFile, setCheckFile] = useState(false)

  const checkFileName = (name) => {
    let check = acceptableFileName.includes(name.split(".").pop().toLowerCase())
    setCheckFile(check)
    return check
  }


  const handleChange = async (e) => {
    const myFile = e.target.files[0]
    if (!myFile) return
    const check = checkFileName(myFile.name)
    if (!check) alert("Invalid type file");

    setFile(myFile)
    setFileName(myFile.name)


    let data = await myFile.arrayBuffer()
    const mySheetData = readDataFromExcel(data, setSheetNames)
    setSheetData(mySheetData)
    props.setData(mySheetData)

    // console.log("mySheetData::::::", sheetData);


  }
  const handleRemove = () => {
    setFile(null)
    setFileName(null);
    fileRef.current.value = "";

  }
  const doSomething = () => {
    console.log("doSomething called by ExcelImport component !");
    // if (sheetData) { props.setData(sheetData) }

  }
  const children = (action) => {


    action();


    return props.children
  }
  return (
    Object.entries(sheetData).length === 0 || !checkFile ?
      <section data-transition="slide" >
        {console.log("checkFile", checkFile)}
        <h3> Excel Import</h3>
        <span style={{ color: 'white' }}>{fileName && <span>{fileName}<br /></span>}</span>
        <span style={{ color: 'white' }}>{!fileName && <span>Please Upload File<br /></span>}</span>

        <input type="file" accept="xlsx, xls, csv" multiple={false}
          onChange={(e) => handleChange(e)}
          ref={fileRef}
        />{fileName && <i className="icon-remove-sign"
          onClick={() => handleRemove()}
        ></i>}
      </section> :
      < >

        {checkFile && children(doSomething)}
      </>



  )
}

export default ExcelImport