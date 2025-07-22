import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Ads from '/src/assets/Ads.png'
import { Link } from 'react-router-dom'

const Phone = () => {
  return (
    <>
    <div className="py-[100px]">
        <Container>
            <Link to={"/shop"}>
                <Image imgSrc={Ads} imgAlt={"ads"}/>
            </Link>
        </Container>
    </div>
    </>
  )
}

export default Phone
