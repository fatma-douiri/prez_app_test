import React, { useState } from "react";
import Bounce from "react-reveal/Fade";

const Section3 = () => {
    const [show, setShow] = useState(true)
    const clickHandler = () => {
        setShow(!show)
    };
    return (
        <section data-transition="slide">

            <div className="fullpage three">
                <Bounce bottom cascade when={show}>
                    <ul>
                        <li>Bounce 1</li>
                        <li>Bounce 2</li>
                        <li>Bounce 3</li>
                    </ul>
                </Bounce>
                <button onClick={clickHandler}>
                    {show ? "Hide" : "Show"}
                </button>
            </div></section>

    )
}

export default Section3