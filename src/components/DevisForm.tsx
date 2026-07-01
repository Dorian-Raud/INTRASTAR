"use client";

import { useState, type FormEvent } from "react";

const RECIPIENT = "contact@intrastar.fr";

export default function DevisForm() {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [flowType, setFlowType] = useState("Introduction");
  const [volume, setVolume] = useState("Moins de 50 lignes / mois");
  const [document, setDocument] = useState("Factures");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!fullName || !email || !consent) {
      setError("Merci de renseigner votre nom, votre email et d'accepter d'être recontacté(e).");
      return;
    }

    setError("");

    const subject = `Demande de devis EMEBI — ${fullName}`;
    const body = [
      `Nom & prénom : ${fullName}`,
      `Entreprise : ${company || "—"}`,
      `Email : ${email}`,
      `Téléphone : ${phone || "—"}`,
      `Type de flux concerné : ${flowType}`,
      `Volume mensuel estimé : ${volume}`,
      `Type de document : ${document}`,
      "",
      "Besoin :",
      message || "—",
    ].join("\n");

    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <form className="a-formcard" onSubmit={handleSubmit}>
      <div className="a-form">
        <div className="a-field">
          <label className="a-label" htmlFor="fullName">
            Nom &amp; prénom
          </label>
          <input
            id="fullName"
            className="a-input"
            placeholder="Jean Dupont"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="a-field">
          <label className="a-label" htmlFor="company">
            Entreprise
          </label>
          <input
            id="company"
            className="a-input"
            placeholder="Votre société"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="a-field">
          <label className="a-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="a-input"
            placeholder="vous@entreprise.fr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="a-field">
          <label className="a-label" htmlFor="phone">
            Téléphone
          </label>
          <input
            id="phone"
            className="a-input"
            placeholder="06 12 34 56 78"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="a-field full">
          <label className="a-label" htmlFor="flowType">
            Type de flux concerné
          </label>
          <select
            id="flowType"
            className="a-input"
            value={flowType}
            onChange={(e) => setFlowType(e.target.value)}
          >
            <option>Introduction</option>
            <option>Expédition</option>
            <option>Les deux</option>
            <option>Je ne sais pas encore</option>
          </select>
        </div>
        <div className="a-field full">
          <label className="a-label" htmlFor="volume">
            Volume mensuel estimé
          </label>
          <select
            id="volume"
            className="a-input"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          >
            <option>Moins de 50 lignes / mois</option>
            <option>50 à 200 lignes / mois</option>
            <option>200 à 1000 lignes / mois</option>
            <option>Plus de 1000 lignes / mois</option>
          </select>
        </div>
        <div className="a-field full">
          <label className="a-label" htmlFor="document">
            Type de document
          </label>
          <select
            id="document"
            className="a-input"
            value={document}
            onChange={(e) => setDocument(e.target.value)}
          >
            <option>Factures (Extraction PDF)</option>
            <option>Factures (Scan PDF)</option>
            <option>Tableaux excel</option>
            <option>Je ne sais pas encore</option>
          </select>
        </div>
        <div className="a-field full">
          <label className="a-label" htmlFor="message">
            Votre besoin
          </label>
          <textarea
            id="message"
            className="a-input a-textarea"
            placeholder="Secteur, échéance, situation actuelle…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <label className="a-consent">
          <input
            type="checkbox"
            style={{ marginTop: 3 }}
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          J&apos;accepte d&apos;être recontacté(e) au sujet de ma demande. Mes données ne sont
          utilisées qu&apos;à cette fin.
        </label>
        {error && <p className="a-formnote is-error">{error}</p>}
        <button type="submit" className="a-btn a-formbtn">
          Envoyer ma demande
        </button>
      </div>
    </form>
  );
}
