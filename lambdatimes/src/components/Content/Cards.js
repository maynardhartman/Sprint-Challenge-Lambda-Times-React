import React, { Component } from 'react';
import Card from './Card';
import { cardData } from '../../data';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => (
      <div>{card}</div> ))}
    </div>
   )
  }


// Make sure you include prop types for all of your incoming props

export default Cards;