import React, { useEffect } from 'react'
import ExcelImport from '../ReadExcel/ExcelImport'

const VisualizationData = (props) => {
    return (
        <ExcelImport props={props} >

            {props.children}

        </ExcelImport>
    )
}

export default VisualizationData