import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

/* ---------- abstract line icons, same language as the CRM ---------- */
const ICON_PATHS = {
  mail: <><path d="M4 6.5h16v11H4z" /><path d="m4 7 8 6 8-6" /></>,
  lock: <><rect x="5" y="10.5" width="14" height="9" rx="2" /><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" /></>,
  user: <><circle cx="12" cy="8.5" r="3.4" /><path d="M5 20c0-4 3.1-6.5 7-6.5s7 2.5 7 6.5" /></>,
  phone: <path d="M6 4.5h5.5l1.2 3.3-2 1.7a10.3 10.3 0 0 0 4.8 4.8l1.7-2 3.3 1.2V19a1.5 1.5 0 0 1-1.6 1.5C11.5 20 4 12.5 4.5 6.1A1.5 1.5 0 0 1 6 4.5Z" />,
  eye: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>,
  eyeOff: <><path d="M3 3l18 18" /><path d="M10.6 5.2A10.6 10.6 0 0 1 12 5c6.4 0 10 7 10 7a17.9 17.9 0 0 1-3.2 4.2M6.6 6.6C4 8.3 2 12 2 12s3.6 7 10 7c1.6 0 3-.4 4.2-1" /><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" /></>,
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  arrow: <><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></>,
};

function Icon({ name, size = 17 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {ICON_PATHS[name]}
    </svg>
  );
}

