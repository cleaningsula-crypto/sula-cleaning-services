"use client";

import { useMemo, useState } from "react";
import Script from "next/script";

const WHATSAPP_NUMBER = "17282291450";
const PHONE_NUMBER = "+17282291450";
const PAYPAL_EMAIL = "Juandismueblesh3@gmail.com";

// ✅ Recommended: create a Calendly account and connect Google Calendar: cleaningsula@gmail.com
// Paste your Calendly scheduling URL here (example):
// https://calendly.com/cleaningsula/standard-cleaning
const CALENDLY_URL = "https://calendly.com/cleaningsula/standard-cleaning";

const times = ["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM"];

const copy = {
  en: {
    headline: "Sula Cleaning Services",
    sub: "Professional cleaning for Houses, Apartments, Offices & Airbnb turnovers in Broward, Palm Beach & Miami-Dade. By appointment only (9AM–7PM).",
    book: "Book a Cleaning",
    call: "Call Now",
    licensed: "Licensed Professional Cleaning Services",
    proOnly: "Professional only",
    areas: "Serving: Broward County • Palm Beach • Miami-Dade",
    servicesTitle: "Our Professional Services",
    scheduleTitle: "Schedule Your Cleaning",
    formTitle: "Quick Booking (WhatsApp)",
    name: "Full Name *",
    phone: "Phone Number *",
    address: "Service Address *",
    notes: "Special instructions (optional)",
    confirm: "Confirm via WhatsApp",
    depositTitle: "Deposit Policy",
    depositText: "30% deposit required to secure your appointment. Remaining 70% is paid after completion.",
    pay: "Pay 30% Deposit (PayPal)",
    calendlyTitle: "Live Availability (Google Calendar)",
    calendlyText: "Availability is synced with Google Calendar to block busy slots automatically.",
    gallery: "Before & After Gallery",
    reviews: "Client Reviews",
    contact: "Contact",
    email: "cleaningsula@gmail.com",
    addressLine: "850 SW 133rd Ter 302B, Pembroke Pines, FL 33027",
  },
  es: {
    headline: "Sula Cleaning Services",
    sub: "Limpieza profesional para Casas, Apartamentos, Oficinas y Airbnb en Broward, Palm Beach y Miami-Dade. Solo con cita previa (9AM–7PM).",
    book: "Reservar Limpieza",
    call: "Llamar Ahora",
    licensed: "Servicios Profesionales con Licencia",
    proOnly: "Solo profesional",
    areas: "Zonas: Broward • Palm Beach • Miami-Dade",
    servicesTitle: "Nuestros Servicios Profesionales",
    scheduleTitle: "Agenda tu Limpieza",
    formTitle: "Reserva rápida (WhatsApp)",
    name: "Nombre Completo *",
    phone: "Número de Teléfono *",
    address: "Dirección del Servicio *",
    notes: "Instrucciones especiales (opcional)",
    confirm: "Confirmar por WhatsApp",
    depositTitle: "Política de Depósito",
    depositText: "Depósito del 30% para asegurar la cita. El 70% restante se paga al finalizar.",
    pay: "Pagar Depósito 30% (PayPal)",
    calendlyTitle: "Disponibilidad en vivo (Google Calendar)",
    calendlyText: "La disponibilidad se sincroniza con Google Calendar para bloquear horarios ocupados.",
    gallery: "Galería Antes y Después",
    reviews: "Opiniones de Clientes",
    contact: "Contacto",
    email: "cleaningsula@gmail.com",
    addressLine: "850 SW 133rd Ter 302B, Pembroke Pines, FL 33027",
  },
};

function makePayPalDepositUrl() {
  // Buyer enters amount: client should pay 30% of the agreed price.
  const params = new URLSearchParams({
    cmd: "_xclick",
    business: PAYPAL_EMAIL,
    item_name: "Sula Cleaning Services - 30% Deposit",
    currency_code: "USD",
    no_note: "0",
  });
  return `https://www.paypal.com/cgi-bin/webscr?${params.toString()}`;
}

