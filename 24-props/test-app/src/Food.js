import React from "react";

 
const Food = props => {
  return(
    <h1>
      제가 좋아하는 음식은 <span style={{color:"red"}}>{props.food}</span>
    </h1>
  )
}

Food.defaultProps = {
  food: "김치찌개"
}

export default Food;