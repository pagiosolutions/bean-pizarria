import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      padding: '18px 0',
      background: scrolled ? 'rgba(26,8,0,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{
          fontFamily: 'var(--font-script)',
          fontSize: '28px',
          color: 'var(--white)',
          letterSpacing: '0.02em',
        }}>
          Bean <span style={{ color: 'var(--gold)' }}>Pizzaria</span>
        </Link>

        {/* Links desktop */}
        <ul style={{
          display: 'flex', alignItems: 'center', gap: '36px',
          listStyle: 'none',
        }} className="nav-links-desktop">
          {[
            { label: 'Home', anchor: 'home' },
            { label: 'Cardápio', anchor: 'cardápio' },
            { label: 'Sobre Nós', anchor: 'sobre' },
            { label: 'Contato', anchor: 'contato' },
          ].map(({ label, anchor }) => (
            <li key={label}>
              <a href={`/#${anchor}`} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: '700',
                letterSpacing: '0.08em',
                color: 'rgba(255,255,255,0.8)',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
              >{label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div>
          <Link to="/" className="btn btn-gold" style={{ padding: '10px 22px', fontSize: '12px' }}>
            Pedir Agora
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
