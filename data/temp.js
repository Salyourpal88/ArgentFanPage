const introDeck = [
  {
    searchable: "ariana-young-prodigy",
    name: "Ariana, Young Prodigy",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/ariana-young-prodigy.jpg",
    effect:
      'Arrive (When this card enters the field zone.) - Search your deck for a card with "Kala" in its name and add it to your hand.\nPay 1: Return this card to its owner\'s hand.',
  },
  {
    searchable: "azure-guardian",
    name: "Azure Guardian",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/azure-guardian.jpg",
    effect:
      "Guardian (Exhaust this card to make an attacking Unit attack this one instead.)\nThis Unit cannot attack.",
  },
  {
    searchable: "azure-seer",
    name: "Azure Seer",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/azure-seer.jpg",
    effect:
      "Arrive - Look at the top card of your deck and place it back at the top or bottom of your deck.",
  },
  {
    searchable: "booster-dragon",
    name: "Booster Dragon",
    type: "dragon",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/booster-dragon.jpg",
    effect: "Arrive – Target Dragon Unit gets +1000 this turn.",
  },
  {
    searchable: "corona-the-fire-spirit",
    name: "Corona, the Fire Spirit",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/corona-the-fire-spirit.jpg",
    effect:
      "Once per turn, during your turn, discard one Fire unit from your hand: Deal 500 to target unit.\nDuring your turn, Soulburst: Target unit gains Quickness this turn.",
  },
  {
    searchable: "corum-assassin",
    name: "Corum Assassin",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/corum-assassin.jpg",
    faq: "FAQ: You can target on cast, but the actual decision of the sacrificing happens on resolution of the Arrive",
    effect:
      "Quickness (This Unit can attack or activate Exhaust abilities the turn it is played.)\nArrive (When this card enters the field zone.) - You can sacrifice a Gear you control to destroy target Unit your opponent controls.",
  },
  {
    searchable: "corum-blademaster",
    name: "Corum Blademaster",
    type: "knight",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/corum-blademaster.jpg",
    effect:
      " Arrive (When this card enters the field zone.) - Target one Gear in your discard zone and equip it to this card.",
  },
  {
    searchable: "corum-craftsman",
    name: "Corum Craftsman",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/corum-craftsman.jpg",
    effect:
      "Arrive (When this card enters the field zone.) - You can add one Gear from your deck to your hand.",
  },
  {
    searchable: "corum-lancer",
    name: "Corum Lancer",
    type: "knight",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/corum-lancer.jpg",
    effect:
      "Target Attack (This Unit can attack any Unit.) When this card attacks a Unit - Give this card +500 until end of turn.",
  },
  {
    searchable: "corum-phalanx",
    name: "Corum Phalanx",
    type: "knight",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/corum-phalanx.jpg",
    effect:
      " Guardian (Exhaust this card to make an attacking Unit attack this one instead.)",
  },
  {
    searchable: "corum-rampart",
    name: "Corum Rampart",
    type: "knight",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/corum-rampart.jpg",
    effect: "This Unit gets +500 for each Gear equipped to it.",
  },
  {
    searchable: "corum-squire",
    name: "Corum Squire",
    type: "knight",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/corum-squire.jpg",
    effect:
      'Ruined - Add one "Gear" with cost (1) or less from your deck to your hand.',
  },
  {
    searchable: "cryptic-deflection",
    name: "Cryptic Deflection",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/cryptic-deflection.jpg",
    effect:
      ' Instacast\nIf your Champion is "Jemial, Cryptic Caster", you can remove four counters from that card instead of paying this card\'s cost. Target Unit cannot be targeted by Spells or Abilities this turn.',
  },
  {
    searchable: "deranged-dragon",
    name: "Deranged Dragon",
    type: "dragon",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/deranged-dragon.jpg",
    effect: "This unit must attack each turn if able.",
  },
  {
    searchable: "dragonholt-the-dracoborg",
    name: "Dragonholt, the Dracoborg",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/holt-serial.png",
    effect:
      "Exhaust, pay 1, discard one Fire Unit from your hand: Add one non-Legendary Dragon Unit from your deck to your hand.",
  },
  {
    searchable: "dragonic-blast",
    name: "Dragonic Blast",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/dragonic-blast.jpg",
    effect:
      "Instacast (You can play this card any time you have priority.)\nAs an additional cost to play this card, Exhaust any number of Dragon Units you control. Deal X000 to up to two target Units (X is the number of Dragons you Exhausted).",
  },
  {
    searchable: "dragonic-destroyer",
    name: "Dragonic Destroyer",
    type: "dragon",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/dragonic-destroyer.jpg",
    effect:
      "Destroyer (When this card attacks a Tower, it attacks two Towers instead.\nArrive (When this card enters the field zone.) - Sacrifice another Dragon Unit: Deal X to all Units your opponent controls (X is the sacrificed Unit's power).",
  },
  {
    searchable: "dragonic-summoner",
    name: "Dragonic Summoner",
    type: "dragon",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/dragonic-summoner.jpg",
    effect:
      " Arrive (When this card enters the field zone.) - Put one Dragon Unit with cost 2 or less from your hand into play.",
  },
  {
    searchable: "dusk-strike",
    name: "Dusk Strike",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/dusk-strike.jpg",
    effect:
      "Instacast\nYou can play this card only if you control a Dark unit.\nTarget unit gets -2500 this turn.",
  },
  {
    searchable: "eitan-exiled-prince",
    name: "Eitan, Exiled Prince",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/eitan-serial.png",
    effect:
      "Once per turn, pay 1 and sacrifice a Unit you control: Put into play one Air Unit from your hand whose cost is 1 greater than the sacrificed Unit.",
  },
  {
    searchable: "enraged-dragon",
    name: "Enraged Dragon",
    type: "dragon",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/enraged-dragon.jpg",
    effect:
      "Arrive (When this card enters the field zone.) - Deal 1000 to target Unit.",
  },
  {
    searchable: "exploding-dragon",
    name: "Exploding Dragon",
    type: "dragon",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/exploding-dragon.jpg",
    effect:
      "Ruined (When this card is destroyed or sacrificed.) - Deal 1000 to target Unit.",
  },
  {
    searchable: "failed-golem-1",
    name: "Failed Golem #1",
    type: "golem",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/failed-golem-1.jpg",
    effect:
      "Ruined (When this card is destroyed or sacrificed.) You can send one Golem Unit from your deck to the discard zone.",
  },
  {
    searchable: "failed-golem-2",
    name: "Failed Golem #2",
    type: "golem",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/failed-golem-2.jpg",
    effect:
      'Arrive (When this card enters the field zone.) - Place one counter on your Champion if it is "Hoenna, Immoral Conjurer".',
  },
  {
    searchable: "fizzy-the-water-spirit",
    name: "Fizzy, the Water Spirit",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/fizzy-the-water-spirit.jpg",
    effect:
      "Once per turn, during your turn, Shard Drain 1: Draw one card.\nDuring your turn, Soulburst: Draw one card.",
  },
  {
    searchable: "force-blast",
    name: "Force Blast",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/force-blast.jpg",
    effect:
      "Instacast (You can play this card anytime you have priority.)\nReturn target Unit with cost 2 or less to its owner's hand.",
  },
  {
    searchable: "golem-of-allurement",
    name: "Golem Of Allurement",
    type: "golem",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/golem-of-allurement.jpg",
    effect:
      "Arrive - Take control of target unit with cost (1) or less. It cannot attack this turn.",
  },
  {
    searchable: "golem-of-arrogance",
    name: "Golem Of Arrogance",
    type: "golem",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/golem-of-arrogance.jpg",
    effect:
      "Arrive (When this card enters the field zone.) - If you control another Golem Unit, your opponent sacrifices a Unit. Then, if they have more cards in their hand than you, they discard one card.",
  },
  {
    searchable: "golem-of-avarice",
    name: "Golem Of Avarice",
    type: "golem",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/golem-of-avarice.jpg",
    faq: "FAQ: The other golem unit must be in play at the time of this Arrive's resolution",
    effect:
      "Arrive (When this card enters the field zone.) - If you control another Golem Unit, discard one random card from your opponent's hand.",
  },
  {
    searchable: "golem-of-devourment",
    name: "Golem Of Devourment",
    type: "golem",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/golem-of-devourment.jpg",
    faq: "FAQ: You may not attack with this card to win the game. The game winning unit must be able to deal damage",
    effect:
      'Guardian\nThis card cannot deal damage.\nRuined - Put a "Golem of Devourment" from your deck into play.',
  },
  {
    searchable: "golem-of-indolence",
    name: "Golem Of Indolence",
    type: "golem",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/golem-of-indolence.jpg",
    effect:
      "Target Attack (This Unit can attack any Unit.) This card only attack Units.\nArrive (When this card enters the field zone.) - You can discard one card. If you do, this turn this card gains +1000 and Quickness (This Unit can attack or activate Exhaust abilities the turn it is played).",
  },
  {
    searchable: "golem-of-jealousy",
    name: "Golem Of Jealousy",
    type: "golem",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/golem-of-jealousy.jpg",
    effect:
      "Arrive (When this card enters the field zone.) - If you control another Golem Unit, draw one card.",
  },
  {
    searchable: "golem-of-vengeance",
    name: "Golem Of Vengeance",
    type: "golem",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/golem-of-vengeance.jpg",
    effect:
      "Destroyer (When this card attacks a Tower, it attacks two Towers instead.)\nArrive - Look at your opponent's hand and select one card, then your opponent discards that card. If you control two or more other Golem Units, select two cards instead.",
  },
  {
    searchable: "great-stormfish",
    name: "Great Stormfish",
    type: "fish",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/great-stormfish.jpg",
    effect:
      "Arrive - Exhaust target unit.\nRuined - Return target unit to the top of its owner's",
  },
  {
    searchable: "greathawk-of-cloudsea",
    name: "Greathawk of Cloudsea",
    type: "beast",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/greathawk-of-cloudsea.jpg",
    effect:
      "Arrive - If there is a destroyed Air tower, you can exhaust target unit and return another target unit to its owner's hand.",
  },
  {
    searchable: "hellish-guardhound",
    name: "Hellish Guardhound",
    type: "beast",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/hellish-guardhound.jpg",
    effect:
      "Guardian (Exhaust this card to make an attacking Unit attack this one instead.)\nArrive (When this card enters the field zone.) - Target Unit cannot attack next turn.",
  },
  {
    searchable: "hoenna-immoral-conjurer",
    name: "Hoenna, Immoral Conjurer",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/hoenna-serial.png",
    effect:
      "When you destroy a Tower or Unit in battle - Place one counter on this card.\nRemove three counters from this card: Put into play a Golem Token Unit (Unit * Golem/Dark/1500).",
  },
  {
    searchable: "holy-slash",
    name: "Holy Slash",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/holy-slash.jpg",
    effect:
      "Instacast (You can play this card any time you have priority.)\nDestroy target attacking Unit.",
  },
  {
    searchable: "hurricane-shot",
    name: "Hurricane Shot",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/hurricane-shot.jpg",
    effect:
      "Instacast (You can play this card any time you have priority.)\nAs an additional cost to play this card, return an Air Unit from your field to its owner's hand. Destroy target Unit with cost 4 or less.",
  },
  {
    searchable: "iakuma-mistmage",
    name: "Iakuma Mistmage",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/iakuma-mistmage.jpg",
    effect:
      "Arrive (When this card enters the field zone.) - Reveal the top three cards of your deck. Add two of those cards to your hand and send the other to your discard zone.",
  },
  {
    searchable: "iakuma-silencer",
    name: "Iakuma Silencer",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/iakuma-silencer.jpg",
    faq: "FAQ: If this effect is used on a unit equipped with a Gear, that unit loses any given abilities but not the power bonus. If you use it on the Gear instead, the unit loses both.",
    effect:
      "Shard Drain 1 (Return one of your Shards to the bottom of your Shard Deck.): target Unit or Augment loses all abilities this turn.",
  },
  {
    searchable: "iakuma-stormknight",
    name: "Iakuma Stormknight",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/iakuma-stormknight.jpg",
    effect:
      "Arrive (When this card enters the field zone.) - If you have more destroyed Towers than your opponent, return target Unit to the top or bottom of its owner's deck.",
  },
  {
    searchable: "imbued-by-fire",
    name: "Imbued by Fire",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/imbued-by-fire.jpg",
    effect:
      " Instacast (You can play this card any time you have priority.)\nTarget Fire Unit gets +2000 this turn.",
  },
  {
    searchable: "jemial-cryptic-caster",
    name: "Jemial, Cryptic Caster",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/jemial-serial.png",
    effect:
      "Place one counter on this card for each Water Unit that comes into play on your field.\nRemove three counters from this card: Draw two cards then discard one card.",
    special: "This card is based on AS game developer Jeff Jones!",
  },
  {
    searchable: "juvenile-dragon",
    name: "Juvenile Dragon",
    type: "dragon",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/juvenile-dragon.jpg",
    effect:
      "While you control two or more other Dragon units, this card has Quickness.",
  },
  {
    searchable: "kala-trusty-companion",
    name: "Kala, Trusty Companion",
    type: "beast",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/kala-trusty-companion.jpg",
    faq: "FAQ: This card will prevent Tower of Fire destruction since it is a replacement effect. Conversely, it will not prevent destruction by Tower of Embers as Kala does not remove damage dealt to a unit",
    effect:
      'If you control an "Ariana" Unit, this card costs 1 less to play.\nIf an "Ariana" Unit would be destroyed, you can destroy this card instead.',
  },
  {
    searchable: "kyte-the-air-spirit",
    name: "Kyte, the Air Spirit",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/kyte-the-air-spirit.jpg",
    effect:
      "Once per turn, during your turn, discard one card: Return target Air unit you control to its owner's hand and, if you do, switch one of your exhausted shards to active.\nSoulburst: Return target unit with cost (3) or less to its owner's hand.",
  },
  {
    searchable: "liam-traitor-of-knights",
    name: "Liam, Traitor of Knights",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/liam-serial.png",
    effect:
      "When you destroy an opponent's Tower - You can add one Gear from your deck to your hand.\nOnce per turn, discard one Gear from your hand: target Unit gets +500 this turn.",
  },
  {
    searchable: "locke-knight-of-fury",
    name: "Locke, Knight of Fury",
    type: "knight",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/locke-knight-of-fury.jpg",
    effect:
      "Quickness (This Unit can attack or activate Exhaust abilities the turn it is played.)\nWhen this card attacks - You can equip a Gear from your hand to this card.",
  },
  {
    searchable: "lucient-guardian-of-vigilance",
    name: "Lucient, Guardian of Vigilance",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/lucient-guardian-of-vigilance.jpg",
    effect:
      "Guardian\nArrive - If there is a destroyed Light tower, switch up to two target exhausted Light units to active.",
  },
  {
    searchable: "luna-the-dark-spirit",
    name: "Luna, the Dark Spirit",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/luna-the-dark-spirit.jpg",
    effect:
      "When you destroy a tower or unit in battle - Place one counter on this card.\nDuring your turn, remove three counters from this card: Your opponent discards one card.\nDuring your turn, Soulburst: Your opponent discards one card.",
  },
  {
    searchable: "mechdragons-flame",
    name: "Mechdragon's Flame",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/mechdragons-flame.jpg",
    effect:
      "Expel target Unit if its power is less than the highest power of a Dragon Unit you control.",
  },
  {
    searchable: "mei-yus-assistant",
    name: "Mei-Yu's Assistant",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/mei-yus-assistant.jpg",
    faq: "FAQ: The spell cost reduction will indeed stack",
    effect: "Your Water Spell cards cost 1 less to play.",
  },
  {
    searchable: "nobe-the-shadow-guardian",
    name: "Nobe the Shadow Guardian",
    type: "gargoyle",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/nobe-the-shadow-guardian.jpg",
    effect:
      "Guardian\nArrive - If there is a destroyed Dark tower, target unit gets -2000 this turn.",
  },
  {
    searchable: "phantasmal-guards",
    name: "Phantasmal Guards",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/phantasmal-guards.jpg",
    effect:
      "Put two Illusion Unit Tokens into play with Guardian (Unit * Illusion/Water/500). These Tokens cannot attack.",
  },
  {
    searchable: "rao-dragon-tamer",
    name: "Rao Dragon Tamer",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/rao-dragon-tamer.jpg",
    effect:
      "Arrive (When this card enters the field zone.) - Switch target Exhausted Dragon Unit to Active.",
  },
  {
    searchable: "royal-reflection",
    name: "Royal Reflection",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/royal-reflection.jpg",
    faq: "FAQ: This spell can only redirect effects with a singular target",
    effect:
      "Instacast (You can play this card any time you have priority.)\nChange the target of a Spell or Ability to another legal target.",
  },
  {
    searchable: "shard-hoarder",
    name: "Shard Hoarder",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/shard-hoarder.jpg",
    effect:
      "Arrive (When this card enters the field zone.) - Draw one card.\nRuined (When this card is destroyed or sacrificed.) - Discard one card.",
  },
  {
    searchable: "shards-of-winter",
    name: "Shards of Winter",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/shards-of-winter.jpg",
    effect:
      "Instacast (You can play this card anytime you have priority.)\nExhaust all Units your opponent controls.",
  },
  {
    searchable: "sky-recruit",
    name: "Sky Recruit",
    type: "skyraider",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/sky-recruit.jpg",
    effect:
      'Arrive (When this card enters the field zone.) - Add a "Sky Recruit" from your deck to your hand.',
  },
  {
    searchable: "skyship-engineer",
    name: "Skyship Engineer",
    type: "skyraider",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/skyship-engineer.jpg",
    effect:
      "Exhaust: Return this card to its owner's hand, and, if you do, your Airship units cost (1) less to play this turn.",
  },
  {
    searchable: "skytree-aviator",
    name: "Skytree Aviator",
    type: "skyraider",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/skytree-aviator.jpg",
    effect:
      "Exhaust: Return this Unit to its owner's hand, and, if you do, Airship Units you control gain +1000 this turn.",
  },
  {
    searchable: "skytree-battle-cruiser",
    name: "Skytree Battle Cruiser",
    type: "airship",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/skytree-battle-cruiser.jpg",
    effect:
      "This card cannot be targeted by Spells.\nRuined (When this Unit is destroyed or sacrificed.) - You can put target Skyraider Unit with cost 3 or less from your discard zone into play.",
  },
  {
    searchable: "skytree-blockadeship",
    name: "Skytree Blockadeship",
    type: "airship",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/skytree-blockadeship.jpg",
    faq: "FAQ: If played (by some effect) in front of a unit that is in the midst of attacking, this card's ability has no effect. The ability only stops units from *declaring* an attack",
    effect:
      "Guardian (Exhaust this card to make an attacking Unit attack this one instead.)\nUnits in front of this card cannot attack.",
  },
  {
    searchable: "skytree-dragon",
    name: "Skytree Dragon",
    type: "dragon",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/skytree-dragon.jpg",
    effect:
      " Arrive (When this card enters the field zone.) - If two or more of your Air Units have returned to your hand this turn from the field, return target Unit to its owner's hand.\nWhen this card attacks - target Unit cannot use Guardian this turn.",
  },
  {
    searchable: "skytree-sandship",
    name: "Skytree Sandship",
    type: "airship",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/skytree-sandship.jpg",
    effect:
      "Arrive - Exhaust target unit.\nRuined - You can put target Skyraider unit with cost (2) or less from your discard zone into play.",
  },
  {
    searchable: "skytree-warship",
    name: "Skytree Warship",
    type: "airship",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/skytree-warship.jpg",
    effect:
      "Destroyer\nArrive - Destroy target Unit with cost 4 or less.\nRuined - You can put target Skyraider Unit or Airship Unit with cost 4 or less from your discard zone into play.",
  },
  {
    searchable: "sola-the-light-spirit",
    name: "Sola, the Light Spirit",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/sola-the-light-spirit.jpg",
    effect:
      "At the end of your turn - You can switch one of your exhausted units to active.\nSoulburst: Put into play a Knight unit token with Guardian (Unit * Knight/Light/2000).",
  },
  {
    searchable: "soulfire-dragon",
    name: "Soulfire Dragon",
    type: "dragon",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/soulfire-dragon.jpg",
    effect:
      "Ruined (When this card is destroyed or sacrificed.) - Search your deck for a Dragon Unit with cost of 1 and put it into play.",
  },
  {
    searchable: "standard-shardarmor",
    name: "Standard Shardarmor",
    type: "gear",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/standard-shardarmor.jpg",
    effect:
      "Equip to target Unit.\nIf it would take damage, you can sacrifice this card and prevent that damage instead.",
  },
  {
    searchable: "standard-shardshield",
    name: "Standard Shardshield",
    type: "gear",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/standard-shardshield.jpg",
    effect:
      "Equip to target Unit.\nIt gains Guardian (Exhaust this card to make an attacking Unit attack this one instead.).\nWhen the equipped Unit uses Guardian - It gets +1000 this turn.",
  },
  {
    searchable: "standard-shardsword",
    name: "Standard Shardsword",
    type: "gear",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/standard-shardsword.jpg",
    effect: "Equip to target unit.\nIt gets +500 and Target Attack.",
  },
  {
    searchable: "stormcaster-of-azure-tower",
    name: "Stormcaster of Azure Tower",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/stormcaster-of-azure-tower.jpg",
    effect:
      "Destroyer\nArrive - If there is a destroyed Water Tower, return up to two target Units your opponent controls to the bottom of their owner's deck in any order.",
    special: "This is based on Matt Kozmor!",
  },
  {
    searchable: "stormfish",
    name: "Stormfish",
    type: "fish",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/stormfish.jpg",
    effect:
      "Ruined (When this card is destroyed or sacrificed.) - Return target Unit to its owner's hand.",
  },
  {
    searchable: "strike-of-the-golems",
    name: "Strike of the Golems",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/strike-of-the-golems.jpg",
    effect:
      "Put into play up to two target Golem Units from your discard zone with combined cost of 5 or less.",
  },
  {
    searchable: "tornado-shot",
    name: "Tornado Shot",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/tornado-shot.jpg",
    effect:
      "Instacast (You can play this card any time you have priority.)\nPlay only if an Air Unit returned to your hand from the field this turn.\nDeal 2000 to target Unit.",
  },
  {
    searchable: "tower-of-air",
    name: "Tower of Air",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/tower-of-air.jpg",
    effect:
      "When this card is destroyed, you can return up to two Units from the field to their owner's hand.",
  },
  {
    searchable: "tower-of-darkness",
    name: "Tower of Darkness",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/tower-of-darkness.jpg",
    effect:
      "When this card is destroyed, you can look at your opponent's hand and select one card, then your opponent discards that card.",
  },
  {
    searchable: "tower-of-fire",
    name: "Tower of Fire",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/tower-of-fire.jpg",
    effect: "When this card is destroyed, you can destroy a Unit.",
  },
  {
    searchable: "tower-of-light",
    name: "Tower of Light",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/tower-of-light.jpg",
    effect:
      "When this card is destroyed, you can put into play a Knight Unit Token with Guardian (Unit * Knight/Light/2000).",
  },
  {
    searchable: "tower-of-water",
    name: "Tower of Water",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/tower-of-water.jpg",
    effect: "When this card is destroyed, you can draw two cards.",
  },
  {
    searchable: "uncertain-experiment",
    name: "Uncertain Experiment",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/uncertain-experiment.jpg",
    effect:
      "Look at the top four cards of your deck. You can reveal one Golem Unit among them and add it to your hand. Place the rest of the cards on the bottom of your deck in any order.",
  },
  {
    searchable: "vehemont-crimson-guardian",
    name: "Vehemont, Crimson Guardian",
    type: "dragon",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/vehemont-crimson-guardian.jpg",
    effect: "Arrive - If there is a destroyed Fire tower, destroy target unit.",
  },
  {
    searchable: "vengeful-dragon",
    name: "Vengeful Dragon",
    type: "dragon",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/vengeful-dragon.jpg",
    effect:
      "This Unit costs 2 less to play if a Dragon Unit was destroyed this turn.",
  },
  {
    searchable: "vi-giver-of-light",
    name: "Vi, Giver of Light",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/vi-giver-of-light.jpg",
    effect:
      "Arrive - Send one Gear from your deck to the discard zone.\nSacrifice this card: Target Light Unit gets +500 this turn.",
  },
];
