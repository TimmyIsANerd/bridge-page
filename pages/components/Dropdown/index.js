import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled('div')`
  color: #000;
  border-radius: 5px;
  width: 10.5em;
  cursor: pointer;
`;

const DropdownHeader = styled('div')`
  cursor: pointer;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  height: 45px;
  backdrop-filter: blur(1px);
  /* padding: 10px; */
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  &:div {
    display: flex;
  }
  .chain_icon {
    margin: 0px;
    display: flex;
    align-items: center;
    width: 15px;
    height: 15px;
  }
`;

const DropdownListContainer = styled('div')`
  color: #000;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: -10px 48.5967px 140px rgba(126, 123, 160, 0.2);
  backdrop-filter: blur(19px);
  border-radius: 10px;
  overflow: hidden;
  width: 15.5em;
  position: absolute;
  /* top: 10%; */
  margin-top: 1.5rem;
  z-index: 999;
`;

const DropdownList = styled('ul')`
  list-style-type: none;
`;
const ListItem = styled('li')`
  cursor: pointer;
  font-weight: 400;
  padding: 15px 0;
  margin: 0 0 0 -40px;
  display: flex;
  align-items: center;
  transition: all 0.3s linear;
  backdrop-filter: blur(19px);

  &:last-child {
    margin-bottom: -16px;
  }
  &:hover {
    background: #4500a0;
    color: rgba(255, 255, 255, 1);
  }
`;

const Text = styled('p')`
  text-align: left;
  margin-left: 20px;
  font-size: 16px;
`;

const IconChain = styled('img')`
  margin: 0 15px;
  width: 25px;
  height: 25px;
  object-fit: contain;
`;


const Dropdown = () =>{
  return(
    <>
    </>
  )
}

export default Dropdown;