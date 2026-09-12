import React from 'react'

const Notifications = () => {
  return (
    <div>
      <div className="section-head">
        <div className="icon-tile">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6.5 16V11a5.5 5.5 0 0 1 11 0v5l1.5 2.3H5Z" />
            <path d="M10.2 20.3a1.9 1.9 0 0 0 3.6 0" />
            <circle cx="17.5" cy="5.5" r="2" fill="#F2801B" stroke="none" />
          </svg>
        </div>
        <div><h1>Notifications</h1><p>Alertes et événements récents</p></div>
      </div>
      <div className="panel">
        <div className="notif-list">
          <div className="notif"><span className="dot" /><div className="txt"><strong>Nouvelle inscription reçue</strong><span>Il y a 12 minutes</span></div></div>
          <div className="notif"><span className="dot" /><div className="txt"><strong>Paiement effectué</strong><span>Il y a 1 heure</span></div></div>
          <div className="notif"><span className="dot" /><div className="txt"><strong>Session demain à 09h00</strong><span>Rappel automatique</span></div></div>
        </div>
    </div>
    </div>

  )
}

export default Notifications