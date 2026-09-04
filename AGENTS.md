# AGENTS.md

# Innerly Engineering Rules

## 1. Purpose

Innerly is an India-first educational and decision-support PWA focused on innerwear knowledge, fit, body awareness, outfit compatibility, occasions and informed decision-making.

The product is education-first.

The application must remain useful without affiliate links, advertising, commerce or external product recommendations.

---

# 2. Core Product Principles

1. Educate before recommending.
2. Explain recommendations.
3. Never force a decision.
4. Never force a click.
5. Never use dark patterns.
6. Never make commerce the primary experience.
7. Never use intrusive advertising.
8. Never make the user dependent on a chatbot.
9. Prefer guided discovery over blank input.
10. Keep the user in control.

---

# 3. Platform

Innerly is a Progressive Web App.

Supported environments:

* Mobile — primary
* Tablet
* Desktop

Use one responsive codebase.

Do not create separate mobile/desktop implementations unless technically necessary.

Do not create a native Android application as part of this project.

---

# 4. Architecture First

Before implementing a major feature:

1. understand the existing architecture
2. identify the appropriate domain/feature
3. reuse existing components
4. determine whether new data structures are required
5. determine whether business logic belongs in an existing service
6. implement only after responsibility is clear

Never create a new component/service merely because it is convenient.

---

# 5. Architecture Style

Use a modular, feature-oriented architecture.

Separate:

* presentation
* components
* domain logic
* application logic
* data
* infrastructure
* utilities

Business rules must not be embedded directly inside UI components.

UI components should primarily render state and emit user actions.

---

# 6. Recommended Project Structure

The exact structure may be adjusted during the architecture phase, but responsibilities must remain similar.

```text
src/
│
├── app/
│   ├── routes/
│   ├── layouts/
│   └── providers/
│
├── features/
│   ├── body/
│   ├── bras/
│   ├── panties/
│   ├── fabrics/
│   ├── outfits/
│   ├── occasions/
│   ├── matching/
│   └── learning/
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── navigation/
│   ├── cards/
│   ├── forms/
│   └── feedback/
│
├── domain/
│   ├── models/
│   ├── rules/
│   ├── recommendation/
│   └── taxonomy/
│
├── data/
│   ├── body/
│   ├── bras/
│   ├── panties/
│   ├── fabrics/
│   ├── outfits/
│   ├── occasions/
│   └── rules/
│
├── services/
│
├── hooks/
│
├── lib/
│
├── utils/
│
├── types/
│
├── styles/
│
└── tests/
```

The architecture may evolve after implementation experience, but responsibility boundaries must remain clear.

---

# 7. Feature Ownership

A feature owns its feature-specific:

* UI
* hooks
* schemas
* types
* tests
* feature logic

Shared functionality belongs in shared directories.

Do not move feature-specific code into global folders merely for convenience.

---

# 8. Component Rules

Every reusable component must have one clear responsibility.

Prefer:

```text
OutfitCard
OccasionCard
KnowledgeCard
RecommendationCard
ConfidenceIndicator
```

over a giant:

```text
UniversalCard
```

Do not create components with dozens of unrelated configuration properties.

Use composition where appropriate.

---

# 9. 500-Line Rule

No source file should exceed 500 lines.

This includes:

* TypeScript
* TSX
* JavaScript
* CSS/SCSS where practical

Approaching 500 lines is a signal to reconsider responsibility.

Refactor by responsibility rather than arbitrarily splitting code.

---

# 10. No Duplicate UI

Before creating a component:

Search the repository for an existing component that provides the same responsibility.

If one exists:

* reuse it
* extend it carefully
* compose it

Do not create a second version of the same component.

---

# 11. No Business Logic in JSX

Avoid:

```tsx
if (outfit === "saree" && occasion === "wedding") {
   ...
}
```

inside UI components.

Instead:

```text
UI
 ↓
Application action
 ↓
Recommendation service
 ↓
Domain rules
 ↓
Recommendation result
 ↓
UI
```

Business rules belong in domain/recommendation modules.

---

# 12. Recommendation Engine

The recommendation engine must be:

* deterministic
* explainable
* testable
* independently callable
* independent from React UI

Conceptual structure:

```text
Input
 ↓
Normalize
 ↓
Match relevant knowledge
 ↓
Apply rules
 ↓
Score considerations
 ↓
Generate recommendation
 ↓
Generate explanation
```

Never hide recommendation logic inside page components.

---

# 13. Data Architecture

Knowledge must be represented as structured data.

Avoid scattering knowledge throughout JSX.

For example:

```text
data/
  bras/
  panties/
  body/
  fabrics/
  outfits/
  occasions/
  rules/
```

The exact schema should be established during the architecture phase.

Data should be easy to update without rewriting UI components.

---

# 14. Content vs Logic

Keep these separate.

### Content

"What is a T-shirt bra?"

belongs to the knowledge/content layer.

### Logic

"When a T-shirt bra may be relevant"

belongs to the recommendation/rules layer.

Do not mix them.

---

# 15. Explainability

Every recommendation should be able to answer:

> Why?

A recommendation result should support explanatory information.

Example conceptual model:

```text
recommendation
reason
considerations
limitations
confidence
```

