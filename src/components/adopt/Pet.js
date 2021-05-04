import React from 'react'
import { FaArrowLeft, FaHeart } from 'react-icons/fa';
import { useParams, useHistory } from 'react-router'
import { Link } from 'react-router-dom';
import petList from '../data/petList';
import WhyNA from './WhyNA';

function Pet() {

  let {id} = useParams();

  const history = useHistory();

  function goBackHandle() {
    history.goBack();
  }

  return (
    <div className="container">
      {petList
        // eslint-disable-next-line
        .filter((animal) => animal.id == id)
        .map(({id, nom, img, alt, description, age, race, genre, source, sourcelink, dispo}) => (
          <div key={id}>
            <h1>{nom}</h1>
            <br/>
            <div className="row mb-3">
              <div className="ml-3 mr-auto">
                <button type="button" className="btn btn-primary btn-lg" onClick={goBackHandle}><FaArrowLeft/> Retour</button>
              </div>
              <div className="mr-3 ml-auto">
                {dispo ? (
                    <Link to="/contact">
                      <button className="btn btn-warning btn-lg"><FaHeart/> Adopter</button>
                    </Link>
                  ) : (
                    <button className="btn btn-secondary btn-lg" disabled><FaHeart/> Adopter</button>  
                  )}
              </div>
            </div>
            <div className={`${dispo ? ("card shadow-sm mb-3 border border-warning") : ("card shadow-sm mb-3 border border-secondary")}`}>
              <div className="row no-gutters">
                <div className="col-md-7">
                  <img
                    className="d-block w-100"
                    src={img}
                    alt={alt}
                  />
                  {dispo ? ( 
                      <div className="price text-center">Disponible</div>
                    ) : (
                      <div className="priceno text-center">Bientôt à l'adoption</div>
                    ) 
                  }
                </div>
                <div className="col-md-5">
                  <div className="card-body">
                    <h5 className="card-title">{nom}</h5>
                    <div>Race : {race}</div>
                    <div>Âge : {age > 1 ? (<span>{age} ans</span>) : (<span>{age} an</span>)}</div>
                    <div>Genre : {genre}</div>
                    <br/>
                    <small>Source : <a href={sourcelink}>{source}</a></small>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${dispo ? ("card shadow-sm mb-3 border border-warning") : ("card shadow-sm mb-3 border border-secondary")}`}>
              <h5 className="card-header bg-transparent">Descriptif de {nom}</h5>
              <div className="card-body">
                <div>{description}</div>
              </div>
            </div>
            {!dispo && (<WhyNA/>)}
            <br/>

          </div>
        ))}
    </div>
  )
}

export default Pet