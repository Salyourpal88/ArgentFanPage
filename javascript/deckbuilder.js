import { dataNumbers } from "../data/deckbuilder.js";
import { getDataButtons } from "./util/utility.js";

const sal = JSON.parse(localStorage.getItem("list")) || [];
let mainDeck = [];
let shardDeck = [];
let champRegion = [];
let spiritRegion = [];
let towerRegion = [];

getDataButtons(dataNumbers);

document.querySelectorAll(".image-formating").forEach((image) => {
  image.addEventListener("click", () => {
    console.log("Hmmmm");
    const cardDetails = dataNumbers[image.dataset.number];
    const typeOfCard = cardDetails.type;

    if (
      [
        "UNIT",
        "AUGMENT",
        "SPELL",
        "LEGENDARY AUGMENT",
        "LEGENDARY UNIT",
      ].includes(typeOfCard.toLocaleUpperCase())
    ) {
      if (mainDeck.length < 60) {
        addCard(mainDeck, cardDetails);
        rerender(mainDeck, ".js-main-deck");
        return;
      } else {
        alert("Wake up that's more than 60");
        return;
      }
    }
    if (["CHAMPION"].includes(typeOfCard.toLocaleUpperCase())) {
      if (champRegion.length === 1) {
        champRegion = [];
      }
      addCard(champRegion, cardDetails);
      rerender(champRegion, ".js-champ-slot");
      return;
    }
    if (["SPIRIT"].includes(typeOfCard.toLocaleUpperCase())) {
      if (spiritRegion.length === 1) {
        spiritRegion = [];
      }
      addCard(spiritRegion, cardDetails);
      rerender(spiritRegion, ".js-spirit-slot");
      return;
    }
    if (
      ["BASIC SHARD", "SPECIAL SHARD", "LEGENDARY SHARD"].includes(
        typeOfCard.toLocaleUpperCase()
      )
    ) {
      if (shardDeck.length > 10) {
        alert("Wake up that's too many shards");
        return;
      }
      addCard(shardDeck, cardDetails);
      rerender(shardDeck, ".js-shard-slots");
      return;
    }
    if (["TOWER"].includes(typeOfCard.toLocaleUpperCase())) {
      if (towerRegion.length === 5) {
        alert("Wake up that's too many towers");
        return;
      }
      addCard(towerRegion, cardDetails);
      rerender(towerRegion, ".js-tower-slots");
      return;
    }
  });
});

function rerender(category, location) {
  let mainString = "";
  category.forEach((value) => {
    mainString += `<img src=${value.image} />`;
  });
  document.querySelector(location).innerHTML = mainString;
}

function addCard(category, cardDetails) {
  let found = "";
  category.forEach((value) => {
    if (value.image === cardDetails.image) {
      value.quantity += 1;
      found = true;
    }
  });
  !found && category.push({ image: cardDetails.image, quantity: 1 });
}
