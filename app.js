const COST_STORAGE_KEY = "lifeops.recurringCosts.v1";
const PLAYBOOK_STORAGE_KEY = "lifeops.playbooks.v1";
const RUN_STORAGE_KEY = "lifeops.playbookRuns.v1";
const INGREDIENT_STORAGE_KEY = "lifeops.ingredients.v1";
const SAVED_MEAL_STORAGE_KEY = "lifeops.savedMeals.v1";
const DISMISSED_MEAL_STORAGE_KEY = "lifeops.dismissedMeals.v1";
const SETTINGS_STORAGE_KEY = "lifeops.settings.v1";

const supportedLanguages = [
  { value: "en", label: "English" },
  { value: "zh", label: "中文" }
];

const supportedCurrencies = [
  "USD", "EUR", "GBP", "CNY", "JPY", "KRW", "HKD", "SGD", "AUD", "CAD", "CHF", "NZD",
  "INR", "AED", "SAR", "BRL", "MXN", "ZAR", "SEK", "NOK", "DKK", "PLN", "THB", "IDR"
];

const currencyNames = {
  en: {
    USD: "US Dollar",
    EUR: "Euro",
    GBP: "British Pound",
    CNY: "Chinese Yuan",
    JPY: "Japanese Yen",
    KRW: "South Korean Won",
    HKD: "Hong Kong Dollar",
    SGD: "Singapore Dollar",
    AUD: "Australian Dollar",
    CAD: "Canadian Dollar",
    CHF: "Swiss Franc",
    NZD: "New Zealand Dollar",
    INR: "Indian Rupee",
    AED: "UAE Dirham",
    SAR: "Saudi Riyal",
    BRL: "Brazilian Real",
    MXN: "Mexican Peso",
    ZAR: "South African Rand",
    SEK: "Swedish Krona",
    NOK: "Norwegian Krone",
    DKK: "Danish Krone",
    PLN: "Polish Zloty",
    THB: "Thai Baht",
    IDR: "Indonesian Rupiah"
  },
  zh: {
    USD: "美元",
    EUR: "欧元",
    GBP: "英镑",
    CNY: "人民币",
    JPY: "日元",
    KRW: "韩元",
    HKD: "港币",
    SGD: "新加坡元",
    AUD: "澳大利亚元",
    CAD: "加拿大元",
    CHF: "瑞士法郎",
    NZD: "新西兰元",
    INR: "印度卢比",
    AED: "阿联酋迪拉姆",
    SAR: "沙特里亚尔",
    BRL: "巴西雷亚尔",
    MXN: "墨西哥比索",
    ZAR: "南非兰特",
    SEK: "瑞典克朗",
    NOK: "挪威克朗",
    DKK: "丹麦克朗",
    PLN: "波兰兹罗提",
    THB: "泰铢",
    IDR: "印尼盾"
  }
};

