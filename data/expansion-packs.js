export const generations = [
  {
    image: "images/Expansion-Pack-Generations/amateur-witch.webp",
    element: "water",
    cost: 1,
    power: 1000,
    name: "Amateur Witch",
    type: "Unit",
    number: "01/25",
  },
  {
    image: "images/Expansion-Pack-Generations/arbor-carbuncle.webp",
    element: "air",
    cost: 1,
    power: 500,
    name: "Arbor Carbuncle",
    type: "Unit",
    subtype: "beast",
    number: "02/25",
    effect:
      'When this card is returned to your hand from the field - You may search your deck for an "Arbor Carbuncle" and add it to your hand.\n' +
      'During your turn, expel this card and two other "Arbor Carbuncle" from your hand: Draw two cards and switch up to two of your shards to active.',
  },
  {
    image: "images/Expansion-Pack-Generations/ariana-adventurer-of-argos.webp",
    element: "air",
    name: "Ariana, Adventurer of Argos",
    type: "Champion",
    number: "03/25",
    effect: `At the start of the game (after mulligans) you may add one "Kala, Trusty Companion" and/or one "Ariana's Amulet" from your deck to your hand.`,
  },
  {
    image: "images/Expansion-Pack-Generations/auron-the-golden-rose.webp",
    element: "light",
    name: "Auron, the Golden Rose",
    type: "Champion",
    number: "04/25",
    effect:
      "Exhaust, Discard one Knight or Gear from your hand: Exhaust target unit.",
  },
  {
    image: "images/Expansion-Pack-Generations/burning-blitzer.webp",
    element: "fire",
    cost: 4,
    power: 1500,
    name: "Burning Blitzer",
    type: "Unit",
    number: "05/25",
    effect:
      "Quickness, Destroyer\n" +
      "This card cannot attack unless you've attacked with at least two units this turn.",
  },
  {
    image: "images/Expansion-Pack-Generations/catastrophe-demon.webp",
    element: "dark",
    cost: 5,
    power: 3000,
    name: "Catastrophe Demon",
    type: "Unit",
    subtype: "demon",
    number: "06/25",
    effect:
      "Destroyer\nYour opponent's units and shards come into play exhausted.",
  },
  {
    image: "images/Expansion-Pack-Generations/corona-the-spirit-ruby.webp",
    element: "argent",
    name: "Corona, the Spirit Ruby",
    type: "Legendary Shard",
    number: "07/25",
    effect:
      "If you control another legendary shard send this card to the discard zone.\n" +
      "Exhaust: Produce (1).\n" +
      "Exhaust, flip your spirit face-down: Destroy target unit.",
  },
  {
    image: "images/Expansion-Pack-Generations/crystal-dimensional-dragon.webp",
    element: "water",
    cost: 10,
    power: 4000,
    name: "Crystal Dimensional Dragon",
    type: "Unit",
    subtype: "dragon",
    number: "08/25",
    effect:
      "If you've played five or more Water spells this turn, this card costs (0) to play.\n" +
      "Arrive - If you played this card from your hand, your opponent cannot put units into play or play spells on their next turn.",
  },
  {
    image: "images/Expansion-Pack-Generations/ergon-the-tragic-gargoyle.webp",
    element: "dark",
    name: "Ergon, the Tragic Gargoyle",
    type: "Champion",
    number: "09/25",
    effect:
      "Exhaust: Send the top two cards of your deck to the discard zone.\n" +
      "Exhaust, Pay (1): Put target unit from your discard zone on top of your deck.",
  },
  {
    image: "images/Expansion-Pack-Generations/failed-golem-3.webp",
    element: "dark",
    cost: 4,
    power: 3000,
    name: "Failed Golem #3",
    type: "Unit",
    subtype: "golem",
    number: "10/25",
  },
  {
    image: "images/Expansion-Pack-Generations/fizzy-the-spirit-sapphire.webp",
    element: "argent",
    name: "Fizzy, the Spirit Sapphire",
    type: "Legendary Shard",
    number: "11/25",
    effect:
      "If you control another legendary shard send this card to the discard zone.\n" +
      "Exhaust: Produce (1).\n" +
      "Exhaust, flip your spirit face-down: Draw two cards.",
  },
  {
    image: "images/Expansion-Pack-Generations/gillian-the-witch-queen.webp",
    element: "water",
    name: "Gillian, the Witch Queen",
    type: "Champion",
    number: "12/25",
    effect:
      "Exhaust, Reveal any number of spells from your hand: Reveal the top card of your deck. If it's a spell with cost equal to or less than the number of cards revealed from your hand, add it to your hand.",
  },
  {
    image: "images/Expansion-Pack-Generations/greathawk-of-cloudsea.webp",
    element: "air",
    cost: 3,
    power: 1500,
    name: "Greathawk of Cloudsea",
    type: "Unit",
    subtype: "beast",
    number: "13/25",
    effect:
      "Arrive - If there is a destroyed Air tower, you can exhaust target unit and return another target unit to its owner's hand.",
  },
  {
    image: "images/Expansion-Pack-Generations/igneous-dragon.webp",
    element: "fire",
    cost: 5,
    power: 4000,
    name: "Igneous Dragon",
    type: "Unit",
    subtype: "dragon",
    number: "14/25",
  },
  {
    image:
      "images/Expansion-Pack-Generations/kite-kyte-the-spirit-emerald.webp",
    element: "argent",
    name: "Kite, the Spirit Emerald",
    type: "Legendary Shard",
    number: "15/25",
    effect:
      "If you control another legendary shard send this card to the discard zone.\n" +
      "Exhaust: Produce (1).\n" +
      "Exhaust, flip your spirit face-down: Switch up to two of your shards to active.",
  },
  {
    image:
      "images/Expansion-Pack-Generations/lucient-guardian-of-vigilance.webp",
    element: "light",
    cost: 5,
    power: 3000,
    name: "Lucient, Guardian of Vigilance",
    type: "Unit",
    number: "16/25",
    effect:
      "Guardian\n" +
      "Arrive - If there is a destroyed Light tower, switch up to two target exhausted Light units to active.",
  },
  {
    image:
      "images/Expansion-Pack-Generations/metaial-the-sealed-celestial.webp",
    element: "argent",
    cost: 8,
    power: 5000,
    name: "Metaial, the Sealed Celestial",
    type: "Unit",
    subtype: "legendary entity",
    number: "17/25",
    effect:
      "Destroyer\n" +
      "This card cannot be targeted by unit abilities. Flip your champion and spirit face-down: Destroy all units and augments your opponent controls.",
  },
  {
    image: "images/Expansion-Pack-Generations/nobe-the-shadow-guardian.webp",
    element: "dark",
    cost: 4,
    power: 2500,
    name: "Nobe the Shadow Guardian",
    type: "Unit",
    subtype: "gargoyle",
    number: "18/25",
    effect:
      "Guardian\n" +
      "Arrive - If there is a destroyed Dark tower, target unit gets -2000 this turn.",
  },
  {
    image: "images/Expansion-Pack-Generations/raging-shardbeast.webp",
    element: "argent",
    cost: 1,
    power: 2000,
    name: "Raging Shardbeast",
    type: "Unit",
    subtype: "beast",
    number: "19/25",
    effect: " You cannot play cards with cost (3) or more.",
  },
  {
    image: "images/Expansion-Pack-Generations/rainbow-knight.webp",
    element: "light",
    cost: 3,
    power: 2500,
    name: "Rainbow Knight",
    type: "Unit",
    subtype: "knight",
    number: "20/25",
  },
  {
    image: "images/Expansion-Pack-Generations/raine-mournful-commander.webp",
    element: "fire",
    name: "Raine, Mournful Commander",
    type: "Champion",
    number: "21/25",
    effect:
      "Exhaust, Expel up to two units from your hand: Deal damage to target unit equal to the number of cards expelled x500.",
  },
  {
    image: "images/Expansion-Pack-Generations/saint-of-sacred-regalia.webp",
    element: "light",
    cost: 2,
    power: 1000,
    name: "Saint of Sacred Regalia",
    type: "Unit",
    number: "22/25",
    effect:
      "Arrive - If you control less units than your opponent, you may discard a card. If you do, search your deck for a Gear with cost (1) or less and equip it to this card.",
  },
  {
    image: "images/Expansion-Pack-Generations/skytree-initiate.webp",
    element: "air",
    cost: 2,
    power: 1500,
    name: "Skytree Initiate",
    type: "Unit",
    subtype: "skyraider",
    number: "23/25",
  },
  {
    image: "images/Expansion-Pack-Generations/stormcaster-of-azure-tower.webp",
    element: "water",
    cost: 6,
    power: 4000,
    name: "Stormcaster of Azure Tower",
    type: "Unit",
    number: "24/25",
    effect:
      "Destroyer\n" +
      "Arrive - If there is a destroyed Water Tower, return up to two target Units your opponent controls to the bottom of their owner's deck in any order.",
  },
  {
    image: "images/Expansion-Pack-Generations/vehemont-crimson-guardian.webp",
    element: "fire",
    cost: 5,
    power: 3000,
    name: "Vehemont, Crimson Guardian",
    type: "Unit",
    subtype: "dragon",
    number: "25/25",
    effect: "Arrive - If there is a destroyed Fire tower, destroy target unit.",
  },
];

