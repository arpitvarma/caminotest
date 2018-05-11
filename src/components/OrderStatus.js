import React from 'react'
import { connect } from 'react-redux'

const OrderStatus = (props) => {
    return (
      <section style={{flex:'0 0 100%'}}>
        <div className="orders">
          <div>Orders</div>
          <div>Completed Orders</div>
        </div>
        <div className="orders">
          <div className="orders__value">{props.totalWeekOrders}</div>
          <div className="orders__value">{props.completedOrders}</div>
        </div>
      </section>
    )
}


const mapStateToProps = ({totalWeekOrders,completedOrders}) => {
  return {
    totalWeekOrders,
    completedOrders
  };
}

export default connect(mapStateToProps)(OrderStatus)