const copy = {
  en: {
    appEyebrow: "LifeOps MVP",
    tabPlaybooks: "Playbooks",
    tabKitchen: "Kitchen",
    tabCosts: "Costs",
    titlePlaybooks: "Routine Playbooks",
    titleKitchen: "Kitchen Now",
    titleCosts: "Recurring Costs",
    loadExamples: "Load example data",
    clearModule: "Clear current module data",
    settings: "Settings",
    closeSettings: "Close settings",
    preferences: "Preferences",
    language: "Language",
    preferredCurrency: "Preferred currency",
    currencyNote: "Currency controls new cost defaults and summary totals. Existing cost items keep their saved currency and are not auto-converted.",
    addPlaybook: "Add playbook",
    editPlaybook: "Edit playbook",
    addIngredient: "Add ingredient",
    editIngredient: "Edit ingredient",
    addCost: "Add recurring cost",
    editCost: "Edit recurring cost",
    reset: "Reset",
    savePlaybook: "Save playbook",
    saveIngredient: "Save ingredient",
    saveCost: "Save cost",
    templates: "Templates",
    activeRuns: "Active runs",
    dueSoon: "Due soon",
    completion: "Completion",
    reusableScenarios: "Reusable life scenarios",
    checklistsInMotion: "Checklists in motion",
    dueNext7: "Due in the next 7 days",
    averageProgress: "Average active progress",
    ingredients: "Ingredients",
    expiringSoon: "Expiring soon",
    mealMatches: "Meal matches",
    shoppingGaps: "Shopping gaps",
    availableNow: "Available right now",
    useWithin3: "Use within 3 days",
    realisticOptions: "Top realistic options",
    missingInSuggestions: "Missing items in suggestions",
    monthlyEstimate: "Monthly estimate",
    annualEstimate: "Annual estimate",
    chargingSoon: "Charging soon",
    possibleReview: "Possible review",
    selectedCurrencySpend: "Selected-currency recurring spend",
    selectedCurrencyActive: "Active and trial items in selected currency",
    dueNext14: "Due in the next 14 days",
    pausedTrialFlagged: "Paused, trial, or flagged",
    playbookRuns: "Playbook runs",
    playbookSubcopyDefault: "Active playbooks first, templates after.",
    mealSuggestions: "Meal suggestions",
    kitchenSubcopyDefault: "Three realistic options based on what you have.",
    renewalTimeline: "Renewal timeline",
    timelineSubcopyDefault: "Upcoming charges ordered by date.",
    mealConstraints: "Meal constraints",
    currentIngredients: "Current ingredients",
    all: "All",
    active: "Active",
    due: "Due",
    suggestions: "Suggestions",
    saved: "Saved",
    gaps: "Gaps",
    soon: "Soon",
    trials: "Trials",
    review: "Review",
    title: "Title",
    category: "Category",
    repeat: "Repeat",
    dueDate: "Due date",
    reminderDays: "Reminder days",
    description: "Description",
    steps: "Steps",
    ingredient: "Ingredient",
    location: "Location",
    quantity: "Quantity",
    expires: "Expires",
    time: "Time",
    effort: "Effort",
    diet: "Diet",
    spice: "Spice",
    name: "Name",
    amount: "Amount",
    currency: "Currency",
    billingCycle: "Billing cycle",
    nextCharge: "Next charge",
    status: "Status",
    reminderOffsets: "Reminder offsets",
    paymentMethod: "Payment method label",
    cancellationUrl: "Cancellation URL",
    notes: "Notes",
    noItemsTitle: "No items yet",
    noItemsBody: "Add the first item or load example data to see how the MVP works.",
    noIngredients: "No ingredients yet.",
    start: "Start",
    restart: "Restart",
    complete: "Complete",
    resetRun: "Reset run",
    edit: "Edit",
    duplicate: "Duplicate",
    delete: "Delete",
    save: "Save",
    dismiss: "Dismiss",
    openCancellation: "Open cancellation page",
    savedAction: "Saved",
    add: "Add",
    done: "done",
    currentRun: "current run",
    templateSteps: "template steps",
    stepsCount: "{count} steps",
    completePercent: "{count}% complete",
    matchScore: "match score",
    availableCount: "{count} available",
    missingCount: "{count} missing",
    fitPercent: "{count}% fit",
    missing: "missing",
    suggestionCount: "{count} suggestion{plural}",
    noReminders: "No reminders",
    dayReminder: "{days} day reminder",
    perYear: "{amount} / year",
    noDate: "no date",
    today: "today, {date}",
    tomorrow: "tomorrow, {date}",
    overdue: "{count} days overdue, {date}",
    inDays: "in {count} days, {date}",
    cycleWeekly: "Weekly",
    cycleMonthly: "Monthly",
    cycleQuarterly: "Quarterly",
    cycleYearly: "Yearly",
    cycleCustom: "Custom",
    repeatNone: "No repeat",
    any: "Any",
    lowEffort: "Low effort",
    vegetarian: "Vegetarian",
    mild: "Mild",
    spicyOk: "Spicy ok",
    pan: "Pan",
    pot: "Pot",
    oven: "Oven",
    microwave: "Microwave",
    noPlaybooksMatch: "No playbooks match the current filter.",
    playbookCountAll: "{count} playbook{plural} with active runs first.",
    playbookCountFiltered: "{count} matching playbook{plural} in this view.",
    savedMealsCount: "{count} saved meal{plural}.",
    noMealSuggestions: "No suggestions match the current ingredients and constraints.",
    mealOptionsCount: "{count} realistic option{plural} ranked by fit.",
    shoppingGapsCount: "{count} missing item{plural} across current suggestions.",
    noShoppingGaps: "No shopping gaps in the current suggestions.",
    noTimelineItems: "No items match the current filter.",
    timelineAll: "{count} recurring cost{plural} ordered by date.",
    timelineFiltered: "{count} matching item{plural} in this view.",
    usesBeforeExpiry: "Uses {item} before it expires and is ready in {minutes} minutes.",
    hasCoreIngredients: "You have the core ingredients and it is ready in {minutes} minutes.",
    needsMoreItems: "Needs {count} more item{plural}: {items}."
  },
  zh: {
    appEyebrow: "LifeOps MVP",
    tabPlaybooks: "清单",
    tabKitchen: "厨房",
    tabCosts: "费用",
    titlePlaybooks: "日常流程清单",
    titleKitchen: "今天吃什么",
    titleCosts: "循环费用",
    loadExamples: "载入示例数据",
    clearModule: "清空当前模块数据",
    settings: "设置",
    closeSettings: "关闭设置",
    preferences: "偏好设置",
    language: "语言",
    preferredCurrency: "首选货币",
    currencyNote: "货币设置会影响新增费用的默认币种和概览统计。已有费用会保留各自保存的币种，不会自动换算。",
    addPlaybook: "新增清单",
    editPlaybook: "编辑清单",
    addIngredient: "新增食材",
    editIngredient: "编辑食材",
    addCost: "新增循环费用",
    editCost: "编辑循环费用",
    reset: "重置",
    savePlaybook: "保存清单",
    saveIngredient: "保存食材",
    saveCost: "保存费用",
    templates: "模板",
    activeRuns: "进行中",
    dueSoon: "即将到期",
    completion: "完成度",
    reusableScenarios: "可复用生活场景",
    checklistsInMotion: "正在执行的清单",
    dueNext7: "未来 7 天内到期",
    averageProgress: "平均执行进度",
    ingredients: "食材",
    expiringSoon: "即将过期",
    mealMatches: "餐食匹配",
    shoppingGaps: "采购缺口",
    availableNow: "当前可用",
    useWithin3: "3 天内建议用掉",
    realisticOptions: "最现实的推荐",
    missingInSuggestions: "推荐中缺少的食材",
    monthlyEstimate: "月度估算",
    annualEstimate: "年度估算",
    chargingSoon: "即将扣款",
    possibleReview: "可复查项目",
    selectedCurrencySpend: "所选币种的循环支出",
    selectedCurrencyActive: "所选币种的活跃和试用项目",
    dueNext14: "未来 14 天内到期",
    pausedTrialFlagged: "暂停、试用或标记项目",
    playbookRuns: "清单执行",
    playbookSubcopyDefault: "进行中的清单优先，随后是模板。",
    mealSuggestions: "餐食推荐",
    kitchenSubcopyDefault: "基于现有食材给出三个现实选择。",
    renewalTimeline: "续费时间线",
    timelineSubcopyDefault: "按日期排列即将发生的扣款。",
    mealConstraints: "餐食条件",
    currentIngredients: "当前食材",
    all: "全部",
    active: "进行中",
    due: "到期",
    suggestions: "推荐",
    saved: "已收藏",
    gaps: "缺口",
    soon: "近期",
    trials: "试用",
    review: "复查",
    title: "标题",
    category: "类别",
    repeat: "重复",
    dueDate: "到期日",
    reminderDays: "提前提醒天数",
    description: "说明",
    steps: "步骤",
    ingredient: "食材",
    location: "位置",
    quantity: "数量",
    expires: "过期日",
    time: "时间",
    effort: "难度",
    diet: "饮食",
    spice: "辣度",
    name: "名称",
    amount: "金额",
    currency: "货币",
    billingCycle: "计费周期",
    nextCharge: "下次扣款",
    status: "状态",
    reminderOffsets: "提醒时间",
    paymentMethod: "支付方式备注",
    cancellationUrl: "取消链接",
    notes: "备注",
    noItemsTitle: "还没有项目",
    noItemsBody: "添加第一个项目，或载入示例数据查看 MVP 效果。",
    noIngredients: "还没有食材。",
    start: "开始",
    restart: "重新开始",
    complete: "完成",
    resetRun: "重置执行",
    edit: "编辑",
    duplicate: "复制",
    delete: "删除",
    save: "收藏",
    dismiss: "忽略",
    openCancellation: "打开取消页面",
    savedAction: "已收藏",
    add: "添加",
    done: "已完成",
    currentRun: "当前执行",
    templateSteps: "模板步骤",
    stepsCount: "{count} 步",
    completePercent: "完成 {count}%",
    matchScore: "匹配分",
    availableCount: "{count} 个可用",
    missingCount: "缺少 {count} 个",
    fitPercent: "匹配 {count}%",
    missing: "缺少",
    suggestionCount: "{count} 个推荐",
    noReminders: "无提醒",
    dayReminder: "提前 {days} 天提醒",
    perYear: "{amount} / 年",
    noDate: "无日期",
    today: "今天，{date}",
    tomorrow: "明天，{date}",
    overdue: "逾期 {count} 天，{date}",
    inDays: "{count} 天后，{date}",
    cycleWeekly: "每周",
    cycleMonthly: "每月",
    cycleQuarterly: "每季度",
    cycleYearly: "每年",
    cycleCustom: "自定义",
    repeatNone: "不重复",
    any: "不限",
    lowEffort: "低难度",
    vegetarian: "素食",
    mild: "清淡",
    spicyOk: "可以吃辣",
    pan: "平底锅",
    pot: "锅",
    oven: "烤箱",
    microwave: "微波炉",
    noPlaybooksMatch: "没有符合当前筛选的清单。",
    playbookCountAll: "{count} 个清单，进行中的优先。",
    playbookCountFiltered: "当前视图有 {count} 个匹配清单。",
    savedMealsCount: "{count} 个已收藏餐食。",
    noMealSuggestions: "当前食材和条件下没有匹配推荐。",
    mealOptionsCount: "{count} 个按匹配度排序的现实选择。",
    shoppingGapsCount: "当前推荐中共有 {count} 个缺口食材。",
    noShoppingGaps: "当前推荐没有采购缺口。",
    noTimelineItems: "没有符合当前筛选的项目。",
    timelineAll: "{count} 个循环费用，按日期排序。",
    timelineFiltered: "当前视图有 {count} 个匹配项目。",
    usesBeforeExpiry: "会用到即将过期的 {item}，{minutes} 分钟可完成。",
    hasCoreIngredients: "核心食材都已具备，{minutes} 分钟可完成。",
    needsMoreItems: "还需要 {count} 个食材：{items}。"
  }
};

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
  settings: loadSettings(),
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

