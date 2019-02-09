import getAllListings from './get-all-listings.js';
const allListings = getAllListings();

const searchPeram = new URLSearchParams(window.location.search);
const findTitle = searchPeram.get('title');

// console.log(allListings[1]);
// console.log(searchPeram);
// console.log(window.location.search);
// console.log(findTitle);

let listing = [];
let listingCounter = 0;

for(let i = 0; i < allListings.length; i++) {
    const currentListing = allListings[i];
    if(currentListing.title === findTitle) {
        listing = currentListing;
        break;
    } else {
        listingCounter ++;
    }
}

const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const condition = document.getElementById('condition');

title.textContent = listing.title;
image.src = listing.imageUrl;
description.textContent = listing.description;
condition.textContent = listing.condition;

const buttonRemoveListing = document.getElementById('remove');


console.log(allListings);
console.log(listingCounter);

buttonRemoveListing.addEventListener('click', function() {
    
    allListings.splice(listingCounter, 1);

    const serialize = JSON.stringify(allListings);
    window.localStorage.setItem('allListings', serialize);
    
    window.location = '../html/buy.html';
    console.log(allListings);

});
