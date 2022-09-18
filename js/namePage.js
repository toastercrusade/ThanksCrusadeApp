// A handy pen for generating random project names. Intended to be used instead of generic phrases like "test project 123" etc. Words orignially taken from Glitch friendly word repo and expanded occasionally.

const name = document.querySelector("#name");
const update = document.getElementById("#generate");

const miscWords = [
  "aerie",
  "alliance",
  "assembly",
  "bale",
  "band",
  "barrel",
  "batch",
  "bed",
  "bevy",
  "board",
  "brood",
  "building",
  "bunch",
  "business",
  "cackle",
  "camp",
  "cast",
  "catch",
  "cauldron",
  "charm",
  "chattering",
  "chime",
  "choir",
  "circle",
  "clan",
  "class",
  "clattering",
  "cloud",
  "clowder",
  "club",
  "cluster",
  "coalition",
  "colony",
  "combination",
  "committee",
  "company",
  "conglomerate",
  "congregation",
  "congress",
  "conspiracy",
  "convocation",
  "corporation",
  "coven",
  "crew",
  "culture",
  "dazzle",
  "descent",
  "doctrine",
  "drift",
  "drove",
  "exaltation",
  "faction",
  "faculty",
  "family",
  "flight",
  "fling",
  "flock",
  "flush",
  "gaggle",
  "galaxy",
  "game",
  "gathering",
  "gobble",
  "group",
  "gulp",
  "herd",
  "hive",
  "intrigue",
  "jury",
  "kettle",
  "kit",
  "knot",
  "labor",
  "lamentation",
  "league",
  "lease",
  "lineup",
  "litter",
  "murmuration",
  "mustering",
  "nest",
  "orchestra",
  "order",
  "organization",
  "ostentation",
  "outfit",
  "pace",
  "pack",
  "pandemonium",
  "parade",
  "parliament",
  "party",
  "phalanx",
  "piteousness",
  "pod",
  "posse",
  "prickle",
  "pride",
  "quiver",
  "raffle",
  "romp",
  "rookery",
  "sawt",
  "school",
  "scoop",
  "scream",
  "scury",
  "sedge",
  "sentence",
  "shadow",
  "shiver",
  "shrewdness",
  "sleuth",
  "sloth",
  "squad",
  "staff",
  "suit",
  "swarm",
  "team",
  "thunder",
  "tower",
  "troop",
  "troupe",
  "trust",
  "unit",
  "venue",
  "whisp",
  "whiting",
  "wisdom",
  "zeal",
];

const busiWords = [
    "corp",
    "works",
    "enterprises",
    "firm",
    "practice",
    "shop",
    "business",
    "enterprise",
    "trust",
    "trade",
    "company",
    "organization",
    "partners",
    "outfit",
    "store",
    "establishment",
    "market",
    "commerce",
    "exchange",
    "dealings",
    "sales",
    "place",
    "center",
    "mart",
    "nook",
    "trove",
];

const techWords = [
    "future ",
    "digi-",
    "algo",
    "tech ",
    "net ",
    "auto",
    "mecha-",
    "robo-",
    "electric ",
    "sci-",
    "industrial ",
    "infinity ",
    "one ",
    "i",
];

const designWords = [
    "craft ",
    "art ",
    "artistry ",
    "abstract ",
    "illustration ",
    "illustrate ",
    "drawn ",
    "carved ",
    "canvas ",
    "painted ",
    "woven",
    "sewn ",
    "designed ",
    "arti-"
];

const foodWords = [
    "food ",
    "cooked ",
    "cooks ",
    "meal ",
    "feed ",
    "fed ",
    "provision ",
    "fodder ",
    "chow ",
    "grub ",
    "ration ",
    "nutrition ",
    "nutri-",
    "slop ",
    "groceries ",
    "bite ",
    "snack ",
    "pantry ",
    "menu ",
    "feast ",
    "nourishment ",
    "sustenance ",
    "delectable ",
    "sweet",
    "salty ",
    "savory ",
    "sour ",
    "salted ",
    "sugary ",
    "cheesy ",
    "treat ",
];

const finaWords = [
    "finance ",
    "money ",
    "moolah ",
    "dinero ",
    "bill ",
    "cash ",
    "capital ",
    "wage ",
    "coin ",
    "loot ",
    "treasure ",
    "dough ",
    "riches ",
    "rich ",
    "wad ",
    "pay ",
    "fund ",
    "check ",
    "bucks ",
    "gold ",
    "silver",
];

const getWord = () => {
  var text = $("#typy :selected").text();
  if (text == "Misc company (none of these options fit you)") {
    const raw = miscWords[Math.floor(Math.random() * Math.floor(miscWords.length))];
    const raw2 = busiWords[Math.floor(Math.random() * Math.floor(busiWords.length))];
    const stylish = raw.charAt(0).toUpperCase() + raw.slice(1);
    const stylish2 = raw2.charAt(0).toUpperCase() + raw2.slice(1);
    const names = document.getElementById("newNames");
    names.innerHTML = stylish + " " +stylish2;
  } else if (text == "Tech company"){
    const raw = techWords[Math.floor(Math.random() * Math.floor(techWords.length))];
    const raw2 = busiWords[Math.floor(Math.random() * Math.floor(busiWords.length))];
    const stylish = raw.charAt(0).toUpperCase() + raw.slice(1);
    const stylish2 = raw2.charAt(0).toUpperCase() + raw2.slice(1);
    const names = document.getElementById("newNames");
    names.innerHTML = stylish + stylish2;
  } else if (text == "Food company"){
    const raw = foodWords[Math.floor(Math.random() * Math.floor(foodWords.length))];
    const raw2 = busiWords[Math.floor(Math.random() * Math.floor(busiWords.length))];
    const stylish = raw.charAt(0).toUpperCase() + raw.slice(1);
    const stylish2 = raw2.charAt(0).toUpperCase() + raw2.slice(1);
    const names = document.getElementById("newNames");
    names.innerHTML = stylish + stylish2;
  } else if (text == "Design company"){
    const raw = designWords[Math.floor(Math.random() * Math.floor(designWords.length))];
    const raw2 = busiWords[Math.floor(Math.random() * Math.floor(busiWords.length))];
    const stylish = raw.charAt(0).toUpperCase() + raw.slice(1);
    const stylish2 = raw2.charAt(0).toUpperCase() + raw2.slice(1);
    const names = document.getElementById("newNames");
    names.innerHTML = stylish + stylish2;
  } else if (text == "Financial company"){
    const raw = finaWords[Math.floor(Math.random() * Math.floor(finaWords.length))];
    const raw2 = busiWords[Math.floor(Math.random() * Math.floor(busiWords.length))];
    const stylish = raw.charAt(0).toUpperCase() + raw.slice(1);
    const stylish2 = raw2.charAt(0).toUpperCase() + raw2.slice(1);
    const names = document.getElementById("newNames");
    names.innerHTML = stylish + stylish2;
  } else if (text != "Which kind of company are you?") {
    console.log("Broken");
  };
};