const moduleTitles = {
  playbooks: "titlePlaybooks",
  kitchen: "titleKitchen",
  costs: "titleCosts"
};

const elements = {
  appTitle: document.querySelector("#appTitle"),
  appEyebrow: document.querySelector(".title-block .eyebrow"),
  moduleTabs: document.querySelectorAll(".module-tab"),
  seedButton: document.querySelector("#seedButton"),
  clearButton: document.querySelector("#clearButton"),
  settingsButton: document.querySelector("#settingsButton"),
  settingsDialog: document.querySelector("#settingsDialog"),
  closeSettingsButton: document.querySelector("#closeSettingsButton"),
  settingsEyebrow: document.querySelector("#settingsEyebrow"),
  settingsTitle: document.querySelector("#settingsTitle"),
  languageLabel: document.querySelector("#languageLabel"),
  languageSelect: document.querySelector("#languageSelect"),
  preferredCurrencyLabel: document.querySelector("#preferredCurrencyLabel"),
  preferredCurrency: document.querySelector("#preferredCurrency"),
  currencyNote: document.querySelector("#currencyNote"),
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
  costCurrency: document.querySelector("#currency"),
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
elements.settingsButton.addEventListener("click", openSettings);
elements.closeSettingsButton.addEventListener("click", closeSettings);
elements.settingsDialog.addEventListener("click", (event) => {
  if (event.target === elements.settingsDialog) closeSettings();
});
elements.languageSelect.addEventListener("change", updateLanguageSetting);
elements.preferredCurrency.addEventListener("change", updateCurrencySetting);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !elements.settingsDialog.classList.contains("hidden")) closeSettings();
});

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

