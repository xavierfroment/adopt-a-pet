import React from 'react'

function WhyNA() {
  return (
    <div className="card shadow-sm border border-secondary">
      <h5 className="card-header" style={{backgroundColor:"#a0a6ab", color:"#ffffff"}}>Pourquoi cet animal n'est pas disponible ?</h5>
      <div className="card-body">
        <h6>Trop jeune</h6>
        <p>Il se peut que l'animal présenté soit encore dans sa phase de sevrage. Quand il sera entièrement sevré, il sera disponible à l'adoption.</p>
        <h6>En quarantaine</h6>
        <p>Cet animal vient d'arriver dans notre refuge. Afin d'éviter toute contagion avec les autres animaux, il est placé en quarantaine afin de vérifier sa bonne santé. Cette étape passée, il sera bientôt disponible à l'adoption</p>
      </div>
    </div>
  )
}

export default WhyNA
