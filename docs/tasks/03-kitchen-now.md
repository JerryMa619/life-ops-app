# Task 03: Kitchen Now

## Problem

Recipe apps assume users want inspiration. In real life, people want a realistic answer to: "What can I cook now with what I have, the time I have, and the energy I have?"

## MVP Goal

Recommend simple meal options based on available ingredients, time, tools, dietary preferences, and missing items.

## Core User Stories

- As a user, I can list ingredients I currently have.
- As a user, I can set constraints: time, difficulty, cookware, diet, and servings.
- As a user, I can get a small set of realistic meal suggestions.
- As a user, I can see missing ingredients before choosing a meal.
- As a user, I can save a meal idea and reuse it later.

## MVP Scope

- Manual ingredient list
- Simple ingredient categories and expiry hints
- Meal suggestion rules
- Saved meals
- Shopping gap list
- Preference filters:
  - Time available
  - Vegetarian/non-vegetarian
  - Spicy/not spicy
  - Low effort
  - Tools available

## Out of Scope for MVP

- Full nutrition tracking
- Barcode scanning
- Grocery delivery integration
- AI image recognition
- Social recipe sharing

## Initial Data Model

```text
Ingredient
- id
- name
- category
- quantityLabel
- expiresAt
- location

MealIdea
- id
- title
- requiredIngredients[]
- optionalIngredients[]
- timeMinutes
- difficulty
- tools[]
- instructions[]
- tags[]

MealSuggestion
- mealIdeaId
- availableIngredientIds[]
- missingIngredients[]
- matchScore
- reason
```

## UX Notes

Suggestions should be few and decisive: three good options are better than a recipe feed. Each suggestion should explain why it is recommended, for example "uses eggs and spinach before they expire" or "ready in 15 minutes."

## Acceptance Criteria

- User can add, edit, and remove ingredients.
- User can set time and tool constraints before generating suggestions.
- User sees three meal suggestions ranked by fit.
- User can inspect missing ingredients for each suggestion.
- User can save or dismiss meal ideas.

## Design Next Steps

- Sketch Kitchen tab with current ingredients and a quick constraint picker.
- Define the first rule-based scoring algorithm before adding AI.
- Create a seed meal library of 30 simple meals.