syncSettingsControls();
renderCurrencySelects();
applyTranslations();
resetPlaybookForm();
resetIngredientForm();
resetCostForm();
render();

function syncSettingsControls() {
  elements.languageSelect.value = state.settings.language;
  elements.preferredCurrency.value = state.settings.currency;
}

function openSettings() {
  elements.settingsDialog.classList.remove("hidden");
  elements.languageSelect.focus();
}

function closeSettings() {
  elements.settingsDialog.classList.add("hidden");
  elements.settingsButton.focus();
}

function updateLanguageSetting() {
  state.settings.language = elements.languageSelect.value;
  persistSettings();
  renderCurrencySelects();
  applyTranslations();
  resetEditableFormTitles();
  render();
}

function updateCurrencySetting() {
  state.settings.currency = elements.preferredCurrency.value;
  persistSettings();
  if (!elements.costId.value && !document.querySelector("#name").value) {
    elements.costCurrency.value = state.settings.currency;
  }
  renderCosts();
}

function renderCurrencySelects() {
  fillCurrencySelect(elements.preferredCurrency, state.settings.currency);
  fillCurrencySelect(elements.costCurrency, elements.costCurrency.value || state.settings.currency);
}

function fillCurrencySelect(select, selectedValue) {
  select.replaceChildren();
  supportedCurrencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.textContent = `${currency} - ${currencyName(currency)}`;
    select.append(option);
  });
  select.value = supportedCurrencies.includes(selectedValue) ? selectedValue : state.settings.currency;
}

