# Featured Projects Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add two new featured project cards to the portfolio section and update the heading from top 3 to top 5.

**Architecture:** Keep the current card renderer and layout intact. Only expand the `featuredProjects` data array and update the heading text so the section stays visually identical while showing two more projects.

**Tech Stack:** React, TypeScript, Vite, Framer Motion, Lucide React

---

### Task 1: Document the approved portfolio update

**Files:**
- Create: `docs/plans/2026-03-23-featured-projects-design.md`
- Create: `docs/plans/2026-03-23-featured-projects-implementation.md`

**Step 1: Write the approved design summary**

Save the user-approved naming and styling direction in the design doc.

**Step 2: Write the implementation plan**

Save this implementation plan for traceability.

### Task 2: Extend featured project data

**Files:**
- Modify: `src/components/FeaturedProjects.tsx`

**Step 1: Add the two new project entries**

Append `SalesPilot AI` and `ChannelOS` to `featuredProjects` with the same shape as the existing objects.

**Step 2: Keep the existing card style unchanged**

Reuse the current title, subtitle, description, features, tags, banner, and link conventions.

**Step 3: Update the heading**

Change the section title from top 3 to top 5.

### Task 3: Verify the portfolio build

**Files:**
- Modify: `src/components/FeaturedProjects.tsx`

**Step 1: Run the production build**

Run: `npm run build`

**Step 2: Confirm success**

Expected: Vite build completes without TypeScript or bundling errors.
