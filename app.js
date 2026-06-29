const COST_STORAGE_KEY = "lifeops.recurringCosts.v1";
const PLAYBOOK_STORAGE_KEY = "lifeops.playbooks.v1";
const RUN_STORAGE_KEY = "lifeops.playbookRuns.v1";
const INGREDIENT_STORAGE_KEY = "lifeops.ingredients.v1";
const SAVED_MEAL_STORAGE_KEY = "lifeops.savedMeals.v1";
const DISMISSED_MEAL_STORAGE_KEY = "lifeops.dismissedMeals.v1";

const today = new Date();
today.setHours(0, 0, 0, 0);

const seedPlaybooks = [
  {
    id: "playbook-travel",
    title: "Travel packing",
    category: "Travel",
    description: "A reusable checklist for short work or weekend trips.",
    defaultReminderOffsetDays: 2,
    repeatRule: "none",
    dueDate: offsetDate(5),
    steps: [
      step("Confirm tickets and hotel"),
      step("Pack chargers and adapters"),
      step("Prepare passport or ID"),
      step("Refill toiletries"),
      step("Download offline maps")
    ]
  },
  {
    id: "playbook-weekly-reset",
    title: "Weekly home reset",
    category: "Home",
    description: "A quick weekend reset that makes Monday easier.",
    defaultReminderOffsetDays: 1,
    repeatRule: "weekly",
    dueDate: offsetDate(6),
    steps: [
      step("Laundry and bedding"),
      step("Empty bins"),
      step("Restock groceries"),
      step("Plan three simple meals"),
      step("Review next week calendar")
    ]
  },
  {
    id: "playbook-pet-care",
    title: "Pet care routine",
    category: "Pet",
    description: "Repeatable routine for food, cleaning, medicine, and supplies.",
    defaultReminderOffsetDays: 1,
    repeatRule: "weekly",
    dueDate: offsetDate(3),
    steps: [
      step("Check food supply"),
      step("Clean bowls and feeding area"),
      step("Refresh bedding"),
      step("Check medicine or supplement schedule"),
      step("Book grooming if needed", "Optional monthly check", true)
    ]
  },
  {
    id: "playbook-filter",
    title: "Appliance filter replacement",
    category: "Maintenance",
    description: "Track home filters so replacement is not guesswork.",
    defaultReminderOffsetDays: 7,
    repeatRule: "quarterly",
    dueDate: offsetDate(12),
    steps: [
      step("Find saved filter model"),
      step("Order replacement"),
      step("Install filter"),
      step("Record replacement date"),
      step("Set next reminder")
    ]
  }
];

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

const seedIngredients = [
  ingredient("ingredient-eggs", "Eggs", "Protein", "6", offsetDate(5), "Fridge"),
  ingredient("ingredient-spinach", "Spinach", "Vegetable", "half bag", offsetDate(2), "Fridge"),
  ingredient("ingredient-rice", "Rice", "Grain", "1 bag", "", "Pantry"),
  ingredient("ingredient-tofu", "Tofu", "Protein", "1 block", offsetDate(4), "Fridge"),
  ingredient("ingredient-pasta", "Pasta", "Grain", "500g", "", "Pantry"),
  ingredient("ingredient-tomato", "Tomato", "Vegetable", "3", offsetDate(3), "Counter"),
  ingredient("ingredient-yogurt", "Yogurt", "Dairy", "1 tub", offsetDate(6), "Fridge"),
  ingredient("ingredient-tortilla", "Tortilla", "Grain", "4 wraps", offsetDate(7), "Pantry")
];

const mealIdeas = [
  meal("meal-spinach-eggs", "Spinach eggs over rice", ["eggs", "spinach", "rice"], ["soy sauce", "spring onion"], 18, "easy", ["pan"], ["vegetarian", "mild", "low-effort"], [
    "Warm rice.",
    "Wilt spinach in a pan.",
    "Scramble or fry eggs and serve over rice."
  ]),
  meal("meal-tofu-rice", "Crispy tofu rice bowl", ["tofu", "rice"], ["spinach", "tomato", "soy sauce"], 25, "easy", ["pan"], ["vegetarian", "mild", "low-effort"], [
    "Cube tofu and crisp it in a pan.",
    "Serve with rice.",
    "Add vegetables and a simple sauce."
  ]),
  meal("meal-tomato-pasta", "Tomato pantry pasta", ["pasta", "tomato"], ["yogurt", "spinach", "garlic"], 22, "easy", ["pot", "pan"], ["vegetarian", "mild", "low-effort"], [
    "Boil pasta.",
    "Cook tomatoes into a quick sauce.",
    "Fold together with optional greens."
  ]),
  meal("meal-wrap", "Quick egg and spinach wrap", ["eggs", "spinach", "tortilla"], ["yogurt", "tomato"], 15, "easy", ["pan"], ["vegetarian", "mild", "low-effort"], [
    "Scramble eggs with spinach.",
    "Warm tortilla.",
    "Add yogurt or tomato and wrap."
  ]),
  meal("meal-yogurt-bowl", "Savory yogurt rice bowl", ["yogurt", "rice"], ["eggs", "tomato", "spinach"], 12, "easy", ["microwave"], ["vegetarian", "mild", "low-effort"], [
    "Warm rice.",
    "Top with yogurt and chopped vegetables.",
    "Add egg if available."
  ]),
  meal("meal-fried-rice", "Flexible fried rice", ["rice", "eggs"], ["tofu", "spinach", "tomato"], 20, "easy", ["pan"], ["vegetarian", "mild", "low-effort"], [
    "Fry rice in a pan.",
    "Add eggs and available vegetables.",
    "Season with pantry sauce."
  ]),
  meal("meal-baked-pasta", "Baked pasta reset", ["pasta", "tomato"], ["yogurt", "spinach"], 45, "medium", ["oven", "pot"], ["vegetarian", "mild"], [
    "Boil pasta until just tender.",
    "Mix with tomato and yogurt.",
    "Bake until the top is set."
  ]),
  meal("meal-spicy-tofu", "Spicy tofu wraps", ["tofu", "tortilla"], ["spinach", "tomato", "yogurt"], 25, "easy", ["pan"], ["vegetarian", "spicy", "low-effort"], [
    "Crisp tofu with spice.",
    "Warm tortillas.",
    "Add vegetables and yogurt."
  ]),
  meal("meal-tomato-eggs", "Tomato egg bowl", ["tomato", "eggs", "rice"], ["spinach"], 18, "easy", ["pan"], ["vegetarian", "mild", "low-effort"], [
    "Cook tomatoes until saucy.",
    "Fold in eggs.",
    "Serve over rice."
  ]),
  meal("meal-pasta-frittata", "Pasta frittata", ["pasta", "eggs"], ["spinach", "tomato"], 28, "medium", ["pan"], ["vegetarian", "mild"], [
    "Mix cooked pasta with eggs.",
    "Add vegetables.",
    "Cook slowly until set."
  ]),
  meal("meal-spinach-soup", "Spinach and rice soup", ["spinach", "rice"], ["tofu", "eggs"], 30, "easy", ["pot"], ["vegetarian", "mild", "low-effort"], [
    "Simmer rice in broth or water.",
    "Add spinach near the end.",
    "Finish with tofu or egg."
  ]),
  meal("meal-loaded-tortilla", "Loaded tortilla pizza", ["tortilla", "tomato"], ["spinach", "eggs", "yogurt"], 20, "easy", ["oven"], ["vegetarian", "mild"], [
    "Top tortilla with tomato and vegetables.",
    "Bake until crisp.",
    "Add yogurt after baking."
  ])
];

