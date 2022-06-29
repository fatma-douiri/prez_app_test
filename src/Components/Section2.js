import React, { useState } from 'react'
import Flip from "react-reveal/Flip";
const Section2 = () => {

    const [show, setShow] = useState(true)
    const clickHandler = () => {
        setShow(!show)
    };

    return (
        <section data-transition="slide">
            <div className="fullpage two">
                <Flip left cascade >
                    {/* <Flip left cascade when={show}> */}
                    <div>
                        <li>Flip 1</li>
                        <li>Flip 2</li>
                        <li>Flip 3</li>
                    </div>
                </Flip>
                {/* <button onClick={clickHandler}>
                    {show ? "Hide" : "Show"}
                </button> */}
            </div></section>


    )
}

export default Section2