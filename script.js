document.addEventListener('DOMContentLoaded', function () {
    const cardLinks = document.querySelectorAll('.card-link'); // Memilih semua tautan dengan kelas 'card-link'
  
    cardLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah tautan mengarahkan langsung ke halaman
  
        const card = link.closest('.card'); // Mencari elemen kartu terdekat dari tautan yang diklik
        const title = card.querySelector('.card-title').innerText;
        const subtitle = card.querySelector('.card-subtitle').innerText;
        const description = card.querySelector('.card-text').innerText;
        const price = card.querySelector('.card-footer p').innerText;
  
        // Mengubah URL halaman dengan parameter data
        const detailUrl = `detail.html?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(subtitle)}&description=${encodeURIComponent(description)}&price=${encodeURIComponent(price)}`;
        window.location.href = detailUrl;
      });
    });
  });