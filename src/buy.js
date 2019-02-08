import getAllListings from './get-all-listings.js';
const allListings = getAllListings();

console.log(allListings);

const showListings = document.getElementById('show-all-listings');

for(let i = 0; i < allListings.length; i++) {
    const listing = allListings[i];

    const title = document.createElement('p');
    title.textContent = listing.title;
    showListings.appendChild(title);
    
    const category = document.createElement('p');
    category.textContent = listing.category;
    showListings.appendChild(category);
    
    // const imageUrl = document.createElement('p');
    // imageUrl.textContent = listing.imageUrl;
    // showListings.appendChild(imageUrl);
    
    const description = document.createElement('p');
    description.textContent = listing.description;
    showListings.appendChild(description);
    
    const condition = document.createElement('p');
    condition.textContent = listing.condition;
    showListings.appendChild(condition);

    console.log(category.title);

}