export default function Page() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const t = copy[lang];

  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const paypalUrl = useMemo(() => makePayPalDepositUrl(), []);

  const whatsappMessage = useMemo(() => {
    const lines = [
      "Hello! I want to book a cleaning service (Appointment Only).",
      `Name: ${name || "-"}`,
      `Phone: ${phone || "-"}`,
      `Address: ${address || "-"}`,
      `Preferred date: ${date || "-"}`,
      `Preferred time: ${time || "-"}`,
      `Notes: ${notes || "-"}`,
      "",
      "Deposit: 30% via PayPal to secure the appointment.",
    ];
    return encodeURIComponent(lines.join("\n"));
  }, [name, phone, address, date, time, notes]);

  const onWhatsApp = () => {
    if (!name || !phone || !address) {
      alert(lang === "en" ? "Please complete name, phone, and address." : "Completa nombre, teléfono y dirección.");
      return;
    }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`, "_blank");
  };

  const onPayPal = () => window.open(paypalUrl, "_blank");

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      <div className="topbar">
        <button className="langBtn" onClick={() => setLang(lang === "en" ? "es" : "en")}>
          {lang === "en" ? "ES" : "EN"}
        </button>
      </div>

      <div className="floating">
        <button className="fab fabCall" onClick={() => (window.location.href = `tel:${PHONE_NUMBER}`)} aria-label="Call Now">
          ☎
        </button>
        <button className="fab fabWhats" onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank")} aria-label="WhatsApp">
          💬
        </button>
      </div>

      <header className="hero">
        <div className="container hero-grid">
          <div>
            <img className="logo" src="/logo.png" alt="Sula Cleaning Services logo" />
            <h1 className="headline">{t.headline}</h1>
            <p className="sub">{t.sub}</p>

            <div className="pillrow">
              <span className="badge">✅ {t.licensed}</span>
              <span className="pill">{t.proOnly}</span>
              <span className="pill">{t.areas}</span>
            </div>

            <div className="actions">
              <a 
  className="btn btnPrimary" 
  href="https://calendly.com/cleaningsula/30min" 
  target="_blank" 
  rel="noopener noreferrer"
>
  {t.book}
</a>
              <a className="btn btnGreen" href={`tel:${PHONE_NUMBER}`}>{t.call}</a>
              <a className="btn btnOutline" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>

          <div className="card" style={{ background: "rgba(255,255,255,.92)" }}>
            <div className="label">{t.depositTitle}</div>
            <div className="muted" style={{ lineHeight: 1.55 }}>{t.depositText}</div>
            <div style={{ height: 12 }} />
            <button className="btn btnPrimary" onClick={onPayPal}>
              💳 {t.pay}
            </button>
            <div className="note">
              Tip: Share your agreed total with the client; they pay 30% deposit here.
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <h2 className="h2">{t.servicesTitle}</h2>
            <div className="grid">
              {["Standard Cleaning", "Deep Cleaning", "Airbnb Cleaning", "Office Cleaning"].map((s) => (
                <div className="card" key={s}>
                  <div style={{ fontSize: 22 }}>✨</div>
                  <h3>{s}</h3>
                  <div className="muted">
                    {lang === "en"
                      ? "Reliable, detailed and professional service."
                      : "Servicio confiable, detallado y profesional."}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="section" style={{ background: "white" }}>
          <div className="container">
            <h2 className="h2">{t.scheduleTitle}</h2>
            <div className="two">
              <div className="card">
                <div className="label">{t.calendlyTitle}</div>
                <div className="muted" style={{ marginBottom: 12 }}>{t.calendlyText}</div>

              <a
  href={CALENDLY_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="btn btnPrimary"
  style={{ display: "inline-block", marginTop: 10 }}
>
  Schedule with Live Calendar
</a>
              </div>

              <div className="card">
                <div className="label">{t.formTitle}</div>

                <div className="muted" style={{ marginBottom: 12 }}>
                  {lang === "en"
                    ? "Prefer WhatsApp? Send your details and we’ll confirm your appointment."
                    : "¿Prefieres WhatsApp? Envía tus datos y confirmamos tu cita."}
                </div>

                <div style={{ display: "grid", gap: 10 }}>
                  <input className="input" placeholder={t.name} value={name} onChange={(e) => setName(e.target.value)} />
                  <input className="input" placeholder={t.phone} value={phone} onChange={(e) => setPhone(e.target.value)} />
                  <input className="input" placeholder={t.address} value={address} onChange={(e) => setAddress(e.target.value)} />

                  <div className="label" style={{ marginTop: 6 }}>
                    {lang === "en" ? "Preferred date (optional)" : "Fecha preferida (opcional)"}
                  </div>
                  <input className="input" type="date" value={date} onChange={(e) => setDate(e.target.value)} />

                  <div className="label" style={{ marginTop: 6 }}>
                    {lang === "en" ? "Preferred time (optional)" : "Hora preferida (opcional)"}
                  </div>
                  <div className="times">
                    {times.map((x) => (
                      <button
                        key={x}
                        className={"timeBtn " + (time === x ? "timeBtnActive" : "")}
                        onClick={() => setTime(x)}
                        type="button"
                      >
                        {x}
                      </button>
                    ))}
                  </div>

                  <textarea className="textarea" placeholder={t.notes} value={notes} onChange={(e) => setNotes(e.target.value)} />

                  <button className="btn btnGreen" onClick={onWhatsApp}>
                    💬 {t.confirm}
                  </button>

                  <button className="btn btnPrimary" onClick={onPayPal}>
                    💳 {t.pay}
                  </button>

                  <div className="note">
                    {lang === "en"
                      ? "Reminder: Deposit is 30% to secure the appointment. Remaining 70% after the job."
                      : "Recordatorio: Depósito 30% para asegurar la cita. 70% al finalizar."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="h2">{t.gallery}</h2>
            <div className="gallery">
              <div className="ph">Before / After</div>
              <div className="ph">Before / After</div>
              <div className="ph">Before / After</div>
            </div>
            <div className="note">
              Replace placeholders with real photos in /public (recommended: 3–9 sets).
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "white" }}>
          <div className="container">
            <h2 className="h2">{t.reviews}</h2>
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
              {[
                lang === "en" ? "Excellent service — my home looks brand new." : "Excelente servicio — mi casa quedó como nueva.",
                lang === "en" ? "Professional and on time. Highly recommended." : "Profesionales y puntuales. Recomendado.",
                lang === "en" ? "Best cleaning in South Florida!" : "¡La mejor limpieza en el sur de Florida!",
              ].map((r, i) => (
                <div className="card" key={i}>
                  <div className="stars">{"★★★★★".split("").map((s, j) => (<span key={j}>⭐</span>))}</div>
                  <div className="muted">{r}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="h2">{t.contact}</h2>
            <div className="card">
              <div style={{ display: "grid", gap: 8 }}>
                <div><strong>{t.areas}</strong></div>
                <div className="muted">{t.addressLine}</div>
                <div className="muted">📧 {t.email}</div>
                <div className="muted">📞 {PHONE_NUMBER} / 561-978-2224</div>
                <div className="actions" style={{ marginTop: 10 }}>
                  <a className="btn btnPrimary" href={`tel:${PHONE_NUMBER}`}>☎ {t.call}</a>
                  <a className="btn btnGreen" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">💬 WhatsApp</a>
                  <button className="btn btnPrimary" onClick={onPayPal}>💳 {t.pay}</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LocalBusiness Schema for SEO */} 
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Sula Cleaning Services",
              image: "https://example.vercel.app/logo.png",
              telephone: "+1-728-229-1450",
              email: "cleaningsula@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "850 SW 133rd Ter 302B",
                addressLocality: "Pembroke Pines",
                addressRegion: "FL",
                postalCode: "33027",
                addressCountry: "US",
              },
              areaServed: ["Broward County", "Palm Beach County", "Miami-Dade County"],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  opens: "09:00",
                  closes: "19:00",
                },
              ],
              url: "https://example.vercel.app",
              priceRange: "$$",
              knowsLanguage: ["en", "es"],
              description:
                "Professional cleaning services for houses, apartments, offices and Airbnb turnovers in South Florida. By appointment only.",
            }),
          }}
        />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Sula Cleaning Services • Sparkling Results
      </footer>
    </>
  );
}
