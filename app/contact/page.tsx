import type { Metadata } from 'next';
import { Phone, Mail, MapPin } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact Us — Chemist Box',
  description: 'Get in touch with Chemist Box for partnerships, support, or any queries.',
};

export default function ContactPage() {
  const contactInfo = [
    { 
      icon: <Phone size={22} />, 
      label: 'Phone', 
      value: '0612-6604555', 
      sub: 'Mon–Sat, 9am–8pm',
      href: 'tel:06126604555'
    },
    { 
      icon: <Mail size={22} />, 
      label: 'Email', 
      value: 'hello@chemistbox.in', 
      sub: 'We reply within 24 hours',
      href: 'mailto:hello@chemistbox.in'
    },
    { 
      icon: <MapPin size={22} />, 
      label: 'Corporate Office', 
      value: 'Chemist Box Pvt. Ltd.', 
      sub: '1st Floor, Sisodia Palace, East Boring Canal Road, Patna 800001',
      href: 'https://maps.google.com/?q=Chemist+Box+Pvt.+Ltd.+Sisodia+Palace+East+Boring+Canal+Road+Patna',
      target: '_blank'
    },
  ];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Get In Touch</h1>
          <p>
            Have a question, partnership inquiry, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Form */}
            <div className={styles.formCard}>
              <h3>Send a Message</h3>
              <div className={styles.formFields}>
                {['Full Name', 'Email Address', 'Phone Number'].map((p) => (
                  <div key={p} className={styles.formGroup}>
                    <label htmlFor={`contact-${p.toLowerCase().replace(' ', '-')}`}>{p}</label>
                    <input
                      type="text"
                      placeholder={`Enter your ${p.toLowerCase()}`}
                      id={`contact-${p.toLowerCase().replace(' ', '-')}`}
                    />
                  </div>
                ))}
                <div className={styles.formGroup}>
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us how we can help..."
                    id="contact-message"
                  />
                </div>
                <button
                  id="contact-submit"
                  className="btn btn-teal btn-lg"
                  style={{ justifyContent: 'center' }}
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Info */}
            <div className={styles.infoContainer}>
              <div className={styles.infoHeader}>
                <div className="eyebrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 4 }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Contact Information
                </div>
                <h2>We&apos;re Here to Help</h2>
                <div className="divider"/>
              </div>

              <div className={styles.infoList}>
                {contactInfo.map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    target={c.target}
                    rel={c.target ? 'noopener noreferrer' : undefined}
                    className={styles.infoCard}
                  >
                    <div className={styles.iconWrap}>
                      {c.icon}
                    </div>
                    <div className={styles.infoDetails}>
                      <div className={styles.infoLabel}>{c.label}</div>
                      <div className={styles.infoValue}>{c.value}</div>
                      <div className={styles.infoSub}>{c.sub}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
