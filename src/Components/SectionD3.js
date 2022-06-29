import React, { useEffect, useState, useRef } from 'react'
import * as d3 from "d3"

const SectionD3 = ({ data }) => {

    const [show, setShow] = useState(false)
    const clickHandler = () => {
        setShow(!show)
    };
    // //  1] Setup Initial data and settings ------------
    const dataGraph = data && data.Sheet3 ? data.Sheet3 : []


    const [chartdata, setChartdata] = useState(dataGraph)

    useEffect(() => {
        if (!chartdata) {
            setChartdata(dataGraph)

        }

        console.log("chartdata useEffect", chartdata);

    }, [data])

    // const dataGraph = [
    //     {
    //         name: "Car",
    //         value: 10,
    //     },
    //     {
    //         name: "Food",
    //         value: 3,
    //     },
    //     {
    //         name: "Telephone",
    //         value: 9,
    //     },
    //     {
    //         name: "Electricity",
    //         value: 7,
    //     },
    //     {
    //         name: "Cinema",
    //         value: 7,
    //     },
    // ];



    const width = 500;
    const height = 150;
    const padding = 20;
    const maxValue = 20; // Maximum data value



    const svgRef = useRef()
    //  2] Setup random data generator and SVG canvas -//
    const handleClick = () => {
        if (chartdata.length === 0) {
            console.log("Chartdata", chartdata);
            setChartdata(dataGraph)
        } else {
            // chartdata.map(
            //             function (d) {
            //                 setChartdata({...chartdata,
            //                 })
            //                 d.value = Math.floor(
            //                     Math.random() * (maxValue + 1)
            //                 )


            //             })
        }


        // chartdata && chartdata.length != 0 &&
        //     chartdata.map(
        //         function (d) {
        //             d.value = Math.floor(
        //                 Math.random() * (maxValue + 1)
        //             )

        //             return d
        //         }

        //     )


    }
    useEffect(() => {

        if (chartdata && chartdata.length != 0) {

            //  3] Setup functions for Scales ------------------//

            //xscales
            const xScale = d3.scalePoint()
                .domain(chartdata.map((d) => d.name))
                .range([(0 + padding), (width - padding)])
            console.log('Start - End', xScale('Car'), xScale('Cinema'))

            //Yscales
            const yScale = d3.scaleLinear()
                .domain([0, d3.max(chartdata, function (d) { return d.value })])
                .range([(height - padding), (0 + padding)])

            console.log('Start - End', yScale(0), yScale(10))


            //  4] Setup functions to draw Lines ---------------//

            const line = d3.line()
                .x((d) => xScale(d.name))
                .y((d) => yScale(d.value))
                .curve(d3.curveMonotoneX)

            console.log('chart draw commands', line(chartdata))

            //  5] Draw line        ---------------------------//
            d3.select(svgRef.current)
                .select('path')
                .attr('d', (value) => line(chartdata))
                .attr('fill', 'none')
                .attr('stroke', 'red')

            //  6] Setup functions to draw X and Y Axes --------//
            const xAxis = d3.axisBottom(xScale)
            const yAxis = d3.axisLeft(yScale)

            //  7] Draw x and y Axes   -------------------------//
            d3.select('#xaxis').remove()
            d3.select(svgRef.current)
                .append('g')
                .attr('transform', `translate(0,${height - padding})`)
                .attr('id', 'xaxis')
                .call(xAxis)

            d3.select('#yaxis').remove()
            d3.select(svgRef.current)
                .append('g')
                .attr('transform', `translate(${padding},0)`)
                .attr('id', 'yaxis')
                .call(yAxis)




        }
    }, [chartdata]
    )


    return (
        <section data-transition="slide" className='sectionTest'>
            {!show ? <div onClick={clickHandler} style={{ cursor: 'pointer' }}><h1>Visualization Data with D3</h1></div> :
                <div className='visD3'>
                    <svg id="chart" ref={svgRef} viewBox="0 0 500 150">

                        <path d="" fill="none" stroke="red" strokeWidth="5" />

                    </svg>
                    <p>
                        <button type='butto' onClick={() => handleClick()}>
                            Click to refresh expenses data
                        </button>
                    </p>
                </div>}
        </section>
    )
}

export default SectionD3