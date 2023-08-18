import { dataNumbers } from "../data/deckbuilder.js";

const sal = JSON.parse(localStorage.getItem("list")) || [];
let mainDeck = [];
let shardDeck = [];
let champRegion = [];
let spiritRegion = [];
let towerRegion = [];

getDataButtons(dataNumbers);

function addEvents() {
  document.querySelectorAll(".image-formating").forEach((image) => {
    image.addEventListener("click", () => {
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
  console.log("Hmmm");
}

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

function getDataButtons(data) {
  let filteredList = data.slice();
  let imageString = "";

  data.forEach((value) => {
    imageString += `<div class='image-formating' data-number="${value.number}"><img src="${value.image}" /></div>`;
  });
  document.querySelector(".first").innerHTML = imageString;

  document.querySelector(".filter-button").addEventListener("click", () => {
    document.querySelector(".name-filter").value &&
      filtered(document.querySelector(".name-filter").value);
    document.querySelector(".element-filter").value &&
      filterElement(document.querySelector(".element-filter").value);
    document.querySelector(".cost-filter").value &&
      filterCost(document.querySelector(".cost-filter").value);
    document.querySelector(".power-filter").value &&
      filterPower(document.querySelector(".power-filter").value);
    document.querySelector(".type-filter").value &&
      filterType(document.querySelector(".type-filter").value);
    document.querySelector(".subtype-filter").value &&
      filterSubtype(document.querySelector(".subtype-filter").value);
    document.querySelector(".effect-filter").value &&
      filterEffect(document.querySelector(".effect-filter").value);

    let displayWord = "";
    filteredList.forEach((value) => {
      displayWord += `<div class='image-formating' data-number="${value.number}"><img src="${value.image}" /></div>`;
    });
    document.querySelector(".first").innerHTML = displayWord;

    document.querySelector(".name-filter").value = "";
    document.querySelector(".element-filter").value = "";
    document.querySelector(".cost-filter").value = "";
    document.querySelector(".power-filter").value = "";
    document.querySelector(".type-filter").value = "";
    document.querySelector(".subtype-filter").value = "";
    document.querySelector(".effect-filter").value = "";

    filteredList = data;
    addEvents();
  });

  function filtered(word) {
    filteredList = filteredList.filter((value) => {
      return value.name.toLocaleUpperCase().includes(word.toLocaleUpperCase());
    });
  }

  function filterElement(element) {
    filteredList = filteredList.filter((value) => {
      return value.element
        .toLocaleUpperCase()
        .includes(element.toLocaleUpperCase());
    });
  }

  function filterCost(cost) {
    filteredList = filteredList.filter((value) => {
      return value.cost === Number(cost);
    });
  }

  function filterPower(power) {
    filteredList = filteredList.filter((value) => {
      return value.power === Number(power);
    });
  }

  function filterType(type) {
    filteredList = filteredList.filter((value) => {
      return value.type.toLocaleUpperCase() === type.toLocaleUpperCase();
    });
  }

  function filterSubtype(subtype) {
    filteredList = filteredList.filter((value) => {
      if (value.subtype === undefined) {
        return false;
      }
      return value.subtype
        .toLocaleUpperCase()
        .includes(subtype.toLocaleUpperCase());
    });
  }

  function filterEffect(effect) {
    filteredList = filteredList.filter((value) => {
      if (value.effect === undefined) {
        return false;
      }
      return value.effect
        .toLocaleUpperCase()
        .includes(effect.toLocaleUpperCase());
    });
  }
  addEvents();
}
