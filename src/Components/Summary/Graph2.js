
import React, { useState } from 'react'
import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis, VictoryTheme, VictoryLabel, VictoryZoomContainer } from 'victory'
const Graph2 = ({ data }) => {
    console.log("data datagraph2 :", data);
    // const [dataSummary, setDataSummary] = useState([])
    // const [xData, setXdata] = useState([])
    const getDataGraph = () => {
        let dataGraph2 = []
        for (let i = 15; i < 27; i++) {
            let el = data[i]
            if (i === 15) {
                // delete el.__EMPTY_2
                // delete el.__EMPTY_4
            }
            // delete el.__EMPTY_8
            // delete el.__EMPTY_9
            // delete el.__EMPTY_10
            dataGraph2 = [...dataGraph2, el]
            // setDataSummary[...dataSummary, el])

        }
        console.log("datagraph2 :", dataGraph2);
        return dataGraph2
    };

    const dataGraph2 = getDataGraph();

    const getDataBar = () => {
        let n = 1
        let bars = 2
        let dataBars = {
            "1": [],
            "2": [],

        }
        let xDataGraph2 = []
        let y1DataGraph2 = []
        let y2DataGraph2 = []


        for (let i = 0; i < dataGraph2.length; i++) {
            xDataGraph2 = [...xDataGraph2, dataGraph2[i].__EMPTY_7]
            y1DataGraph2 = [...y1DataGraph2, dataGraph2[i].__EMPTY_8]
            y2DataGraph2 = [...y2DataGraph2, dataGraph2[i].__EMPTY_10]

        }
        console.log("y2DataGraph2", y2DataGraph2);

        const getYdata = (n, i) => {
            switch (n) {
                case 1:
                    return y1DataGraph2[i]
                    break;
                case 2:
                    return y2DataGraph2[i]
                    break;


                default:
                    break;
            }
        }

        // const getXdata = (xDataGraph1) => {
        //     setXdata(xDataGraph1)
        // }
        do {
            xDataGraph2.map((el, i) => {
                if (dataBars[`${n}`].length <= xDataGraph2.length - 1) {
                    dataBars[`${n}`] = [...dataBars[`${n}`], { x: xDataGraph2[i], y: getYdata(n, i) }]
                }
            })
            // if (n === bars) {
            //     getXdata(xDataGraph1)

            // }

            n++;
        } while (n <= bars)

        return [dataBars, xDataGraph2]

    }

    const [dataBars, xDataGraph2] = getDataBar();

    const bars = () => {
        console.log("dataBars", dataBars);
        let myDataBars = []
        for (const key in dataBars) {
            myDataBars = [...myDataBars, dataBars[key]]

        }

        return myDataBars.map((bar, i) => {
            // console.log("bar", bar);
            return <VictoryBar
                key={i}
                // style={{ data: { fill: "#c43a31" } }}
                data={bar}
                barWidth={2}
                alignment="start"
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                }}

            />
        })
    }
    const sharedAxisStyles = {
        tickLabels: {
            fontSize: 10
        },
        axisLabel: {
            padding: 39,
            fontSize: 12,
        },
        grid: {
            stroke: "#546E7A",
            strokeWidth: 0.2,
        }
    };

    return (



        <VictoryChart

            theme={VictoryTheme.material}
            // domainPadding={6}
            domain={{ y: [0, 600000], x: [0, 13] }}
            containerComponent={(
                <VictoryZoomContainer
                    allowZoom={true}
                    zoomDomain={{
                        x: [0, 13],
                        y: [0, 600000]
                    }}
                />
            )}
        >

            <VictoryLabel
                x={225}
                y={30}
                textAnchor="end"
                text="Sales vs Opportunity"
                style={[
                    { fontSize: 10, fontWeight: 'bold', fill: '#78909C' },
                ]}
            />

            <VictoryGroup off style={{ width: "50%" }}
                offset={2}
                colorScale={["#5081BD", "#1E497D", "#9BBB59", "#00B050"]}
            >
                {bars()}

            </VictoryGroup>


            <VictoryAxis
                // tickValues specifies both the number of ticks and where
                // they are placed on the axis
                tickValues={xDataGraph2}
                tickCount={12}
                // tickFormat={xData}
                tickLabelComponent={<VictoryLabel
                    angle={-45}
                    textAnchor="middle"
                    style={[
                        { fontSize: 5, fontWeight: 'bold', fill: '#78909C', },
                    ]}
                />}

            />
            <VictoryAxis
                dependentAxis
                label="Net Sales ($)"
                // tickFormat specifies how ticks should be displayed
                tickFormat={(y) => {
                    return (
                        `${(y).toFixed(3)}`
                    );
                }}

                style={sharedAxisStyles}
            />
        </VictoryChart>

    )
}

export default Graph2












