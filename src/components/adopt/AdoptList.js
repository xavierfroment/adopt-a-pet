import React from 'react'
import { FaHeart, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './AdoptList.css'

function AdoptList({id, nom, race, img, alt, dispo}) {
  return (
    <div className="col mb-3" key={id}>
      <div className={`${dispo ? ( "card shadow-sm border border-warning") : ("card shadow-sm border border-secondary")}`} style={{minHeight:"450px"}}>
        <img src={img} alt={alt} className="card-img-top m-auto" />
        {dispo ? ( 
            <div className="text-center price">Disponible</div>
          ) : ( 
            <div className="text-center priceno">Bientôt à l'adoption</div> 
          ) 
        }
        <div className="card-body">
          <h5 className="card-title">{nom}</h5>
          <p className="card-text">{race}</p>
        </div>
        <div className="card-footer bg-transparent">
          <div className="text-center">
            <Link to={`/pet/${id}`}>
              <button className="btn btn-primary mr-2"><FaSearch/> Consulter</button>
            </Link>
            {dispo ? (
                <Link to="/contact">
                  <button className="btn btn-warning"><FaHeart/> Adopter</button>
                </Link>
              ) : (
                <button className="btn btn-secondary" disabled><FaHeart/> Adopter</button>
              ) 
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default AdoptList