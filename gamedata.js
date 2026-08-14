/* ============================================================
   STEP INTO CHARACTER ARENA — GAME DATA BANK
   ------------------------------------------------------------
   30 scenarios, tagged into 10 EMOTION FAMILIES (3 each).
   30 phrases, deliberately EMOTIONALLY NEUTRAL.

   DESIGN RULES (why each item is here):
   S1. Playable SOLO. No scenario needs a second character to
       react to. (Cut: "pretending to agree so they stop talking",
       "listening to a friend tell a lie" — those need a partner.)
   S2. Body-first. Every scenario has an obvious posture, face
       and breathing pattern. (Cut: "trying to remember your
       phone password" — that is pure inner monologue.)
   S3. One clear emotion. If Student B has to distinguish two
       scenarios with the same feeling, the game becomes luck.
       Families guarantee the 3 distractors feel DIFFERENT.
   S4. Safe for a school hall. No crushes, no bodily functions,
       no one is the butt of the joke.
   S5. B2 vocabulary, one sentence, under ~14 words.

   P1. Phrases carry NO emotion of their own. All meaning must
       come from delivery. (Cut: "I really need some water",
       "My locker won't open again", "Is it really hot in here?"
       — each one leaks the answer.)
   P2. Max 6 words. Long lines make students rush and mumble.
   P3. Sayable by anyone, any day, in any mood.
   ============================================================ */

const FAMILIES = {
  EMBARRASSED: { label: 'Embarrassed', emoji: '\u{1F633}' },
  THRILLED:    { label: 'Thrilled',    emoji: '\u{1F929}' },
  TERRIFIED:   { label: 'Terrified',   emoji: '\u{1F631}' },
  EXHAUSTED:   { label: 'Exhausted',   emoji: '\u{1F624}' },
  GUILTY:      { label: 'Guilty',      emoji: '\u{1F62C}' },
  ANNOYED:     { label: 'Annoyed',     emoji: '\u{1F644}' },
  CONFUSED:    { label: 'Confused',    emoji: '\u{1F615}' },
  DISGUSTED:   { label: 'Disgusted',   emoji: '\u{1F922}' },
  NERVOUS:     { label: 'Nervous',     emoji: '\u{1F630}' },
  PROUD:       { label: 'Proud',       emoji: '\u{1F60F}' }
};

const SCENARIOS = [
  /* ---------- EMBARRASSED ---------- */
  { id: 's01', family: 'EMBARRASSED', text: 'You dropped your lunch tray and the whole canteen went silent.' },
  { id: 's02', family: 'EMBARRASSED', text: 'You waved back at someone who was waving at the person behind you.' },
  { id: 's03', family: 'EMBARRASSED', text: 'You just called your teacher “Mum” in front of the whole class.' },

  /* ---------- THRILLED ---------- */
  { id: 's04', family: 'THRILLED', text: 'You got 100% on a test you were certain you had failed.' },
  { id: 's05', family: 'THRILLED', text: 'You just found a 500 baht note in an old jacket pocket.' },
  { id: 's06', family: 'THRILLED', text: 'Your favourite singer just replied to your message online.' },

  /* ---------- TERRIFIED ---------- */
  { id: 's07', family: 'TERRIFIED', text: 'There is an enormous spider on the wall, right beside your head.' },
  { id: 's08', family: 'TERRIFIED', text: 'You are watching a horror film and the jump scare is coming.' },
  { id: 's09', family: 'TERRIFIED', text: 'You are home alone and you just heard glass break downstairs.' },

  /* ---------- EXHAUSTED ---------- */
  { id: 's10', family: 'EXHAUSTED', text: 'You have just finished the 800 metre run and cannot catch your breath.' },
  { id: 's11', family: 'EXHAUSTED', text: 'You are fighting to stay awake in the last class of the day.' },
  { id: 's12', family: 'EXHAUSTED', text: 'You have carried heavy shopping bags up six flights of stairs.' },

  /* ---------- GUILTY ---------- */
  { id: 's13', family: 'GUILTY', text: 'You snapped the teacher’s marker in half and nobody saw you.' },
  { id: 's14', family: 'GUILTY', text: 'You ate the last slice of your sister’s birthday cake.' },
  { id: 's15', family: 'GUILTY', text: 'You forgot your best friend’s birthday and they are walking towards you.' },

  /* ---------- ANNOYED ---------- */
  { id: 's16', family: 'ANNOYED', text: 'Someone has been kicking the back of your chair for ten minutes.' },
  { id: 's17', family: 'ANNOYED', text: 'Your friend has told you exactly the same story three times today.' },
  { id: 's18', family: 'ANNOYED', text: 'The wifi has dropped four times while you were uploading your homework.' },

  /* ---------- CONFUSED ---------- */
  { id: 's19', family: 'CONFUSED', text: 'You are lost in a strange city and your phone just died.' },
  { id: 's20', family: 'CONFUSED', text: 'You have been walking confidently in the wrong direction for ten minutes.' },
  { id: 's21', family: 'CONFUSED', text: 'You opened your bag and somebody else’s books are inside it.' },

  /* ---------- DISGUSTED ---------- */
  { id: 's22', family: 'DISGUSTED', text: 'You can smell something terrible but you do not want to be rude.' },
  { id: 's23', family: 'DISGUSTED', text: 'You bit into your sandwich and the filling has gone off.' },
  { id: 's24', family: 'DISGUSTED', text: 'You stepped into a deep puddle and your socks are completely soaked.' },

  /* ---------- NERVOUS ---------- */
  { id: 's25', family: 'NERVOUS', text: 'You are about to give a speech in front of the whole school.' },
  { id: 's26', family: 'NERVOUS', text: 'You are waiting outside the office because the principal sent for you.' },
  { id: 's27', family: 'NERVOUS', text: 'The teacher is reading out the exam results, starting with yours.' },

  /* ---------- PROUD ---------- */
  { id: 's28', family: 'PROUD', text: 'You just won the school competition and you are trying to stay modest.' },
  { id: 's29', family: 'PROUD', text: 'You warned your friend this would happen, and it has just happened.' },
  { id: 's30', family: 'PROUD', text: 'You are wearing brand new shoes that you think look incredible.' }
];

