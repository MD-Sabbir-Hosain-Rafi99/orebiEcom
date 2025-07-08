import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Image from '../Image'
import Logo from '../../assets/logo.png'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-categoryC py-[30px]'>
            <Container>
                <div className='flex justify-between'>
                    <div className="">
                        <Heading className={'font-bold font-fontStyle text-base leading-10'} text="Menu" as={"h3"} />
                        <ul className="leading-8">
                            <li className='font-fontStyle text-textColor text-[14px]'>Home</li>
                            <li className='font-fontStyle text-textColor text-[14px]'>Shop</li>
                            <li className='font-fontStyle text-textColor text-[14px]'>About</li>
                            <li className='font-fontStyle text-textColor text-[14px]'>Contacts</li>
                            <li className='font-fontStyle text-textColor text-[14px]'>Journal</li>
                        </ul>
                        <div className="flex items-center gap-x-6 mt-6">
                            <FaFacebookF />
                            <FaLinkedinIn />
                            <FaInstagram />
                        </div>
                    </div>
                    <div className="">
                        <Heading className={'font-bold font-fontStyle text-base leading-10'} text="SHOP" as={"h3"} />
                        <ul className="leading-8">
                            <li className='font-fontStyle text-textColor text-[14px]'>Category 1</li>
                            <li className='font-fontStyle text-textColor text-[14px]'>Category 2</li>
                            <li className='font-fontStyle text-textColor text-[14px]'>Category 3</li>
                            <li className='font-fontStyle text-textColor text-[14px]'>Category 4</li>
                            <li className='font-fontStyle text-textColor text-[14px]'>Category 5</li>
                        </ul>
                    </div>
                    <div className="">
                        <Heading className={'font-bold font-fontStyle text-base leading-10'} text="HELP" as={"h3"} />
                        <ul className="leading-8">
                            <li className='font-fontStyle text-textColor text-[14px]'>Privacy Policy</li>
                            <li className='font-fontStyle text-textColor text-[14px]'>Terms & Conditions</li>
                            <li className='font-fontStyle text-textColor text-[14px]'>Special E-shop</li>
                            <li className='font-fontStyle text-textColor text-[14px]'>Shipping</li>
                            <li className='font-fontStyle text-textColor text-[14px]'>Secure Payments</li>
                        </ul>
                    </div>
                    <div className="">
                        <Heading className={'font-bold'} text="(052) 611-5711" as={'h3'} />
                        <Heading className={'font-bold mb-4'} text="company@domain.com" as={'h3'} />
                        <Heading text="575 Crescent Ave. Quakertown, PA 18951" as={'p'} />
                    </div>
                    <div className="">
                        <Image imgSrc={Logo} imgAlt={Logo} />
                        <div className="">
                        <Heading className={"text-[14px] mt-48"} text={"2020 Orebi Minimal eCommerce Figma Template by Adveits"} as="p"/> 
                    </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-8">
                        
                    
                </div>
            </Container>
        </div>
    )
}

export default Footer
