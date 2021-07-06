// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

//ADD AN EVENT LISTENER & CREATE AN ELEMENT
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  //console.log(guest);
  if (guest !== "") {
    addToList(guest); //call the addToList function and pass it guest as an argument
    updateGuestCount();
    clearInput();
  }
});

//CLEAR THE INPUT BOX
const clearInput = function () {
  guestInput.value = "";
};

//REFACTOR CODE
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

//LIMIT THE GUEST LIST
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide"); //classList property to add, remove, or toggle classes
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

//SELECT ASSIGNED ITEMS & BUILD AN ARRAY
const assignItems = function () {
  const potluckItems = [
    "Spring Rolls",
    "Sandwiches",
    "Salad",
    "Chips",
    "Fruits",
    "Cheese",
    "Crackers",
    "Punch for crowd",
    "Something GF",
    "Something Vegan",
    "Desert 1",
    "Desert 2"
  ];
  const allGuests = document.querySelectorAll(".guest-list li");

  for (let guest of allGuests) {
    //It's a loop, so use let.
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);
    potluckItems.splice(randomPotluckIndex, 1); //Remove an item so it won't be assigned to somepne else
  }
};

//ADD AN EVENT LISTENER & UPGRADE potluckItems ARRAY
assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
