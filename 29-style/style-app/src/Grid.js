import React from 'react'
import './styles/Grid.scss';
import cat from './styles/img/cat.png'
import food from './styles/img/food.jpeg'
import dog from './styles/img/dog.jpeg'
import nature from './styles/img/nature.jpeg'
import food1 from './styles/img/food1.jpeg'

export default function Grid() {
  return (
    <div className='container'>
      <img className='box box1' src={cat} alt='cat'/>
      <img className='box box2' src={dog} alt='dog'/>
      <img className='box box3' src={nature} alt='nature'/>
      <img className='box box4' src={food} alt='food'/>
      <img className='box box15' src={food1} alt='food1'/>
    </div>
  )
}
