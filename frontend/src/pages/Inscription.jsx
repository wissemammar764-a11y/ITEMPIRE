import React from 'react'

const Inscription = () => {
  return (
    <div>
      <div className="section-head">
        <div className="icon-tile">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="4.5" width="14" height="16" rx="2.4" /><path d="M9 4.5V3.2A1.2 1.2 0 0 1 10.2 2h3.6A1.2 1.2 0 0 1 15 3.2v1.3M9 13l2 2 4-4.2" />
          </svg>
        </div>
        <div><h1>Inscriptions</h1><p>Associer un étudiant à une session</p></div>
      </div>
      <div className="panel" style={{maxWidth: 520}}>
    <h3>Inscrire un étudiant</h3>
    <div className="form-grid">
      <div className="field full"><label>Étudiant</label><select><option>Sélectionner un étudiant…</option></select></div>
      <div className="field full"><label>Session</label><select><option>Sélectionner une session…</option></select></div>
    </div>
    <div className="btn-row"><button className="btn">Inscrire</button></div>
  </div></div>

  )
}

export default Inscription