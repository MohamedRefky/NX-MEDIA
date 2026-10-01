# NX Media — Professional Video Editing

Landing page for **NX Media**, a professional video editing service for creators, agencies, and brands.

## Structure

```
├── index.html          # Page markup (no inline CSS/JS)
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Order form, nav, reveal animations, sticky CTA
└── assets/
    ├── logo.svg        # NX Media logo (vector)
    └── logo.jpg
```

## Sections

- Hero + trust bar (Fast Delivery / Professional Editing / Consistent Quality)
- About, How we work (5 steps), Our work (samples placeholders)
- Pricing: Basic **$40** / Professional **$80** (Most Popular) / Premium **$150** / Custom (50+ videos/month)
- Order form — collects name, package, video count, footage link, and notes, then opens **WhatsApp** with the order pre-written (estimated total updates live)
- FAQ, Contact cards, footer

## Contact

- **WhatsApp:** 01060956959 → `https://wa.me/201060956959` (pre-filled order message)
- **Email:** nxeditteam@gmail.com → opens **Gmail compose** (`mail.google.com/mail/?view=cm&fs=1`) with subject and message template ready

Contact cards use brand styling: WhatsApp green glow, official multicolor Gmail icon with Gmail-blue hover glow on the dark theme (`--void: #000`, accent `--violet: #9281f7`).

## Preview locally

No build step. Open `index.html` directly, or serve the folder:

```powershell
npx serve .
```

## Deploy (Cloudflare Pages)

1. Workers & Pages → Create → Pages → Upload assets (or Connect to Git)
2. No build command, no output directory — upload the project folder as-is
3. `index.html` at the root is served automatically
