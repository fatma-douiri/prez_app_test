import React, { useState, useEffect } from 'react'
import { ReactDOM } from 'react-dom';
import "../assets/styles/styleSection.css"
// import VisualizationData from './GetData/GetData'
import {
    VictoryBar, VictoryChart, VictoryAxis,
    VictoryTheme
} from 'victory';
import LightSpeed from 'react-reveal/LightSpeed';
const SectionVictory = ({ data }) => {
    const dataGraph_1 = data && data.Sheet1 ? data.Sheet1 : []
    const dataGraph_2 = data && data.Sheet2 ? data.Sheet2 : []
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [message, setMessage] = useState("Click to show me graph 1")

    // console.log("data", data);
    // console.log("dataSection_0", dataSection_0);
    // console.log("dataSection_1", dataSection_1);
    const handleClick = () => {

        if (!show1) {

            setShow1(!show1);
            setMessage("Click to show me graph 2")
        } else if (!show2) {

            setShow2(!show2);
            setShow1(!show1);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            //if you want movie animation a bit later
            //
        }, 2000);
    }, [])

    return (
        // <VisualizationData props={props} setData={setData}>


        <section data-transition="slide" className='sectionTest'>
            <LightSpeed left opposite when={!show1 || !show1 && show2}>
                <div onClick={handleClick} style={{ cursor: 'pointer' }}>
                    <h5  >{message}</h5></div>
            </LightSpeed>
            {show1 && !show2 &&
                <div className='myVictoryChartTest 1' onClick={handleClick} style={{ cursor: 'pointer' }}>

                    <VictoryChart
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                        theme={VictoryTheme.material}
                        domainPadding={20}>
                        <VictoryBar
                            data={dataGraph_1}
                            // // data accessor for x values
                            x="category"
                            // // data accessor for y values
                            y="quantity"
                            style={{ data: { fill: "white" } }}

                        />
                    </VictoryChart>
                </div>}
            {show2 && show1 &&
                < div className='myVictoryChartTest 2'>
                    <VictoryChart
                        theme={VictoryTheme.material}
                        domainPadding={20}>
                        <VictoryBar
                            data={dataGraph_2}
                            // // data accessor for x values
                            x="category2"
                            // // data accessor for y values
                            y="quantity2"
                            style={{ data: { fill: "#c43a31" } }}

                        />
                    </VictoryChart>
                </div>}


        </section>


        // </VisualizationData >
    )
}

export default SectionVictory



