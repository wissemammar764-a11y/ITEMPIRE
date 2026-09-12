import React from 'react'

const Sessions = () => {
  return (
    <div>
      <div className="section-head">
        <div className="icon-tile">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="5.5" width="16" height="14" rx="2" /><path d="M4 10h16M8 3.5v3M16 3.5v3" />
          </svg>
        </div>
        <div><h1>Sessions</h1><p>Planifier les sessions de formation</p></div>
      </div>
      <div className="panel" style={{maxWidth: 520}}>
    <h3>Planifier une session</h3>
    <div className="form-grid">
      <div className="field full"><label>Formation</label>
        <select><option>Python</option><option>Machine Learning</option><option>Power BI</option></select>
      </div>
      <div className="field"><label>Date début</label><input type="date" /></div>
      <div className="field"><label>Date fin</label><input type="date" /></div>
    </div>
    <div className="btn-row"><button className="btn">Créer la session</button></div>
  </div></div>

  )
}

export default Sessions