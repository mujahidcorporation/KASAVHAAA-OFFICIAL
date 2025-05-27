async function loadProducts() {
  try {
    const response = await fetch('products.json');
    const products = await response.json();

    const container = document.getElementById('product-list');
    container.innerHTML = "";

    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';

      card.innerHTML = `
        <img src="${product.image}" alt="${product.image}" />
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

document.addEventListener('DOMContentLoaded', () => {
  loadProducts();

  document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Terima kasih, pesan Anda telah dikirim!');
    e.target.reset();
  });
});
