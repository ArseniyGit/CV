# Featured Projects Expansion Design

**Date:** 2026-03-23

## Goal

Expand the featured portfolio section from 3 cards to 5 cards by adding `tg-biznes` and `CF-TGAPP-2010-B` in the same visual and content format as the existing project cards.

## Approved Direction

- Keep the current `FeaturedProjects` component structure unchanged.
- Append two new entries to the `featuredProjects` array.
- Use presentation-friendly product names instead of raw repository names:
  - `SalesPilot AI` for `tg-biznes`
  - `ChannelOS` for `CF-TGAPP-2010-B`
- Match the existing card style exactly:
  - short product title
  - short subtitle badge
  - one-paragraph description
  - 6 feature bullets
  - compact tech tags
  - gradient banner title/subtitle treatment
  - optional external links
- Update the section heading from top 3 to top 5.

## Content Strategy

- `SalesPilot AI` should read as an AI-assisted sales operations platform for Telegram with API, worker, dashboard, inbox, and CRM/calendar integrations.
- `ChannelOS` should read as a Telegram subscription and advertising platform with mini app, payments, admin flows, access control, and scheduled background jobs.
- Both cards should stay consistent with the tone of the current 3 cards: product-focused, concrete, and portfolio-friendly.

## Verification

- Run a production build after editing to confirm the component still compiles and renders.
