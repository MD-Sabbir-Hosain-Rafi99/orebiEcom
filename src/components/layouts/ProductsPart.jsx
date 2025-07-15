import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from '../Product'
import clock from '/src/assets/clock.png'
import smartWatch from '/src/assets/smartWatch.png'
import busket from '/src/assets/busket.png'
import cat from '/src/assets/cat.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NExtArrow from '../NExtArrow'
import PrevArrow from '../PrevArrow'

const ProductsPart = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NExtArrow/>,
        prevArrow: <PrevArrow/>,
    };
    return (
        <>

            <div className="pb-8">
                <Container>
                    <div className="font-bold pb-4 text-2xl">New Arrival</div>

                    <Slider {...settings}>
                        <div className='px-3'>
                            <Product imgSrc={clock} text={"10%"} />
                        </div>
                        <div className='px-3'>
                            <Product imgSrc={smartWatch} text={"New"} />
                        </div>
                        <div className='px-3'>
                            <Product imgSrc={busket} text={"20%"} />
                        </div>
                        <div className='px-3'>
                            <Product imgSrc={cat} text={"New"} />
                        </div>
                        <div className='px-3'>
                            <Product imgSrc={cat} text={"New"} />
                        </div>
                    </Slider>

                </Container>
            </div>
        </>
    )
}

export default ProductsPart
