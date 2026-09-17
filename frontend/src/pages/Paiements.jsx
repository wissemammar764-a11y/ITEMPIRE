import React, { useEffect, useState } from 'react'
import { getPaiements, createPaiement } from '../services/paiementService'
import { getInscriptions } from '../services/inscriptionService'

const Paiements = () => {
  const [paiements, setPaiements] = useState([])
  const [inscriptions, setInscriptions] = useState([])
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    enrollment_id: '',
    amount: '',
    payment_method: 'Espèce',
  })

  const loadAll = async () => {
    try {
      const [paiementsData, inscriptionsData] = await Promise.all([
        getPaiements(),
        getInscriptions(),
      ])
      setPaiements(paiementsData)
      setInscriptions(inscriptionsData)
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
    if (!form.enrollment_id || !form.amount || submitting) return

    setSubmitting(true)
    setError('')

    try {
      await createPaiement(form)
      await loadAll()
      setForm({ enrollment_id: '', amount: '', payment_method: 'Espèce' })
    } catch (err) {
      console.error("Erreur lors de l'enregistrement du paiement :", err)
      setError(
        err.response?.data?.message ||
          "Impossible d'enregistrer le paiement. Vérifiez que NestJS est lancé sur le port 3002."
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
            <circle cx="12" cy="12" r="8" /><text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fill="white" stroke="none">$</text>
          </svg>
        </div>
        <div><h1>Paiements</h1><p>Suivre les règlements des étudiants</p></div>
      </div>
      <form className="panel" style={{ maxWidth: 520 }} onSubmit={handleSubmit}>
        <h3>Enregistrer un paiement</h3>
        <div className="form-grid">
          <div className="field full">
            <label htmlFor="enrollment_id">Étudiant / Inscription</label>
            <select id="enrollment_id" name="enrollment_id" value={form.enrollment_id} onChange={handleChange}>
              <option value="">Sélectionner une inscription…</option>
              {inscriptions.map((i) => (
                <option key={i.enrollment_id} value={i.enrollment_id}>
                  {i.etudiant_prenom} {i.etudiant_nom} — {i.formation_titre}
                </option>
              ))}
            </select>
          </div>
          <div className="field"><label htmlFor="amount">Montant (DT)</label><input id="amount" name="amount" type="number" placeholder="0" value={form.amount} onChange={handleChange} /></div>
          <div className="field">
            <label htmlFor="payment_method">Méthode</label>
            <select id="payment_method" name="payment_method" value={form.payment_method} onChange={handleChange}>
              <option>Espèce</option>
              <option>Carte</option>
              <option>Virement</option>
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
            {submitting ? 'Enregistrement...' : 'Valider le paiement'}
          </button>
        </div>
      </form>
      <div className="panel table-card">
        <h3>Historique des paiements</h3>
        {paiements.length === 0 ? (
          <div className="empty-state">
            <strong>Aucun paiement enregistré</strong>
            <span>Les paiements enregistrés apparaîtront ici.</span>
          </div>
        ) : (
          <table className="data-table">
            <thead><tr><th>Étudiant</th><th>Formation</th><th>Montant</th><th>Méthode</th><th>Date</th><th>Facture</th><th>Statut</th></tr></thead>
            <tbody>
              {paiements.map((p) => (
                <tr key={p.payment_id}>
                  <td>{p.etudiant_prenom} {p.etudiant_nom}</td>
                  <td>{p.formation_titre}</td>
                  <td>{p.amount} DT</td>
                  <td>{p.payment_method}</td>
                  <td>{p.payment_date}</td>
                  <td>{p.invoice_number}</td>
                  <td>{p.payment_status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default Paiements