export default function Login({ onLogin, onRegister }) {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login"); 
  const [showPwd, setShowPwd] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);
  const [remember, setRemember] = useState(true);
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    nom: "", prenom: "", email: "", telephone: "", password: "", password2: "",
  });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setError("");

    try {
      if (mode === "login") {
        const { data } = await axios.post(
          "http://localhost:3002/user/login",
          { email: form.email, password: form.password },
        );
        if (onLogin) onLogin(data);
        else navigate("/layout");
      } else {
        const { data } = await axios.post(
          "http://localhost:3002/user",
          {
            first_name: form.prenom,
            last_name: form.nom,
            email: form.email,
            phone: form.telephone,
            password_hash: form.password,
            role: "user",
            status: "active",
            created_at: new Date().toISOString(),
          },
        );
        onRegister && onRegister(data);
      }
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Impossible de contacter le serveur.");
    } finally {
      setSubmitted(false);
    }
  };

  return (
    <div className="auth-wrap">
      <style>{`
        .auth-wrap{
          --navy:#16305C; --navy-deep:#0E2044; --orange:#F2801B; --orange-light:#FDBB6D;
          --cream:#FBF3E7; --paper:#FFFFFF; --ink:#1A2333; --muted:#7C8798; --line:#EAE3D6;
          font-family:'Inter',sans-serif; color:var(--ink);
          min-height:100vh; width:100%; position:relative; overflow:hidden;
          display:flex; align-items:center; justify-content:center; padding:40px 20px;
          background:
            radial-gradient(circle at 88% 10%, rgba(242,128,27,0.16), transparent 42%),
            radial-gradient(circle at 8% 88%, rgba(22,48,92,0.14), transparent 46%),
            var(--cream);
        }
        .auth-wrap *{ box-sizing:border-box; }
        .auth-blob{
          position:absolute; width:360px; height:360px; border-radius:64px;
          opacity:0.12; transform:rotate(45deg); filter:blur(2px); z-index:0;
          animation:blobFloat 9s ease-in-out infinite;
        }
        .auth-blob.b1{ top:-150px; right:-130px; background:linear-gradient(135deg, var(--orange-light), var(--orange)); }
        .auth-blob.b2{ bottom:-170px; left:-150px; background:linear-gradient(135deg, var(--navy), var(--navy-deep)); animation-delay:1.2s; }
        @keyframes blobFloat{ 0%,100%{ transform:rotate(45deg) translateY(0); } 50%{ transform:rotate(45deg) translateY(-16px); } }

        .auth-card{
          position:relative; z-index:1; width:100%; max-width:420px;
          background:var(--paper); border-radius:26px; padding:34px 34px 30px;
          box-shadow:0 20px 50px rgba(22,48,92,0.14); border:1px solid rgba(22,48,92,0.05);
          animation:cardIn .5s cubic-bezier(.22,1,.36,1) both;
        }
        @keyframes cardIn{ from{opacity:0; transform:translateY(18px) scale(.98);} to{opacity:1; transform:none;} }

        .auth-brand{ display:flex; flex-direction:column; align-items:center; text-align:center; margin-bottom:22px; }
        .auth-orb{
          width:56px; height:56px; border-radius:50%; margin-bottom:14px; position:relative;
          background:radial-gradient(circle at 32% 30%, #FFD9A8, var(--orange) 55%, var(--navy) 130%);
          box-shadow:0 0 0 8px rgba(242,128,27,0.08), 0 10px 26px rgba(242,128,27,0.32);
          animation:orbPulse 3.2s ease-in-out infinite;
        }
        .auth-orb::after{
          content:""; position:absolute; inset:-12px; border-radius:50%;
          border:1px solid rgba(242,128,27,0.25); animation:orbRing 3.2s ease-in-out infinite;
        }
        @keyframes orbPulse{ 0%,100%{ transform:scale(1);} 50%{ transform:scale(1.07);} }
        @keyframes orbRing{ 0%,100%{ opacity:.5; transform:scale(1);} 50%{ opacity:0; transform:scale(1.3);} }
        .auth-brand h1{ font-family:'Poppins',sans-serif; font-weight:800; font-size:19px; color:var(--navy); margin:0; }
        .auth-brand h1 span{ color:var(--orange); }
        .auth-brand p{ margin:3px 0 0; font-size:12.5px; color:var(--muted); }

        .auth-toggle{
          position:relative; display:flex; background:#F4EFE5; border-radius:999px;
          padding:4px; margin-bottom:26px;
        }
        .auth-toggle .slider{
          position:absolute; top:4px; bottom:4px; width:calc(50% - 4px);
          border-radius:999px; background:linear-gradient(135deg, var(--navy), var(--navy-deep));
          box-shadow:0 6px 16px rgba(22,48,92,0.25);
          transition:transform .32s cubic-bezier(.65,0,.35,1);
          transform:translateX(${mode === "login" ? "0" : "100%"});
        }
        .auth-toggle button{
          position:relative; z-index:1; flex:1; border:none; background:transparent;
          padding:10px 0; font-family:'Inter',sans-serif; font-weight:700; font-size:13.5px;
          cursor:pointer; border-radius:999px; transition:color .25s ease;
          color:${""};
        }
        .auth-toggle button.on{ color:#fff; }
        .auth-toggle button.off{ color:var(--muted); }

        .auth-form{ display:flex; flex-direction:column; gap:14px; animation:formIn .35s ease both; }
        @keyframes formIn{ from{ opacity:0; transform:translateY(8px);} to{ opacity:1; transform:none;} }
        .auth-row{ display:flex; gap:12px; }
        .auth-field{ display:flex; flex-direction:column; gap:6px; flex:1; }
        .auth-field label{ font-size:12px; font-weight:600; color:var(--navy); }
        .auth-input{
          display:flex; align-items:center; gap:9px;
          border:1.4px solid var(--line); background:#FCFAF6; border-radius:12px;
          padding:0 13px; transition:border-color .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .auth-input:focus-within{
          border-color:var(--orange); background:#fff;
          box-shadow:0 0 0 4px rgba(242,128,27,0.10);
        }
        .auth-input svg{ color:var(--muted); flex:none; transition:color .2s ease; }
        .auth-input:focus-within svg{ color:var(--orange); }
        .auth-input input{
          border:none; outline:none; background:transparent; width:100%;
          font-family:'Inter',sans-serif; font-size:13.5px; color:var(--ink); padding:11px 0;
        }
        .auth-input button.eye{
          border:none; background:transparent; cursor:pointer; color:var(--muted);
          display:flex; align-items:center; padding:4px; flex:none;
        }
        .auth-input button.eye:hover{ color:var(--navy); }

        .auth-meta{ display:flex; align-items:center; justify-content:space-between; margin-top:2px; }
        .auth-check{ display:flex; align-items:center; gap:8px; font-size:12.5px; color:var(--muted); cursor:pointer; user-select:none; }
        .auth-check .box{
          width:16px; height:16px; border-radius:5px; border:1.6px solid var(--line);
          display:flex; align-items:center; justify-content:center; transition:all .2s ease; flex:none;
        }
        .auth-check.checked .box{ background:linear-gradient(135deg, var(--orange), var(--orange-light)); border-color:transparent; }
        .auth-check .box svg{ opacity:0; transform:scale(.5); transition:all .18s ease; color:#fff; }
        .auth-check.checked .box svg{ opacity:1; transform:scale(1); }
        .auth-link{ font-size:12.5px; color:var(--orange); font-weight:700; text-decoration:none; cursor:pointer; }
        .auth-link:hover{ text-decoration:underline; }

        .auth-submit{
          margin-top:8px; display:flex; align-items:center; justify-content:center; gap:9px;
          padding:12.5px 0; border:none; border-radius:999px; cursor:pointer;
          font-family:'Inter',sans-serif; font-weight:700; font-size:14px; color:#fff;
          background:linear-gradient(135deg, var(--orange), var(--orange-light));
          box-shadow:0 10px 22px rgba(242,128,27,0.32);
          transition:transform .15s ease, box-shadow .15s ease, opacity .15s ease;
        }
        .auth-submit:hover{ transform:translateY(-2px); box-shadow:0 14px 26px rgba(242,128,27,0.38); }
        .auth-submit:active{ transform:translateY(0); }
        .auth-submit.loading{ opacity:.85; pointer-events:none; }
        .auth-submit .spin{
          width:15px; height:15px; border-radius:50%;
          border:2px solid rgba(255,255,255,0.4); border-top-color:#fff;
          animation:spin .7s linear infinite;
        }
        @keyframes spin{ to{ transform:rotate(360deg); } }

        .auth-divider{ display:flex; align-items:center; gap:10px; margin:20px 0 4px; color:var(--muted); font-size:11.5px; }
        .auth-divider::before, .auth-divider::after{ content:""; flex:1; height:1px; background:var(--line); }

        .auth-switch{ text-align:center; margin-top:16px; font-size:12.5px; color:var(--muted); }
        .auth-switch b{ color:var(--orange); cursor:pointer; font-weight:700; }
        .auth-switch b:hover{ text-decoration:underline; }
      `}</style>

      <div className="auth-blob b1" />
      <div className="auth-blob b2" />

      <div className="auth-card">
        <div className="auth-brand">
          <div className="auth-orb" />
          <h1>IT Empire <span>CRM</span></h1>
          <p>{mode === "login" ? "Ravi de vous revoir" : "Créez votre espace en quelques secondes"}</p>
        </div>

        <div className="auth-toggle">
          <div className="slider" />
          <button className={mode === "login" ? "on" : "off"} onClick={() => setMode("login")} type="button">
            Connexion
          </button>
          <button className={mode === "register" ? "on" : "off"} onClick={() => setMode("register")} type="button">
            Inscription
          </button>
        </div>

        {mode === "login" ? (
          <form className="auth-form" key="login" onSubmit={handleSubmit}>
            <div className="auth-field">
              <label>Email</label>
              <div className="auth-input">
                <Icon name="mail" />
                <input type="email" placeholder="vous@exemple.com" value={form.email} onChange={update("email")} required />
              </div>
            </div>

            <div className="auth-field">
              <label>Mot de passe</label>
              <div className="auth-input">
                <Icon name="lock" />
                <input type={showPwd ? "text" : "password"} placeholder="••••••••" value={form.password} onChange={update("password")} required />
                <button type="button" className="eye" onClick={() => setShowPwd((s) => !s)}>
                  <Icon name={showPwd ? "eyeOff" : "eye"} size={16} />
                </button>
              </div>
            </div>

            <div className="auth-meta">
              <label className={"auth-check" + (remember ? " checked" : "")} onClick={() => setRemember((r) => !r)}>
                <span className="box"><Icon name="check" size={11} /></span>
                Se souvenir de moi
              </label>
              <span className="auth-link">Mot de passe oublié ?</span>
            </div>

            <button className={"auth-submit" + (submitted ? " loading" : "")} type="submit">
              {submitted ? <span className="spin" /> : <><span>Se connecter</span><Icon name="arrow" size={15} /></>}
            </button>
            {error && <div role="alert" className="auth-error">{error}</div>}
          </form>
        ) : (
          <form className="auth-form" key="register" onSubmit={handleSubmit}>
            <div className="auth-row">
              <div className="auth-field">
                <label>Nom</label>
                <div className="auth-input">
                  <Icon name="user" />
                  <input type="text" placeholder="Ben Salah" value={form.nom} onChange={update("nom")} required />
                </div>
              </div>
              <div className="auth-field">
                <label>Prénom</label>
                <div className="auth-input">
                  <Icon name="user" />
                  <input type="text" placeholder="Ghada" value={form.prenom} onChange={update("prenom")} required />
                </div>
              </div>
            </div>

            <div className="auth-field">
              <label>Email</label>
              <div className="auth-input">
                <Icon name="mail" />
                <input type="email" placeholder="vous@exemple.com" value={form.email} onChange={update("email")} required />
              </div>
            </div>

            <div className="auth-field">
              <label>Téléphone</label>
              <div className="auth-input">
                <Icon name="phone" />
                <input type="tel" placeholder="+216 20 000 000" value={form.telephone} onChange={update("telephone")} required />
              </div>
            </div>

            <div className="auth-row">
              <div className="auth-field">
                <label>Mot de passe</label>
                <div className="auth-input">
                  <Icon name="lock" />
                  <input type={showPwd ? "text" : "password"} placeholder="••••••••" value={form.password} onChange={update("password")} required />
                  <button type="button" className="eye" onClick={() => setShowPwd((s) => !s)}>
                    <Icon name={showPwd ? "eyeOff" : "eye"} size={16} />
                  </button>
                </div>
              </div>
              <div className="auth-field">
                <label>Confirmer</label>
                <div className="auth-input">
                  <Icon name="lock" />
                  <input type={showPwd2 ? "text" : "password"} placeholder="••••••••" value={form.password2} onChange={update("password2")} required />
                  <button type="button" className="eye" onClick={() => setShowPwd2((s) => !s)}>
                    <Icon name={showPwd2 ? "eyeOff" : "eye"} size={16} />
                  </button>
                </div>
              </div>
            </div>

            <label className={"auth-check" + (agree ? " checked" : "")} onClick={() => setAgree((a) => !a)}>
              <span className="box"><Icon name="check" size={11} /></span>
              J'accepte les conditions d'utilisation
            </label>

            <button className={"auth-submit" + (submitted ? " loading" : "")} type="submit" disabled={!agree}>
              {submitted ? <span className="spin" /> : <><span>Créer un compte</span><Icon name="arrow" size={15} /></>}
            </button>
            {error && <div role="alert" className="auth-error">{error}</div>}
          </form>
        )}

        <div className="auth-divider">ou</div>
        <div className="auth-switch">
          {mode === "login" ? (
            <>Pas encore de compte ? <b onClick={() => setMode("register")}>Inscrivez-vous</b></>
          ) : (
            <>Déjà un compte ? <b onClick={() => setMode("login")}>Connectez-vous</b></>
          )}
        </div>
      </div>
    </div>
  );
}