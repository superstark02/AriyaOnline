import React, { Component } from 'react'
import HomeHeader from '../Components/Home/HomeHeader'
import TrialClassButton from '../Components/Home/TrialClassButton'
import PayingChart from '../Components/Home/PayingChart'
import '../CSS/Home/Home.css'
import Ven from '../Components/Home/Ven'

export class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <HomeHeader/>
                    <TrialClassButton/>
                </div>
                <div className="wrap">
                    <div className="paying-chart" >
                        <h2>Coding With Time</h2>
                        <ul className="ul-1" >
                            <li>Robotics already replacing humans for jobs, accelerated by recent pandemic.</li>
                            <li>Prepare for next generation of technology- Machine 
                                Learning (ML)/ Artificial Intelligence (AI)</li>
                            <li>Learn Mathematics, Python and Statistics -fundamentals to ML from our top teachers at the convenience of your home</li>
                            <li>Offering online one-to-one or group sessions for age group 9 and above</li>
                        </ul>
                    </div>
                    <PayingChart/>
                </div>

                <div className="wrap" >
                    <Ven/>
                </div>

                <div className="wrap">
                    <PayingChart/>
                    <div className="paying-chart" >
                        <h2>Why Coding?</h2>
                        <ul>
                            <li>Robotics already replacing humans for jobs, accelerated by recent pandemic.</li>
                            <li>Prepare for next generation of technology- Machine 
                                Learning (ML)/ Artificial Intelligence (AI)</li>
                            <li>Learn Mathematics, Python and Statistics -fundamentals to ML from our top teachers at the convenience of your home</li>
                            <li>Offering online one-to-one or group sessions for age group 9 and above</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
