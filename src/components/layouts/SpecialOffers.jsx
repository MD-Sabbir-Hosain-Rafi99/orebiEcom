import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from '../Product'
import cap from '/src/assets/cap.png'
import table from '/src/assets/table.png'
import headPhone from '/src/assets/headPhone.png'
import sunGlass from '/src/assets/sunGlass.png'
const SpecialOffers = () => {
    return (
        <div className="pb-28">
            <Container>
                <div className="font-bold pb-4 text-2xl mt-8">Special Offers</div>
                <Flex className={'px-3 gap-x-6'}>
                    <Product imgSrc={cap} text={"10%"} />
                    <Product imgSrc={table} text={"New"} />
                    <Product imgSrc={headPhone} text={"20%"} />
                    <Product imgSrc={sunGlass} text={"New"} />
                </Flex>
            </Container>
        </div>
    )
}

export default SpecialOffers
