
import React, { useState } from 'react'
import {
    VictoryChart, VictoryGroup, VictoryBar, VictoryAxis, VictoryTheme,
    VictoryLabel, VictoryZoomContainer, VictoryTooltip
} from 'victory'
const Graph1 = ({ data }) => {

    // const [dataSummary, setDataSummary] = useState([])
    // const [xData, setXdata] = useState([])
    const getDataGraph = () => {
        let dataGraph1 = []
        for (let i = 15; i < 27; i++) {
            let el = data[i]
            // if (i === 15) {
            //     delete el.__EMPTY_2
            //     delete el.__EMPTY_4
            // }
            // delete el.__EMPTY_8
            // delete el.__EMPTY_9
            // delete el.__EMPTY_10
            dataGraph1 = [...dataGraph1, el]
            // setDataSummary[...dataSummary, el])

        }
        return dataGraph1
    };

    const dataGraph1 = getDataGraph();

    const getDataBar = () => {
        let n = 1
        let bars = 4
        let dataBars = {
            "1": [],
            "2": [],
            "3": [],
            "4": [],
        }
        let xDataGraph1 = []
        let y1DataGraph1 = []
        let y2DataGraph1 = []
        let y3DataGraph1 = []
        let y4DataGraph1 = []

        for (let i = 0; i < dataGraph1.length; i++) {
            xDataGraph1 = [...xDataGraph1, dataGraph1[i].__EMPTY_7]
            y1DataGraph1 = [...y1DataGraph1, dataGraph1[i].__EMPTY_11]
            y2DataGraph1 = [...y2DataGraph1, dataGraph1[i].__EMPTY_12]
            y3DataGraph1 = [...y3DataGraph1, dataGraph1[i].__EMPTY_13]
            y4DataGraph1 = [...y4DataGraph1, dataGraph1[i].__EMPTY_14]
        }


        const getYdata = (n, i) => {
            switch (n) {
                case 1:
                    return y1DataGraph1[i]
                    break;
                case 2:
                    return y2DataGraph1[i]
                    break;
                case 3:
                    return y3DataGraph1[i]
                    break;
                case 4:
                    return y4DataGraph1[i]
                    break;

                default:
                    break;
            }
        }

        // const getXdata = (xDataGraph1) => {
        //     setXdata(xDataGraph1)
        // }
        do {
            xDataGraph1.map((el, i) => {
                if (dataBars[`${n}`].length <= xDataGraph1.length - 1) {
                    dataBars[`${n}`] = [...dataBars[`${n}`], { x: xDataGraph1[i], y: getYdata(n, i) }]
                }
            })
            // if (n === bars) {
            //     getXdata(xDataGraph1)

            // }

            n++;
        } while (n <= bars)

        return [dataBars, xDataGraph1]

    }

    const [dataBars, xDataGraph1] = getDataBar();

    const bars = () => {
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
                labels={({ datum }) => `Market share : ${datum.y.toFixed(0)}% \n 
                ${datum._stack === 1 ? "Série: Bayer/Bramd Actual Market Share"
                        : datum._stack === 2 ? "Série: Bayer/Brand Target Market Share"
                            : datum._stack === 3 ? "Série: Competitor 1 Market Share"
                                : "Série: Competitor 2 Market Share"}\n Point: ${datum.xName} `}
                labelComponent={<VictoryTooltip style={{ fontSize: '8' }} />}
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
            range={{ x: [50, 350], y: [300, 50] }}
            // theme={VictoryTheme.material}
            theme={{
                ...VictoryTheme.material,
                theme: {
                    ...VictoryTheme.material.theme,
                    axis: {
                        ...VictoryTheme.material.axis,
                        width: VictoryTheme.material.axis.width = 400
                    }


                }

            }}
            // domainPadding={6}
            domain={{ y: [0, 50], x: [0, 13] }}
            containerComponent={(
                <VictoryZoomContainer
                    allowZoom={true}
                    zoomDomain={{
                        x: [0, 13],
                        y: [0, 50]
                    }}
                />
            )}

        >

            <VictoryLabel
                x={225}
                y={30}
                textAnchor="end"
                text="Market share (%)"
                style={[
                    { fontSize: 10, fontWeight: 'bold', fill: '#78909C' },
                ]}
            />

            <VictoryGroup off

                offset={4}
                colorScale={["#5081BD", "#1E497D", "#9BBB59", "#00B050"]}
            >
                {bars()}

            </VictoryGroup>


            <VictoryAxis

                // tickValues specifies both the number of ticks and where
                // they are placed on the axis
                tickValues={xDataGraph1}
                tickCount={12}
                style={{ grid: { stroke: "transparent", strokeWidth: 0.5 }, }}
                // tickFormat={xData}
                tickLabelComponent={<VictoryLabel
                    angle={-45}
                    textAnchor="middle"
                    style={[
                        { fontSize: 5, fontWeight: 'bold', fill: '#78909C', }
                    ]}
                />}

            />
            <VictoryAxis

                dependentAxis
                label="Market share (%)"
                // tickFormat specifies how ticks should be displayed
                tickFormat={(y) => {
                    return (
                        `${(y).toFixed(0)}%`
                    );
                }}

                style={sharedAxisStyles}
            />
        </VictoryChart>

    )
}

export default Graph1












