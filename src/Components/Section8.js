import React from 'react'
import { imgTest1, imgTest2, imgTest3 } from '../assets/images'
const Section8 = () => {
    return (
        <section data-transition="slide" >
            <h2>Some pic</h2>
            <div className="r-stack">

                <img className="fragment" data-fragment-index="0" src={imgTest1} width="450" height="300" />
                <img className="fragment" data-fragment-index="1" src={imgTest3} width="400" height="400" />
                <img className="fragment" data-fragment-index="2" src={imgTest2} width="300" height="450" />
            </div>
        </section>
    )
}

export default Section8