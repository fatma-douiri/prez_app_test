import React, { useState } from 'react'
import Fade from "react-reveal/Fade";

const Section4 = () => {
    const [show, setShow] = useState(true)
    const clickHandler = () => {
        setShow(!show)
    };
    return (
        <section data-transition="slide">
            <div className="fullpage one">
                <Fade left when={show}>
                    <ul>
                        <li>Fade</li>
                    </ul>
                </Fade>
                <button onClick={clickHandler}>
                    {show ? "Hide" : "Show"}
                </button>
            </div>
        </section>
    )
}

export default Section4