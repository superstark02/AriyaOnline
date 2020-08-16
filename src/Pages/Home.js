import React, { Component } from 'react'
import HomeHeader from '../Components/Home/HomeHeader'
import TrialClassButton from '../Components/Home/TrialClassButton'
import PayingChart from '../Components/Home/PayingChart'
import '../CSS/Home/Home.css'

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
                        <ul>
                            <li>Robotics already replacing humans for jobs, accelerated by recent pandemic.</li>
                            <li>Prepare for next generation of technology- Machine Learning (ML)/ Artificial Intelligence (AI)</li>
                        </ul>
                    </div>
                    <PayingChart/>
                </div>
            </div>
        )
    }
}

export default Home
