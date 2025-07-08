import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <>
            <Link to={'/'}>
                <div className="bg-[url(/src/assets/bannerOne.png)] h-[600px] bg-no-repeat bg-cover bg-center"></div>
            </Link>
        </>
    )
}

export default Banner
