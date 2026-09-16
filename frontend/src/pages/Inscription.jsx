import React, { useEffect, useState } from 'react'
import { getInscriptions, createInscription } from '../services/inscriptionService'
import { getStudents } from '../services/studentService'
import { getSessions } from '../services/sessionService'

const Inscription = () => {
  const [inscriptions, setInscriptions] = useState([])
  const [students, setStudents] = useState([])
  const [sessions, setSessions] = useState([])
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    student_id: '',
    session_id: '',
  })

  const loadAll = async () => {
    try {
      const [inscriptionsData, studentsData, sessionsData] = await Promise.all([
        getInscriptions(),
        getStudents(),
        getSessions(),
      ])
      setInscriptions(inscriptionsData)
      setStudents(studentsData)
      setSessions(sessionsData)
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
    if (!form.student_id || !form.session_id || submitting) return

    setSubmitting(true)
    setError('')

    try {
      await createInscription(form)
      await loadAll()
      setForm({ student_id: '', session_id: '' })
    } catch (err) {
      console.error("Erreur lors de l'inscription :", err)
      setError(
        err.response?.data?.message ||
          "Impossible d'inscrire l'étudiant. Vérifiez que NestJS est lancé sur le port 3002."
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
            <rect x="5" y="4.5" width="14" height="16" rx="2.4" /><path d="M9 4.5V3.2A1.2 1.2 0 0 1 10.2 2h3.6A1.2 1.2 0 0 1 15 3.2v1.3M9 13l2 2 4-4.2" />
          </svg>
        </div>
        <div><h1>Inscriptions</h1><p>Associer un étudiant à une session</p></div>
      </div>
      <form className="panel" style={{ maxWidth: 520 }} onSubmit={handleSubmit}>
        <h3>Inscrire un étudiant</h3>
        <div className="form-grid">
          <div className="field full">
            <label htmlFor="student_id">Étudiant</label>
            <select id="student_id" name="student_id" value={form.student_id} onChange={handleChange}>
              <option value="">Sélectionner un étudiant…</option>
              {students.map((s) => (
                <option key={s.student_id} value={s.student_id}>{s.prenom} {s.nom}</option>
              ))}
            </select>
          </div>
          <div className="field full">
            <label htmlFor="session_id">Session</label>
            <select id="session_id" name="session_id" value={form.session_id} onChange={handleChange}>
              <option value="">Sélectionner une session…</option>
              {sessions.map((s) => (
                <option key={s.session_id} value={s.session_id}>
                  {s.formation_titre} — {s.formateur_prenom} {s.formateur_nom} ({s.start_date})
                </option>
              ))}
            </select>
          </div>
        </div>
        {error && (
          <div style={{ color: '#DC2626', fontSize: '14px', marginTop: '8px' }}>
            {error}
          </div>
        )}
        <div className="btn-row">
          <button className="btn" type="submit" disabled={submitting}>
            {submitting ? 'Inscription en cours...' : 'Inscrire'}
          </button>
        </div>
      </form>
      <div className="panel table-card">
        <h3>Liste des inscriptions</h3>
        {inscriptions.length === 0 ? (
          <div className="empty-state">
            <strong>Aucune inscription pour le moment</strong>
            <span>Les inscriptions créées apparaîtront ici.</span>
          </div>
        ) : (
          <table className="data-table">
            <thead><tr><th>Étudiant</th><th>Formation</th><th>Début</th><th>Fin</th><th>Date d'inscription</th><th>Statut</th></tr></thead>
            <tbody>
              {inscriptions.map((i) => (
                <tr key={i.enrollment_id}>
                  <td>{i.etudiant_prenom} {i.etudiant_nom}</td>
                  <td>{i.formation_titre}</td>
                  <td>{i.start_date}</td>
                  <td>{i.end_date}</td>
                  <td>{i.registration_date}</td>
                  <td>{i.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default Inscription