const state = {
  module: "playbooks",
  playbooks: loadCollection(PLAYBOOK_STORAGE_KEY),
  runs: loadCollection(RUN_STORAGE_KEY),
  playbookFilter: "all",
  ingredients: loadCollection(INGREDIENT_STORAGE_KEY),
  savedMealIds: loadCollection(SAVED_MEAL_STORAGE_KEY),
  dismissedMealIds: loadCollection(DISMISSED_MEAL_STORAGE_KEY),
  kitchenFilter: "suggestions",
  costs: loadCollection(COST_STORAGE_KEY),
  costFilter: "all"
};

const cycleLabels = {
  weekly: "Weekly",
  monthly: "Monthly",
  quarterly: "Quarterly",
  yearly: "Yearly",
  custom: "Custom"
};

const repeatLabels = {
  none: "No repeat",
  weekly: "Weekly",
  monthly: "Monthly",
  quarterly: "Quarterly",
  yearly: "Yearly"
};

const moduleTitles = {
  playbooks: "Routine Playbooks",
  kitchen: "Kitchen Now",
  costs: "Recurring Costs"
};

const elements = {
  appTitle: document.querySelector("#appTitle"),
  moduleTabs: document.querySelectorAll(".module-tab"),
  seedButton: document.querySelector("#seedButton"),
  clearButton: document.querySelector("#clearButton"),
  playbooksView: document.querySelector("#playbooksView"),
  kitchenView: document.querySelector("#kitchenView"),
  costsView: document.querySelector("#costsView"),
  emptyTemplate: document.querySelector("#emptyTemplate"),

  playbookForm: document.querySelector("#playbookForm"),
  playbookId: document.querySelector("#playbookId"),
  playbookFormTitle: document.querySelector("#playbookFormTitle"),
  resetPlaybookFormButton: document.querySelector("#resetPlaybookFormButton"),
  playbookList: document.querySelector("#playbookList"),
  playbookSubcopy: document.querySelector("#playbookSubcopy"),
  playbookTemplateCount: document.querySelector("#playbookTemplateCount"),
  activeRunCount: document.querySelector("#activeRunCount"),
  playbookDueSoonCount: document.querySelector("#playbookDueSoonCount"),
  completionAverage: document.querySelector("#completionAverage"),
  playbookFilters: document.querySelectorAll("[data-playbook-filter]"),

  ingredientForm: document.querySelector("#ingredientForm"),
  ingredientId: document.querySelector("#ingredientId"),
  ingredientFormTitle: document.querySelector("#ingredientFormTitle"),
  resetIngredientFormButton: document.querySelector("#resetIngredientFormButton"),
  ingredientList: document.querySelector("#ingredientList"),
  ingredientCount: document.querySelector("#ingredientCount"),
  expiringSoonCount: document.querySelector("#expiringSoonCount"),
  mealMatchCount: document.querySelector("#mealMatchCount"),
  shoppingGapCount: document.querySelector("#shoppingGapCount"),
  kitchenSubcopy: document.querySelector("#kitchenSubcopy"),
  mealList: document.querySelector("#mealList"),
  kitchenFilters: document.querySelectorAll("[data-kitchen-filter]"),
  kitchenControls: document.querySelectorAll("#maxTimeMinutes, #effortLevel, #dietMode, #spiceMode, [name='kitchenTools']"),

  costForm: document.querySelector("#costForm"),
  costId: document.querySelector("#costId"),
  costFormTitle: document.querySelector("#costFormTitle"),
  resetCostFormButton: document.querySelector("#resetCostFormButton"),
  costList: document.querySelector("#costList"),
  monthlyTotal: document.querySelector("#monthlyTotal"),
  annualTotal: document.querySelector("#annualTotal"),
  soonCount: document.querySelector("#soonCount"),
  reviewCount: document.querySelector("#reviewCount"),
  timelineSubcopy: document.querySelector("#timelineSubcopy"),
  costFilters: document.querySelectorAll("[data-cost-filter]")
};

