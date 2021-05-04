import React from 'react'
import { Carousel } from 'react-bootstrap'
import petList from '../data/petList'
import './Caroussel.css'

const Caroussel = () => {
  return (
    <>
      <h3>Nos animaux stars</h3>
      <br/>
      <Carousel className="shadow-sm">
        <Carousel.Item>
          <div className="image-car">
            <img
              className="d-block w-100"
              src={petList[0].img}
              alt={petList[0].alt}
            />
          </div>
          <Carousel.Caption>
            <h3>{petList[0].nom}</h3>
            <p>{petList[0].race}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-car">
            <img
              className="d-block w-100"
              src={petList[11].img}
              alt={petList[11].alt}
            />
          </div>
          <Carousel.Caption>
            <h3>{petList[11].nom}</h3>
            <p>{petList[11].race}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-car">
            <img
              className="d-block w-100"
              src={petList[20].img}
              alt={petList[20].alt}
            />
          </div>
          <Carousel.Caption>
            <h3>{petList[20].nom}</h3>
            <p>{petList[20].race}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br/>
    </>
  )
}
export default Caroussel