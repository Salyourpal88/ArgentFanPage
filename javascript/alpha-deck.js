import { alphaIntros } from "../data/alpha-intros.js";
let imageString = "";

let filteredList = alphaIntros.slice();

alphaIntros.forEach((value) => {
  imageString += `<div class='image-formating'><img src="${value.image}" /></div>`;
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
    displayWord += `<div class='image-formating'><img src="${value.image}" /></div>`;
  });
  document.querySelector(".first").innerHTML = displayWord;

  document.querySelector(".name-filter").value = "";
  document.querySelector(".element-filter").value = "";
  document.querySelector(".cost-filter").value = "";
  document.querySelector(".power-filter").value = "";
  document.querySelector(".type-filter").value = "";
  document.querySelector(".subtype-filter").value = "";
  document.querySelector(".effect-filter").value = "";

  filteredList = alphaIntros;
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
