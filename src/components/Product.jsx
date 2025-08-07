import React from 'react'
import Image from './Image'
import clock from '/src/assets/clock.png'
import Badge from './Badge'
import { FaHeart } from "react-icons/fa";
import Flex from './Flex';
import Compare from '../assets/Icons/Compare';
import { FaShoppingCart } from "react-icons/fa";


const Product = ({imgSrc, text, productTitle, priceTxt}) => {
  return (
    <>
        <div className="relative group -mx-2">
            <Image imgSrc={imgSrc}/>
            <Badge className={'absolute top-4 left-4'} badgeText={text}/>
            <div className="bg-categoryC p-7.5 absolute bottom-6  left-0 w-full opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <Flex className={'justify-end gap-x-2'}>
                    <p>Add to Wish List</p><FaHeart />
                </Flex>
                <Flex className={'justify-end gap-x-2 my-3'}>
                    <p>Compare</p><Compare/>
                </Flex>
                <Flex className={'justify-end gap-x-2'}>
                    <p>Add to Cart</p><FaShoppingCart />

                </Flex>
            </div>
            <div className="">
                <Flex className={'justify-between'}>
                    <h3>{productTitle}</h3>
                    <p>{priceTxt}</p>
                </Flex>
            </div>
        </div>
    </>
  )
}

export default Product
