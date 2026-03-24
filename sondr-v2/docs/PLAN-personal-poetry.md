# Project Plan: Personal Gift for Isha (`sondr-v2`)

## Overview
Rebuilding the poetry portfolio from a public showcase into an intimate, one-to-one digital experience for **Isha**. The UI will adopt a "Digital Gift" metaphor, focusing on unboxing, discovery, and atmosphere.

## Project Type: WEB (React + Vite)

## Success Criteria
- [ ] **The "Unboxing"**: A landing screen that feels like opening a personal letter.
- [ ] **Ambient Serenade**: Music that feels integrated into the space, not a popup.
- [ ] **Discovery**: Interactive secrets (Easter Eggs) that reward curiosity.
- [ ] **Visual Soul**: Premium "Scrapbook" aesthetic with organic textures and no clichés.

## Tech Stack
- **Framework**: React (Vite)
- **Motion**: Framer Motion (for physical, paper-like transitions)
- **Styling**: Vanilla CSS with modern tokens (Golden Hour palette)
- **Music**: Spotify Embedded API

## File Structure (`sondr-v2/src/`)
```text
src/
├── components/
│   ├── Envelope/         <-- NEW: Landing experience
│   ├── AmbientPlayer/    <-- NEW: Pinned music control
│   ├── SecretNote/       <-- NEW: Easter egg component
│   └── ...
├── data/
│   ├── poems.js          <-- Modular collection
│   └── secrets.js        <-- NEW: Hidden messages for Isha
```

## Task Breakdown

### 🌹 Phase 1: The Envelope (Entrance)
| Task | Agent | Skill | INPUT → OUTPUT → VERIFY |
| :--- | :--- | :--- | :--- |
| **P0: `Envelope.jsx`** | `frontend-specialist` | `frontend-design` | Create a blurred landing page with a central handwritten "For Isha" note. → Clicking the note triggers a "Spread Open" animation using Framer Motion. → Verify the main site is inaccessible until the envelope is opened. |

### 🎶 Phase 2: Ambient Atmosphere
| Task | Agent | Skill | INPUT → OUTPUT → VERIFY |
| :--- | :--- | :--- | :--- |
| **P1: `AmbientPlayer.jsx`** | `frontend-specialist` | `clean-code` | Move Spotify logic from a modal to a pinned, subtle "Currently Playing" bar in the bottom right. → Add a toggle to hide/show the full player. → Verify music state persists across view transitions. |

### ✨ Phase 3: The Secret Layer
| Task | Agent | Skill | INPUT → OUTPUT → VERIFY |
| :--- | :--- | :--- | :--- |
| **P2: `SecretNote.jsx`** | `frontend-specialist` | `brainstorming` | Create a component that hides small snippets of text behind decorations (tapes, pins). → Use `whileHover` to reveal them as "whispers." → Verify mobile users can trigger them via tap. |

### 🌸 Phase 4: "Blush Mode" Transition
| Task | Agent | Skill | INPUT → OUTPUT → VERIFY |
| :--- | :--- | :--- | :--- |
| **P3: `GlobalTheme.css`** | `frontend-specialist` | `frontend-design` | Create a `.theme-blush` state that overrides CSS tokens with soft pinks, dusty rose, and cream. → Connect this state to the Easter Egg trigger. → Verify a smooth transition using `transition: all 1s ease`. |

### 🛠️ Phase X: Verification
- [ ] **UX Audit**: Does the site feel like a "gift" (intimate) or a "tool" (corporate)?
- [ ] **Contrast Check**: Ensure the "Night Mode" remains readable for poetry.
- [ ] **Script**: `python .agent/scripts/verify_all.py .`

---

## ✅ PHASE X COMPLETE
- [ ] Lint: 
- [ ] Security: 
- [ ] Build: 
- [ ] Date: 