function applyTranslations() {
  document.documentElement.lang = state.settings.language === "zh" ? "zh-CN" : "en";
  elements.appEyebrow.textContent = t("appEyebrow");
  elements.seedButton.title = t("loadExamples");
  elements.seedButton.setAttribute("aria-label", t("loadExamples"));
  elements.clearButton.title = t("clearModule");
  elements.clearButton.setAttribute("aria-label", t("clearModule"));
  elements.settingsButton.title = t("settings");
  elements.settingsButton.setAttribute("aria-label", t("settings"));
  elements.closeSettingsButton.title = t("closeSettings");
  elements.closeSettingsButton.setAttribute("aria-label", t("closeSettings"));
  elements.settingsEyebrow.textContent = t("preferences");
  elements.settingsTitle.textContent = t("settings");
  elements.languageLabel.textContent = t("language");
  elements.preferredCurrencyLabel.textContent = t("preferredCurrency");
  elements.currencyNote.textContent = t("currencyNote");

  setButtonText("[data-module='playbooks']", "tabPlaybooks");
  setButtonText("[data-module='kitchen']", "tabKitchen");
  setButtonText("[data-module='costs']", "tabCosts");

  setStaticText(".summary-band[aria-label='Playbook summary'] .metric:nth-child(1) .metric-label", "templates");
  setStaticText(".summary-band[aria-label='Playbook summary'] .metric:nth-child(1) small", "reusableScenarios");
  setStaticText(".summary-band[aria-label='Playbook summary'] .metric:nth-child(2) .metric-label", "activeRuns");
  setStaticText(".summary-band[aria-label='Playbook summary'] .metric:nth-child(2) small", "checklistsInMotion");
  setStaticText(".summary-band[aria-label='Playbook summary'] .metric:nth-child(3) .metric-label", "dueSoon");
  setStaticText(".summary-band[aria-label='Playbook summary'] .metric:nth-child(3) small", "dueNext7");
  setStaticText(".summary-band[aria-label='Playbook summary'] .metric:nth-child(4) .metric-label", "completion");
  setStaticText(".summary-band[aria-label='Playbook summary'] .metric:nth-child(4) small", "averageProgress");

  setStaticText(".summary-band[aria-label='Kitchen summary'] .metric:nth-child(1) .metric-label", "ingredients");
  setStaticText(".summary-band[aria-label='Kitchen summary'] .metric:nth-child(1) small", "availableNow");
  setStaticText(".summary-band[aria-label='Kitchen summary'] .metric:nth-child(2) .metric-label", "expiringSoon");
  setStaticText(".summary-band[aria-label='Kitchen summary'] .metric:nth-child(2) small", "useWithin3");
  setStaticText(".summary-band[aria-label='Kitchen summary'] .metric:nth-child(3) .metric-label", "mealMatches");
  setStaticText(".summary-band[aria-label='Kitchen summary'] .metric:nth-child(3) small", "realisticOptions");
  setStaticText(".summary-band[aria-label='Kitchen summary'] .metric:nth-child(4) .metric-label", "shoppingGaps");
  setStaticText(".summary-band[aria-label='Kitchen summary'] .metric:nth-child(4) small", "missingInSuggestions");

  setStaticText(".summary-band[aria-label='Cost summary'] .metric:nth-child(1) .metric-label", "monthlyEstimate");
  setStaticText(".summary-band[aria-label='Cost summary'] .metric:nth-child(1) small", "selectedCurrencySpend");
  setStaticText(".summary-band[aria-label='Cost summary'] .metric:nth-child(2) .metric-label", "annualEstimate");
  setStaticText(".summary-band[aria-label='Cost summary'] .metric:nth-child(2) small", "selectedCurrencyActive");
  setStaticText(".summary-band[aria-label='Cost summary'] .metric:nth-child(3) .metric-label", "chargingSoon");
  setStaticText(".summary-band[aria-label='Cost summary'] .metric:nth-child(3) small", "dueNext14");
  setStaticText(".summary-band[aria-label='Cost summary'] .metric:nth-child(4) .metric-label", "possibleReview");
  setStaticText(".summary-band[aria-label='Cost summary'] .metric:nth-child(4) small", "pausedTrialFlagged");

  setStaticText(".main-panel[aria-label='Playbook list'] .toolbar h2", "playbookRuns");
  setStaticText(".main-panel[aria-label='Meal suggestions'] .toolbar h2", "mealSuggestions");
  setStaticText(".main-panel[aria-label='Recurring cost list'] .toolbar h2", "renewalTimeline");
  setStaticText(".constraint-panel h2", "mealConstraints");
  setStaticText(".ingredient-list-shell h2", "currentIngredients");

  setButtonText("#resetPlaybookFormButton", "reset");
  setButtonText("#resetIngredientFormButton", "reset");
  setButtonText("#resetCostFormButton", "reset");
  setButtonText("#playbookForm .primary-button", "savePlaybook");
  setButtonText("#ingredientForm .primary-button", "saveIngredient");
  setButtonText("#costForm .primary-button", "saveCost");

  translateFilters();
  translateLabels();
  translateSelectOptions();
  translatePlaceholders();
  translateEmptyTemplate();
  elements.appTitle.textContent = t(moduleTitles[state.module]);
}

function resetEditableFormTitles() {
  if (!elements.playbookId.value) elements.playbookFormTitle.textContent = t("addPlaybook");
  if (!elements.ingredientId.value) elements.ingredientFormTitle.textContent = t("addIngredient");
  if (!elements.costId.value) elements.costFormTitle.textContent = t("addCost");
}

function translateFilters() {
  const filterKeys = {
    all: "all",
    active: "active",
    due: "due",
    templates: "templates",
    suggestions: "suggestions",
    saved: "saved",
    gaps: "gaps",
    soon: "soon",
    trial: "trials",
    review: "review"
  };

  document.querySelectorAll("[data-playbook-filter], [data-kitchen-filter], [data-cost-filter]").forEach((button) => {
    const value = button.dataset.playbookFilter || button.dataset.kitchenFilter || button.dataset.costFilter;
    button.textContent = t(filterKeys[value] || "all");
  });
}

function translateLabels() {
  setLabelText("#playbookTitle", "title");
  setLabelText("#playbookCategory", "category");
  setLabelText("#repeatRule", "repeat");
  setLabelText("#playbookDueDate", "dueDate");
  setLabelText("#defaultReminderOffsetDays", "reminderDays");
  setLabelText("#playbookDescription", "description");
  setLabelText("#playbookSteps", "steps");
  setLabelText("#ingredientName", "ingredient");
  setLabelText("#ingredientCategory", "category");
  setLabelText("#ingredientLocation", "location");
  setLabelText("#quantityLabel", "quantity");
  setLabelText("#expiresAt", "expires");
  setLabelText("#maxTimeMinutes", "time");
  setLabelText("#effortLevel", "effort");
  setLabelText("#dietMode", "diet");
  setLabelText("#spiceMode", "spice");
  setLabelText("#name", "name");
  setLabelText("#amount", "amount");
  setLabelText("#currency", "currency");
  setLabelText("#billingCycle", "billingCycle");
  setLabelText("#nextChargeDate", "nextCharge");
  setLabelText("#category", "category");
  setLabelText("#status", "status");
  setLabelText("#reminderOffsets", "reminderOffsets");
  setLabelText("#paymentMethodLabel", "paymentMethod");
  setLabelText("#cancellationUrl", "cancellationUrl");
  setLabelText("#notes", "notes");
}

