const STORAGE_KEY = "lifeops.recurringCosts.v1";

const today = new Date();
today.setHours(0, 0, 0, 0);

const seedCosts = [
  {
    id: "cost-icloud",
    name: "iCloud+",
    category: "Storage",
    amount: 2.99,
    currency: "USD",
    billingCycle: "monthly",
    nextChargeDate: offsetDate(4),
    status: "active",
    reminderOffsetsDays: [7, 1],
    paymentMethodLabel: "Apple Pay",
    cancellationUrl: "https://appleid.apple.com/",
    notes: "Family photos and phone backups."
  },
  {
    id: "cost-gym",
    name: "Gym membership",
    category: "Fitness",
    amount: 44,
    currency: "USD",
    billingCycle: "monthly",
    nextChargeDate: offsetDate(11),
    status: "active",
    reminderOffsetsDays: [5],
    paymentMethodLabel: "Visa ending 1234",
    cancellationUrl: "",
    notes: "Review usage before the next renewal."
  },
  {
    id: "cost-design",
    name: "Design tool trial",
    category: "Software",
    amount: 15,
    currency: "USD",
    billingCycle: "monthly",
    nextChargeDate: offsetDate(2),
    status: "trial",
    reminderOffsetsDays: [3, 1],
    paymentMethodLabel: "Work card",
    cancellationUrl: "https://example.com/account",
    notes: "Trial ends soon. Decide whether it replaces the current editor."
  }
];

const state = {
  costs: loadCosts(),
  filter: "all"
};

const cycleLabels = {
  weekly: "Weekly",
  monthly: "Monthly",
  quarterly: "Quarterly",
  yearly: "Yearly",
  custom: "Custom"
};

const elements = {
  form: document.querySelector("#costForm"),
  costId: document.querySelector("#costId"),
  formTitle: document.querySelector("#formTitle"),
  resetFormButton: document.querySelector("#resetFormButton"),
  seedButton: document.querySelector("#seedButton"),
  clearButton: document.querySelector("#clearButton"),
  costList: document.querySelector("#costList"),
  emptyTemplate: document.querySelector("#emptyTemplate"),
  monthlyTotal: document.querySelector("#monthlyTotal"),
  annualTotal: document.querySelector("#annualTotal"),
  soonCount: document.querySelector("#soonCount"),
  reviewCount: document.querySelector("#reviewCount"),
  timelineSubcopy: document.querySelector("#timelineSubcopy"),
  filters: document.querySelectorAll(".filter-button")
};

elements.form.addEventListener("submit", saveFromForm);
elements.resetFormButton.addEventListener("click", resetForm);
elements.seedButton.addEventListener("click", loadExamples);
elements.clearButton.addEventListener("click", clearCosts);
elements.filters.forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    elements.filters.forEach((item) => item.classList.toggle("active", item === button));
    render();
  });
});

render();

function loadCosts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.costs));
}

function saveFromForm(event) {
  event.preventDefault();

  const data = new FormData(elements.form);
  const id = elements.costId.value || `cost-${Date.now()}`;
  const cost = {
    id,
    name: clean(data.get("name")),
    category: data.get("category"),
    amount: Number(data.get("amount")),
    currency: data.get("currency"),
    billingCycle: data.get("billingCycle"),
    nextChargeDate: data.get("nextChargeDate"),
    status: data.get("status"),
    reminderOffsetsDays: parseReminderOffsets(data.get("reminderOffsets")),
    paymentMethodLabel: clean(data.get("paymentMethodLabel")),
    cancellationUrl: clean(data.get("cancellationUrl")),
    notes: clean(data.get("notes"))
  };

  const existingIndex = state.costs.findIndex((item) => item.id === id);
  if (existingIndex >= 0) {
    state.costs[existingIndex] = cost;
  } else {
    state.costs.push(cost);
  }

  persist();
  resetForm();
  render();
}

function resetForm() {
  elements.form.reset();
  elements.costId.value = "";
  elements.formTitle.textContent = "Add recurring cost";
  document.querySelector("#currency").value = "USD";
  document.querySelector("#billingCycle").value = "monthly";
  document.querySelector("#category").value = "Streaming";
  document.querySelector("#status").value = "active";
  document.querySelector("#nextChargeDate").value = offsetDate(7);
  document.querySelector("#reminderOffsets").value = "7, 1";
}

function render() {
  const activeCosts = state.costs.filter((cost) => cost.status !== "canceled");
  const annualTotal = activeCosts.reduce((sum, cost) => sum + annualizedAmount(cost), 0);
  const soonCount = activeCosts.filter((cost) => daysUntil(cost.nextChargeDate) <= 14).length;
  const reviewCount = state.costs.filter(shouldReview).length;

  elements.annualTotal.textContent = formatMoney(annualTotal, preferredCurrency(activeCosts));
  elements.monthlyTotal.textContent = formatMoney(annualTotal / 12, preferredCurrency(activeCosts));
  elements.soonCount.textContent = String(soonCount);
  elements.reviewCount.textContent = String(reviewCount);

  renderList();
}