elements.moduleTabs.forEach((button) => {
  button.addEventListener("click", () => switchModule(button.dataset.module));
});

elements.seedButton.addEventListener("click", loadExamples);
elements.clearButton.addEventListener("click", clearCurrentModule);

elements.playbookForm.addEventListener("submit", savePlaybookFromForm);
elements.resetPlaybookFormButton.addEventListener("click", resetPlaybookForm);
elements.playbookFilters.forEach((button) => {
  button.addEventListener("click", () => {
    state.playbookFilter = button.dataset.playbookFilter;
    elements.playbookFilters.forEach((item) => item.classList.toggle("active", item === button));
    renderPlaybooks();
  });
});

elements.ingredientForm.addEventListener("submit", saveIngredientFromForm);
elements.resetIngredientFormButton.addEventListener("click", resetIngredientForm);
elements.kitchenFilters.forEach((button) => {
  button.addEventListener("click", () => {
    state.kitchenFilter = button.dataset.kitchenFilter;
    elements.kitchenFilters.forEach((item) => item.classList.toggle("active", item === button));
    renderKitchen();
  });
});
elements.kitchenControls.forEach((control) => {
  control.addEventListener("change", renderKitchen);
});

elements.costForm.addEventListener("submit", saveCostFromForm);
elements.resetCostFormButton.addEventListener("click", resetCostForm);
elements.costFilters.forEach((button) => {
  button.addEventListener("click", () => {
    state.costFilter = button.dataset.costFilter;
    elements.costFilters.forEach((item) => item.classList.toggle("active", item === button));
    renderCosts();
  });
});

resetPlaybookForm();
resetIngredientForm();
resetCostForm();
render();

function switchModule(moduleName) {
  state.module = moduleName;
  document.body.dataset.theme = moduleName;
  elements.moduleTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.module === moduleName);
  });
  elements.playbooksView.classList.toggle("hidden", moduleName !== "playbooks");
  elements.kitchenView.classList.toggle("hidden", moduleName !== "kitchen");
  elements.costsView.classList.toggle("hidden", moduleName !== "costs");
  elements.appTitle.textContent = moduleTitles[moduleName];
}

function loadExamples() {
  if (state.module === "playbooks") {
    state.playbooks = mergeById(state.playbooks, seedPlaybooks);
    persistPlaybooks();
    renderPlaybooks();
    return;
  }

  if (state.module === "kitchen") {
    state.ingredients = mergeById(state.ingredients, seedIngredients);
    state.dismissedMealIds = [];
    persistKitchen();
    renderKitchen();
    return;
  }

  state.costs = mergeById(state.costs, seedCosts);
  persistCosts();
  renderCosts();
}

function clearCurrentModule() {
  if (state.module === "playbooks") {
    state.playbooks = [];
    state.runs = [];
    persistPlaybooks();
    resetPlaybookForm();
    renderPlaybooks();
    return;
  }

  if (state.module === "kitchen") {
    state.ingredients = [];
    state.savedMealIds = [];
    state.dismissedMealIds = [];
    persistKitchen();
    resetIngredientForm();
    renderKitchen();
    return;
  }

  state.costs = [];
  persistCosts();
  resetCostForm();
  renderCosts();
}

function render() {
  renderPlaybooks();
  renderKitchen();
  renderCosts();
  switchModule(state.module);
}

function savePlaybookFromForm(event) {
  event.preventDefault();

  const data = new FormData(elements.playbookForm);
  const id = elements.playbookId.value || `playbook-${Date.now()}`;
  const playbook = {
    id,
    title: clean(data.get("title")),
    category: data.get("category"),
    description: clean(data.get("description")),
    defaultReminderOffsetDays: Number(data.get("defaultReminderOffsetDays") || 0),
    repeatRule: data.get("repeatRule"),
    dueDate: data.get("dueDate"),
    steps: parseSteps(data.get("steps"))
  };

  const existingIndex = state.playbooks.findIndex((item) => item.id === id);
  if (existingIndex >= 0) {
    state.playbooks[existingIndex] = playbook;
    const run = findRun(id);
    if (run) {
      run.completedStepIds = run.completedStepIds.filter((stepId) => playbook.steps.some((stepItem) => stepItem.id === stepId));
    }
  } else {
    state.playbooks.push(playbook);
  }

  persistPlaybooks();
  resetPlaybookForm();
  renderPlaybooks();
}

function resetPlaybookForm() {
  elements.playbookForm.reset();
  elements.playbookId.value = "";
  elements.playbookFormTitle.textContent = "Add playbook";
  document.querySelector("#playbookCategory").value = "Home";
  document.querySelector("#repeatRule").value = "none";
  document.querySelector("#playbookDueDate").value = offsetDate(7);
  document.querySelector("#defaultReminderOffsetDays").value = "2";
}

function renderPlaybooks() {
  const activeRuns = state.runs.filter((run) => !run.completedAt);
  const dueSoon = activeRuns.filter((run) => daysUntil(run.dueAt) <= 7).length;
  const average = activeRuns.length
    ? Math.round(activeRuns.reduce((sum, run) => sum + runProgress(run), 0) / activeRuns.length)
    : 0;

  elements.playbookTemplateCount.textContent = String(state.playbooks.length);
  elements.activeRunCount.textContent = String(activeRuns.length);
  elements.playbookDueSoonCount.textContent = String(dueSoon);
  elements.completionAverage.textContent = `${average}%`;

  renderPlaybookList();
}

