# LifeOps

LifeOps is a practical life-management app concept focused on repeated everyday decisions:

1. Personal life SOPs
2. Subscription and recurring bill tracking
3. Realistic "what should I eat today?" meal planning

The project starts as a design-first MVP. Each product direction has its own task brief under `docs/tasks/`, with user problem, MVP scope, core flows, data model, acceptance criteria, and design questions.

## Product Positioning

LifeOps helps people reduce recurring life friction. It is not a generic notes app or a full productivity suite. The product should feel calm, useful, and quick: open it, make a small decision, close it.

## Initial Modules

| Module | Working Name | Core Value |
| --- | --- | --- |
| Life SOPs | Routine Playbooks | Save and repeat personal checklists for recurring life scenarios |
| Subscriptions | Recurring Costs | Track subscriptions, trials, renewals, and unused recurring expenses |
| Meal Planning | Kitchen Now | Recommend realistic meals based on ingredients, time, tools, and preferences |

## MVP Direction

The first MVP can be built as a local-first web or mobile app with:

- A shared item/task/reminder model
- Local notifications
- Lightweight templates
- Manual entry first, image/receipt/barcode automation later
- Privacy-first storage for personal life data

## Current Prototype

The first working MVP prototype is `Recurring Costs`. Open `index.html` in a browser to use it. It currently supports:

- Manual recurring cost entry
- Edit and delete
- Upcoming renewal timeline
- Trial, active, paused, and canceled statuses
- Monthly and annual spend estimates
- Soon, trial, and review filters
- Browser-local persistence with `localStorage`

## Project Structure

```text
index.html
styles.css
app.js
docs/
  design/
    product-overview.md
  tasks/
    01-routine-playbooks.md
    02-recurring-costs.md
    03-kitchen-now.md
```

## Next Step

Turn the Recurring Costs prototype into a production app shell with tests, routing, and a durable storage layer.
