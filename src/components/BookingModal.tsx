"use client";

import { FormEvent, useState } from "react";

const CLINIC_WHATSAPP = "919418092355";
const CLINIC_EMAIL = "lizagurmeet2002@gmail.com";

type FormState = {
  name: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  reason: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  preferredDate: "",
  preferredTime: "",
  reason: "",
};

type Props = {
  open: boolean;
  onClose: () => void;
};

function buildMessage(form: FormState) {
  return [
    "Hello 32 Intact,",
    "",
    "I would like to book a dental visit.",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    form.preferredDate ? `Preferred date: ${form.preferredDate}` : null,
    form.preferredTime ? `Preferred time: ${form.preferredTime}` : null,
    form.reason ? `Reason: ${form.reason}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export default function BookingModal({ open, onClose }: Props) {
  const [form, setForm] = useState<FormState>(initialState);
  const [sent, setSent] = useState(false);

  if (!open) return null;

  function handleWhatsApp(event: FormEvent) {
    event.preventDefault();
    const message = buildMessage(form);
    const url = `https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  function handleEmail() {
    const message = buildMessage(form);
    const subject = `Appointment request — ${form.name}`;
    const url = `mailto:${CLINIC_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = url;
    setSent(true);
  }

  function handleClose() {
    setForm(initialState);
    setSent(false);
    onClose();
  }

  return (
    <div className="booking-overlay" onClick={handleClose} role="presentation">
      <div
        className="booking-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="booking-close"
          onClick={handleClose}
          aria-label="Close booking form"
        >
          ×
        </button>

        {sent ? (
          <div className="booking-success">
            <div className="kicker">Request ready</div>
            <h2 id="booking-title">Almost done</h2>
            <p>
              Your visit details are ready. Finish sending the message in
              WhatsApp or your email app, and the clinic will confirm your
              appointment.
            </p>
            <div className="booking-actions">
              <button type="button" className="btn" onClick={handleClose}>
                Done
              </button>
              <a className="btn light" href="tel:+919418092355">
                Or call now ↗
              </a>
            </div>
          </div>
        ) : (
          <>
            <div className="kicker">Book a visit</div>
            <h2 id="booking-title">Request an appointment</h2>
            <p className="booking-intro">
              Share a few details and we&apos;ll open WhatsApp or email so you
              can send the request directly to 32 Intact.
            </p>

            <form className="booking-form" onSubmit={handleWhatsApp}>
              <label>
                Full name
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </label>
              <label>
                Phone
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Mobile number"
                />
              </label>
              <div className="booking-row">
                <label>
                  Preferred date
                  <input
                    type="date"
                    name="preferredDate"
                    value={form.preferredDate}
                    onChange={(e) =>
                      setForm({ ...form, preferredDate: e.target.value })
                    }
                  />
                </label>
                <label>
                  Preferred time
                  <select
                    name="preferredTime"
                    value={form.preferredTime}
                    onChange={(e) =>
                      setForm({ ...form, preferredTime: e.target.value })
                    }
                  >
                    <option value="">Any time</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </label>
              </div>
              <label>
                Reason for visit
                <textarea
                  name="reason"
                  value={form.reason}
                  onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  placeholder="Check-up, tooth pain, cleaning…"
                />
              </label>

              <div className="booking-actions">
                <button type="submit" className="btn">
                  Send on WhatsApp ↗
                </button>
                <button
                  type="button"
                  className="btn light"
                  onClick={handleEmail}
                  disabled={!form.name || !form.phone}
                >
                  Send by email
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
