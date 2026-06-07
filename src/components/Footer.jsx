export default function Footer() {
  const cols = [
    {
      title: 'Sobre',
      links: ['Cardápio', 'Recursos', 'Notícias & Blog', 'Ajuda & Suporte'],
    },
    {
      title: 'Empresa',
      links: ['Como trabalhamos', 'Termos de serviço', 'Preços', 'FAQ'],
    },
    {
      title: 'Contato',
      lines: [
        'Rua das Pizzas, 142',
        'Porto Alegre, RS – 90000-000',
        '+55 51 3000-0000',
        'oi@beanpizzaria.com.br',
        'www.beanpizzaria.com.br',
      ],
    },
  ];

  return (
    <footer style={{
      background: 'var(--brown)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      {/* Main footer */}
      <div className="container" style={{ padding: '72px 24px 48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: '48px',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-script)',
              fontSize: '32px',
              color: 'var(--white)',
              marginBottom: '16px',
            }}>
              Bean <span style={{ color: 'var(--gold)' }}>Pizzaria</span>
            </div>
            <p style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: '1.85',
              maxWidth: '240px',
              marginBottom: '28px',
            }}>
              Tradição italiana no coração do Brasil. Massa artesanal, forno a lenha e ingredientes que fazem a diferença desde 2009.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {['📘', '📸', '🎵', '🐦'].map((icon, i) => (
                <button key={i} type="button" style={{
                  width: '36px', height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', transition: 'all 0.2s',
                  cursor: 'pointer', padding: 0,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.borderColor = 'var(--gold)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >{icon}</button>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {cols.map(col => (
            <div key={col.title}>
              <h4 style={{
                fontFamily: 'var(--font-body)', fontSize: '12px',
                fontWeight: '700', letterSpacing: '0.15em',
                textTransform: 'uppercase', color: 'var(--gold)',
                marginBottom: '20px',
              }}>{col.title}</h4>
              {col.links ? (
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {col.links.map(link => (
                    <li key={link}>
                      <button type="button" style={{
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.45)',
                        transition: 'color 0.2s',
                        background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                      }}
                      onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
                      >{link}</button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {col.lines.map((line, i) => (
                    <p key={i} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.6' }}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar — pagio style */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container footer-bottom" style={{
          padding: '22px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
        }}>
          <div style={{
            fontFamily: 'var(--font-script)',
            fontSize: '18px', color: 'var(--white)',
          }}>pagio</div>
          <div style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.3)',
          }}>
            © 2026 pagio. Todos os direitos reservados.
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer [style*="grid-template-columns: 1.5fr"] {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