function renderPlaybookList() {
  elements.playbookList.replaceChildren();

  const filtered = state.playbooks
    .filter(matchesPlaybookFilter)
    .sort(sortPlaybooks);

  elements.playbookSubcopy.textContent = playbookCopy(filtered.length);

  if (filtered.length === 0) {
    elements.playbookList.append(elements.emptyTemplate.content.cloneNode(true));
    return;
  }

  filtered.forEach((playbook) => {
    const run = findRun(playbook.id);
    const active = run && !run.completedAt;
    const complete = run && run.completedAt;
    const progress = run ? runProgress(run) : 0;
    const dueText = run ? formatDueText(run.dueAt) : formatDueText(playbook.dueDate);
    const dueSoon = active && daysUntil(run.dueAt) <= 7;

    const card = document.createElement("article");
    card.className = "cost-card playbook-card";
    card.innerHTML = `
      <div class="cost-main">
        <div class="cost-title-row">
          <h3>${escapeHtml(playbook.title)}</h3>
          <span class="badge active">${escapeHtml(playbook.category)}</span>
          <span class="badge">${escapeHtml(repeatLabels[playbook.repeatRule] || "No repeat")}</span>
          ${active ? '<span class="badge trial">active</span>' : ""}
          ${complete ? '<span class="badge active">done</span>' : ""}
          ${dueSoon ? '<span class="badge soon">due</span>' : ""}
        </div>
        <div class="cost-meta">
          <span>${escapeHtml(dueText)}</span>
          <span>${playbook.steps.length} steps</span>
          <span>${progress}% complete</span>
        </div>
        ${playbook.description ? `<p class="cost-note">${escapeHtml(playbook.description)}</p>` : ""}
        <div class="progress-track" aria-label="Progress">
          <span style="width: ${progress}%"></span>
        </div>
        ${run ? renderStepList(playbook, run) : ""}
      </div>
      <div class="cost-side">
        <div class="cost-amount">
          <strong>${active ? `${progress}%` : playbook.steps.length}</strong>
          <span>${active ? "current run" : "template steps"}</span>
        </div>
        <div class="button-stack">
          <button class="small-command" type="button" data-playbook-action="start" data-id="${playbook.id}">${run ? "Restart" : "Start"}</button>
          ${active ? `<button class="small-command" type="button" data-playbook-action="complete" data-id="${playbook.id}">Complete</button>` : ""}
          ${run ? `<button class="small-command" type="button" data-playbook-action="reset-run" data-id="${playbook.id}">Reset run</button>` : ""}
          <button class="small-command" type="button" data-playbook-action="edit" data-id="${playbook.id}">Edit</button>
          <button class="small-command" type="button" data-playbook-action="duplicate" data-id="${playbook.id}">Duplicate</button>
          <button class="small-command danger" type="button" data-playbook-action="delete" data-id="${playbook.id}">Delete</button>
        </div>
      </div>
    `;

    card.addEventListener("click", handlePlaybookAction);
    card.addEventListener("change", handleStepToggle);
    elements.playbookList.append(card);
  });
}

function renderStepList(playbook, run) {
  return `
    <div class="step-list">
      ${playbook.steps.map((item) => {
        const checked = run.completedStepIds.includes(item.id) ? "checked" : "";
        return `
          <label class="step-item">
            <input type="checkbox" data-playbook-id="${playbook.id}" data-step-id="${item.id}" ${checked}>
            <span>
              <strong>${escapeHtml(item.title)}</strong>
              ${item.note ? `<small>${escapeHtml(item.note)}</small>` : ""}
            </span>
          </label>
        `;
      }).join("")}
    </div>
  `;
}

function handlePlaybookAction(event) {
  const control = event.target.closest("[data-playbook-action]");
  if (!control) return;

  const playbook = state.playbooks.find((item) => item.id === control.dataset.id);
  if (!playbook) return;

  const action = control.dataset.playbookAction;
  if (action === "start") startRun(playbook);
  if (action === "complete") completeRun(playbook.id);
  if (action === "reset-run") resetRun(playbook.id);
  if (action === "edit") fillPlaybookForm(playbook);
  if (action === "duplicate") duplicatePlaybook(playbook);
  if (action === "delete") deletePlaybook(playbook.id);
}

function handleStepToggle(event) {
  const checkbox = event.target.closest("[data-step-id]");
  if (!checkbox) return;

  const run = findRun(checkbox.dataset.playbookId);
  if (!run) return;

  if (checkbox.checked) {
    run.completedStepIds = unique([...run.completedStepIds, checkbox.dataset.stepId]);
  } else {
    run.completedStepIds = run.completedStepIds.filter((stepId) => stepId !== checkbox.dataset.stepId);
    run.completedAt = "";
  }

  const playbook = state.playbooks.find((item) => item.id === checkbox.dataset.playbookId);
  if (playbook && run.completedStepIds.length === playbook.steps.length) {
    run.completedAt = dateString(today);
  }

  persistRuns();
  renderPlaybooks();
}

function startRun(playbook) {
  const dueAt = playbook.dueDate || offsetDate(playbook.defaultReminderOffsetDays || 7);
  const existingIndex = state.runs.findIndex((run) => run.playbookId === playbook.id);
  const run = {
    id: `run-${Date.now()}`,
    playbookId: playbook.id,
    startedAt: dateString(today),
    dueAt,
    completedAt: "",
    completedStepIds: []
  };

  if (existingIndex >= 0) state.runs[existingIndex] = run;
  else state.runs.push(run);

  persistRuns();
  renderPlaybooks();
}

