import React from 'react'
import { FaUndo } from 'react-icons/fa'

function Categories({ setActiveCategory, categorie, activeCategory }) {
  return (
    <div>
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className="custom-select custom-select-lg w-25"
      >
        <option value=''>Catégories</option>
        {categorie.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={()=> setActiveCategory('')} className="btn btn-primary btn-lg"><FaUndo/> Réinitialiser</button>
    </div>
  )
}
export default Categories