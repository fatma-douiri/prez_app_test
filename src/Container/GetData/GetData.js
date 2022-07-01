import React, { useEffect } from 'react'
import ExcelImport from '../../Components/ExcelImport'

const GetData = (props) => {
    return (
        <ExcelImport props={props} >

            {props.children}

        </ExcelImport>
    )
}

export default GetData