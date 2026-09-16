import React, { useEffect, useState } from 'react'
import { getSessions, createSession } from '../services/sessionService'
import { getFormations } from '../services/formationService'
import { getTrainers } from '../services/trainerService'

const Sessions = () => {
  const [sessions, setSessions] = useState([])
  const [formations, setFormations] = useState([])
  const [trainers, setTrainers] = useState([])
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    formation_id: '',
    trainer_id: '',
    room: '',
    mode: 'ONSITE',
    schedule: '',
    start_date: '',
    end_date: '',
  })

  const loadAll = async () => {
    try {
      const [sessionsData, formationsData, trainersData] = await Promise.all([
        getSessions(),
        getFormations(),
        getTrainers(),
      ])
      setSessions(sessionsData)
      setFormations(formationsData)
      setTrainers(trainersData)
    } catch (error) {
      console.error("Erreur lors du chargement :", error)
    }
  }

  useEffect(() => {
    loadAll()
  }, [])

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!form.formation_id || !form.trainer_id || !form.start_date || !form.end_date || submitting) return

    setSubmitting(true)
    setError('')

    try {
      await createSession(form)
      await loadAll()
      setForm({ formation_id: '', trainer_id: '', room: '', mode: 'ONSITE', schedule: '', start_date: '', end_date: '' })
    } catch (err) {
      console.error("Erreur lors de la création de la session :", err)
      setError(
        err.response?.data?.message ||
          "Impossible de créer la session. Vérifiez que NestJS est lancé sur le port 3002."
      )
    } finally {
      setSubmitting(false)
    }
  }

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
      <form className="panel" style={{ maxWidth: 520 }} onSubmit={handleSubmit}>
        <h3>Planifier une session</h3>
        <div className="form-grid">
          <div className="field full">
            <label htmlFor="formation_id">Formation</label>
            <select id="formation_id" name="formation_id" value={form.formation_id} onChange={handleChange}>
              <option value="">-- Choisir une formation --</option>
              {formations.map((f) => (
                <option key={f.formation_id} value={f.formation_id}>{f.title}</option>
              ))}
            </select>
          </div>
          <div className="field full">
            <label htmlFor="trainer_id">Formateur</label>
            <select id="trainer_id" name="trainer_id" value={form.trainer_id} onChange={handleChange}>
              <option value="">-- Choisir un formateur --</option>
              {trainers.map((t) => (
                <option key={t.trainer_id} value={t.trainer_id}>{t.prenom} {t.nom}</option>
              ))}
            </select>
          </div>
          <div className="field"><label htmlFor="room">Salle</label><input id="room" name="room" type="text" placeholder="Salle A1" value={form.room} onChange={handleChange} /></div>
          <div className="field">
            <label htmlFor="mode">Mode</label>
            <select id="mode" name="mode" value={form.mode} onChange={handleChange}>
              <option value="ONSITE">Présentiel</option>
              <option value="ONLINE">En ligne</option>
              <option value="HYBRID">Hybride</option>
            </select>
          </div>
          <div className="field full"><label htmlFor="schedule">Horaire</label><input id="schedule" name="schedule" type="text" placeholder="Lun/Mer 18h-20h" value={form.schedule} onChange={handleChange} /></div>
          <div className="field"><label htmlFor="start_date">Date début</label><input id="start_date" name="start_date" type="date" value={form.start_date} onChange={handleChange} /></div>
          <div className="field"><label htmlFor="end_date">Date fin</label><input id="end_date" name="end_date" type="date" value={form.end_date} onChange={handleChange} /></div>
        </div>
        {error && (
          <div style={{ color: '#DC2626', fontSize: '14px', marginTop: '8px' }}>
            {error}
          </div>
        )}
        <div className="btn-row">
          <button className="btn" type="submit" disabled={submitting}>
            {submitting ? 'Création en cours...' : 'Créer la session'}
          </button>
        </div>
      </form>
      <div className="panel table-card">
        <h3>Liste des sessions</h3>
        {sessions.length === 0 ? (
          <div className="empty-state">
            <strong>Aucune session planifiée</strong>
            <span>Les sessions créées apparaîtront ici.</span>
          </div>
        ) : (
          <table className="data-table">
            <thead><tr><th>Formation</th><th>Formateur</th><th>Salle</th><th>Mode</th><th>Début</th><th>Fin</th><th>Statut</th></tr></thead>
            <tbody>
              {sessions.map((s) => (
                <tr key={s.session_id}>
                  <td>{s.formation_titre}</td>
                  <td>{s.formateur_prenom} {s.formateur_nom}</td>
                  <td>{s.room || '-'}</td>
                  <td>{s.mode}</td>
                  <td>{s.start_date}</td>
                  <td>{s.end_date}</td>
                  <td>{s.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default Sessions