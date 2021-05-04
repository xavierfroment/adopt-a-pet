import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import LogoSPA from '../img/LogoSPA.png'

function Liens() {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-4">
        <div className="col mb-3">
          <div className="card shadow-sm border border-primary" style={{minHeight:"350px"}}>
            <h5 className="card-header text-center">FAQ</h5>
            <div className="card-body text-justify">
              Une question ? Un renseignement ? Vous pouvez vous rendre dans notre Foire Aux Questions, tout simplement en cliquant sur le bouton ci-dessous.
            </div>
            <div className="card-footer text-center">
              <Link to="/about">
                <button className="btn btn-primary btn-lg w-100"><FaSearch/> FAQ</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div className="card shadow-sm border border-primary" style={{minHeight:"350px"}}>
            <h5 className="card-header text-center">ADOPTEZ</h5>
            <div className="card-body text-justify">
              Vous recherchez un animal en particulier ? Vous recherchez la douceur d'un chat ? La complicité d'un chien ? Cliquez sur le bouton ci-dessous pour consulter la liste de nos animaux.
            </div>
            <div className="card-footer text-center">
              <Link to="/adopt">
                <button className="btn btn-primary btn-lg w-100"><FaSearch/> Adoptez</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div className="card shadow-sm border border-warning" style={{minHeight:"350px"}}>
            <h5 className="card-header text-center">SPA</h5>
            <div className="card-body text-justify">
              Si vous souhaitez réellement faire une bonne action et adoptez un animal, vous pouvez vous rendre directement sur le site de la SPA en cliquant sur l'image ci-dessous.
              <br/>
              <div className="text-center">
                <img 
                  src={LogoSPA} 
                  alt="Site de la SPA.fr"
                  style={{maxWidth:"20%"}}
                /> 
              </div>
            </div>
            <div className="card-footer text-center">
              <button 
                className="btn btn-warning btn-lg w-100" 
                onClick={() => window.open("https://www.la-spa.fr/","_blank")}
                style={{cursor:"pointer"}}
              ><FaSearch/> Visiter
              </button>
            </div>
          </div>
        </div>
      </div>
      <br/>
    </>
  )
}
export default Liens