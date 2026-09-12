/* ---------- icon glyphs (abstract, minimal, stroke-based) ---------- */
const ICONS = {
  dashboard: `<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>`,
  etudiants: `<circle cx="8.5" cy="9" r="3"/><circle cx="16" cy="10" r="2.4"/><path d="M3 20c0-3 2.5-5 5.5-5S14 17 14 20"/><path d="M13.5 15.2c2.4.2 4.5 1.9 4.5 4.8"/>`,
  formateurs: `<circle cx="12" cy="8" r="3.2"/><path d="M5 20c0-4 3.1-6.5 7-6.5s7 2.5 7 6.5"/><path d="M9 8h6"/>`,
  formations: `<path d="M4 5.5c2.5-1 5-1 8 0v13c-3-1-5.5-1-8 0Z"/><path d="M20 5.5c-2.5-1-5-1-8 0v13c3-1 5.5-1 8 0Z"/>`,
  sessions: `<rect x="4" y="5.5" width="16" height="14" rx="2"/><path d="M4 10h16"/><path d="M8 3.5v3M16 3.5v3"/><circle cx="8.5" cy="14" r="1"/><circle cx="12" cy="14" r="1"/><circle cx="15.5" cy="14" r="1"/>`,
  inscriptions: `<rect x="5" y="4.5" width="14" height="16" rx="2.4"/><path d="M9 4.5V3.2A1.2 1.2 0 0 1 10.2 2h3.6A1.2 1.2 0 0 1 15 3.2v1.3"/><path d="m9 13 2 2 4-4.2"/>`,
  paiements: `<circle cx="12" cy="12" r="8"/><text x="12" y="16" text-anchor="middle" font-size="10" font-weight="700" fill="white" stroke="none" font-family="Poppins">$</text>`,
  presences: `<circle cx="12" cy="12" r="8.2"/><path d="m8.5 12.3 2.3 2.3 4.7-5"/>`,
  certificats: `<circle cx="12" cy="8" r="4.3"/><path d="M9 11.7 7.3 20.5 12 18l4.7 2.5L15 11.7"/>`,
  crm: `<path d="M6 4.5h5.5l1.2 3.3-2 1.7a10.3 10.3 0 0 0 4.8 4.8l1.7-2 3.3 1.2V19a1.5 1.5 0 0 1-1.6 1.5C11.5 20 4 12.5 4.5 6.1A1.5 1.5 0 0 1 6 4.5Z"/>`,
  taches: `<rect x="4.5" y="5.5" width="3.2" height="3.2" rx="0.8"/><path d="m5.4 7.1 0.7 0.7 1.4-1.4"/><path d="M10.5 7.1h9"/>
           <rect x="4.5" y="11" width="3.2" height="3.2" rx="0.8"/><path d="M10.5 12.6h9"/>
           <rect x="4.5" y="16.5" width="3.2" height="3.2" rx="0.8"/><path d="M10.5 18.1h9"/>`,
  notifications: `<path d="M6.5 16V11a5.5 5.5 0 0 1 11 0v5l1.5 2.3H5Z"/><path d="M10.2 20.3a1.9 1.9 0 0 0 3.6 0"/><circle cx="17.5" cy="5.5" r="2" fill="#F2801B" stroke="none"/>`,
  assistant: `<circle cx="12" cy="12" r="2.3"/><circle cx="12" cy="4.5" r="1.6"/><circle cx="19" cy="15" r="1.6"/><circle cx="5" cy="15" r="1.6"/>
              <path d="M12 6.1v3.6M13.7 13.4l3.7 1.2M10.3 13.4 6.6 14.6"/>`,
  rapports: `<path d="M4 20V10M11 20V4M18 20v-7"/><path d="M3 20h18"/>`,
  parametres: `<path d="M4 7h9M17 7h3"/><circle cx="14.5" cy="7" r="2.2"/>
               <path d="M4 12.2h5M14 12.2h6"/><circle cx="11" cy="12.2" r="2.2"/>
               <path d="M4 17.3h11M19 17.3h1"/><circle cx="17" cy="17.3" r="2.2"/>`
};
 
function svg(name, size=16){
  return `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="${size}" height="${size}">${ICONS[name]}</svg>`;
}
 
