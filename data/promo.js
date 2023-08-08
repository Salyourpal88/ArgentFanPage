const promos = [
  {
    image: "images/Expansion-Pack-Generations/ariana-adventurer-of-argos.webp",
    element: "air",
    name: "Ariana, Adventurer of Argos",
    type: "Champion",
    number: "001",
    effect: `At the start of the game (after mulligans) you may add one "Kala, Trusty Companion" and/or one "Ariana's Amulet" from your deck to your hand.`,
  },
  {
    image: "images/Expansion-Pack-Generations/auron-the-golden-rose.webp",
    element: "light",
    name: "Auron, the Golden Rose",
    type: "Champion",
    number: "002",
    effect:
      "Exhaust, Discard one Knight or Gear from your hand: Exhaust target unit.",
  },
  {
    image: "images/Expansion-Pack-Generations/ergon-the-tragic-gargoyle.webp",
    element: "dark",
    name: "Ergon, the Tragic Gargoyle",
    type: "Champion",
    number: "003",
    effect:
      "Exhaust: Send the top two cards of your deck to the discard zone.\n" +
      "Exhaust, Pay (1): Put target unit from your discard zone on top of your deck.",
  },
  {
    image: "images/Betrayal/gillian-the-witch-queen.webp",
    element: "water",
    name: "Gillian, the Witch Queen",
    type: "Champion",
    number: "004",
    effect:
      "Exhaust, Reveal any number of spells from your hand: Reveal the top card of your deck. If it's a spell with cost equal to or less than the number of cards revealed from your hand, add it to your hand.",
  },
  {
    image: "images/Expansion-Pack-Generations/raine-mournful-commander.webp",
    element: "fire",
    name: "Raine, Mournful Commander",
    type: "Champion",
    number: "005",
    effect:
      "Exhaust, Expel up to two units from your hand: Deal damage to target unit equal to the number of cards expelled x500.",
  },
  {
    image: "images/Betrayal/scarlet-egg.webp",
    element: "fire",
    cost: 1,
    power: 500,
    name: "Scarlet Egg",
    type: "Unit",
    subtype: "dragon",
    rarity: "Common",
    number: "006",
    effect:
      "Guardian\n" +
      "This Unit cannot attack.\n" +
      "If you control two or more other Dragon Units, sacrifice this card: Search your deck for a Dragon Unit with cost 2 or less and put it into play.",
  },
  {
    searchable: "yuki-the-lightning-flash",
    name: "Yuki, the Lightning Flash",
    type: "knight",
    element: "light",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/yuki-the-lightning-flash.jpg",
    faq: "FAQ: If you draw this card off of a Tower of Water destruction, it CAN be put into play",
    number: "007",
    effect:
      "Target Attack\nIf this card is in your hand, after one of your Towers is destroyed – Put this card into play.",
  },
  {
    image: "images/Betrayal/garga-keeper-of-gales.webp",
    element: "air",
    cost: 5,
    power: 3000,
    name: "Garga, Keeper of Gales",
    type: "Unit",
    subtype: "beast",
    rarity: "Rare",
    number: "008",
    effect:
      "Arrive - Choose a cost. Return all Units of the chosen cost to their owners' hands. If two or more Units are returned to the hand with this effect, this card gains Quickness.",
  },
  {
    image: "images/Intro-Deck-2019/golem-of-devourment.webp",
    element: "dark",
    cost: 2,
    power: 1000,
    name: "Golem Of Devourment",
    type: "Unit",
    subtype: "golem",
    rarity: "Intro Deck",
    number: "009",
    effect:
      "Guardian\n" +
      "This card cannot deal damage.\n" +
      'Ruined - Put a "Golem of Devourment" from your deck into play.',
  },
  {
    image: "images/Intro-Deck-2019/phantasmal-guards.webp",
    element: "water",
    cost: 1,
    name: "Phantasmal Guards",
    type: "Spell",
    rarity: "Intro Deck",
    number: "010",
    effect:
      "Put two Illusion Unit Tokens into play with Guardian (Unit * Illusion/Water/500). These Tokens cannot attack.",
  },
  {
    image: "images/Betrayal/silver-watchwoman.webp",
    element: "argent",
    cost: 4,
    power: 2000,
    name: "Silver Watchwoman",
    type: "Unit",
    rarity: "Super Rare",
    number: "011",
    effect:
      "Arrive - Place two counters on this card.\n" +
      "Remove a counter from this card: Choose one.\n" +
      "* This card gains Quickness (This Unit can attack or activate Exhaust abilities the turn it is played.).\n" +
      "* This card gains Target Attack (This Unit can attack any Unit.).\n" +
      "* Prevent the next damage that would be dealt to this card this turn.",
  },
  {
    image: "images/Betrayal/argent-egg.webp",
    element: "argent",
    cost: 1,
    power: 500,
    name: "Argent Egg",
    type: "Unit",
    subtype: "dragon",
    rarity: "Common",
    number: "012",
    effect:
      "Guardian\n" +
      "This card cannot attack.\n" +
      "Ruined - Put into play one Whelp Unit Token (Unit * Dragon/Argent/500)",
  },
  {
    image: "images/Ascension/ArgentShardASC.webp",
    element: "Argent",
    name: "Argent Shard",
    type: "Basic Shard",
    number: "013",
    effect: "Exhaust: Produce (1).",
  },
  {
    image: "images/Intro-Deck-2019/skytree-warship.webp",
    element: "air",
    cost: 6,
    power: 3000,
    name: "Skytree Warship",
    type: "Unit",
    subtype: "airship",
    rarity: "Intro Deck",
    number: "014",
    effect:
      "Destroyer\n" +
      "Arrive - Destroy target Unit with cost 4 or less.\n" +
      "Ruined - You can put target Skyraider Unit or Airship Unit with cost 4 or less from your discard zone into play.",
  },
  {
    image: "images/Intro-Deck-2019/vi-giver-of-light.webp",
    element: "light",
    cost: 1,
    power: 500,
    name: "Vi, Giver of Light",
    type: "Unit",
    rarity: "Intro Deck",
    number: "015",
    effect:
      "Arrive - Send one Gear from your deck to the discard zone.\n" +
      "Sacrifice this card: Target Light Unit gets +500 this turn.",
  },
  {
    image: "images/Intro-Deck-2019/juvenile-dragon.webp",
    element: "fire",
    cost: 1,
    power: 1000,
    name: "Juvenile Dragon",
    type: "Unit",
    subtype: "dragon",
    rarity: "Intro Deck",
    number: "016",
    effect:
      "While you control two or more other Dragon units, this card has Quickness.",
  },
  {
    image: "images/Betrayal/hidden-laboratory.webp",
    element: "dark",
    cost: 2,
    name: "Hidden Laboratory",
    type: "Augment",
    rarity: "Common",
    number: "017",
    effect:
      'Arrive (When this card enters the field zone.) - Place three counters on your Champion if it is "Hoenna, Immoral Conjurer".\n' +
      "Exhaust, sacrifice a Golem Unit: Draw one card.",
  },
  {
    searchable: "ash-the-glacial-sorcerer",
    name: "Ash, the Glacial Sorcerer",
    element: "water",
    promo: true,
    number: "018",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/ash-the-glacial-sorcerer.jpg",
    effect:
      "When you play a Water Spell – You can place an Ice Wall counter on target non-destroyed Tower you own. (Towers with Ice Wall counters get +500 defense. If a Tower is destroyed, remove all Ice Wall counters from that Tower.)\nRemove all Ice Wall counters from all Towers you own: Deal damage to target Unit equal to the number of counters removed x500.",
  },
  {
    image: "images/Betrayal/ancient-serpents-breath.webp",
    element: "water",
    cost: 1,
    name: "Ancient Serpent's Breath",
    type: "Spell",
    rarity: "Common",
    number: "019",
    effect:
      "Instacast\n" +
      "As an additional cost to play this card, you may Shard Drain 1. If you do, return target Unit to the top of its owner's deck.\n" +
      "Return target Unit with cost 2 or less to its owner's hand, then its owner draws one card.",
  },
  {
    searchable: "gz-the-explosion-master",
    name: "G.Z. the Explosion Master",
    element: "fire",
    promo: true,
    number: "020",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/gz-the-explosion-master.jpg",
    effect:
      "Arrive – Place an Explosion counter on target Tower you own.\nExhaust, remove an Explosion Counter from a Tower you own: If it's face-down, flip it face-up. Deal damage equal to double its defense to target Unit. Destroy that Tower.",
  },
  {
    searchable: "nanatsu-the-pure-shinobi",
    name: "Nanatsu, the Pure Shinobi",
    element: "air",
    promo: true,
    number: "021",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/nanatsu-the-pure-shinobi.jpg",
    effect:
      "Arrive – For each destroyed Tower, place one counter on this card.\nExhaust, remove one counter from this card: Exhaust Target Unit.\nExhaust, remove four counters from this card: Destroy Target Unit and, if you do, switch up to two of your Shards to Active at the end of the turn.",
  },
  {
    image: "images/Betrayal/altar-of-the-dragon-god.webp",
    element: "fire",
    cost: 2,
    name: "Altar of the Dragon God",
    type: "Augment",
    rarity: "Rare",
    number: "022",
    effect:
      "Exhaust, pay 1: Destroy target Dragon Unit you control, and, if you do, search your deck for a Dragon Unit with the same cost and put it into play.",
  },
  {
    image: "images/Betrayal/kalibur-the-sacred-shardsword.webp",
    element: "light",
    cost: 2,
    name: "Kalibur, the Sacred Shardsword",
    type: "Augment",
    subtype: "gear",
    rarity: "Rare",
    number: "023",
    effect:
      "Equip to target Unit.\n" +
      "It gets +1000.\n" +
      "Sacrifice this card: This turn the equipped Unit cannot be targeted by Spells or Abilities. Draw one card.\n" +
      'You can only control one "Kalibur, the Sacred Shardsword".',
  },
  {
    searchable: "buckeye-the-loyal",
    name: "Buckeye, the Loyal",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/buckeye-the-loyal.jpg",
    number: "024",
    effect:
      'You start the game with a Hound unit token with Guardian (Unit * Hound/Light/500). This token cannot attack, and has "Sacrifice this unit: Prevent the next damage that would be dealt to target unit this turn."\nSoulburst: Prevent all damage that would be dealt to target unit this turn.',
    special: "This card is based on one of Jim's real dogs!",
  },
  {
    searchable: "yuki-the-lightning-flash",
    name: "Yuki, the Lightning Flash",
    type: "knight",
    element: "light",
    number: "026",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/yuki-the-lightning-flash.jpg",
    faq: "FAQ: If you draw this card off of a Tower of Water destruction, it CAN be put into play",
    effect:
      "Target Attack\nIf this card is in your hand, after one of your Towers is destroyed – Put this card into play.",
  },
  {
    image: "images/Revelations/shrieker.webp",
    element: "dark",
    cost: 1,
    power: 1000,
    name: "Shrieker",
    type: "Unit",
    rarity: "Common",
    number: "027",
    effect:
      "Arrive - Send the top three cards of your deck to the discard zone.",
  },
  {
    image: "images/Revelations/song-of-the-sky.webp",
    element: "air",
    cost: 0,
    name: "Song of the Sky",
    type: "Spell",
    rarity: "Common",
    number: "028",
    effect:
      "Play this card only if two or more units returned from the field to your hand this turn.\n" +
      "The next card you play this turn costs (2) less to play.",
  },
  {
    searchable: "nanatsu-the-pure-shinobi",
    name: "Nanatsu, the Pure Shinobi",
    element: "air",
    promo: true,
    number: "029",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/nanatsu-the-pure-shinobi.jpg",
    effect:
      "Arrive – For each destroyed Tower, place one counter on this card.\nExhaust, remove one counter from this card: Exhaust Target Unit.\nExhaust, remove four counters from this card: Destroy Target Unit and, if you do, switch up to two of your Shards to Active at the end of the turn.",
  },
  {
    searchable: "buckeye-the-loyal",
    name: "Buckeye, the Loyal",
    element: "light",
    number: "030",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/buckeye-the-loyal.jpg",
    effect:
      'You start the game with a Hound unit token with Guardian (Unit * Hound/Light/500). This token cannot attack, and has "Sacrifice this unit: Prevent the next damage that would be dealt to target unit this turn."\nSoulburst: Prevent all damage that would be dealt to target unit this turn.',
    special: "This card is based on one of Jim's real dogs!",
  },
  {
    searchable: "gz-the-explosion-master",
    name: "G.Z. the Explosion Master",
    element: "fire",
    promo: true,
    number: "031",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/gz-the-explosion-master.jpg",
    effect:
      "Arrive – Place an Explosion counter on target Tower you own.\nExhaust, remove an Explosion Counter from a Tower you own: If it's face-down, flip it face-up. Deal damage equal to double its defense to target Unit. Destroy that Tower.",
  },
  {
    searchable: "ash-the-glacial-sorcerer",
    name: "Ash, the Glacial Sorcerer",
    element: "water",
    number: "032",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/ash-the-glacial-sorcerer.jpg",
    effect:
      "When you play a Water Spell – You can place an Ice Wall counter on target non-destroyed Tower you own. (Towers with Ice Wall counters get +500 defense. If a Tower is destroyed, remove all Ice Wall counters from that Tower.)\nRemove all Ice Wall counters from all Towers you own: Deal damage to target Unit equal to the number of counters removed x500.",
  },
  {
    image: "images/Expansion-Pack-Generations/arbor-carbuncle.webp",
    element: "air",
    cost: 1,
    power: 500,
    name: "Arbor Carbuncle",
    type: "Unit",
    subtype: "beast",
    number: "033",
    effect:
      'When this card is returned to your hand from the field - You may search your deck for an "Arbor Carbuncle" and add it to your hand.\n' +
      'During your turn, expel this card and two other "Arbor Carbuncle" from your hand: Draw two cards and switch up to two of your shards to active.',
  },
  {
    searchable: "demon-of-the-evil-eye",
    name: "Demon of the Evil Eye",
    type: "demon",
    element: "dark",
    number: "034",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/demon-of-the-evil-eye.jpg",
    faq: "FAQ: You will declare a card name at resolution of this Arrive, not on cast",
    effect:
      "Arrive – Declare a card name, then your opponent reveals their hand and discards all cards with that name. Draw one card for each card discarded this way.",
  },
  {
    image: "images/Betrayal/savage-mystic.webp",
    element: "argent",
    cost: 2,
    power: 1000,
    name: "Savage Mystic",
    type: "Unit",
    rarity: "Common",
    number: "035",
    effect: "Once per turn, when you cast a Spell - Deal 1000 to target Unit.",
  },
  {
    image: "images/Revelations/silvermist-phoenix.webp",
    element: "argent",
    cost: 3,
    power: 1500,
    name: "Silvermist Phoenix",
    type: "Unit",
    subtype: "elemental phoenix",
    rarity: "Super Rare",
    number: "036",
    effect:
      "This card cannot be targeted by spells.\n" +
      'At the end of your turn - You may pay (2) and expel this card from your discard zone: If you do, search your deck for a "Silvermist Phoenix" and put it into play.',
  },
  {
    image: "images/Expansion-Pack-Generations/arbor-carbuncle.webp",
    element: "air",
    cost: 1,
    power: 500,
    name: "Arbor Carbuncle",
    type: "Unit",
    subtype: "beast",
    number: "038",
    effect:
      'When this card is returned to your hand from the field - You may search your deck for an "Arbor Carbuncle" and add it to your hand.\n' +
      'During your turn, expel this card and two other "Arbor Carbuncle" from your hand: Draw two cards and switch up to two of your shards to active.',
  },
  {
    image: "images/Ascension/ArgentShardASC.webp",
    element: "Argent",
    name: "Argent Shard",
    type: "Basic Shard",
    number: "039",
    effect: "Exhaust: Produce (1).",
  },
  {
    image: "images/Revelations/glittering-whelp.webp",
    element: "fire",
    cost: 1,
    power: 500,
    name: "Glittering Whelp",
    type: "Unit",
    subtype: "dragon",
    rarity: "Rare",
    number: "040",
    effect:
      "Arrive - You may reveal two Dragon units from your hand: If you do, draw one card.",
  },
  {
    image: "images/Revelations/ketsu-the-living-armor.webp",
    element: "light",
    cost: 1,
    name: "Ketsu, the Living Armor",
    type: "Augment",
    subtype: "gear",
    rarity: "Rare",
    number: "041",
    effect:
      "Equip to target unit.\n" +
      "Any damage it would take is reduced by 500 instead.\n" +
      "When one of your Light units attacks - You may equip this card from the discard zone to that unit.\n" +
      'A unit may only be equipped with one "Ketsu, the Living Armor".',
  },
  {
    image: "images/Betrayal/poisonous-strike.webp",
    element: "dark",
    cost: 3,
    name: "Poisonous Strike",
    type: "Spell",
    rarity: "Common",
    number: "042",
    effect:
      "Instacast\n" +
      "Target attacking or blocking Unit gets -2000 this turn, then your opponent discards one card from their hand.",
  },
  {
    searchable: "curse-of-the-witch-queen",
    name: "Curse of the Witch Queen",
    element: "water",
    number: "043",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/curse-of-the-witch-queen.jpg",
    effect: "Take control of up to two target exhausted units.",
  },
  {
    image: "images/Revelations/catrina-the-dark-lady.webp",
    element: "dark",
    cost: 5,
    power: 3000,
    name: "Catrina, the Dark Lady",
    type: "Unit",
    rarity: "Super Rare",
    number: "044",
    effect: `Arrive - Choose one. * Add one "Trick!" or "Treat!" from your deck or discard zone to your hand. * Offering 2 (Expel two units from your discard zone.): Add both instead.`,
  },
  {
    image: "images/Revelations/eccentric-visitor.webp",
    element: "argent",
    cost: 3,
    power: 2000,
    name: "Eccentric Visitor",
    type: "Unit",
    subtype: "mysterious man",
    rarity: "Argent Rare",
    number: "045",
    effect:
      "Arrive - If you have two or more destroyed towers, you may flip your spirit face-up.",
  },
  {
    image: "images/Revelations/ella-the-sky-huntress.webp",
    element: "air",
    cost: 2,
    power: 1000,
    name: "Ella, the Sky Huntress",
    type: "Unit",
    subtype: "skyraider",
    rarity: "Rare",
    number: "046",
    effect:
      "Arrive - You may discard one Skyraider unit or Airship unit from your hand: If you do, target unit loses all abilities and cannot attack as long as you control this card.",
  },
  {
    image: "images/Revelations/mistshaper.webp",
    element: "argent",
    cost: 2,
    power: 2000,
    name: "Mistshaper",
    type: "Unit",
    subtype: "legendary ???",
    rarity: "Secret Rare",
    number: "047",
    effect:
      " Arrive - Search your deck for a unit that has the same name as another target unit you control and add it to your hand.",
  },
  {
    image: "images/Intro-Deck-2019/tower-of-air.webp",
    element: "air",
    defense: 1000,
    name: "Tower of Air",
    type: "Tower",
    rarity: "Intro Deck",
    number: "048",
    effect:
      "When this card is destroyed, you can return up to two Units from the field to their owner's hand.",
  },
  {
    image: "images/Intro-Deck-2019/tower-of-darkness.webp",
    element: "dark",
    defense: 1500,
    name: "Tower of Darkness",
    type: "Tower",
    rarity: "Intro Deck",
    number: "049",
    effect:
      "When this card is destroyed, you can look at your opponent's hand and select one card, then your opponent discards that card.",
  },
  {
    image: "images/Intro-Deck-2019/tower-of-fire.webp",
    element: "fire",
    defense: 1000,
    name: "Tower of Fire",
    type: "Tower",
    rarity: "Intro Deck",
    number: "050",
    effect: "When this card is destroyed, you can destroy a Unit.",
  },
  {
    image: "images/Intro-Deck-2019/tower-of-light.webp",
    element: "light",
    defense: 1500,
    name: "Tower of Light",
    type: "Tower",
    rarity: "Intro Deck",
    number: "051",
    effect:
      "When this card is destroyed, you can put into play a Knight Unit Token with Guardian (Unit * Knight/Light/2000).",
  },
  {
    image: "images/Intro-Deck-2019/tower-of-water.webp",
    element: "water",
    defense: 1500,
    name: "Tower of Water",
    type: "Tower",
    rarity: "Intro Deck",
    number: "052",
    effect: "When this card is destroyed, you can draw two cards.",
  },
  {
    searchable: "daylon-the-conjurers-raven",
    name: "Daylon, the Conjurer's Raven",
    type: "legendary raven",
    element: "dark",
    promo: true,
    number: "053",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/daylon-the-conjurers-raven.jpg",
    effect:
      'Arrive – If your champion is "Hoenna, the Immoral Conjurer", choose one.\n* Put three counters on your champion.\n* Remove all counters from your champion, then search your deck for a non-legendary unit with cost equal or less than the number of counters you removed this way and put it into play.',
    special:
      "This card is based on former Baltimore Ravens player Daylon Mack!",
  },
  {
    image: "images/Betrayal/skytree-hawk.webp",
    element: "air",
    cost: 2,
    power: 1000,
    name: "Skytree Hawk",
    type: "Unit",
    subtype: "beast",
    rarity: "Rare",
    number: "054",
    effect:
      "When this card is returned to your hand from the field - You can discard this card, Draw two cards.",
  },
  {
    searchable: "ruka-pugilist-of-the-holy-flame",
    name: "Ruka, Pugilist of the Holy Flame",
    type: "warrior",
    element: "fire",
    promo: true,
    number: "055",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/ruka-pugilist-of-the-holy-flame.png",
    effect:
      "Arrive – If you control another Fire unit, this card gets +500 and gains Brawler.\nWhenever this declares an attack on a unit – If your spirit is Fire, you may flip it face-up.",
  },
  {
    image: "images/Revelations/ghostly-demise.webp",
    element: "dark",
    cost: 2,
    name: "Ghostly Demise",
    type: "Spell",
    rarity: "Rare",
    number: "056",
    effect:
      "As an additional cost to play this card, Offering X (Expel any number of units from your discard zone).\n" +
      "Destroy all units with cost X. (X equals the number of units expelled for Offering.)",
  },
  {
    image: "images/Expansion-Pack-Genesis/voidfire-dragon.webp",
    element: "fire",
    cost: 3,
    power: 1500,
    name: "Voidfire Dragon",
    type: "Unit",
    subtype: "dragon",
    number: "057",
    effect:
      "While there is a destroyed Fire tower, expel two or more Fire units from your hand whose combined cost is at least 6: Put this card from your discard zone into play. Expel it when it leaves the field.\n" +
      'Ruined - Add target expelled Fire unit you own, except "Voidfire Dragon", to your hand.',
  },
  {
    searchable: "liyu-avarice-reborn",
    name: "Liyu, Avarice Reborn",
    type: "golem",
    element: "dark",
    promo: true,
    number: "058",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/liyu-avarice-reborn.jpg",
    effect:
      "When this card is put into the discard zone from anywhere – You may sacrifice a Dark unit. If you do, put this card into play.",
  },
  {
    image: "images/Revelations/blazewalker-rookie-ark.webp",
    element: "fire",
    cost: 2,
    power: 1500,
    name: "Blazewalker Rookie, Ark",
    type: "Unit",
    subtype: "blazewalker",
    rarity: "Common",
    number: "059",
    effect: "When this card is expelled - You may deal 1000 to target unit.",
  },
  {
    image: "images/Expansion-Pack-Generations/raging-shardbeast.webp",
    element: "argent",
    cost: 1,
    power: 2000,
    name: "Raging Shardbeast",
    type: "Unit",
    subtype: "beast",
    number: "060",
    effect: " You cannot play cards with cost (3) or more.",
  },
  {
    searchable: "valtier-the-magical-marksman",
    name: "Valtier, the Magical Marksman",
    type: "pirate",
    element: "light",
    number: "061",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/valtier-the-magical-marksman.jpg",
    effect: "Exhaust, pay (2): Destroy target unit with cost (2) or less.",
  },
  {
    image: "images/Ascension/RavenousAcidicMonger.webp",
    element: "Argent",
    cost: 5,
    power: 2500,
    name: "Ravenous Acidic Monger",
    type: "Unit",
    subtype: "Beast",
    effect:
      "Arrive - Destroy up to two target augments. If you destroyed at least one, this card gains Quickness. If you destroyed two, this card also gains Destroyer.",
    rarity: "Rare",
    number: "062",
  },
  {
    image: "images/Ascension/EllaCorruptedByLove.webp",
    element: "Argent",
    cost: 3,
    power: 2000,
    name: "Ella, Corrupted by Love",
    type: "Unit",
    subtype: "Silver General Skyraider",
    effect:
      "Discard a Silver General unit from your hand: Target unit or augment loses all abilities as long as you control this card.Whenever this card is discarded - You may pay (1): If you do, target unit or augment loses all abilities this turn.",
    rarity: "Rare",
    number: "063",
  },
  {
    searchable: "rex-child-of-brilliance",
    name: "Rex, Child of Brilliance",
    type: "child sorcerer",
    element: "water",
    number: "064",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/rex-child-of-brilliance.jpg",
    effect:
      "If you would use Shard Drain you may sacrifice this card instead of returning a shard to your shard deck.",
  },
  {
    image: "images/Revelations/bone-scavager.webp",
    element: "argent",
    cost: 1,
    power: 1000,
    name: "Bone Scavager",
    type: "Unit",
    subtype: "beast",
    rarity: "Common",
    number: "065",
    effect:
      "Arrive - Expel target unit from a discard zone.\n" +
      "Pay (1): Expel target unit from a discard zone, and if you do, place a +500 counter on this card.",
  },
  {
    image: "images/Revelations/queen-of-the-sandsea.webp",
    element: "air",
    cost: 3,
    power: 1500,
    name: "Queen of the Sandsea",
    type: "Unit",
    rarity: "Rare",
    number: "067",
    effect:
      "Arrive - Take control of target unit with cost (2) or less, as long as you control this card.",
  },
  {
    image: "images/Betrayal/sandsea-traveller.webp",
    element: "air",
    cost: 2,
    power: 1500,
    name: "Sandsea Traveller",
    type: "Unit",
    rarity: "Common",
    number: "068",
    effect: "When this card attacks - Switch one of your Shards to active.",
  },
  {
    image: "images/Ascension/SilverKingsPawn.webp",
    element: "Argent",
    cost: 1,
    power: 500,
    name: "Silver King's Pawn",
    type: "Unit",
    subtype: "Silver Army",
    effect:
      "You may have any number of copies of this card in your deck.Exhaust two Silver Army units you control: Add target Argent unit from your discard zone to your hand.",
    rarity: "Common",
    number: "069",
  },
  {
    image: "images/Revelations/trick.webp",
    element: "dark",
    cost: 1,
    name: "Trick!",
    type: "Spell",
    rarity: "Common",
    number: "070",
    effect: "Instacast\nTarget unit loses all abilities this turn.",
  },
  {
    image: "images/Revelations/entreat-the-blazewalkers.webp",
    element: "fire",
    cost: 1,
    name: "Entreat the Blazewalkers",
    type: "Spell",
    rarity: "Common",
    number: "071",
    effect:
      "Expel one Blazewalker unit from your deck, then you may add a card with the same name from your deck to your hand.",
  },
  {
    image: "images/Revelations/treat.webp",
    element: "dark",
    cost: 1,
    name: "Treat!",
    type: "Spell",
    rarity: "Common",
    number: "072",
    effect:
      "Instacast\n" +
      "As an additional cost to play this card, sacrifice a unit.\n" +
      "Search your deck for a number of cards equal to the sacrificed unit's cost, and send them to the discard zone.",
  },
  {
    searchable: "daylon-the-conjurers-raven",
    name: "Daylon, the Conjurer's Raven",
    type: "legendary raven",
    element: "dark",
    promo: true,
    number: "073",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/daylon-the-conjurers-raven.jpg",
    effect:
      'Arrive – If your champion is "Hoenna, the Immoral Conjurer", choose one.\n* Put three counters on your champion.\n* Remove all counters from your champion, then search your deck for a non-legendary unit with cost equal or less than the number of counters you removed this way and put it into play.',
    special:
      "This card is based on former Baltimore Ravens player Daylon Mack!",
  },
  {
    searchable: "ruka-pugilist-of-the-holy-flame",
    name: "Ruka, Pugilist of the Holy Flame",
    type: "warrior",
    element: "fire",
    number: "075",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/ruka-pugilist-of-the-holy-flame.png",
    effect:
      "Arrive – If you control another Fire unit, this card gets +500 and gains Brawler.\nWhenever this declares an attack on a unit – If your spirit is Fire, you may flip it face-up.",
  },
  {
    image: "images/Revelations/animated-spellbook.webp",
    element: "water",
    cost: 1,
    power: 500,
    name: "Animated Spellbook",
    type: "Unit",
    subtype: "animate object",
    rarity: "Rare",
    number: "076",
    effect:
      "Ruined - Add a spell that cost (1) or less from your deck to your hand.",
  },
  {
    searchable: "liyu-avarice-reborn",
    name: "Liyu, Avarice Reborn",
    type: "golem",
    element: "dark",
    number: "077",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/liyu-avarice-reborn.jpg",
    effect:
      "When this card is put into the discard zone from anywhere – You may sacrifice a Dark unit. If you do, put this card into play.",
  },
  {
    image: "images/Ascension/GloomNecrolord.webp",
    element: "Dark",
    cost: 9,
    power: 3000,
    name: "Gloom Necrolord",
    type: "Unit",
    effect:
      "Ruined - You may expel this card from your discard zone: If you do, put two target units from your discard zone into play.",
    rarity: "Rare",
    number: "078",
  },
  {
    searchable: "valtier-the-magical-marksman",
    name: "Valtier, the Magical Marksman",
    type: "pirate",
    element: "light",
    number: "079",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/valtier-the-magical-marksman.jpg",
    effect: "Exhaust, pay (2): Destroy target unit with cost (2) or less.",
  },
  {
    searchable: "woody-loyal-pack-leader",
    name: "Woody, Loyal Pack Leader",
    type: "legendary beast",
    element: "argent",
    number: "080",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/woody-loyal-pack-leader.jpg",
    effect:
      'Guardian, Target Attack\nArrive – Put into play a Hound token (Unit * Beast/Light/500) that has Guardian and "Sacrifice this card: Prevent the next damage that would be dealt to target unit this turn." If your spirit is "Buckeye, the Loyal", put two into play instead.',
    special: "This card is based on one of Jim's real dogs!",
  },
  {
    image: "images/Expansion-Pack-Generations/corona-the-spirit-ruby.webp",
    element: "argent",
    name: "Corona, the Spirit Ruby",
    type: "Legendary Shard",
    number: "083",
    effect:
      "If you control another legendary shard send this card to the discard zone.\n" +
      "Exhaust: Produce (1).\n" +
      "Exhaust, flip your spirit face-down: Destroy target unit.",
  },
  {
    image: "images/Revelations/guiding-winds.webp",
    element: "air",
    cost: 1,
    name: "Guiding Winds",
    type: "Spell",
    rarity: "Common",
    number: "084",
    effect:
      " Instacast\n" +
      "Return target unit you control to its owner's hand, and if you do draw one card.",
  },
  {
    searchable: "rex-child-of-brilliance",
    name: "Rex, Child of Brilliance",
    type: "child sorcerer",
    element: "water",
    number: "085",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/rex-child-of-brilliance.jpg",
    effect:
      "If you would use Shard Drain you may sacrifice this card instead of returning a shard to your shard deck.",
  },
  {
    image: "images/Revelations/silverstone-sentinel.webp",
    element: "argent",
    cost: 3,
    power: 2000,
    name: "Silverstone Sentinel",
    type: "Unit",
    rarity: "Common",
    number: "086",
    effect:
      "Once per turn, when your opponent activates or triggers the ability of their Champion or Spirit - You may choose one.\n" +
      "* Draw a card.\n" +
      "* Expel target card from your opponent's discard zone.",
  },
  {
    searchable: "woody-loyal-pack-leader",
    name: "Woody, Loyal Pack Leader",
    type: "legendary beast",
    element: "argent",
    number: "087",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/woody-loyal-pack-leader.jpg",
    effect:
      'Guardian, Target Attack\nArrive – Put into play a Hound token (Unit * Beast/Light/500) that has Guardian and "Sacrifice this card: Prevent the next damage that would be dealt to target unit this turn." If your spirit is "Buckeye, the Loyal", put two into play instead.',
    special: "This card is based on one of Jim's real dogs!",
  },
  {
    image: "images/Revelations/phantasmal-storm.webp",
    element: "water",
    cost: 2,
    name: "Phantasmal Storm",
    type: "Spell",
    rarity: "Super Rare",
    number: "088",
    effect:
      "Instacast\n" +
      "Deal 2000 to target unit.\n" +
      'Shard Drain 1, expel this card from your discard zone: Search your deck for a "Phantasmal Storm" and add it to your hand.',
  },
  {
    searchable: "tux-the-emperor-spirit",
    name: "Tux, the Emperor Spirit",
    number: "089",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/tux-the-emperor-spirit.jpg",
    effect:
      "When a unit you control destroys a tower - You may draw a card then discard a card.\nSoulburst, pay (3): Stun all units your opponent controls. (A Stunned card cannot attack, block, or use activated abilities, until the end of the next turn.)",
  },
  {
    image: "images/Intro-Deck-2019/hoenna-immoral-conjurer.webp",
    element: "dark",
    name: "Hoenna, Immoral Conjurer",
    type: "Champion",
    rarity: "Intro Deck",
    number: "090",
    effect:
      "When you destroy a Tower or Unit in battle - Place one counter on this card.\n" +
      "Remove three counters from this card: Put into play a Golem Token Unit (Unit * Golem/Dark/1500).",
  },
  {
    image: "images/Intro-Deck-2019/dragonholt-the-dracoborg.webp",
    element: "fire",
    name: "Dragonholt, the Dracoborg",
    type: "Champion",
    rarity: "Intro Deck",
    number: "091",
    effect:
      "Exhaust, pay 1, discard one Fire Unit from your hand: Add one non-Legendary Dragon Unit from your deck to your hand.",
  },
  {
    image: "images/Intro-Deck-2019/jemial-cryptic-caster.webp",
    element: "water",
    name: "Jemial, Cryptic Caster",
    type: "Champion",
    rarity: "Intro Deck",
    number: "092",
    effect:
      "Place one counter on this card for each Water Unit that comes into play on your field.\n" +
      "Remove three counters from this card: Draw two cards then discard one card.",
  },
  {
    image: "images/Intro-Deck-2019/eitan-exiled-prince.webp",
    element: "air",
    name: "Eitan, Exiled Prince",
    type: "Champion",
    rarity: "Intro Deck",
    number: "093",
    effect:
      "Once per turn, pay 1 and sacrifice a Unit you control: Put into play one Air Unit from your hand whose cost is 1 greater than the sacrificed Unit.",
  },
  {
    image: "images/Intro-Deck-2019/liam-traitor-of-knights.webp",
    element: "light",
    name: "Liam, Traitor of Knights",
    type: "Champion",
    rarity: "Intro Deck",
    number: "094",
    effect:
      "When you destroy an opponent's Tower - You can add one Gear from your deck to your hand.\n" +
      "Once per turn, discard one Gear from your hand: target Unit gets +500 this turn.",
  },
  {
    image: "images/Intro-Deck-2019/hoenna-immoral-conjurer.webp",
    element: "dark",
    name: "Hoenna, Immoral Conjurer",
    type: "Champion",
    rarity: "Intro Deck",
    number: "097",
    effect:
      "When you destroy a Tower or Unit in battle - Place one counter on this card.\n" +
      "Remove three counters from this card: Put into play a Golem Token Unit (Unit * Golem/Dark/1500).",
  },
  {
    image: "images/Intro-Deck-2019/dragonholt-the-dracoborg.webp",
    element: "fire",
    name: "Dragonholt, the Dracoborg",
    type: "Champion",
    rarity: "Intro Deck",
    number: "098",
    effect:
      "Exhaust, pay 1, discard one Fire Unit from your hand: Add one non-Legendary Dragon Unit from your deck to your hand.",
  },
  {
    image: "images/Intro-Deck-2019/jemial-cryptic-caster.webp",
    element: "water",
    name: "Jemial, Cryptic Caster",
    type: "Champion",
    rarity: "Intro Deck",
    number: "099",
    effect:
      "Place one counter on this card for each Water Unit that comes into play on your field.\n" +
      "Remove three counters from this card: Draw two cards then discard one card.",
  },
  {
    image: "images/Intro-Deck-2019/eitan-exiled-prince.webp",
    element: "air",
    name: "Eitan, Exiled Prince",
    type: "Champion",
    rarity: "Intro Deck",
    number: "100",
    effect:
      "Once per turn, pay 1 and sacrifice a Unit you control: Put into play one Air Unit from your hand whose cost is 1 greater than the sacrificed Unit.",
  },
  {
    image: "images/Intro-Deck-2019/liam-traitor-of-knights.webp",
    element: "light",
    name: "Liam, Traitor of Knights",
    type: "Champion",
    rarity: "Intro Deck",
    number: "101",
    effect:
      "When you destroy an opponent's Tower - You can add one Gear from your deck to your hand.\n" +
      "Once per turn, discard one Gear from your hand: target Unit gets +500 this turn.",
  },
  {
    image: "images/Betrayal/omega-magic-yami.webp",
    element: "dark",
    cost: 2,
    name: "Omega Magic: Yami",
    type: "Spell",
    rarity: "Super Rare",
    number: "102",
    effect:
      "Instacast\n" +
      "Choose one OR if you have two or less towers remaining you can choose both.\n" +
      "* Target unit gets -1000 this turn.\n" +
      "* Return target unit with cost (3) or less from your discard zone to the field.",
  },
  {
    image: "images/Betrayal/omega-magic-kaze.webp",
    element: "air",
    cost: 2,
    name: "Omega Magic: Kaze",
    type: "Spell",
    rarity: "Super Rare",
    number: "103",
    effect:
      "Instacast\n" +
      "If you have two or less towers remaining, this card costs (0) to play.\n" +
      "Target unit cannot deal damage or attack this turn. Draw one card.",
  },
  {
    image: "images/Betrayal/omega-magic-mizu.webp",
    element: "water",
    cost: 2,
    name: "Omega Magic: Mizu",
    type: "Spell",
    rarity: "Super Rare",
    number: "104",
    effect:
      "Instacast\n" +
      "Choose one OR if you have two or less towers remaining, choose two.\n" +
      "* Draw one card.\n" +
      "* Exhaust target unit.\n" +
      "* Return target unit to its owner's hand if it is exhausted.",
  },
  {
    image: "images/Betrayal/omega-magic-kasai.webp",
    element: "fire",
    cost: 2,
    name: "Omega Magic: Kasai",
    type: "Spell",
    rarity: "Super Rare",
    number: "105",
    effect:
      "Instacast\n" +
      "Deal 1500 to target attacking or blocking unit.\n" +
      "Then, if you have two or less towers remaining, deal 2000 to target unit.",
  },
  {
    image: "images/Betrayal/omega-magic-hikari.webp",
    element: "light",
    cost: 2,
    name: "Omega Magic: Hikari",
    type: "Spell",
    rarity: "Super Rare",
    number: "106",
    effect:
      "Instacast\n" +
      "Put into play one Knight unit token with Guardian (Unit * Knight/Light/1000). If you have two or less towers remaining, put into play two tokens instead.",
  },
  {
    image: "images/Betrayal/zephyr-crystal.webp",
    element: "argent",
    name: "Zephyr Crystal",
    type: "Special Shard",
    rarity: "Rare",
    number: "107",
    effect:
      "If your spirit isn't Air, this card comes into play exhausted.\n" +
      "Exhaust: Produce (1).\n" +
      "Exhaust, pay (2): Destroy target Augment.",
  },
  {
    image: "images/Betrayal/nightmare-crystal.webp",
    element: "argent",
    name: "Nightmare Crystal",
    type: "Special Shard",
    rarity: "Rare",
    number: "108",
    effect:
      "If your spirit isn't Dark, this card comes into play exhausted.\n" +
      "Exhaust: Produce (1).\n" +
      "Exhaust: Send the top card of your deck to the discard zone.",
  },
  {
    image: "images/Betrayal/hallowed-crystal.webp",
    element: "argent",
    name: "Hallowed Crystal",
    type: "Special Shard",
    rarity: "Rare",
    number: "109",
    effect:
      "If your spirit isn't Light, this card comes into play exhausted.\n" +
      "Exhaust: Produce (1).\n" +
      "Exhaust, pay (1): Target unit with Guardian gets +500 this turn.",
  },
  {
    image: "images/Betrayal/cryptic-crystal.webp",
    element: "argent",
    name: "Cryptic Crystal",
    type: "Special Shard",
    rarity: "Rare",
    number: "110",
    effect:
      "If your spirit isn't Water, this card comes into play exhausted.\n" +
      "Exhaust: Produce (1).\n" +
      "Arrive - Look at the top two cards of your deck and put them back in any order.",
  },
  {
    image: "images/Betrayal/wyvern-crystal.webp",
    element: "argent",
    name: "Wyvern Crystal",
    type: "Special Shard",
    rarity: "Rare",
    number: "111",
    effect:
      "If your spirit isn't Fire, this card comes into play exhausted.\n" +
      "Exhaust: Produce (1).\n" +
      "Arrive - Add target Dragon unit from your discard zone to your hand, and, if you do, discard one card from your hand.",
  },
  {
    image: "images/Expansion-Pack-Genesis/tower-of-surging-gales.webp",
    element: "air",
    name: "Tower of Surging Gales",
    type: "Tower",
    defense: 1000,
    number: "112",
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
    number: "113",
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
    number: "114",
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
    number: "115",
    effect:
      "Use only if your spirit or champion is Water.\n" +
      "When this card is destroyed: You may search your deck for a spell and add it to your hand. Use this effect only if you have more destroyed towers than your opponent.",
  },
  {
    image: "images/Expansion-Pack-Genesis/tower-of-surging-flames.webp",
    element: "fire",
    name: "Tower of Surging Flames",
    type: "Tower",
    defense: 1500,
    number: "116",
    effect:
      "Use only if your spirit or champion is Fire.\n" +
      "When this card is destroyed: You may deal 1500 to all units your opponent controls. Use this effect only if you have more destroyed towers than your opponent.",
  },
  {
    searchable: "buckeye-the-loyal",
    name: "Buckeye, the Loyal",
    element: "light",
    number: "117",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/buckeye-the-loyal.jpg",
    effect:
      'You start the game with a Hound unit token with Guardian (Unit * Hound/Light/500). This token cannot attack, and has "Sacrifice this unit: Prevent the next damage that would be dealt to target unit this turn."\nSoulburst: Prevent all damage that would be dealt to target unit this turn.',
    special: "This card is based on one of Jim's real dogs!",
  },
  {
    image: "images/Intro-Deck-2019/hoenna-immoral-conjurer.webp",
    element: "dark",
    name: "Hoenna, Immoral Conjurer",
    type: "Champion",
    rarity: "Intro Deck",
    number: "118",
    effect:
      "When you destroy a Tower or Unit in battle - Place one counter on this card.\n" +
      "Remove three counters from this card: Put into play a Golem Token Unit (Unit * Golem/Dark/1500).",
  },
  {
    image: "images/Intro-Deck-2019/azure-seer.webp",
    element: "water",
    cost: 1,
    power: 1000,
    name: "Azure Seer",
    type: "Unit",
    rarity: "Intro Deck",
    number: "119",
    effect:
      "Arrive - Look at the top card of your deck and place it back at the top or bottom of your deck.",
  },
  {
    searchable: "demonic-spy",
    name: "Demonic Spy",
    type: "demon",
    element: "dark",
    number: "121",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/demonic-spy.jpg",
    effect:
      "Arrive – Flip target face-down tower your opponent controls face-up.",
  },
  {
    image: "images/Intro-Deck-2019/fizzy-the-water-spirit.webp",
    element: "water",
    affinity: 8,
    name: "Fizzy, the Water Spirit",
    type: "Spirit",
    rarity: "Intro Deck",
    number: "122",
    effect:
      "Once per turn, during your turn, Shard Drain 1: Draw one card.\n" +
      "During your turn, Soulburst: Draw one card.",
  },
  {
    image: "images/Intro-Deck-2019/luna-the-dark-spirit.webp",
    element: "dark",
    affinity: 8,
    name: "Luna, the Dark Spirit",
    type: "Spirit",
    rarity: "Intro Deck",
    number: "123",
    effect:
      "When you destroy a tower or unit in battle - Place one counter on this card.\n" +
      "During your turn, remove three counters from this card: Your opponent discards one card.\n" +
      "During your turn, Soulburst: Your opponent discards one card.",
  },
  {
    image: "images/Intro-Deck-2019/corona-the-fire-spirit.webp",
    element: "fire",
    affinity: 8,
    name: "Corona, the Fire Spirit",
    type: "Spirit",
    rarity: "Intro Deck",
    number: "124",
    effect:
      "Once per turn, during your turn, discard one Fire unit from your hand: Deal 500 to target unit.\n" +
      "During your turn, Soulburst: Target unit gains Quickness this turn.",
  },
  {
    image: "images/Intro-Deck-2019/sola-the-light-spirit.webp",
    element: "light",
    affinity: 8,
    name: "Sola, the Light Spirit",
    type: "Spirit",
    rarity: "Intro Deck",
    number: "125",
    effect:
      "At the end of your turn - You can switch one of your exhausted units to active.\n" +
      "Soulburst: Put into play a Knight unit token with Guardian (Unit * Knight/Light/2000).",
  },
  {
    image: "images/Intro-Deck-2019/kyte-the-air-spirit.webp",
    element: "air",
    affinity: 8,
    name: "Kyte, the Air Spirit",
    type: "Spirit",
    rarity: "Intro Deck",
    number: "126",
    effect:
      "Once per turn, during your turn, discard one card: Return target Air unit you control to its owner's hand and, if you do, switch one of your exhausted shards to active.\n" +
      "Soulburst: Return target unit with cost (3) or less to its owner's hand.",
  },
  {
    image: "images/Ascension/MetaialTheSilverKing.webp",
    element: "Argent",
    name: "Metaial, the Silver King",
    type: "Champion",
    number: "127",
    effect:
      "Instead of drawing for your turn you may discard a card - If you do, search your deck for a Silver General unit and add it to your hand.Pay (1), place a Silver General unit from your discard zone on the bottom of your deck: Draw a card.",
    rarity: "Promo",
  },
  {
    image: "images/Ascension/CarriermechaKyari.webp",
    element: "Argent",
    cost: 0,
    power: 500,
    name: "Carriermecha: Kyari",
    type: "Omega Unit",
    subtype: "Mecha",
    effect:
      'Ω (Place on one of your Mecha units.)Exhaust: Choose one.* Search your deck for a "Shard-Mecha" unit and place it under this card.* Put into play as many "Shard-Mecha" units as possible that are under this card.',
    rarity: "Argent Rare",
    number: "128",
  },
  {
    image: "images/Ascension/LloydTravelerOfWorlds.webp",
    element: "Argent",
    cost: 4,
    power: 2000,
    name: "Lloyd, Traveler of Worlds",
    type: "Unit",
    subtype: "???",
    effect:
      "Arrive - You may place up to three target spells from your discard zone under this card.You may play spells under this card as if they were in your hand, if you do, expel them after they are played. If this card would leave field, expel all cards under it.",
    rarity: "Argent Rare",
    number: "129",
  },
  {
    image: "images/Ascension/MetaialCelestialOfRuin.webp",
    element: "Argent",
    cost: 8,
    power: 6000,
    name: "Metaial, Celestial of Ruin",
    type: "Unit",
    subtype: "Celestial",
    effect:
      'This card costs (1) less to play for each Silver Army and/or Silver General unit you control.If your champion has "Metaial" in its name, this card gains the following abilities.Sacrifice a unit: This card gains Immortal this turn.Sacrifice two other units: Destroy target shard and target unit.Sacrifice three other units: Destroy up to two target towers.',
    rarity: "Argent Rare",
    number: "130",
  },
  {
    searchable: "kratin-being-of-strength",
    name: "Kratin, Being of Strength",
    element: "argent",
    number: "131",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/kratin-being-of-strength.jpg",
    effect: "Exhaust, pay (2): Target attacking unit gets +1000 this turn.",
  },
  {
    searchable: "master-of-the-cerulean-tower",
    name: "Master of the Cerulean Tower",
    element: "argent",
    number: "132",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/master-of-the-cerulean-tower.jpg",
    effect:
      " Exhaust, pay (1): Draw a card, then put a card from your hand on the bottom of your deck.",
  },
  {
    searchable: "greatest-gardner-gregory",
    name: "Greatest Gardener, Gregory",
    element: "argent",
    number: "133",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/greatest-gardner-gregory.jpg",
    effect: "Exhaust, sacrifice a unit: Recover one of your shards.",
  },
  {
    searchable: "dubell-spirit-of-gains",
    name: "Dubell, Spirit of Gains",
    element: "argent",
    number: "134",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/dubell-spirit-of-gains.jpg",
    effect:
      "Exhaust, pay (1): Target attacking unit gets +500 this turn.\nSoulburst: Target unit gets +1000 this turn.",
  },
  {
    searchable: "welink-spirit-of-paper",
    name: "Welink, Spirit of Paper",
    number: "135",
    element: "argent",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/welink-spirit-of-paper.jpg",
    effect:
      "Exhaust, pay (1): Put the bottom card of your deck on top of your deck.\nSoulburst: Draw a card.",
  },
  {
    searchable: "chewallo-spirit-of-seeds",
    name: "Chewallo, Spirit of Seeds",
    number: "136",
    element: "argent",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/chewallo-spirit-of-seeds.jpg",
    effect:
      "Exhaust, pay (1): Look at the top card of your deck, put it on the top of your deck.\nSoulburst: Recover one of your shards.",
  },
  {
    searchable: "tower-of-embers",
    name: "Tower of Embers",
    number: "137",
    element: "fire",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/tower-of-embers.jpg",
    effect:
      "When this tower is destroyed, you may deal 1500 to a unit, then you may deal 1000 to a unit.",
  },
  {
    searchable: "tower-of-waves",
    name: "Tower of Waves",
    number: "138",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/tower-of-waves.jpg",
    effect:
      "When this tower is destroyed, you may draw three cards, then put two cards from your hand on the bottom of your deck.",
  },
  {
    searchable: "tower-of-glimmers",
    name: "Tower of Glimmers",
    number: "139",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/tower-of-glimmers.jpg",
    effect:
      "When this tower is destroyed, you may exhaust all units your opponent controls.",
  },
  {
    image: "images/Ascension/TheGreatMagimaze.webp",
    element: "Argent",
    cost: 3,
    power: 0,
    name: "The Great Magimaze",
    type: "Augment",
    effect:
      'You can only control one "The Great Magimaze".This card comes into play with five Maze counters on it.Exhaust: If this card has no Maze counters, destroy it, and if you do, you win the game.',
    rarity: "Rare",
    number: "140",
  },
  {
    searchable: "tower-of-fear",
    name: "Tower of Fear",
    number: "141",
    element: "dark",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/tower-of-fear.jpg",
    effect:
      "When this tower is destroyed, you may exhaust two of your opponent's shards.",
  },
  {
    searchable: "tower-of-gusts",
    name: "Tower of Gusts",
    number: "142",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/tower-of-gusts.jpg",
    effect:
      "When this tower is destroyed, you may recover all shards you control.",
  },
  {
    searchable: "nori-the-first-warlock",
    name: "Nori, the First Warlock",
    type: "warlock",
    element: "water",
    number: "143",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/nori-the-first-warlock.jpg",
    effect:
      "As an additional cost to play this card you may pay (X).\nArrive – If you paid this card's additional cost, draw X cards.\nWhenever you play a Water spell – You may exhaust target unit.",
    special: "This card is based on Nori Ayukawa, who won ASC I!",
  },
  {
    searchable: "unger-the-conjurers-adversary",
    name: "Unger, the Conjurer's Adversary",
    type: "conjurer",
    element: "dark",
    number: "144",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/unger-the-conjurers-adversary.png",
    effect:
      "Whenever a unit your opponent controls is put into the discard zone - You may put into play a Raven token (Unit/Dark/Beast/500).\nSacrifice two other units: Your opponent's champion loses all abilities this turn.",
    special: "This card is based on Jesse Unger, who won ASC II!",
  },
  {
    searchable: "gz-blazerusher-squire",
    name: "G.Z., Blazerusher Squire",
    type: "blazerusher",
    element: "fire",
    number: "145",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/gz-blazerusher-squire.jpg",
    effect:
      "Arrive – You may expel an Air card from your discard zone, and/or a Fire card from your hand. If you do, put an Explosion Counter on this card for each card expelled this way.\nRemove an Explosion counter from a card you control: This card gains Quickness.\nRemove two Explosion counters from cards you control: Destroy target tower you own and target tower your opponent owns.",
  },
  {
    searchable: "yuki-brightveiler-squire",
    name: "Yuki, Brightveiler Squire",
    type: "brightveiler",
    number: "146",
    element: "light",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/yuki-brightveiler-squire.jpg",
    effect:
      "Target Attack\nThis card cannot be targeted by spells or abilities of cards with cost (2) or less.\nExpel a Dark card and Light card from your discard zone, and reveal this card from your hand: Put this card from your hand into play, and if you do, exhaust target unit your opponent controls. Use only while your opponent has three or more destroyed towers.",
  },
  {
    searchable: "brilliant-verdure",
    name: "Brilliant Verdure",
    element: "air",
    number: "146",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/brilliant-verdure.jpg",
    effect:
      "If this is the second card you've played this turn, this card costs (1) less to play.\nLook at the top four cards of your deck. You may add a unit and/or augment among them to your hand. Place the rest on the bottom of your deck in any order.",
  },
  {
    searchable: "ash-tidemelder-squire",
    name: "Ash, Tidemelder Squire",
    type: "tidemelder",
    element: "water",
    number: "147",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/ash-tidemelder-squire.jpg",
    effect:
      "Your Fire and Water spells cost (1) less to play while your opponent has three or more destroyed towers.\nOnce per turn, expel a Fire card and Water card from your discard zone: Deal 1500 to target unit, and if you do, draw a card.",
  },
  {
    searchable: "forager-of-the-fallen-leaf",
    name: "Forager of the Fallen Leaf",
    type: "mystic",
    element: "air",
    number: "147",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/forager-of-the-fallen-leaf.jpg",
    effect:
      "Units you control with power that is double or more their original power cannot be targeted by your opponent's spells or abilities.\nWhenever a unit is put into play under your control - You may pay (X). If you do, put X +500 counters on that unit.",
  },
  {
    searchable: "nanatsu-stormsurger-squire",
    name: "Nanatsu, Stormsurger Squire",
    type: "stormsurger",
    element: "air",
    number: "148",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/nanatsu-stormsurger-squire.jpg",
    effect:
      "Instacast\nOnce per turn, expel an Air card and a Water card from your discard zone: Exhaust target unit, and if you do, recover one of your shards. Use this only while your opponent has three or more destroyed towers.",
  },
  {
    searchable: "abyssal-maw",
    name: "Abyssal Maw",
    element: "dark",
    number: "148",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/abyssal-maw.png",
    effect:
      "Target unit gets -X000 this turn. (X equals the number of Dark units in your discard zone.)",
  },
  {
    searchable: "linda-and-goblin-dynamic-duo",
    name: "Linda & Goblin, Dynamic Duo",
    type: "legendary duo",
    number: "149",
    element: "light",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/linda-and-goblin-dynamic-duo.jpg",
    effect:
      'Brawler\nWhile you control a Beast unit, you may play this card from your discard zone as if it was in your hand.\nArrive – Put into play a Cat token (Unit/Beast/Light/1000) that has "Cannot be targeted by spells or abilities.".',
    special: "This is a Kickstarter card!",
  },

  {
    searchable: "enforcer-of-the-twisting-abyss",
    name: "Enforcer of the Twisting Abyss",
    type: "dragon",
    element: "dark",
    number: "149",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/enforcer-of-the-twisting-abyss.png",
    effect:
      "Whenever this card deals damage to an opponent's tower - Your opponent discards a card and you draw a card.\nWhenever your opponent discards a card - You may add this card from your discard zone to your hand.",
  },
  {
    searchable: "void-flame-expulsion",
    name: "Void Flame Expulsion",
    element: "fire",
    number: "150",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/void-flame-expulsion.jpg",
    effect:
      "Instacast\nPlay only while you control a Fire unit. Neither player can add to the queue in response to this card. Expel target unit or augment, and if you do, it's owner draws a card.",
  },
  {
    searchable: "underlord-of-the-void-flame",
    name: "Underlord of the Void Flame",
    type: "warrior",
    element: "fire",
    number: "151",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/underlord-of-the-void-flame.jpg",
    effect:
      "As an additional cost to play this card you may sacrifice a Fire unit with cost (2) or more. If you do, this card costs (2) less to play.\nIf you paid the additional cost to play this card, this card gains Quickness.",
  },
  {
    searchable: "rippling-sword-slash",
    name: "Rippling Sword Slash",
    element: "light",
    number: "152",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/rippling-sword-slash.png",
    effect:
      "Exhaust target unit your opponent controls, and if you do, you may recover a unit you control with cost less than the exhausted unit.",
  },
  {
    searchable: "striker-of-the-endless-sword",
    name: "Striker of the Endless Sword",
    type: "warrior",
    element: "light",
    number: "153",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/striker-of-the-endless-sword.png",
    effect:
      "Arrive - You may discard a card, if you do, choose one.\n* Exhaust target unit.\n* Recover target unit.",
  },
  {
    searchable: "twisting-premonition",
    name: "Twisting Premonition",
    element: "water",
    number: "154",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/twisting-premonition.png",
    effect:
      "Instacast\nLook at the top card of your deck. You may put it into the discard zone. Draw a card.",
  },
  {
    searchable: "ruler-of-the-twisting-waters",
    name: "Ruler of the Twisting Waters",
    type: "mystic",
    element: "water",
    number: "155",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/ruler-of-the-twisting-waters.png",
    effect:
      "Arrive - Target a Water spell in your discard zone. This turn, you may play that card from your discard zone as if it were in your hand. Expel that card if you do.",
  },
  {
    searchable: "shard-mecha-prime-king-warku",
    name: "Shard-Mecha Prime: King Warku",
    type: "mecha",
    element: "argent",
    number: "160",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/shard-mecha-prime-king-warku.jpg",
    effect:
      'Unblockable\nWhile you control "Underground Mech Base", you may play this card from your discard zone as if it was in your hand. If you do, expel this card when it leaves the field.\nArrive – You may discard a card. If you do, search your deck for an "Underground Mech Base" and put it into play, and if you do, you may also add a "Shard-Mecha" unit with cost (3) or less from your deck to your hand.',
    special: "This is a Kickstarter card!",
  },
  {
    searchable: "silver-kings-overseer",
    name: "Silver King's Overseer",
    type: "silver army",
    element: "argent",
    number: "161",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/silver-kings-overseer.jpg",
    effect:
      'Ruined - Search your deck for up to one "Silver King\'s Pawn" and put it into play. If your champion is "Metaial the Silver King" put two into play instead.',
  },
  {
    searchable: "citra-aspirant-rose-knight",
    name: "Citra, Aspirant Rose Knight",
    type: "rose knight",
    element: "light",
    number: "162",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/citra-aspirant-rose-knight.jpg",
    effect:
      'Discard this card and a Gear from your hand: Search your deck for "Order of the Rose" and add it to your hand.\nArrive - If a unit was sent from your field to the discard zone this turn, you may search your deck for a Rose Knight unit with cost (2) or less, except "Citra, Aspirant Rose Knight" and put it into play.',
  },
  {
    searchable: "omega-charger",
    name: "\u03A9 Charger",
    type: "mech",
    element: "argent",
    number: "163",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/omega-charger.jpg",
    effect:
      "Arrive – Put target unit from your discard zone under target \u03A9 unit you control.",
  },
  {
    searchable: "omega-amulet",
    name: "\u03A9 Amulet",
    type: "legendary amulet",
    element: "argent",
    number: "164",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/omega-amulet.jpg",
    effect:
      "Arrive – Draw a card.\nSacrifice this card: Champions lose all abilities this turn. Neither player can add to the queue in response to this ability.",
  },
  {
    searchable: "ruka-the-dragonsoul-pugilist",
    name: "Ruka, the Dragonsoul Pugilist",
    type: "warrior",
    element: "fire",
    number: "167",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/ruka-the-dragonsoul-pugilist.png",
    effect:
      "While you control this card, this card is also treated as a Dragon unit.\nThis card gets +500 for each of your expelled Dragon units.\nArrive - You may expel a Fire unit from your hand. If you do, draw a card. If you expelled a Dragon unit, draw two cards instead.",
  },
  {
    searchable: "sandsea-hydra-scorpion",
    name: "Sandsea Hydra Scorpion",
    type: "dragon beast",
    number: "172",
    element: "air",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/sandsea-hydra-scorpion.jpg",
    effect:
      "Ruined – Search your deck for a Beast unit with cost (1) or less and put it into play.",
  },
  {
    searchable: "demi-bahamute",
    name: "Demi-Bahamute",
    type: "dragon",
    number: "173",
    element: "fire",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/demi-bahamute.jpg",
    effect:
      "Destroyer\nArrive - You may reveal two Dragon units from your hand: Destroy any number of units your opponent controls with combined power 2000 or less. For each unit destroyed this way, you may search your deck for a Dragon unit with cost (1) and put it into play.",
  },
  {
    searchable: "demi-leviathan",
    name: "Demi-Leviathan",
    type: "serpent",
    element: "water",
    number: "174",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/demi-leviathan.png",
    effect:
      "Guardian\nArrive - You may flip any number of your face-down towers face-up. If you do, take control of any number of target units whose combined cost is equal to or less than the number of towers you flipped up.",
  },
  {
    image: "images/Hokken/HokkenArchaeologist.webp",
    element: "Argent",
    cost: 2,
    power: 1000,
    name: "Hokken Archaeologist",
    type: "Unit",
    subtype: "Adventurer",
    effect:
      "Augments you control cannot be targeted by spells or abilities.\nArrive - You may search your deck for a non-Location augment and add it to your hand, if you do, put a card from your hand on top of your deck.",
    rarity: "Common",
    number: "175",
  },
  {
    image: "images/Hokken/FragmentOfTheForgottenOne.webp",
    element: "Argent",
    cost: 5,
    power: 3000,
    name: "Fragment of the Forgotten One",
    type: "Unit",
    subtype: "Astral",
    effect:
      "Triggered abilities of units and augments do no trigger.\nOnce per turn, expel another unit you control: This card gains Immortal this turn.",
    rarity: "Argent Rare",
    number: "176",
  },
  {
    image: "images/Hokken/HadirBoyOfTheSacredForest.webp",
    element: "Air",
    name: "Hadir, Boy of the Sacred Forest",
    type: "Champion",
    subtype: "",
    effect:
      "Exhaust, put a card from your hand under this card: If it was a Beast unit, you may place a +500 counter on target unit. If it was an Elemental unit, draw a card.\nPut two cards form under this card into the discard zone: Target unit you control gets +1000 and gains Overrun this turn.",
    rarity: "Promo",
    number: "177",
  },
  {
    image: "images/Hokken/HokkenWardingAmulet.webp",
    element: "Argent",
    cost: 2,
    name: "Hokken Warding Amulet",
    type: "Augment",
    subtype: "",
    effect:
      'Neither player can target cards in discard zones.\nNeither player can activate the abilities of cards in discard zones.\nYou can only control one "Hokken Warding Amulet".',
    rarity: "Argent Rare",
    number: "178",
  },
  {
    image: "images/Hokken/NeferiaTheQueensAssassin.webp",
    element: "Dark",
    name: "Neferia, the Queen's Assassin",
    type: "Champion",
    subtype: "",
    effect:
      "Whenever you trigger the Ruined ability of a unit - You may put that unit under this card.\nExhaust, put three cards from under this card into the discard zone: Target unit loses all abilities this turn. Then if its cost is (3) or less, destroy it.",
    rarity: "Promo",
    number: "179",
  },
  {
    image: "images/Hokken/PengardianLegendHanzo.webp",
    element: "Water",
    name: "Pengardian Legend, Hanzo",
    type: "Champion",
    subtype: "",
    effect:
      "Whenever a unit your opponent controls becomes Stunned - You may put the top card of your deck under this card. If it was a Penguin unit, you may draw a card.\nOnce per turn, put two cards from under this card on the top or bottom of their owner's deck in any order: Ignore the effects of target non-destroyed tower this turn.",
    rarity: "Promo",
    number: "180",
  },
  {
    image: "images/Hokken/RennaFeralWarrior.webp",
    element: "Fire",
    name: "Renna, Feral Warrior",
    type: "Champion",
    subtype: "",
    effect:
      "Exhaust, if you declared an attack with a Fire unit this turn, put the top card of your deck under this card: If it was a Fire unit, you may deal 1000 to target unit your opponent controls.\nPut two cards from under this card on the top or bottom of their owner's deck in any order: Put a Dinosaur unit from your hand or discard zone with cost equal to or less than the number of shards you control into play.",
    rarity: "Promo",
    number: "181",
  },
  {
    image: "images/Hokken/ShardworkArbiter.webp",
    element: "Argent",
    cost: 6,
    power: 5000,
    name: "Shadrwork Arbiter",
    type: "Unit",
    subtype: "Robot Arbiter",
    effect:
      "As an additional cost to play this card you may exhaust any number of units you control. If you do, this card costs (1) less to play for each.\nDestroyer, Guardian, Overrun, Quickness, Target Attack\nAnimate 2 (You must pay (2) to attack or block with this card.)",
    rarity: "Argent Rare",
    number: "182",
  },
  {
    searchable: "tux-the-emperor-spirit",
    name: "Tux, the Emperor Spirit",
    number: "183",
    element: "water",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/tux-the-emperor-spirit.jpg",
    effect:
      "When a unit you control destroys a tower - You may draw a card then discard a card.\nSoulburst, pay (3): Stun all units your opponent controls. (A Stunned card cannot attack, block, or use activated abilities, until the end of the next turn.)",
  },
  {
    image: "images/Hokken/ZaneHeroOfHyldia.webp",
    element: "Light",
    name: "Zane, Hero of Hyldia",
    type: "Champion",
    subtype: "",
    effect:
      "Exhaust: If you declared an attack with a basic unit this turn, put a card from your hand under this card, and if you do, draw a card.\nPut two cards under this card into the discard zone: Put a Hyldian token (Unit/Warrior/Light/1000) into play.",
    rarity: "Promo",
    number: "184",
  },
  {
    searchable: "the-masked-nemesis",
    name: "The Masked Nemesis",
    element: "dark",
    number: "185",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/masked.png",
    effect:
      "Arrive or whenever this card declares an attack - Place a counter on this card.\nRuined - If this card had at least two counters on it, your opponent discards a card. If it had at least three counters, you may put this card into play.",
  },
  {
    searchable: "giga-shardbeast",
    name: "Giga-Shardbeast",
    type: "beast",
    number: "188",
    element: "argent",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/giga-shardbeast.jpg",
    effect:
      'You can only play units.\nOther "Shardbeast" units you control get +500.',
  },
  {
    searchable: "fragment-of-adoration",
    name: "Fragment of Adoration",
    type: "entity",
    element: "argent",
    number: "199",
    promo: true,
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/fragment-of-adoration.jpg",
    effect:
      "\u03A9 (Place on one or more of your units.)\nOnce per turn, put a unit from under this card into the discard zone: If every card in your discard zone has a different name, you may search your deck for a non-Argent card and either add it to your hand or put it into play.",
  },
  {
    searchable: "professor-damous-outlandish-engineer",
    name: "Professor Damous, Outlandish Engineer",
    type: "professor",
    number: "200",
    element: "argent",
    url: "https://argent-saga-card-bucket.s3.amazonaws.com/damous.png",
    effect:
      "Exhaust, sacrifice a unit: Trigger the Arrive ability of the sacrificed unit.",
  },
];

