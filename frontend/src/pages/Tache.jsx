import React from 'react'

const Tache = () => {
  return (
    <div>
      <div className="section-head">
        <div className="icon-tile">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4.5" y="5.5" width="3.2" height="3.2" rx="0.8" />
            <path d="m5.4 7.1.7.7 1.4-1.4M10.5 7.1h9" />
            <rect x="4.5" y="11" width="3.2" height="3.2" rx="0.8" />
            <path d="M10.5 12.6h9" />
            <rect x="4.5" y="16.5" width="3.2" height="3.2" rx="0.8" />
            <path d="M10.5 18.1h9" />
          </svg>
        </div>
        <div><h1>Tâches</h1><p>Organiser les tâches de l'équipe</p></div>
      </div>
      <div className="panel" style={{maxWidth: 520}}>
        <h3>Créer une tâche</h3>
        <div className="form-grid">
          <div className="field full"><label htmlFor="task-title">Titre</label><input id="task-title" type="text" placeholder="Titre de la tâche" /></div>
          <div className="field full"><label htmlFor="task-description">Description</label><textarea id="task-description" placeholder="Détail de la tâche…" defaultValue={""} /></div>
          <div className="field full"><label htmlFor="task-trainer">Nom du formateur</label><select id="task-trainer"><option>Sélectionner un formateur…</option></select></div>
          <div className="field"><label htmlFor="task-due-date">Date limite</label><input id="task-due-date" type="date" /></div>
        </div>
        <div className="btn-row"><button className="btn" type="button">Créer la tâche</button></div>
      </div>
    </div>

  )
}

export default Tache