const generations = [
  {
    searchable: "beckoner-of-dreams",
    name: "Beckoner of Dreams",
    type: "mystic",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/beckoner-of-dreams.png",
    effect:
      "Arrive - Expel any number of spells with Shard Drain from your discard zone: Take control of target unit with cost equal to the number of cards you expelled.",
  },
  {
    searchable: "black-rose-knight",
    name: "Black Rose Knight",
    type: "rose knight",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/black-rose-knight.jpg",
    effect:
      "Brawler\nArrive - You may equip target Gear from a unit you control to this card.\nWhile this card is equipped with a Gear, when this card or a unit adjacent to this card attacks - You may draw one card then discard one card.",
  },
  {
    searchable: "ella-the-sky-huntress",
    name: "Ella, the Sky Huntress",
    type: "skyraider",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/ella-the-sky-huntress.jpg",
    effect:
      "Arrive - You may discard one Skyraider unit or Airship unit from your hand: If you do, target unit loses all abilities and cannot attack as long as you control this card.",
  },
  {
    searchable: "harbinger-of-vabriel",
    name: "Harbinger of Vabriel",
    type: "legendary entity",
    element: "argent",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/harbinger-of-vabriel.png",
    effect:
      "Guardian\nThis card cannot be targeted by spells.\nFlip your champion or your spirit face-down: Restore one of your destroyed towers with the same element as the card you flipped face-down.",
  },
  {
    searchable: "melody-of-ages",
    name: "Melody of Ages",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/melody-of-ages.png",
    effect:
      "Target unit or augment loses all abilities. Then, if there is a destroyed Air tower, destroy that card.",
  },
  {
    searchable: "return-to-slumber",
    name: "Return to Slumber",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/return-to-slumber.png",
    effect:
      "Instacast\nReturn up to X+1 target units to the top of their owner's deck in any order. (X equals the number of destroyed Water towers.)",
  },
  {
    searchable: "serena-witch-of-sealing",
    name: "Serena, Witch of Sealing",
    type: "witch",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/serena-witch-of-sealing.jpg",
    effect:
      "Arrive - You may reveal two different spells from your hand: If you do, target unit your opponent controls cannot use Guardian this turn.",
  },
  {
    searchable: "sigil-of-exile",
    name: "Sigil of Exile",
    element: "argent",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/sigil-of-exile.jpg",
    effect:
      "Exhaust, Pay (1): Put a counter on this card.\nExhaust, Sacrifice this card: Expel target unit your opponent controls with cost X. (X equals the number of counters this card had.)",
  },
  {
    searchable: "sigil-of-loss",
    name: "Sigil of Loss",
    element: "argent",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/sigil-of-loss.jpg",
    effect:
      "Exhaust, Pay (1): Put a counter on this card.\nExhaust, Sacrifice this card: Expel X target cards in your opponent's discard zone. (X equals the number of counters this card had.)",
  },
  {
    searchable: "sigil-of-renewal",
    name: "Sigil of Renewal",
    element: "argent",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/sigil-of-renewal.jpg",
    effect:
      "Exhaust, Pay (1): Put a counter on this card.\nExhaust, Sacrifice this card: Add target card with cost X from your discard zone to your hand. (X equals the number of counters this card had.)",
  },
  {
    searchable: "slate-gargoyle",
    name: "Slate Gargoyle",
    type: "gargoyle",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/slate-gargoyle.jpg",
    effect:
      "When this card attacks - Add a unit with cost (5) from your deck to your hand.\nRuined - You may Offering 5 (Expel five units from your discard zone.): If you do, put one unit with cost (5) from your hand into play.",
  },
  {
    searchable: "songstress-of-the-cloudsea",
    name: "Songstress of the Cloudsea",
    type: "mystic",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/songstress-of-the-cloudsea.png",
    effect:
      "Exhaust: Reveal the top three cards of your deck. You may add a unit among them to your hand. If two or more units have returned to your hand from the field this turn, you may put that unit into play instead. Put the rest into your discard zone.",
  },
  {
    searchable: "spawn-of-bahamute",
    name: "Spawn of Bahamute",
    type: "dragon",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/spawn-of-bahamute.jpg",
    effect:
      'Arrive - You may reveal two Dragon units from your hand: If you do, search your deck for one "Altar of the Dragon God" and add it to your hand.',
  },
  {
    searchable: "taphael-fallen-celestial-of-rottar",
    name: "Taphael, Fallen Celestial of Rottar",
    type: "legendary entity",
    element: "argent",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/taphael-fallen-celestial-of-rottar.png",
    effect:
      "Brawler (This card may attack active and exhausted units the turn it comes into play.)\nArrive - Choose one.\n* Flip your champion face-down: Put a unit from your hand into play.\n* Flip your spirit face-down: Put target unit from your discard zone into play.",
  },
  {
    searchable: "the-greatest-heist",
    name: "The Greatest Heist",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/the-greatest-heist.png",
    effect:
      "Arrive - Expel up to X+1 target cards from your opponent's discard zone. (X equals the number of destroyed Dark towers.)\nWhile this card is on the field, you may play cards expelled by this effect as if they were in your hand.",
  },
  {
    searchable: "thief-of-valoi",
    name: "Thief of Valoi",
    type: "thief",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/thief-of-valoi.png",
    effect:
      "Exhaust, Offering 3 (Expel three units from your discard zone.): Expel target unit from your opponent's discard zone. This turn you may play that card as if it was in your hand.",
  },
  {
    searchable: "tower-of-surging-flames",
    name: "Tower of Surging Flames",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/tower-of-surging-flames.jpg",
    effect:
      "Use only if your spirit or champion is Fire.\nWhen this card is destroyed: You may deal 1500 to all units your opponent controls. Use this effect only if you have more destroyed towers than your opponent.",
  },
  {
    searchable: "tower-of-surging-gales",
    name: "Tower of Surging Gales",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/tower-of-surging-gales.jpg",
    effect:
      "Use only if your spirit or champion is Air.\nWhen this card is destroyed: You may put the top card of your shard deck into play. Use this effect only if you have more destroyed towers than your opponent.",
  },
  {
    searchable: "tower-of-surging-radiance",
    name: "Tower of Surging Radiance",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/tower-of-surging-radiance.jpg",
    effect:
      "Use only if your spirit or champion is Light.\nWhen this card is destroyed: You may put a unit with cost (3) or less from your hand into play. Use this effect only if you have more destroyed towers than your opponent.",
  },
  {
    searchable: "tower-of-surging-shadows",
    name: "Tower of Surging Shadows",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/tower-of-surging-shadows.jpg",
    effect:
      "Use only if your spirit or champion is Dark.\nWhen this tower is destroyed: You may return a unit with cost (3) or less from your discard zone to the field. Use this effect only if you have more destroyed towers than your opponent.",
  },
  {
    searchable: "tower-of-surging-torrents",
    name: "Tower of Surging Torrents",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/tower-of-surging-torrents.jpg",
    effect:
      "Use only if your spirit or champion is Water.\nWhen this card is destroyed: You may search your deck for a spell and add it to your hand. Use this effect only if you have more destroyed towers than your opponent.",
  },
  {
    searchable: "voidfire-desolation",
    name: "Voidfire Desolation",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/voidfire-desolation.png",
    effect:
      "Destroy up to one of each.\n* Target unit.\n* Target augment.\n* Target shard.\n* Target tower.",
  },
  {
    searchable: "voidfire-dragon",
    name: "Voidfire Dragon",
    type: "dragon",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/voidfire-dragon.jpg",
    effect:
      'While there is a destroyed Fire tower, expel two or more Fire units from your hand whose combined cost is at least 6: Put this card from your discard zone into play. Expel it when it leaves the field.\nRuined - Add target expelled Fire unit you own, except "Voidfire Dragon", to your hand.',
  },
  {
    searchable: "vrscika-the-scorpion-hammer",
    name: "Vrscika, the Scorpion Hammer",
    type: "gear",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/vrscika-the-scorpion-hammer.png",
    effect:
      " Equip to target unit.\nIt gets +1000.\nIf the equipped unit destroys a unit with Guardian in battle - You may switch the equipped unit to active.",
  },
  {
    searchable: "warden-of-vrscika",
    name: "Warden of Vrscika",
    type: "knight",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/warden-of-vrscika.png",
    effect:
      'Brawler (This card may attack active and exhausted units the turn it comes into play.)\nArrive - If there is a destroyed Light tower, search your deck for "Vrscika, the Scorpion Hammer" and equip it to this card.',
  },
];

const generations2 = [
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",

    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
  {
    image: "",
    element: "",
    cost: "",
    name: "",
    type: "",
    subtype: "",
    number: "",
  },
];

generations.forEach((value, index) => {
  generations2[index].image =
    "images/Expansion-Pack-Generations/" + value.searchable + ".webp";
  generations2[index].name = value.name;
  generations2[index].subtype = value.type;
  generations2[index].element = value.element;
  generations2[index].effect = value.effect;
  generations2[index].type = "Unit";
  if (index + 1 < 10) {
    generations2[index].number = "0" + (index + 1) + "/25";
  }
});
console.log(generations2);
