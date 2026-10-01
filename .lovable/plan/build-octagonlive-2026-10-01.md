# Build OctagonLive

## Scope
- Recreate the supplied dark, mobile-first combat sports companion experience in Portuguese.
- Build four linked views from the valid references: events, live fight, fighters, and favorites.
- Treat the fourth supplied file as the shared OctagonLive logo asset because it contains only SVG artwork.

## Experience
- Add the fixed top status bar and bottom navigation shared across screens.
- Reproduce the event poster, live fight telemetry, favorite-fighter alerts, and Alex Pereira profile using the supplied imagery.
- Make navigation, alert/favorite controls, live-data tabs, settings toggles, fight history expansion, and event filters interactive.
- Keep the layout optimized for phones while presenting a centered app-width canvas on larger screens.

## Technical details
- Use TanStack file routes for `/`, `/live`, `/fighters`, and `/favorites`.
- Build reusable shell and fight-data components, semantic design tokens, and accessible controls.
- Keep user choices in browser storage so interactions persist without requiring accounts or a database.
- Add unique page metadata and verify the primary flows in desktop and mobile-sized browsers.
