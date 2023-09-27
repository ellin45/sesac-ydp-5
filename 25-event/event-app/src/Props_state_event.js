import {useState} from "react";
import Input from "./Input";
import Result from "./Result";
import Select from "./Select";
export default function Props_state_event(){

    const [color, setColor] = useState("white");
    const [BackGroundColor, setBackgroundColor] = useState("black");
    const [Msg, setMsg] = useState("text");
    const [Img, setImg] = useState("./apple.jpg");
  
    return (
      <>
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
        >
          <Select
            setImg={setImg}
            setBackgroundColor={setBackgroundColor}
            setColor={setColor}
          />
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
        >
          <Input setMsg={setMsg} />
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
        >
          <Result
            img={Img}
            text={Msg}
            backgroundColor={BackGroundColor}
            textColor={color}
          />
        </div>
      </>
    );
}
  
  
