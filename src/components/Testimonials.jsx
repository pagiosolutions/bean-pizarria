import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    text: 'A melhor pizza que já comi na vida. A massa é perfeita — crocante na borda, macia no centro. O molho San Marzano faz toda a diferença. Vou de semana em semana e nunca me decepciono.',
    name: 'Mariana Oliveira',
    role: 'Designer de Interiores',
    initials: 'MO',
    color: '#B5271A',
  },
  {
    text: 'Sou cliente há 8 anos e nunca a qualidade caiu. O Quattro Formaggi é um pecado delicioso. Sempre que recebo amigos em casa, peço da Bean Pizzaria e faço sucesso garantido.',
    name: 'Rafael Mendes',
    role: 'Engenheiro de Software',
    initials: 'RM',
    color: '#C9943A',
  },
  {
    text: 'A entrega é rápida e a pizza chega quente como se tivesse saído agora do forno. A Diavola é incrível para quem curte apimentado. Recomendo de olhos fechados para todo mundo.',
    name: 'Juliana Costa',
    role: 'Empreendedora',
    initials: 'JC',
    color: '#6B3A1F',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section ref={ref} style={{ padding: '120px 0', background: 'var(--cream)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-tag">// depoimentos</span>
          <h2 className="section-title dark" style={{ fontStyle: 'italic' }}>
            Nosso feedback de perfeição
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Nossos clientes têm coisas incríveis a dizer sobre nós.
          </p>
        </div>

        <div className="reveal" style={{ position: 'relative', maxWidth: '740px', margin: '0 auto' }}>
          {/* Decorative splashes */}
          <div style={{
            position: 'absolute', left: '-80px', top: '50%', transform: 'translateY(-50%)',
            fontSize: '80px', opacity: '0.06', userSelect: 'none',
          }}>🍕</div>
          <div style={{
            position: 'absolute', right: '-80px', bottom: '0',
            fontSize: '60px', opacity: '0.06', userSelect: 'none',
          }}>🍕</div>

          <div style={{
            background: 'var(--white)',
            borderRadius: '24px',
            padding: '52px 60px',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
            textAlign: 'center',
            minHeight: '260px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          }}>
            {/* Quote mark */}
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '80px', lineHeight: '1',
              color: 'var(--gold)', opacity: '0.3',
              position: 'absolute', top: '20px', left: '36px',
            }}>"</div>

            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '17px',
              fontStyle: 'italic',
              color: 'var(--text-mid)',
              lineHeight: '1.85',
              marginBottom: '36px',
              position: 'relative', zIndex: 1,
              transition: 'opacity 0.3s',
            }}>
              {t.text}
            </p>

            {/* Author */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '56px', height: '56px', borderRadius: '50%',
                background: t.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontSize: '18px',
                fontWeight: '700', color: 'var(--white)',
                border: '3px solid var(--cream)',
                boxShadow: 'var(--shadow-sm)',
              }}>{t.initials}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: '700', color: 'var(--text-dark)' }}>{t.name}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-light)' }}>{t.role}</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '32px' }}>
            <button onClick={prev} style={{
              width: '44px', height: '44px', borderRadius: '50%',
              background: 'var(--white)', border: '1px solid rgba(201,148,58,0.3)',
              cursor: 'pointer', fontSize: '18px',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--white)'; e.currentTarget.style.color = 'inherit'; }}
            >←</button>

            <div style={{ display: 'flex', gap: '8px' }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '100px',
                  background: i === current ? 'var(--red)' : 'rgba(181,39,26,0.2)',
                  border: 'none', cursor: 'pointer',
                  transition: 'all 0.3s',
                  padding: 0,
                }} />
              ))}
            </div>

            <button onClick={next} style={{
              width: '44px', height: '44px', borderRadius: '50%',
              background: 'var(--white)', border: '1px solid rgba(201,148,58,0.3)',
              cursor: 'pointer', fontSize: '18px',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--white)'; e.currentTarget.style.color = 'inherit'; }}
            >→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