export const genesis = [
  {
    image: "images/Expansion-Pack-Genesis/beckoner-of-dreams.webp",
    element: "water",
    cost: 5,
    power: 2000,
    name: "Beckoner of Dreams",
    type: "Unit",
    subtype: "mystic",
    number: "01/25",
    effect:
      "Arrive - Expel any number of spells with Shard Drain from your discard zone: Take control of target unit with cost equal to the number of cards you expelled.",
  },
  {
    image: "images/Expansion-Pack-Genesis/black-rose-knight.webp",
    element: "light",
    cost: 3,
    power: 1500,
    name: "Black Rose Knight",
    type: "Unit",
    subtype: "rose knight",
    number: "02/25",
    effect:
      "Brawler\n" +
      "Arrive - You may equip target Gear from a unit you control to this card.\n" +
      "While this card is equipped with a Gear, when this card or a unit adjacent to this card attacks - You may draw one card then discard one card.",
  },
  {
    image: "images/Expansion-Pack-Genesis/ella-the-sky-huntress.webp",
    element: "air",
    cost: 2,
    power: 1000,
    name: "Ella, the Sky Huntress",
    type: "Unit",
    subtype: "skyraider",
    number: "03/25",
    effect:
      "Arrive - You may discard one Skyraider unit or Airship unit from your hand: If you do, target unit loses all abilities and cannot attack as long as you control this card.",
  },
  {
    image: "images/Expansion-Pack-Genesis/harbinger-of-vabriel.webp",
    element: "argent",
    cost: 8,
    power: 5000,
    name: "Harbinger of Vabriel",
    type: "Unit",
    subtype: "legendary entity",
    number: "04/25",
    effect:
      "Guardian\n" +
      "This card cannot be targeted by spells.\n" +
      "Flip your champion or your spirit face-down: Restore one of your destroyed towers with the same element as the card you flipped face-down.",
  },
  {
    image: "images/Expansion-Pack-Genesis/melody-of-ages.webp",
    element: "air",
    cost: 2,
    name: "Melody of Ages",
    type: "Spell",
    number: "05/25",
    effect:
      "Target unit or augment loses all abilities. Then, if there is a destroyed Air tower, destroy that card.",
  },
  {
    image: "images/Expansion-Pack-Genesis/return-to-slumber.webp",
    element: "water",
    cost: 4,
    name: "Return to Slumber",
    type: "Spell",
    number: "06/25",
    effect:
      "Instacast\n" +
      "Return up to X+1 target units to the top of their owner's deck in any order. (X equals the number of destroyed Water towers.)",
  },
  {
    image: "images/Expansion-Pack-Genesis/serena-witch-of-sealing.webp",
    element: "water",
    cost: 3,
    power: 2000,
    name: "Serena, Witch of Sealing",
    type: "Unit",
    subtype: "witch",
    number: "07/25",
    effect:
      "Arrive - You may reveal two different spells from your hand: If you do, target unit your opponent controls cannot use Guardian this turn.",
  },
  {
    image: "images/Expansion-Pack-Genesis/sigil-of-exile.webp",
    element: "argent",
    cost: 1,
    name: "Sigil of Exile",
    type: "Augment",
    number: "08/25",
    effect:
      "Exhaust, Pay (1): Put a counter on this card.\n" +
      "Exhaust, Sacrifice this card: Expel target unit your opponent controls with cost X. (X equals the number of counters this card had.)",
  },
  {
    image: "images/Expansion-Pack-Genesis/sigil-of-loss.webp",
    element: "argent",
    cost: 1,
    name: "Sigil of Loss",
    type: "Augment",
    number: "09/25",
    effect:
      "Exhaust, Pay (1): Put a counter on this card.\n" +
      "Exhaust, Sacrifice this card: Expel X target cards in your opponent's discard zone. (X equals the number of counters this card had.)",
  },
  {
    image: "images/Expansion-Pack-Genesis/sigil-of-renewal.webp",
    element: "argent",
    cost: 1,
    name: "Sigil of Renewal",
    type: "Augment",
    number: "10/25",
    effect:
      "Exhaust, Pay (1): Put a counter on this card.\n" +
      "Exhaust, Sacrifice this card: Add target card with cost X from your discard zone to your hand. (X equals the number of counters this card had.)",
  },
  {
    image: "images/Expansion-Pack-Genesis/slate-gargoyle.webp",
    element: "dark",
    cost: 6,
    power: 3500,
    name: "Slate Gargoyle",
    type: "Unit",
    subtype: "gargoyle",
    number: "11/25",
    effect:
      "When this card attacks - Add a unit with cost (5) from your deck to your hand.\n" +
      "Ruined - You may Offering 5 (Expel five units from your discard zone.): If you do, put one unit with cost (5) from your hand into play.",
  },
  {
    image: "images/Expansion-Pack-Genesis/songstress-of-the-cloudsea.webp",
    element: "air",
    cost: 6,
    power: 3000,
    name: "Songstress of the Cloudsea",
    type: "Unit",
    subtype: "mystic",
    number: "12/25",
    effect:
      "Exhaust: Reveal the top three cards of your deck. You may add a unit among them to your hand. If two or more units have returned to your hand from the field this turn, you may put that unit into play instead. Put the rest into your discard zone.",
  },
  {
    image: "images/Expansion-Pack-Genesis/spawn-of-bahamute.webp",
    element: "fire",
    cost: 3,
    power: 2000,
    name: "Spawn of Bahamute",
    type: "Unit",
    subtype: "dragon",
    number: "13/25",
    effect:
      'Arrive - You may reveal two Dragon units from your hand: If you do, search your deck for one "Altar of the Dragon God" and add it to your hand.',
  },
  {
    image:
      "images/Expansion-Pack-Genesis/taphael-fallen-celestial-of-rottar.webp",
    element: "argent",
    cost: 8,
    power: 5000,
    name: "Taphael, Fallen Celestial of Rottar",
    type: "Unit",
    subtype: "legendary entity",
    number: "14/25",
    effect:
      "Brawler (This card may attack active and exhausted units the turn it comes into play.)\n" +
      "Arrive - Choose one.\n" +
      "* Flip your champion face-down: Put a unit from your hand into play.\n" +
      "* Flip your spirit face-down: Put target unit from your discard zone into play.",
  },
  {
    image: "images/Expansion-Pack-Genesis/the-greatest-heist.webp",
    element: "dark",
    cost: 3,
    name: "The Greatest Heist",
    type: "Augment",
    number: "15/25",
    effect:
      "Arrive - Expel up to X+1 target cards from your opponent's discard zone. (X equals the number of destroyed Dark towers.)\n" +
      "While this card is on the field, you may play cards expelled by this effect as if they were in your hand.",
  },
  {
    image: "images/Expansion-Pack-Genesis/thief-of-valoi.webp",
    element: "dark",
    cost: 1,
    power: 500,
    name: "Thief of Valoi",
    type: "Unit",
    subtype: "thief",
    number: "16/25",
    effect:
      "Exhaust, Offering 3 (Expel three units from your discard zone.): Expel target unit from your opponent's discard zone. This turn you may play that card as if it was in your hand.",
  },
  {
    image: "images/Expansion-Pack-Genesis/tower-of-surging-flames.webp",
    element: "fire",
    name: "Tower of Surging Flames",
    type: "Tower",
    defense: 1500,
    number: "17/25",
    effect:
      "Use only if your spirit or champion is Fire.\n" +
      "When this card is destroyed: You may deal 1500 to all units your opponent controls. Use this effect only if you have more destroyed towers than your opponent.",
  },
  {
    image: "images/Expansion-Pack-Genesis/tower-of-surging-gales.webp",
    element: "air",
    name: "Tower of Surging Gales",
    type: "Tower",
    defense: 1000,
    number: "18/25",
    effect:
      "Use only if your spirit or champion is Air.\n" +
      "When this card is destroyed: You may put the top card of your shard deck into play. Use this effect only if you have more destroyed towers than your opponent.",
  },
  {
    image: "images/Expansion-Pack-Genesis/tower-of-surging-radiance.webp",
    element: "light",
    name: "Tower of Surging Radiance",
    type: "Tower",
    defense: 1000,
    number: "19/25",
    effect:
      "Use only if your spirit or champion is Light.\n" +
      "When this card is destroyed: You may put a unit with cost (3) or less from your hand into play. Use this effect only if you have more destroyed towers than your opponent.",
  },
  {
    image: "images/Expansion-Pack-Genesis/tower-of-surging-shadows.webp",
    element: "dark",
    name: "Tower of Surging Shadows",
    type: "Tower",
    defence: 2000,
    number: "20/25",
    effect:
      "Use only if your spirit or champion is Dark.\n" +
      "When this tower is destroyed: You may return a unit with cost (3) or less from your discard zone to the field. Use this effect only if you have more destroyed towers than your opponent.",
  },
  {
    image: "images/Expansion-Pack-Genesis/tower-of-surging-torrents.webp",
    element: "water",
    name: "Tower of Surging Torrents",
    type: "Tower",
    defense: 1500,
    number: "21/25",
    effect:
      "Use only if your spirit or champion is Water.\n" +
      "When this card is destroyed: You may search your deck for a spell and add it to your hand. Use this effect only if you have more destroyed towers than your opponent.",
  },
  {
    image: "images/Expansion-Pack-Genesis/voidfire-desolation.webp",
    element: "fire",
    cost: 8,
    name: "Voidfire Desolation",
    type: "Spell",
    number: "22/25",
    effect:
      "Destroy up to one of each.\n" +
      "* Target unit.\n" +
      "* Target augment.\n" +
      "* Target shard.\n" +
      "* Target tower.",
  },
  {
    image: "images/Expansion-Pack-Genesis/voidfire-dragon.webp",
    element: "fire",
    cost: 3,
    power: 1500,
    name: "Voidfire Dragon",
    type: "Unit",
    subtype: "dragon",
    number: "23/25",
    effect:
      "While there is a destroyed Fire tower, expel two or more Fire units from your hand whose combined cost is at least 6: Put this card from your discard zone into play. Expel it when it leaves the field.\n" +
      'Ruined - Add target expelled Fire unit you own, except "Voidfire Dragon", to your hand.',
  },
  {
    image: "images/Expansion-Pack-Genesis/vrscika-the-scorpion-hammer.webp",
    element: "light",
    cost: 2,
    name: "Vrscika, the Scorpion Hammer",
    type: "Augment",
    subtype: "gear",
    number: "24/25",
    effect:
      " Equip to target unit.\n" +
      "It gets +1000.\n" +
      "If the equipped unit destroys a unit with Guardian in battle - You may switch the equipped unit to active.",
  },
  {
    image: "images/Expansion-Pack-Genesis/warden-of-vrscika.webp",
    element: "light",
    cost: 4,
    power: 2000,
    name: "Warden of Vrscika",
    type: "Unit",
    subtype: "knight",
    number: "25/25",
    effect:
      "Brawler (This card may attack active and exhausted units the turn it comes into play.)\n" +
      'Arrive - If there is a destroyed Light tower, search your deck for "Vrscika, the Scorpion Hammer" and equip it to this card.',
  },
];

