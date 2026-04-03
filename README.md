# Ledger — Finance Dashboard

A clean, interactive finance dashboard built with **vanilla HTML, CSS, and JavaScript** — no frameworks, no build tools. Just open `index.html` in any modern browser.

---

## Quick Start

```bash
 — Open directly
open index.html

```

No npm install, no bundler, no environment setup required.

---

## Features

### Dashboard Overview
- **Summary cards**: Total Balance, Monthly Income, Expenses, and Savings Rate with sparkline and animated ring indicator
- **Balance Trend chart**: Line chart with 3M / 6M / 1Y period toggle
- **Spending Breakdown**: Animated donut chart with top-5 category legend

### Transactions
- **Paginated table** (10 per page) with full transaction history
- **Search**: Live filter by description, category, or amount
- **Filters**: By type (income/expense) and category
- **Sort**: By date (newest/oldest) or amount (highest/lowest)
- **Empty state** handling with a "Clear Filters" shortcut

### Role-Based UI
Switch roles via the sidebar dropdown (or mobile top-bar):

| Feature | Viewer | Admin |
|---|---|---|
| View dashboard & transactions | ✅ | ✅ |
| Add transactions | ❌ | ✅ |
| Edit transactions | ❌ | ✅ |
| Delete transactions | ❌ | ✅ |
| Export data | ✅ | ✅ |

No backend — roles are simulated on the frontend and persisted in `localStorage`.

### Insights
- Highest spending category this month
- Income change vs. previous month (%)
- Average daily spending this month
- Largest single expense ever
- Category breakdown with animated progress bars
- Monthly income vs. expenses bar chart (last 5 months)

### Optional Enhancements Implemented
- **Dark / Light mode** toggle with persistence
- **localStorage persistence** — transactions and role survive page refresh
- **CSV export** of the currently filtered transactions
- Smooth page-load and section-change **animations**
- **Mobile responsive** with collapsible sidebar

---

## Project Structure

```
finance-dashboard/
├── index.html      # Markup — sidebar, sections, modal, toast
├── styles.css      # All styling with CSS custom properties
├── app.js          # State management, data helpers, chart rendering
└── README.md
```

### State Management Approach

All state lives in a single plain JS object:

```js
const state = {
  transactions: [],   // source of truth for all data
  role: 'viewer',     // 'viewer' | 'admin'
  filters: { search, type, category },
  sort: 'date-desc',
  page: 1,
  pageSize: 10,
  editingId: null,
  chartPeriod: '3m',
};
```

`renderAll()` re-derives everything from state — no stale UI fragments. `saveState()` persists to `localStorage` after every mutation.

### Charts

All charts are drawn on `<canvas>` elements using the raw Canvas 2D API — no Chart.js dependency. This keeps the bundle at zero bytes and gives full visual control.

---

## Design Decisions

- **Typography**: DM Serif Display (headings) + Outfit (body) + DM Mono (numbers) — a refined, editorial pairing
- **Color palette**: Deep navy dark theme with amber/gold accent; clean white light theme
- **No framework**: Demonstrates that clean, maintainable UI doesn't require React/Vue for a scoped project like this
- **CSS custom properties** for theming make dark/light switching instant with zero JS style manipulation

---

## Assumptions

- "Current month" is computed dynamically from `new Date()`, so the seed data uses April 2025 as the present month
- Balances are cumulative across all historical transactions (not reset per month)
- The savings rate is `(income - expenses) / income` for the current month only
