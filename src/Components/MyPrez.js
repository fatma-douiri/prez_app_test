import React, { useEffect } from 'react'
import Reveal from 'reveal.js';
import RevealMath from 'reveal.js/plugin/math/math'
// import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js';
// import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Section0 from './Section0';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import SectionVictory from './SectionVictory';
import SectionD3 from './SectionD3'
const MyPrez = () => {
    var data = JSON.parse(localStorage.getItem("data"))
    console.log("data in my prez", data);
    useEffect(() => {
        let deck = new Reveal({
            backgroundTransition: 'slide',
            transition: 'slide',
            autoPlayMedia: true,
            plugins: [RevealMath.KaTeX],
            slideNumber: true,

        })
        deck.initialize().then(console.log('initialized reveal'));


    }, [])
    return (
        <div className="slides">
            <div className='title'>My Prezz App Test</div>



            {/* <SectionVictory data={data} setData={setData} /> */}
            <SectionVictory data={data} />
            <SectionD3 data={data} />

            <Section0 />
            {/* <Section1 /> */}
            <section>
                <Section2 />
                <Section3 />
            </section>
            <Section4 />
            <Section5 />
            <Section6 />
            <section>
                <Section7 />
                <Section8 />
            </section>
        </div>
    )
}

export default MyPrez