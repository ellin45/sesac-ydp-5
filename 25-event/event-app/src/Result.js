import React from 'react';


export default function Result(props) {
  const { Img, Msg, BackGroundColor, color } = props;

  return (
    <div style={{ display: 'block' }}>
      <img src={Img} width={100} height={100} />

      <div
        style={{
          padding: '10px',
          marginTop: '10px',
          backgroundColor: BackGroundColor,
          color: color,
        }}
      >
        {Msg}
      </div>
    </div>
  );
}

