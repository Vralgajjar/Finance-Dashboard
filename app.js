/* LEDGER — Finance Dashboard app.js — State management, data, and UI logic */

// ===== INITIAL MOCK DATA =====
const SEED_TRANSACTIONS = [
  // Current month (April 2025)
  { id: 1,  date: '2025-04-01', desc: 'Monthly Salary',         category: 'Salary',        type: 'income',  amount: 5800 },
  { id: 2,  date: '2025-04-02', desc: 'Apartment Rent',         category: 'Housing',       type: 'expense', amount: 1400 },
  { id: 3,  date: '2025-04-03', desc: 'Grocery Store',          category: 'Food & Dining', type: 'expense', amount: 187 },
  { id: 4,  date: '2025-04-04', desc: 'Netflix Subscription',   category: 'Entertainment', type: 'expense', amount: 17 },
  { id: 5,  date: '2025-04-05', desc: 'Uber Ride',              category: 'Transport',     type: 'expense', amount: 24 },
  { id: 6,  date: '2025-04-06', desc: 'Freelance Project',      category: 'Freelance',     type: 'income',  amount: 950 },
  { id: 7,  date: '2025-04-07', desc: 'Restaurant Dinner',      category: 'Food & Dining', type: 'expense', amount: 72 },
  { id: 8,  date: '2025-04-08', desc: 'Electricity Bill',       category: 'Utilities',     type: 'expense', amount: 98 },
  { id: 9,  date: '2025-04-09', desc: 'Online Shopping',        category: 'Shopping',      type: 'expense', amount: 145 },
  { id: 10, date: '2025-04-10', desc: 'Gym Membership',         category: 'Healthcare',    type: 'expense', amount: 45 },
  { id: 11, date: '2025-04-11', desc: 'Coffee Shop',            category: 'Food & Dining', type: 'expense', amount: 16 },
  { id: 12, date: '2025-04-12', desc: 'Spotify Premium',        category: 'Entertainment', type: 'expense', amount: 11 },
  { id: 13, date: '2025-04-13', desc: 'Dividend Income',        category: 'Investment',    type: 'income',  amount: 220 },
  { id: 14, date: '2025-04-14', desc: 'Pharmacy',               category: 'Healthcare',    type: 'expense', amount: 33 },
  { id: 15, date: '2025-04-15', desc: 'Metro Card Top-Up',      category: 'Transport',     type: 'expense', amount: 50 },
  // Previous month (March 2025)
  { id: 16, date: '2025-03-01', desc: 'Monthly Salary',         category: 'Salary',        type: 'income',  amount: 5800 },
  { id: 17, date: '2025-03-02', desc: 'Apartment Rent',         category: 'Housing',       type: 'expense', amount: 1400 },
  { id: 18, date: '2025-03-05', desc: 'Grocery Store',          category: 'Food & Dining', type: 'expense', amount: 201 },
  { id: 19, date: '2025-03-08', desc: 'Freelance Project',      category: 'Freelance',     type: 'income',  amount: 700 },
  { id: 20, date: '2025-03-10', desc: 'Dentist Visit',          category: 'Healthcare',    type: 'expense', amount: 120 },
  { id: 21, date: '2025-03-12', desc: 'Netflix Subscription',   category: 'Entertainment', type: 'expense', amount: 17 },
  { id: 22, date: '2025-03-15', desc: 'Electricity Bill',       category: 'Utilities',     type: 'expense', amount: 105 },
  { id: 23, date: '2025-03-18', desc: 'Shopping Mall',          category: 'Shopping',      type: 'expense', amount: 230 },
  { id: 24, date: '2025-03-20', desc: 'Restaurant',             category: 'Food & Dining', type: 'expense', amount: 88 },
  { id: 25, date: '2025-03-22', desc: 'Dividend Income',        category: 'Investment',    type: 'income',  amount: 210 },
  { id: 26, date: '2025-03-25', desc: 'Uber Rides',             category: 'Transport',     type: 'expense', amount: 64 },
  { id: 27, date: '2025-03-28', desc: 'Coffee & Snacks',        category: 'Food & Dining', type: 'expense', amount: 41 },
  // February 2025
  { id: 28, date: '2025-02-01', desc: 'Monthly Salary',         category: 'Salary',        type: 'income',  amount: 5800 },
  { id: 29, date: '2025-02-02', desc: 'Apartment Rent',         category: 'Housing',       type: 'expense', amount: 1400 },
  { id: 30, date: '2025-02-05', desc: 'Valentine\'s Dinner',    category: 'Food & Dining', type: 'expense', amount: 155 },
  { id: 31, date: '2025-02-08', desc: 'Freelance Work',         category: 'Freelance',     type: 'income',  amount: 1200 },
  { id: 32, date: '2025-02-10', desc: 'Grocery Store',          category: 'Food & Dining', type: 'expense', amount: 178 },
  { id: 33, date: '2025-02-14', desc: 'Gift Shopping',          category: 'Shopping',      type: 'expense', amount: 120 },
  { id: 34, date: '2025-02-18', desc: 'Electricity Bill',       category: 'Utilities',     type: 'expense', amount: 92 },
  { id: 35, date: '2025-02-22', desc: 'Movie Tickets',          category: 'Entertainment', type: 'expense', amount: 38 },
  { id: 36, date: '2025-02-25', desc: 'Dividend Income',        category: 'Investment',    type: 'income',  amount: 195 },
  // January 2025
  { id: 37, date: '2025-01-01', desc: 'Monthly Salary',         category: 'Salary',        type: 'income',  amount: 5800 },
  { id: 38, date: '2025-01-02', desc: 'Apartment Rent',         category: 'Housing',       type: 'expense', amount: 1400 },
  { id: 39, date: '2025-01-05', desc: 'New Year Groceries',     category: 'Food & Dining', type: 'expense', amount: 210 },
  { id: 40, date: '2025-01-08', desc: 'Gym Membership',         category: 'Healthcare',    type: 'expense', amount: 45 },
  { id: 41, date: '2025-01-12', desc: 'Freelance Work',         category: 'Freelance',     type: 'income',  amount: 800 },
  { id: 42, date: '2025-01-15', desc: 'Electricity Bill',       category: 'Utilities',     type: 'expense', amount: 110 },
  { id: 43, date: '2025-01-18', desc: 'Clothing Shopping',      category: 'Shopping',      type: 'expense', amount: 195 },
  { id: 44, date: '2025-01-22', desc: 'Concert Tickets',        category: 'Entertainment', type: 'expense', amount: 85 },
  { id: 45, date: '2025-01-25', desc: 'Dividend Income',        category: 'Investment',    type: 'income',  amount: 185 },
];

