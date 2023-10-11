import React from 'react';
import './styles/PracSass.scss'
import img from './styles/img/grass.png';
export default function PracSass() {
  return (
    <>
     <div className="body body1">
        <div className="eye-white">
            <div className="eye-black"></div>
        </div>
    </div>
    <div className="body body2"></div>
    <div className="body body3"></div>
    <div className="body body4"></div>
    <div className="body body5"></div>

    <img class="grass" src={img} alt="잔디"></img>
    </>
  );
}
