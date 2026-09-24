# Design System & Tokens

## Color Palette
- **Cream (Acoustic Background)**: `#F7EBD0`
- **Surface**: `#FFF6E3`
- **Charcoal (Primary Text)**: `#1A1A1A`
- **Charcoal Muted**: `#4A4A4A`
- **Crimson (Accent)**: `#E60026`

## Styling Guidelines
- **Framework**: Tailwind CSS.
- **Glassmorphism**: Use the `.liquid-glass` utility class for translucent overlays, combining `bg-white/10` or `bg-black/40` with `backdrop-blur-md` and subtle borders.
- **Typography**: Next.js Geist (Sans & Mono) as the base font, with Serif fonts for italicized accents.

## Tailwind Configuration
Refer to `tailwind.config.ts` for custom colors and extended theme variables. Avoid arbitrary values (`w-[300px]`) unless absolutely necessary.
