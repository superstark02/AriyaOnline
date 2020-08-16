import React, { Component } from 'react'
import Chart from "react-apexcharts";

export class PayingChart extends Component {

    state = {
        series: [{
            data: [800, 1000, 600, 400, 200]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                fill:{
                    colors:["#46b39d","#0c3a44","#f0ca4d","#e37b40"]
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['C++', 'Python', 'PHP', 'iOS', 'Ruby/Rails'],
            },
            fill:{
                colors:["#46b39d","#0c3a44","#f0ca4d","#e37b40"]
            }
        },
    }

    render() {
        return (
            <div>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    width="500"
                />
            </div>
        )
    }
}

export default PayingChart
