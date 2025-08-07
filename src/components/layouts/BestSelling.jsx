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
import axios from 'axios'
import { useState, useEffect } from 'react'
const BestSelling = () => {
     var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NExtArrow />,
        prevArrow: <PrevArrow />,
    };

    const [myProduct, setMyProduct] = useState([]);
    useEffect(() => {
        async function alldatas() {
            let data = await axios.get("https://dummyjson.com/products");
            setMyProduct(data.data.products)
        }
        alldatas();
    }, [])
    let bestSelling = myProduct.slice(20, 30)
  return (
   <>
        <div className="pb-8">
                <Container>
                    <div className="font-bold pb-4 text-2xl">Best Selling</div>
                    <Slider {...settings}>
                        {bestSelling.map((item) => (
                                <div key={item.id} className='px-6'>
                                    <Product imgSrc={item.thumbnail} text={"30%"} productTitle={item.title} priceTxt={`$${item.price}`} />
                                </div>
                        ))}
                    </Slider>
                </Container>
            </div>
    </>
  )
}

export default BestSelling
