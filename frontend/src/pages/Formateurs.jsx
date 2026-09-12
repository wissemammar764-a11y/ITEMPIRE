import React, { useState } from 'react'

const Formateurs = () => {
  const [formateurs, setFormateurs] = useState([])
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    cin: '',
    telephone: '',
    specialite: '',
    email: '',
  })

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (Object.values(form).some((value) => !value.trim())) return

    setFormateurs([...formateurs, { ...form, id: Date.now() }])
    setForm({ nom: '', prenom: '', cin: '', telephone: '', specialite: '', email: '' })
  }

  return (
    <div>
      <div className="section-head">
        <div className="icon-tile">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="3.2" />
            <path d="M5 20c0-4 3.1-6.5 7-6.5s7 2.5 7 6.5M9 8h6" />
          </svg>
        </div>
        <div>
          <h1>Formateurs</h1>
          <p>Gérer l'équipe pédagogique</p>
        </div>
      </div>
      <form className="panel" onSubmit={handleSubmit}>
        <h3>Ajouter un formateur</h3>
        <div className="form-grid">
          <div className="field"><label htmlFor="formateur-nom">Nom</label><input id="formateur-nom" name="nom" type="text" placeholder="Ben Salah" value={form.nom} onChange={handleChange} required /></div>
          <div className="field"><label htmlFor="formateur-prenom">Prénom</label><input id="formateur-prenom" name="prenom" type="text" placeholder="Amine" value={form.prenom} onChange={handleChange} required /></div>
          <div className="field"><label htmlFor="formateur-cin">CIN</label><input id="formateur-cin" name="cin" type="text" placeholder="12345678" value={form.cin} onChange={handleChange} required /></div>
          <div className="field"><label htmlFor="formateur-telephone">Numéro de téléphone</label><input id="formateur-telephone" name="telephone" type="tel" placeholder="+216 20 000 000" value={form.telephone} onChange={handleChange} required /></div>
          <div className="field"><label htmlFor="formateur-specialite">Spécialité</label><input id="formateur-specialite" name="specialite" type="text" placeholder="Développement Web" value={form.specialite} onChange={handleChange} required /></div>
          <div className="field"><label htmlFor="formateur-email">Email</label><input id="formateur-email" name="email" type="email" placeholder="amine@exemple.com" value={form.email} onChange={handleChange} required /></div>
        </div>
        <div className="btn-row"><button className="btn" type="submit">Ajouter le formateur</button></div>
      </form>
      <div className="panel">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}>
          <div className="field" style={{ maxWidth: 360, flex: 1 }}><label htmlFor="formateur-search">Rechercher un formateur</label><input id="formateur-search" type="text" placeholder="Nom, spécialité…" /></div>
        </div>
      </div>
      <div className="panel table-card">
        <h3>Liste des formateurs</h3>
        {formateurs.length === 0 ? <div className="empty-state">
          <div className="icon-tile">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8.5" cy="9" r="3" /><circle cx="16" cy="10" r="2.4" /><path d="M3 20c0-3 2.5-5 5.5-5S14 17 14 20M13.5 15.2c2.4.2 4.5 1.9 4.5 4.8" />
            </svg>
          </div>
          <strong>Aucun formateur enregistré</strong>
          <span>Les formateurs ajoutés apparaîtront ici.</span>
        </div>
        : <table className="data-table">
          <thead><tr><th>Nom complet</th><th>CIN</th><th>Téléphone</th><th>Spécialité</th><th>Email</th></tr></thead>
          <tbody>{formateurs.map((formateur) => <tr key={formateur.id}>
            <td>{formateur.prenom} {formateur.nom}</td>
            <td>{formateur.cin}</td>
            <td>{formateur.telephone}</td>
            <td>{formateur.specialite}</td>
            <td>{formateur.email}</td>
          </tr>)}</tbody>
        </table>}
      </div>
    </div>

  )
}

export default Formateurs