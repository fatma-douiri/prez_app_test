import React, { useEffect, useState } from 'react';
// import './App.css';
import './styles/style.css'
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealMath from 'reveal.js/plugin/math/math'
import './styles/reveal/reset.css';
import './styles/reveal/reveal.css';
import './styles/theme/moon.css';
import Section0 from './Components/Section0';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Section6 from './Components/Section6';
import Section7 from './Components/Section7';
import Section8 from './Components/Section8';
import SectionVictory from './Components/SectionVictory';
import SectionD3 from './Components/SectionD3'
import GetData from './Components/GetData/GetData';
function App() {
  const [data, setData] = useState({})
  // console.log("data app", data);


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





      <GetData data={data} setData={setData}>

        <section data-transition="slide" className='sectionTest'>

          <h1>Let's go!</h1>
        </section>
      </GetData>
      {/* <SectionVictory data={data} setData={setData} /> */}
      <SectionVictory data={data} />
      <SectionD3 data={data} />

      <Section0 />
      <Section1 />
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


  );
}

export default App;