const SECTIONS = [
  {id:"assistant",   label:"Assistant IA",    icon:"assistant",    subtitle:"Poser une question à l'assistant"},
  {id:"dashboard",   label:"Dashboard",       icon:"dashboard",    subtitle:"Vue d'ensemble de l'activité du centre"},
  {id:"etudiants",   label:"Étudiants",       icon:"etudiants",    subtitle:"Gérer les étudiants inscrits"},
  {id:"formateurs",  label:"Formateurs",      icon:"formateurs",   subtitle:"Gérer l'équipe pédagogique"},
  {id:"formations",  label:"Formations",      icon:"formations",   subtitle:"Catalogue des formations proposées"},
  {id:"sessions",    label:"Sessions",        icon:"sessions",     subtitle:"Planifier les sessions de formation"},
  {id:"inscriptions",label:"Inscriptions",    icon:"inscriptions", subtitle:"Associer un étudiant à une session"},
  {id:"paiements",   label:"Paiements",       icon:"paiements",    subtitle:"Suivre les règlements des étudiants"},
  {id:"presences",   label:"Présences",       icon:"presences",    subtitle:"Feuille de présence par session"},
  {id:"certificats", label:"Certificats",     icon:"certificats",  subtitle:"Générer les certificats de réussite"},
  {id:"crm",         label:"CRM",             icon:"crm",          subtitle:"Suivi des prospects et clients"},
  {id:"taches",      label:"Tâches",          icon:"taches",       subtitle:"Organiser les tâches de l'équipe"},
  {id:"notifications",label:"Notifications",  icon:"notifications",subtitle:"Alertes et évènements récents"},
  {id:"rapports",    label:"Rapports",        icon:"rapports",     subtitle:"Exporter les données du centre"},
  {id:"parametres",  label:"Paramètres",      icon:"parametres",   subtitle:"Informations générales du centre"},
];
 
const menu = document.getElementById("menu");
const content = document.getElementById("content");
 
SECTIONS.forEach((s,i)=>{
  const btn = document.createElement("button");
  btn.className = "nav-item" + (i===0 ? " active" : "");
  btn.dataset.target = s.id;
  btn.innerHTML = `<span class="icon-tile">${svg(s.icon)}</span><span>${s.label}</span>`;
  btn.onclick = () => showSection(s.id);
  menu.appendChild(btn);
});
 
function showSection(id){
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active", b.dataset.target===id));
  document.querySelectorAll(".section").forEach(sec=>sec.classList.toggle("visible", sec.id==="sec-"+id));
}
 
function emptyState(label, cta){
  return `<div class="empty-state">
    <div class="icon-tile">${svg('dashboard',24)}</div>
    <strong>Aucune donnée pour le moment</strong>
    <span>${label}</span>
    ${cta ? `<button class="btn secondary" style="margin-top:8px;">${cta}</button>` : ""}
  </div>`;
}
 
function head(s){
  return `<div class="section-head">
    <div class="icon-tile">${svg(s.icon,22)}</div>
    <div><h1>${s.label}</h1><p>${s.subtitle}</p></div>
  </div>`;
}
 
/* ---------- build each section ---------- */
const wrap = (id, inner) => `<div class="section" id="sec-${id}">${inner}</div>`;
 
let html = "";
 
// DASHBOARD
html += wrap("dashboard", `
  ${head(SECTIONS.find(s=>s.id==="dashboard"))}
  <div class="metrics">
    <div class="metric"><div class="m-top"><span class="m-icon" style="background:linear-gradient(135deg,var(--navy),var(--navy-deep));">${svg('etudiants')}</span><span class="m-trend">+4.2%</span></div><div class="m-value">350</div><div class="m-label">Étudiants</div></div>
    <div class="metric"><div class="m-top"><span class="m-icon" style="background:linear-gradient(135deg,var(--orange),var(--orange-light));">${svg('formateurs')}</span><span class="m-trend">+1</span></div><div class="m-value">25</div><div class="m-label">Formateurs</div></div>
    <div class="metric"><div class="m-top"><span class="m-icon" style="background:linear-gradient(135deg,var(--navy),var(--navy-deep));">${svg('formations')}</span><span class="m-trend">+3</span></div><div class="m-value">40</div><div class="m-label">Formations</div></div>
    <div class="metric"><div class="m-top"><span class="m-icon" style="background:linear-gradient(135deg,var(--orange),var(--orange-light));">${svg('paiements')}</span><span class="m-trend">+8.6%</span></div><div class="m-value">120 000 DT</div><div class="m-label">Revenus</div></div>
  </div>
  <div class="grid-2">
    <div class="panel">
      <h3>Top formations (inscriptions)</h3>
      <div class="bars">
        <div class="bar-col"><div class="bar" style="height:100%"></div><div class="bar-label">Python</div></div>
        <div class="bar-col"><div class="bar" style="height:75%"></div><div class="bar-label">Power BI</div></div>
        <div class="bar-col"><div class="bar" style="height:62%"></div><div class="bar-label">Réseaux</div></div>
        <div class="bar-col"><div class="bar" style="height:50%"></div><div class="bar-label">ML</div></div>
      </div>
    </div>
    <div class="panel">
      <h3>Revenus mensuels (DT)</h3>
      <svg class="linechart" viewBox="0 0 300 150" preserveAspectRatio="none">
        <polyline points="10,120 75,105 140,75 205,45 270,20" fill="none" stroke="#F2801B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <polyline points="10,120 75,105 140,75 205,45 270,20 270,150 10,150" fill="rgba(242,128,27,0.08)" stroke="none"/>
        <circle cx="10" cy="120" r="4" fill="#16305C"/><circle cx="75" cy="105" r="4" fill="#16305C"/>
        <circle cx="140" cy="75" r="4" fill="#16305C"/><circle cx="205" cy="45" r="4" fill="#16305C"/><circle cx="270" cy="20" r="4" fill="#16305C"/>
      </svg>
    </div>
  </div>
`);
 
