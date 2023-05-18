import React from 'react'
import { Carousel, CarouselItem,} from 'react-bootstrap'

function Banner() {
    
  return (
   <Carousel>
    <Carousel.Item>
        <img className="d-block w-100" height="200" src="https://www.freewebheaders.com/wp-content/gallery/cats/cute-sleepy-kitten-website-header.jpg"></img>    
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100" height="200" src="https://www.freewebheaders.com/wp-content/gallery/cats/cache/cats-header-20734-800x200.jpg-nggid03203-ngg0dyn-480x141x100-00f0w010c010r110f110r010t010.jpg"></img>    
        <Carousel.Caption className="text-dark "><h3>IM THE CAT-TAIN NOW</h3></Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100" height="200" src="https://www.freewebheaders.com/wp-content/gallery/cats/cats-header-20727-800x200.jpg"></img>    
        <Carousel.Caption className="text-dark"><h3>Test</h3></Carousel.Caption>
    </Carousel.Item>

   </Carousel>
  )
}

export default Banner