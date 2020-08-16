import React, { Component } from 'react'
import '../CSS/Footer.css'

export class Footer extends Component {
    render() {
        return (
            <div className="footer" >
                <div className="wrap" >
                    <div className="footer-table-wrapper" >
                        <h2>Ariya</h2>
                        <table style={{tableLayout:"fixed",width:"50%"}} >
                            <tr>
                                <th>COMPANY</th>
                                <th>COURSES</th>
                            </tr>
                            <tr>
                                <td>About Us</td>
                                <td>Python Jr.</td>
                            </tr>
                            <tr>
                                <td>Contact Us</td>
                                <td>Python Sr.</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
