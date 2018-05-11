import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'

class Chart extends Component {

//CHART CONFIGURATIONS
  state = {
    chartData:{
      labels:['S','M','T','W','T','F','S'],
      datasets:[
        {
          label:'',
          data:[],
          backgroundColor: ''
        },
        {
          label:'',
          data:[],
          backgroundColor: ''
        },
        {
          label:'',
          data:[],
          backgroundColor: ''
        },
      ]
    },
    options: {
      legend:{
        display:false,
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 5
        }
      },
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          gridLines:{
            display:false,
          },
          ticks: {
            fontColor: '#CC6B78'
          }
        }],
        yAxes:[{
          gridLines:{
            display:false,
            drawBorder: false
          },
          ticks: {
            display:false
          }
        }],
      }
    }
  }


  componentWillReceiveProps() {
    this.setState ((prevState,props)=>({
      chartData:{
        labels:prevState.chartData.labels,
        datasets:[
          {
            label:'Bracelet',
            data:props.braceletWeekOrders,
            backgroundColor: 'rgba(28, 212, 222, 0.8)'
          },
          {
            label:'Fitted Cap',
            data:props.fittedCapWeekOrders,
            backgroundColor: 'rgba(255, 197, 1, 0.8)'
          },
          {
            label:'Hoodie',
            data:props.hoodieWeekOrders,
            backgroundColor: 'rgba(195, 87, 76, 0.8)'
          }
        ]
      },
      options:prevState.options
    }))
  }

  render () {
    const { totalSales } =this.props
    return (
        <div className="chart">
          <div className="center__items">
            <div className="full-row light-gold">
              Total Sales
            </div>
            <div className="full-row peach">
              ${ totalSales }
            </div>
          </div>
          <div className="chart__container">
            <Line
              data={this.state.chartData}
              options={this.state.options}
            />
          </div>
        </div>
    )
  }
}

const mapStateToProps = ({ hoodieWeekOrders,fittedCapWeekOrders, braceletWeekOrders,totalSales}) => {
  return {
    hoodieWeekOrders,
    fittedCapWeekOrders,
    braceletWeekOrders,
    totalSales
  }
}

export default connect(mapStateToProps)(Chart)
