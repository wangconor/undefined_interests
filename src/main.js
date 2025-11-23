import './style.css'

const transactions = [
  {
    id: 'OBS-091',
    name: 'Project: SILENCE',
    type: 'Acoustic Nullification',
    date: '2024-??-??',
    amount: 'UNDEFINED',
    status: 'ACTIVE'
  },
  {
    id: 'OBS-092',
    name: 'Deep Mind Collective',
    type: 'Neural Lace',
    date: '2023-11-05',
    amount: '¥ 4.5B',
    status: 'UNKNOWN'
  },
  {
    id: 'OBS-088',
    name: 'Sector 7 Real Estate',
    type: 'Off-World',
    date: '2025-01-01',
    amount: 'REDACTED',
    status: 'PENDING'
  },
  {
    id: 'OBS-042',
    name: 'The Void Archive',
    type: 'Data Storage',
    date: '2022-08-15',
    amount: '∞',
    status: 'COMPLETED'
  },
  {
    id: 'OBS-101',
    name: 'Synthetic Flora',
    type: 'Bio-Engineering',
    date: '2024-04-20',
    amount: '$12.0M',
    status: 'EXITED'
  },
  {
    id: 'OBS-000',
    name: 'Null Pointer',
    type: 'Abstract Math',
    date: '1999-12-31',
    amount: 'NaN',
    status: 'UNKNOWN'
  }
];

const grid = document.querySelector('#transaction-grid');

const createCard = (trx) => {
  const card = document.createElement('div');
  card.className = 'deal-card';

  card.innerHTML = `
    <div style="padding: 1.5rem; flex-grow: 1; display: flex; flex-direction: column;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
        <span class="tech-marker" style="position: static; opacity: 0.5;">${trx.id}</span>
        <span class="tech-marker" style="position: static; color: var(--ui-accent);">&lt;/&gt;</span>
      </div>
      
      <h3 class="deal-title">${trx.name}</h3>
      <div class="deal-type">// ${trx.type}</div>
    </div>
    
    <div class="deal-meta">
      <div class="meta-item">
        <span class="meta-label">Timestamp</span>
        <span class="meta-value">${trx.date}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Valuation</span>
        <span class="meta-value">${trx.amount}</span>
      </div>
      <div class="meta-item" style="grid-column: span 2; margin-top: 0.5rem; flex-direction: row; justify-content: space-between; align-items: center;">
        <span class="meta-label">State</span>
        <span class="meta-value status-${trx.status.toLowerCase()}">[ ${trx.status} ]</span>
      </div>
    </div>
  `;

  return card;
};

transactions.forEach(trx => {
  grid.appendChild(createCard(trx));
});
