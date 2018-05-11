import React from 'react'

const DateHeader = () => {
  return (
    <div className="date">
      <div className="date__box">Today</div>
      <div className="date__box" style={{'backgroundColor':'#FCF5C7',color: '#A34672'}}>Week</div>
      <div className="date__box">Month</div>
    </div>
  )
}

export default DateHeader
