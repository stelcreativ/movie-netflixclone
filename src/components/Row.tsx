import React from 'react'
import { Movie } from "../typings"
import Thumbnail from './Thumbnail'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

interface RowProps {
    title: string,
    movies: Movie[]
}
const Row: React.FC<RowProps> = ({ title, movies }) => {
    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    // onClick={slideLeft}
                    className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
                <div

                    className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
                >
                    {movies.map((movie) => (
                        <Thumbnail key={movie.id} movie={movie} />
                    ))}
                </div>
                <MdChevronRight
                    //onClick={slideRight}
                    className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
            </div>
        </>
    )
}

export default Row