function completeRun(playbookId) {
  const run = findRun(playbookId);
  const playbook = state.playbooks.find((item) => item.id === playbookId);
  if (!run || !playbook) return;

  run.completedStepIds = playbook.steps.map((item) => item.id);
  run.completedAt = dateString(today);
  persistRuns();
  renderPlaybooks();
}

function resetRun(playbookId) {
  const run = findRun(playbookId);
  if (!run) return;

  run.completedStepIds = [];
  run.completedAt = "";
  persistRuns();
  renderPlaybooks();
}

function duplicatePlaybook(playbook) {
  state.playbooks.push({
    ...playbook,
    id: `playbook-${Date.now()}`,
    title: `${playbook.title} copy`,
    steps: playbook.steps.map((item, index) => ({
      ...item,
      id: `step-${Date.now()}-${index}`
    }))
  });
  persistPlaybooks();
  renderPlaybooks();
}

function deletePlaybook(playbookId) {
  state.playbooks = state.playbooks.filter((item) => item.id !== playbookId);
  state.runs = state.runs.filter((run) => run.playbookId !== playbookId);
  persistPlaybooks();
  renderPlaybooks();
}

function fillPlaybookForm(playbook) {
  elements.playbookId.value = playbook.id;
  elements.playbookFormTitle.textContent = "Edit playbook";
  document.querySelector("#playbookTitle").value = playbook.title;
  document.querySelector("#playbookCategory").value = playbook.category;
  document.querySelector("#repeatRule").value = playbook.repeatRule;
  document.querySelector("#playbookDueDate").value = playbook.dueDate;
  document.querySelector("#defaultReminderOffsetDays").value = playbook.defaultReminderOffsetDays;
  document.querySelector("#playbookDescription").value = playbook.description || "";
  document.querySelector("#playbookSteps").value = playbook.steps.map((item) => {
    return item.note ? `${item.title} | ${item.note}` : item.title;
  }).join("\n");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function matchesPlaybookFilter(playbook) {
  const run = findRun(playbook.id);
  const active = run && !run.completedAt;
  if (state.playbookFilter === "active") return active;
  if (state.playbookFilter === "due") return active && daysUntil(run.dueAt) <= 7;
  if (state.playbookFilter === "templates") return !active;
  return true;
}

function sortPlaybooks(a, b) {
  const runA = findRun(a.id);
  const runB = findRun(b.id);
  const activeA = runA && !runA.completedAt ? 0 : 1;
  const activeB = runB && !runB.completedAt ? 0 : 1;
  if (activeA !== activeB) return activeA - activeB;
  return new Date((runA || a).dueAt || a.dueDate) - new Date((runB || b).dueAt || b.dueDate);
}

function findRun(playbookId) {
  return state.runs.find((run) => run.playbookId === playbookId);
}

function runProgress(run) {
  const playbook = state.playbooks.find((item) => item.id === run.playbookId);
  if (!playbook || playbook.steps.length === 0) return 0;
  return Math.round((run.completedStepIds.length / playbook.steps.length) * 100);
}

function parseSteps(value) {
  return String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line, index) => {
      const [title, note] = line.split("|").map((part) => part.trim());
      return {
        id: `step-${Date.now()}-${index}`,
        title,
        note: note || "",
        sortOrder: index,
        optional: false
      };
    });
}

function playbookCopy(count) {
  if (count === 0) return "No playbooks match the current filter.";
  if (state.playbookFilter === "all") return `${count} playbook${count === 1 ? "" : "s"} with active runs first.`;
  return `${count} matching playbook${count === 1 ? "" : "s"} in this view.`;
}

function saveIngredientFromForm(event) {
  event.preventDefault();

  const data = new FormData(elements.ingredientForm);
  const id = elements.ingredientId.value || `ingredient-${Date.now()}`;
  const item = {
    id,
    name: clean(data.get("name")),
    category: data.get("category"),
    quantityLabel: clean(data.get("quantityLabel")),
    expiresAt: data.get("expiresAt"),
    location: data.get("location")
  };

  const existingIndex = state.ingredients.findIndex((ingredientItem) => ingredientItem.id === id);
  if (existingIndex >= 0) state.ingredients[existingIndex] = item;
  else state.ingredients.push(item);

  persistKitchen();
  resetIngredientForm();
  renderKitchen();
}

function resetIngredientForm() {
  elements.ingredientForm.reset();
  elements.ingredientId.value = "";
  elements.ingredientFormTitle.textContent = "Add ingredient";
  document.querySelector("#ingredientCategory").value = "Protein";
  document.querySelector("#ingredientLocation").value = "Fridge";
  document.querySelector("#expiresAt").value = offsetDate(5);
}

function renderKitchen() {
  const suggestions = getMealSuggestions();
  const gaps = shoppingGaps(suggestions);
  const expiringSoon = state.ingredients.filter((item) => item.expiresAt && daysUntil(item.expiresAt) <= 3).length;

  elements.ingredientCount.textContent = String(state.ingredients.length);
  elements.expiringSoonCount.textContent = String(expiringSoon);
  elements.mealMatchCount.textContent = String(suggestions.length);
  elements.shoppingGapCount.textContent = String(gaps.length);

  renderIngredientList();
  renderMealList(suggestions, gaps);
}

