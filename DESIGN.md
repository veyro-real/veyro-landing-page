# Veyro — design system, reverse engineered from the mockup

Source: `41c4317f-…png`, 1448 × 1086, the veyro.ai hero mockup.
Colours below were **sampled** from that image (quantised per region, so they are
the real pixel values, not estimates). Geometry is measured off the same image at
1448 px wide and is accurate to roughly ±2 px. Type is **inferred**, not
identified — see the note under Typography.

---

## 1. Colour

### Surface
| Token | Value | Where |
| --- | --- | --- |
| `--base` | `#0A0710` | page background |
| `--nav` | `#0B0B16` | nav bar, very slightly bluer than the page |
| `--band` | `#0C0816` | trending strip |
| `--card-a` | `#160D24` | card gradient, top |
| `--card-b` | `#120A1D` | card gradient, bottom |
| `--rule` | `#2E1F45` | hairlines, card borders |

### Brand ramp
The whole page hangs off one violet→magenta→pink ramp.

| Token | Value | Where |
| --- | --- | --- |
| `--grad-1` | `#952EB8` | headline gradient, left stop |
| `--grad-2` | `#C440E4` | headline gradient, middle |
| `--grad-3` | `#FC8BFB` | headline gradient, right stop |
| `--cta-a` | `#A503E1` | CTA pill, left |
| `--cta-b` | `#C71CF4` | CTA pill, right |
| `--violet` | `#785BC3` | eyebrow text (muted, not the full magenta) |

Headline gradient measured left-to-right: `#952EB8 → #C440E4 → #FC8BFB`, roughly
linear at ~96°. The CTA is a **different, tighter** ramp — `#A503E1 → #C71CF4` —
more saturated and less pink than the headline. Do not reuse one for the other.

### Text
| Token | Value | Where |
| --- | --- | --- |
| `--ink` | `#FAF9FB` | H1 line 1, nav, button labels |
| `--body` | `#C8C6D5` | hero lead paragraph |
| `--muted` | `#8A7AC5` | card body copy (notably violet-tinted, not grey) |

### Feature card accents
Each card carries its own hue. Sampled from the titles:

| Card | Accent | Value |
| --- | --- | --- |
| Scans launches | violet | `#CE4ED9` |
| Watches X | blue | `#77C1DC` |
| Follows wallets | green | `#1AD99D` |
| Sends alerts | pink | `#D872CE` |

Card four is **pink-magenta, not red**. Easy to misread as rose.

### Semantic
| Token | Value | Where |
| --- | --- | --- |
| `--up` | `#17C063` | trending percentages, all positive |

---

## 2. Typography

**The fonts cannot be identified from this image, and I am not going to pretend
otherwise.** The mockup is itself AI-generated, so the letterforms are rendered
pixels rather than a real font file — there is no embedded font to name. What the
type *behaves* like:

- **Display (H1, section heads):** a heavy geometric sans, uppercase, very tight
  tracking (≈ −0.03 em), weight 800–900, line-height ≈ 1.0. Closest free
  candidates: **Inter 900**, Archivo Black, Poppins ExtraBold.
- **UI and body:** a neo-grotesque at 400–600. **Inter** is the safe match and is
  what the build uses.
- **No mono anywhere in the mockup.** The build adds one only for the reject-reason
  chips, which are not in the mockup.

### Scale, measured at 1448 px wide
| Role | Size | Weight | Tracking | Case |
| --- | --- | --- | --- | --- |
| H1 | 58 px | 900 | −0.03 em | upper |
| Nav wordmark | 26 px | 800 | +0.07 em | upper |
| Nav links | 15 px | 500 | normal | title |
| Hero lead | 17 px | 400 | normal | sentence |
| Eyebrow | 12 px | 600 | **+0.30 em** | upper |
| CTA label | 17 px | 800 | +0.06 em | upper |
| Card title | 16.5 px | 700 | normal | sentence |
| Card body | 13.5 px | 400 | normal | sentence |
| Trending label | 14 px | 800 | +0.05 em | upper |
| Join heading | 27 px | 900 | **+0.14 em** | upper |

The two wide-tracked items — eyebrow at 0.30 em and the join heading at 0.14 em —
are the most recognisable typographic gesture in the design. Lose them and it
stops looking like this mockup.

---

## 3. Geometry

- **Container:** content spans ~1352 px inside 1448, so side padding ≈ 48 px.
  Max content width 1400 px.
