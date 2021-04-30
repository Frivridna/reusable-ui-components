import React from 'react'
import styled from 'styled-components'

const FloatingActionButton = ({ icon }) => {

/*   const onFormSubmit = (event) => {
		    event.preventDefault()

        // dispatch some actions, 
        // reset input field etc.

   } */

  return (
    // <Form onSubmit={onFormSubmit}>
    <>
    <FloatingButton>
      {icon && <Microphone src={icon} />}
    </FloatingButton>
    </>
  )
}

const FloatingButton = styled.button`
  width: 90px;
  height: 90px; 
  position: fixed;
  bottom: 30px;
  right: 20px;
  border: none;
  border-radius: 50%;
  box-shadow: rgb(0 0 0 / 30%) 2px 2px 10px;
  background: #abc8ff;
  color: rgb(255, 255, 255);
  font-size: 40px;
  z-index: 1;
`;

const Microphone = styled.img`
`;

export default FloatingActionButton

