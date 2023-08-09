export const promos = [
  {
    image: "images/Promos/ariana-adventurer-of-argos.webp",
    name: "Ariana, Adventurer of Argos",
    element: "air",
    type: "Champion",
    effect: `At the start of the game (after mulligans) you may add one "Kala, Trusty Companion" and/or one "Ariana's Amulet" from your deck to your hand.`,
    number: "001",
  },
  {
    image: "images/Promos/auron-the-golden-rose.webp",
    name: "Auron, the Golden Rose",
    element: "light",
    type: "Champion",
    effect:
      "Exhaust, Discard one Knight or Gear from your hand: Exhaust target unit.",
    number: "002",
  },
  {
    image: "images/Promos/ergon-the-tragic-gargoyle.webp",
    name: "Ergon, the Tragic Gargoyle",
    element: "dark",
    type: "Champion",
    effect:
      "Exhaust: Send the top two cards of your deck to the discard zone.\n" +
      "Exhaust, Pay (1): Put target unit from your discard zone on top of your deck.",
    number: "003",
  },
  {
    image: "images/Promos/gillian-the-witch-queen.webp",
    name: "Gillian, the Witch Queen",
    element: "water",
    type: "Champion",
    effect:
      "Exhaust, Reveal any number of spells from your hand: Reveal the top card of your deck. If it's a spell with cost equal to or less than the number of cards revealed from your hand, add it to your hand.",
    number: "004",
  },
  {
    image: "images/Promos/raine-mournful-commander.webp",
    name: "Raine, Mournful Commander",
    element: "fire",
    type: "Champion",
    effect:
      "Exhaust, Expel up to two units from your hand: Deal damage to target unit equal to the number of cards expelled x500.",
    number: "005",
  },
  {
    image: "images/Promos/scarlet-egg.webp",
    name: "Scarlet Egg",
    element: "fire",
    cost: 1,
    power: 500,
    type: "Unit",
    subtype: "dragon",
    effect:
      "Guardian\n" +
      "This Unit cannot attack.\n" +
      "If you control two or more other Dragon Units, sacrifice this card: Search your deck for a Dragon Unit with cost 2 or less and put it into play.",
    number: "006",
  },
  {
    image: "images/Promos/yuki-the-lightning-flash.webp",
    name: "Yuki, the Lightning Flash",
    cost: 3,
    power: 2000,
    element: "light",
    type: "knight",
    effect:
      "Target Attack\n" +
      "If this card is in your hand, after one of your Towers is destroyed – Put this card into play.",
    number: "007",
  },
  {
    image: "images/Promos/garga-keeper-of-gales.webp",
    name: "Garga, Keeper of Gales",
    element: "air",
    cost: 5,
    power: 3000,
    type: "Unit",
    subtype: "beast",
    effect:
      "Arrive - Choose a cost. Return all Units of the chosen cost to their owners' hands. If two or more Units are returned to the hand with this effect, this card gains Quickness.",
    number: "008",
  },
  {
    image: "images/Promos/golem-of-devourment.webp",
    name: "Golem Of Devourment",
    element: "dark",
    cost: 2,
    power: 1000,
    type: "Unit",
    subtype: "golem",
    effect:
      "Guardian\n" +
      "This card cannot deal damage.\n" +
      'Ruined - Put a "Golem of Devourment" from your deck into play.',
    number: "009",
  },
  {
    image: "images/Promos/phantasmal-guards.webp",
    name: "Phantasmal Guards",
    element: "water",
    cost: 1,
    type: "Spell",
    effect:
      "Put two Illusion Unit Tokens into play with Guardian (Unit * Illusion/Water/500). These Tokens cannot attack.",
    number: "010",
  },
  {
    image: "images/Promos/silver-watchwoman.webp",
    name: "Silver Watchwoman",
    element: "argent",
    cost: 4,
    power: 2000,
    type: "Unit",
    effect:
      "Arrive - Place two counters on this card.\n" +
      "Remove a counter from this card: Choose one.\n" +
      "* This card gains Quickness (This Unit can attack or activate Exhaust abilities the turn it is played.).\n" +
      "* This card gains Target Attack (This Unit can attack any Unit.).\n" +
      "* Prevent the next damage that would be dealt to this card this turn.",
    number: "011",
  },
  {
    image: "images/Promos/argent-egg.webp",
    name: "Argent Egg",
    element: "argent",
    cost: 1,
    power: 500,
    type: "Unit",
    subtype: "dragon",
    effect:
      "Guardian\n" +
      "This card cannot attack.\n" +
      "Ruined - Put into play one Whelp Unit Token (Unit * Dragon/Argent/500)",
    number: "012",
  },
  {
    image: "images/Promos/argent-shard.webp",
    name: "Argent Shard",
    element: "Argent",
    type: "Basic Shard",
    effect: "Exhaust: Produce (1).",
    number: "013",
  },
  {
    image: "images/Promos/skytree-warship.webp",
    name: "Skytree Warship",
    element: "air",
    cost: 6,
    power: 3000,
    type: "Unit",
    subtype: "airship",
    effect:
      "Destroyer\n" +
      "Arrive - Destroy target Unit with cost 4 or less.\n" +
      "Ruined - You can put target Skyraider Unit or Airship Unit with cost 4 or less from your discard zone into play.",
    number: "014",
  },
  {
    image: "images/Promos/vi-giver-of-light.webp",
    name: "Vi, Giver of Light",
    element: "light",
    cost: 1,
    power: 500,
    type: "Unit",
    effect:
      "Arrive - Send one Gear from your deck to the discard zone.\n" +
      "Sacrifice this card: Target Light Unit gets +500 this turn.",
    number: "015",
  },
  {
    image: "images/Promos/juvenile-dragon.webp",
    name: "Juvenile Dragon",
    element: "fire",
    cost: 1,
    power: 1000,
    type: "Unit",
    subtype: "dragon",
    effect:
      "While you control two or more other Dragon units, this card has Quickness.",
    number: "016",
  },
  {
    image: "images/Promos/hidden-laboratory.webp",
    name: "Hidden Laboratory",
    element: "dark",
    cost: 2,
    type: "Augment",
    effect:
      'Arrive (When this card enters the field zone.) - Place three counters on your Champion if it is "Hoenna, Immoral Conjurer".\n' +
      "Exhaust, sacrifice a Golem Unit: Draw one card.",
    number: "017",
  },
  {
    image: "images/Promos/ash-the-glacial-sorcerer.webp",
    name: "Ash, the Glacial Sorcerer",
    cost: 3,
    power: 2000,
    element: "water",
    type: "Unit",
    effect:
      "When you play a Water Spell – You can place an Ice Wall counter on target non-destroyed Tower you own. (Towers with Ice Wall counters get +500 defense. If a Tower is destroyed, remove all Ice Wall counters from that Tower.)\n" +
      "Remove all Ice Wall counters from all Towers you own: Deal damage to target Unit equal to the number of counters removed x500.",
    number: "018",
  },
  {
    image: "images/Promos/ancient-serpents-breath.webp",
    name: "Ancient Serpent's Breath",
    element: "water",
    cost: 1,
    type: "Spell",
    effect:
      "Instacast\n" +
      "As an additional cost to play this card, you may Shard Drain 1. If you do, return target Unit to the top of its owner's deck.\n" +
      "Return target Unit with cost 2 or less to its owner's hand, then its owner draws one card.",
    number: "019",
  },
  {
    image: "images/Promos/gz-the-explosion-master.webp",
    name: "G.Z. the Explosion Master",
    cost: 2,
    power: 1500,
    element: "fire",
    type: "Unit",
    effect:
      "Arrive – Place an Explosion counter on target Tower you own.\n" +
      "Exhaust, remove an Explosion Counter from a Tower you own: If it's face-down, flip it face-up. Deal damage equal to double its defense to target Unit. Destroy that Tower.",
    number: "020",
  },
  {
    image: "images/Promos/nanatsu-the-pure-shinobi.webp",
    name: "Nanatsu, the Pure Shinobi",
    cost: 4,
    power: 2500,
    element: "air",
    type: "Unit",
    subtype: "Ninja",
    effect:
      "Arrive – For each destroyed Tower, place one counter on this card.\n" +
      "Exhaust, remove one counter from this card: Exhaust Target Unit.\n" +
      "Exhaust, remove four counters from this card: Destroy Target Unit and, if you do, switch up to two of your Shards to Active at the end of the turn.",
    number: "021",
  },
  {
    image: "images/Promos/altar-of-the-dragon-god.webp",
    name: "Altar of the Dragon God",
    element: "fire",
    cost: 2,
    type: "Augment",
    effect:
      "Exhaust, pay 1: Destroy target Dragon Unit you control, and, if you do, search your deck for a Dragon Unit with the same cost and put it into play.",
    number: "022",
  },
  {
    image: "images/Promos/kalibur-the-sacred-shardsword.webp",
    name: "Kalibur, the Sacred Shardsword",
    element: "light",
    cost: 2,
    type: "Augment",
    subtype: "gear",
    effect:
      "Equip to target Unit.\n" +
      "It gets +1000.\n" +
      "Sacrifice this card: This turn the equipped Unit cannot be targeted by Spells or Abilities. Draw one card.\n" +
      'You can only control one "Kalibur, the Sacred Shardsword".',
    number: "023",
  },
  {
    image: "images/Promos/buckeye-the-loyal.webp",
    name: "Buckeye, the Loyal",
    element: "light",
    affinity: 10,
    type: "Spirit",
    effect:
      'You start the game with a Hound unit token with Guardian (Unit * Hound/Light/500). This token cannot attack, and has "Sacrifice this unit: Prevent the next damage that would be dealt to target unit this turn."\n' +
      "Soulburst: Prevent all damage that would be dealt to target unit this turn.",
    number: "024",
  },
  {
    image: "images/Promos/yuki-the-lightning-flash-1.webp",
    name: "Yuki, the Lightning Flash",
    cost: 3,
    power: 2000,
    element: "light",
    type: "Unit",
    subtype: "Knight",
    effect:
      "Target Attack\n" +
      "If this card is in your hand, after one of your Towers is destroyed – Put this card into play.",
    number: "026",
  },
  {
    image: "images/Promos/shrieker.webp",
    name: "Shrieker",
    element: "dark",
    cost: 1,
    power: 1000,
    type: "Unit",
    effect:
      "Arrive - Send the top three cards of your deck to the discard zone.",
    number: "027",
  },
  {
    image: "images/Promos/song-of-the-sky.webp",
    name: "Song of the Sky",
    element: "air",
    cost: 0,
    type: "Spell",
    effect:
      "Play this card only iftwo or more units returned from the field to your hand this turn.\n" +
      "The next card you play this turn costs (2) less to play.",
    number: "028",
  },
  {
    image: "images/Promos/nanatsu-the-pure-shinobi-1.webp",
    name: "Nanatsu, the Pure Shinobi",
    element: "air",
    type: "unit",
    effect:
      "Arrive – For each destroyed Tower, place one counter on this card.\n" +
      "Exhaust, remove one counter from this card: Exhaust Target Unit.\n" +
      "Exhaust, remove four counters from this card: Destroy Target Unit and, if you do, switch up to two of your Shards to Active at the end of the turn.",
    number: "029",
  },
  {
    image: "images/Promos/buckeye-the-loyal-1.webp",
    name: "Buckeye, the Loyal",
    element: "light",
    affinity: 10,
    type: "Spirit",
    effect:
      'You start the game with a Hound unit token with Guardian (Unit * Hound/Light/500). This token cannot attack, and has "Sacrifice this unit: Prevent the next damage that would be dealt to target unit this turn."\n' +
      "Soulburst: Prevent all damage that would be dealt to target unit this turn.",
    number: "030",
  },
  {
    image: "images/Promos/gz-the-explosion-master-1.webp",
    name: "G.Z. the Explosion Master",
    element: "fire",
    cost: 2,
    power: 1500,
    type: "unit",
    effect:
      "Arrive – Place an Explosion counter on target Tower you own.\n" +
      "Exhaust, remove an Explosion Counter from a Tower you own: If it's face-down, flip it face-up. Deal damage equal to double its defense to target Unit. Destroy that Tower.",
    number: "031",
  },
  {
    image: "images/Promos/ash-the-glacial-sorcerer-1.jpg",
    name: "Ash, the Glacial Sorcerer",
    element: "water",
    cost: 3,
    power: 2000,
    type: "unit",
    effect:
      "When you play a Water Spell – You can place an Ice Wall counter on target non-destroyed Tower you own. (Towers with Ice Wall counters get +500 defense. If a Tower is destroyed, remove all Ice Wall counters from that Tower.)\n" +
      "Remove all Ice Wall counters from all Towers you own: Deal damage to target Unit equal to the number of counters removed x500.",
    number: "032",
  },
  {
    image: "images/Promos/arbor-carbuncle.webp",
    name: "Arbor Carbuncle",
    element: "air",
    cost: 1,
    power: 500,
    type: "Unit",
    subtype: "beast",
    effect:
      'When this card is returned to your hand from the field - You may search your deck for an "Arbor Carbuncle" and add it to your hand.\n' +
      'During your turn, expel this card and two other "Arbor Carbuncle" from your hand: Draw two cards and switch up to two of your shards to active.',
    number: "033",
  },
  {
    image: "images/Promos/demon-of-the-evil-eye.webp",
    name: "Demon of the Evil Eye",
    element: "dark",
    cost: 5,
    power: 3000,
    type: "demon",
    effect:
      "Arrive – Declare a card name, then your opponent reveals their hand and discards all cards with that name. Draw one card for each card discarded this way.",
    number: "034",
  },
  {
    image: "images/Promos/savage-mystic.webp",
    name: "Savage Mystic",
    element: "argent",
    cost: 2,
    power: 1000,
    type: "Unit",
    effect: "Once per turn, when you cast a Spell - Deal 1000 to target Unit.",
    number: "035",
  },
  {
    image: "images/Promos/silvermist-phoenix.webp",
    name: "Silvermist Phoenix",
    element: "argent",
    cost: 3,
    power: 1500,
    type: "Unit",
    subtype: "elemental phoenix",
    effect:
      "This card cannot be targeted by spells.\n" +
      'At the end of your turn - You may pay (2) and expel this card from your discard zone: If you do, search your deck for a "Silvermist Phoenix" and put it into play.',
    number: "036",
  },
  {
    image: "images/Promos/arbor-carbuncle-1.webp",
    name: "Arbor Carbuncle",
    element: "air",
    cost: 1,
    power: 500,
    type: "Unit",
    subtype: "beast",
    effect:
      'When this card is returned to your hand from the field - You may search your deck for an "Arbor Carbuncle" and add it to your hand.\n' +
      'During your turn, expel this card and two other "Arbor Carbuncle" from your hand: Draw two cards and switch up to two of your shards to active.',
    number: "038",
  },
  {
    image: "images/Promos/argent-shard-1.webp",
    name: "Argent Shard",
    element: "Argent",
    type: "Basic Shard",
    effect: "Exhaust: Produce (1).",
    number: "039",
  },
  {
    image: "images/Promos/glittering-whelp.webp",
    name: "Glittering Whelp",
    element: "fire",
    cost: 1,
    power: 500,
    type: "Unit",
    subtype: "dragon",
    effect:
      "Arrive - You may reveal two Dragon units from your hand: If you do, draw one card.",
    number: "040",
  },
  {
    image: "images/Promos/ketsu-the-living-armor.webp",
    name: "Ketsu, the Living Armor",
    element: "light",
    cost: 1,
    type: "Augment",
    subtype: "gear",
    effect:
      "Equip to target unit.\n" +
      "Any damage it would take is reduced by 500 instead.\n" +
      "When one of your Light units attacks - You may equip this card from the discard zone to that unit.\n" +
      'A unit may only be equipped with one "Ketsu, the Living Armor".',
    number: "041",
  },
  {
    image: "images/Promos/poisonous-strike.webp",
    name: "Poisonous Strike",
    element: "dark",
    cost: 3,
    type: "Spell",
    effect:
      "Instacast\n" +
      "Target attacking or blocking Unit gets -2000 this turn, then your opponent discards one card from their hand.",
    number: "042",
  },
  {
    image: "images/Promos/curse-of-the-witch-queen.webp",
    name: "Curse of the Witch Queen",
    element: "water",
    cost: 6,
    type: "Spell",
    effect: "Take control of up to two target exhausted units.",
    number: "043",
  },
  {
    image: "images/Promos/catrina-the-dark-lady.webp",
    name: "Catrina, the Dark Lady",
    element: "dark",
    cost: 5,
    power: 3000,
    type: "Unit",
    effect:
      'Arrive - Choose one. * Add one "Trick!" or "Treat!" from your deck or discard zone to your hand. * Offering 2 (Expel two units from your discard zone.): Add both instead.',
    number: "044",
  },
  {
    image: "images/Promos/eccentric-visitor.webp",
    name: "Eccentric Visitor",
    element: "argent",
    cost: 3,
    power: 2000,
    type: "Unit",
    subtype: "mysterious man",
    effect:
      "Arrive - If you have two or more destroyed towers, you may flip your spirit face-up.",
    number: "045",
  },
  {
    image: "images/Promos/ella-the-sky-huntress.webp",
    name: "Ella, the Sky Huntress",
    element: "air",
    cost: 2,
    power: 1000,
    type: "Unit",
    subtype: "skyraider",
    effect:
      "Arrive - You may discard one Skyraider unit or Airship unit from your hand: If you do, target unit loses all abilities and cannot attack as long as you control this card.",
    number: "046",
  },
  {
    image: "images/Promos/mistshaper.webp",
    name: "Mistshaper",
    element: "argent",
    cost: 2,
    power: 2000,
    type: "Unit",
    subtype: "legendary ???",
    effect:
      " Arrive - Search your deck for a unit that has the same name as another target unit you control and add it to your hand.",
    number: "047",
  },
  {
    image: "images/Promos/tower-of-air.webp",
    name: "Tower of Air",
    element: "air",
    type: "Tower",
    defense: 1000,
    effect:
      "When this card is destroyed, you can return up to two Units from the field to their owner's hand.",
    number: "048",
  },
  {
    image: "images/Promos/tower-of-darkness.webp",
    name: "Tower of Darkness",
    element: "dark",
    type: "Tower",
    defense: 1500,
    effect:
      "When this card is destroyed, you can look at your opponent's hand and select one card, then your opponent discards that card.",
    number: "049",
  },
  {
    image: "images/Promos/tower-of-fire.webp",
    name: "Tower of Fire",
    element: "fire",
    type: "Tower",
    defense: 1000,
    effect: "When this card is destroyed, you can destroy a Unit.",
    number: "050",
  },
  {
    image: "images/Promos/tower-of-light.webp",
    name: "Tower of Light",
    element: "light",
    type: "Tower",
    defense: 1500,
    effect:
      "When this card is destroyed, you can put into play a Knight Unit Token with Guardian (Unit * Knight/Light/2000).",
    number: "051",
  },
  {
    image: "images/Promos/tower-of-water.webp",
    name: "Tower of Water",
    element: "water",
    type: "Tower",
    defense: 1500,
    effect: "When this card is destroyed, you can draw two cards.",
    number: "052",
  },
  {
    image: "images/Promos/daylon-the-conjurers-raven-1.webp",
    name: "Daylon, the Conjurer's Raven",
    element: "dark",
    cost: 2,
    power: 500,
    type: "legendary raven",
    effect:
      'Arrive – If your champion is "Hoenna, the Immoral Conjurer", choose one.\n' +
      "* Put three counters on your champion.\n" +
      "* Remove all counters from your champion, then search your deck for a non-legendary unit with cost equal or less than the number of counters you removed this way and put it into play.",
    number: "053",
  },
  {
    image: "images/Promos/skytree-hawk.webp",
    name: "Skytree Hawk",
    element: "air",
    cost: 2,
    power: 1000,
    type: "Unit",
    subtype: "beast",
    effect:
      "When this card is returned to your hand from the field - You can discard this card, Draw two cards.",
    number: "054",
  },
  {
    image: "images/Promos/ruka-pugilist-of-the-holy-flame.webp",
    name: "Ruka, Pugilist of the Holy Flame",
    element: "fire",
    cost: 2,
    power: 1000,
    type: "Unit",
    subtype: "warrior",
    effect:
      "Arrive – If you control another Fire unit, this card gets +500 and gains Brawler.\n" +
      "Whenever this declares an attack on a unit – If your spirit is Fire, you may flip it face-up.",
    number: "055",
  },
  {
    image: "images/Promos/ghostly-demise.webp",
    name: "Ghostly Demise",
    element: "dark",
    cost: 2,
    type: "Spell",
    effect:
      "As an additional cost to play this card, Offering X (Expel any number of units from your discard zone).\n" +
      "Destroy all units with cost X. (X equals the number of units expelled for Offering.)",
    number: "056",
  },
  {
    image: "images/Promos/voidfire-dragon.webp",
    name: "Voidfire Dragon",
    element: "fire",
    cost: 3,
    power: 1500,
    type: "Unit",
    subtype: "dragon",
    effect:
      "While there is a destroyed Fire tower, expel two or more Fire units from your hand whose combined cost is at least 6: Put this card from your discard zone into play. Expel it when it leaves the field.\n" +
      'Ruined - Add target expelled Fire unit you own, except "Voidfire Dragon", to your hand.',
    number: "057",
  },
  {
    image: "images/Promos/liyu-avarice-reborn.webp",
    name: "Liyu, Avarice Reborn",
    element: "dark",
    cost: 4,
    power: 2000,
    type: "Unit",
    subtype: "golem",
    effect:
      "When this card isput into the discard zone from anywhere – You may sacrifice a Dark unit. If you do, put this card into play.",
    number: "058",
  },
  {
    image: "images/Promos/blazewalker-rookie-ark.webp",
    name: "Blazewalker Rookie, Ark",
    element: "fire",
    cost: 2,
    power: 1500,
    type: "Unit",
    subtype: "blazewalker",
    effect: "When this card is expelled - You may deal 1000 to target unit.",
    number: "059",
  },
  {
    image: "images/Promos/raging-shardbeast.webp",
    name: "Raging Shardbeast",
    element: "argent",
    cost: 1,
    power: 2000,
    type: "Unit",
    subtype: "beast",
    effect: " You cannot play cards with cost (3) or more.",
    number: "060",
  },
  {
    image: "images/Promos/valtier-the-magical-marksman.webp",
    name: "Valtier, the Magical Marksman",
    cost: 3,
    power: 2000,
    element: "light",
    type: "Unit",
    subtype: "pirate",
    effect: "Exhaust, pay (2): Destroy target unit with cost (2) or less.",
    number: "061",
  },
  {
    image: "images/Promos/ravenous-acidic-monger.webp",
    name: "Ravenous Acidic Monger",
    element: "Argent",
    cost: 5,
    power: 2500,
    type: "Unit",
    subtype: "Beast",
    effect:
      "Arrive - Destroy up to two target augments. If you destroyed at least one, this card gains Quickness. If you destroyed two, this card also gains Destroyer.",
    number: "062",
  },
  {
    image: "images/Promos/ella-corrupted-by-love.webp",
    name: "Ella, Corrupted by Love",
    element: "Argent",
    cost: 3,
    power: 2000,
    type: "Unit",
    subtype: "Silver General Skyraider",
    effect:
      "Discard a Silver General unit from your hand: Target unit or augment loses all abilities as long as you control this card.Whenever this card is discarded - You may pay (1): If you do, target unit or augment loses all abilities this turn.",
    number: "063",
  },
  {
    image: "images/Promos/rex-child-of-brilliance.jpg",
    name: "Rex, Child of Brilliance",
    element: "water",
    cost: 1,
    power: 1000,
    type: "unit",
    subtype: "child sorcerer",
    effect:
      "If you would use Shard Drain you may sacrifice this card instead of returning a shard to your shard deck.",
    number: "064",
  },
  {
    image: "images/Promos/bone-scavager.png",
    name: "Bone Scavager",
    element: "argent",
    cost: 1,
    power: 1000,
    type: "Unit",
    subtype: "beast",
    effect:
      "Arrive - Expel target unit from a discard zone.\n" +
      "Pay (1): Expel target unit from a discard zone, and if you do, place a +500 counter on this card.",
    number: "065",
  },
  {
    image: "images/Promos/blue-rose-knight.png",
    element: "light",
    cost: 1,
    power: 500,
    name: "Blue Rose Knight",
    type: "Unit",
    subtype: "rose knight",
    number: "066",
    effect: "This card has +500 for each unit adjacent to it.",
  },
  {
    image: "images/Promos/queen-of-the-sandsea.webp",
    name: "Queen of the Sandsea",
    element: "air",
    cost: 3,
    power: 1500,
    type: "Unit",
    effect:
      "Arrive - Take control of target unit with cost (2) or less, as long as you control this card.",
    number: "067",
  },
  {
    image: "images/Promos/sandsea-traveller.jpg",
    name: "Sandsea Traveller",
    element: "air",
    cost: 2,
    power: 1500,
    type: "Unit",
    effect: "When this cardattacks - Switch one of your Shards to active.",
    number: "068",
  },
  {
    image: "images/Promos/silver-kings-pawn.jpg",
    name: "Silver King's Pawn",
    element: "Argent",
    cost: 1,
    power: 500,
    type: "Unit",
    subtype: "Silver Army",
    effect:
      "You may have any number of copies of this card in your deck.Exhaust two Silver Army units you control: Add target Argent unit from your discard zone to your hand.",
    number: "069",
  },
  {
    image: "images/Promos/trick.webp",
    name: "Trick!",
    element: "dark",
    cost: 1,
    type: "Spell",
    effect: "Instacast\nTarget unit loses all abilities this turn.",
    number: "070",
  },
  {
    image: "images/Promos/entreat-the-blazewalkers.webp",
    name: "Entreat the Blazewalkers",
    element: "fire",
    cost: 1,
    type: "Spell",
    effect:
      "Expel one Blazewalker unit from your deck, then you may add a card with the same name from your deck to your hand.",
    number: "071",
  },
  {
    image: "images/Promos/treat.webp",
    name: "Treat!",
    element: "dark",
    cost: 1,
    type: "Spell",
    effect:
      "Instacast\n" +
      "As an additional cost to play this card, sacrifice a unit.\n" +
      "Search your deck for a number of cards equal to the sacrificed unit's cost, and send them to the discard zone.",
    number: "072",
  },
  {
    image: "images/Promos/daylon-the-conjurers-raven.jpg",
    name: "Daylon, the Conjurer's Raven",
    cost: 2,
    power: 500,
    element: "dark",
    type: "Unit",
    subtype: "legendary raven",
    effect:
      'Arrive – If your champion is "Hoenna, the Immoral Conjurer", choose one.\n' +
      "* Put three counters on your champion.\n" +
      "* Remove all counters from your champion, then search your deck for a non-legendary unit with cost equal or less than the number of counters you removed this way and put it into play.",
    number: "073",
  },
  {
    image: "images/Promos/daylon-the-conjurers-raven.webp",
    name: "Daylon, the Conjurer's Raven",
    cost: 2,
    power: 500,
    element: "dark",
    type: "Unit",
    subtype: "legendary raven",
    effect:
      'Arrive – If your champion is "Hoenna, the Immoral Conjurer", choose one.\n' +
      "* Put three counters on your champion.\n" +
      "* Remove all counters from your champion, then search your deck for a non-legendary unit with cost equal or less than the number of counters you removed this way and put it into play.",
    number: "053",
  },
  {
    image: "images/Promos/ruka-pugilist-of-the-holy-flame-1.webp",
    name: "Ruka, Pugilist of the Holy Flame",
    element: "fire",
    cost: 2,
    power: 1000,
    type: "warrior",
    effect:
      "Arrive – If you control another Fire unit, this card gets +500 and gains Brawler.\n" +
      "Whenever this declares an attack on a unit – If your spirit is Fire, you may flip it face-up.",
    number: "075",
  },
  {
    image: "images/Promos/animated-spellbook.webp",
    name: "Animated Spellbook",
    element: "water",
    cost: 1,
    power: 500,
    type: "Unit",
    subtype: "animate object",
    effect:
      "Ruined - Add a spell that cost (1) or less from your deck to your hand.",
    number: "076",
  },
  {
    image: "images/Promos/liyu-avarice-reborn-1.webp",
    name: "Liyu, Avarice Reborn",
    element: "dark",
    cost: 4,
    power: 2000,
    type: "Unit",
    type: "golem",
    effect:
      "When this card is put into the discard zone from anywhere – You may sacrifice a Dark unit. If you do, put this card into play.",
    number: "077",
  },
  {
    image: "images/Promos/gloom-necrolord.webp",
    name: "Gloom Necrolord",
    element: "Dark",
    cost: 9,
    power: 3000,
    type: "Unit",
    effect:
      "Ruined - You may expel this card from your discard zone: If you do, put two target units from your discard zone into play.",
    number: "078",
  },
  {
    image: "images/Promos/valtier-the-magical-marksman.jpg",
    name: "Valtier, the Magical Marksman",
    cost: 3,
    power: 2000,
    element: "light",
    type: "Unit",
    subtype: "pirate",
    effect: "Exhaust, pay (2): Destroy target unit with cost (2) or less.",
    number: "079",
  },
  {
    image: "images/Promos/woody-loyal-pack-leader-2.jpg",
    name: "Woody, Loyal Pack Leader",
    element: "argent",
    cost: 4,
    power: 2000,
    type: "Unit",
    subtype: "legendary beast",
    effect:
      "Guardian, Target Attack\n" +
      'Arrive – Put into play a Hound token (Unit * Beast/Light/500) that has Guardian and "Sacrifice this card: Prevent the next damage that would be dealt to target unit this turn." If your spirit is "Buckeye, the Loyal", put two into play instead.',
    number: "080",
  },
  {
    image: "images/Promos/corona-the-spirit-ruby.webp",
    name: "Corona, the Spirit Ruby",
    element: "argent",
    type: "Legendary Shard",
    effect:
      "If you control another legendary shard send this card to the discard zone.\n" +
      "Exhaust: Produce (1).\n" +
      "Exhaust, flip your spirit face-down: Destroy target unit.",
    number: "083",
  },
  {
    image: "images/Promos/guiding-winds.webp",
    name: "Guiding Winds",
    element: "air",
    cost: 1,
    type: "Spell",
    effect:
      " Instacast\n" +
      "Return target unit you control to its owner's hand, and if you do draw one card.",
    number: "084",
  },
  {
    image: "images/Promos/rex-child-of-brilliance.webp",
    name: "Rex, Child of Brilliance",
    element: "water",
    cost: 1,
    power: 1000,
    type: "Unit",
    subtype: "child sorcerer",
    effect:
      "If you would use Shard Drain you may sacrifice this card instead of returning a shard to your shard deck.",
    number: "085",
  },
  {
    image: "images/Promos/silverstone-sentinel.jpg",
    name: "Silverstone Sentinel",
    element: "argent",
    cost: 3,
    power: 2000,
    type: "Unit",
    effect:
      "Once per turn, when your opponent activates or triggers the ability of their Champion or Spirit - You may choose one.\n" +
      "* Draw a card.\n" +
      "* Expel target card from your opponent's discard zone.",
    number: "086",
  },
  {
    image: "images/Promos/woody-loyal-pack-leader.webp",
    name: "Woody, Loyal Pack Leader",
    element: "argent",
    type: "Unit",
    subtype: "legendary beast",
    effect:
      "Guardian, Target Attack\n" +
      'Arrive – Put into play a Hound token (Unit * Beast/Light/500) that has Guardian and "Sacrifice this card: Prevent the next damage that would be dealt to target unit this turn." If your spirit is "Buckeye, the Loyal", put two into play instead.',
    number: "087",
  },
  {
    image: "images/Promos/phantasmal-storm.webp",
    name: "Phantasmal Storm",
    element: "water",
    cost: 2,
    type: "Spell",
    effect:
      "Instacast\n" +
      "Deal 2000 to target unit.\n" +
      'Shard Drain 1, expel this card from your discard zone: Search your deck for a "Phantasmal Storm" and add it to your hand.',
    number: "088",
  },
  {
    image: "images/Promos/tux-the-emperor-spirit.webp",
    name: "Tux, the Emperor Spirit",
    element: "water",
    affinity: 10,
    type: "Spirit",
    effect:
      "When a unit you control destroys a tower - You may draw a card then discard a card.\n" +
      "Soulburst, pay (3): Stun all units your opponent controls. (A Stunned card cannot attack, block, or use activated abilities, until the end of the next turn.)",
    number: "089",
  },
  {
    image: "images/Promos/hoenna-immoral-conjurer.webp",
    name: "Hoenna, Immoral Conjurer",
    element: "dark",
    type: "Champion",
    effect:
      "When you destroy a Tower or Unit in battle - Place one counter on this card.\n" +
      "Remove three counters from this card: Put into play a Golem Token Unit (Unit * Golem/Dark/1500).",
    number: "090",
  },
  {
    image: "images/Promos/dragonholt-the-dracoborg.webp",
    name: "Dragonholt, the Dracoborg",
    element: "fire",
    type: "Champion",
    effect:
      "Exhaust, pay 1, discard one Fire Unit from your hand: Add one non-Legendary Dragon Unit from your deck to your hand.",
    number: "091",
  },
  {
    image: "images/Promos/jemial-cryptic-caster.webp",
    name: "Jemial, Cryptic Caster",
    element: "water",
    type: "Champion",
    effect:
      "Place one counter on this card for each Water Unit that comes into play on your field.\n" +
      "Remove three counters from this card: Draw two cards then discard one card.",
    number: "092",
  },
  {
    image: "images/Promos/eitan-exiled-prince.webp",
    name: "Eitan, Exiled Prince",
    element: "air",
    type: "Champion",
    effect:
      "Once per turn, pay 1 and sacrifice a Unit you control: Put into play one Air Unit from your hand whose cost is 1 greater than the sacrificed Unit.",
    number: "093",
  },
  {
    image: "images/Promos/liam-traitor-of-knights.webp",
    name: "Liam, Traitor of Knights",
    element: "light",
    type: "Champion",
    effect:
      "When you destroy an opponent's Tower - You can add one Gear from your deck to your hand.\n" +
      "Once per turn, discard one Gear from your hand: target Unit gets +500 this turn.",
    number: "094",
  },
  {
    image: "images/Promos/hoenna-immoral-conjurer.png",
    name: "Hoenna, Immoral Conjurer",
    element: "dark",
    type: "Champion",
    effect:
      "When you destroy a Tower or Unit in battle - Place one counter on this card.\n" +
      "Remove three counters from this card: Put intoplay a Golem Token Unit (Unit * Golem/Dark/1500).",
    number: "097",
  },
  {
    image: "images/Promos/dragonholt-the-dracoborg.jpg",
    name: "Dragonholt, the Dracoborg",
    element: "fire",
    type: "Champion",
    effect:
      "Exhaust, pay 1, discard one Fire Unit from your hand: Add one non-Legendary Dragon Unit from your deck to your hand.",
    number: "098",
  },
  {
    image: "images/Promos/jemial-cryptic-caster.jpg",
    name: "Jemial, Cryptic Caster",
    element: "water",
    type: "Champion",
    effect:
      "Place one counter on this card for each Water Unit that comes into play on your field.\n" +
      "Remove three counters from this card: Draw two cards then discard one card.",
    number: "099",
  },
  {
    image: "images/Promos/eitan-exiled-prince.jpg",
    name: "Eitan, Exiled Prince",
    element: "air",
    type: "Champion",
    effect:
      "Once per turn, pay 1 and sacrifice a Unit you control: Put into play one Air Unit from your hand whose cost is 1 greater than the sacrificed Unit.",
    number: "100",
  },
  {
    image: "images/Promos/liam-traitor-of-knights.jpg",
    name: "Liam, Traitor of Knights",
    element: "light",
    type: "Champion",
    effect:
      "When you destroy an opponent's Tower - You can add one Gear from your deck to your hand.\n" +
      "Once per turn, discard one Gear from your hand: target Unit gets +500 this turn.",
    number: "101",
  },
  {
    image: "images/Promos/omega-magic-yami.webp",
    name: "Omega Magic: Yami",
    element: "dark",
    cost: 2,
    type: "Spell",
    effect:
      "Instacast\n" +
      "Choose one OR if you have two or less towers remaining you can choose both.\n" +
      "* Target unit gets -1000 this turn.\n" +
      "* Return target unit with cost (3) or less from your discard zone to the field.",
    number: "102",
  },
  {
    image: "images/Promos/omega-magic-kaze.webp",
    name: "Omega Magic: Kaze",
    element: "air",
    cost: 2,
    type: "Spell",
    effect:
      "Instacast\n" +
      "If you have two or less towers remaining, this card costs (0) to play.\n" +
      "Target unit cannot deal damage or attack this turn. Draw one card.",
    number: "103",
  },
  {
    image: "images/Promos/omega-magic-mizu.webp",
    name: "Omega Magic: Mizu",
    element: "water",
    cost: 2,
    type: "Spell",
    effect:
      "Instacast\n" +
      "Choose one OR if you have two or less towers remaining, choose two.\n" +
      "* Draw one card.\n" +
      "* Exhaust target unit.\n" +
      "* Return target unit to its owner's hand if it is exhausted.",
    number: "104",
  },
  {
    image: "images/Promos/omega-magic-kasai.webp",
    name: "Omega Magic: Kasai",
    element: "fire",
    cost: 2,
    type: "Spell",
    effect:
      "Instacast\n" +
      "Deal 1500 to target attacking or blocking unit.\n" +
      "Then, if you have two or less towers remaining, deal 2000 to target unit.",
    number: "105",
  },
  {
    image: "images/Promos/omega-magic-hikari.webp",
    name: "Omega Magic: Hikari",
    element: "light",
    cost: 2,
    type: "Spell",
    effect:
      "Instacast\n" +
      "Put into play one Knight unit token with Guardian (Unit * Knight/Light/1000). If you have two or less towers remaining, put into play two tokens instead.",
    number: "106",
  },
  {
    image: "images/Promos/zephyr-crystal.webp",
    name: "Zephyr Crystal",
    element: "argent",
    type: "Special Shard",
    effect:
      "If your spirit isn't Air, this card comes into play exhausted.\n" +
      "Exhaust: Produce (1).\n" +
      "Exhaust, pay (2): Destroy target Augment.",
    number: "107",
  },
  {
    image: "images/Promos/nightmare-crystal.webp",
    name: "Nightmare Crystal",
    element: "argent",
    type: "Special Shard",
    effect:
      "If your spirit isn't Dark, this card comes into play exhausted.\n" +
      "Exhaust: Produce (1).\n" +
      "Exhaust: Send the top card of your deck to the discard zone.",
    number: "108",
  },
  {
    image: "images/Promos/hallowed-crystal.webp",
    name: "Hallowed Crystal",
    element: "argent",
    type: "Special Shard",
    effect:
      "If your spirit isn't Light, this card comes into play exhausted.\n" +
      "Exhaust: Produce (1).\n" +
      "Exhaust, pay (1): Target unit with Guardian gets +500 this turn.",
    number: "109",
  },
  {
    image: "images/Promos/cryptic-crystal.webp",
    name: "Cryptic Crystal",
    element: "argent",
    type: "Special Shard",
    effect:
      "If your spirit isn't Water, this card comes into play exhausted.\n" +
      "Exhaust: Produce (1).\n" +
      "Arrive - Look at the top two cards of your deck and put them back in any order.",
    number: "110",
  },
  {
    image: "images/Promos/wyvern-crystal.webp",
    name: "Wyvern Crystal",
    element: "argent",
    type: "Special Shard",
    effect:
      "If your spirit isn't Fire, this card comes into play exhausted.\n" +
      "Exhaust: Produce (1).\n" +
      "Arrive - Add target Dragon unit from your discard zone to your hand, and, if you do, discard one card from your hand.",
    number: "111",
  },
  {
    image: "images/Promos/tower-of-surging-gales.webp",
    name: "Tower of Surging Gales",
    element: "air",
    defense: 1000,
    type: "Tower",
    effect:
      "Use only if your spirit or champion is Air.\n" +
      "When this card is destroyed: You may put the top card of your shard deck into play. Use this effect only if you have more destroyed towers than your opponent.",
    number: "112",
  },
  {
    image: "images/Promos/tower-of-surging-radiance.webp",
    name: "Tower of Surging Radiance",
    element: "light",
    defense: 1000,
    type: "Tower",
    effect:
      "Use only if your spirit or champion is Light.\n" +
      "When this card is destroyed: You may put a unit with cost (3) or less from your hand into play. Use this effect only if you have more destroyed towers than your opponent.",
    number: "113",
  },
  {
    image: "images/Promos/tower-of-surging-shadows.webp",
    name: "Tower of Surging Shadows",
    element: "dark",
    defense: 2000,
    type: "Tower",
    effect:
      "Use only if your spirit or champion is Dark.\n" +
      "When this tower is destroyed: You may return a unit with cost (3) or less from your discard zone to the field. Use this effect only if you have more destroyed towers than your opponent.",
    number: "114",
  },
  {
    image: "images/Promos/tower-of-surging-torrents.webp",
    name: "Tower of Surging Torrents",
    defense: 1500,
    element: "water",
    type: "Tower",
    effect:
      "Use only if your spirit or champion is Water.\n" +
      "When this card is destroyed: You may search your deck for a spell and add it to your hand. Use this effect only if you have more destroyed towers than your opponent.",
    number: "115",
  },
  {
    image: "images/Promos/tower-of-surging-flames.webp",
    name: "Tower of Surging Flames",
    element: "fire",
    defense: 1500,
    type: "Tower",
    effect:
      "Use only if your spirit or champion is Fire.\n" +
      "When this card is destroyed: You may deal 1500 to all units your opponent controls. Use this effect only if you have more destroyed towers than your opponent.",
    number: "116",
  },
  {
    image: "images/Promos/buckeye-the-loyal.png",
    name: "Buckeye, the Loyal",
    element: "light",
    affinity: 10,
    type: "Spirit",
    effect:
      'You start the game with a Hound unit token with Guardian (Unit * Hound/Light/500). This token cannot attack, and has "Sacrifice this unit: Prevent the next damage that would be dealt to target unit this turn."\n' +
      "Soulburst: Prevent all damage that would be dealt to target unit this turn.",
    number: "117",
  },
  {
    image: "images/Promos/hoenna-immoral-conjurer-1.webp",
    name: "Hoenna, Immoral Conjurer",
    element: "dark",
    type: "Champion",
    effect:
      "When you destroy a Tower or Unit in battle - Place one counter on this card.\n" +
      "Remove three counters from this card: Put into play a Golem Token Unit (Unit * Golem/Dark/1500).",
    number: "118",
  },
  {
    image: "images/Promos/azure-seer.jpg",
    name: "Azure Seer",
    element: "water",
    cost: 1,
    power: 1000,
    type: "Unit",
    effect:
      "Arrive - Look at the top card of your deck and place it back at the top or bottom of your deck.",
    number: "119",
  },
  {
    image: "images/Promos/demonic-spy.webp",
    name: "Demonic Spy",
    element: "dark",
    cost: 2,
    power: 1000,
    type: "demon",
    effect:
      "Arrive – Flip target face-down tower your opponent controls face-up.",
    number: "121",
  },
  {
    image: "images/Promos/fizzy-the-water-spirit.webp",
    name: "Fizzy, the Water Spirit",
    element: "water",
    type: "Spirit",
    affinity: 8,
    effect:
      "Once per turn, during your turn, Shard Drain 1: Draw one card.\n" +
      "During your turn, Soulburst: Draw one card.",
    number: "122",
  },
  {
    image: "images/Promos/luna-the-dark-spirit.webp",
    name: "Luna, the Dark Spirit",
    element: "dark",
    type: "Spirit",
    affinity: 8,
    effect:
      "When you destroy a tower or unit in battle - Place one counter on this card.\n" +
      "During your turn, remove three counters from this card: Your opponent discards one card.\n" +
      "During your turn, Soulburst: Your opponent discards one card.",
    number: "123",
  },
  {
    image: "images/Promos/corona-the-fire-spirit.webp",
    name: "Corona, the Fire Spirit",
    element: "fire",
    type: "Spirit",
    affinity: 8,
    effect:
      "Once per turn, during your turn, discard one Fire unit from your hand: Deal 500 to target unit.\n" +
      "During your turn,Soulburst: Target unit gains Quickness this turn.",
    number: "124",
  },
  {
    image: "images/Promos/sola-the-light-spirit.webp",
    name: "Sola, the Light Spirit",
    element: "light",
    type: "Spirit",
    affinity: 8,
    effect:
      "At the end of your turn - You can switch one of your exhausted units to active.\n" +
      "Soulburst: Put into play a Knight unit token with Guardian (Unit * Knight/Light/2000).",
    number: "125",
  },
  {
    image: "images/Promos/kyte-the-air-spirit.webp",
    name: "Kyte, the Air Spirit",
    element: "air",
    type: "Spirit",
    affinity: 8,
    effect:
      "Once per turn, during your turn, discard one card: Return target Air unit you control to its owner's hand and, if you do, switch one of your exhausted shards to active.\n" +
      "Soulburst: Return target unit with cost (3) or less to its owner's hand.",
    number: "126",
  },
  {
    image: "images/Promos/metaial-the-silver-king.webp",
    name: "Metaial, the Silver King",
    element: "Argent",
    type: "Champion",
    effect:
      "Instead of drawing for your turn you may discard a card - If you do, search your deck for a Silver General unit and add it to your hand.Pay (1), place a Silver General unit from yourdiscard zone on the bottom of your deck: Draw a card.",
    number: "127",
  },
  {
    image: "images/Promos/carriermecha-kyari.webp",
    name: "Carriermecha: Kyari",
    element: "Argent",
    cost: 0,
    power: 500,
    type: "Omega Unit",
    subtype: "Mecha",
    effect:
      'Ω (Place on one of your Mecha units.)Exhaust: Choose one.* Search your deck for a "Shard-Mecha" unit and place it under this card.* Put into play as many "Shard-Mecha" units as possible that are under this card.',
    number: "128",
  },
  {
    image: "images/Promos/lloyd-traveler-of-worlds.webp",
    name: "Lloyd, Traveler of Worlds",
    element: "Argent",
    cost: 4,
    power: 2000,
    type: "Unit",
    subtype: "???",
    effect:
      "Arrive - You may place up to three target spells from your discard zone under this card.You may play spells under this card as if they were in your hand, if you do, expel them after they are played. If this card would leave field, expel all cards under it.",
    number: "129",
  },
  {
    image: "images/Promos/metaial-celestial-of-ruin.webp",
    name: "Metaial, Celestial of Ruin",
    element: "Argent",
    cost: 8,
    power: 6000,
    type: "Unit",
    subtype: "Celestial",
    effect:
      'This card costs (1) less to play for each Silver Army and/or Silver General unit you control.If your champion has "Metaial" in its name, this card gains the following abilities.Sacrifice a unit: This card gains Immortal this turn.Sacrifice two other units: Destroy target shard and target unit.Sacrifice three other units: Destroy up to two target towers.',
    number: "130",
  },
  {
    image: "images/Promos/kratin-being-of-strength.webp",
    name: "Kratin, Being of Strength",
    element: "argent",
    type: "Champion",
    effect: "Exhaust, pay (2): Target attacking unit gets +1000 this turn.",
    number: "131",
  },
  {
    image: "images/Promos/master-of-the-cerulean-tower.webp",
    name: "Master of the Cerulean Tower",
    element: "argent",
    type: "Champion",
    effect:
      " Exhaust, pay (1): Draw a card, then put a card from your hand on the bottom of your deck.",
    number: "132",
  },
  {
    image: "images/Promos/greatest-gardener-gregory.webp",
    name: "Greatest Gardener, Gregory",
    element: "argent",
    type: "Champion",
    effect: "Exhaust, sacrifice a unit: Recover one of your shards.",
    number: "133",
  },
  {
    image: "images/Promos/dubell-spirit-of-gains.webp",
    name: "Dubell, Spirit of Gains",
    element: "argent",
    type: "Spirit",
    effect:
      "Exhaust, pay (1): Target attacking unit gets +500 this turn.\n" +
      "Soulburst: Target unit gets +1000 this turn.",
    number: "134",
  },
  {
    image: "images/Promos/welink-spirit-of-paper.webp",
    name: "Welink, Spirit of Paper",
    element: "argent",
    type: "Spirit",
    effect:
      "Exhaust, pay (1): Put the bottom card of your deck on top of your deck.\n" +
      "Soulburst: Draw a card.",
    number: "135",
  },
  {
    image: "images/Promos/chewallo-spirit-of-seeds.webp",
    name: "Chewallo, Spirit of Seeds",
    element: "argent",
    type: "Spirit",
    effect:
      "Exhaust, pay (1): Look at the top card of your deck, put it on the top of your deck.\n" +
      "Soulburst: Recover one of your shards.",
    number: "136",
  },
  {
    image: "images/Promos/tower-of-embers.webp",
    name: "Tower of Embers",
    element: "fire",
    defense: 1500,
    type: "unit",
    effect:
      "When this tower is destroyed, you may deal 1500 to a unit, then you may deal 1000 to a unit.",
    number: "137",
  },
  {
    image: "images/Promos/tower-of-waves.webp",
    name: "Tower of Waves",
    element: "water",
    defense: 1000,
    type: "unit",
    effect:
      "When this tower is destroyed, you may draw three cards, then put two cards from your hand on the bottom of your deck.",
    number: "138",
  },
  {
    image: "images/Promos/tower-of-glimmers.webp",
    name: "Tower of Glimmers",
    element: "light",
    defense: 1000,
    type: "unit",
    effect:
      "When this tower is destroyed, you may exhaust all units your opponent controls.",
    number: "139",
  },
  {
    image: "images/Promos/the-great-magimaze.webp",
    name: "The Great Magimaze",
    element: "Argent",
    cost: 3,
    type: "Augment",
    effect:
      'You can only control one "The Great Magimaze".This card comes into play with five Maze counters on it.Exhaust: If this card has no Maze counters, destroy it, and if you do, you win the game.',
    number: "140",
  },
  {
    image: "images/Promos/tower-of-fear.webp",
    name: "Tower of Fear",
    element: "dark",
    defense: 1000,
    type: "unit",
    effect:
      "When this tower is destroyed, you may exhaust two of your opponent's shards.",
    number: "141",
  },
  {
    image: "images/Promos/tower-of-gusts.webp",
    name: "Tower of Gusts",
    element: "air",
    defense: 1500,
    type: "unit",
    effect:
      "When this tower is destroyed, you may recover all shards you control.",
    number: "142",
  },
  {
    image: "images/Promos/nori-the-first-warlock.webp",
    name: "Nori, the First Warlock",
    element: "water",
    cost: 4,
    power: 2500,
    type: "Unit",
    subtype: "warlock",
    effect:
      "As an additional cost to play this card you may pay (X).\n" +
      "Arrive – If you paid this card's additional cost, draw X cards.\n" +
      "Whenever you play a Water spell – You may exhaust target unit.",
    number: "143",
  },
  {
    image: "images/Promos/unger-the-conjurers-adversary.webp",
    name: "Unger, the Conjurer's Adversary",
    element: "dark",
    cost: 2,
    power: 1500,
    type: "Unit",
    subtype: "conjurer",
    effect:
      "Whenever a unit your opponent controls is put into the discard zone - You may put into play a Raven token (Unit/Dark/Beast/500).\n" +
      "Sacrifice two other units: Your opponent's champion loses all abilities this turn.",
    number: "144",
  },
  {
    image: "images/Promos/gz-blazerusher-squire.webp",
    name: "G.Z., Blazerusher Squire",
    element: "fire",
    cost: 3,
    power: 2000,
    type: "Unit",
    subtype: "blazerusher",
    effect:
      "Arrive – You may expel an Air card from your discard zone, and/or a Fire card from your hand. If you do, put an Explosion Counter on this card for each card expelled this way.\n" +
      "Remove an Explosion counter from a card you control: This card gains Quickness.\n" +
      "Remove two Explosion counters from cards you control: Destroy target tower you own and target tower your opponent owns.",
    number: "145",
  },
  {
    image: "images/Promos/yuki-brightveiler-squire.webp",
    name: "Yuki, Brightveiler Squire",
    element: "light",
    cost: 3,
    power: 2000,
    type: "Unit",
    subtype: "brightveiler",
    effect:
      "Target Attack\n" +
      "This card cannot be targeted by spells or abilities of cards with cost (2) or less.\n" +
      "Expel a Dark card and Light card from your discard zone, and reveal this card from your hand: Put this card from your hand into play, and if you do, exhaust target unit your opponent controls. Use only while your opponent has three or more destroyed towers.",
    number: "146",
  },
  {
    image: "images/Promos/brilliant-verdure.jpg",
    name: "Brilliant Verdure",
    element: "air",
    type: "Spell",
    effect:
      "If this is the second card you've played this turn, this card costs (1) less to play.\n" +
      "Look at the top four cards of your deck. You may add a unit and/or augment among them to your hand. Place the rest on the bottom of your deck in any order.",
    number: "146",
  },
  {
    image: "images/Promos/ash-tidemelder-squire.webp",
    name: "Ash, Tidemelder Squire",
    element: "water",
    cost: 3,
    power: 2000,
    type: "Unit",
    subtype: "tidemelder",
    effect:
      "Your Fire and Water spells cost (1) less to play while your opponent has three or more destroyed towers.\n" +
      "Once per turn, expel a Fire card and Water card from your discard zone: Deal 1500 to target unit, and if you do, draw a card.",
    number: "147",
  },
  {
    image: "images/Promos/forager-of-the-fallen-leaf.webp",
    name: "Forager of the Fallen Leaf",
    element: "air",
    cost: 1,
    power: 1000,
    type: "Unit",
    subtype: "mystic",
    effect:
      "Units you control with power that is double or more their original power cannot be targeted by your opponent's spells or abilities.\n" +
      "Whenever a unit is put into play under your control - You may pay (X). If you do, put X +500 counters on that unit.",
    number: "147",
  },
  {
    image: "images/Promos/nanatsu-stormsurger-squire.webp",
    name: "Nanatsu, Stormsurger Squire",
    element: "air",
    cost: 3,
    power: 2000,
    type: "Unit",
    subtype: "stormsurger",
    effect:
      "Instacast\n" +
      "Once per turn, expel an Air card and a Water card from your discard zone: Exhaust target unit, and if you do, recover one of your shards. Use this only while your opponent has three or more destroyed towers.",
    number: "148",
  },
  {
    image: "images/Promos/abyssal-maw.png",
    name: "Abyssal Maw",
    cost: 2,
    element: "dark",
    type: "Spell",
    effect:
      "Target unit gets -X000 this turn. (X equals the number of Dark units in your discard zone.)",
    number: "148",
  },
  {
    image: "images/Promos/linda-and-goblin-dynamic-duo.webp",
    name: "Linda & Goblin, Dynamic Duo",
    element: "light",
    cost: 3,
    power: 1500,
    type: "Unit",
    subtype: "legendary duo",
    effect:
      "Brawler\n" +
      "While you control a Beast unit, you may play this card from your discard zone as if it was in your hand.\n" +
      'Arrive – Put into play a Cat token (Unit/Beast/Light/1000) that has "Cannot be targeted by spells or abilities.".',
    number: "149",
  },
  {
    image: "images/Promos/enforcer-of-the-twisting-abyss.png",
    name: "Enforcer of the Twisting Abyss",
    element: "dark",
    cost: 3,
    power: 2000,
    type: "Unit",
    subtype: "dragon",
    effect:
      "Whenever this card deals damage to an opponent's tower - Your opponent discards a card and you draw a card.\n" +
      "Whenever your opponent discards a card - You may add this card from your discard zone to your hand.",
    number: "149",
  },
  {
    image: "images/Promos/void-flame-expulsion.webp",
    name: "Void Flame Expulsion",
    element: "fire",
    cost: 2,
    type: "Spell",
    effect:
      "Instacast\n" +
      "Play only while you control a Fire unit. Neither player can add to the queue in response to this card. Expel target unit or augment, and if you do, it's owner draws a card.",
    number: "150",
  },
  {
    image: "images/Promos/underlord-of-the-void-flame.webp",
    name: "Underlord of the Void Flame",
    cost: 2,
    element: "fire",
    type: "Unit",
    subtype: "warrior",
    effect:
      "As an additional cost to play this card you may sacrifice a Fire unit with cost (2) or more. If you do, this card costs (2) less to play.\n" +
      "If you paid the additional cost to play this card, this card gains Quickness.",
    number: "151",
  },
  {
    image: "images/Promos/rippling-sword-slash.png",
    name: "Rippling Sword Slash",
    element: "light",
    cost: 2,
    type: "Spell",
    effect:
      "Exhaust target unit your opponent controls, and if you do, you may recover a unit you control with cost less than the exhausted unit.",
    number: "152",
  },
  {
    image: "images/Promos/striker-of-the-endless-sword.png",
    name: "Striker of the Endless Sword",
    element: "light",
    cost: 2,
    power: 1500,
    type: "Unit",
    subtype: "warrior",
    effect:
      "Arrive - You may discard a card, if you do, choose one.\n" +
      "* Exhaust target unit.\n" +
      "* Recover target unit.",
    number: "153",
  },
  {
    image: "images/Promos/twisting-premonition.png",
    name: "Twisting Premonition",
    element: "water",
    cost: 1,
    type: "Spell",
    effect:
      "Instacast\n" +
      "Look at the top card of your deck. You may put it into the discard zone. Draw a card.",
    number: "154",
  },
  {
    image: "images/Promos/ruler-of-the-twisting-waters.png",
    name: "Ruler of the Twisting Waters",
    element: "water",
    cost: 1,
    power: 500,
    type: "unit",
    subtype: "mystic",
    effect:
      "Arrive - Target a Water spell in your discard zone. This turn, you may play that card from your discard zone as if it were in your hand. Expel that card if you do.",
    number: "155",
  },
  {
    image: "images/Promos/shard-mecha-prime-king-warku.webp",
    name: "Shard-Mecha Prime: King Warku",
    element: "argent",
    cost: 4,
    power: 2000,
    type: "unit",
    subtype: "mecha",
    effect:
      "Unblockable\n" +
      'While you control "Underground Mech Base", you may play this card from your discard zone as if it was in your hand. If you do, expel this card when it leaves the field.\n' +
      'Arrive – You may discard a card. If you do, search your deck for an "Underground Mech Base" and put it into play, and if you do, you may also add a "Shard-Mecha" unit with cost (3) or less from your deck to your hand.',
    number: "160",
  },
  {
    image: "images/Promos/silver-kings-overseer.webp",
    name: "Silver King's Overseer",
    element: "argent",
    cost: 2,
    power: 1000,
    type: "unit",
    subtype: "silver army",
    effect: `Ruined - Search your deck for up to one "Silver King's Pawn" and put it into play. If your champion is "Metaial the Silver King" put two into play instead.`,
    number: "161",
  },
  {
    image: "images/Promos/raoyenna-the-vengeful-phoenix.webp",
    element: "Fire",
    cost: 5,
    power: 3000,
    name: "Raoyenna, the Vengeful Phoenix",
    type: "Unit",
    subtype: "Phoenix",
    effect:
      'Discard this card from your hand: Destroy target non-token unit you control, and if you do, deal 1500 to target unit your opponent controls.At the start of your draw phase, if this card is in your discard zone because of its own ability - You may expel this card. If you do, put into play a "Raoyenna" unit from your hand or discard zone.',
    number: "162",
  },
  {
    image: "images/Promos/citra-aspirant-rose-knight.webp",
    name: "Citra, Aspirant Rose Knight",
    element: "light",
    cost: 1,
    power: 1000,
    type: "unit",
    subtype: "rose knight",
    effect:
      'Discard this card and a Gear from your hand: Search your deck for "Order of the Rose" and add it to your hand.\n' +
      'Arrive - If a unit was sent from your field to the discard zone this turn, you may search your deck for a Rose Knight unit with cost (2) or less, except "Citra, Aspirant Rose Knight" and put it into play.',
    number: "162",
  },
  {
    image: "images/Promos/omega-charger.webp",
    name: "Ω Charger",
    element: "argent",
    cost: 2,
    power: 1000,
    type: "unit",
    subtype: "mech",
    effect:
      "Arrive – Put target unit from your discard zone under target Ω unit you control.",
    number: "163",
  },
  {
    image: "images/Promos/omega-amulet.webp",
    name: "Ω Amulet",
    element: "argent",
    cost: 2,
    type: "legendary augment",
    effect:
      "Arrive – Draw a card.\n" +
      "Sacrifice this card: Champions lose all abilities this turn. Neither player can add to the queue in response to this ability.",
    number: "164",
  },
  {
    image: "images/Promos/ruka-the-dragonsoul-pugilist.webp",
    name: "Ruka, the Dragonsoul Pugilist",
    element: "fire",
    power: 2,
    power: 1000,
    type: "Unit",
    subtype: "warrior",
    effect:
      "While you control this card, this card is also treated as a Dragon unit.\n" +
      "This card gets +500 for each of your expelled Dragon units.\n" +
      "Arrive - You may expel a Fire unit from your hand. If you do, draw a card. If you expelled a Dragon unit, draw two cards instead.",
    number: "167",
  },
  {
    image: "images/Promos/sandsea-hydra-scorpion.jpg",
    name: "Sandsea Hydra Scorpion",
    element: "air",
    power: 2,
    power: 1000,
    type: "Unit",
    subtype: "dragon beast",
    effect:
      "Ruined – Search your deck for a Beast unit with cost (1) or less and put it into play.",
    number: "172",
  },
  {
    image: "images/Promos/demi-bahamute.jpg",
    name: "Demi-Bahamute",
    element: "fire",
    power: 5,
    power: 2500,
    type: "Unit",
    subtype: "dragon",
    effect:
      "Destroyer\n" +
      "Arrive - You may reveal two Dragon units from your hand: Destroy any number of units your opponent controls with combined power 2000 or less. For each unit destroyed this way, you may search your deck for a Dragon unit with cost (1) and put it into play.",
    number: "173",
  },
  {
    image: "images/Promos/demi-leviathan.png",
    name: "Demi-Leviathan",
    element: "water",
    power: 5,
    power: 2500,
    type: "Unit",
    subtype: "serpent",
    effect:
      "Guardian\n" +
      "Arrive - You may flip any number of your face-down towers face-up. If you do, take control of any number of target units whose combined cost is equal to or less than the number of towers you flipped up.",
    number: "174",
  },
  {
    image: "images/Promos/hokken-archaeologist.webp",
    name: "Hokken Archaeologist",
    element: "Argent",
    cost: 2,
    power: 1000,
    type: "Unit",
    subtype: "Adventurer",
    effect:
      "Augments you control cannot be targeted by spells or abilities.\n" +
      "Arrive - You may search your deck for a non-Location augment and add it to your hand, if you do, put a card from your hand on top of your deck.",
    number: "175",
  },
  {
    image: "images/Promos/fragment-of-the-forgotten-one.webp",
    name: "Fragment of the Forgotten One",
    element: "Argent",
    cost: 5,
    power: 3000,
    type: "Unit",
    subtype: "Astral",
    effect:
      "Triggered abilities of units and augments do no trigger.\n" +
      "Once per turn, expel another unit you control: This card gains Immortal this turn.",
    number: "176",
  },
  {
    image: "images/Promos/hadir-boy-of-the-sacred-forest.webp",
    name: "Hadir, Boy of the Sacred Forest",
    element: "Air",
    type: "Champion",
    effect:
      "Exhaust, put a card from your hand under this card: If it was a Beast unit, you may place a +500 counter on target unit. If it was an Elemental unit, draw a card.\n" +
      "Put two cards form under this card into the discard zone: Target unit you control gets +1000 and gains Overrun this turn.",
    number: "177",
  },
  {
    image: "images/Promos/hokken-warding-amulet.webp",
    name: "Hokken Warding Amulet",
    element: "Argent",
    cost: 2,
    type: "Augment",
    effect:
      "Neither player can target cards in discard zones.\n" +
      "Neither player can activate the abilities of cards in discard zones.\n" +
      'You can only control one "Hokken Warding Amulet".',
    number: "178",
  },
  {
    image: "images/Promos/neferia-the-queens-assassin.webp",
    name: "Neferia, the Queen's Assassin",
    element: "Dark",
    type: "Champion",
    effect:
      "Whenever you trigger the Ruined ability of a unit - You may put that unit under this card.\n" +
      "Exhaust, put three cards from under this card into the discard zone: Target unit loses all abilities this turn. Then if its cost is (3) or less, destroy it.",
    number: "179",
  },
  {
    image: "images/Promos/pengardian-legend-hanzo.webp",
    name: "Pengardian Legend, Hanzo",
    element: "Water",
    type: "Champion",
    effect:
      "Whenever a unit your opponent controls becomes Stunned - You may put the top card of your deck under this card. If it was a Penguin unit, you may draw a card.\n" +
      "Once per turn, put two cards from under this card on the top or bottom of their owner's deck in any order: Ignore the effects of target non-destroyed tower this turn.",
    number: "180",
  },
  {
    image: "images/Promos/renna-feral-warrior.webp",
    name: "Renna, Feral Warrior",
    element: "Fire",
    type: "Champion",
    effect:
      "Exhaust, if you declared an attack with a Fire unit this turn, put the top card of your deck under this card: If it was a Fire unit, you may deal 1000 to target unit your opponent controls.\n" +
      "Put two cards from under this card on the top or bottom of their owner's deck in any order: Put a Dinosaur unit from your hand or discard zone with cost equal to or less than the number of shards you control into play.",
    number: "181",
  },
  {
    image: "images/Promos/shardwork-arbiter.webp",
    name: "Shadrwork Arbiter",
    element: "Argent",
    cost: 6,
    power: 5000,
    type: "Unit",
    subtype: "Robot Arbiter",
    effect:
      "As an additional cost to play this card you may exhaust any number of units you control. If you do, this card costs (1) less to play for each.\n" +
      "Destroyer, Guardian, Overrun, Quickness, Target Attack\n" +
      "Animate 2 (You must pay (2) to attack or block with this card.)",
    number: "182",
  },
  {
    image: "images/Promos/tux-the-emperor-spirit-1.webp",
    name: "Tux, the Emperor Spirit",
    element: "water",
    affinity: 10,
    type: "Spirit",
    effect:
      "When a unit you control destroys a tower - You may draw a card then discard a card.\n" +
      "Soulburst, pay (3): Stun all units your opponent controls. (A Stunned card cannot attack, block, or use activated abilities, until the end of the next turn.)",
    number: "183",
  },
  {
    image: "images/Promos/zane-hero-of-hyldia.webp",
    name: "Zane, Hero of Hyldia",
    element: "Light",
    type: "Champion",
    effect:
      "Exhaust: If you declared an attack with a basic unit this turn, put a card from your hand under this card, and if you do, draw a card.\n" +
      "Put two cards under this card into the discard zone: Put a Hyldian token (Unit/Warrior/Light/1000) into play.",
    number: "184",
  },
  {
    image: "images/Promos/the-masked-nemesis.png",
    name: "The Masked Nemesis",
    element: "dark",
    power: 2,
    power: 1500,
    type: "unit",
    effect:
      "Arrive or whenever this card declares an attack - Place a counter on this card.\n" +
      "Ruined - If this card had at least two counters on it, your opponent discards a card. If it had at least three counters, you may put this card into play.",
    number: "185",
  },
  {
    image: "images/Promos/fragment-of-adoration.webp",
    name: "Fragment of Adoration",
    element: "argent",
    power: 6,
    power: 5000,
    type: "Omega Unit",
    subtype: "entity",
    effect:
      "Ω (Place on one or more of your units.)\n" +
      "Once per turn, put a unit from under this card into the discard zone: If every card in your discard zone has a different name, you may search your deck for a non-Argent card and either add it to your hand or put it into play.",
    number: "199",
  },
  {
    image: "images/Promos/professor-damous-outlandish-engineer.png",
    name: "Professor Damous, Outlandish Engineer",
    element: "argent",
    power: 3,
    power: 2000,
    type: "Unit",
    subtype: "professor",
    effect:
      "Exhaust, sacrifice a unit: Trigger the Arrive ability of the sacrificed unit.",
    number: "200",
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
