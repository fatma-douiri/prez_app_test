import React from 'react'

const Section8 = () => {
    return (
        <section data-transition="slide" >
            <h2>Some pic</h2>
            <div className="r-stack">
                <img className="fragment" src="https://placekitten.com/450/300" width="450" height="300" alt="img" />
                <img className="fragment" src="https://placekitten.com/300/450" width="300" height="450" alt="img" />
                <img className="fragment" src="https://placekitten.com/400/400" width="400" height="400" alt="img" />
            </div>
        </section>
    )
}

export default Section8