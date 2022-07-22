console.log("script running");
// Select the input elements!
const goSearch = document.querySelector("#go-search");
const eatSearch = document.querySelector("#eat-search");
const doSearch = document.querySelector("#do-search");

// Select the go cards
const shinjuku = document.querySelector("#go-1");
const ueno = document.querySelector("#go-2");
const harajuku = document.querySelector("#go-3");

// Select the eat cards
const escalivada = document.querySelector("#eat-1");
const fideua = document.querySelector("#eat-2");
const patatas = document.querySelector("#eat-3");

// Select the do cards
const wheel = document.querySelector("#do-1");
const ghibli = document.querySelector("#do-2");
const onsen = document.querySelector("#do-3");
const mountain = document.querySelector("#do-4");


goSearch.addEventListener('input', e => {
  let choice = e.target.value;
  let result = handleChoice(choice);
  if (result === "found!") {
    e.target.value = "";
  }
})

eatSearch.addEventListener('input', e => {
  let choice = e.target.value;
  let result = handleChoice(choice);
  if (result === "found!") {
    e.target.value = "";
  }
})

doSearch.addEventListener('input', e => {
  let choice = e.target.value;
  let result = handleChoice(choice);
  if (result === "found!") {
    e.target.value = "";
  }
})

function handleChoice(choice) {
  if (choice.toLowerCase().includes("plants")) {
    shinjuku.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("beaches")) {
    ueno.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("shopping")) {
    harajuku.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("vegetarian")) {
    escalivada.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("seafood")) {
    fideua.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("traditional")) {
    patatas.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("soccer")) {
    wheel.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("museum")) {
    ghibli.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("park")) {
    onsen.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("cathedral")) {
    mountain.classList.remove("hidden")
    return "found!";
  }
}