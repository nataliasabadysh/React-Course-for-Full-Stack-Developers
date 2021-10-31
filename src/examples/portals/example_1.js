// Portals

// Core
import React, {useState } from 'react';
import { createPortal } from 'react-dom';

const portal = document.getElementById('modal');

export const Modal = ({ isOpen = true })=> createPortal(isOpen ? <div>Modal Window  </div> : null, portal);


export const ComponentPortalExample  = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
         <button onClick={()=> setIsOpen(!isOpen)}> Do you want to open model ?</button>
         <Modal isOpen={isOpen}> <h1> in Modal </h1></Modal>
        </>
    )

}