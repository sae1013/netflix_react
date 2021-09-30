import React from 'react'
import styled from 'styled-components';

function Button({_onClick,children, ...styles}) {
  
  return (
    <Btn {...styles}>{children}</Btn>
  )
}
const Btn = styled.button`
  padding:${props => props.padding ||'1rem 2.5rem'} ;
  margin: ${props=> props.margin || '1rem'};
  height:${props => props.height ||'auto'};
  background-color:${props => props.bgColor ||'black'};
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: .8rem;
  color:${props => props.color || 'white'};
  font-weight: 600;
  font-size: 1.5rem;
  &:hover {
    opacity: 0.4;
    transition: .3s all;
  };
`
export default Button;
