# Task 02: Recurring Costs

## Problem

Subscriptions, trials, bills, memberships, insurance renewals, storage plans, and software licenses quietly accumulate. People often discover renewals after being charged.

## MVP Goal

Track recurring costs and renewal dates so users can avoid surprise charges and cancel unused services in time.

## Core User Stories

- As a user, I can add a recurring payment with amount, cycle, next charge date, and category.
- As a user, I can see upcoming renewals in a calendar-style list.
- As a user, I can mark a subscription as active, paused, canceled, or trial.
- As a user, I can get reminders before a renewal or trial end.
- As a user, I can see monthly and yearly cost summaries.

## MVP Scope

- Manual subscription entry
- Renewal timeline
- Monthly and annual totals
- Trial ending reminders
- Status tracking
- Optional notes for cancellation link, account email, or plan details

## Out of Scope for MVP

- Bank transaction import
- Email receipt parsing
- Automatic price-change detection
- Multi-currency optimization
- Shared household budget approval

## Initial Data Model

```text
RecurringCost
- id
- name
- category
- amount
- currency
- billingCycle
- nextChargeDate
- status
- reminderOffsetsDays[]
- paymentMethodLabel
- cancellationUrl
- notes

CostEvent
- id
- recurringCostId
- eventType
- eventDate
- amount
- note
```

## UX Notes

The first screen should answer: "What is charging soon, and how much am I committed to monthly?" The app should make cancellation intent easy to record without requiring the user to cancel inside the app.

## Acceptance Criteria

- User can create, edit, archive, and delete a recurring cost.
- User can set billing cycles: weekly, monthly, quarterly, yearly, custom.
- User can see upcoming charges ordered by date.
- User can see estimated monthly and annual spend.
- User can receive reminders before trial end or renewal.

## Design Next Steps

- Sketch Costs dashboard with total monthly spend, annualized spend, and upcoming renewals.
- Design add/edit form with smart defaults for cycle and reminder offsets.
- Define rules for annualized cost calculation.
