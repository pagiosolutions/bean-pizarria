import { useEffect, useRef } from 'react';

export default function CtaBanner() {
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
    <section ref={ref} style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '100px 0',
    }}>
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(26,8,0,0.92) 0%, rgba(61,28,0,0.85) 100%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          gap: '80px',
        }}>
          <div className="reveal">
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '700',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--gold)', display: 'block', marginBottom: '16px',
            }}>✦ Oferta especial</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 50px)',
              fontWeight: '700', color: 'var(--white)',
              fontStyle: 'italic', lineHeight: '1.2',
              marginBottom: '20px',
            }}>
              Uma chance de ter uma manhã — e noite — incrível
            </h2>
            <p style={{
              fontSize: '16px', color: 'rgba(255,255,255,0.65)',
              lineHeight: '1.85', marginBottom: '36px', maxWidth: '440px',
            }}>
              Primeira pizza com 20% de desconto para novos clientes. Retire no local ou receba em casa. Nossa entrega é rápida e o sabor é garantido.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="/" className="btn btn-gold">Aproveitar Agora</a>
              <a href="/#cardápio" className="btn btn-outline">Ver Promoções</a>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '0.2s', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                width: '320px', height: '320px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid rgba(201,148,58,0.4)',
                boxShadow: '0 0 80px rgba(201,148,58,0.2)',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=80"
                  alt="Pizza pronta"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              {/* Tag */}
              <div style={{
                position: 'absolute', top: '-16px', right: '-16px',
                background: 'var(--red)',
                borderRadius: '50%',
                width: '90px', height: '90px',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 8px 30px rgba(181,39,26,0.5)',
                border: '3px solid var(--brown)',
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '900', color: 'var(--white)', lineHeight: '1' }}>20%</span>
                <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.05em' }}>OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
