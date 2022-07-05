import React, { useState } from 'react'
import Graph1 from './Graph1'
import Graph2 from './Graph2'

const SectionSummary = ({ data }) => {

    // console.log("dataa in section summary", data);

    return (
        <section data-transition="slide" style={{ top: '7%', left: '20%' }}>

            <div style={{ width: '70%', position: 'absolute', left: '-20%' }}>


                <Graph1 data={data} />

            </div>

            <div style={{
                width: '60%', height: '30vh', position: 'absolute', right: '-20%', marginTop: '10%', display: 'flex',
                flexDirection: 'column', justifyContent: 'space-around'
            }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ backgroundColor: '#5081BD', fontSize: '30%', color: 'transparent', marginRight: '5px' }}>  a </div>
                    <div style={{ color: 'white', fontSize: '30%' }}>Bayer/Bramd Actual Market Share</div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ backgroundColor: '#1E497D', fontSize: '30%', color: 'transparent', marginRight: '5px' }}>  a </div>
                    <div style={{ color: 'white', fontSize: '30%' }}>Bayer/Brand Target Market Share</div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ backgroundColor: '#9BBB59', fontSize: '30%', color: 'transparent', marginRight: '5px' }}>  a </div>
                    <div style={{ color: 'white', fontSize: '30%' }}>Competitor 1 Market Share</div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ backgroundColor: '#00B050', fontSize: '30%', color: 'transparent', marginRight: '5px' }}>  a </div>
                    <div style={{ color: 'white', fontSize: '30%' }}>Competitor 2 Market Share</div>
                </div>

            </div>

            {/* <div style={{ width: '60%', position: 'absolute', right: '-10%' }}>

                <Graph2 data={data} />
            </div> */}


        </section >
    )
}

export default SectionSummary