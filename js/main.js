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

// ---- Teams signed up counter ---------------------------------------------
function renderTeamsSignedUp(){
  const data = window.GOLDEN_PICKLE_DATA;
  if(!data) return;
  const count = data.teamsSignedUp;
  const max = data.maxTeams;
  if(count === undefined || max === undefined) return;

  const wrapEl  = document.querySelector('[data-teams-counter]');
  const countEl = document.querySelector('[data-teams-count]');
  const maxEl   = document.querySelector('[data-teams-max]');
  const leftEl  = document.querySelector('[data-teams-left]');
  const fillEl  = document.querySelector('[data-teams-fill]');
  if(!wrapEl) return;

  const spotsLeft = Math.max(max - count, 0);
  const pct = Math.min(Math.max((count / max) * 100, 0), 100);

  if(countEl) countEl.textContent = count;
  if(maxEl) maxEl.textContent = max;
  if(leftEl){
    leftEl.textContent = spotsLeft > 0
      ? `${spotsLeft} spot${spotsLeft === 1 ? '' : 's'} left`
      : 'Field is full';
  }
  if(fillEl) fillEl.style.width = pct + '%';
  wrapEl.classList.toggle('is-full', spotsLeft === 0);
}

// ---- Sign-up form open/closed switch --------------------------------------
function renderSignupForm(){
  const data = window.GOLDEN_PICKLE_DATA;
  const formEl = document.querySelector('[data-signup-form]');
  const closedEl = document.querySelector('[data-signup-closed]');
  if(!data || !formEl || !closedEl) return;

  if(data.signupOpen === false){
    formEl.style.display = 'none';
    closedEl.style.display = 'block';
    const msgEl = closedEl.querySelector('[data-signup-closed-message]');
    if(msgEl && data.signupClosedMessage) msgEl.textContent = data.signupClosedMessage;
  } else {
    formEl.style.display = '';
    closedEl.style.display = 'none';
  }
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

  // Each match renders as a card with a connector line flowing to a
  // "Winner" slot on the right. This is a visual only — it does NOT wire
  // the winner of one match into a specific slot in the next round, since
  // matchups get re-randomized between rounds rather than following a
  // fixed bracket progression. Add a new round block to data.bracket
  // (copy the format of Round 1) once you've reseeded the next round.
  container.innerHTML = data.bracket.map(round => `
    <div class="round-block">
      <div class="round-title">${escapeHTML(round.round || '')}</div>
      <div class="bracket-matches">
        ${round.matches.map(m => {
          const aWin = m.winner && m.winner === m.teamA;
          const bWin = m.winner && m.winner === m.teamB;
          const decided = Boolean(aWin || bWin);
          return `
          <div class="bracket-match">
            <div class="bracket-match-main">
              <div class="bracket-meta"><span>${escapeHTML(m.court || '')}</span><span>${escapeHTML(m.time || '')}</span></div>
              <div class="bracket-teams">
                <div class="bracket-team ${aWin ? 'winner' : ''}">
                  <span class="bracket-team-name">${escapeHTML(m.teamA || 'TBD')}</span>
                  <span class="bracket-score">${escapeHTML(m.scoreA ?? '')}</span>
                </div>
                <div class="bracket-team ${bWin ? 'winner' : ''}">
                  <span class="bracket-team-name">${escapeHTML(m.teamB || 'TBD')}</span>
                  <span class="bracket-score">${escapeHTML(m.scoreB ?? '')}</span>
                </div>
              </div>
            </div>
            <svg class="bracket-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0,25 H50 V50 H100"></path>
              <path d="M0,75 H50 V50"></path>
            </svg>
            <div class="bracket-winner-slot ${decided ? 'is-decided' : ''}">
              <span class="bracket-winner-label">Winner</span>
              <span class="bracket-winner-name">${escapeHTML(m.winner || 'TBD')}</span>
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
  const third = (r.placements || []).find(p => p.place === '3rd');

  const photoHTML = (src, alt) => src
    ? `<div class="podium-photo"><img src="${escapeHTML(src)}" alt="${escapeHTML(alt)}" loading="lazy"></div>`
    : '';

  wrap.innerHTML = `
    <div class="podium">
      <div class="podium-first">
        ${photoHTML(r.champion?.photo, r.champion?.team || 'Champions')}
        <div class="podium-eyebrow">2026 Champions</div>
        <h2>${escapeHTML(r.champion?.team || 'TBD')}</h2>
        <div class="podium-names">${escapeHTML(r.champion?.players || '')}</div>
      </div>

      <div class="podium-row">
        ${r.runnerUp?.team ? `
        <div class="podium-second">
          ${photoHTML(r.runnerUp.photo, r.runnerUp.team)}
          <div class="podium-eyebrow">Runner-Up</div>
          <h3>${escapeHTML(r.runnerUp.team)}</h3>
          ${r.runnerUp.players ? `<div class="podium-names">${escapeHTML(r.runnerUp.players)}</div>` : ''}
        </div>` : ''}

        ${third?.team ? `
        <div class="podium-third">
          ${photoHTML(third.photo, third.team)}
          <div class="podium-eyebrow">3rd Place</div>
          <h3>${escapeHTML(third.team)}</h3>
          ${third.players ? `<div class="podium-names">${escapeHTML(third.players)}</div>` : ''}
        </div>` : ''}
      </div>
    </div>
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

// ---- Social floating action button (Instagram) ---------------------------
function initSocialFab(){
  const bubble = document.querySelector('#social-bubble');
  const closeBtn = document.querySelector('#social-bubble-close');
  if(!bubble || !closeBtn) return;

  const STORAGE_KEY = 'goldenPickleSocialBubbleDismissed';

  try{
    if(localStorage.getItem(STORAGE_KEY) === 'true'){
      bubble.style.display = 'none';
    }
  }catch(e){ /* localStorage unavailable — bubble just stays visible */ }

  closeBtn.addEventListener('click', () => {
    bubble.style.display = 'none';
    try{ localStorage.setItem(STORAGE_KEY, 'true'); }catch(e){}
  });
}

// ---- Announcement popup -------------------------------------------------
function initAnnouncement(){
  const data = window.GOLDEN_PICKLE_DATA;
  if(!data || !data.announcement || !data.announcement.enabled) return;

  const SESSION_KEY = 'gpAnnouncementSeen';
  try{
    if(sessionStorage.getItem(SESSION_KEY)) return;
  }catch(e){}

  const { title, message } = data.announcement;

  const overlay = document.createElement('div');
  overlay.className = 'announcement-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'ann-title');
  overlay.innerHTML = `
    <div class="announcement-modal">
      <div class="announcement-modal-header">
        <h2 id="ann-title">${title}</h2>
        <button class="announcement-modal-close" aria-label="Close announcement">&times;</button>
      </div>
      <div class="announcement-modal-body">
        <p>${message}</p>
        <div class="announcement-modal-footer">
          <a href="schedule.html" class="btn btn-primary" style="font-size:0.88rem; padding:12px 22px;">View Schedule &amp; Bracket</a>
          <button class="btn btn-dark announcement-modal-close-btn" style="font-size:0.88rem; padding:12px 22px;">Got it</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  function dismiss(){
    overlay.classList.add('ann-hiding');
    overlay.addEventListener('animationend', () => overlay.remove(), { once: true });
    try{ sessionStorage.setItem(SESSION_KEY, '1'); }catch(e){}
  }

  overlay.querySelector('.announcement-modal-close').addEventListener('click', dismiss);
  overlay.querySelector('.announcement-modal-close-btn').addEventListener('click', dismiss);
  overlay.addEventListener('click', e => { if(e.target === overlay) dismiss(); });
  document.addEventListener('keydown', function esc(e){
    if(e.key === 'Escape'){ dismiss(); document.removeEventListener('keydown', esc); }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderEventDetails();
  initCountdown();
  renderTeamsSignedUp();
  renderSignupForm();
  initTabs();
  renderSchedule();
  renderBracket();
  renderResults();
  initSocialFab();
  initAnnouncement();
});