const CATEGORY_COLORS = {
  'Food & Dining': '#f5a623',
  'Housing': '#5b8ef0',
  'Transport': '#2dd4a0',
  'Entertainment': '#b36ef5',
  'Healthcare': '#f06f7b',
  'Shopping': '#f7c96a',
  'Utilities': '#6ab8f7',
  'Salary': '#2dd4a0',
  'Freelance': '#f5a623',
  'Investment': '#5b8ef0',
  'Other': '#8892a4',
};

// ===== STATE =====
const state = {
  transactions: [],
  role: 'viewer',
  filters: { search: '', type: 'all', category: 'all' },
  sort: 'date-desc',
  page: 1,
  pageSize: 10,
  editingId: null,
  chartPeriod: '3m',
};

// ===== PERSISTENCE =====
function loadState() {
  try {
    const saved = localStorage.getItem('ledger_txns');
    state.transactions = saved ? JSON.parse(saved) : [...SEED_TRANSACTIONS];
    const role = localStorage.getItem('ledger_role');
    if (role) state.role = role;
    const theme = localStorage.getItem('ledger_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch {
    state.transactions = [...SEED_TRANSACTIONS];
  }
}

function saveState() {
  try {
    localStorage.setItem('ledger_txns', JSON.stringify(state.transactions));
    localStorage.setItem('ledger_role', state.role);
    localStorage.setItem('ledger_theme', document.documentElement.getAttribute('data-theme'));
  } catch {}
}

// ===== DATA HELPERS =====
function getCurrentMonth() {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() };
}

function isThisMonth(dateStr) {
  const d = new Date(dateStr);
  const { year, month } = getCurrentMonth();
  return d.getFullYear() === year && d.getMonth() === month;
}

function isPrevMonth(dateStr) {
  const d = new Date(dateStr);
  const { year, month } = getCurrentMonth();
  const prev = new Date(year, month - 1, 1);
  return d.getFullYear() === prev.getFullYear() && d.getMonth() === prev.getMonth();
}

function fmt(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(n);
}

function fmtShort(n) {
  if (n >= 1000) return '$' + (n / 1000).toFixed(1) + 'k';
  return '$' + n.toFixed(0);
}

