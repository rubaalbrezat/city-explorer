import React from "react";

class Map extends React.Component {
  render() {
    return (
      <div className='picDad'>
        <img className='pic' src={this.props.source} alt="Map image"/>
        <hr></hr>
      </div>
    )
  }
}
export default Map;