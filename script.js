(() => {
  const priceTable = {
    '1': { value: 200000, label: '200K IDR' },
    '3': { value: 1650000, label: '1,65 Mio IDR' },
    '7': { value: 2750000, label: '2,75 Mio IDR' },
    '30': { value: 7000000, label: '7 Mio IDR' }
  };

  document.querySelectorAll('[data-bike-card]').forEach(card => {
    const select = card.querySelector('select');
    const priceEl = card.querySelector('[data-price-value]');
    if (!select || !priceEl) return;

    const updatePrice = () => {
      const { label } = priceTable[select.value] || priceTable['1'];
      priceEl.textContent = label;
    };

    select.addEventListener('change', updatePrice);
    updatePrice();
  });

  const reservationForm = document.getElementById('reservationForm');
  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(reservationForm);
      const msg = `NEONRIDE TEMPLATE%0A` +
        `Bike: ${data.get('bike')}%0A` +
        `Duration: ${data.get('duration')}%0A` +
        `Delivery: ${data.get('delivery')}%0A` +
        `Date: ${data.get('datetime')}%0A` +
        `Payment: ${data.get('payment')}%0A` +
        `Name: ${data.get('name')}%0A` +
        `Notes: ${data.get('notes') || 'None'}`;
      window.open(`https://wa.me/6281200000000?text=${msg}`, '_blank');
    });
  }
})();
