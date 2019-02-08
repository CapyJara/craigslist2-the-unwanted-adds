import getAllListings from './get-all-listings.js';
const allListings = getAllListings();

// console.log(allListings);

const tbody = document.getElementById('tbody');

for(let i = 0; i < allListings.length; i++) {
    const listing = allListings[i];

    const tr = document.createElement('tr');

    const title = document.createElement('td');
    title.textContent = listing.title;
    tr.appendChild(title);
    
    const category = document.createElement('td');
    category.textContent = listing.category;
    tr.appendChild(category);
    
    const image = document.createElement('td');
    const imageUrl = document.createElement('img');
    imageUrl.src = listing.imageUrl;
    imageUrl.classList.add('table-image');
    image.appendChild(imageUrl);
    tr.appendChild(image);
    
    
    // const description = document.createElement('td');
    // description.textContent = listing.description;
    // tr.appendChild(description);
    
    // const condition = document.createElement('p');
    // condition.textContent = listing.condition;
    // tr.appendChild(condition);

    // console.log(imageUrl.src);

    tbody.appendChild(tr);

}