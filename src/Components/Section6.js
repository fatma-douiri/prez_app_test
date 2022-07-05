import React from 'react'
import { Zoom } from 'react-reveal'
import { imgTest } from '../assets/images'
const Section6 = () => {
    return (
        <section data-transition="slide" >


            <video data-autoplay >
                <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type='video/mp4' />

            </video>
            <Zoom>
                <img data-src={imgTest} alt="img" style={{ marginLeft: '9%' }} />
            </Zoom>
            {/* <iframe data-src="https://hakim.se"></iframe> */}
        </section>
    )
}

export default Section6