function renderList() {
  elements.costList.replaceChildren();

  const filtered = state.costs
    .filter(matchesFilter)
    .sort((a, b) => new Date(a.nextChargeDate) - new Date(b.nextChargeDate));

  elements.timelineSubcopy.textContent = timelineCopy(filtered.length);

  if (filtered.length === 0) {
    elements.costList.append(elements.emptyTemplate.content.cloneNode(true));
    return;
  }

  filtered.forEach((cost) => {
    const card = document.createElement("article");
    card.className = "cost-card";

    const dueIn = daysUntil(cost.nextChargeDate);
    const isSoon = dueIn <= 14 && cost.status !== "canceled";
    const cycleLabel = cycleLabels[cost.billingCycle] || "Custom";
    const reminders = cost.reminderOffsetsDays.length
      ? `${cost.reminderOffsetsDays.join(", ")} day reminder`
      : "No reminders";

    card.innerHTML = `
      <div class="cost-main">
        <div class="cost-title-row">
          <h3>${escapeHtml(cost.name)}</h3>
          <span class="badge ${cost.status}">${escapeHtml(cost.status)}</span>
          ${isSoon ? '<span class="badge soon">soon</span>' : ""}
        </div>
        <div class="cost-meta">
          <span>${escapeHtml(cost.category)}</span>
          <span>${escapeHtml(cycleLabel)}</span>
          <span>${formatDueText(cost.nextChargeDate)}</span>
          <span>${escapeHtml(reminders)}</span>
        </div>
        ${cost.notes ? `<p class="cost-note">${escapeHtml(cost.notes)}</p>` : ""}
      </div>
      <div class="cost-side">
        <div class="cost-amount">
          <strong>${formatMoney(cost.amount, cost.currency)}</strong>
          <span>${formatAnnualized(cost)}</span>
        </div>
        <div class="cost-actions">
          ${cost.cancellationUrl ? `<a class="mini-button" href="${escapeAttribute(cost.cancellationUrl)}" target="_blank" rel="noreferrer" title="Open cancellation page" aria-label="Open cancellation page">&gt;</a>` : ""}
          <button class="mini-button" type="button" data-action="edit" data-id="${cost.id}" title="Edit" aria-label="Edit">e</button>
          <button class="mini-button danger" type="button" data-action="delete" data-id="${cost.id}" title="Delete" aria-label="Delete">x</button>
        </div>
      </div>
    `;

    card.addEventListener("click", handleCardAction);
    elements.costList.append(card);
  });
}

function handleCardAction(event) {
  const control = event.target.closest("[data-action]");
  if (!control) return;

  const cost = state.costs.find((item) => item.id === control.dataset.id);
  if (!cost) return;

  if (control.dataset.action === "edit") {
    fillForm(cost);
  }

  if (control.dataset.action === "delete") {
    state.costs = state.costs.filter((item) => item.id !== cost.id);
    persist();
    render();
  }
}

function fillForm(cost) {
  elements.costId.value = cost.id;
  elements.formTitle.textContent = "Edit recurring cost";
  document.querySelector("#name").value = cost.name;
  document.querySelector("#amount").value = cost.amount;
  document.querySelector("#currency").value = cost.currency;
  document.querySelector("#billingCycle").value = cost.billingCycle;
  document.querySelector("#nextChargeDate").value = cost.nextChargeDate;
  document.querySelector("#category").value = cost.category;
  document.querySelector("#status").value = cost.status;
  document.querySelector("#reminderOffsets").value = cost.reminderOffsetsDays.join(", ");
  document.querySelector("#paymentMethodLabel").value = cost.paymentMethodLabel || "";
  document.querySelector("#cancellationUrl").value = cost.cancellationUrl || "";
  document.querySelector("#notes").value = cost.notes || "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function loadExamples() {
  state.costs = [...state.costs, ...seedCosts.filter((seed) => !state.costs.some((cost) => cost.id === seed.id))];
  persist();
  render();
}

function clearCosts() {
  state.costs = [];
  persist();
  resetForm();
  render();
}

function matchesFilter(cost) {
  if (state.filter === "soon") return daysUntil(cost.nextChargeDate) <= 14 && cost.status !== "canceled";
  if (state.filter === "trial") return cost.status === "trial";
  if (state.filter === "review") return shouldReview(cost);
  return true;
}

function shouldReview(cost) {
  return cost.status === "trial" || cost.status === "paused" || /review|cancel|unused/i.test(cost.notes || "");
}

function annualizedAmount(cost) {
  const multiplier = {
    weekly: 52,
    monthly: 12,
    quarterly: 4,
    yearly: 1,
    custom: 12
  }[cost.billingCycle] || 12;

  return Number(cost.amount || 0) * multiplier;
}

function parseReminderOffsets(value) {
  return String(value || "")
    .split(",")
    .map((item) => Number(item.trim()))
    .filter((item) => Number.isFinite(item) && item >= 0)
    .sort((a, b) => b - a);
}

function daysUntil(dateValue) {
  const target = new Date(`${dateValue}T00:00:00`);
  return Math.ceil((target - today) / 86400000);
}

function formatDueText(dateValue) {
  const count = daysUntil(dateValue);
  const formatted = new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric" }).format(new Date(`${dateValue}T00:00:00`));
  if (count === 0) return `today, ${formatted}`;
  if (count === 1) return `tomorrow, ${formatted}`;
  if (count < 0) return `${Math.abs(count)} days overdue, ${formatted}`;
  return `in ${count} days, ${formatted}`;
}

function formatAnnualized(cost) {
  return `${formatMoney(annualizedAmount(cost), cost.currency)} / year`;
}

function formatMoney(value, currency = "USD") {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
    maximumFractionDigits: value >= 100 ? 0 : 2
  }).format(Number(value || 0));
}

function preferredCurrency(costs) {
  return costs[0]?.currency || "USD";
}

function offsetDate(offset) {
  const date = new Date(today);
  date.setDate(date.getDate() + offset);
  return date.toISOString().slice(0, 10);
}

function timelineCopy(count) {
  if (count === 0) return "No items match the current filter.";
  if (state.filter === "all") return `${count} recurring cost${count === 1 ? "" : "s"} ordered by date.`;
  return `${count} matching item${count === 1 ? "" : "s"} in this view.`;
}

function clean(value) {
  return String(value || "").trim();
}

function escapeHtml(value) {
  return clean(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

resetForm();
