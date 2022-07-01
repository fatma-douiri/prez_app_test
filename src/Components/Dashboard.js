import React from 'react'
import GetData from '../Container/GetData/GetData'
import "../styles/dashboard.css"
import MyPrez from './MyPrez'
const Dashboard = ({ data, setData }) => {
    return (
        <div className='dashboard'>
            <GetData data={data} setData={setData}>

                {/* <section data-transition="slide" className='sectionTest'>

                    <h1>Let's go!</h1>
                </section> */}
            </GetData>
        </div>

    )
}

export default Dashboard