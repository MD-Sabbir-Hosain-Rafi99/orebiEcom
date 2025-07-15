import React from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";
const PrevArrow = (props) => {
    const { onClick } = props;
    return (

        <div className={'absolute top-1/2 left-5 z-20 -translate-y-1/2'} onClick={onClick}>
             <FaArrowAltCircleLeft className='text-5xl text-shadow-transparent'/>
        </div>

    )
}

export default PrevArrow
