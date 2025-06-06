async function loadProducts() {
    try {
      const response = await fetch('products.json');
      const products = await response.json();
  
      const container = document.getElementById('product-list');
      if (!container) return;
  
      container.innerHTML = "";
  
      products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
  
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <a href="${product.link}" target="_blank" rel="noopener noreferrer" class="buy-button">Beli Sekarang</a>
        `;
  
        container.appendChild(card);
      });
    } catch (error) {
      console.error('Gagal memuat produk:', error);
    }
  }
  
  async function loadPromos() {
    try {
      const response = await fetch('promos.json');
      const promos = await response.json();
  
      const container = document.getElementById('promo-list');
      if (!container) return;
  
      container.innerHTML = "";
  
      promos.forEach(promo => {
        const card = document.createElement('div');
        card.className = 'promo-card';
  
        card.innerHTML = `
          <img src="${promo.image}" alt="${promo.title}" />
          <h3>${promo.title}</h3>
          <p>${promo.description}</p>
          <a href="${promo.link}" target="_blank" class="buy-button">Lihat Promo</a>
        `;
  
        container.appendChild(card);
      });
    } catch (error) {
      console.error('Gagal memuat promo:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadPromos();
  
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Terima kasih, pesan Anda telah dikirim!');
        e.target.reset();
      });
    }
  });
  
