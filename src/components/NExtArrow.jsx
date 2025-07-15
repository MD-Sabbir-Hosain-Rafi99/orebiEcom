import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";

const NExtArrow = (props) => {
    const { onClick } = props;
    return (

        <div className={'absolute top-1/2 right-5 -translate-y-1/2'} onClick={onClick}>
           <FaArrowAltCircleRight className='text-5xl text-shadow-transparent'/>
        </div>

    )
}

export default NExtArrow
