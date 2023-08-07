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
