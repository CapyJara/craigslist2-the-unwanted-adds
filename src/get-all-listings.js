// This function finds the allListings array in localStorage
function getAllListings() {
    const json = window.localStorage.getItem('allListings');
    let allListings = [];
    if(json) {
        allListings = JSON.parse(json);
    }
    return allListings;
}

export default getAllListings;