function renderIngredientList() {
  elements.ingredientList.replaceChildren();

  if (state.ingredients.length === 0) {
    const empty = document.createElement("p");
    empty.className = "muted-note";
    empty.textContent = "No ingredients yet.";
    elements.ingredientList.append(empty);
    return;
  }

  state.ingredients
    .slice()
    .sort((a, b) => ingredientSortValue(a) - ingredientSortValue(b))
    .forEach((item) => {
      const chip = document.createElement("article");
      chip.className = "ingredient-card";
      chip.innerHTML = `
        <div>
          <strong>${escapeHtml(item.name)}</strong>
          <span>${escapeHtml(ingredientMeta(item))}</span>
        </div>
        <div class="cost-actions">
          <button class="mini-button" type="button" data-ingredient-action="edit" data-id="${item.id}" title="Edit" aria-label="Edit">e</button>
          <button class="mini-button danger" type="button" data-ingredient-action="delete" data-id="${item.id}" title="Delete" aria-label="Delete">x</button>
        </div>
      `;
      chip.addEventListener("click", handleIngredientAction);
      elements.ingredientList.append(chip);
    });
}

function renderMealList(suggestions, gaps) {
  elements.mealList.replaceChildren();

  if (state.kitchenFilter === "gaps") {
    renderShoppingGaps(gaps);
    return;
  }

  const mealsToRender = state.kitchenFilter === "saved"
    ? mealIdeas
      .filter((mealIdea) => state.savedMealIds.includes(mealIdea.id))
      .map((mealIdea) => buildSuggestion(mealIdea))
      .sort((a, b) => b.matchScore - a.matchScore)
    : suggestions;

  elements.kitchenSubcopy.textContent = kitchenCopy(mealsToRender.length);

  if (mealsToRender.length === 0) {
    elements.mealList.append(elements.emptyTemplate.content.cloneNode(true));
    return;
  }

  mealsToRender.forEach((suggestion) => {
    const mealIdea = suggestion.meal;
    const card = document.createElement("article");
    card.className = "cost-card meal-card";
    card.innerHTML = `
      <div class="cost-main">
        <div class="cost-title-row">
          <h3>${escapeHtml(mealIdea.title)}</h3>
          <span class="badge active">${mealIdea.timeMinutes} min</span>
          <span class="badge">${escapeHtml(mealIdea.difficulty)}</span>
          ${mealIdea.tags.includes("vegetarian") ? '<span class="badge active">vegetarian</span>' : ""}
          ${mealIdea.tags.includes("spicy") ? '<span class="badge trial">spicy</span>' : ""}
        </div>
        <div class="cost-meta">
          <span>${suggestion.availableIngredients.length} available</span>
          <span>${suggestion.missingIngredients.length} missing</span>
          <span>${suggestion.matchScore}% fit</span>
        </div>
        <p class="cost-note">${escapeHtml(suggestion.reason)}</p>
        <div class="chip-row">
          ${suggestion.availableIngredients.map((item) => `<span class="chip available">${escapeHtml(item)}</span>`).join("")}
          ${suggestion.missingIngredients.map((item) => `<span class="chip missing">${escapeHtml(item)}</span>`).join("")}
        </div>
        <ol class="instruction-list">
          ${mealIdea.instructions.map((instruction) => `<li>${escapeHtml(instruction)}</li>`).join("")}
        </ol>
      </div>
      <div class="cost-side">
        <div class="cost-amount">
          <strong>${suggestion.matchScore}%</strong>
          <span>match score</span>
        </div>
        <div class="button-stack">
          <button class="small-command" type="button" data-meal-action="save" data-id="${mealIdea.id}">${state.savedMealIds.includes(mealIdea.id) ? "Saved" : "Save"}</button>
          <button class="small-command danger" type="button" data-meal-action="dismiss" data-id="${mealIdea.id}">Dismiss</button>
        </div>
      </div>
    `;

    card.addEventListener("click", handleMealAction);
    elements.mealList.append(card);
  });
}

function renderShoppingGaps(gaps) {
  elements.kitchenSubcopy.textContent = gaps.length
    ? `${gaps.length} missing item${gaps.length === 1 ? "" : "s"} across current suggestions.`
    : "No shopping gaps in the current suggestions.";

  if (gaps.length === 0) {
    elements.mealList.append(elements.emptyTemplate.content.cloneNode(true));
    return;
  }

  gaps.forEach((gap) => {
    const card = document.createElement("article");
    card.className = "cost-card";
    card.innerHTML = `
      <div class="cost-main">
        <div class="cost-title-row">
          <h3>${escapeHtml(gap.name)}</h3>
          <span class="badge soon">missing</span>
        </div>
        <div class="cost-meta">
          <span>${gap.count} suggestion${gap.count === 1 ? "" : "s"}</span>
          <span>${escapeHtml(gap.meals.join(", "))}</span>
        </div>
      </div>
      <div class="cost-side">
        <button class="small-command" type="button" data-gap-action="add" data-name="${escapeAttribute(gap.name)}">Add</button>
      </div>
    `;
    card.addEventListener("click", handleGapAction);
    elements.mealList.append(card);
  });
}

function handleIngredientAction(event) {
  const control = event.target.closest("[data-ingredient-action]");
  if (!control) return;

  const item = state.ingredients.find((ingredientItem) => ingredientItem.id === control.dataset.id);
  if (!item) return;

  if (control.dataset.ingredientAction === "edit") fillIngredientForm(item);
  if (control.dataset.ingredientAction === "delete") {
    state.ingredients = state.ingredients.filter((ingredientItem) => ingredientItem.id !== item.id);
    persistKitchen();
    renderKitchen();
  }
}

