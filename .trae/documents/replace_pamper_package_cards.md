# Plan: Update Pamper Packages with Multi-Option Support

The user wants to update the "Pamper Package" section in `BestDealSection.tsx` to support cards that can list multiple treatment options (each with its own price/duration), rather than just a single price/duration per card. This matches the provided visual reference where one card contains a list of prices.

## Data Structure Changes

I will update the `pamperPackages` array to support an `options` array.

**New Interface (Implicit):**
```typescript
type PackageOption = {
  label: string; // e.g., "Balinese massage, Biokos Facial"
  price: string; // e.g., "IDR 400.000"
  duration?: string; // e.g., "2h"
};

type PamperPackage = {
  name: string; // e.g., "Nourishing"
  description?: string; // Optional main description
  image: string;
  options: PackageOption[];
};
```

## Mapped Data

1.  **Card 1: Refreshing**
    *   Image: Unsplash link (existing)
    *   Options:
        *   "Balinese massage, Body Scrub", IDR 350.000, 1.5h

2.  **Card 2: Nourishing (2 hours)**
    *   Image: Unsplash link (existing)
    *   Options:
        *   "Balinese massage, Biokos Facial", IDR 400.000, 2h
        *   "Collagen upgrade", IDR 450.000, 2h

3.  **Card 3: Relaxation (2 hours)**
    *   Image: Unsplash link (existing)
    *   Options:
        *   "Warm stone massage & cream bath", IDR 450.000, 2h

4.  **Card 4: Balance (2 hours)**
    *   Image: Unsplash link (existing)
    *   Options:
        *   "Balinese massage, pedi or mani, no colour", IDR 500.000, 2h

5.  **Card 5: Harmony (2.5 hours)**
    *   Image: Unsplash link (existing)
    *   Options:
        *   "Balinese massage, body scrub, facial & cream bath", IDR 750.000, 2.5h

6.  **Card 6: Perfect celebration (2.5 hours)**
    *   Description: "Deanna signature massage & 1.5 hours facial-collagen"
    *   Image: Unsplash link (existing)
    *   Options:
        *   "Couple", IDR 900.000
        *   "Per person", IDR 500.000

7.  **Card 7: Ratus V**
    *   Description: "Local treatment assist with menstrual discomfort & infection. Feel fresh & eliminate odour"
    *   Image: Unsplash link (existing)
    *   Options:
        *   "Treatment", IDR 200.000, 30min (implied)

8.  **Card 8: Kiddies spa**
    *   Image: Unsplash link (existing)
    *   Options:
        *   "Massage, scrub - yummy chocolate", IDR 200.000, 1 hr
        *   "Massage, scrub - yummy chocolate", IDR 150.000, 30 Min
        *   "Nail colour - feet & hand", IDR 150.000

## Component Updates

1.  **`PackageCard` Component**:
    *   Layout change:
        *   Left: Image (square/rounded).
        *   Right: Content.
            *   Header: `name` (Title).
            *   Description (if any).
            *   List of Options:
                *   Each option row:
                    *   `label` (Text)
                    *   Row: Price (Green) • Duration (Gray) -> "Booking" Button (Right aligned).
    *   WhatsApp Link Integration: Use the `waLink` helper (I might need to copy it from `Index.tsx` or create a local version if I can't import it easily, or move `waLink` to `lib/utils.ts`. For now, I'll duplicate the simple function to avoid large refactors).

## Implementation Steps

1.  **Refactor `BestDealSection.tsx`**:
    *   Redefine `pamperPackages` with the new structure.
    *   Rewrite `PackageCard` to render the list of options dynamically.
    *   Ensure responsive design (stack on mobile if needed, but the "card" style usually works well in `grid-cols-1 sm:grid-cols-2`).

2.  **Verify**: Check layout and data correctness.
