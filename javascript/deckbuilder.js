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
        let count = 0;
        mainDeck.forEach((value) => {
          count += value.quantity;
        });
        if (count < 60) {
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
        let count = 0;
        shardDeck.forEach((value) => {
          count += value.quantity;
        });
        if (count >= 10) {
          alert("Wake up that's too many shards");
          return;
        }
        addCard(shardDeck, cardDetails);
        rerender(shardDeck, ".js-shard-slots");
        return;
      }
      if (["TOWER"].includes(typeOfCard.toLocaleUpperCase())) {
        towerRegion = addCardTower(towerRegion, cardDetails);
        rerender(towerRegion, ".js-tower-slots");
        return;
      }
    });
  });
}

function rerender(category, location) {
  let mainString = "";
  category.forEach((value) => {
    mainString += `<div style="position:relative">
      <img class='${
        [mainDeck, shardDeck].includes(category) &&
        location.replace(".", "") + "-sal"
      }' src=${value.image} data-image='${value.image}' />
      ${
        [mainDeck, shardDeck].includes(category)
          ? "<img src='images/assets/shardcopy.png' class='shard-quantity-overlay'> <div class='number-quantity-overlay'>" +
            value.quantity +
            "</div>"
          : "</>"
      }
    </div>`;
  });
  document.querySelector(location).innerHTML = mainString;
  [mainDeck, shardDeck].includes(category) &&
    removeMainShard(location, category);
}

function addCard(category, cardDetails) {
  let found = "";
  category.forEach((value) => {
    if (value.image === cardDetails.image) {
      if (value.quantity === cardDetails.capacity) {
        alert("Max Copies");
        found = true;
        return;
      }
      value.quantity += 1;
      found = true;
    }
  });
  !found && category.push({ image: cardDetails.image, quantity: 1 });
}

function addCardTower(category, cardDetails) {
  let found = "";
  category.forEach((value) => {
    if (value.element === cardDetails.element) {
      value.image = cardDetails.image;
      console.log(value);
      found = true;
    }
  });
  !found &&
    category.push({
      image: cardDetails.image,
      element: cardDetails.element,
      quantity: 1,
    });
  return category;
}

function getDataButtons(data) {
  removeEvents();
  let filteredList = data.slice();
  let imageString = "";

  data.forEach((value) => {
    imageString += `<div class='image-formating' data-number="${value.number}">
      <img src="${value.image}" />
    </div>`;
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

function removeEvents() {
  document.querySelectorAll(".image-formating").forEach((image) => {
    image.removeEventListener("click", () => {
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
}
function removeMainShard(location, category) {
  document.querySelectorAll(location + "-sal").forEach((image) => {
    image.addEventListener("click", () => {
      category = category.filter((value) => {
        if (value.image === image.dataset.image) {
          value.quantity = value.quantity - 1;
          if (!value.quantity) {
            return false;
          }
          return true;
        }
        return true;
      });
      location === ".js-main-deck"
        ? (mainDeck = category)
        : (shardDeck = category);
      rerender(category, location);
    });
  });
}
