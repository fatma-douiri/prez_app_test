import React from 'react'
import { Zoom, Fade } from 'react-reveal'
import "../styles/section5.css"
const Section5 = () => {
    return (
        <section data-transition="slide" data-background-color="aquamarine">
            <div className="container section5">
                <div className="ligne" style={{ position: 'absolute' }} >
                    <Zoom>
                        <h2>🎯</h2>
                    </Zoom>

                    <Fade left >

                        Fade

                    </Fade>
                </div>
                <div className="ligne" style={{ position: 'absolute', top: '19%', left: '21%' }}>
                    <Zoom>
                        <h3>⚡</h3>
                    </Zoom>
                    <Fade left >

                        Fade

                    </Fade>
                </div>
                <div className="ligne" style={{ position: 'absolute', top: '43%', left: '42%' }}>
                    <Zoom>
                        <h4>🔑</h4>
                    </Zoom>
                    <Fade left >

                        Fade

                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default Section5