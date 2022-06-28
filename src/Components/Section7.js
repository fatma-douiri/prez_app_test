import React from 'react'
// import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const Section6 = () => {


    return (
        <section data-transition="slide" >
            <h2>The Lorenz Equations</h2>
            <InlineMath>\int_0^\infty x^2 dx</InlineMath>
            <BlockMath>\int_0^\infty x^2 dx</BlockMath>
            <InlineMath>{` \\dot{\\text{x}}  = \\sigma(y-x)`}</InlineMath>
            <BlockMath>{`\\frac{\\text{m}}{\\text{s}^2}`}</BlockMath>
            {/* <BlockMath math="\\int_0^\\infty x^2 dx" /> */}
            {/* \[\begin{aligned}
            \dot{x} &amp; = \sigma(y-x) \\
            \dot{y} &amp; = \rho x - y - xz \\
            \dot{z} &amp; = -\beta z + xy
            \end{aligned} \] */}


        </section>
    )
}

export default Section6