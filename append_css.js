const fs = require('fs');
const css = fs.readFileSync('style.css', 'utf8');
const append = `

/* --- Feature List (village pillars) --- */
.feature-list {
  display: flex; flex-direction: column; gap: 0;
  border: 1px solid var(--c-border); border-radius: var(--r-lg);
  overflow: hidden; background: var(--c-white); box-shadow: var(--sh-md);
}
.feature-item {
  display: grid; grid-template-columns: 72px 64px 1fr auto;
  align-items: center; gap: var(--s-6); padding: var(--s-8);
  border-bottom: 1px solid var(--c-border); background: var(--c-white);
  transition: background var(--t-fast);
}
.feature-item:last-child { border-bottom: none; }
.feature-item:hover { background: var(--c-cream); }
.feature-item__num {
  font-family: var(--ff-head); font-size: 2.8rem; font-weight: 900;
  color: var(--c-border-2); line-height: 1; user-select: none;
  transition: color var(--t-fast);
}
.feature-item:hover .feature-item__num { color: var(--c-gold-lt); }
.feature-item__icon {
  width: 56px; height: 56px; border-radius: var(--r-md);
  background: var(--c-gold-pale); color: var(--c-green);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.6rem; flex-shrink: 0;
  transition: background var(--t-fast), color var(--t-fast), transform .35s var(--ease-bounce);
}
.feature-item:hover .feature-item__icon { background: var(--c-green); color: #fff; transform: rotate(-5deg) scale(1.08); }
.feature-item__body h3 { font-size: 1.1rem; font-weight: 700; color: var(--c-ink); margin-bottom: var(--s-2); }
.feature-item__body p { font-size: .9rem; color: var(--c-ink-3); line-height: 1.7; max-width: 560px; }
.feature-item__badge {
  background: var(--c-cream-2); color: var(--c-ink-2);
  font-size: .72rem; font-weight: 700; letter-spacing: .06em;
  text-transform: uppercase; padding: 6px 14px; border-radius: 99px;
  white-space: nowrap; border: 1px solid var(--c-border); flex-shrink: 0;
  transition: background var(--t-fast), color var(--t-fast);
}
.feature-item:hover .feature-item__badge { background: var(--c-green); color: #fff; border-color: var(--c-green); }
@media (max-width: 768px) {
  .feature-item { grid-template-columns: 44px 48px 1fr; gap: var(--s-4); padding: var(--s-6); }
  .feature-item__badge { display: none; }
  .feature-item__num { font-size: 2rem; }
}

/* --- Infra Section (village infra cards) --- */
.infra-section { background: var(--c-white); padding: var(--s-24) 0; }
.infra-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--s-5); }
.infra-card {
  border-radius: var(--r-lg); overflow: hidden; border: 1px solid var(--c-border);
  background: var(--c-white); transition: transform var(--t-base), box-shadow var(--t-base);
  display: flex; flex-direction: column;
}
.infra-card:hover { transform: translateY(-6px); box-shadow: var(--sh-lg); }
.infra-card__top {
  display: flex; align-items: center; justify-content: center;
  height: 110px; font-size: 2.8rem; color: #fff;
}
.infra-card__top--green  { background: linear-gradient(135deg, #1E5C3A 0%, #2E7D52 100%); }
.infra-card__top--gold   { background: linear-gradient(135deg, #a87026 0%, #C8903A 100%); }
.infra-card__top--blue   { background: linear-gradient(135deg, #145c77 0%, #1e8ab0 100%); }
.infra-card__top--earth  { background: linear-gradient(135deg, #3d2b1a 0%, #6b4c35 100%); }
.infra-card__body { padding: var(--s-6); display: flex; flex-direction: column; flex: 1; }
.infra-card__tag { font-size: .68rem; font-weight: 800; text-transform: uppercase; letter-spacing: .1em; color: var(--c-green); margin-bottom: var(--s-2); }
.infra-card__body h3 { font-size: 1.1rem; font-weight: 700; color: var(--c-ink); margin-bottom: var(--s-3); }
.infra-card__body p { font-size: .88rem; color: var(--c-ink-3); line-height: 1.7; }
@media (max-width: 900px) { .infra-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 540px) { .infra-grid { grid-template-columns: 1fr; } }
`;
fs.writeFileSync('style.css', css + append, 'utf8');
console.log('CSS appended successfully.');