const PHRASES = [
  { id: 'f01', text: 'What time is it?' },
  { id: 'f02', text: 'I’ll be right back.' },
  { id: 'f03', text: 'Let’s sit over there.' },
  { id: 'f04', text: 'Can you hold this?' },
  { id: 'f05', text: 'It’s on my desk.' },
  { id: 'f06', text: 'I’ll text you later.' },
  { id: 'f07', text: 'Where is my bag?' },
  { id: 'f08', text: 'Are you going home now?' },
  { id: 'f09', text: 'What day is it today?' },
  { id: 'f10', text: 'I’ll meet you outside.' },
  { id: 'f11', text: 'Do you have a pen?' },
  { id: 'f12', text: 'Can I see your notes?' },
  { id: 'f13', text: 'The bell just rang.' },
  { id: 'f14', text: 'It’s on the second floor.' },
  { id: 'f15', text: 'Please open the window.' },
  { id: 'f16', text: 'I really don’t know.' },
  { id: 'f17', text: 'Wait here for a minute.' },
  { id: 'f18', text: 'That is my brother.' },
  { id: 'f19', text: 'It is the blue one.' },
  { id: 'f20', text: 'I finished it last night.' },
  { id: 'f21', text: 'Turn left at the corner.' },
  { id: 'f22', text: 'She said the same thing.' },
  { id: 'f23', text: 'It’s in my other bag.' },
  { id: 'f24', text: 'Give me two minutes.' },
  { id: 'f25', text: 'Come and look at this.' },
  { id: 'f26', text: 'I’m going to the library.' },
  { id: 'f27', text: 'That is the wrong one.' },
  { id: 'f28', text: 'It happens every Tuesday.' },
  { id: 'f29', text: 'My name is on it.' },
  { id: 'f30', text: 'Just tell me later.' }
];

/* Fast lookups */
const SCENARIO_BY_ID = {};
SCENARIOS.forEach(s => { SCENARIO_BY_ID[s.id] = s; });
const PHRASE_BY_ID = {};
PHRASES.forEach(p => { PHRASE_BY_ID[p.id] = p; });

/* ------------------------------------------------------------
   buildOptions(correctId)
   Returns 4 scenario ids, shuffled: the correct one plus three
   distractors drawn from three DIFFERENT emotion families.
   This is the single most important playability rule in the app.
   ------------------------------------------------------------ */
function buildOptions(correctId) {
  const correct = SCENARIO_BY_ID[correctId];
  const otherFamilies = Object.keys(FAMILIES).filter(f => f !== correct.family);
  shuffleArr(otherFamilies);
  const picked = otherFamilies.slice(0, 3).map(fam => {
    const pool = SCENARIOS.filter(s => s.family === fam);
    return pool[Math.floor(Math.random() * pool.length)].id;
  });
  return shuffleArr([correctId, ...picked]);
}

function shuffleArr(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* Draw 2 scenarios from 2 different families, and 2 phrases. */
function drawHand() {
  const fams = shuffleArr(Object.keys(FAMILIES)).slice(0, 2);
  const scenarioIds = fams.map(fam => {
    const pool = SCENARIOS.filter(s => s.family === fam);
    return pool[Math.floor(Math.random() * pool.length)].id;
  });
  const phraseIds = shuffleArr(PHRASES.map(p => p.id)).slice(0, 2);
  return { scenarioIds, phraseIds };
}

if (typeof module !== 'undefined') {
  module.exports = { FAMILIES, SCENARIOS, PHRASES, SCENARIO_BY_ID, PHRASE_BY_ID, buildOptions, drawHand, shuffleArr };
}
