import React from 'react'
import { Fade, Flip, Slide } from 'react-awesome-reveal'

const Podcat = () => {
  return (
    <div>
        <div className='flex justify-center items-center'>
            
            <div className=' flex justify-center flex-col text-center h-28 md:h-[300px]'>
            <Slide>
                <h1 className=' w-full text-3xl md:text-5xl h-11 md:h-16 font-bold'>Podcast</h1>
                <p className=' md:w-[592px] text-base md:text-2xl'>Dive into tech's latest frontiers with our captivating <br />    
                   podcast – where innovation meets exploration</p>
            </Slide>
            </div>
            
        </div>
    </div>
  )
}

export default Podcat