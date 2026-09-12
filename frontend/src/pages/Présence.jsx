import React from 'react'

const Présence = () => {
  return (
    <div>
      <div className="section-head">
        <div className="icon-tile">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="8.2" /><path d="m8.5 12.3 2.3 2.3 4.7-5" />
          </svg>
        </div>
        <div><h1>Présences</h1><p>Feuille de présence par session</p></div>
      </div>
      <div className="panel" style={{maxWidth: 520}}>
    <h3>Feuille de présence</h3>
    <div className="field full"><label>Nom de l’étudiant</label><select><option>Sélectionner un étudiant…</option></select></div>
      <div className="field full"><label>Session</label><select><option>Sélectionner une session…</option></select></div>
    <label style={{fontSize: '12.5px', fontWeight: 600, color: 'var(--navy)', display: 'block', marginTop: 16}}>Présence</label>
    <div className="radio-row" id="presence-row">
      <div className="radio-pill on" data-v="Présent">Présent</div>
      <div className="radio-pill" data-v="Absent">Absent</div>
      <div className="radio-pill" data-v="Retard">Retard</div>
    </div>
  </div></div>

  )
}

export default Présence