export const conviction = [
  {
    image: "images/Expansion-Pack-Conviction/arianas-resolve.webp",
    element: "air",
    cost: 2,
    name: "Ariana's Resolve",
    type: "Spell",
    number: "01/25",
    effect:
      'Choose one. If your champion has "Ariana" in its name, you may choose both.\n' +
      '* Search your deck for an "Ariana" or "AIRA" unit and add it to your hand.\n' +
      `* Put target "Kala" unit and/or "Ariana's Amulet" from your discard zone into play.`,
  },
  {
    image: "images/Expansion-Pack-Conviction/ashborn-conjurer.webp",
    element: "fire",
    cost: 3,
    power: 1500,
    name: "Ashborn Conjurer",
    type: "Unit",
    subtype: "mystic",
    number: "02/25",
    effect:
      'Whenever your opponent plays a spell or uses an activated ability - You may put into play a Fire Elemental token (Unit * Elemental/Fire/1000) with "Ruined: Deal 500 to target unit."',
  },
  {
    image: "images/Expansion-Pack-Conviction/ashborn-shaman.webp",
    element: "fire",
    cost: 2,
    power: 1000,
    name: "Ashborn Shaman",
    type: "Unit",
    subtype: "mystic",
    number: "03/25",
    effect:
      "Whenever your opponent plays a spell or uses an activated ability - You may search your deck for a Fire spell with cost (1) or less and add it to your hand.",
  },
  {
    image: "images/Expansion-Pack-Conviction/battle-angel-of-dominion.webp",
    element: "argent",
    cost: 5,
    power: 2500,
    name: "Battle Angel of Dominion",
    type: "Unit",
    subtype: "angel",
    number: "04/25",
    effect:
      "Arrive - You may reveal an Argent unit from your hand: If you do, destroy target unit.",
  },
  {
    image: "images/Expansion-Pack-Conviction/commander-of-light.webp",
    element: "light",
    cost: 3,
    power: 1500,
    name: "Commander of Light",
    type: "Unit",
    subtype: "knight",
    number: "05/25",
    effect:
      "Exhaust: Recover all units adjacent to this card. They cannot deal damage until the end of the turn.",
  },
  {
    image: "images/Expansion-Pack-Conviction/dance-of-blades.webp",
    element: "light",
    cost: 1,
    name: "Dance of Blades",
    type: "Spell",
    number: "06/25",
    effect:
      " Instacast Deal 500 to target unit. If this destroys the unit, put a Knight token (Unit * Knight/Light/1500) into play.",
  },
  {
    image: "images/Expansion-Pack-Conviction/deathwhisperer.webp",
    element: "dark",
    cost: 4,
    power: 2500,
    name: "Deathwhisperer",
    type: "Unit",
    subtype: "demon",
    number: "07/25",
    effect:
      " Arrive - You may sacrifice a unit you control with Ruined. If you do, its Ruined ability triggers twice.",
  },
  {
    image: "images/Expansion-Pack-Conviction/delayed-poison.webp",
    element: "dark",
    cost: 1,
    name: "Delayed Poison",
    type: "Augment",
    number: "08/25",
    effect:
      "Equip to target unit.\n" +
      "At the start of your next turn - Destroy the equipped Unit.",
  },
  {
    image: "images/Expansion-Pack-Conviction/expanding-elemental.webp",
    element: "water",
    cost: 2,
    power: 1000,
    name: "Expanding Elemental",
    type: "Unit",
    subtype: "elemental",
    number: "09/25",
    effect:
      'Arrive - You may Shard Drain 1: If you do, search your deck for an "Expanding Elemental" and put it into play.',
  },
  {
    image: "images/Expansion-Pack-Conviction/grove-elemental.webp",
    element: "air",
    cost: 2,
    power: 2000,
    name: "Grove Elemental",
    type: "Unit",
    subtype: "elemental",
    number: "10/25",
    effect:
      "Arrive - If you've played at least two other cards this turn, put the top card of your shard deck into play.\n" +
      "Whenever this card leaves the field - Your opponent may destroy one of your shards.",
  },
  {
    image: "images/Expansion-Pack-Conviction/isa-the-cloudmender.webp",
    element: "air",
    cost: 2,
    power: 1000,
    name: "Isa, the Cloudmender",
    type: "Unit",
    subtype: "mystic",
    number: "11/25",
    effect:
      "Ruined - You may equip this card to target unit you control (While equipped to another unit, treat this card as an augment, not a unit). If a unit equipped with this card would be destroyed, you may remove all damage from that unit, and destroy this card instead.",
  },
  {
    image: "images/Expansion-Pack-Conviction/jacobi-the-vampire-king.webp",
    element: "dark",
    cost: 4,
    power: 2500,
    name: "Jacobi, the Vampire King",
    type: "Unit",
    subtype: "vampire",
    number: "12/25",
    effect:
      "Sacrifice this card: Put target unit from your opponent's discard zone that was put there from the field this turn into play under your control.",
  },
  {
    image: "images/Expansion-Pack-Conviction/lloyd-cosmic-enigma.webp",
    element: "argent",
    cost: 4,
    power: 2000,
    name: "Lloyd, Cosmic Enigma",
    type: "Unit",
    subtype: "???",
    number: "13/25",
    effect:
      "Arrive - Choose an element, and choose one of the following.\n" +
      "* This card cannot be targeted by spells or abilities of the declared element.\n" +
      "* Ignore the effects of all towers with the declared element as long as this card is on the field.",
  },
  {
    image: "images/Expansion-Pack-Conviction/longinus-mythical-shardlance.webp",
    element: "light",
    cost: 2,
    name: "Longinus, Mythical Shardlance",
    type: "Augment",
    subtype: "gear",
    number: "14/25",
    effect:
      "Equip to target Unit.\n" +
      "It gets +1000.\n" +
      "Sacrifice this card: Deal 1500 to target Unit.\n" +
      'You can only control one "Longinus, Mythical Shardlance".',
  },
  {
    image: "images/Expansion-Pack-Conviction/maiden-of-leviathan.webp",
    element: "water",
    cost: 2,
    power: 1500,
    name: "Maiden of Leviathan",
    type: "Unit",
    number: "15/25",
    effect:
      "Arrive - You may flip one of your towers face-up. Then if you have two or more face-up towers, draw a card.",
  },
  {
    image: "images/Expansion-Pack-Conviction/rao-wyvern-rider.webp",
    element: "fire",
    cost: 4,
    power: 1500,
    name: "Rao Wyvern Rider",
    type: "Unit",
    subtype: "dragon",
    number: "16/25",
    effect:
      "Quickness\nRuined - Put a Rao Unit Token into play (Unit * Fire/1000).",
  },
  {
    image: "images/Expansion-Pack-Conviction/ready-for-war.webp",
    element: "fire",
    cost: 6,
    name: "Ready for War",
    type: "Spell",
    number: "17/25",
    effect:
      " Instacast\n" +
      "Reveal the top five cards of your deck. Put into play as many revealed Fire units as possible with cost (3) or less. Send the rest to the discard zone.",
  },
  {
    image: "images/Expansion-Pack-Conviction/shadow-liger.webp",
    element: "dark",
    cost: 1,
    power: 1000,
    name: "Shadow Liger",
    type: "Unit",
    subtype: "beast",
    number: "18/25",
    effect:
      "Whenever this card attacks or is attacked - Send the top two cards of your deck to the discard zone.",
  },
  {
    image: "images/Expansion-Pack-Conviction/shard-spider.webp",
    element: "argent",
    cost: 3,
    power: 1500,
    name: "Shard Spider",
    type: "Unit",
    subtype: "beast",
    number: "19/25",
    effect:
      "If you have more destroyed towers than your opponent, and they control more units than you, this card cost (3) less to play.\n" +
      "Arrive - Exhaust target unit your opponent controls. It does not recover during your opponent's next charge phase.",
  },
  {
    image: "images/Expansion-Pack-Conviction/skytree-command-center.webp",
    element: "air",
    cost: 1,
    name: "Skytree Command Center",
    type: "Augment",
    number: "20/25",
    effect:
      "When a unit is returned to your hand from the field - Place one counter on this card for each.\n" +
      "Exhaust, remove any number of counters from this card: Put into play one unit from your hand with cost equal to the number of counters removed.",
  },
  {
    image: "images/Expansion-Pack-Conviction/tempest-punch.webp",
    element: "air",
    cost: 1,
    name: "Tempest Punch",
    type: "Spell",
    number: "21/25",
    effect:
      "Instacast\n" +
      `Target attacking unit you control gets +2000, and return it to its owner's hand at the end of the turn. If your champion has "Ariana" in its name, that unit also cannot be targeted by your opponent's spells or abilities this turn.`,
  },
  {
    image: "images/Expansion-Pack-Conviction/tidal-rush.webp",
    element: "water",
    cost: 3,
    name: "Tidal Rush",
    type: "Spell",
    number: "22/25",
    effect:
      "Instacast\n" +
      "As an additional cost to play this card, you may Shard Drain 1. If you do, return target unit to its owner's hand.\n" +
      "Return target unit to its owner's hand, then draw one card.",
  },
  {
    image: "images/Expansion-Pack-Conviction/true-kings-greatsword.webp",
    element: "argent",
    cost: 4,
    name: "True King's Greatsword",
    type: "Augment",
    subtype: "legendary gear",
    number: "23/25",
    effect:
      "Equip to target unit. The equipped unit gets +500. Whenever the equipped card destroys a unit in battle - Place two counters on this card.\n" +
      "Remove a counter from this card: Deal 1000 to target unit.\n" +
      "Remove two counters from this card: Deal 1000 to target face-up tower.",
  },
  {
    image: "images/Expansion-Pack-Conviction/vi-matron-of-miracles.webp",
    element: "light",
    cost: 3,
    power: 1500,
    name: "Vi, Matron of Miracles",
    type: "Unit",
    subtype: "mystic",
    number: "24/25",
    effect:
      "Expel any number of Gear from your discard zone: Target unit you control with cost (X) or less cannot be targeted by spells or abilities this turn. If it's exhausted, recover it. (X equals the total cost of Gear you expelled.)",
  },
  {
    image:
      "images/Expansion-Pack-Conviction/yurei-dire-wolf-of-the-garden.webp",
    element: "argent",
    cost: 4,
    power: 2500,
    name: "Yurei, Dire Wolf of the Garden",
    type: "Unit",
    subtype: "legendary beast",
    number: "25/25",
    effect:
      "Brawler\n" +
      `Arrive - If you destroyed an opponent's tower this turn, search your deck or discard zone for "True King's Greatsword" and equip it to this card.`,
  },
];
