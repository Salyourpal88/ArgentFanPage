import { cardData } from "../data/4-echoes-of-hokken.js";

let imageString = "";

let filteredList = cardData.slice();

cardData.forEach((value) => {
  imageString += `<img src="${value.image}" />`;
  !value.type && console.log(value);
});
document.querySelector(".first").innerHTML = imageString;

document.querySelector(".name-filter").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    filtered(document.querySelector(".name-filter").value);
  }
});

document
  .querySelector(".element-filter")
  .addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      filterElement(document.querySelector(".element-filter").value);
    }
  });

document.querySelector(".cost-filter").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    filterCost(document.querySelector(".cost-filter").value);
  }
});

document.querySelector(".power-filter").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    filterPower(document.querySelector(".power-filter").value);
  }
});

document.querySelector(".type-filter").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    filterType(document.querySelector(".type-filter").value);
  }
});

document
  .querySelector(".subtype-filter")
  .addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      filterSubtype(document.querySelector(".subtype-filter").value);
    }
  });

document
  .querySelector(".effect-filter")
  .addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      filterEffect(document.querySelector(".effect-filter").value);
    }
  });

document
  .querySelector(".rarity-filter")
  .addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      filterRarity(document.querySelector(".rarity-filter").value);
    }
  });

function filtered(word) {
  let displayWord = "";

  filteredList = cardData.filter((value) => {
    return value.name.toLocaleUpperCase().includes(word.toLocaleUpperCase());
  });

  filteredList.forEach((value) => {
    displayWord += `<img src="${value.image}" />`;
  });
  document.querySelector(".first").innerHTML = displayWord;
}

function filterElement(element) {
  let displayWord = "";

  filteredList = cardData.filter((value) => {
    return value.element
      .toLocaleUpperCase()
      .includes(element.toLocaleUpperCase());
  });

  filteredList.forEach((value) => {
    displayWord += `<img src="${value.image}" />`;
  });
  document.querySelector(".first").innerHTML = displayWord;
}

function filterCost(cost) {
  let displayWord = "";

  filteredList = cardData.filter((value) => {
    return value.cost === Number(cost);
  });

  filteredList.forEach((value) => {
    displayWord += `<img src="${value.image}" />`;
  });
  document.querySelector(".first").innerHTML = displayWord;
}

function filterPower(power) {
  let displayWord = "";

  filteredList = cardData.filter((value) => {
    return value.power === Number(power);
  });

  filteredList.forEach((value) => {
    displayWord += `<img src="${value.image}" />`;
  });
  document.querySelector(".first").innerHTML = displayWord;
}

function filterType(type) {
  let displayWord = "";

  filteredList = cardData.filter((value) => {
    return value.type.toLocaleUpperCase() === type.toLocaleUpperCase();
  });

  filteredList.forEach((value) => {
    displayWord += `<img src="${value.image}" />`;
  });
  document.querySelector(".first").innerHTML = displayWord;
}

function filterSubtype(subtype) {
  let displayWord = "";

  filteredList = cardData.filter((value) => {
    return value?.subtype
      .toLocaleUpperCase()
      .includes(subtype.toLocaleUpperCase());
  });

  filteredList.forEach((value) => {
    displayWord += `<img src="${value.image}" />`;
  });
  document.querySelector(".first").innerHTML = displayWord;
}

function filterEffect(effect) {
  let displayWord = "";

  filteredList = cardData.filter((value) => {
    return value.effect
      .toLocaleUpperCase()
      .includes(effect.toLocaleUpperCase());
  });

  filteredList.forEach((value) => {
    displayWord += `<img src="${value.image}" />`;
  });
  document.querySelector(".first").innerHTML = displayWord;
}

function filterRarity(rarity) {
  let displayWord = "";

  filteredList = cardData.filter((value) => {
    return value.rarity.toLocaleUpperCase() === rarity.toLocaleUpperCase();
  });

  filteredList.forEach((value) => {
    displayWord += `<img src="${value.image}" />`;
  });
  document.querySelector(".first").innerHTML = displayWord;
}