function translateSelectOptions() {
  setOptionLabels("#repeatRule", {
    none: "repeatNone",
    weekly: "cycleWeekly",
    monthly: "cycleMonthly",
    quarterly: "cycleQuarterly",
    yearly: "cycleYearly"
  });
  setOptionLabels("#billingCycle", {
    weekly: "cycleWeekly",
    monthly: "cycleMonthly",
    quarterly: "cycleQuarterly",
    yearly: "cycleYearly",
    custom: "cycleCustom"
  });
  setOptionLabels("#maxTimeMinutes", { 15: "15 min", 30: "30 min", 45: "45 min", 60: "60 min" }, true);
  setOptionLabels("#effortLevel", { any: "any", easy: "lowEffort" });
  setOptionLabels("#dietMode", { any: "any", vegetarian: "vegetarian" });
  setOptionLabels("#spiceMode", { any: "any", mild: "mild", spicy: "spicyOk" });
  setOptionLabels("#status", { active: "active", trial: "trials", paused: "paused", canceled: "canceled" }, false, {
    paused: state.settings.language === "zh" ? "暂停" : "Paused",
    canceled: state.settings.language === "zh" ? "已取消" : "Canceled"
  });
  document.querySelectorAll(".tool-toggle").forEach((label) => {
    const input = label.querySelector("input");
    const key = input ? input.value : "";
    label.lastChild.textContent = ` ${t(key)}`;
  });
}

function translatePlaceholders() {
  setPlaceholder("#playbookTitle", state.settings.language === "zh" ? "旅行打包、每周家庭整理" : "Travel packing, Weekly home reset");
  setPlaceholder("#playbookDescription", state.settings.language === "zh" ? "这份清单用来解决什么问题" : "What this checklist is for");
  setPlaceholder("#playbookSteps", state.settings.language === "zh" ? "每行一个步骤。可用 标题 | 备注 添加细节。" : "One step per line. Use title | note for extra detail.");
  setPlaceholder("#ingredientName", state.settings.language === "zh" ? "鸡蛋、菠菜、米饭" : "Eggs, spinach, rice");
  setPlaceholder("#quantityLabel", state.settings.language === "zh" ? "6 个、半袋、200g" : "6, half bag, 200g");
  setPlaceholder("#name", state.settings.language === "zh" ? "iCloud、Netflix、健身房" : "iCloud, Netflix, Gym");
  setPlaceholder("#reminderOffsets", "7, 1");
  setPlaceholder("#paymentMethodLabel", state.settings.language === "zh" ? "尾号 1234 的 Visa" : "Visa ending 1234");
  setPlaceholder("#notes", state.settings.language === "zh" ? "套餐细节、登录邮箱、保留或取消原因" : "Plan details, login email, why to keep or cancel");
}

function translateEmptyTemplate() {
  const template = elements.emptyTemplate.content;
  template.querySelector("h3").textContent = t("noItemsTitle");
  template.querySelector("p").textContent = t("noItemsBody");
}

