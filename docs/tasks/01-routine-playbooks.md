# Task 01: Routine Playbooks

## Problem

People repeatedly handle the same life scenarios from memory: packing, moving, cleaning, pet care, travel prep, medical appointments, appliance maintenance, and family routines. Generic todo apps are too blank and do not preserve context well.

## MVP Goal

Create reusable life SOP templates that users can start, complete, reset, and schedule.

## Core User Stories

- As a user, I can create a checklist template for a recurring life scenario.
- As a user, I can start a run of a template, mark steps done, and see progress.
- As a user, I can set a repeat schedule or one-off reminder for a playbook.
- As a user, I can duplicate and edit built-in templates.
- As a user, I can attach short notes or links to steps.

## MVP Scope

- Template list
- Template detail with checklist steps
- Active run state
- Due date and reminder settings
- Basic built-in templates:
  - Travel packing
  - Weekly home reset
  - Moving checklist
  - Pet care routine
  - Appliance filter replacement

## Out of Scope for MVP

- Team collaboration
- Automation from calendar/email
- Complex conditional workflows
- Marketplace for community templates

## Initial Data Model

```text
Playbook
- id
- title
- category
- description
- defaultReminderOffsetDays
- repeatRule
- steps[]

Step
- id
- title
- note
- sortOrder
- optional

PlaybookRun
- id
- playbookId
- startedAt
- dueAt
- completedAt
- completedStepIds[]
```

## UX Notes

The main screen should show active playbooks first, then templates. The empty state should offer scenario templates, not a blank editor. Completing a playbook should feel lightweight and satisfying but not gamified.

## Acceptance Criteria

- User can create, edit, delete, duplicate, and run a playbook.
- User can complete individual steps and see progress.
- User can reset a completed playbook.
- User can schedule a reminder for a playbook.
- Built-in templates appear on first launch.

## Design Next Steps

- Sketch the Playbooks tab, template detail, and active run screen.
- Decide whether playbook runs should archive history or overwrite previous state.
- Define notification copy for upcoming and overdue playbooks.
