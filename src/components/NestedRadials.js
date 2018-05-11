import React, { Component } from 'react'
import RadialProgress from './RadialProgress'
import { connect } from 'react-redux'

class NestedRadials extends Component {
  render () {
    const { hoodieOrderPercent, fittedCapOrderPercent, braceletOrderPercent, totalWeekOrders } = this.props
    const pw = 20;
    const cw = pw /2;
    const tw = pw;
    return (
      <div className="radial">
        <div className="radial__nested">
          <div className="radial__nested-container">
            <RadialProgress
              className="label-1"
              progress={hoodieOrderPercent}
              progressWidth={pw}
              trackWidth={tw}
              cornersWidth={cw}
              progressColor="rgb(195, 87, 77)"
              trackColor="rgba(195, 87, 77,0.2)"
              fillColor="transparent"
              size={180}>
            </RadialProgress>

            <RadialProgress
              className="label-2"
              progress={fittedCapOrderPercent}
              progressWidth={pw}
              trackWidth={tw}
              cornersWidth={cw}
              progressColor="rgb(255, 224, 1)"
              trackColor="rgba(255, 224, 1,0.2)"
              fillColor="transparent"
              size={140}>
            </RadialProgress>

            <RadialProgress
              className="label-3"
              progress={braceletOrderPercent}
              progressWidth={pw}
              trackWidth={tw}
              cornersWidth={cw}
              progressColor="rgb(26, 213, 222)"
              trackColor="rgba(26, 213, 222, 0.2)"
              fillColor="transparent"
              size={100}>
            </RadialProgress>
          </div>
        </div>

        <div className="radial__info">
          <div className="light-gold">
            Sales
          </div>
          <div className="peach" >
            {totalWeekOrders}
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = ({ hoodieOrderPercent, fittedCapOrderPercent, braceletOrderPercent, totalWeekOrders  }) => {
  return {
    hoodieOrderPercent,
    fittedCapOrderPercent,
    braceletOrderPercent,
    totalWeekOrders
  }
}

export default connect(mapStateToProps)(NestedRadials)
