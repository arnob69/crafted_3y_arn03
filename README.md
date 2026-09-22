# random_tex_animation_001 :-:
> **I CRAFT THINGS WITH PYTHON.** • Smooth, unpredictable, kinetic typography with 14 unique entrance animations and infinite vibrant color variations.

---

## 📁 Files in this folder

- **`index.html`** — Clean HTML entry point. Double-click to open in any browser!
- **`style.css`** — CSS animations (14 entrance animations, 4 exit styles) and responsive typography.
- **`script.js`** — Kinetic animation engine and configuration.
- **`Nohemi-VF-BF6438cc58ad63d.ttf`** — Nohemi variable font.
- **`README.md`** — Documentation and guide.

---

## ⚙️ How to Change the Text

Open **`script.js`** in any code editor (VS Code, Notepad++, etc.). At the very top, you will see the configuration object:

```javascript
const KINETIC_CONFIG = {
  // 👉 1. Put whatever text you want here:
  text: "I CRAFT THINGS WITH PYTHON.",

  // 2. Speed between each character entering (ms):
  letterDelay: 105,

  // 3. How long the full text stays visible on screen (ms):
  holdDuration: 1900,

  // 4. Delay between characters during exit cleanup (ms):
  exitDelay: 40,

  // 5. Pause before starting the next loop cycle (ms):
  pauseBeforeNextCycle: 350
};
```

Simply edit `text: "YOUR CUSTOM TEXT"` and save the file!

---

## 🚀 Live Console Helper

You can also change the text instantly while viewing in your browser by opening Developer Tools (`F12` -> Console) and typing:

```javascript
setKineticText("HELLO WORLD");
```

---

## 🎨 Features

1. **Split Character Typography**: Automatically splits words and letters into standalone spans while preserving correct natural sentence spacing.
2. **Infinite Vibrant Colors**: Dynamic HSL generator + 35 curated neon and pastel hues. Every character in every cycle gets a new unique color.
3. **14 Entrance Animations**:
   - `anim-pop` (Spring scale pop)
   - `anim-drop` (Top bounce drop)
   - `anim-rise` (Bottom elastic rise)
   - `anim-spin` (360 vortex spin)
   - `anim-flip` (3D Y-axis flip)
   - `anim-zoom` (Hyper-zoom snap)
   - `anim-rubber` (Rubber band stretch)
   - `anim-swing` (Pendulum harmonic swing)
   - `anim-glitch` (Cyberpunk glitch burst)
   - `anim-jelly` (Jelly wobble)
   - `anim-tumble` (3D tumbling roll)
   - `anim-skew` (Angle shear snap)
   - `anim-spiral` (Spiral orbit into place)
   - `anim-flash` (Strobe flash burst)
4. **4 Exit Animations**: Random clean-up dissolution on every round (`exit-up`, `exit-drop`, `exit-spin`, `exit-implode`).
5. **No Drop Shadows**: Clean, flat, ultra-sharp modern aesthetic.
6. **Pure Vanilla**: Zero external dependencies, pure HTML, CSS & JavaScript.

---

