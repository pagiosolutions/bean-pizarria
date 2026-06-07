import { useEffect, useRef } from 'react';

export default function Discover() {
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
    <section id="sobre" ref={ref} style={{ padding: '120px 0', background: 'var(--cream)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}>
          {/* Text */}
          <div className="reveal">
            <span className="section-tag">{"// nossa história"}</span>
            <h2 className="section-title dark" style={{ fontStyle: 'italic' }}>
              Descubra a melhor<br />pizza da cidade
            </h2>
            <p className="section-sub" style={{ marginBottom: '24px' }}>
              A Bean Pizzaria nasceu da paixão de uma família italiana que trouxe para o Brasil as receitas originais de Nápoles. Cada ingrediente é selecionado com cuidado, cada massa é preparada com amor e tradição de gerações.
            </p>
            <p className="section-sub" style={{ marginBottom: '36px' }}>
              Nossa farinha é importada, nosso azeite é extra virgem, e nosso forno a lenha queima a 450°C para criar aquela borda perfeita — crocante por fora, macia por dentro.
            </p>
            <a href="#cardápio" className="btn btn-gold">Explorar Cardápio</a>
          </div>

          {/* Image collage */}
          <div className="reveal" style={{ position: 'relative', height: '480px' }}>
            <div style={{
              position: 'absolute', top: 0, right: 0,
              width: '75%', height: '320px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
            }}>
              <img
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80"
                alt="Pizza margherita"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{
              position: 'absolute', bottom: 0, left: 0,
              width: '60%', height: '260px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '4px solid var(--cream)',
            }}>
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80"
                alt="Ingredientes frescos"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* Badge */}
            <div style={{
              position: 'absolute', bottom: '80px', right: '-20px',
              background: 'var(--red)',
              borderRadius: '50%',
              width: '110px', height: '110px',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 30px rgba(181,39,26,0.4)',
              zIndex: 10,
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '900', color: 'var(--white)', lineHeight: '1' }}>15+</span>
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.8)', textAlign: 'center', letterSpacing: '0.05em' }}>anos de tradição</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #sobre .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
          #sobre [style*="height: 480px"] { height: 320px !important; }
        }
      `}</style>
    </section>
  );
}