// ETUDIANTS
html += wrap("etudiants", `
  ${head(SECTIONS.find(s=>s.id==="etudiants"))}
  <div class="panel">
    <h3>Ajouter un étudiant</h3>
    <div class="form-grid">
      <div class="field"><label>Nom</label><input type="text" placeholder="Ben Salah"></div>
      <div class="field"><label>Prénom</label><input type="text" placeholder="Amine"></div>
      <div class="field"><label>Email</label><input type="email" placeholder="amine@exemple.com"></div>
      <div class="field"><label>Téléphone</label><input type="tel" placeholder="+216 20 000 000"></div>
      <div class="field"><label>CIN</label><input type="text" placeholder="12345678"></div>
      <div class="field"><label>Niveau</label>
        <select><option>Licence</option><option>Master</option><option>Ingénieur</option></select>
      </div>
    </div>
    <div class="btn-row"><button class="btn">Ajouter l'étudiant</button></div>
  </div>
  <div class="panel table-card">
    <h3>Liste des étudiants</h3>
    ${emptyState("Les étudiants ajoutés apparaîtront ici.", "Ajouter le premier étudiant")}
  </div>
`);
 
// FORMATEURS
html += wrap("formateurs", `
  ${head(SECTIONS.find(s=>s.id==="formateurs"))}
  <div class="panel">
    <div class="field" style="max-width:360px;"><label>Rechercher un formateur</label><input type="text" placeholder="Nom, spécialité…"></div>
  </div>
  <div class="panel table-card">
    <h3>Liste des formateurs</h3>
    ${emptyState("Aucun formateur enregistré pour l'instant.", "Ajouter un formateur")}
  </div>
`);
 
// FORMATIONS
html += wrap("formations", `
  ${head(SECTIONS.find(s=>s.id==="formations"))}
  <div class="panel">
    <h3>Ajouter une formation</h3>
    <div class="form-grid">
      <div class="field full"><label>Titre</label><input type="text" placeholder="Développement Web Full-Stack"></div>
      <div class="field full"><label>Description</label><textarea placeholder="Détail du contenu de la formation…"></textarea></div>
      <div class="field"><label>Prix (DT)</label><input type="number" placeholder="0"></div>
      <div class="field"><label>Durée (heures)</label><input type="number" placeholder="0"></div>
    </div>
    <div class="btn-row"><button class="btn">Créer la formation</button></div>
  </div>
`);
 
// SESSIONS
html += wrap("sessions", `
  ${head(SECTIONS.find(s=>s.id==="sessions"))}
  <div class="panel" style="max-width:520px;">
    <h3>Planifier une session</h3>
    <div class="form-grid">
      <div class="field full"><label>Formation</label>
        <select><option>Python</option><option>Machine Learning</option><option>Power BI</option></select>
      </div>
      <div class="field"><label>Date début</label><input type="date"></div>
      <div class="field"><label>Date fin</label><input type="date"></div>
    </div>
    <div class="btn-row"><button class="btn">Créer la session</button></div>
  </div>
`);
 
