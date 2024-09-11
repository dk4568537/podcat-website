import React, { useRef } from 'react'

const UseRefPlayer = () => {
    const videoRef = useRef();

    const handlePlay = () => {
      videoRef.current.play();
    };
    const handlePause = () => {
      videoRef.current.pause();
    };
  return (
    <div className=' flex justify-center items-center flex-col py-20'>
    <div className=" flex justify-center">
      <buttun className='bg-red-600 hover:bg-green-900 text-white border px-20 py-3 m-5' onClick={handlePlay}>
        Play
      </buttun>
      <buttun className='border px-16 py-3 m-5 bg-red-600 hover:bg-green-900 text-white' onClick={handlePause}>
        Pause
      </buttun>
    </div>
    <video width="410" height="360" ref={videoRef}>
      <source src="/videos/lovelysong.mp4" />
    </video>
  </div>
  )
}

export default UseRefPlayer;