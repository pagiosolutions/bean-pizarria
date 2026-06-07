import { useEffect, useRef } from 'react';

const diffs = [
  { icon: '🌾', title: 'Massa Artesanal', desc: 'Fermentada por 48 horas com farinha italiana 00 importada.' },
  { icon: '🏆', title: 'Alta Qualidade', desc: 'Ingredientes selecionados e controlados rigorosamente.' },
  { icon: '🔥', title: 'Forno a Lenha', desc: 'Assada a 450°C em forno a lenha napolitano original.' },
  { icon: '💰', title: 'Preço Justo', desc: 'Qualidade premium sem pesar no bolso da família.' },
];

export default function WhyUs() {
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
    <section ref={ref} style={{ padding: '120px 0', background: 'var(--cream)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-tag">// por que nós?</span>
          <h2 className="section-title dark" style={{ fontStyle: 'italic' }}>
            Por que somos diferentes?
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Não fazemos apenas pizza. Fazemos o seu dia melhor.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          marginBottom: '80px',
        }}>
          {diffs.map((d, i) => (
            <div
              key={d.title}
              className="reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div style={{
                background: 'var(--cream-dark)',
                border: '1px solid rgba(201,148,58,0.15)',
                borderRadius: '20px',
                padding: '36px 24px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--white)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.borderColor = 'var(--gold)';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--cream-dark)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(201,148,58,0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                <div style={{
                  width: '72px', height: '72px',
                  borderRadius: '50%',
                  background: 'rgba(201,148,58,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '28px',
                  margin: '0 auto 20px',
                  border: '1px solid rgba(201,148,58,0.2)',
                }}>{d.icon}</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '18px', fontWeight: '700',
                  color: 'var(--red)', marginBottom: '10px',
                }}>{d.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: '1.7' }}>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal" style={{
          background: 'linear-gradient(135deg, var(--brown) 0%, var(--brown-mid) 100%)',
          borderRadius: '24px',
          padding: '60px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
          flexWrap: 'wrap',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative */}
          <div style={{
            position: 'absolute', right: '-40px', top: '-40px',
            width: '200px', height: '200px',
            borderRadius: '50%',
            background: 'rgba(201,148,58,0.08)',
          }} />
          <div style={{
            position: 'absolute', left: '200px', bottom: '-60px',
            width: '160px', height: '160px',
            borderRadius: '50%',
            background: 'rgba(181,39,26,0.1)',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '12px',
              fontWeight: '700', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'var(--gold)',
              marginBottom: '8px',
            }}>Grandes ideias começam com uma boa pizza</p>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: '700', color: 'var(--white)',
              fontStyle: 'italic',
            }}>Comece hoje mesmo.</h3>
          </div>
          <a href="#cardápio" className="btn btn-gold" style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>
            Fazer Meu Pedido
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section [style*="repeat(4, 1fr)"] { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
