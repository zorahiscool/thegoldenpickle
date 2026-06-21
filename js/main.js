/* ==========================================================================
   THE GOLDEN PICKLE — shared site behavior
   ========================================================================== */

// ---- Mobile nav toggle --------------------------------------------------
function initNav(){
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if(!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// ---- Countdown timer ------------------------------------------------------
function initCountdown(){
  const el = document.querySelector('[data-countdown]');
  if(!el || !window.GOLDEN_PICKLE_DATA) return;
  const target = new Date(GOLDEN_PICKLE_DATA.event.date).getTime();

  const dEl = el.querySelector('[data-d]');
  const hEl = el.querySelector('[data-h]');
  const mEl = el.querySelector('[data-m]');
  const sEl = el.querySelector('[data-s]');
  const labelEl = el.querySelector('[data-countdown-label]');

  function tick(){
    const now = Date.now();
    let diff = target - now;
    if(diff <= 0){
      if(labelEl) labelEl.textContent = "It's go time at the courts!";
      [dEl,hEl,mEl,sEl].forEach(n => { if(n) n.textContent = '00'; });
      return;
    }
    const d = Math.floor(diff / (1000*60*60*24));
    diff -= d * (1000*60*60*24);
    const h = Math.floor(diff / (1000*60*60));
    diff -= h * (1000*60*60);
    const m = Math.floor(diff / (1000*60));
    diff -= m * (1000*60);
    const s = Math.floor(diff / 1000);

    if(dEl) dEl.textContent = String(d).padStart(2,'0');
    if(hEl) hEl.textContent = String(h).padStart(2,'0');
    if(mEl) mEl.textContent = String(m).padStart(2,'0');
    if(sEl) sEl.textContent = String(s).padStart(2,'0');
  }
  tick();
  setInterval(tick, 1000);
}

// ---- Schedule / Bracket tabs ---------------------------------------------
function initTabs(){
  const tabBtns = document.querySelectorAll('.tab-btn');
  if(!tabBtns.length) return;
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b === btn));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === target));
    });
  });
}

// ---- Render schedule table -------------------------------------------------
function renderSchedule(){
  const container = document.querySelector('[data-schedule-render]');
  const emptyState = document.querySelector('[data-schedule-empty]');
  if(!container || !window.GOLDEN_PICKLE_DATA) return;
  const data = GOLDEN_PICKLE_DATA;

  if(!data.scheduleReady || !data.schedule.length){
    container.style.display = 'none';
    if(emptyState) emptyState.style.display = 'block';
    return;
  }
  if(emptyState) emptyState.style.display = 'none';
  container.style.display = 'block';

  const rows = data.schedule.map(m => `
    <tr>
      <td class="time">${escapeHTML(m.time || '')}</td>
      <td class="court">${escapeHTML(m.court || '')}</td>
      <td>${escapeHTML(m.round || '')}</td>
      <td>${escapeHTML(m.teamA || '')}</td>
      <td>${escapeHTML(m.teamB || '')}</td>
    </tr>
  `).join('');

  container.innerHTML = `
    <table class="schedule-table">
      <thead>
        <tr><th>Time</th><th>Court</th><th>Round</th><th>Team A</th><th>Team B</th></tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

// ---- Render bracket ---------------------------------------------------------
function renderBracket(){
  const container = document.querySelector('[data-bracket-render]');
  const emptyState = document.querySelector('[data-bracket-empty]');
  if(!container || !window.GOLDEN_PICKLE_DATA) return;
  const data = GOLDEN_PICKLE_DATA;

  if(!data.bracketReady || !data.bracket.length){
    container.style.display = 'none';
    if(emptyState) emptyState.style.display = 'block';
    return;
  }
  if(emptyState) emptyState.style.display = 'none';
  container.style.display = 'block';

  container.innerHTML = data.bracket.map(round => `
    <div class="round-block">
      <div class="round-title">${escapeHTML(round.round || '')}</div>
      <div class="match-grid">
        ${round.matches.map(m => {
          const aWin = m.winner && m.winner === m.teamA;
          const bWin = m.winner && m.winner === m.teamB;
          return `
          <div class="match-card">
            <div class="match-meta"><span>${escapeHTML(m.court || '')}</span><span>${escapeHTML(m.time || '')}</span></div>
            <div class="match-teams">
              <div class="match-team ${aWin ? 'winner' : ''}">
                <span>${escapeHTML(m.teamA || 'TBD')}</span>
                <span class="score">${escapeHTML(m.scoreA ?? '')}</span>
              </div>
              <div class="match-team ${bWin ? 'winner' : ''}">
                <span>${escapeHTML(m.teamB || 'TBD')}</span>
                <span class="score">${escapeHTML(m.scoreB ?? '')}</span>
              </div>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>
  `).join('');
}

// ---- Render results ---------------------------------------------------------
function renderResults(){
  const wrap = document.querySelector('[data-results-render]');
  const emptyState = document.querySelector('[data-results-empty]');
  if(!wrap || !window.GOLDEN_PICKLE_DATA) return;
  const data = GOLDEN_PICKLE_DATA;

  if(!data.resultsReady){
    wrap.style.display = 'none';
    if(emptyState) emptyState.style.display = 'block';
    return;
  }
  if(emptyState) emptyState.style.display = 'none';
  wrap.style.display = 'block';

  const r = data.results;
  const placementsHTML = (r.placements || []).map(p => `
    <div class="placement-card">
      <div class="place-num">${escapeHTML(p.place || '')}</div>
      <div class="place-team">${escapeHTML(p.team || '')}</div>
    </div>
  `).join('');

  wrap.innerHTML = `
    <div class="champion-card">
      <div class="trophy-eyebrow">2026 Champions</div>
      <h2>${escapeHTML(r.champion?.team || 'TBD')}</h2>
      <div class="champ-names">${escapeHTML(r.champion?.players || '')}</div>
    </div>
    ${r.runnerUp?.team ? `
    <div class="section-head text-center" style="margin:0 auto 24px;">
      <p style="margin:0;"><strong>Runner-up:</strong> ${escapeHTML(r.runnerUp.team)} ${r.runnerUp.players ? '— ' + escapeHTML(r.runnerUp.players) : ''}</p>
    </div>` : ''}
    ${placementsHTML ? `<div class="placement-grid">${placementsHTML}</div>` : ''}
  `;
}

// ---- tiny helper to avoid HTML injection from data.js text ----------------
function escapeHTML(str){
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

// ---- Populate event-detail placeholders from data.js -----------------------
function renderEventDetails(){
  if(!window.GOLDEN_PICKLE_DATA) return;
  const e = GOLDEN_PICKLE_DATA.event;
  const map = {
    '[data-event-date]': e.dateDisplay,
    '[data-event-city]': e.city,
    '[data-event-format]': e.format,
    '[data-event-venue]': e.venueName,
    '[data-event-address]': e.address,
    '[data-event-fee]': e.entryFee,
    '[data-event-deadline]': e.registrationDeadline
  };
  Object.entries(map).forEach(([selector, value]) => {
    if(value === undefined) return;
    document.querySelectorAll(selector).forEach(el => { el.textContent = value; });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderEventDetails();
  initCountdown();
  initTabs();
  renderSchedule();
  renderBracket();
  renderResults();
});
