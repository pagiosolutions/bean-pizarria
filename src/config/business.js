// ─────────────────────────────────────────────────────────────
//  DADOS DO NEGÓCIO — edite tudo por aqui (telefone, endereço,
//  links de delivery, horários). O site inteiro lê deste arquivo.
// ─────────────────────────────────────────────────────────────

export const business = {
  name: 'Bean Pizzaria',

  // Telefone para ligação (formato livre p/ exibição)
  phoneDisplay: '+55 51 3000-0000',
  // Só dígitos, com DDI, para o link tel:
  phoneDigits: '555130000000',

  // WhatsApp: só dígitos, com DDI 55 + DDD + número (sem espaços/símbolos)
  whatsapp: '5551990000000',

  email: 'oi@beanpizzaria.com.br',

  // Endereço
  address: 'Rua das Pizzas, 142',
  city: 'Porto Alegre, RS – 90000-000',

  // Horário de funcionamento (texto livre, uma linha por faixa)
  hours: [
    { days: 'Terça a Sexta', time: '18h – 23h' },
    { days: 'Sábado e Domingo', time: '18h – 00h' },
    { days: 'Segunda-feira', time: 'Fechado' },
  ],

  // Apps de delivery — troque o "url" pelo link real de cada um.
  // Deixe a lista vazia ([]) para ocultar a seção de apps.
  deliveryApps: [
    { label: 'iFood', emoji: '🛵', url: '#' },
    { label: 'Rappi', emoji: '🛵', url: '#' },
    { label: '99Food', emoji: '🛵', url: '#' },
  ],
};

// Monta um link de WhatsApp com mensagem opcional pré-preenchida.
export function whatsappLink(message) {
  const base = `https://wa.me/${business.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Mensagem padrão para pedido de uma pizza específica.
export function pizzaOrderMessage(pizzaName) {
  return `Olá! Vim pelo site e gostaria de pedir a pizza ${pizzaName}. 🍕`;
}

// Link de mapa (Google Maps) a partir do endereço.
export function mapsLink() {
  const q = encodeURIComponent(`${business.name}, ${business.address}, ${business.city}`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

// URL de embed do mapa para o iframe.
export function mapsEmbed() {
  const q = encodeURIComponent(`${business.address}, ${business.city}`);
  return `https://maps.google.com/maps?q=${q}&output=embed`;
}
