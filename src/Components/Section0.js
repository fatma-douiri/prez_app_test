import React from 'react'
import logo from '../logo.svg';
import '../App.css';
import { Fade } from 'react-reveal';
import ReactMarkdown from 'react-markdown'
const Section0 = () => {

    // const markdown1 = `# markdown1 \nA paragraph with some text and a [link](http://hakim.se).`
    return (


        <section data-transition="slide" >
            <Fade left cascade>

                {/* <h2>React Reveal</h2>
            <h2>React Reveal</h2>
            <h2>React Reveal</h2> */}
                <div>
                    <ReactMarkdown>
                        {/* {markdown1} */}

                        # markdown 1
                    </ReactMarkdown>
                    <ReactMarkdown>
                        ## markdown 2
                    </ReactMarkdown>
                    <ReactMarkdown>
                        ### markdown 3
                    </ReactMarkdown>
                </div>
            </Fade>
        </section>

        // <section data-transition="slide">
        //     <div className='App'>
        //         <Zoom>
        //             <header className="App-header">
        //                 <img src={logo} className="App-logo" alt="logo" />
        //                 <h1 className="App-title">Welcome to React</h1>
        //             </header>
        //         </Zoom>

        //     </div>
        // </section>
    )
}

export default Section0