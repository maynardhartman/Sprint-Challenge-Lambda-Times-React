import React from 'react';
import Moment from 'moment';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderDiv>
      <DateSpan>{Moment().format('MMMM Do YYYY')}</DateSpan>
      <StyledH1>Lambda Times</StyledH1>
      <Temp>92°</Temp>  
    </HeaderDiv>

  )
}

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;

const DateSpan = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 15px;
`;

const StyledH1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000; 
`;

const Temp = styled.span`
  text-align: right;
  margin-right: 25px;
  flex: 1; 
`;


export default Header