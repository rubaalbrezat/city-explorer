import React from 'react'




 class Displayedinfo extends  React.Component {
  
    render() {
  

    return (
      <div>  <hr></hr>
      <p>city name:{this.props.name}</p>
      <p>latitude :{this.props.lat}</p>
      <p>longitude:{this.props.lon}</p>
      <hr></hr>
 </div>
    )
  }
}

export default Displayedinfo