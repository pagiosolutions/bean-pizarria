import { useEffect, useRef } from 'react';

const pizzas = [
  {
    name: 'Margherita',
    desc: 'Molho San Marzano | Mussarela de búfala',
    price: 'R$ 52,00',
    tag: 'Clássica',
    img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80',
    color: '#e8f5e9',
  },
  {
    name: 'Pepperoni',
    desc: 'Pepperoni artesanal | Mussarela',
    price: 'R$ 62,00',
    tag: 'Favorita',
    img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80',
    color: '#fdecea',
  },
  {
    name: 'Quattro Formaggi',
    desc: 'Gorgonzola | Brie | Parmesão | Mussarela',
    price: 'R$ 68,00',
    tag: 'Premium',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80',
    color: '#fff8e1',
  },
  {
    name: 'Diavola',
    desc: 'Salame picante | Pimenta calabresa | Mussarela',
    price: 'R$ 64,00',
    tag: 'Picante 🌶',
    img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80',
    color: '#fce4ec',
  },
];

export default function Menu() {
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="cardápio" ref={ref} style={{ padding: '120px 0', background: 'var(--cream-dark)' }}>
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '72px' }}>
          <span className="section-tag">{"// cardápio"}</span>
          <h2 className="section-title dark" style={{ fontStyle: 'italic' }}>
            Um novo sabor a cada pedido
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Explore todos os sabores conosco. Sempre há uma pizza nova valendo a experiência.
          </p>
          <div className="divider-ornament" style={{ marginTop: '24px' }}>
            <div className="line" />
            <span className="icon">🍕</span>
            <div className="line" />
          </div>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
        }}>
          {pizzas.map((p, i) => (
            <div
              key={p.name}
              className="reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div style={{
                background: 'var(--white)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px',
                    background: 'var(--red)',
                    color: 'var(--white)',
                    fontSize: '10px', fontWeight: '700',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '4px 12px', borderRadius: '100px',
                  }}>{p.tag}</div>
                </div>

                {/* Body */}
                <div style={{ padding: '20px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '20px', fontWeight: '700',
                    color: 'var(--text-dark)', marginBottom: '6px',
                  }}>{p.name}</h3>
                  <p style={{ fontSize: '12px', color: 'var(--text-light)', marginBottom: '16px', lineHeight: '1.5' }}>{p.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '22px', fontWeight: '700',
                      color: 'var(--red)',
                    }}>{p.price}</span>
                  </div>
                  <button className="btn btn-red" style={{
                    width: '100%', marginTop: '14px',
                    padding: '11px', fontSize: '12px', justifyContent: 'center',
                  }}>
                    Pedir Agora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href="#cardápio" className="btn btn-outline" style={{ color: 'var(--red)', border: '2px solid var(--red)' }}>
            Ver Cardápio Completo
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #cardápio [style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          #cardápio [style*="grid-template-columns: repeat(4"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
