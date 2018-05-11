import React from 'react'
import { connect } from 'react-redux'

const ProgressBar = (props) => {

  return (
    <div className="progress">
      <div className="progress__bar" style={{width:`${props.completeOrderPercent}%`}}></div>
    </div>
  )
}

const mapStateToProps = ({completeOrderPercent}) => {
  return {
    completeOrderPercent
  };
}

export default connect(mapStateToProps)(ProgressBar)
