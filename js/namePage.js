// A handy pen for generating random project names. Intended to be used instead of generic phrases like "test project 123" etc. Words orignially taken from Glitch friendly word repo and expanded occasionally.

const name = document.querySelector("#name");
const update = document.querySelector("#generate");

const words = [
  "aerie", "alliance", "assembly", "bale", "band",
  "barrel", "batch", "bed", "bevy", "board", "brood",
  "building", "bunch", "business", "cackle", "camp",
  "cast", "catch", "cauldron", "charm", "chattering",
  "chime", "choir", "circle", "clan", "class",
  "clattering", "cloud", "clowder", "club", "cluster",
  "coalition", "colony", "combination", "committee", 
  "company", "conglomerate", "congregation", "congress",
  "conspiracy", "convocation", "corporation", "coven",
  "crew", "culture", "dazzle", "descent", "doctrine",
  "drift", "drove", "exaltation", "faction", "faculty",
  "family", "flight", "fling", "flock", "flush", "gaggle",
  "galaxy", "game", "gathering", "gobble", "group", "gulp",
  "herd", "hive", "intrigue", "jury", "kettle", "kit",
  "knot", "labor", "lamentation", "league", "lease", "lineup",
  "litter", "murmuration", "mustering", "nest", "orchestra",
  "order", "organization", "ostentation", "outfit", "pace",
  "pack", "pandemonium", "parade", "parliament", "party",
  "phalanx", "piteousness", "pod", "posse", "prickle",
  "pride", "quiver", "raffle", "romp", "rookery", "sawt",
  "school", "scoop", "scream", "scury", "sedge", "sentence",
  "shadow", "shiver", "shrewdness", "sleuth", "sloth",
  "squad", "staff", "suit", "swarm", "team", "thunder", "tower",
  "troop", "troupe", "trust", "unit", "venue", "whisp", "whiting",
  "wisdom", "zeal"
];

const getWord = () => {
  const raw = words[Math.floor(Math.random() * Math.floor(words.length))];
  const stylish = raw.charAt(0).toUpperCase() + raw.slice(1);; 
  return stylish;
}

const updateWords = () => {
  name.value = `${getWord()} ${getWord()} ${getWord()}`;
}

update.addEventListener("click", function(event) {
  updateWords();
  console.log("reacheds")
});

copy.addEventListener("click", function(event) {
  name.select();
  document.execCommand("copy");
})

updateWords();