function handleMealAction(event) {
  const control = event.target.closest("[data-meal-action]");
  if (!control) return;

  if (control.dataset.mealAction === "save") {
    state.savedMealIds = unique([...state.savedMealIds, control.dataset.id]);
    state.dismissedMealIds = state.dismissedMealIds.filter((mealId) => mealId !== control.dataset.id);
  }

  if (control.dataset.mealAction === "dismiss") {
    state.dismissedMealIds = unique([...state.dismissedMealIds, control.dataset.id]);
    state.savedMealIds = state.savedMealIds.filter((mealId) => mealId !== control.dataset.id);
  }

  persistKitchen();
  renderKitchen();
}

function handleGapAction(event) {
  const control = event.target.closest("[data-gap-action]");
  if (!control) return;

  const name = clean(control.dataset.name);
  if (!name) return;

  state.ingredients.push(ingredient(`ingredient-${Date.now()}`, name, "Other", "", "", "Pantry"));
  persistKitchen();
  renderKitchen();
}

function fillIngredientForm(item) {
  elements.ingredientId.value = item.id;
  elements.ingredientFormTitle.textContent = "Edit ingredient";
  document.querySelector("#ingredientName").value = item.name;
  document.querySelector("#ingredientCategory").value = item.category;
  document.querySelector("#quantityLabel").value = item.quantityLabel || "";
  document.querySelector("#expiresAt").value = item.expiresAt || "";
  document.querySelector("#ingredientLocation").value = item.location;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getMealSuggestions() {
  return mealIdeas
    .filter((mealIdea) => !state.dismissedMealIds.includes(mealIdea.id))
    .map((mealIdea) => buildSuggestion(mealIdea))
    .filter((suggestion) => suggestion.allowed)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);
}

function buildSuggestion(mealIdea) {
  const constraints = readKitchenConstraints();
  const required = mealIdea.requiredIngredients;
  const optional = mealIdea.optionalIngredients;
  const availableRequired = required.filter(hasIngredient);
  const missingIngredients = required.filter((name) => !hasIngredient(name));
  const availableOptional = optional.filter(hasIngredient);
  const expiringUsed = [...availableRequired, ...availableOptional].filter((name) => {
    const item = findIngredientByName(name);
    return item && item.expiresAt && daysUntil(item.expiresAt) <= 3;
  });
  const missingTools = mealIdea.tools.filter((tool) => !constraints.tools.includes(tool));
  const blockedByDiet = constraints.dietMode === "vegetarian" && !mealIdea.tags.includes("vegetarian");
  const blockedBySpice = constraints.spiceMode === "mild" && mealIdea.tags.includes("spicy");
  const blockedByEffort = constraints.effortLevel === "easy" && mealIdea.difficulty !== "easy";
  const blockedByTime = mealIdea.timeMinutes > constraints.maxTimeMinutes;
  const blockedByTools = missingTools.length > 0;
  const allowed = !blockedByDiet && !blockedBySpice && !blockedByEffort && !blockedByTime && !blockedByTools && missingIngredients.length <= 2;
  const baseScore = Math.round((availableRequired.length / required.length) * 70);
  const optionalScore = Math.min(15, availableOptional.length * 5);
  const expiryScore = Math.min(10, expiringUsed.length * 5);
  const timeScore = mealIdea.timeMinutes <= constraints.maxTimeMinutes ? 5 : 0;
  const penalty = missingIngredients.length * 12 + missingTools.length * 20;
  const matchScore = Math.max(0, Math.min(100, baseScore + optionalScore + expiryScore + timeScore - penalty));

  return {
    meal: mealIdea,
    allowed,
    availableIngredients: [...availableRequired, ...availableOptional],
    missingIngredients,
    matchScore,
    reason: suggestionReason(mealIdea, missingIngredients, expiringUsed)
  };
}

function suggestionReason(mealIdea, missingIngredients, expiringUsed) {
  if (expiringUsed.length > 0) return `Uses ${expiringUsed[0]} before it expires and is ready in ${mealIdea.timeMinutes} minutes.`;
  if (missingIngredients.length === 0) return `You have the core ingredients and it is ready in ${mealIdea.timeMinutes} minutes.`;
  return `Needs ${missingIngredients.length} more item${missingIngredients.length === 1 ? "" : "s"}: ${missingIngredients.join(", ")}.`;
}

