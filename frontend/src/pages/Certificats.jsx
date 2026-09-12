import React from 'react'

const Certificats = () => {
  return (
    <div>
      <div className="section-head">
        <div className="icon-tile">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4.3" />
            <path d="M9 11.7 7.3 20.5 12 18l4.7 2.5L15 11.7" />
          </svg>
        </div>
        <div><h1>Certificats</h1><p>Générer les certificats de réussite</p></div>
      </div>
      <div className="panel" style={{maxWidth: 520}}>
        <h3>Générer un certificat</h3>
        <div className="field full"><label htmlFor="certificate-student">Étudiant</label><select id="certificate-student"><option>Sélectionner un étudiant…</option></select></div>
        <div className="btn-row"><button className="btn" type="button">Générer le certificat</button></div>
      </div>
    </div>

  )
}

export default Certificats