- **Nav height:** 78 px, 1 px bottom hairline in `--rule`.
- **Hero band:** ~690 px tall, image bleeds full width.
- **Radii:** pills `999px` (CTA, ghosts, token chips) · cards `12px` ·
  before/after frame `9px`.
- **Card row:** four equal columns, `14px` gap, card padding `17px 19px`,
  icon 30 px with a coloured drop-shadow glow.
- **Trending strip:** 58 px tall, hairline top and bottom, token avatars 27 px
  circles.
- **Join band:** background plate `cosmic.jpg`, 1916 × 821. The centre of the
  art is deliberately empty so the heading and buttons sit between the two
  graffiti corners. Scrim is a centred radial, `rgba(10,7,16,.72)` at the
  middle fading to transparent at the edges — enough for text contrast without
  flattening the planets. Vertical padding `clamp(48px, 7vw, 86px)` so the
  plate has room to read.

---

## 4. Effects

- **Hero scrim.** A horizontal gradient so the left copy sits on near-solid ink
  while the art stays visible on the right:
  `linear-gradient(90deg, rgba(11,7,20,.97) 0%, rgba(11,7,20,.93) 34%, rgba(11,7,20,.58) 58%, rgba(11,7,20,.12) 100%)`
  Below 900 px this becomes a flat `rgba(11,7,20,.90)` — the art is decorative and
  legibility wins.
- **CTA glow.** `box-shadow: 0 0 38px rgba(199,36,240,.55)`, rising to `52px` at
  `.8` alpha on hover. This is the single strongest light source on the page.
- **Card glow.** Border is `color-mix(accent 34%, rule)`; on hover it goes to the
  full accent with `0 0 26px` of it. Icons carry `drop-shadow(0 0 10px accent)`.
- **Gradient text.** `background-clip: text` with transparent fill on H1 line two
  and the join heading.

---

## 5. Mobile

The phone mockup is not a reflow of the desktop page — it is a different
composition, and the build treats it that way rather than letting the desktop
layout squeeze.

| | Desktop | Mobile (< 900 px) |
| --- | --- | --- |
| Hero art | `hero.jpg`, landscape, anchored centre-right | `hero-mobile.jpg`, portrait, anchored top-right |
| Scrim | horizontal, opaque left → clear right | **vertical**, clear at the top → opaque at the bottom |
| Headline | `FROM DOOMER / TO ALPHA ZOOMER.` | replaced by a word ladder |
| Hero copy | lead paragraph | `SCAN · TRACK · ANALYZE · TRADE · SEND` stacked, then `SOLANA MEMECOINS MADE SIMPLE` |
| Nav | wordmark · 4 links · X · GitHub · CTA | wordmark · hamburger |
| CTA | inline pill | full-bleed pill |
| Cards | 4 across, icon left of text | 4 across, icon **above** centred text |
| Token chips | avatar · name · % in a row | name over % beside the avatar |
| `TO THE MOON →` | present | hidden |

Details that matter:

- **The scrim rotates.** On desktop the art is to the right of the copy, so the
  gradient runs horizontally. On mobile the subject fills the frame, so the copy
  sits at the bottom and the gradient runs vertically — clear at the top where
  the face is, near-solid at the bottom where the text is.
- **The word ladder is tracked to +0.24 em** in a muted `#9C93AE`, which is what
  keeps it reading as a spec sheet rather than a nav list.
- **`SOLANA MEMECOINS MADE SIMPLE` carries a 2 px `--cta-b` rule above it.** It is
  the only horizontal rule in the whole mobile hero and it does the work of a
  section break.
- **Four cards stay four across down to 360 px**, tightening rather than
  reflowing, because that is what the mockup shows. Below 360 they pair up, where
  10 px type stops being legible.
- The hamburger is presentational in this concept. It has no menu behind it.

---

## 6. Honest notes about the source

Three things in the mockup are claims the product cannot currently make:
**Watches X** is not wired, **Follows wallets** does not exist, and **Sends alerts**
is only a feed heartbeat. The trending percentages (`DOGE +12.4%` and the rest) are
invented numbers, not live data.

The concept page reproduces them because it is a concept. They should not survive
contact with the live site — the repo's own `AGENTS.md` requires truthful claims,
and this is a custodial financial product.

Real trending data is available free and keyless from DexScreener
(`/token-boosts/top/v1`, 60 req/min), which is what the bot already uses.