function fmtDate(str) {
  return new Date(str).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function getCategories() {
  return [...new Set(state.transactions.map(t => t.category))].sort();
}

function getCategorySpend() {
  const expenseThis = state.transactions.filter(t => t.type === 'expense' && isThisMonth(t.date));
  const map = {};
  expenseThis.forEach(t => { map[t.category] = (map[t.category] || 0) + t.amount; });
  return Object.entries(map).sort((a, b) => b[1] - a[1]);
}

function getMonthlyData() {
  const months = {};
  state.transactions.forEach(t => {
    const d = new Date(t.date);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    if (!months[key]) months[key] = { income: 0, expense: 0 };
    months[key][t.type] += t.amount;
  });
  return months;
}

function getMonthLabel(key) {
  const [y, m] = key.split('-');
  return new Date(+y, +m - 1, 1).toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
}

// ===== COMPUTED SUMMARY =====
function computeSummary() {
  const thisMonth = state.transactions.filter(t => isThisMonth(t.date));
  const prevMonth = state.transactions.filter(t => isPrevMonth(t.date));

  const income = thisMonth.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const expense = thisMonth.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const balance = state.transactions.reduce((s, t) => s + (t.type === 'income' ? t.amount : -t.amount), 0);
  const savingsRate = income > 0 ? Math.round(((income - expense) / income) * 100) : 0;

  const prevIncome = prevMonth.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const prevExpense = prevMonth.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);

  return { income, expense, balance, savingsRate, prevIncome, prevExpense };
}

// ===== FILTERED TRANSACTIONS =====
function getFiltered() {
  let txns = [...state.transactions];

  if (state.filters.search) {
    const q = state.filters.search.toLowerCase();
    txns = txns.filter(t =>
      t.desc.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q) ||
      String(t.amount).includes(q)
    );
  }

  if (state.filters.type !== 'all') {
    txns = txns.filter(t => t.type === state.filters.type);
  }

  if (state.filters.category !== 'all') {
    txns = txns.filter(t => t.category === state.filters.category);
  }

  txns.sort((a, b) => {
    if (state.sort === 'date-desc') return new Date(b.date) - new Date(a.date);
    if (state.sort === 'date-asc') return new Date(a.date) - new Date(b.date);
    if (state.sort === 'amount-desc') return b.amount - a.amount;
    if (state.sort === 'amount-asc') return a.amount - b.amount;
    return 0;
  });

  return txns;
}

// ===== RENDER SUMMARY CARDS =====
function renderSummary() {
  const { income, expense, balance, savingsRate, prevIncome, prevExpense } = computeSummary();

  document.getElementById('totalBalance').textContent = fmt(balance);
  document.getElementById('totalIncome').textContent = fmt(income);
  document.getElementById('totalExpense').textContent = fmt(expense);
  document.getElementById('savingsRate').textContent = savingsRate + '%';

  const incomeChange = prevIncome > 0 ? ((income - prevIncome) / prevIncome * 100).toFixed(1) : 0;
  const expenseChange = prevExpense > 0 ? ((expense - prevExpense) / prevExpense * 100).toFixed(1) : 0;

  const incomeTrend = document.getElementById('incomeTrend');
  incomeTrend.textContent = (income >= prevIncome ? '↑ +' : '↓ ') + Math.abs(incomeChange) + '% vs last month';
  incomeTrend.className = 'card-trend ' + (income >= prevIncome ? 'positive' : 'negative');

  const expTrend = document.getElementById('expenseTrend');
  expTrend.textContent = (expense > prevExpense ? '↑ +' : '↓ ') + Math.abs(expenseChange) + '% vs last month';
  expTrend.className = 'card-trend ' + (expense <= prevExpense ? 'positive' : 'negative');

  renderSavingsRing(savingsRate);
  renderSparkline();
}

function renderSavingsRing(pct) {
  const container = document.getElementById('savingsRing');
  const r = 22, cx = 26, cy = 26;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  container.innerHTML = `
    <svg viewBox="0 0 52 52" width="52" height="52">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--bg-4)" stroke-width="5"/>
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--blue)" stroke-width="5"
        stroke-dasharray="${dash} ${circ}"
        stroke-dashoffset="${circ * 0.25}"
        stroke-linecap="round"
        style="transition: stroke-dasharray 1s ease"/>
      <text x="${cx}" y="${cy + 4}" text-anchor="middle" fill="var(--text-2)" font-size="11" font-family="var(--font-mono)">${pct}%</text>
    </svg>`;
}