Do not present recommendations as absolute medical/fashion truths.

Use appropriate language such as:

* may suit
* commonly used
* often preferred
* consider
* depends on fit
* personal comfort varies

---

# 16. User Flow

Do not force users into a single linear questionnaire.

Users may enter through:

* Body
* Breast
* Hip
* Bra
* Panty
* Fabric
* Outfit
* Occasion
* Problem
* Learn

All relevant knowledge should be interconnected.

---

# 17. Homepage

The homepage must follow:

# Start from what you know

Primary discovery paths:

* Know My Body
* Explore Bras
* Explore Panties
* Match My Outfit
* Learn

Do not make a text prompt/chat interface the primary homepage interaction.

---

# 18. Responsive Design

Design mobile-first but implement responsively.

Breakpoints must be based on layout requirements, not arbitrary device names.

Every feature must be evaluated at:

* mobile
* tablet
* desktop

Do not simply stretch the mobile layout onto desktop.

---

# 19. Accessibility

Follow accessible web practices.

Use:

* semantic HTML
* proper heading hierarchy
* accessible labels
* keyboard navigation
* visible focus states
* sufficient contrast
* meaningful alt text
* appropriate ARIA only when necessary

Do not use color as the only indicator.

Interactive elements must have understandable states.

---

# 20. Design System

Do not scatter visual values throughout the application.

Centralize:

* colors
* typography
* spacing
* radii
* shadows
* breakpoints
* component states

Use design tokens.

The visual system should remain consistent across all features.

---

# 21. Visual Reference

The following website is a visual reference only:

https://ecommerce-codex-demo.vercel.app/clothes

Do not copy its code, branding, assets or exact layouts.

Innerly should maintain its own identity.

Desired character:

* elegant
* calm
* educational
* premium
* modern
* approachable
* respectful

---

# 22. PWA Rules

The application must be installable as a PWA.

Consider:

* manifest
* icons
* theme configuration
* service worker
* caching strategy
* offline behavior
* install experience

Do not introduce offline complexity before identifying which content genuinely needs offline availability.

---

# 23. Performance

Prefer:

* optimized images
* lazy loading where appropriate
* code splitting
* lightweight dependencies
* responsive images
* minimal JavaScript
* efficient rendering

Do not install a dependency for a trivial utility that can be implemented cleanly without one.

---

# 24. Security & Privacy

Avoid collecting personal information unless genuinely required.

The recommendation engine should work with minimal data.

Do not collect:

* unnecessary personal information
* unnecessary measurements
* sensitive information without a clear purpose

If data is collected in the future, document:

* why it is collected
* where it is stored
* how long it is retained
* how the user can remove it

---

# 25. Testing

Business logic must be testable independently from UI.

Prioritize tests for:

* recommendation rules
* scoring
* data validation
* transformations
* edge cases

UI tests should focus on meaningful user behavior rather than implementation details.

---

# 26. Documentation

Document architectural decisions that affect future development.

Use concise documentation.

Do not create documentation that merely repeats obvious code.

Important decisions should explain:

* what was decided
* why
* alternatives considered when relevant

---

# 27. Naming

Use descriptive names.

Prefer:

```text
recommendationEngine
bodyShapeGuide
outfitMatcher
knowledgeCard
```

Avoid:

```text
thing
helper2
temp
data1
commonStuff
```

Boolean variables should read naturally:

```text
isLoading
hasRecommendation
isAvailable
```

---

# 28. Error Handling

Never silently swallow errors.

Errors should:

* be handled at the appropriate layer
* provide useful developer information
* provide understandable user feedback where relevant

Do not expose internal technical details to users.

---

# 29. No Premature Abstraction

Do not build a generic framework inside the application.

First identify repeated patterns.

Then abstract them.

Three genuinely similar use cases are generally better evidence for abstraction than one hypothetical future use case.

---

# 30. No Premature Features

Do not implement:

* authentication
* database
* payments
* shopping cart
* product inventory
* affiliate tracking
* AI chatbot
* community
* complex personalization

unless the current milestone explicitly requires them.

Architecture may leave extension points, but implementation should remain focused.

---

# 31. Change Discipline

Before modifying existing architecture:

1. inspect dependencies
2. inspect usages
3. determine impact
4. make the smallest appropriate change
5. test affected areas

Do not rewrite working architecture simply because a different pattern looks cleaner.

---

# 32. Agent Behaviour

When working on Innerly, the coding agent must:

1. inspect before modifying
2. reuse before creating
3. separate before combining
4. explain before introducing major architecture
5. test business logic
6. keep files below 500 lines
7. avoid unnecessary dependencies
8. preserve responsive behavior
9. preserve accessibility
10. never sacrifice user control for conversion

---

# 33. Definition of Done

A feature is not complete merely because it renders.

Before considering it complete, verify:

* architecture is appropriate
* component responsibility is clear
* business logic is separated
* data is structured
* responsive behavior works
* accessibility is considered
* errors are handled
* tests exist where appropriate
* no duplicate component was introduced
* no file exceeds 500 lines
* documentation is updated when necessary

---

# 34. Final Principle

The technical architecture must reflect the product philosophy:

> **Innerly should help people understand and decide — never manipulate them into an outcome.**
