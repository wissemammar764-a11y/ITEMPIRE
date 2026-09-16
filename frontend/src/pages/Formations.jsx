import React, { useEffect, useState } from 'react'
import { getFormations, createFormation } from '../services/formationService'

const Formations = () => {
  const [formations, setFormations] = useState([])
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    titre: '',
    description: '',
    prix: '',
    duree: '',
  })

  const loadFormations = async () => {
    try {
      const data = await getFormations()
      setFormations(data)
    } catch (error) {
      console.error("Erreur lors du chargement des formations :", error)
    }
  }

  useEffect(() => {
    loadFormations()
  }, [])

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!form.titre.trim() || submitting) return

    setSubmitting(true)
    setError('')

    try {
      await createFormation(form)
      await loadFormations()
      setForm({ titre: '', description: '', prix: '', duree: '' })
    } catch (err) {
      console.error("Erreur lors de la création de la formation :", err)
      setError(
        err.response?.data?.message ||
          "Impossible de créer la formation. Vérifiez que NestJS est lancé sur le port 3002."
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
            <path d="M4 5.5c2.5-1 5-1 8 0v13c-3-1-5.5-1-8 0Z" /><path d="M20 5.5c-2.5-1-5-1-8 0v13c3-1 5-1 8 0Z" />
          </svg>
        </div>
        <div><h1>Formations</h1><p>Catalogue des formations proposées</p></div>
      </div>
      <form className="panel" onSubmit={handleSubmit}>
        <h3>Ajouter une formation</h3>
        <div className="form-grid">
          <div className="field full"><label htmlFor="titre">Titre</label><input id="titre" name="titre" type="text" placeholder="Développement Web Full-Stack" value={form.titre} onChange={handleChange} /></div>
          <div className="field full"><label htmlFor="description">Description</label><textarea id="description" name="description" placeholder="Détail du contenu de la formation…" value={form.description} onChange={handleChange} /></div>
          <div className="field"><label htmlFor="prix">Prix (DT)</label><input id="prix" name="prix" type="number" placeholder="0" value={form.prix} onChange={handleChange} /></div>
          <div className="field"><label htmlFor="duree">Durée (heures)</label><input id="duree" name="duree" type="number" placeholder="0" value={form.duree} onChange={handleChange} /></div>
        </div>
        {error && (
          <div style={{ color: '#DC2626', fontSize: '14px', marginTop: '8px' }}>
            {error}
          </div>
        )}
        <div className="btn-row">
          <button className="btn" type="submit" disabled={submitting}>
            {submitting ? 'Création en cours...' : 'Créer la formation'}
          </button>
        </div>
      </form>
      <div className="panel table-card">
        <h3>Liste des formations</h3>
        {formations.length === 0 ? (
          <div className="empty-state">
            <div className="icon-tile">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5.5c2.5-1 5-1 8 0v13c-3-1-5.5-1-8 0Z" /><path d="M20 5.5c-2.5-1-5-1-8 0v13c3-1 5-1 8 0Z" />
              </svg>
            </div>
            <strong>Aucune formation pour le moment</strong>
            <span>Les formations créées apparaîtront ici.</span>
          </div>
        ) : (
          <table className="data-table">
            <thead><tr><th>Titre</th><th>Description</th><th>Prix (DT)</th><th>Durée (h)</th></tr></thead>
            <tbody>
              {formations.map((formation) => (
                <tr key={formation.formation_id}>
                  <td>{formation.title}</td>
                  <td>{formation.description || '-'}</td>
                  <td>{formation.price ?? '-'}</td>
                  <td>{formation.duration_hours ?? '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default Formations