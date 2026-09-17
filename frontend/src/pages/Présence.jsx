import React, { useEffect, useState } from 'react'
import { getAttendance, createAttendance } from '../services/presenceService'
import { getInscriptions } from '../services/inscriptionService'

const Présence = () => {
  const [attendanceList, setAttendanceList] = useState([])
  const [inscriptions, setInscriptions] = useState([])
  const [enrollmentId, setEnrollmentId] = useState('')
  const [status, setStatus] = useState('PRESENT')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const loadAll = async () => {
    try {
      const [attendanceData, inscriptionsData] = await Promise.all([
        getAttendance(),
        getInscriptions(),
      ])
      setAttendanceList(attendanceData)
      setInscriptions(inscriptionsData)
    } catch (error) {
      console.error("Erreur lors du chargement :", error)
    }
  }

  useEffect(() => {
    loadAll()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!enrollmentId || submitting) return

    setSubmitting(true)
    setError('')

    try {
      await createAttendance(enrollmentId, status)
      await loadAll()
      setEnrollmentId('')
      setStatus('PRESENT')
    } catch (err) {
      console.error("Erreur lors de l'enregistrement de la présence :", err)
      setError(
        err.response?.data?.message ||
          "Impossible d'enregistrer la présence. Vérifiez que NestJS est lancé sur le port 3002."
      )
    } finally {
      setSubmitting(false)
    }
  }

  const statusLabels = { PRESENT: 'Présent', ABSENT: 'Absent', LATE: 'Retard' }

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
      <form className="panel" style={{ maxWidth: 520 }} onSubmit={handleSubmit}>
        <h3>Feuille de présence</h3>
        <div className="field full">
          <label htmlFor="enrollment_id">Étudiant / Inscription</label>
          <select id="enrollment_id" value={enrollmentId} onChange={(e) => setEnrollmentId(e.target.value)}>
            <option value="">Sélectionner une inscription…</option>
            {inscriptions.map((i) => (
              <option key={i.enrollment_id} value={i.enrollment_id}>
                {i.etudiant_prenom} {i.etudiant_nom} — {i.formation_titre}
              </option>
            ))}
          </select>
        </div>
        <label style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--navy)', display: 'block', marginTop: 16 }}>Présence</label>
        <div className="radio-row" id="presence-row">
          {Object.entries(statusLabels).map(([value, label]) => (
            <div
              key={value}
              className={`radio-pill${status === value ? ' on' : ''}`}
              data-v={label}
              onClick={() => setStatus(value)}
              style={{ cursor: 'pointer' }}
            >
              {label}
            </div>
          ))}
        </div>
        {error && (
          <div style={{ color: '#DC2626', fontSize: '14px', marginTop: '8px' }}>
            {error}
          </div>
        )}
        <div className="btn-row">
          <button className="btn" type="submit" disabled={submitting}>
            {submitting ? 'Enregistrement...' : 'Enregistrer la présence'}
          </button>
        </div>
      </form>
      <div className="panel table-card">
        <h3>Historique des présences</h3>
        {attendanceList.length === 0 ? (
          <div className="empty-state">
            <strong>Aucune présence enregistrée</strong>
            <span>Les présences enregistrées apparaîtront ici.</span>
          </div>
        ) : (
          <table className="data-table">
            <thead><tr><th>Étudiant</th><th>Formation</th><th>Date</th><th>Statut</th></tr></thead>
            <tbody>
              {attendanceList.map((a) => (
                <tr key={a.attendance_id}>
                  <td>{a.etudiant_prenom} {a.etudiant_nom}</td>
                  <td>{a.formation_titre}</td>
                  <td>{a.attendance_date}</td>
                  <td>{statusLabels[a.status] || a.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default Présence