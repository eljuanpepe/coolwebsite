const T = [
  "the forbidden", "an awkward", "that one", "our shared", 
  "a sweaty", "the legendary", "spicy", "no", "every single"
];

const N = [
  "spaghetti", "sock", "emotional damage", 
  "hamster", "anxiety", "burrito", "Honda Civic", "basement",
  "history", "existential dread", "mayonnaise", "garbage", "Wi-Fi"
];

const P = [
  "violently inside", "smelling like", "fighting upon", "hiding behind", 
  "judging", "licking", "in spite of", "awkwardly near", "glued to", 
  "divorced from", "underneath", "betraying"
];

const V_intrans = [
  "touches grass", "shits", "fucks", "vibes", "disassociates", "screams internally", 
  "evaporates", "dies", "flops"
];

const V_trans = [
  "microwaves", "ghosts", "slaps", "dies", "downloads", 
  "pirates", "worships", "sues"
];

const popularPeople = [
  "Elon Musk", "Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Jeff Bezos",
  "Albert Einstein", "Stephen Hawking", "Neil deGrasse Tyson", "Carl Sagan",
  "Marie Curie", "Nikola Tesla", "Leonardo da Vinci", "Isaac Newton", 
  "Benjamin Franklin", "Galileo Galilei", "Aristotle", "Plato", "Socrates", "Confucius"
];

const MAX_DEPTH = 10;

const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

function pp(depth = 0) {
  return `${randomFrom(P)} ${np(depth + 1)}`;
}

function np(depth = 0) {
  const addModifier = Math.random() > 0.1 || depth === 0;
  const base = addModifier ? `${randomFrom(T)} ` : "";
  let phrase = `${base}${randomFrom(N)}`;
  
  const ppChance = Math.random() > depth / 10 && depth < MAX_DEPTH;
  if (ppChance) {
    phrase += ` ${pp(depth + 1)}`;
  }
  
  return phrase;
}

function vp(depth = 0) {
  const useTransitive = Math.random() <= 0.2;
  let phrase = useTransitive 
    ? `${randomFrom(V_trans)} ${np(depth + 1)}`
    : randomFrom(V_intrans);
  
  const ppChance = Math.random() > depth / 10 && depth < MAX_DEPTH;
  if (ppChance) {
    phrase += ` ${pp(depth + 1)}`;
  }
  
  return phrase;
}

function generatePoem() {
  const text = `${np()} ${vp()}`;
  
  const poem = document.createElement('h1');
  poem.innerText = text;
  
  const credits = document.createElement('p');
  credits.innerText = `- ${randomFrom(popularPeople)}`;
  
  document.body.prepend(credits);
  document.body.prepend(poem);
}

function setupAudioControls() {
  const audio = document.querySelector("audio");
  const playButton = document.querySelector("button");
  
  if (playButton && audio) {
    playButton.onclick = () => audio.play();
  }
}

generatePoem();
setupAudioControls();