// INSCRIPTIONS
html += wrap("inscriptions", `
  ${head(SECTIONS.find(s=>s.id==="inscriptions"))}
  <div class="panel" style="max-width:520px;">
    <h3>Inscrire un étudiant</h3>
    <div class="form-grid">
      <div class="field full"><label>Étudiant</label><select><option>Sélectionner un étudiant…</option></select></div>
      <div class="field full"><label>Session</label><select><option>Sélectionner une session…</option></select></div>
    </div>
    <div class="btn-row"><button class="btn">Inscrire</button></div>
  </div>
`);
 
// PAIEMENTS
html += wrap("paiements", `
  ${head(SECTIONS.find(s=>s.id==="paiements"))}
  <div class="panel" style="max-width:520px;">
    <h3>Enregistrer un paiement</h3>
    <div class="form-grid">
      <div class="field full"><label>Étudiant</label><select><option>Sélectionner un étudiant…</option></select></div>
      <div class="field"><label>Montant (DT)</label><input type="number" placeholder="0"></div>
      <div class="field"><label>Méthode</label><select><option>Espèce</option><option>Carte</option><option>Virement</option></select></div>
    </div>
    <div class="btn-row"><button class="btn">Valider le paiement</button></div>
  </div>
`);
 
// PRESENCES
html += wrap("presences", `
  ${head(SECTIONS.find(s=>s.id==="presences"))}
  <div class="panel" style="max-width:520px;">
    <h3>Feuille de présence</h3>
    <div class="field full"><label>Session</label><select><option>Sélectionner une session…</option></select></div>
    <label style="font-size:12.5px; font-weight:600; color:var(--navy); display:block; margin-top:16px;">Présence</label>
    <div class="radio-row" id="presence-row">
      <div class="radio-pill on" data-v="Présent">Présent</div>
      <div class="radio-pill" data-v="Absent">Absent</div>
      <div class="radio-pill" data-v="Retard">Retard</div>
    </div>
  </div>
`);
 
// CERTIFICATS
html += wrap("certificats", `
  ${head(SECTIONS.find(s=>s.id==="certificats"))}
  <div class="panel" style="max-width:520px;">
    <h3>Générer un certificat</h3>
    <div class="field full"><label>Étudiant</label><select><option>Sélectionner un étudiant…</option></select></div>
    <div class="btn-row"><button class="btn">Générer le certificat</button></div>
  </div>
`);
 
// CRM
html += wrap("crm", `
  ${head(SECTIONS.find(s=>s.id==="crm"))}
  <div class="panel" style="max-width:520px;">
    <h3>Ajouter un prospect</h3>
    <div class="form-grid">
      <div class="field full"><label>Nom du prospect</label><input type="text" placeholder="Nom complet"></div>
      <div class="field"><label>Téléphone</label><input type="tel" placeholder="+216 20 000 000"></div>
      <div class="field"><label>Statut</label><select><option>Nouveau</option><option>Contacté</option><option>Client</option><option>Perdu</option></select></div>
    </div>
    <div class="btn-row"><button class="btn">Ajouter le prospect</button></div>
  </div>
`);
 
// TACHES
html += wrap("taches", `
  ${head(SECTIONS.find(s=>s.id==="taches"))}
  <div class="panel" style="max-width:520px;">
    <h3>Créer une tâche</h3>
    <div class="form-grid">
      <div class="field full"><label>Titre</label><input type="text" placeholder="Titre de la tâche"></div>
      <div class="field full"><label>Description</label><textarea placeholder="Détail de la tâche…"></textarea></div>
      <div class="field"><label>Date limite</label><input type="date"></div>
    </div>
    <div class="btn-row"><button class="btn">Créer la tâche</button></div>
  </div>
`);
 
// NOTIFICATIONS
html += wrap("notifications", `
  ${head(SECTIONS.find(s=>s.id==="notifications"))}
  <div class="panel">
    <div class="notif-list">
      <div class="notif"><span class="dot"></span><div class="txt"><strong>Nouvelle inscription reçue</strong><span>Il y a 12 minutes</span></div></div>
      <div class="notif"><span class="dot"></span><div class="txt"><strong>Paiement effectué</strong><span>Il y a 1 heure</span></div></div>
      <div class="notif"><span class="dot"></span><div class="txt"><strong>Session demain à 09h00</strong><span>Rappel automatique</span></div></div>
    </div>
  </div>
`);
 
