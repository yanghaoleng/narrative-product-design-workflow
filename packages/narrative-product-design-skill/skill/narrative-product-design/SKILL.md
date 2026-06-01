---
name: narrative-product-design
description: Use when a product, app, website, feature, or brand experience needs narrative expression: a memorable first impression, coherent world/role/metaphor, characterful microcopy, human-centered long-term retention, onboarding, empty/error/success states, milestone rituals, or a narrative design system. This skill turns an initial product brief into narrative territories, selects the best one, creates markdown docs, and applies the chosen narrative to UI copy and product details.
---

# Narrative Product Design

Use this skill to add a coherent narrative layer to product design. The goal is not to write lore. The goal is to make the product feel like a world with a consistent promise, role, voice, and set of rituals.

## Core Principle

Do not reveal the whole setting at once. Build a complete narrative system behind the product, then express it through precise details: naming, onboarding, empty states, error states, milestones, reminders, motion, characters, and visual rhythm.

## Inputs To Collect

Start from the product brief, PRD, existing UI, repository, or user description. If essential context is missing, ask at most one concise question. Otherwise make reasonable assumptions and state them in the diagnosis.

Extract:

- Product name and category.
- Target users.
- Core user transformation.
- Main workflows.
- Usage frequency.
- Emotional stakes.
- Brand keywords.
- Moments of anxiety, confusion, achievement, and return.
- Existing voice, visual style, mascot, IP, or naming conventions.
- High-risk moments where playful language would be inappropriate.

## Required Workflow

### 1. Diagnose The Product Truth

Write the transformation sentence:

> Users move from `old state` through `core mechanism` toward `new state`, while feeling `emotional promise`.

Then identify:

- Functional job.
- Emotional job.
- Social/identity job.
- Retention motive.
- Narrative risk.

### 2. Generate Narrative Territories

Generate 3-5 distinct territories. Each territory must include:

- Territory name.
- One-sentence world metaphor.
- User role.
- Product/system role.
- Emotional palette.
- Naming vocabulary.
- UI touchpoints where it will appear.
- Motion/visual implications.
- Long-term care mechanism.
- Risks and guardrails.

Territories must be genuinely different. Do not create five versions of the same metaphor.

### 3. Score And Select

Score each territory from 1-5 on:

- Product truth fit.
- First-impression memorability.
- Long-term care potential.
- Copy extensibility.
- Motion/visual extensibility.
- Brand distinctiveness.
- Cultural/ethical safety.
- Execution cost.

Choose the highest scoring territory that has no hard safety or brand risk. If two are close, choose the one that is more durable and less gimmicky.

### 4. Create The Narrative Bible

Create a concise but operational bible:

- North-star sentence.
- World rules.
- User role.
- Product/system role.
- Cast or voice model.
- Naming lexicon.
- Banned words and tones.
- Key scenes.
- Microcopy examples.
- Visual and motion principles.
- How much of the setting to reveal at each stage.

### 5. Build The Expression Map

Map the selected narrative to product surfaces:

- First screen.
- Navigation.
- Primary actions.
- Onboarding.
- Empty states.
- Loading states.
- Success states.
- Error states.
- Milestones.
- Notifications and emails.
- Settings, cancellation, downgrade, data loss, payment, health, finance, or other sensitive moments.

For each surface include:

- User psychology.
- Narrative purpose.
- Before copy.
- After copy.
- Why the change works.
- Visual/motion guidance.

### 6. Apply To The Product

If a codebase or design files exist, implement the chosen direction in the smallest safe scope that proves the system:

- Replace generic hero copy with narrative-aligned copy.
- Rename primary actions where helpful.
- Rewrite empty/error/success/loading states.
- Add or tune milestone language.
- Add subtle visual/motion cues only where they improve comprehension or emotion.
- Keep clarity above cleverness.

Do not over-theme every UI element. A narrative system should feel coherent, not noisy.

### 7. Narrative QA

Before finishing, audit:

- Does the first screen communicate value within 10 seconds?
- Can a new user understand every label?
- Does the product avoid dumping lore?
- Are failure and sensitive moments respectful?
- Are recurring reminders caring rather than manipulative?
- Do naming, copy, motion, and visual details feel like the same world?
- Can this system extend to future features?
- Did we avoid cultural stereotypes, infantilizing users, and forced humor?

## Files To Produce

When working in a repo, create or update:

- `docs/narrative/00-brief-diagnosis.md`
- `docs/narrative/01-narrative-territories.md`
- `docs/narrative/02-selected-narrative-bible.md`
- `docs/narrative/03-expression-map.md`
- `docs/narrative/04-copy-before-after.md`
- `docs/narrative/05-narrative-qa.md`

Use the templates in `templates/` when available.

## Output Style

- Be vivid but precise.
- Prefer concrete product touchpoints over abstract brand language.
- Keep the world behind the interface deeper than the world shown in the interface.
- Use plain product language in high-risk moments.
- Explain why the selected narrative fits the product.
- Include rejected territories and why they were not chosen.

## Anti-Patterns

- Adding mascot jokes everywhere.
- Replacing clear product labels with obscure lore names.
- Treating narrative as a landing-page headline only.
- Writing a long backstory users must read.
- Using the same cheerful tone in error, payment, privacy, or health contexts.
- Creating a metaphor that cannot support future product features.
- Making users feel manipulated by streaks, guilt, or fake intimacy.

