import React from 'react'
import Caroussel from './Caroussel'
import Disclamer from './Disclamer'
import Liens from './Liens'

function Home() {
  return (
    <div className="container">
      <h1>Bienvenue chez Adopt'A Pet !</h1>
      <br/>
      <Caroussel/>
      <Disclamer/>
      <Liens/>
    </div>
  )
}
export default Home