function switchModule(moduleName) {
  state.module = moduleName;
  document.body.dataset.theme = moduleName;
  elements.moduleTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.module === moduleName);
  });
  elements.playbooksView.classList.toggle("hidden", moduleName !== "playbooks");
  elements.kitchenView.classList.toggle("hidden", moduleName !== "kitchen");
  elements.costsView.classList.toggle("hidden", moduleName !== "costs");
  elements.appTitle.textContent = t(moduleTitles[moduleName]);
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
  elements.playbookFormTitle.textContent = t("addPlaybook");
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
          <span class="badge">${escapeHtml(repeatLabel(playbook.repeatRule))}</span>
          ${active ? `<span class="badge trial">${escapeHtml(t("active"))}</span>` : ""}
          ${complete ? `<span class="badge active">${escapeHtml(t("done"))}</span>` : ""}
          ${dueSoon ? `<span class="badge soon">${escapeHtml(t("due"))}</span>` : ""}
        </div>
        <div class="cost-meta">
          <span>${escapeHtml(dueText)}</span>
          <span>${escapeHtml(t("stepsCount", { count: playbook.steps.length }))}</span>
          <span>${escapeHtml(t("completePercent", { count: progress }))}</span>
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
          <span>${active ? escapeHtml(t("currentRun")) : escapeHtml(t("templateSteps"))}</span>
        </div>
        <div class="button-stack">
          <button class="small-command" type="button" data-playbook-action="start" data-id="${playbook.id}">${run ? escapeHtml(t("restart")) : escapeHtml(t("start"))}</button>
          ${active ? `<button class="small-command" type="button" data-playbook-action="complete" data-id="${playbook.id}">${escapeHtml(t("complete"))}</button>` : ""}
          ${run ? `<button class="small-command" type="button" data-playbook-action="reset-run" data-id="${playbook.id}">${escapeHtml(t("resetRun"))}</button>` : ""}
          <button class="small-command" type="button" data-playbook-action="edit" data-id="${playbook.id}">${escapeHtml(t("edit"))}</button>
          <button class="small-command" type="button" data-playbook-action="duplicate" data-id="${playbook.id}">${escapeHtml(t("duplicate"))}</button>
          <button class="small-command danger" type="button" data-playbook-action="delete" data-id="${playbook.id}">${escapeHtml(t("delete"))}</button>
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
    title: state.settings.language === "zh" ? `${playbook.title} 副本` : `${playbook.title} copy`,
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
  elements.playbookFormTitle.textContent = t("editPlaybook");
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
  if (count === 0) return t("noPlaybooksMatch");
  if (state.playbookFilter === "all") return t("playbookCountAll", pluralParams(count));
  return t("playbookCountFiltered", pluralParams(count));
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
  elements.ingredientFormTitle.textContent = t("addIngredient");
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
    empty.textContent = t("noIngredients");
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
          <button class="mini-button" type="button" data-ingredient-action="edit" data-id="${item.id}" title="${escapeAttribute(t("edit"))}" aria-label="${escapeAttribute(t("edit"))}">e</button>
          <button class="mini-button danger" type="button" data-ingredient-action="delete" data-id="${item.id}" title="${escapeAttribute(t("delete"))}" aria-label="${escapeAttribute(t("delete"))}">x</button>
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
          ${mealIdea.tags.includes("vegetarian") ? `<span class="badge active">${escapeHtml(t("vegetarian"))}</span>` : ""}
          ${mealIdea.tags.includes("spicy") ? `<span class="badge trial">${escapeHtml(t("spice"))}</span>` : ""}
        </div>
        <div class="cost-meta">
          <span>${escapeHtml(t("availableCount", { count: suggestion.availableIngredients.length }))}</span>
          <span>${escapeHtml(t("missingCount", { count: suggestion.missingIngredients.length }))}</span>
          <span>${escapeHtml(t("fitPercent", { count: suggestion.matchScore }))}</span>
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
          <span>${escapeHtml(t("matchScore"))}</span>
        </div>
        <div class="button-stack">
          <button class="small-command" type="button" data-meal-action="save" data-id="${mealIdea.id}">${state.savedMealIds.includes(mealIdea.id) ? escapeHtml(t("savedAction")) : escapeHtml(t("save"))}</button>
          <button class="small-command danger" type="button" data-meal-action="dismiss" data-id="${mealIdea.id}">${escapeHtml(t("dismiss"))}</button>
        </div>
      </div>
    `;

    card.addEventListener("click", handleMealAction);
    elements.mealList.append(card);
  });
}

function renderShoppingGaps(gaps) {
  elements.kitchenSubcopy.textContent = gaps.length
    ? t("shoppingGapsCount", pluralParams(gaps.length))
    : t("noShoppingGaps");

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
          <span class="badge soon">${escapeHtml(t("missing"))}</span>
        </div>
        <div class="cost-meta">
          <span>${escapeHtml(t("suggestionCount", pluralParams(gap.count)))}</span>
          <span>${escapeHtml(gap.meals.join(", "))}</span>
        </div>
      </div>
      <div class="cost-side">
        <button class="small-command" type="button" data-gap-action="add" data-name="${escapeAttribute(gap.name)}">${escapeHtml(t("add"))}</button>
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
  elements.ingredientFormTitle.textContent = t("editIngredient");
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
  if (expiringUsed.length > 0) return t("usesBeforeExpiry", { item: expiringUsed[0], minutes: mealIdea.timeMinutes });
  if (missingIngredients.length === 0) return t("hasCoreIngredients", { minutes: mealIdea.timeMinutes });
  return t("needsMoreItems", { ...pluralParams(missingIngredients.length), items: missingIngredients.join(", ") });
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
  if (state.kitchenFilter === "saved") return t("savedMealsCount", pluralParams(count));
  if (count === 0) return t("noMealSuggestions");
  return t("mealOptionsCount", pluralParams(count));
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
  elements.costFormTitle.textContent = t("addCost");
  document.querySelector("#currency").value = state.settings.currency;
  document.querySelector("#billingCycle").value = "monthly";
  document.querySelector("#category").value = "Streaming";
  document.querySelector("#status").value = "active";
  document.querySelector("#nextChargeDate").value = offsetDate(7);
  document.querySelector("#reminderOffsets").value = "7, 1";
}

function renderCosts() {
  const activeCosts = state.costs.filter((cost) => cost.status !== "canceled");
  const activeCostsInCurrency = activeCosts.filter((cost) => cost.currency === state.settings.currency);
  const annualTotal = activeCostsInCurrency.reduce((sum, cost) => sum + annualizedAmount(cost), 0);
  const soonCount = activeCosts.filter((cost) => daysUntil(cost.nextChargeDate) <= 14).length;
  const reviewCount = state.costs.filter(shouldReview).length;

  elements.annualTotal.textContent = formatMoney(annualTotal, state.settings.currency);
  elements.monthlyTotal.textContent = formatMoney(annualTotal / 12, state.settings.currency);
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
    const cycleLabel = cycleLabelFor(cost.billingCycle);
    const reminders = cost.reminderOffsetsDays.length
      ? t("dayReminder", { days: cost.reminderOffsetsDays.join(", ") })
      : t("noReminders");

    card.innerHTML = `
      <div class="cost-main">
        <div class="cost-title-row">
          <h3>${escapeHtml(cost.name)}</h3>
          <span class="badge ${cost.status}">${escapeHtml(statusLabel(cost.status))}</span>
          ${isSoon ? `<span class="badge soon">${escapeHtml(t("soon"))}</span>` : ""}
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
          ${cost.cancellationUrl ? `<a class="mini-button" href="${escapeAttribute(cost.cancellationUrl)}" target="_blank" rel="noreferrer" title="${escapeAttribute(t("openCancellation"))}" aria-label="${escapeAttribute(t("openCancellation"))}">&gt;</a>` : ""}
          <button class="mini-button" type="button" data-cost-action="edit" data-id="${cost.id}" title="${escapeAttribute(t("edit"))}" aria-label="${escapeAttribute(t("edit"))}">e</button>
          <button class="mini-button danger" type="button" data-cost-action="delete" data-id="${cost.id}" title="${escapeAttribute(t("delete"))}" aria-label="${escapeAttribute(t("delete"))}">x</button>
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
  elements.costFormTitle.textContent = t("editCost");
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

