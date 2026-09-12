import React, { useEffect, useState } from 'react'
import { getStudents } from '../services/studentService'

const Etudiants = () => {
  const [students, setStudents] = useState([])

  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    cin: '',
    niveau: 'Licence',
  })

  useEffect(() => {
    const loadStudents = async () => {
      try {
        const data = await getStudents()
        console.log("Étudiants reçus depuis NestJS :", data)
        setStudents(data)
      } catch (error) {
        console.error("Erreur lors du chargement des étudiants :", error)
      }
    }

    loadStudents()
  }, [])

  // ...
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.nom.trim() || !form.prenom.trim()) return

    setStudents([...students, { ...form, id: Date.now() }])
    setForm({ nom: '', prenom: '', email: '', telephone: '', cin: '', niveau: 'Licence' })
  }

  return (
    <div>
      <form className="panel" onSubmit={handleSubmit}>
        <h3>Ajouter un étudiant</h3>
        <div className="form-grid">
          <div className="field"><label htmlFor="nom">Nom</label><input id="nom" name="nom" type="text" placeholder="Ben Salah" value={form.nom} onChange={handleChange} /></div>
          <div className="field"><label htmlFor="prenom">Prénom</label><input id="prenom" name="prenom" type="text" placeholder="Amine" value={form.prenom} onChange={handleChange} /></div>
          <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" placeholder="amine@exemple.com" value={form.email} onChange={handleChange} /></div>
          <div className="field"><label htmlFor="telephone">Téléphone</label><input id="telephone" name="telephone" type="tel" placeholder="+216 20 000 000" value={form.telephone} onChange={handleChange} /></div>
          <div className="field"><label htmlFor="cin">CIN</label><input id="cin" name="cin" type="text" placeholder="12345678" value={form.cin} onChange={handleChange} /></div>
          <div className="field"><label htmlFor="niveau">Niveau</label>
            <select id="niveau" name="niveau" value={form.niveau} onChange={handleChange}><option>Licence</option><option>Master</option><option>Ingénieur</option></select>
          </div>
        </div>
        <div className="btn-row"><button className="btn" type="submit">Ajouter l'étudiant</button></div>
      </form>
  <div className="panel table-card">
        <h3>Liste des étudiants</h3>
        {students.length === 0 ? (
          <div className="empty-state">
            <div className="icon-tile">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8.5" cy="9" r="3" /><circle cx="16" cy="10" r="2.4" /><path d="M3 20c0-3 2.5-5 5.5-5S14 17 14 20M13.5 15.2c2.4.2 4.5 1.9 4.5 4.8" />
              </svg>
            </div>
            <strong>Aucun étudiant pour le moment</strong>
            <span>Les étudiants ajoutés apparaîtront ici.</span>
          </div>
        ) : (
          <table className="data-table">
            <thead><tr><th>Nom complet</th><th>Email</th><th>Téléphone</th><th>Niveau</th></tr></thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.prenom} {student.nom}</td>
                  <td>{student.email || '-'}</td>
                  <td>{student.telephone || '-'}</td>
                  <td>{student.niveau}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>

  )
}

export default Etudiants