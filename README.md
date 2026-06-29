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

The working MVP prototype now includes `Routine Playbooks`, `Kitchen Now`, and `Recurring Costs`. Open `index.html` in a browser to use it.

Routine Playbooks currently supports:

- Manual playbook template creation
- Built-in example templates
- Start, complete, and reset playbook runs
- Step-level checklist progress
- Duplicate, edit, and delete
- Local persistence with `localStorage`

Recurring Costs currently supports:

- Manual recurring cost entry
- Edit and delete
- Upcoming renewal timeline
- Trial, active, paused, and canceled statuses
- Monthly and annual spend estimates
- Soon, trial, and review filters
- Browser-local persistence with `localStorage`

Kitchen Now currently supports:

- Manual ingredient entry
- Edit and delete ingredients
- Built-in example ingredients
- Time, effort, diet, spice, and tool constraints
- Rule-based meal suggestions
- Available and missing ingredient chips
- Shopping gap view
- Saved and dismissed meal ideas
- Browser-local persistence with `localStorage`

## Desktop App

LifeOps can now be built as a macOS desktop app. The app uses a small native Cocoa/WebKit shell and bundles the local LifeOps resources, so it opens as `LifeOps.app` without a browser address bar or local web server.

The desktop app includes:

- Native macOS menu bar
- About dialog
- `Cmd+1`, `Cmd+2`, `Cmd+3` module switching
- `Cmd+R` reload
- `Cmd+E` JSON data export

Build it with:

```bash
scripts/build-macos-app.sh
```

The built app is created at:

```text
build/LifeOps.app
```

## Project Structure

```text
index.html
styles.css
app.js
scripts/
  build-macos-app.sh
macos/
  LifeOpsApp/
    Info.plist
    main.swift
docs/
  development-log.md
  design/
    product-overview.md
  tasks/
    01-routine-playbooks.md
    02-recurring-costs.md
    03-kitchen-now.md
```

## Next Step

Turn the static prototype into a production app shell with tests, routing, and a durable storage layer.

## Development Process

Development history and sync rules are recorded in `docs/development-log.md`.
