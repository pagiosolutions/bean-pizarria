import { useEffect, useRef } from 'react';
import { business, mapsLink, mapsEmbed } from '../config/business';

export default function Contato() {
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contato" ref={ref} style={{ padding: '120px 0', background: 'var(--cream)' }}>
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-tag">{"// contato"}</span>
          <h2 className="section-title dark" style={{ fontStyle: 'italic' }}>
            Onde nos encontrar
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Escolha como prefere pedir. Atendemos no balcão, por telefone, no WhatsApp e pelos apps de delivery.
          </p>
          <div className="divider-ornament" style={{ marginTop: '24px' }}>
            <div className="line" />
            <span className="icon">🍕</span>
            <div className="line" />
          </div>
        </div>

        {/* Grid: info + mapa */}
        <div className="contato-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'stretch',
        }}>
          {/* Coluna info */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Endereço */}
            <InfoCard icon="📍" title="Endereço">
              <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: '1.7' }}>
                {business.address}<br />{business.city}
              </p>
              <a href={mapsLink()} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                Ver no mapa →
              </a>
            </InfoCard>

            {/* Horário */}
            <InfoCard icon="🕒" title="Horário de funcionamento">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {business.hours.map(h => (
                  <div key={h.days} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span style={{ color: 'var(--text-mid)' }}>{h.days}</span>
                    <span style={{ color: 'var(--text-dark)', fontWeight: '700' }}>{h.time}</span>
                  </div>
                ))}
              </div>
            </InfoCard>

            {/* Telefone */}
            <InfoCard icon="📞" title="Telefone">
              <a href={`tel:+${business.phoneDigits}`} style={{ ...linkStyle, fontSize: '15px' }}>
                {business.phoneDisplay}
              </a>
            </InfoCard>
          </div>

          {/* Coluna mapa */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              height: '100%',
              minHeight: '320px',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid rgba(201,148,58,0.2)',
            }}>
              <iframe
                title="Localização da pizzaria"
                src={mapsEmbed()}
                style={{ width: '100%', height: '100%', minHeight: '320px', border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Canais de pedido */}
        <div className="reveal" style={{ marginTop: '48px' }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--brown) 0%, var(--brown-mid) 100%)',
            borderRadius: '24px',
            padding: '48px',
            textAlign: 'center',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px, 3vw, 30px)',
              fontWeight: '700', color: 'var(--white)',
              fontStyle: 'italic', marginBottom: '8px',
            }}>
              Pronto para pedir?
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginBottom: '28px' }}>
              Fale com a gente pelo seu canal preferido.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="/" className="btn btn-gold">
                Fazer Pedido
              </a>
              <a href={`tel:+${business.phoneDigits}`} className="btn btn-outline">
                📞 Ligar agora
              </a>
            </div>

            {/* Apps de delivery */}
            {business.deliveryApps.length > 0 && (
              <div style={{ marginTop: '36px' }}>
                <p style={{
                  fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em',
                  textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px',
                }}>
                  Ou peça pelos apps
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {business.deliveryApps.map(app => (
                    <a
                      key={app.label}
                      href={app.url}
                      target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '100px',
                        padding: '10px 22px',
                        fontSize: '14px', fontWeight: '700',
                        color: 'var(--white)',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.borderColor = 'var(--gold)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                    >
                      <span>{app.emoji}</span> {app.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .contato-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const linkStyle = {
  display: 'inline-block',
  marginTop: '10px',
  fontFamily: 'var(--font-body)',
  fontSize: '14px',
  fontWeight: '700',
  color: 'var(--red)',
  transition: 'color 0.2s',
};

function InfoCard({ icon, title, children }) {
  return (
    <div style={{
      background: 'var(--white)',
      border: '1px solid rgba(201,148,58,0.15)',
      borderRadius: '18px',
      padding: '24px',
      display: 'flex',
      gap: '16px',
    }}>
      <div style={{
        flexShrink: 0,
        width: '48px', height: '48px',
        borderRadius: '12px',
        background: 'rgba(201,148,58,0.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '22px',
      }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <h4 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '17px', fontWeight: '700',
          color: 'var(--text-dark)', marginBottom: '4px',
        }}>{title}</h4>
        {children}
      </div>
    </div>
  );
}
