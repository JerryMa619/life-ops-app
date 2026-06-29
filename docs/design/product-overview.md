# LifeOps Product Overview

## Vision

LifeOps is a practical personal life operating system for recurring chores, renewals, decisions, and food planning. The app should help users avoid small repeated failures: forgetting a renewal, not knowing what to cook, repeating a packing list from memory, or losing track of household routines.

## Target Users

- Busy professionals who want lightweight structure without heavy productivity software
- Couples, roommates, or small families coordinating daily logistics
- People who dislike spreadsheets but still want control over recurring life admin
- Users who care about privacy and do not want every household detail in a cloud-heavy tool

## Design Principles

- Fast capture: adding an item should take less than 20 seconds.
- Calm reminders: reminders should feel helpful, not noisy.
- Templates over blank pages: users should start from real-life scenarios.
- Local-first by default: personal life data should be useful even offline.
- Automation later: manual MVP first, then OCR, receipts, bank/email parsing, and barcode flows.

## Shared Concepts

| Concept | Description |
| --- | --- |
| Item | A thing the user tracks: checklist, subscription, ingredient, task, or reminder |
| Due date | Date when an item needs action |
| Reminder | One or more notifications before a due date |
| Template | A reusable structure for a recurring scenario |
| Context | Home, travel, food, finance, health, vehicle, pet, etc. |
| Evidence | Optional note, receipt, link, photo, or document attached to an item |

## App IA Draft

- Today: actions due soon, meal suggestions, renewals, pending routines
- Playbooks: recurring checklists and scenario templates
- Costs: subscriptions, bills, trials, renewal calendar
- Kitchen: ingredients, constraints, suggestions, shopping gaps
- Settings: notification rules, privacy, export, backup

## MVP Build Recommendation

Start with a single cross-module shell and one fully functional module. The best first module is `Recurring Costs` because it has a clear value promise, simple data model, and measurable outcome: money saved or surprises avoided.

Then add `Routine Playbooks`, which reuses reminders and templates. Add `Kitchen Now` third because recommendations require more design nuance and better data quality.

## Open Product Questions

- Should LifeOps be a single app with modules, or three focused mini-apps under one repo?
- Should reminders use system notifications only, or also email/calendar export?
- Should shared household collaboration be part of MVP or deferred?
- Should data sync be self-hosted, iCloud/Google Drive based, or account-based?
