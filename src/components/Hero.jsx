export default function Hero() {
  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      {/* Overlay gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(105deg, rgba(26,8,0,0.88) 45%, rgba(26,8,0,0.3) 100%)',
      }} />

      {/* Decorative corner */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, var(--gold), var(--red), var(--gold))',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '100px' }}>
        <div style={{ maxWidth: '600px' }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px', fontWeight: '700',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'var(--gold)', display: 'block', marginBottom: '20px',
          }}>
            ✦ Autêntica Pizza Italiana
          </span>

          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            color: 'rgba(255,255,255,0.75)',
            fontStyle: 'italic',
            marginBottom: '8px',
          }}>
            Cobrimos sua noite com a melhor
          </p>

          <h1 style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(72px, 12vw, 130px)',
            color: 'var(--white)',
            lineHeight: '0.9',
            marginBottom: '28px',
            textShadow: '0 4px 40px rgba(201,148,58,0.3)',
          }}>
            Pizza
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: '1.85',
            maxWidth: '440px',
            marginBottom: '40px',
          }}>
            Massa artesanal fermentada por 48 horas, molho de tomate San Marzano e ingredientes frescos importados da Itália. Cada pizza é uma obra de arte.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="#cardápio" className="btn btn-gold">Ver Cardápio</a>
            <a href="/" className="btn btn-outline">Fazer Pedido</a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: '0',
            marginTop: '60px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '32px',
          }}>
            {[
              { n: '15+', l: 'Anos de tradição' },
              { n: '40+', l: 'Sabores únicos' },
              { n: '98%', l: 'Clientes satisfeitos' },
            ].map((s, i) => (
              <div key={i} style={{
                paddingRight: '40px',
                marginRight: '40px',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '32px', fontWeight: '900',
                  color: 'var(--gold)', lineHeight: '1',
                }}>{s.n}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '6px', letterSpacing: '0.08em' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
