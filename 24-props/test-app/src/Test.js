import React from 'react';

const Test = props => {
  const { my_style, name } = props; // props에서 my_style과 name을 가져옵니다.

  return ( // render 메소드 대신 바로 return을 사용합니다.
    <div style={my_style}> {/* props.my_style 대신 my_style을 사용합니다. */}
      제 이름은 {name} 입니다! {/* props.name 대신 name을 사용합니다. */}
    </div>
  );
}

export default Test;
