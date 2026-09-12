import React from 'react'

const Formations = () => {
  return (
    <div>
      <div className="section-head">
        <div className="icon-tile">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 5.5c2.5-1 5-1 8 0v13c-3-1-5.5-1-8 0Z" /><path d="M20 5.5c-2.5-1-5-1-8 0v13c3-1 5-1 8 0Z" />
          </svg>
        </div>
        <div><h1>Formations</h1><p>Catalogue des formations proposées</p></div>
      </div>
      <div className="panel">
    <h3>Ajouter une formation</h3>
    <div className="form-grid">
      <div className="field full"><label>Titre</label><input type="text" placeholder="Développement Web Full-Stack" /></div>
      <div className="field full"><label>Description</label><textarea placeholder="Détail du contenu de la formation…" defaultValue={""} /></div>
      <div className="field"><label>Prix (DT)</label><input type="number" placeholder={0} /></div>
      <div className="field"><label>Durée (heures)</label><input type="number" placeholder={0} /></div>
    </div>
    <div className="btn-row"><button className="btn">Créer la formation</button></div>
  </div></div>

  )
}

export default Formations