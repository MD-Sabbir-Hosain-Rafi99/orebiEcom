import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from '../Product'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NExtArrow from '../NExtArrow'
import PrevArrow from '../PrevArrow'
import axios from 'axios'
import { useState, useEffect } from 'react'

const ProductsPart = () => {
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
    return (
        <>

            <div className="pb-15">
                <Container>
                    <div className="font-bold pb-4 text-2xl">New Arrival</div>
                    <Slider {...settings}>
                        {myProduct.map((item) => (

                                <div key={item.id} className='px-6'>
                                    <Product imgSrc={item.thumbnail} text={"10%"} productTitle={item.title} priceTxt={`$${item.price}`} />
                                </div>

                        ))}
                    </Slider>
                </Container>
            </div>
        </>
    )
}

export default ProductsPart
