import React from 'react'
import Caroussel from './Caroussel'
import Disclamer from './Disclamer'

function Home() {
  return (
    <div className="container">
      <h1>Bienvenue chez Adopt'A Pet !</h1>
      <br/>
      <Caroussel/>
      <br/>
      <Disclamer/>
      <br/>
    </div>
  )
}
export default Home