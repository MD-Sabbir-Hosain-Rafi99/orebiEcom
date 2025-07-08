import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/logo.png'
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="bg-white py-[40px]">
                <Container>
                    <Flex>
                        <div className="w-[40%]">
                            <Image imgSrc={Logo} />
                        </div>
                        <div className='w-[60%] '>
                            <ul className="flex items-center gap-x-[40px]">
                                <Link to={'/'}>
                                    <li className='font-fontStyle text-textColor text-[14px] hover:text-black hover:font-black'>Home</li>
                                </Link>
                                <Link to={'/shop'}>
                                    <li className='font-fontStyle text-textColor text-[14px] hover:text-black hover:font-black'>Shop</li>
                                </Link>
                                <li className='font-fontStyle text-textColor text-[14px] hover:text-black hover:font-black'>About</li>
                                <li className='font-fontStyle text-textColor text-[14px] hover:text-black hover:font-black'>Contacts</li>
                                <li className='font-fontStyle text-textColor text-[14px] hover:text-black hover:font-black'>Journal</li>
                            </ul>
                        </div>
                        <div className=""></div>
                    </Flex>
                </Container>
            </div>
            <div className="bg-categoryC py-[30px]">
                <Container>
                    <Flex className={"justify-between"}>
                        <div className="flex items-center gap-x-4 font-fontStyle">
                            <HiOutlineBars3BottomLeft />
                            <p>Shop by Category</p>
                        </div>
                        <div className="relative">
                            <input className='bg-white py-[17px] w-[600px] pl-[21px] focus:outline-none' type="search" name="" id="" placeholder='Search Products' />
                            <FaSearch className='absolute right-4 top-1/2 -translate-1/2' />
                        </div>
                        <div className="flex items-center gap-x-5">
                            <div className="flex items-center">
                                <FaUser />
                                <FaCaretDown />
                            </div>
                            <FaShoppingCart />
                        </div>
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Header
