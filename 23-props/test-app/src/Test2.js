import React, { Component } from 'react';
import coding from "./pika.png"
class Test2 extends Component {
  render() {
    const name ="정채림";
    const style = {
      color : "orange",
      fontSize : 40,
      marginTop : 20,
    }
    return (
    <div style={style}>
    <h2>안녕하세요!</h2>
    <img src={coding} alt='React'></img>
    </div>
    )
  }
}

export default Test2;
