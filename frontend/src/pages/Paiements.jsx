import React from 'react'

const Paiements = () => {
  return (
    <div>
      <div className="section-head">
        <div className="icon-tile">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="8" /><text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fill="white" stroke="none">$</text>
          </svg>
        </div>
        <div><h1>Paiements</h1><p>Suivre les règlements des étudiants</p></div>
      </div>
      <div className="panel" style={{maxWidth: 520}}>
    <h3>Enregistrer un paiement</h3>
    <div className="form-grid">
      <div className="field full"><label>Nom de l’étudiant</label><select><option>Sélectionner un étudiant…</option></select></div>
      <div className="field full"><label>Session</label><select><option>Sélectionner une session…</option></select></div>
      <div className="field"><label>Montant (DT)</label><input type="number" placeholder={0} /></div>
      <div className="field"><label>Méthode</label><select><option>Espèce</option><option>Carte</option><option>Virement</option></select></div>
    </div>
    <div className="btn-row"><button className="btn">Valider le paiement</button></div>
  </div></div>

  )
}

export default Paiements