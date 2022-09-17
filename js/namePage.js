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
];

const getWord = () => {
  const raw = miscWords[Math.floor(Math.random() * Math.floor(miscWords.length))];
  const raw2 = miscWords[Math.floor(Math.random() * Math.floor(miscWords.length))];
  const raw3 = miscWords[Math.floor(Math.random() * Math.floor(miscWords.length))];
  var text = $("#typy :selected").text();
  if (text == "Misc company (none of these options describe you)") {
    const stylish = raw.charAt(0).toUpperCase() + raw.slice(1);
    const stylish2 = raw2.charAt(0).toUpperCase() + raw2.slice(1);
    const stylish3 = raw3.charAt(0).toUpperCase() + raw3.slice(1);
    const names = document.getElementById("newNames");
    names.innerHTML = stylish + " " + stylish2 + " " + stylish3;
  } else if (text == "Tech company"){
    const stylish = raw.charAt(0).toUpperCase() + raw.slice(1);
    const stylish2 = raw2.charAt(0).toUpperCase() + raw2.slice(1);
    const stylish3 = raw3.charAt(0).toUpperCase() + raw3.slice(1);
    const names = document.getElementById("newNames");
    names.innerHTML = stylish + " " + stylish2 + " " + stylish3;
  } else if (text == "Food company"){
    const stylish = raw.charAt(0).toUpperCase() + raw.slice(1);
    const stylish2 = raw2.charAt(0).toUpperCase() + raw2.slice(1);
    const stylish3 = raw3.charAt(0).toUpperCase() + raw3.slice(1);
    const names = document.getElementById("newNames");
    names.innerHTML = stylish + " " + stylish2 + " " + stylish3;
  } else if (text == "Design company"){
    const stylish = raw.charAt(0).toUpperCase() + raw.slice(1);
    const stylish2 = raw2.charAt(0).toUpperCase() + raw2.slice(1);
    const stylish3 = raw3.charAt(0).toUpperCase() + raw3.slice(1);
    const names = document.getElementById("newNames");
    names.innerHTML = stylish + " " + stylish2 + " " + stylish3; 
  } else if (text == "Financial company"){
    const stylish = raw.charAt(0).toUpperCase() + raw.slice(1);
    const stylish2 = raw2.charAt(0).toUpperCase() + raw2.slice(1);
    const stylish3 = raw3.charAt(0).toUpperCase() + raw3.slice(1);
    const names = document.getElementById("newNames");
    names.innerHTML = stylish + " " + stylish2 + " " + stylish3;
  } else {
    console.log("broken");
  };
  
  
  const busType = document.getElementById("busType");
  busType.innerHTML = text + " ";
};