function renderSparkline() {
  const canvas = document.getElementById('sparkBalance');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const monthly = getMonthlyData();
  const keys = Object.keys(monthly).sort().slice(-4);
  let running = 0;
  const pts = keys.map(k => {
    running += (monthly[k].income || 0) - (monthly[k].expense || 0);
    return running;
  });
  const min = Math.min(...pts), max = Math.max(...pts);
  const w = 120, h = 40, pad = 4;
  ctx.clearRect(0, 0, w, h);
  ctx.beginPath();
  pts.forEach((v, i) => {
    const x = pad + (i / (pts.length - 1)) * (w - pad * 2);
    const y = h - pad - ((v - min) / (max - min + 1)) * (h - pad * 2);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.strokeStyle = '#f5a623';
  ctx.lineWidth = 2;
  ctx.stroke();
}

// ===== CHARTS =====
let trendChartInstance = null;
let categoryChartInstance = null;
let monthlyCompareInstance = null;

function renderTrendChart() {
  const canvas = document.getElementById('trendChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const monthly = getMonthlyData();
  let allKeys = Object.keys(monthly).sort();

  const periods = { '3m': 3, '6m': 6, '1y': 12 };
  const count = periods[state.chartPeriod] || 3;
  const keys = allKeys.slice(-count);

  let running = 0;
  // Calculate running balance up to start
  const startKey = keys[0];
  allKeys.filter(k => k < startKey).forEach(k => {
    running += (monthly[k]?.income || 0) - (monthly[k]?.expense || 0);
  });

  const labels = keys.map(getMonthLabel);
  const balances = keys.map(k => {
    running += (monthly[k]?.income || 0) - (monthly[k]?.expense || 0);
    return running;
  });

  if (trendChartInstance) trendChartInstance.destroy();

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)';
  const textColor = isDark ? '#556070' : '#9ca3af';

  trendChartInstance = drawLineChart(ctx, labels, balances, '#f5a623', gridColor, textColor);
}

function drawLineChart(ctx, labels, data, color, gridColor, textColor) {
  const canvas = ctx.canvas;
  const W = canvas.offsetWidth || canvas.width;
  const H = canvas.height;
  canvas.width = W;

  const pad = { top: 16, right: 16, bottom: 36, left: 60 };
  const cW = W - pad.left - pad.right;
  const cH = H - pad.top - pad.bottom;
  const min = Math.min(...data) * 0.95;
  const max = Math.max(...data) * 1.05;

  ctx.clearRect(0, 0, W, H);

  // Grid
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + (i / 4) * cH;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(pad.left + cW, y);
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    ctx.stroke();
    const val = max - (i / 4) * (max - min);
    ctx.fillStyle = textColor;
    ctx.font = '11px DM Mono, monospace';
    ctx.textAlign = 'right';
    ctx.fillText(fmtShort(val), pad.left - 8, y + 4);
  }

  // Labels
  ctx.fillStyle = textColor;
  ctx.font = '11px Outfit, sans-serif';
  ctx.textAlign = 'center';
  labels.forEach((lbl, i) => {
    const x = pad.left + (i / (labels.length - 1)) * cW;
    ctx.fillText(lbl, x, H - 8);
  });

  const getX = i => pad.left + (i / (data.length - 1)) * cW;
  const getY = v => pad.top + ((max - v) / (max - min)) * cH;

  // Gradient fill
  const grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + cH);
  grad.addColorStop(0, color + '30');
  grad.addColorStop(1, color + '00');

  ctx.beginPath();
  ctx.moveTo(getX(0), getY(data[0]));
  for (let i = 1; i < data.length; i++) {
    const x0 = getX(i - 1), x1 = getX(i);
    const y0 = getY(data[i - 1]), y1 = getY(data[i]);
    const cpx = (x0 + x1) / 2;
    ctx.bezierCurveTo(cpx, y0, cpx, y1, x1, y1);
  }
  ctx.lineTo(getX(data.length - 1), pad.top + cH);
  ctx.lineTo(getX(0), pad.top + cH);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Line
  ctx.beginPath();
  ctx.moveTo(getX(0), getY(data[0]));
  for (let i = 1; i < data.length; i++) {
    const x0 = getX(i - 1), x1 = getX(i);
    const y0 = getY(data[i - 1]), y1 = getY(data[i]);
    const cpx = (x0 + x1) / 2;
    ctx.bezierCurveTo(cpx, y0, cpx, y1, x1, y1);
  }
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Dots
  data.forEach((v, i) => {
    const x = getX(i), y = getY(v);
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#0b0f1a';
    ctx.fill();
  });

  return { destroy: () => ctx.clearRect(0, 0, W, H) };
}