function shoppingGaps(suggestions) {
  const gapMap = new Map();
  suggestions.forEach((suggestion) => {
    suggestion.missingIngredients.forEach((name) => {
      const existing = gapMap.get(name) || { name, count: 0, meals: [] };
      existing.count += 1;
      existing.meals.push(suggestion.meal.title);
      gapMap.set(name, existing);
    });
  });
  return [...gapMap.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

function readKitchenConstraints() {
  return {
    maxTimeMinutes: Number(document.querySelector("#maxTimeMinutes").value),
    effortLevel: document.querySelector("#effortLevel").value,
    dietMode: document.querySelector("#dietMode").value,
    spiceMode: document.querySelector("#spiceMode").value,
    tools: [...document.querySelectorAll("[name='kitchenTools']:checked")].map((item) => item.value)
  };
}

function hasIngredient(name) {
  return Boolean(findIngredientByName(name));
}

function findIngredientByName(name) {
  const target = normalizeIngredient(name);
  return state.ingredients.find((item) => {
    const source = normalizeIngredient(item.name);
    return source === target || source.includes(target) || target.includes(source);
  });
}

function ingredientSortValue(item) {
  if (!item.expiresAt) return Number.MAX_SAFE_INTEGER;
  return daysUntil(item.expiresAt);
}

function ingredientMeta(item) {
  const parts = [item.quantityLabel, item.category, item.location].filter(Boolean);
  if (item.expiresAt) parts.push(formatDueText(item.expiresAt));
  return parts.join(" / ");
}

function kitchenCopy(count) {
  if (state.kitchenFilter === "saved") return `${count} saved meal${count === 1 ? "" : "s"}.`;
  if (count === 0) return "No suggestions match the current ingredients and constraints.";
  return `${count} realistic option${count === 1 ? "" : "s"} ranked by fit.`;
}

function saveCostFromForm(event) {
  event.preventDefault();

  const data = new FormData(elements.costForm);
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
  if (existingIndex >= 0) state.costs[existingIndex] = cost;
  else state.costs.push(cost);

  persistCosts();
  resetCostForm();
  renderCosts();
}

function resetCostForm() {
  elements.costForm.reset();
  elements.costId.value = "";
  elements.costFormTitle.textContent = "Add recurring cost";
  document.querySelector("#currency").value = "USD";
  document.querySelector("#billingCycle").value = "monthly";
  document.querySelector("#category").value = "Streaming";
  document.querySelector("#status").value = "active";
  document.querySelector("#nextChargeDate").value = offsetDate(7);
  document.querySelector("#reminderOffsets").value = "7, 1";
}

function renderCosts() {
  const activeCosts = state.costs.filter((cost) => cost.status !== "canceled");
  const annualTotal = activeCosts.reduce((sum, cost) => sum + annualizedAmount(cost), 0);
  const soonCount = activeCosts.filter((cost) => daysUntil(cost.nextChargeDate) <= 14).length;
  const reviewCount = state.costs.filter(shouldReview).length;

  elements.annualTotal.textContent = formatMoney(annualTotal, preferredCurrency(activeCosts));
  elements.monthlyTotal.textContent = formatMoney(annualTotal / 12, preferredCurrency(activeCosts));
  elements.soonCount.textContent = String(soonCount);
  elements.reviewCount.textContent = String(reviewCount);

  renderCostList();
}

function renderCostList() {
  elements.costList.replaceChildren();

  const filtered = state.costs
    .filter(matchesCostFilter)
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
          <button class="mini-button" type="button" data-cost-action="edit" data-id="${cost.id}" title="Edit" aria-label="Edit">e</button>
          <button class="mini-button danger" type="button" data-cost-action="delete" data-id="${cost.id}" title="Delete" aria-label="Delete">x</button>
        </div>
      </div>
    `;

    card.addEventListener("click", handleCostAction);
    elements.costList.append(card);
  });
}

function handleCostAction(event) {
  const control = event.target.closest("[data-cost-action]");
  if (!control) return;

  const cost = state.costs.find((item) => item.id === control.dataset.id);
  if (!cost) return;

  if (control.dataset.costAction === "edit") fillCostForm(cost);

  if (control.dataset.costAction === "delete") {
    state.costs = state.costs.filter((item) => item.id !== cost.id);
    persistCosts();
    renderCosts();
  }
}

function fillCostForm(cost) {
  elements.costId.value = cost.id;
  elements.costFormTitle.textContent = "Edit recurring cost";
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

function matchesCostFilter(cost) {
  if (state.costFilter === "soon") return daysUntil(cost.nextChargeDate) <= 14 && cost.status !== "canceled";
  if (state.costFilter === "trial") return cost.status === "trial";
  if (state.costFilter === "review") return shouldReview(cost);
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

function loadCollection(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function persistPlaybooks() {
  localStorage.setItem(PLAYBOOK_STORAGE_KEY, JSON.stringify(state.playbooks));
  persistRuns();
}

function persistRuns() {
  localStorage.setItem(RUN_STORAGE_KEY, JSON.stringify(state.runs));
}

function persistCosts() {
  localStorage.setItem(COST_STORAGE_KEY, JSON.stringify(state.costs));
}

function persistKitchen() {
  localStorage.setItem(INGREDIENT_STORAGE_KEY, JSON.stringify(state.ingredients));
  localStorage.setItem(SAVED_MEAL_STORAGE_KEY, JSON.stringify(state.savedMealIds));
  localStorage.setItem(DISMISSED_MEAL_STORAGE_KEY, JSON.stringify(state.dismissedMealIds));
}

function mergeById(current, incoming) {
  return [...current, ...incoming.filter((item) => !current.some((existing) => existing.id === item.id))];
}

function ingredient(id, name, category, quantityLabel, expiresAt, location) {
  return {
    id,
    name,
    category,
    quantityLabel,
    expiresAt,
    location
  };
}

function meal(id, title, requiredIngredients, optionalIngredients, timeMinutes, difficulty, tools, tags, instructions) {
  return {
    id,
    title,
    requiredIngredients,
    optionalIngredients,
    timeMinutes,
    difficulty,
    tools,
    tags,
    instructions
  };
}

function step(title, note = "", optional = false) {
  return {
    id: `step-${slug(title)}`,
    title,
    note,
    sortOrder: 0,
    optional
  };
}

function unique(values) {
  return [...new Set(values)];
}

function daysUntil(dateValue) {
  const target = new Date(`${dateValue}T00:00:00`);
  return Math.ceil((target - today) / 86400000);
}

function formatDueText(dateValue) {
  if (!dateValue) return "no date";
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
  return dateString(date);
}

function dateString(date) {
  return date.toISOString().slice(0, 10);
}

function timelineCopy(count) {
  if (count === 0) return "No items match the current filter.";
  if (state.costFilter === "all") return `${count} recurring cost${count === 1 ? "" : "s"} ordered by date.`;
  return `${count} matching item${count === 1 ? "" : "s"} in this view.`;
}

function clean(value) {
  return String(value || "").trim();
}

function slug(value) {
  return clean(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || String(Date.now());
}

function normalizeIngredient(value) {
  return clean(value).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
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
