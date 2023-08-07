const introDeck = [
  {
    searchable: "arianas-resolve",
    name: "Ariana's Resolve",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/arianas-resolve.jpg",
    effect:
      'Choose one. If your champion has "Ariana" in its name, you may choose both.\n* Search your deck for an "Ariana" or "AIRA" unit and add it to your hand.\n* Put target "Kala" unit and/or "Ariana\'s Amulet" from your discard zone into play.',
  },
  {
    searchable: "ashborn-conjurer",
    name: "Ashborn Conjurer",
    type: "mystic",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/ashborn-conjurer.jpg",
    effect:
      'Whenever your opponent plays a spell or uses an activated ability - You may put into play a Fire Elemental token (Unit * Elemental/Fire/1000) with "Ruined: Deal 500 to target unit."',
  },
  {
    searchable: "ashborn-shaman",
    name: "Ashborn Shaman",
    type: "mystic",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/ashborn-shaman.jpg",
    effect:
      "Whenever your opponent plays a spell or uses an activated ability - You may search your deck for a Fire spell with cost (1) or less and add it to your hand.",
  },
  {
    searchable: "battle-angel-of-dominion",
    name: "Battle Angel of Dominion",
    type: "angel",
    element: "argent",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/battle-angel-of-dominion.jpg",
    effect:
      "Arrive - You may reveal an Argent unit from your hand: If you do, destroy target unit.",
  },
  {
    searchable: "commander-of-light",
    name: "Commander of Light",
    type: "knight",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/commander-of-light.jpg",
    effect:
      "Exhaust: Recover all units adjacent to this card. They cannot deal damage until the end of the turn.",
  },
  {
    searchable: "dance-of-blades",
    name: "Dance of Blades",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/dance-of-blades.jpg",
    effect:
      " Instacast Deal 500 to target unit. If this destroys the unit, put a Knight token (Unit * Knight/Light/1500) into play.",
  },
  {
    searchable: "deathwhisperer",
    name: "Deathwhisperer",
    type: "demon",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/deathwhisperer.jpg",
    effect:
      " Arrive - You may sacrifice a unit you control with Ruined. If you do, its Ruined ability triggers twice.",
  },
  {
    searchable: "delayed-poison",
    name: "Delayed Poison",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/delayed-poison.jpg",
    effect:
      "Equip to target unit.\nAt the start of your next turn - Destroy the equipped Unit.",
  },
  {
    searchable: "expanding-elemental",
    name: "Expanding Elemental",
    type: "elemental",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/expanding-elemental.jpg",
    effect:
      'Arrive - You may Shard Drain 1: If you do, search your deck for an "Expanding Elemental" and put it into play.',
  },
  {
    searchable: "grove-elemental",
    name: "Grove Elemental",
    type: "elemental",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/grove-elemental.jpg",
    effect:
      "Arrive - If you've played at least two other cards this turn, put the top card of your shard deck into play.\nWhenever this card leaves the field - Your opponent may destroy one of your shards.",
  },
  {
    searchable: "isa-the-cloudmender",
    name: "Isa, the Cloudmender",
    type: "mystic",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/isa-the-cloudmender.jpg",
    effect:
      "Ruined - You may equip this card to target unit you control (While equipped to another unit, treat this card as an augment, not a unit). If a unit equipped with this card would be destroyed, you may remove all damage from that unit, and destroy this card instead.",
  },
  {
    searchable: "jacobi-the-vampire-king",
    name: "Jacobi, the Vampire King",
    type: "vampire",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/jacobi-the-vampire-king.jpg",
    effect:
      "Sacrifice this card: Put target unit from your opponent's discard zone that was put there from the field this turn into play under your control.",
    special: "This card is based on AS player Jacobi Schreiter!",
  },
  {
    searchable: "lloyd-cosmic-enigma",
    name: "Lloyd, Cosmic Enigma",
    type: "???",
    element: "argent",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/lloyd-cosmic-enigma.jpg",
    effect:
      "Arrive - Choose an element, and choose one of the following.\n* This card cannot be targeted by spells or abilities of the declared element.\n* Ignore the effects of all towers with the declared element as long as this card is on the field.",
  },
  {
    searchable: "longinus-mythical-shardlance",
    name: "Longinus, Mythical Shardlance",
    type: "gear",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/longinus-mythical-shardlance.jpg",
    effect:
      'Equip to target Unit.\nIt gets +1000.\nSacrifice this card: Deal 1500 to target Unit.\nYou can only control one "Longinus, Mythical Shardlance".',
  },
  {
    searchable: "maiden-of-leviathan",
    name: "Maiden of Leviathan",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/maiden-of-leviathan.jpg",
    effect:
      "Arrive - You may flip one of your towers face-up. Then if you have two or more face-up towers, draw a card.",
  },
  {
    searchable: "rao-wyvern-rider",
    name: "Rao Wyvern Rider",
    type: "dragon",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/rao-wyvern-rider.jpg",
    effect:
      "Quickness\nRuined - Put a Rao Unit Token into play (Unit * Fire/1000).",
  },
  {
    searchable: "ready-for-war",
    name: "Ready for War",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/ready-for-war.jpg",
    effect:
      " Instacast\nReveal the top five cards of your deck. Put into play as many revealed Fire units as possible with cost (3) or less. Send the rest to the discard zone.",
  },
  {
    searchable: "shadow-liger",
    name: "Shadow Liger",
    type: "beast",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/shadow-liger.jpg",
    effect:
      "Whenever this card attacks or is attacked - Send the top two cards of your deck to the discard zone.",
  },
  {
    searchable: "shard-spider",
    name: "Shard Spider",
    type: "beast",
    element: "argent",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/shard-spider.jpg",
    effect:
      "If you have more destroyed towers than your opponent, and they control more units than you, this card cost (3) less to play.\nArrive - Exhaust target unit your opponent controls. It does not recover during your opponent's next charge phase.",
  },
  {
    searchable: "skytree-command-center",
    name: "Skytree Command Center",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/skytree-command-center.jpg",
    effect:
      "When a unit is returned to your hand from the field - Place one counter on this card for each.\nExhaust, remove any number of counters from this card: Put into play one unit from your hand with cost equal to the number of counters removed.",
  },
  {
    searchable: "tempest-punch",
    name: "Tempest Punch",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/tempest-punch.jpg",
    effect:
      "Instacast\nTarget attacking unit you control gets +2000, and return it to its owner's hand at the end of the turn. If your champion has \"Ariana\" in its name, that unit also cannot be targeted by your opponent's spells or abilities this turn.",
  },
  {
    searchable: "tidal-rush",
    name: "Tidal Rush",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/tidal-rush.jpg",
    effect:
      "Instacast\nAs an additional cost to play this card, you may Shard Drain 1. If you do, return target unit to its owner's hand.\nReturn target unit to its owner's hand, then draw one card.",
  },
  {
    searchable: "true-kings-greatsword",
    name: "True King's Greatsword",
    type: "legendary gear",
    element: "argent",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/true-kings-greatsword.jpg",
    effect:
      "Equip to target unit. The equipped unit gets +500. Whenever the equipped card destroys a unit in battle - Place two counters on this card.\nRemove a counter from this card: Deal 1000 to target unit.\nRemove two counters from this card: Deal 1000 to target face-up tower.",
  },
  {
    searchable: "vi-matron-of-miracles",
    name: "Vi, Matron of Miracles",
    type: "mystic",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/vi-matron-of-miracles.jpg",
    effect:
      "Expel any number of Gear from your discard zone: Target unit you control with cost (X) or less cannot be targeted by spells or abilities this turn. If it's exhausted, recover it. (X equals the total cost of Gear you expelled.)",
  },
  {
    searchable: "yurei-dire-wolf-of-the-garden",
    name: "Yurei, Dire Wolf of the Garden",
    type: "legendary beast",
    element: "argent",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/yurei-dire-wolf-of-the-garden.jpg",
    effect:
      "Brawler\nArrive - If you destroyed an opponent's tower this turn, search your deck or discard zone for \"True King's Greatsword\" and equip it to this card.",
  },
];
