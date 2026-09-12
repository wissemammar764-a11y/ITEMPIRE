import React from 'react'

const Topbar = () => {
  return (
<div><header className="topbar">
    <div className="brand">
      <div className="brand-mark">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3 2 8l10 5 10-5-10-5Z" /><path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
        </svg>
      </div>
      <div className="brand-text">
        <div className="t1">IT Empire <span>CRM</span></div>
        <div className="t2">Centre de formation</div>
      </div>
    </div>
    <div className="top-right">
      <div className="search-pill">
        <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={11} cy={11} r={7} /><path d="m21 21-4.3-4.3" /></svg>
        Rechercher…
      </div>
      <div className="avatar">IE</div>
    </div>
  </header></div>

  )
}

export default Topbar