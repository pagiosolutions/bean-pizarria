import { useState, useEffect, useRef } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setSent(true); setEmail(''); }
  };

  return (
    <section ref={ref} style={{
      position: 'relative',
      padding: '100px 0',
      overflow: 'hidden',
    }}>
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(26,8,0,0.94) 0%, rgba(61,28,0,0.9) 100%)',
      }} />

      {/* Decorative coffee cups */}
      <div style={{
        position: 'absolute', left: '5%', bottom: '-20px',
        fontSize: '120px', opacity: '0.06',
        transform: 'rotate(-20deg)',
        userSelect: 'none',
      }}>🍕</div>
      <div style={{
        position: 'absolute', right: '5%', top: '-20px',
        fontSize: '100px', opacity: '0.06',
        transform: 'rotate(15deg)',
        userSelect: 'none',
      }}>🍕</div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto' }}>
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '700',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--gold)', display: 'block', marginBottom: '16px',
          }}>✦ Novidades</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: '700', color: 'var(--white)',
            fontStyle: 'italic', marginBottom: '16px',
          }}>
            Receba as últimas novidades
          </h2>
          <p style={{
            fontSize: '15px', color: 'rgba(255,255,255,0.6)',
            marginBottom: '40px', lineHeight: '1.8',
          }}>
            Não perca nossas promoções, novos sabores e eventos especiais. Assine e ganhe 10% off no primeiro pedido.
          </p>

          {sent ? (
            <div style={{
              background: 'rgba(201,148,58,0.15)',
              border: '1px solid rgba(201,148,58,0.4)',
              borderRadius: '14px', padding: '20px 32px',
            }}>
              <span style={{ fontSize: '24px' }}>🍕</span>
              <p style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)', fontSize: '18px', marginTop: '8px' }}>
                Bem-vindo à família Bean!
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginTop: '4px' }}>
                Seu cupom de 10% OFF foi enviado por e-mail.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              display: 'flex', gap: '0',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '100px',
              padding: '6px 6px 6px 24px',
              backdropFilter: 'blur(10px)',
            }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail..."
                required
                style={{
                  flex: 1,
                  background: 'none', border: 'none', outline: 'none',
                  color: 'var(--white)',
                  fontSize: '15px', fontFamily: 'var(--font-body)',
                }}
              />
              <button type="submit" className="btn btn-gold" style={{ flexShrink: 0, fontSize: '13px' }}>
                Assinar
              </button>
            </form>
          )}

          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '16px' }}>
            Sem spam. Cancele quando quiser.
          </p>
        </div>
      </div>
    </section>
  );
}
