import React, { Component } from 'react'
import '../../CSS/Home/TrialClassButton.css'

export class TrialClassButton extends Component {
    render() {
        return (
            <div className="home-trial-class" >
                <div style={{margin:"30px",marginTop:"-300px",width:"35vw"}} >
                    <h1>
                        Online Classes For Juniour and Senior Coders
                    </h1>
                    <div>
                        <input placeholder="Your Email" className="standard-input" style={{width:"20vw"}} />
                    </div>
                    <button className="standard-button" >BOOK A FREE TRIAL</button>
                </div>
            </div>
        )
    }
}

export default TrialClassButton
