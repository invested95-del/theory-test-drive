/* =========================================================
   Data
========================================================= */
const BANK = [
  // GIVE WAY & INTERSECTIONS
  { id: "g1", cat: "giveway", q: "You're turning left at an uncontrolled intersection. A car is going straight through from your right. Who gives way?", options: ["You give way, because you're turning", "The other driver gives way, because you're on their left", "Whoever arrives first has priority", "You give way only if it's raining"], a: 0, ex: "The core NZ rule: if you're turning, you give way to all traffic not turning — regardless of which side they come from." },
  { id: "g2", cat: "giveway", q: "You're turning right at an uncontrolled intersection, facing another vehicle turning left. Who gives way?", options: ["The left-turning vehicle always gives way", "You give way to the left-turning vehicle", "Right of way goes to whoever is bigger", "It's always a dead heat, sound your horn"], a: 1, ex: "When both vehicles are turning, the one turning right gives way to the one turning left." },
  { id: "g3", cat: "giveway", q: "At a roundabout, who must you give way to?", options: ["Traffic already on the roundabout, coming from your right", "Traffic waiting to enter from your left", "No one — roundabouts have no give way rule", "Only buses and trucks"], a: 0, ex: "Give way to any vehicle already circulating on the roundabout that's approaching from your right." },
  { id: "g4", cat: "giveway", q: "You reach a T-intersection with no signs or signals. You're on the terminating road (the top of the T). Who has priority?", options: ["You do, since you arrived first", "Traffic on the continuing road (the through road)", "Whoever flashes their lights first", "The vehicle on the right always wins"], a: 1, ex: "At an uncontrolled T-intersection, traffic on the continuing (through) road has priority over traffic on the terminating road." },
  { id: "g5", cat: "giveway", q: "A pedestrian is waiting to cross at a raised safety platform (not a marked zebra crossing). Do you need to give way?", options: ["No — only marked crossings require giving way", "Yes — drivers must give way to pedestrians waiting at these crossing points too", "Only if the pedestrian is a child", "Only during school hours"], a: 1, ex: "Recent rule changes extended give-way priority to pedestrians waiting at certain streets and raised safety platforms, not just marked zebra crossings." },
  { id: "g6", cat: "giveway", q: "You're exiting a driveway onto a road. Who has right of way?", options: ["You, if you signal in time", "All traffic and pedestrians on the road", "Only vehicles going the same direction as you", "Whoever is travelling faster"], a: 1, ex: "Vehicles leaving a driveway must give way to all traffic and pedestrians already on the road." },

  // SPEED, ALCOHOL & LIMITS
  { id: "s1", cat: "limits", q: "What is the default speed limit in a built-up (urban) area unless signs say otherwise?", options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"], a: 1, ex: "50 km/h is the standard default urban limit across New Zealand." },
  { id: "s2", cat: "limits", q: "What is the typical open road speed limit when no other limit is signposted?", options: ["90 km/h", "100 km/h", "110 km/h", "120 km/h"], a: 1, ex: "100 km/h is the standard open road limit; some motorways/expressways are signposted higher, up to 110 km/h." },
  { id: "s3", cat: "limits", q: "What is the legal breath alcohol limit for drivers aged 20 and over?", options: ["Zero — no alcohol at all", "250 micrograms per litre of breath", "400 micrograms per litre of breath", "There's no legal limit, only impairment matters"], a: 1, ex: "For drivers 20+, the limit is 250mcg/L of breath (equivalent to 50mg/100ml of blood)." },
  { id: "s4", cat: "limits", q: "What is the legal alcohol limit for a driver under 20 years old?", options: ["Same as adults — 250mcg/L breath", "Zero — any detectable alcohol is an offence", "One standard drink is allowed", "There's no separate rule for under-20s"], a: 1, ex: "Drivers under 20 have a zero-alcohol limit: any detectable alcohol in breath or blood is an offence." },
  { id: "s5", cat: "limits", q: "How far away must you be able to see a person or vehicle at night before you're required to have headlights on?", options: ["50 metres", "75 metres", "100 metres", "150 metres"], a: 2, ex: "You must use headlights when you can't clearly see a person or vehicle 100 metres away." },
  { id: "s6", cat: "limits", q: "What's the recommended following distance in normal, dry conditions?", options: ["Half a second", "Two seconds", "Ten metres, always", "One car length per 10km/h"], a: 1, ex: "The two-second rule is the standard safe-following guideline in good conditions — increase it in wet, icy, or low-visibility conditions." },
  { id: "s7", cat: "limits", q: "Children under what age must be secured in an approved child restraint?", options: ["5", "7", "10", "12"], a: 1, ex: "Children under 7 must be in an approved, age- and size-appropriate child restraint." },

  // SIGNS & MARKINGS
  { id: "sg1", cat: "signs", q: "What does a solid yellow line down the centre of the road mean?", options: ["No parking on either side", "Overtaking is too dangerous here — do not cross", "It's a cycle lane boundary", "The speed limit is reduced to 70 km/h"], a: 1, ex: "A yellow centre line means overtaking is prohibited because it's not safe to cross into the opposing lane there." },
  { id: "sg2", cat: "signs", q: "A red circle sign with a white bar means:", options: ["No entry for the vehicle type shown", "Speed limit ends here", "One-way street", "Compulsory stop ahead"], a: 0, ex: "Red circular signs are prohibition signs — the symbol inside shows what's not allowed (e.g. no entry, no trucks)." },
  { id: "sg3", cat: "signs", q: "You see a white disc with a black diagonal stripe. What does it mean?", options: ["Roadworks ahead", "Open road speed limit applies (default limit resumes)", "No overtaking zone", "School zone starting"], a: 1, ex: "This sign marks the start of the open road speed limit, cancelling any lower posted limit." },
  { id: "sg4", cat: "signs", q: "At a railway crossing with only a stop sign — no lights or barrier arms — what must you do?", options: ["Slow down and proceed if it looks clear", "Stop, look both ways, and cross only when certain no train is coming", "Sound your horn and continue", "Give way only to trains you can hear"], a: 1, ex: "Uncontrolled crossings with just a stop sign require a full stop and a careful check both ways before crossing." },
  { id: "sg5", cat: "signs", q: "What minimum passing clearance must you give a cyclist when overtaking?", options: ["0.5 metres", "1 metre", "1.5 metres", "2 metres"], a: 2, ex: "Drivers must give cyclists at least 1.5 metres of clearance when passing." },
  { id: "sg6", cat: "signs", q: "On a narrow one-lane bridge, a sign shows a white arrow pointing up on your approach. What does it mean?", options: ["You must stop and let oncoming traffic through first", "You have right of way over oncoming traffic on the bridge", "The bridge is closed", "Trucks only may cross"], a: 1, ex: "A white upward arrow gives you priority on a one-lane bridge — but you must still wait for any vehicle already on the bridge to clear it first." },
  { id: "sg7", cat: "signs", q: "How far may you legally drive within a marked cycle lane when preparing to turn or park?", options: ["10 metres", "25 metres", "50 metres", "100 metres"], a: 2, ex: "You may only enter a cycle lane for a maximum of 50 metres when preparing to turn or park — blocking it otherwise can mean an instant fine." },

  // MOTORWAY & GENERAL RULES
  { id: "m1", cat: "general", q: "Is it legal to hold and use a mobile phone while stopped at a red light?", options: ["Yes, as long as the car isn't moving", "No — handheld phone use is illegal any time you're driving, including stopped in traffic", "Yes, but only for texting, not calls", "Only if you're the passenger"], a: 1, ex: "Handheld mobile phone use is illegal at any point while driving, including stationary at lights or in queued traffic." },
  { id: "m2", cat: "general", q: "If you're caught exceeding the speed limit by more than 40 km/h, what commonly happens?", options: ["A written warning only", "An automatic 28-day licence suspension", "A same-day court date", "Nothing extra beyond the ticket"], a: 1, ex: "Excessive speed (40km/h+ over the limit) commonly triggers an automatic 28-day licence suspension in addition to other penalties." },
  { id: "m3", cat: "general", q: "Which side of the road do you drive on in New Zealand?", options: ["Right-hand side", "Left-hand side", "It varies by region", "Centre of the road on rural highways"], a: 1, ex: "New Zealand drives on the left, the same as Australia and the UK." },
  { id: "m4", cat: "general", q: "What must you do when an ambulance or fire truck approaches from behind with lights and siren on?", options: ["Speed up to clear the intersection first", "Pull over safely and let it pass", "Only pull over if you're in the left lane", "Ignore it if you have right of way"], a: 1, ex: "You must pull over safely and give way to emergency vehicles displaying lights and sirens." },
  { id: "m5", cat: "general", q: "Is wearing a seatbelt required for all passengers, no matter where they're sitting in the vehicle?", options: ["Only the driver and front passenger", "Yes — everyone in the vehicle, every seat", "Only on trips longer than 20 minutes", "Only outside of city limits"], a: 1, ex: "Seatbelts are compulsory for every occupant in every seating position, whenever one is fitted." },
  { id: "m6", cat: "general", q: "You see a reflective warning triangle placed on the road ahead. What does it usually indicate?", options: ["A speed camera ahead", "A breakdown or crash ahead", "Road toll booth ahead", "End of motorway"], a: 1, ex: "A reflective warning triangle signals a broken-down vehicle or crash ahead — slow down and be ready to stop." },
  { id: "m7", cat: "general", q: "Near a crash site, you see police-placed signs indicating a speed. What must you do?", options: ["Maintain the normal posted limit", "Slow to 20 km/h or less until past the site", "Stop completely until police wave you on", "Take an alternate route only"], a: 1, ex: "These signs mean you must travel at 20km/h or less past the site, watching for emergency workers and injured people." },
  { id: "m8", cat: "general", q: "On a road with lane markings, when driving at night, what must you be able to do?", options: ["Stop within the full length of road you can see lit by headlights", "Stop within half the length of clear road you can see ahead", "Maintain the same stopping distance as daytime", "Only slow down, not necessarily stop"], a: 1, ex: "At night on a laned road, you must be able to stop within half the length of clear road visible ahead of you." },
];

const CATEGORIES = [
  { key: "giveway", label: "Give Way & Intersections", accent: "#FFC23A" },
  { key: "limits", label: "Speed & Alcohol Limits", accent: "#4E9E6E" },
  { key: "signs", label: "Signs & Markings", accent: "#5B9BD5" },
  { key: "general", label: "Motorway & General Rules", accent: "#C77DFF" },
];

const LEARN_CONTENT = {
  giveway: {
    label: "Give Way & Intersections",
    intro: "This is where most overseas licence holders lose points — NZ's give-way logic isn't about left/right, it's about turning vs not turning.",
    points: [
      { h: "The golden rule", b: "If you're turning at an uncontrolled intersection, you give way to all traffic that isn't turning — no matter which side it's coming from." },
      { h: "Two turning vehicles", b: "If you're facing another vehicle and you're both turning, the one turning right gives way to the one turning left." },
      { h: "Roundabouts", b: "Give way to any vehicle already on the roundabout approaching from your right. Traffic waiting to enter never has priority over traffic already circulating." },
      { h: "T-intersections", b: "On the terminating road (the top of the T), you give way to traffic on the continuing through road, even with no signs posted." },
      { h: "Driveways", b: "Vehicles leaving a driveway give way to everyone already on the road — vehicles and pedestrians." },
      { h: "Pedestrians", b: "Give way to pedestrians already crossing or stepping onto a marked crossing, and now also at some raised safety platforms, not just zebra crossings." },
      { h: "Stop sign vs give-way sign", b: "At a red STOP sign you must come to a complete stop even if the road looks clear. At a give-way sign you only need to stop if it's necessary to let other traffic through." },
      { h: "What counts as \"uncontrolled\"", b: "The turning-gives-way rule only applies where there's no stop sign, give-way sign, roundabout, or working traffic signal — those override the general rule." },
    ],
  },
  limits: {
    label: "Speed & Alcohol Limits",
    intro: "Numbers examiners expect you to know cold — memorise these exactly.",
    points: [
      { h: "Urban speed limit", b: "50 km/h is the default in built-up areas unless signs say otherwise." },
      { h: "Open road limit", b: "100 km/h is the default open road limit; some motorways/expressways are signposted up to 110 km/h." },
      { h: "Alcohol, 20 and over", b: "250 micrograms of alcohol per litre of breath, or 50mg per 100ml of blood." },
      { h: "Alcohol, under 20", b: "Zero — any detectable alcohol at all is an offence, no allowance." },
      { h: "Following distance", b: "Two seconds in normal dry conditions; open that gap further in rain, fog, or on icy roads." },
      { h: "Headlights at night", b: "Turn on headlights when you can't clearly see a person or vehicle 100 metres away." },
      { h: "Child restraints", b: "Children under 7 must be secured in an approved, age-appropriate child restraint." },
      { h: "Speeding demerit points", b: "Points scale with how far over the limit you are: 10 points for up to 10km/h over, rising to 50 points for more than 35km/h over." },
      { h: "Restricted licence curfew", b: "Restricted licence holders can't drive solo between 10pm and 5am, or carry more than one passenger under 20, without a qualified supervisor on board." },
    ],
  },
  signs: {
    label: "Signs & Markings",
    intro: "Shapes and colours carry meaning before you even read the sign — learn the system, not just individual signs.",
    points: [
      { h: "Yellow centre line", b: "A solid yellow line means overtaking is too dangerous here — never cross it to pass.", icon: "yellowLine" },
      { h: "Red circle signs", b: "Red circles are prohibition signs. Whatever symbol is inside is what's banned (e.g. no entry, no trucks).", icon: "redCircle" },
      { h: "White disc, black stripe", b: "Marks the start of the open road speed limit — any lower posted limit ends here.", icon: "openRoad" },
      { h: "Uncontrolled railway crossings", b: "A stop sign with no lights or barriers means: stop fully, check both directions, cross only when certain it's clear.", icon: "stopSign" },
      { h: "Cyclist passing distance", b: "Give cyclists at least 1.5 metres of clearance when overtaking.", icon: "cyclist" },
      { h: "One-lane bridges", b: "A white upward arrow means you have priority — but you still must wait for any vehicle already on the bridge to clear it.", icon: "bridge" },
      { h: "Cycle lanes", b: "You may only drive in a cycle lane for up to 50 metres when turning or parking.", icon: "cycleLane" },
      { h: "Give way sign", b: "An inverted red-and-white triangle. Slow down and stop if needed to let traffic on the road you're entering go first.", icon: "giveWayTriangle" },
      { h: "Centre line markings", b: "A dotted line on your side means you may overtake when it's clear ahead. A solid line on your side means overtaking is prohibited there — even briefly.", icon: "centreLines" },
      { h: "Sign colour code", b: "Red = prohibition or command (stop, no entry). Yellow diamond = warning of a hazard ahead. Blue = mandatory instruction or general info. Green = motorway/state highway directions. Brown = tourist attractions.", icon: "colourCode" },
    ],
  },
  general: {
    label: "Motorway & General Rules",
    intro: "The everyday rules examiners assume you already live by.",
    points: [
      { h: "Which side to drive on", b: "New Zealand drives on the left, same as Australia and the UK." },
      { h: "Phones while driving", b: "Handheld phone use is illegal at all times while driving, including stopped at lights or in queued traffic." },
      { h: "Seatbelts", b: "Compulsory for every person in every seat, whenever a seatbelt is fitted." },
      { h: "Emergency vehicles", b: "Pull over safely and let any emergency vehicle with lights and siren pass." },
      { h: "Excessive speed", b: "Driving 40km/h+ over the limit commonly triggers an automatic 28-day licence suspension." },
      { h: "Crash-site signage", b: "Police signs near a crash mean slow to 20km/h or less until you're past the site." },
      { h: "Night stopping distance", b: "On a laned road at night, you must be able to stop within half the length of clear road you can see ahead." },
      { h: "Demerit points", b: "Reach 100 demerit points within 2 years and your licence is suspended for 3 months. Points stay on your record for 2 years from the date of the offence." },
      { h: "U-turns", b: "U-turns are legal only where they don't interfere with other traffic and where no sign prohibits them." },
      { h: "Rural hazards", b: "If you meet livestock being moved on a rural road, stop and wait for the farmer's instructions before continuing." },
    ],
  },
};

const PASS_MARK = 32;
const MOCK_LENGTH = 35;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* =========================================================
   SVG icons
========================================================= */
function giveWaySignSVG(size) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" aria-hidden="true">
    <polygon points="50,6 94,90 6,90" fill="var(--ink)" stroke="var(--line)" stroke-width="5" />
    <polygon points="50,22 82,80 18,80" fill="var(--stop)" />
  </svg>`;
}

function signIconSVG(type, size) {
  const openTag = `<svg width="${size}" height="${size}" viewBox="0 0 100 100" aria-hidden="true">`;
  const close = `</svg>`;
  switch (type) {
    case "yellowLine":
      return `${openTag}
        <rect x="0" y="0" width="100" height="100" rx="10" fill="#3A3D42" />
        <rect x="46" y="8" width="8" height="84" fill="#F4C430" />
      ${close}`;
    case "redCircle":
      return `${openTag}
        <circle cx="50" cy="50" r="42" fill="#fff" stroke="#D1332B" stroke-width="9" />
        <rect x="24" y="44" width="52" height="12" rx="2" fill="#D1332B" />
      ${close}`;
    case "openRoad":
      return `${openTag}
        <circle cx="50" cy="50" r="42" fill="#fff" stroke="#222" stroke-width="3" />
        <line x1="22" y1="78" x2="78" y2="22" stroke="#222" stroke-width="9" stroke-linecap="round" />
      ${close}`;
    case "stopSign":
      return `${openTag}
        <polygon points="32,6 68,6 94,32 94,68 68,94 32,94 6,68 6,32" fill="#D1332B" stroke="#fff" stroke-width="4" />
        <text x="50" y="60" text-anchor="middle" font-size="24" font-family="Oswald, sans-serif" font-weight="700" fill="#fff">STOP</text>
      ${close}`;
    case "cyclist":
      return `${openTag}
        <circle cx="50" cy="50" r="42" fill="#2C6FBB" />
        <circle cx="34" cy="66" r="11" fill="none" stroke="#fff" stroke-width="4" />
        <circle cx="66" cy="66" r="11" fill="none" stroke="#fff" stroke-width="4" />
        <path d="M34 66 L48 40 L60 40 M48 40 L58 66 M42 50 H60" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      ${close}`;
    case "bridge":
      return `${openTag}
        <rect x="6" y="6" width="88" height="88" rx="8" fill="#2C6FBB" />
        <path d="M50 74 V30 M50 30 L34 46 M50 30 L66 46" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      ${close}`;
    case "cycleLane":
      return `${openTag}
        <rect x="6" y="6" width="88" height="88" rx="8" fill="#2F8F4E" />
        <circle cx="36" cy="68" r="10" fill="none" stroke="#fff" stroke-width="4" />
        <circle cx="68" cy="68" r="10" fill="none" stroke="#fff" stroke-width="4" />
        <path d="M36 68 L48 38 L60 38 M48 38 L58 68 M40 52 H60" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      ${close}`;
    case "giveWayTriangle":
      return `${openTag}
        <polygon points="50,10 92,88 8,88" fill="#fff" stroke="#D1332B" stroke-width="8" />
        <polygon points="50,26 78,80 22,80" fill="#fff" stroke="#D1332B" stroke-width="5" />
      ${close}`;
    case "centreLines":
      return `${openTag}
        <rect x="0" y="0" width="100" height="100" rx="10" fill="#3A3D42" />
        <rect x="46" y="6" width="8" height="18" fill="#fff" />
        <rect x="46" y="32" width="8" height="18" fill="#fff" />
        <rect x="46" y="58" width="8" height="18" fill="#fff" />
        <rect x="46" y="84" width="8" height="10" fill="#fff" />
      ${close}`;
    case "colourCode":
      return `${openTag}
        <rect x="6" y="6" width="40" height="40" rx="6" fill="#D1332B" />
        <rect x="54" y="6" width="40" height="40" rx="6" fill="#F4C430" />
        <rect x="6" y="54" width="40" height="40" rx="6" fill="#2C6FBB" />
        <rect x="54" y="54" width="40" height="40" rx="6" fill="#2F8F4E" />
      ${close}`;
    default:
      return "";
  }
}

/* =========================================================
   App state
========================================================= */
const state = {
  screen: "home", // home | learnList | learnDetail | quiz | results
  learnTopic: null,
  mode: null, // { type: 'category', key } | { type: 'mock' }
  questions: [],
  idx: 0,
  selected: null,
  answered: false,
  log: [],
};

function resetQuizState() {
  state.idx = 0;
  state.selected = null;
  state.answered = false;
  state.log = [];
}

function startCategory(key) {
  state.questions = shuffle(BANK.filter((q) => q.cat === key));
  state.mode = { type: "category", key };
  resetQuizState();
  state.screen = "quiz";
  render();
}

function startMock() {
  const pool = shuffle(BANK);
  const picked = [];
  while (picked.length < MOCK_LENGTH) {
    picked.push(pool[picked.length % pool.length]);
  }
  state.questions = shuffle(picked);
  state.mode = { type: "mock" };
  resetQuizState();
  state.screen = "quiz";
  render();
}

function chooseAnswer(i) {
  if (state.answered) return;
  state.selected = i;
  state.answered = true;
  render();
}

function nextQuestion() {
  const q = state.questions[state.idx];
  const correct = state.selected === q.a;
  state.log.push({ q, chosen: state.selected, correct });
  if (state.idx + 1 < state.questions.length) {
    state.idx += 1;
    state.selected = null;
    state.answered = false;
    render();
  } else {
    state.screen = "results";
    render();
  }
}

function goHome() {
  state.screen = "home";
  render();
}

function goLearnList() {
  state.screen = "learnList";
  render();
}

function openLearnTopic(key) {
  state.learnTopic = key;
  state.screen = "learnDetail";
  render();
}

function retryCurrent() {
  if (state.mode && state.mode.type === "mock") startMock();
  else if (state.mode) startCategory(state.mode.key);
}

/* =========================================================
   Screen renderers — each returns an HTML string
========================================================= */
function renderHome() {
  const catCards = CATEGORIES.map((c) => {
    const count = BANK.filter((q) => q.cat === c.key).length;
    return `
      <button class="cat-card" data-action="category" data-key="${c.key}">
        <div class="dot" style="background:${c.accent}"></div>
        <div class="cat-title">${c.label}</div>
        <div class="cat-count">${count} questions</div>
      </button>`;
  }).join("");

  return `
    <div class="hero">
      ${giveWaySignSVG(72)}
      <h1 class="hero-title">NZ Theory Test Trainer</h1>
      <p class="hero-sub">Learn the road rules first, then drill them with practice questions or a full mock exam.</p>
    </div>

    <div class="section-block">
      <div class="section-label">Step 1 · Learn</div>
      <button class="learn-cta-btn" data-action="learn-list">
        <div>
          <div class="learn-cta-title">Study the road code</div>
          <div class="learn-cta-desc">Plain-language notes on give-way rules, limits, signs &amp; general rules</div>
        </div>
        <div class="pill">READ</div>
      </button>
    </div>

    <div class="section-block">
      <div class="section-label">Step 2 · Practice by topic</div>
      <div class="cat-grid">${catCards}</div>
    </div>

    <div>
      <div class="section-label">Step 3 · Simulate the real thing</div>
      <button class="mock-btn" data-action="mock">
        <div>
          <div class="learn-cta-title">Full mock test</div>
          <div class="learn-cta-desc">${MOCK_LENGTH} questions · pass mark ${PASS_MARK}/${MOCK_LENGTH}, same as the real learner theory test</div>
        </div>
        <div class="pill signal">START</div>
      </button>
    </div>

    <p class="footer-note">This trainer covers the topics most commonly tested — give-way rules, limits, signs, and general rules —
    but isn't an official NZTA product. Pair it with the current New Zealand Road Code for full coverage.</p>
  `;
}

function renderLearnList() {
  const items = CATEGORIES.map((c) => `
    <button class="learn-list-item" data-action="learn-open" data-key="${c.key}">
      <div class="learn-list-left">
        <div class="dot" style="background:${c.accent}; margin-bottom:0;"></div>
        <div>
          <div class="learn-list-title">${c.label}</div>
          <div class="learn-list-count">${LEARN_CONTENT[c.key].points.length} key points</div>
        </div>
      </div>
      <span class="arrow">→</span>
    </button>
  `).join("");

  return `
    <button class="topnav" data-action="home">← Back to home</button>
    <h2 class="page-title">Study notes</h2>
    <p class="page-sub">Read a topic before you practice it — each one covers exactly what the theory test draws from.</p>
    <div class="learn-list">${items}</div>
  `;
}

function renderLearnDetail() {
  const key = state.learnTopic;
  const topic = LEARN_CONTENT[key];
  const cat = CATEGORIES.find((c) => c.key === key);
  if (!topic) return "";

  const points = topic.points.map((p) => `
    <div class="point-card" style="border-left:3px solid ${cat.accent}">
      ${p.icon ? `<div class="point-icon">${signIconSVG(p.icon, 48)}</div>` : ""}
      <div>
        <div class="point-h">${p.h}</div>
        <div class="point-b">${p.b}</div>
      </div>
    </div>
  `).join("");

  return `
    <button class="topnav" data-action="learn-list">← All topics</button>
    <div class="learn-detail-header">
      <div class="dot" style="background:${cat.accent}; margin-bottom:0;"></div>
      <h2 class="learn-detail-title">${topic.label}</h2>
    </div>
    <p class="learn-intro">${topic.intro}</p>
    <div class="points">${points}</div>
    <button class="btn-block" data-action="practice-topic" data-key="${key}">PRACTICE THIS TOPIC</button>
  `;
}

function renderQuiz() {
  const q = state.questions[state.idx];
  const total = state.questions.length;
  const score = state.log.filter((l) => l.correct).length;
  const modeLabel = state.mode.type === "mock" ? "Full mock test" : CATEGORIES.find((c) => c.key === state.mode.key).label;
  const pct = total ? (state.idx / total) * 100 : 0;

  const options = q.options.map((opt, i) => {
    const isCorrect = i === q.a;
    const isChosen = i === state.selected;
    let cls = "";
    if (state.answered && isCorrect) cls = "correct";
    else if (state.answered && isChosen && !isCorrect) cls = "incorrect";

    return `
      <button class="option-btn ${cls}" data-action="choose" data-idx="${i}" ${state.answered ? "disabled" : ""}>
        <span>${opt}</span>
        ${state.answered && isCorrect ? '<span class="mark-correct">✓</span>' : ""}
        ${state.answered && isChosen && !isCorrect ? '<span class="mark-incorrect">✕</span>' : ""}
      </button>`;
  }).join("");

  const explanation = state.answered ? `
    <div class="explanation-box ${state.selected === q.a ? "ok" : "bad"}">${q.ex}</div>
  ` : "";

  const nextBtn = state.answered ? `
    <button class="next-btn" data-action="next">${state.idx + 1 < total ? "NEXT QUESTION" : "SEE RESULTS"}</button>
  ` : "";

  return `
    <div class="quiz-topbar">
      <span class="quiz-meta">${modeLabel}</span>
      <span class="quiz-meta">${state.idx + 1} / ${total} · score ${score}</span>
    </div>
    <div class="road-progress">
      <div class="road-progress-fill" style="width:${pct}%"></div>
      <div class="road-progress-dash"></div>
      <div class="road-progress-car" style="left:calc(${pct}% - 10px)">🚗</div>
    </div>

    <div class="question-card">
      <div class="question-text">${q.q}</div>
      <div class="options">${options}</div>
      ${explanation}
    </div>
    ${nextBtn}
  `;
}

function renderResults() {
  const total = state.questions.length;
  const score = state.log.filter((l) => l.correct).length;
  const pct = Math.round((score / total) * 100);
  const isMock = state.mode.type === "mock";
  const passed = isMock ? score >= PASS_MARK : pct >= 80;
  const missed = state.log.filter((l) => !l.correct);

  const missedHtml = missed.length ? `
    <div class="section-block">
      <div class="section-label">Review what you missed</div>
      <div class="missed-list">
        ${missed.map((l) => `
          <div class="missed-item">
            <div class="missed-q">${l.q.q}</div>
            <div class="missed-wrong">Your answer: ${l.q.options[l.chosen]}</div>
            <div class="missed-right">Correct: ${l.q.options[l.q.a]}</div>
            <div class="missed-ex">${l.q.ex}</div>
          </div>
        `).join("")}
      </div>
    </div>
  ` : "";

  return `
    <div class="results-top">
      <div class="results-badge ${passed ? "pass" : "fail"}">${score}/${total}</div>
      <h2 class="results-title">${passed ? "Pass" : "Not yet"}</h2>
      <p class="results-sub">${isMock
        ? `Real test pass mark is ${PASS_MARK}/${MOCK_LENGTH}. You scored ${pct}%.`
        : `You scored ${pct}% on this topic.`}</p>
    </div>
    ${missedHtml}
    <div class="results-actions">
      <button class="btn-primary" data-action="retry">RETRY</button>
      <button class="btn-secondary" data-action="home">HOME</button>
    </div>
  `;
}

/* =========================================================
   Render + event delegation
========================================================= */
function renderScreen() {
  switch (state.screen) {
    case "home": return renderHome();
    case "learnList": return renderLearnList();
    case "learnDetail": return renderLearnDetail();
    case "quiz": return renderQuiz();
    case "results": return renderResults();
    default: return "";
  }
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = `<div class="app-shell"><div class="wrap">${renderScreen()}</div></div>`;
}

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-action]");
  if (!el) return;
  const action = el.dataset.action;
  const key = el.dataset.key;

  switch (action) {
    case "learn-list": goLearnList(); break;
    case "learn-open": openLearnTopic(key); break;
    case "practice-topic": startCategory(key); break;
    case "category": startCategory(key); break;
    case "mock": startMock(); break;
    case "choose": chooseAnswer(Number(el.dataset.idx)); break;
    case "next": nextQuestion(); break;
    case "retry": retryCurrent(); break;
    case "home": goHome(); break;
  }
});

render();
