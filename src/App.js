import React, { Component } from 'react';
import { FaSearch } from 'react-icons/lib/fa'
import { MdMenu } from 'react-icons/lib/md'
import Chart from './components/Chart'
import NestedRadials from './components/NestedRadials'
import Merch from './components/Merch'
import DateHeader from './components/DateHeader'
import ProgressBar from './components/ProgressBar'
import OrderStatus from './components/OrderStatus'
import { getRandomData } from './utils/helpers'
import { connect } from 'react-redux'
import { setRandomData } from './actions/index'

export class App extends Component {
  componentDidMount(){
    this.props.dispatch(setRandomData(getRandomData()))
  }
  render() {

    return (
      <div>
        <div className="nav">
          <MdMenu />
          <div>Dashboard</div>
          <FaSearch />
        </div>
        <div className="content">
          <div className="content__container">
            <DateHeader />
            <ProgressBar />
            <OrderStatus />
            <Chart />
            <NestedRadials />
            <Merch />
          </div>
        </div>
        <div className="button">
          <button onClick={()=>this.props.dispatch(setRandomData(getRandomData()))} className="button__style">
            Randomize Sales
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(App);