// ASSISTANT IA
html += wrap("assistant", `
  <div class="ai-hero">
    <div class="ai-orb"></div>
    <p class="hello">Bonjour, Ghada</p>
    <h2>Comment puis-je vous aider aujourd'hui ?</h2>
 
    <div class="ai-input-card">
      <textarea id="ai-question" rows="1" placeholder="Posez une question sur vos étudiants, sessions, paiements…"></textarea>
      <div class="ai-input-row">
        <div class="ai-chip">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><circle cx="12" cy="12" r="3.4"/></svg>
          Analyse approfondie
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <div class="ai-icon-btn" title="Joindre un fichier">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.5 12.5 21a5 5 0 0 1-7-7l8-8a3.5 3.5 0 0 1 5 5l-8 8a2 2 0 0 1-3-3l7.5-7.5"/></svg>
          </div>
          <div class="ai-icon-btn send" id="ai-send" title="Envoyer">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </div>
        </div>
      </div>
    </div>
 
    <div class="ai-suggestions">
      <div class="ai-suggest-card" data-q="Résume les paiements du mois en cours.">
        <span class="ai-s-icon">${svg('paiements',16)}</span>
        <strong>Résumer les paiements</strong>
        <span>Obtenir un récapitulatif des règlements reçus ce mois-ci.</span>
      </div>
      <div class="ai-suggest-card" data-q="Génère un message de rappel pour les étudiants en retard de paiement.">
        <span class="ai-s-icon">${svg('crm',16)}</span>
        <strong>Rédiger un rappel</strong>
        <span>Créer un message pour les étudiants en retard de paiement.</span>
      </div>
      <div class="ai-suggest-card" data-q="Compare le taux de présence entre les sessions de ce mois.">
        <span class="ai-s-icon">${svg('presences',16)}</span>
        <strong>Comparer les présences</strong>
        <span>Analyser le taux de présence entre plusieurs sessions.</span>
      </div>
    </div>
 
    <div class="ai-answer-wrap">
      <div class="ai-answer" id="ai-answer">Réponse de l'assistant affichée ici.</div>
    </div>
  </div>
`);
 
// RAPPORTS
html += wrap("rapports", `
  ${head(SECTIONS.find(s=>s.id==="rapports"))}
  <div class="panel">
    <h3>Exporter les données</h3>
    <div class="btn-row">
      <button class="btn">Exporter en PDF</button>
      <button class="btn secondary">Exporter en Excel</button>
    </div>
  </div>
`);
 
// PARAMETRES
html += wrap("parametres", `
  ${head(SECTIONS.find(s=>s.id==="parametres"))}
  <div class="panel" style="max-width:520px;">
    <h3>Informations du centre</h3>
    <div class="form-grid">
      <div class="field full"><label>Nom du centre</label><input type="text" placeholder="IT Empire"></div>
      <div class="field"><label>Email</label><input type="email" placeholder="contact@itempire.tn"></div>
      <div class="field"><label>Téléphone</label><input type="tel" placeholder="+216 70 000 000"></div>
    </div>
    <div class="btn-row"><button class="btn">Sauvegarder</button></div>
  </div>
`);
 
content.innerHTML = html;
document.getElementById("sec-assistant").classList.add("visible");
 
/* presence pills */
document.getElementById("presence-row")?.addEventListener("click", (e)=>{
  const pill = e.target.closest(".radio-pill");
  if(!pill) return;
  document.querySelectorAll("#presence-row .radio-pill").forEach(p=>p.classList.remove("on"));
  pill.classList.add("on");
});
 
/* AI assistant reply — connected to FastAPI backend (/chat) */
document.getElementById("ai-send")?.addEventListener("click", async ()=>{
  const box = document.getElementById("ai-answer");
  const q = document.getElementById("ai-question").value.trim();
 
  if(!q){
    box.textContent = "Réponse de l'assistant affichée ici.";
    box.classList.add("show");
    return;
  }
 
  box.textContent = "L'assistant réfléchit…";
  box.classList.add("show");
 
  try{
    const res = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: q })
    });
 
    if(!res.ok) throw new Error("HTTP " + res.status);
 
    const data = await res.json();
    box.textContent = data.response;
  } catch(err){
    box.textContent = "Erreur : impossible de contacter l'assistant. Vérifiez que le serveur FastAPI (uvicorn) est bien lancé sur http://127.0.0.1:8000.";
    console.error("Chat API error:", err);
  }
});
 
/* suggestion cards fill the input */
document.querySelectorAll(".ai-suggest-card").forEach(card=>{
  card.addEventListener("click", ()=>{
    const ta = document.getElementById("ai-question");
    ta.value = card.dataset.q;
    ta.focus();
  });
});
 
/* auto-grow the question textarea */
document.getElementById("ai-question")?.addEventListener("input", function(){
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});