function renderCategoryChart() {
  const canvas = document.getElementById('categoryChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const catSpend = getCategorySpend();
  if (catSpend.length === 0) { ctx.clearRect(0, 0, canvas.width, canvas.height); return; }

  const labels = catSpend.map(([c]) => c);
  const data = catSpend.map(([, v]) => v);
  const colors = labels.map(l => CATEGORY_COLORS[l] || '#8892a4');
  const total = data.reduce((s, v) => s + v, 0);

  const W = canvas.offsetWidth || canvas.width;
  const H = canvas.height;
  canvas.width = W;

  // Limit chart height for donut
  const size = Math.min(W, H - 10, 180);
  const cx = W / 2, cy = size / 2 + 10;
  const R = size / 2 - 10, r = R * 0.58;

  ctx.clearRect(0, 0, W, H);

  let angle = -Math.PI / 2;
  data.forEach((v, i) => {
    const slice = (v / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, R, angle, angle + slice);
    ctx.closePath();
    ctx.fillStyle = colors[i];
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    ctx.fillStyle = isDark ? '#111827' : '#ffffff';
    ctx.fill();
    angle += slice;
  });

  // Center text
  ctx.textAlign = 'center';
  ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#8892a4' : '#4b5563';
  ctx.font = '11px Outfit, sans-serif';
  ctx.fillText('Total', cx, cy - 6);
  ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#e8eaf0' : '#111827';
  ctx.font = 'bold 15px DM Mono, monospace';
  ctx.fillText(fmtShort(total), cx, cy + 12);

  // Legend
  const legend = document.getElementById('donutLegend');
  legend.innerHTML = catSpend.slice(0, 5).map(([c, v]) => `
    <div class="legend-item">
      <div class="legend-dot" style="background:${CATEGORY_COLORS[c] || '#8892a4'}"></div>
      <span>${c}</span>
      <span>${fmt(v)}</span>
    </div>`).join('');
}

function renderMonthlyCompare() {
  const canvas = document.getElementById('monthlyCompareChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const monthly = getMonthlyData();
  const keys = Object.keys(monthly).sort().slice(-5);
  const labels = keys.map(getMonthLabel);
  const incomes = keys.map(k => monthly[k]?.income || 0);
  const expenses = keys.map(k => monthly[k]?.expense || 0);

  const W = canvas.offsetWidth || canvas.width;
  const H = canvas.height;
  canvas.width = W;

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)';
  const textColor = isDark ? '#556070' : '#9ca3af';

  ctx.clearRect(0, 0, W, H);

  const pad = { top: 16, right: 16, bottom: 36, left: 60 };
  const cW = W - pad.left - pad.right;
  const cH = H - pad.top - pad.bottom;
  const allVals = [...incomes, ...expenses];
  const max = Math.max(...allVals) * 1.1;

  // Grid
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + (i / 4) * cH;
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + cW, y);
    ctx.strokeStyle = gridColor; ctx.lineWidth = 1; ctx.stroke();
    ctx.fillStyle = textColor; ctx.font = '11px DM Mono, monospace';
    ctx.textAlign = 'right';
    ctx.fillText(fmtShort(max - (i / 4) * max), pad.left - 8, y + 4);
  }

  const barW = (cW / keys.length) * 0.35;
  const gap = barW * 0.3;

  keys.forEach((_, i) => {
    const cx = pad.left + (i + 0.5) * (cW / keys.length);
    const iH = (incomes[i] / max) * cH;
    const eH = (expenses[i] / max) * cH;

    // Income bar
    ctx.fillStyle = '#2dd4a0';
    ctx.beginPath();
    roundRect(ctx, cx - barW - gap / 2, pad.top + cH - iH, barW, iH, [4, 4, 0, 0]);
    ctx.fill();

    // Expense bar
    ctx.fillStyle = '#f06f7b';
    ctx.beginPath();
    roundRect(ctx, cx + gap / 2, pad.top + cH - eH, barW, eH, [4, 4, 0, 0]);
    ctx.fill();

    // Label
    ctx.fillStyle = textColor; ctx.font = '11px Outfit, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(labels[i], cx, H - 8);
  });

  // Legend
  ctx.fillStyle = '#2dd4a0';
  ctx.fillRect(pad.left, 4, 12, 8);
  ctx.fillStyle = textColor; ctx.font = '11px Outfit, sans-serif'; ctx.textAlign = 'left';
  ctx.fillText('Income', pad.left + 16, 12);
  ctx.fillStyle = '#f06f7b';
  ctx.fillRect(pad.left + 70, 4, 12, 8);
  ctx.fillStyle = textColor;
  ctx.fillText('Expenses', pad.left + 86, 12);
}

