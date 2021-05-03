import React, { useState } from 'react'
import petList from '../data/petList'
import AdoptList from './AdoptList'
import Categories from './Categories'

function Adopt() {

  const [activeCategory, setActiveCategory] = useState('')
	const categorie = petList.reduce(
		(acc, elem) =>
			acc.includes(elem.categorie) ? acc : acc.concat(elem.categorie),
		[]
	)

  return (
    <>
      <div className="container">
        <h1>Nos animaux</h1>
        <br/>
        <Categories
          categorie={categorie}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
        <br/>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {petList.map(({id, nom, race, img, alt, dispo, categorie}) => 
            !activeCategory || activeCategory === categorie ? (
              <div key={id} >
                <AdoptList
                  id={id}
                  img={img}
                  alt={alt}
                  nom={nom}
                  race={race}
                  dispo={dispo}
                />
              </div>
            ) : null
          )}
        </div>
        <br/>
      </div>
    </>
  )
}
export default Adopt