import React from 'react'
import { NavLink } from 'react-router-dom'

const sections = [
  ['assistant', 'Assistant IA', '/layout/ai'],

  ['etudiants', 'Étudiants', '/layout/etudiants'],
  ['formateurs', 'Formateurs', '/layout/formateurs'],
  ['formations', 'Formations', '/layout/formations'],
  ['sessions', 'Sessions', '/layout/sessions'],
  ['inscriptions', 'Inscriptions', '/layout/inscriptions'],
  ['paiements', 'Paiements', '/layout/paiements'],
  ['presences', 'Présences', '/layout/presences'],
  ['certificats', 'Certificats', '/layout/certificats'],
  ['taches', 'Tâches', '/layout/taches'],
  ['notifications', 'Notifications', '/layout/notifications'],
]

const icons = {
  dashboard: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
  assistant: '<circle cx="12" cy="12" r="2.3"/><circle cx="12" cy="4.5" r="1.6"/><circle cx="19" cy="15" r="1.6"/><circle cx="5" cy="15" r="1.6"/><path d="M12 6.1v3.6M13.7 13.4l3.7 1.2M10.3 13.4 6.6 14.6"/>',
  people: '<circle cx="8.5" cy="9" r="3"/><circle cx="16" cy="10" r="2.4"/><path d="M3 20c0-3 2.5-5 5.5-5S14 17 14 20M13.5 15.2c2.4.2 4.5 1.9 4.5 4.8"/>',
  calendar: '<rect x="4" y="5.5" width="16" height="14" rx="2"/><path d="M4 10h16M8 3.5v3M16 3.5v3"/>',
  document: '<rect x="5" y="4.5" width="14" height="16" rx="2.4"/><path d="M9 4.5V3.2A1.2 1.2 0 0 1 10.2 2h3.6A1.2 1.2 0 0 1 15 3.2v1.3M9 13l2 2 4-4.2"/>',
  chart: '<path d="M4 20V10M11 20V4M18 20v-7M3 20h18"/>',
  settings: '<path d="M4 7h9M17 7h3M4 12.2h5M14 12.2h6M4 17.3h11M19 17.3h1"/><circle cx="14.5" cy="7" r="2.2"/><circle cx="11" cy="12.2" r="2.2"/><circle cx="17" cy="17.3" r="2.2"/>',
}

const iconFor = (name) => {
  if (name === 'assistant' || name === 'dashboard') return name
  if (['etudiants', 'formateurs'].includes(name)) return 'people'
  if (['sessions', 'presences'].includes(name)) return 'calendar'
  if (['inscriptions', 'certificats'].includes(name)) return 'document'
  if (['paiements', 'rapports'].includes(name)) return 'chart'
  if (name === 'parametres') return 'settings'
  return 'document'
}

const Sidebar = () => {
  return (
    <aside className="sidebar card">
      <h4>Menu</h4>
      <nav className="menu" aria-label="Navigation principale">
        {sections.map(([id, label, path]) => (
          <NavLink
            className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
            key={id}
            to={path}
          >
            <span className="icon-tile">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <g dangerouslySetInnerHTML={{ __html: icons[iconFor(id)] }} />
              </svg>
            </span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>

  )
}

export default Sidebar