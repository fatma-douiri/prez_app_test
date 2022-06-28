import React, { useState, useEffect } from 'react'
import { ReactDOM } from 'react-dom';
import "../assets/styles/styleSection.css"
import VisualizationData from './VisualizationData/VisualizationData'
import {
    VictoryBar, VictoryChart, VictoryAxis,
    VictoryTheme
} from 'victory';
import LightSpeed from 'react-reveal/LightSpeed';
const Section = ({ props, setData, data }) => {

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [message, setMessage] = useState("show me graph 1")
    const dataSection_0 = data ? data.Sheet1 : []
    const dataSection_1 = data ? data.Sheet2 : []
    // console.log("data", data);
    // console.log("dataSection_0", dataSection_0);
    // console.log("dataSection_1", dataSection_1);
    const handleClick = () => {

        if (!show1) {

            setShow1(!show1);
            setMessage("show me graph 2")
        } else if (!show2) {

            setShow2(!show2);
            setShow1(!show1);
        }
    }

    useEffect(() => {
        setTimeout(() => {

        }, 2000);
    }, [])

    return (
        <VisualizationData props={props} setData={setData}>


            <section data-transition="slide" className='sectionTest'>
                <LightSpeed left opposite when={!show1 || !show1 && show2}>
                    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
                        <h1  >{message}</h1></div>
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
                                data={dataSection_0}
                                // // data accessor for x values
                                x="category"
                                // // data accessor for y values
                                y="quantity"

                            />
                        </VictoryChart>
                    </div>}
                {show2 && show1 &&
                    < div className='myVictoryChartTest 2'>
                        <VictoryChart
                            theme={VictoryTheme.material}
                            domainPadding={20}>
                            <VictoryBar
                                data={dataSection_1}
                                // // data accessor for x values
                                x="category2"
                                // // data accessor for y values
                                y="quantity2"

                            />
                        </VictoryChart>
                    </div>}


            </section>


        </VisualizationData >
    )
}

export default Section



