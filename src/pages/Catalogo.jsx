import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const allPizzas = [
  {
    name: 'Margherita',
    desc: 'Molho San Marzano | Mussarela de búfala | Manjericão fresco',
    price: 52,
    tag: 'Clássica',
    img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80',
  },
  {
    name: 'Pepperoni',
    desc: 'Pepperoni artesanal | Mussarela | Orégano fresco',
    price: 62,
    promo: true,
    originalPrice: 75,
    tag: 'Favorita',
    img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80',
  },
  {
    name: 'Quattro Formaggi',
    desc: 'Gorgonzola | Brie | Parmesão | Mussarela',
    price: 68,
    tag: 'Premium',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80',
  },
  {
    name: 'Diavola',
    desc: 'Salame picante | Pimenta calabresa | Mussarela',
    price: 54,
    promo: true,
    originalPrice: 72,
    tag: 'Picante 🌶',
    img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80',
  },
  {
    name: 'Funghi e Trufa',
    desc: 'Cogumelos frescos | Creme de trufa preta | Parmesão ralado',
    price: 78,
    tag: 'Premium',
    img: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=500&q=80',
  },
  {
    name: 'Marinara',
    desc: 'Molho de tomate fresco | Alho | Orégano | Azeite extra virgem',
    price: 45,
    tag: 'Clássica',
    img: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&q=80',
  },
  {
    name: 'Prosciutto e Rúcula',
    desc: 'Presunto cru importado | Rúcula fresca | Parmesão | Mussarela',
    price: 65,
    promo: true,
    originalPrice: 82,
    tag: 'Especial',
    img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&q=80',
  },
  {
    name: 'Calabresa',
    desc: 'Calabresa fatiada | Cebola roxa | Mussarela | Azeitonas',
    price: 48,
    promo: true,
    originalPrice: 62,
    tag: 'Favorita',
    img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=80',
  },
  {
    name: 'Atum com Cebola',
    desc: 'Atum em conserva | Cebola | Azeitonas verdes | Mussarela',
    price: 56,
    tag: 'Clássica',
    img: 'https://images.unsplash.com/photo-1548369937-47519962c11a?w=500&q=80',
  },
  {
    name: 'Frango com Catupiry',
    desc: 'Frango desfiado temperado | Catupiry original | Milho | Mussarela',
    price: 60,
    tag: 'Favorita',
    img: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=500&q=80',
  },
  {
    name: 'Portuguesa',
    desc: 'Presunto | Ovos | Cebola | Ervilha | Azeitonas | Mussarela',
    price: 62,
    tag: 'Clássica',
    img: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=500&q=80',
  },
  {
    name: 'Quatro Estações',
    desc: 'Quatro regiões de sabores distintos | Tomate cereja | Mussarela',
    price: 65,
    promo: true,
    originalPrice: 80,
    tag: 'Premium',
    img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80',
  },
];

const promoCount = allPizzas.filter(p => p.promo).length;

function PizzaCard({ pizza }) {
  const discount = pizza.promo
    ? Math.round((1 - pizza.price / pizza.originalPrice) * 100)
    : null;

  return (
    <div
      style={{
        background: 'var(--white)',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
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
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={pizza.img}
          alt={pizza.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
          onMouseEnter={e => { e.target.style.transform = 'scale(1.08)'; }}
          onMouseLeave={e => { e.target.style.transform = 'scale(1)'; }}
        />
        {/* Tag badge */}
        <div style={{
          position: 'absolute', top: '12px', left: '12px',
          background: pizza.promo ? 'var(--gold)' : 'var(--red)',
          color: 'var(--white)',
          fontSize: '10px', fontWeight: '700',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '4px 12px', borderRadius: '100px',
        }}>{pizza.tag}</div>
        {/* Promo badge */}
        {pizza.promo && (
          <div style={{
            position: 'absolute', top: '12px', right: '12px',
            background: 'var(--red)',
            color: 'var(--white)',
            width: '52px', height: '52px',
            borderRadius: '50%',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(181,39,26,0.45)',
            border: '2px solid rgba(255,255,255,0.3)',
          }}>
            <span style={{ fontSize: '14px', fontWeight: '900', lineHeight: '1', fontFamily: 'var(--font-display)' }}>
              -{discount}%
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '20px', fontWeight: '700',
          color: 'var(--text-dark)', marginBottom: '6px',
        }}>{pizza.name}</h3>
        <p style={{ fontSize: '12px', color: 'var(--text-light)', marginBottom: '16px', lineHeight: '1.5', flex: 1 }}>
          {pizza.desc}
        </p>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', marginBottom: '14px' }}>
          {pizza.promo && (
            <span style={{
              fontSize: '14px',
              color: 'var(--text-light)',
              textDecoration: 'line-through',
              fontFamily: 'var(--font-display)',
            }}>
              R$ {pizza.originalPrice},00
            </span>
          )}
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '24px', fontWeight: '700',
            color: pizza.promo ? 'var(--red)' : 'var(--text-dark)',
            lineHeight: '1',
          }}>
            R$ {pizza.price},00
          </span>
        </div>
        <Link
          to="/"
          className="btn btn-red"
          style={{ width: '100%', padding: '11px', fontSize: '12px', justifyContent: 'center' }}
        >
          Pedir Agora
        </Link>
      </div>
    </div>
  );
}

export default function Catalogo() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Navbar />

      {/* Hero header */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '140px',
        paddingBottom: '72px',
        background: 'var(--brown)',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(26,8,0,0.5) 0%, rgba(26,8,0,0.9) 100%)',
        }} />

        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <Link to="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: '700',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '32px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
          >
            ← Voltar ao início
          </Link>

          <div>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '700',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--gold)', display: 'block', marginBottom: '16px',
            }}>{"// cardápio completo"}</span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: '700', color: 'var(--white)',
              fontStyle: 'italic', lineHeight: '1.2',
              marginBottom: '18px',
            }}>
              Todas as Nossas Pizzas
            </h1>
            <p style={{
              fontSize: '16px', color: 'rgba(255,255,255,0.6)',
              lineHeight: '1.85', maxWidth: '500px', margin: '0 auto 28px',
            }}>
              Massa artesanal, forno a lenha e ingredientes italianos selecionados. Escolha a sua favorita.
            </p>

            {/* Promo callout */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'rgba(201,148,58,0.15)',
              border: '1px solid rgba(201,148,58,0.4)',
              borderRadius: '100px',
              padding: '10px 24px',
            }}>
              <span style={{ fontSize: '16px' }}>🔥</span>
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: '700',
                color: 'var(--gold)', letterSpacing: '0.05em',
              }}>
                {promoCount} pizzas com desconto especial hoje
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pizzas grid */}
      <section style={{ background: 'var(--cream-dark)', padding: '80px 0 100px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '28px',
          }} className="catalogo-grid">
            {allPizzas.map(pizza => (
              <PizzaCard key={pizza.name} pizza={pizza} />
            ))}
          </div>

          <p style={{
            textAlign: 'center',
            marginTop: '40px',
            fontSize: '13px',
            color: 'var(--text-light)',
          }}>
            * Valores de referência, sujeitos a alteração. Confirme o preço e a disponibilidade ao fazer seu pedido.
          </p>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .catalogo-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .catalogo-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .catalogo-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