let sal = {
  units: [
    {
      searchable: "ceremonial-harpist",
      name: "Ceremonial Harpist",
      element: "argent",
      url: "https://argent-saga-card-bucket.s3.amazonaws.com/ceremonial-harpist.jpg",
      effect:
        'Guardian\nThis card cannot deal damage, and cannot be targeted by spells.\nRuined – Search your deck for a "Hallowed Harpist" and put it into play.',
    },
    {
      searchable: "dux-the-infamous-skyraider",
      name: "Dux, the Infamous Skyraider",
      element: "air",
      url: "https://argent-saga-card-bucket.s3.amazonaws.com/dux-the-infamous-skyraider.jpg",
      effect:
        "Airship and Skyraider units cost you (1) less to play.\nArrive - Add target Airship or Skyraider unit from your discard zone to your hand.",
    },
    {
      searchable: "gigath-the-king-of-the-gargoyles",
      name: "Gigath, the King of the Gargoyles",
      element: "dark",
      url: "https://argent-saga-card-bucket.s3.amazonaws.com/gigath-king-of-the-gargoyles.jpg",
      effect:
        "This card costs (2) less to play for each card in your hand that exceeds the number of cards in your opponent's hand.\nIf you have more cards in your hand than your opponent, neither player can add to the queue in response to playing this card.\nOther units you control gain Immortal during your turn.",
    },
    {
      searchable: "unrestrained-poltergeist",
      name: "Unrestrained Poltergeist",
      element: "dark",
      url: "https://argent-saga-card-bucket.s3.amazonaws.com/unrestrained-poltergeist.jpg",
      effect:
        "Ruined – Send the top three cards of a player's deck to the discard zone, then a different player expels the top three cards of their deck.",
    },
  ],
  augments: [
    {
      searchable: "ketsu-the-erratic-armor",
      name: "Ketsu, the Erratic Armor",
      type: "gear",
      element: "light",
      promo: true,
      url: "https://argent-saga-card-bucket.s3.amazonaws.com/ketsu-the-erratic-armor.png",
      effect:
        'You can only control one "Ketsu, the Erratic Armor".\nEquip to target \u03A9 unit you control.\nIf the equipped unit would put a unit under it into the discard zone for an ability, you may sacrifice this card instead.\nWhenever one of your \u03A9 units attacks - You may equip this card from your discard zone to that unit.',
    },
  ],
};
