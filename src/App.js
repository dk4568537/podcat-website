import React from 'react'
import Navbar from './navbar/Navbar'
import Podcat from './podcat/Podcat'
import Embrace from './embrace/Embrace'
import Inspring from './inspring/Inspring'
import Card from './card/Card'
import VideoCompound from './videocompound/VideoCompound'
import Content from './content/Content'
import Footer from './footer/Footer'
import { Fade } from 'react-awesome-reveal'
import UseRefPlayer from './useref/UseRefPlayer'



const App = () => {
  return (
    <div>
     <Fade>
     <Navbar/>
      <Podcat/>
      <Embrace/>
      <Inspring/>
      <Card/>
      <VideoCompound/>
      <Content/>
      <Footer/>
     </Fade>
     <UseRefPlayer/>
    </div>
  )
}

export default App