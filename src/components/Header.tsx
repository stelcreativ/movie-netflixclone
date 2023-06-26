import React from 'react'

const Header = () => {
    return (
        <header>
            <div className='fixed flex items-center justify-between p-4 z-[100] w-full absolute transition-all'>
                <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
                    NETFLIX
                </h1>

            </div>
        </header>
    )
}

export default Header