function roundRect(ctx, x, y, w, h, radii) {
  const [tl, tr, br, bl] = radii;
  ctx.moveTo(x + tl, y);
  ctx.lineTo(x + w - tr, y); ctx.arcTo(x + w, y, x + w, y + tr, tr);
  ctx.lineTo(x + w, y + h - br); ctx.arcTo(x + w, y + h, x + w - br, y + h, br);
  ctx.lineTo(x + bl, y + h); ctx.arcTo(x, y + h, x, y + h - bl, bl);
  ctx.lineTo(x, y + tl); ctx.arcTo(x, y, x + tl, y, tl);
}

// ===== INSIGHTS =====
function renderInsights() {
  const catSpend = getCategorySpend();
  const { income, expense, prevIncome } = computeSummary();

  // Top category
  if (catSpend.length) {
    document.getElementById('topCategory').textContent = catSpend[0][0];
    document.getElementById('topCategoryAmt').textContent = fmt(catSpend[0][1]) + ' spent';
  }

  // Income comparison
  if (prevIncome > 0) {
    const diff = income - prevIncome;
    const pct = ((diff / prevIncome) * 100).toFixed(1);
    document.getElementById('incomeComparison').textContent = (diff >= 0 ? '+' : '') + pct + '%';
    document.getElementById('incomeSub').textContent = diff >= 0 ? 'up from last month' : 'down from last month';
    document.getElementById('incomeComparison').style.color = diff >= 0 ? 'var(--green)' : 'var(--red)';
  }

  // Avg daily spend
  const thisMonthExpenses = state.transactions.filter(t => t.type === 'expense' && isThisMonth(t.date));
  const today = new Date().getDate();
  const avgDaily = thisMonthExpenses.reduce((s, t) => s + t.amount, 0) / today;
  document.getElementById('avgDailySpend').textContent = fmt(avgDaily);

  // Largest expense
  const allExpenses = state.transactions.filter(t => t.type === 'expense');
  if (allExpenses.length) {
    const largest = allExpenses.reduce((max, t) => t.amount > max.amount ? t : max);
    document.getElementById('largestExpense').textContent = fmt(largest.amount);
    document.getElementById('largestExpenseName').textContent = largest.desc;
  }

  // Category bars
  const bars = document.getElementById('categoryBars');
  const maxSpend = catSpend[0]?.[1] || 1;
  bars.innerHTML = catSpend.slice(0, 6).map(([c, v]) => `
    <div class="cat-bar-row">
      <div class="cat-bar-meta">
        <span class="cat-bar-name">${c}</span>
        <span class="cat-bar-amount">${fmt(v)}</span>
      </div>
      <div class="cat-bar-track">
        <div class="cat-bar-fill" style="width:0%;background:${CATEGORY_COLORS[c] || '#8892a4'}"
          data-target="${(v / maxSpend * 100).toFixed(1)}"></div>
      </div>
    </div>`).join('');

  // Animate bars
  requestAnimationFrame(() => {
    document.querySelectorAll('.cat-bar-fill').forEach(el => {
      el.style.width = el.dataset.target + '%';
    });
  });

  renderMonthlyCompare();
}

// ===== TRANSACTIONS TABLE =====
function renderTransactions() {
  const filtered = getFiltered();
  const totalPages = Math.max(1, Math.ceil(filtered.length / state.pageSize));
  if (state.page > totalPages) state.page = totalPages;
  const start = (state.page - 1) * state.pageSize;
  const paged = filtered.slice(start, start + state.pageSize);

  const tbody = document.getElementById('txnTableBody');
  const empty = document.getElementById('emptyState');
  const isAdmin = state.role === 'admin';

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    empty.classList.remove('hidden');
  } else {
    empty.classList.add('hidden');
    tbody.innerHTML = paged.map(t => `
      <tr>
        <td class="txn-date">${fmtDate(t.date)}</td>
        <td class="txn-desc">${escHtml(t.desc)}</td>
        <td><span class="category-tag">
          <span style="width:8px;height:8px;border-radius:50%;background:${CATEGORY_COLORS[t.category] || '#8892a4'};display:inline-block;flex-shrink:0"></span>
          ${escHtml(t.category)}
        </span></td>
        <td><span class="badge badge-${t.type}">${t.type}</span></td>
        <td class="text-right"><span class="txn-amount ${t.type}">${t.type === 'income' ? '+' : '-'}${fmt(t.amount)}</span></td>
        <td class="admin-only ${isAdmin ? '' : 'hidden'}">
          <div style="display:flex;gap:6px;justify-content:flex-end">
            <button class="btn btn-edit" onclick="openEditModal(${t.id})">Edit</button>
            <button class="btn btn-danger" onclick="deleteTransaction(${t.id})">Delete</button>
          </div>
        </td>
      </tr>`).join('');
  }

  renderPagination(totalPages);
  populateCategoryFilter();
}

