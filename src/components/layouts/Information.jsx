import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { FaUndoAlt } from "react-icons/fa";
import Heading from '../Heading';
import Image from '../Image';
import Lamp from '../../assets/lamp.png'
import watch from '../../assets/watch.png'
import light from '../../assets/light.png'
import { Link } from 'react-router-dom';


const Information = () => {

    return (
        <>
            <Container>
                <Flex className={'py-6 justify-between'}>
                    <div className="flex items-center gap-x-2">
                        <PiNumberTwoBold className='text-2xl' />
                        <Heading className={'text-informationText'} text={"Two years warranty"} as="p" />
                    </div>
                    <div className="flex items-center gap-x-2">
                        <FaTruck className='text-2xl' />
                        <Heading className={''} text={"Free shipping"} as="p" />
                    </div>
                    <div className="flex items-center gap-x-2">
                        <FaUndoAlt className='text-2xl' />
                        <Heading className={''} text={"Return policy in 30 days"} as="p" />
                    </div>

                </Flex>
                <Link to={'/'}>
                    <div className="flex mt-40 mb-32 gap-x-[35px]">
                        <div data-aos="fade-right" className="w-[640px]">
                            <Image imgSrc={Lamp} imgAlt={"lamp"} />
                        </div>
                        <div data-aos="fade-left" className="w-[640px]">
                            <Image imgSrc={watch} imgAlt={"watch"} />
                            <Image className={'mt-8.5'} imgSrc={light} imgAlt={"light"} />
                        </div>
                    </div>
                </Link>
            </Container>
        </>
    )
}

export default Information