function loadSettings() {
  const defaults = { language: "en", currency: "USD" };
  try {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
    const settings = raw ? JSON.parse(raw) : defaults;
    return {
      language: supportedLanguages.some((item) => item.value === settings.language) ? settings.language : defaults.language,
      currency: supportedCurrencies.includes(settings.currency) ? settings.currency : defaults.currency
    };
  } catch {
    return defaults;
  }
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

function persistSettings() {
  localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(state.settings));
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
  if (!dateValue) return t("noDate");
  const count = daysUntil(dateValue);
  const formatted = new Intl.DateTimeFormat(activeLocale(), { month: "short", day: "numeric" }).format(new Date(`${dateValue}T00:00:00`));
  if (count === 0) return t("today", { date: formatted });
  if (count === 1) return t("tomorrow", { date: formatted });
  if (count < 0) return t("overdue", { count: Math.abs(count), date: formatted });
  return t("inDays", { count, date: formatted });
}

function formatAnnualized(cost) {
  return t("perYear", { amount: formatMoney(annualizedAmount(cost), cost.currency) });
}

function formatMoney(value, currency = "USD") {
  return new Intl.NumberFormat(activeLocale(), {
    style: "currency",
    currency,
    maximumFractionDigits: value >= 100 ? 0 : 2
  }).format(Number(value || 0));
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
  if (count === 0) return t("noTimelineItems");
  if (state.costFilter === "all") return t("timelineAll", pluralParams(count));
  return t("timelineFiltered", pluralParams(count));
}

function repeatLabel(value) {
  if (value === "none") return t("repeatNone");
  return cycleLabelFor(value);
}

function cycleLabelFor(value) {
  const keys = {
    weekly: "cycleWeekly",
    monthly: "cycleMonthly",
    quarterly: "cycleQuarterly",
    yearly: "cycleYearly",
    custom: "cycleCustom"
  };
  return t(keys[value] || "cycleCustom");
}

function statusLabel(value) {
  const labels = {
    active: t("active"),
    trial: t("trials"),
    paused: state.settings.language === "zh" ? "暂停" : "Paused",
    canceled: state.settings.language === "zh" ? "已取消" : "Canceled"
  };
  return labels[value] || value;
}

function activeLocale() {
  return state.settings.language === "zh" ? "zh-CN" : "en-US";
}

function currencyName(currency) {
  return (currencyNames[state.settings.language] || currencyNames.en)[currency] || currency;
}

function pluralParams(count) {
  return { count, plural: count === 1 ? "" : "s" };
}

function t(key, params = {}) {
  const dictionary = copy[state.settings?.language] || copy.en;
  const fallback = copy.en[key] || key;
  return String(dictionary[key] || fallback).replace(/\{(\w+)\}/g, (_, name) => {
    return params[name] ?? "";
  });
}

function setStaticText(selector, key) {
  const element = document.querySelector(selector);
  if (element) element.textContent = t(key);
}

function setButtonText(selector, key) {
  setStaticText(selector, key);
}

function setLabelText(inputSelector, key) {
  const input = document.querySelector(inputSelector);
  const label = input?.closest("label");
  if (!label) return;
  const textNode = [...label.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (textNode) textNode.textContent = `\n                ${t(key)}\n                `;
}

function setOptionLabels(selector, labels, literal = false, overrides = {}) {
  const select = document.querySelector(selector);
  if (!select) return;
  [...select.options].forEach((option) => {
    const override = overrides[option.value];
    const key = labels[option.value];
    if (override) option.textContent = override;
    else if (literal) option.textContent = key;
    else if (key) option.textContent = t(key);
  });
}

function setPlaceholder(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.placeholder = value;
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