function renderPagination(totalPages) {
  const pag = document.getElementById('pagination');
  if (totalPages <= 1) { pag.innerHTML = ''; return; }

  let html = `<button class="page-btn" onclick="changePage(${state.page - 1})" ${state.page === 1 ? 'disabled' : ''}>‹</button>`;
  for (let i = 1; i <= totalPages; i++) {
    if (totalPages > 7 && Math.abs(i - state.page) > 2 && i !== 1 && i !== totalPages) {
      if (i === state.page - 3 || i === state.page + 3) html += `<span style="color:var(--text-3);padding:0 4px">…</span>`;
      continue;
    }
    html += `<button class="page-btn ${i === state.page ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
  }
  html += `<button class="page-btn" onclick="changePage(${state.page + 1})" ${state.page === totalPages ? 'disabled' : ''}>›</button>`;
  pag.innerHTML = html;
}

function populateCategoryFilter() {
  const sel = document.getElementById('filterCategory');
  const current = sel.value;
  const cats = getCategories();
  sel.innerHTML = `<option value="all">All Categories</option>` +
    cats.map(c => `<option value="${c}" ${c === current ? 'selected' : ''}>${c}</option>`).join('');
}

function changePage(p) {
  state.page = p;
  renderTransactions();
  document.getElementById('section-transactions').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

window.clearFilters = function () {
  state.filters = { search: '', type: 'all', category: 'all' };
  document.getElementById('searchInput').value = '';
  document.getElementById('filterType').value = 'all';
  document.getElementById('filterCategory').value = 'all';
  state.page = 1;
  renderTransactions();
};

// ===== MODAL =====
function openAddModal() {
  state.editingId = null;
  document.getElementById('modalTitle').textContent = 'Add Transaction';
  document.getElementById('fDescription').value = '';
  document.getElementById('fAmount').value = '';
  document.getElementById('fType').value = 'expense';
  document.getElementById('fCategory').value = 'Food & Dining';
  document.getElementById('fDate').value = new Date().toISOString().split('T')[0];
  document.getElementById('formError').classList.add('hidden');
  document.getElementById('modalOverlay').classList.remove('hidden');
}

window.openEditModal = function (id) {
  const txn = state.transactions.find(t => t.id === id);
  if (!txn) return;
  state.editingId = id;
  document.getElementById('modalTitle').textContent = 'Edit Transaction';
  document.getElementById('fDescription').value = txn.desc;
  document.getElementById('fAmount').value = txn.amount;
  document.getElementById('fType').value = txn.type;
  document.getElementById('fCategory').value = txn.category;
  document.getElementById('fDate').value = txn.date;
  document.getElementById('formError').classList.add('hidden');
  document.getElementById('modalOverlay').classList.remove('hidden');
};

window.deleteTransaction = function (id) {
  state.transactions = state.transactions.filter(t => t.id !== id);
  saveState();
  renderAll();
  showToast('Transaction deleted', 'success');
};

function closeModal() {
  document.getElementById('modalOverlay').classList.add('hidden');
}

function saveTransaction() {
  const desc = document.getElementById('fDescription').value.trim();
  const amount = parseFloat(document.getElementById('fAmount').value);
  const type = document.getElementById('fType').value;
  const category = document.getElementById('fCategory').value;
  const date = document.getElementById('fDate').value;
  const errEl = document.getElementById('formError');

  if (!desc) { showFormError('Please enter a description.'); return; }
  if (!amount || amount <= 0) { showFormError('Please enter a valid amount.'); return; }
  if (!date) { showFormError('Please select a date.'); return; }

  errEl.classList.add('hidden');

  if (state.editingId !== null) {
    const idx = state.transactions.findIndex(t => t.id === state.editingId);
    if (idx !== -1) {
      state.transactions[idx] = { ...state.transactions[idx], desc, amount, type, category, date };
      showToast('Transaction updated', 'success');
    }
  } else {
    const newId = Math.max(0, ...state.transactions.map(t => t.id)) + 1;
    state.transactions.unshift({ id: newId, date, desc, category, type, amount });
    showToast('Transaction added', 'success');
  }

  saveState();
  closeModal();
  renderAll();
}

function showFormError(msg) {
  const el = document.getElementById('formError');
  el.textContent = msg;
  el.classList.remove('hidden');
}

// ===== TOAST =====
let toastTimer;
function showToast(msg, type = 'success') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = `toast ${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.add('hidden'), 3000);
}

// ===== ROLE-BASED UI =====
function applyRole() {
  const isAdmin = state.role === 'admin';
  document.querySelectorAll('.admin-only').forEach(el => {
    el.classList.toggle('hidden', !isAdmin);
  });
  // Sync both selects
  document.getElementById('roleSelect').value = state.role;
  const mobileRole = document.getElementById('mobileRoleSelect');
  if (mobileRole) mobileRole.value = state.role;
}

// ===== NAVIGATION =====
function navigate(section) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const el = document.getElementById('section-' + section);
  if (el) el.classList.add('active');
  document.querySelector(`[data-section="${section}"]`)?.classList.add('active');

  if (section === 'transactions') renderTransactions();
  if (section === 'insights') renderInsights();
  if (section === 'overview') {
    renderSummary();
    setTimeout(() => { renderTrendChart(); renderCategoryChart(); }, 50);
  }
}

