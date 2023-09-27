export default function Result(props) {
    const { img, text, backgroundColor, textColor } = props;
  
    return (
      <div style={{ display: 'block' }}>
        <img src={img} width={100} height={100}/>
        <div
          style={{
            padding: '10px',
            marginTop: '10px',
            backgroundColor: backgroundColor, // Changed from BackGroundColor to backgroundColor
            color: textColor, // Changed from color to textColor
          }}
        >
          {text} {/* Changed from Msg to text */}
        </div>
      </div>
    );
  }