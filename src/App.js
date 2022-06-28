import React, { useEffect } from 'react';
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
import testCSV from './assets/data/testdataCsv.csv'
import { testExcel } from './assets/data'

import ExcelImport from './Components/ReadExcel/ExcelImport';
function App() {




  useEffect(() => {
    let deck = new Reveal({
      // backgroundTransition: 'slide',
      // transition: 'slide',
      // autoPlayMedia: true
      plugins: [RevealMath.KaTeX],
      slideNumber: true,

    })
    deck.initialize().then(console.log('initialized reveal'));


  }, [])

  return (


    <div className="slides">
      My Prezz App Test

      <ExcelImport />

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
