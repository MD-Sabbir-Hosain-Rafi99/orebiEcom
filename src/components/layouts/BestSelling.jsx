import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from '../Product'
import clock from '/src/assets/clock.png'
import smartWatch from '/src/assets/smartWatch.png'
import busket from '/src/assets/busket.png'
import cat from '/src/assets/cat.png'
const BestSelling = () => {
  return (
   <>
        <div className="pb-5">
            <Container>
                <div className="font-bold pb-4 text-2xl mt-8">Best Selling</div>
                <Flex className={'px-3 gap-x-6'}>
                    <Product imgSrc={clock} text={"10%"}/>
                    <Product imgSrc={smartWatch} text={"New"}/>
                    <Product imgSrc={busket} text={"20%"}/>
                    <Product imgSrc={cat} text={"New"}/>
                </Flex>
            </Container>
        </div>
    </>
  )
}

export default BestSelling
