const form = document.querySelector('#the-div');
const address = document.querySelector('#address');
const state = document.querySelector('#state');
const price = document.querySelector('#price');
const style = document.querySelector('#style');
const submitButton = document.querySelector('#submitButton');
const dataDisplay = document.querySelector('#data-display');

const listingsList = document.createElement('ul');

const listingsArray = [];

const render = () => {
  listingsArray.forEach((listing) => {
    const listingListItem = document.createElement('li');
    listingListItem.appendChild(elementify(listing));
    listingsList.appendChild(listingListItem);
  });
};

function elementify(obj) {
  let list = document.createElement('ul');
  for (const key in obj) {
    const listItem = document.createElement('li');
    listItem.innerText = `${key}: ${obj[key]}`;
    list.appendChild(listItem);
  }
  return list;
}

dataDisplay.appendChild(listingsList);

submitButton.addEventListener('click', () => {
  const newListing = new Listing(
    address.value,
    state.value,
    price.value,
    style.value
  );
  listingsArray.push(newListing);
  render();
});
