import { useCallback, useState } from 'react'
import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs'
import MobileMenu from './MobileMenu'
import NavbarItem from './NavbarItem'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current)
    }, [])

    return (
        <nav className='w-full fixed z-40'>
            <div
                className='
            px-4
            md:px-16
            py-6
            flex
            flex-row
            items-center
            transition
            duration-500
            bg-zinc-900
            bg-opacity-90
        '
            >
                <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
                    NETFLIX
                </h1>
                <div className='
                    flex-row
                    ml-8
                    gap-7
                    hidden
                    lg:flex
                '>
                    <NavbarItem label="Home" />
                    <NavbarItem label="Series" />
                    <NavbarItem label="Films" />
                    <NavbarItem label="Popular" />
                    <NavbarItem label="Your list" />
                </div>

                <div className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
                    <p className='text-white text-sm'>
                        Browse
                    </p>
                    <BsChevronDown className='text-white transition' />
                    <div className='text-gray-200 hover:text-gray-300 cursor-pointer'>
                        <BsSearch />
                    </div>
                    <div className='text-gray-200 hover:text-gray-300 cursor-pointer'>
                        <BsBell />
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar