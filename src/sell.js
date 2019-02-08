import getAllListings from './get-all-listings.js';

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Makes object, returns it, and stores in addListing
    let addListing = makeObject(form);

    // Gets array from localStorage, returns it and storings in allListings
    let allListings = getAllListings();

    allListings.push(addListing);

    const serialize = JSON.stringify(allListings);
    window.localStorage.setItem('allListings', serialize); 
});



// This function makes the addListing object
function makeObject(form) {
    const title = form.elements.title.value;
    const category = form.elements.category.value;
    const imageUrl = form.elements.imageUrl.value;
    const description = form.elements.description.value;
    const condition = form.elements.condition.value;

    const addListing = {
        title: title,
        category: category,
        imageUrl: imageUrl,
        description: description,
        condition: condition
    };
    return addListing;
}