// ===== RENDER ALL =====
function renderAll() {
  const active = document.querySelector('.section.active');
  const id = active ? active.id.replace('section-', '') : 'overview';
  renderSummary();
  if (id === 'overview') { setTimeout(() => { renderTrendChart(); renderCategoryChart(); }, 50); }
  if (id === 'transactions') renderTransactions();
  if (id === 'insights') renderInsights();
}

// ===== EXPORT =====
function exportData(format = 'csv') {
  const txns = getFiltered();
  if (format === 'csv') {
    const header = 'Date,Description,Category,Type,Amount';
    const rows = txns.map(t => `${t.date},"${t.desc}",${t.category},${t.type},${t.amount}`);
    download([header, ...rows].join('\n'), 'ledger-transactions.csv', 'text/csv');
  } else {
    download(JSON.stringify(txns, null, 2), 'ledger-transactions.json', 'application/json');
  }
  showToast(`Exported ${txns.length} transactions`, 'success');
}

function download(content, filename, type) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([content], { type }));
  a.download = filename;
  a.click();
}

// ===== UTILS =====
function escHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  loadState();

  // Navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      navigate(item.dataset.section);
      // Close sidebar on mobile
      document.getElementById('sidebar').classList.remove('open');
      document.querySelector('.sidebar-overlay')?.classList.remove('active');
    });
  });

  // Role
  document.getElementById('roleSelect').addEventListener('change', e => {
    state.role = e.target.value;
    saveState();
    applyRole();
    showToast(`Switched to ${state.role} mode`, 'success');
  });

  document.getElementById('mobileRoleSelect').addEventListener('change', e => {
    state.role = e.target.value;
    document.getElementById('roleSelect').value = state.role;
    saveState();
    applyRole();
    showToast(`Switched to ${state.role} mode`, 'success');
  });

  // Theme
  document.getElementById('themeToggle').addEventListener('click', () => {
    const curr = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', curr === 'dark' ? 'light' : 'dark');
    saveState();
    setTimeout(() => { renderTrendChart(); renderCategoryChart(); renderMonthlyCompare(); renderSparkline(); }, 50);
  });

  // Add transaction buttons
  document.getElementById('addTxnBtn').addEventListener('click', openAddModal);
  document.getElementById('addTxnBtn2').addEventListener('click', openAddModal);

  // Modal
  document.getElementById('saveBtn').addEventListener('click', saveTransaction);
  document.getElementById('cancelBtn').addEventListener('click', closeModal);
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Filters
  document.getElementById('searchInput').addEventListener('input', e => {
    state.filters.search = e.target.value;
    state.page = 1;
    renderTransactions();
  });

  document.getElementById('filterType').addEventListener('change', e => {
    state.filters.type = e.target.value;
    state.page = 1;
    renderTransactions();
  });

  document.getElementById('filterCategory').addEventListener('change', e => {
    state.filters.category = e.target.value;
    state.page = 1;
    renderTransactions();
  });

  document.getElementById('sortBy').addEventListener('change', e => {
    state.sort = e.target.value;
    state.page = 1;
    renderTransactions();
  });

  // Chart tabs
  document.querySelectorAll('.chart-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.chart-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.chartPeriod = tab.dataset.period;
      renderTrendChart();
    });
  });

  // Export
  document.getElementById('exportBtn').addEventListener('click', () => exportData('csv'));

  // Mobile sidebar
  const sidebar = document.getElementById('sidebar');
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  document.body.appendChild(overlay);

  document.getElementById('hamburger').addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  });
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  });

  // Window resize — redraw charts
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => renderAll(), 200);
  });

  // Initial render
  applyRole();
  navigate('overview');
  populateCategoryFilter();
});


// Animation mini

function animateValue(el, start, end, duration) {
  let startTime = null;
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = Math.min((timestamp - startTime) / duration, 1);
    el.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}