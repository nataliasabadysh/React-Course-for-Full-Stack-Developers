import { useState } from "react";


export function EventExample1(){

const [isOpen, setIsOpen] = useState(false)

    const onMouseEnter = () => {
        console.log('enter');
        setIsOpen(true)
    }

    const onMouseLeave = () => {
        console.log('leave')
        setIsOpen(false)
    }

    return (
        <>
            <h1 onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> What is the weather like today ? </h1>
            {  isOpen &&  <span role="img" aria-label="face emoji"> It's sunny ☀️ </span> }
        </>
    )
}