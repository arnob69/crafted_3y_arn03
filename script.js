/**
 * ════════════════════════════════════════════════════════════════════════════
 * KINETIC TEXT COMPONENT
 * ════════════════════════════════════════════════════════════════════════════
 * 
 * Change this variable to customize your text!
 */
const KINETIC_CONFIG = {
  // 1. Text to animate:
  text: "I CRAFT THINGS WITH PYTHON",

  // 2. Delay between each character entering (ms):
  letterDelay: 105,

  // 3. How long the full text stays visible on screen (ms):
  holdDuration: 1900,

  // 4. Delay between characters during exit cleanup (ms):
  exitDelay: 40,

  // 5. Pause before starting the next loop cycle (ms):
  pauseBeforeNextCycle: 350
};

(function() {
  const container = document.getElementById('kinetic-title');
  if (!container) return;

  // Curated vivid color palette
  const curatedColors = [
    '#ff0055', '#ff3366', '#ff5722', '#ff9800', '#ffc107',
    '#ffeb3b', '#cddc39', '#8bc34a', '#4caf50', '#00e676',
    '#00b0ff', '#00e5ff', '#1de9b6', '#00bcd4', '#2196f3',
    '#3f51b5', '#651fff', '#7c4dff', '#9c27b0', '#e040fb',
    '#f50057', '#ff1744', '#d500f9', '#00f5d4', '#7b2cbf',
    '#ff70a6', '#ff9770', '#ffd670', '#e9ff70', '#70d6ff',
    '#a2d2ff', '#b5e48c', '#ff5d8f', '#38b000', '#f72585'
  ];

  // 14 Entrance animation classes
  const entranceClasses = [
    'anim-pop', 'anim-drop', 'anim-rise', 'anim-spin', 'anim-flip',
    'anim-zoom', 'anim-rubber', 'anim-swing', 'anim-glitch', 'anim-jelly',
    'anim-tumble', 'anim-skew', 'anim-spiral', 'anim-flash'
  ];

  // 4 Exit animation classes
  const exitClasses = [
    'exit-up', 'exit-drop', 'exit-spin', 'exit-implode'
  ];

  let charElements = [];
  let totalChars = 0;

  function buildDOM(sentence) {
    container.innerHTML = '';
    charElements = [];
    const words = sentence.trim().split(' ');

    words.forEach((word) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'kinetic-word';

      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const span = document.createElement('span');
        span.className = 'kinetic-char';
        span.textContent = char;
        wordSpan.appendChild(span);
        charElements.push(span);
      }

      container.appendChild(wordSpan);
    });

    totalChars = charElements.length;
  }

  function getRandomVibrantColor() {
    if (Math.random() > 0.4) {
      return curatedColors[Math.floor(Math.random() * curatedColors.length)];
    } else {
      const hue = Math.floor(Math.random() * 360);
      const sat = Math.floor(88 + Math.random() * 12);
      const light = Math.floor(52 + Math.random() * 18);
      return `hsl(${hue}, ${sat}%, ${light}%)`;
    }
  }

  function getRandomEntrance() {
    return entranceClasses[Math.floor(Math.random() * entranceClasses.length)];
  }

  function getRandomExit() {
    return exitClasses[Math.floor(Math.random() * exitClasses.length)];
  }

  function shuffle(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function runCycle() {
    const indices = Array.from({ length: totalChars }, (_, idx) => idx);
    const shuffledIndices = shuffle(indices);

    // Reset initial state
    charElements.forEach((el) => {
      el.className = 'kinetic-char';
      el.style.opacity = '0';
      el.style.transform = 'scale(0)';
    });

    // 1. Enter one by one
    shuffledIndices.forEach((charIdx, step) => {
      setTimeout(() => {
        const el = charElements[charIdx];
        const chosenColor = getRandomVibrantColor();
        const chosenAnim = getRandomEntrance();

        el.style.color = chosenColor;
        el.style.textShadow = 'none';
        el.className = `kinetic-char ${chosenAnim}`;
      }, step * KINETIC_CONFIG.letterDelay);
    });

    // 2. Hold full text
    const allEnteredTime = totalChars * KINETIC_CONFIG.letterDelay + 450;
    const exitStartTime = allEnteredTime + KINETIC_CONFIG.holdDuration;

    setTimeout(() => {
      // 3. Exit cleanup in random order
      const exitIndices = shuffle(indices);

      exitIndices.forEach((charIdx, step) => {
        setTimeout(() => {
          const el = charElements[charIdx];
          const chosenExit = getRandomExit();

          entranceClasses.forEach((cls) => el.classList.remove(cls));
          el.classList.add(chosenExit);
        }, step * KINETIC_CONFIG.exitDelay);
      });

      // 4. Repeat cycle
      const allExitTime = totalChars * KINETIC_CONFIG.exitDelay + 500;
      setTimeout(() => {
        window.animationDone = true;
        window.dispatchEvent(new Event('kineticAnimationDone'));
        if (window.SINGLE_CYCLE_RECORD || window.location.search.includes('record=1')) {
          return;
        }
        runCycle();
      }, allExitTime + KINETIC_CONFIG.pauseBeforeNextCycle);

    }, exitStartTime);
  }

  // Initialize
  buildDOM(KINETIC_CONFIG.text);
  if (!window.location.search.includes('manual=1')) {
    runCycle();
  }

  // Expose global helper to change text on the fly:
  window.setKineticText = function(newText) {
    KINETIC_CONFIG.text = newText;
    buildDOM(newText);
  };

  window.runKineticCycle = runCycle;
})();
