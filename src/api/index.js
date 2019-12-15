const restaurantApi = (restaurant) => {
    return fetch('http://localhost:8080')
        .then(response => response.json()).catch(err => err);
};
const searchRestaurantApi = (keyword) => {
    return fetch('http://localhost:8080/restaurants', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({ keyword }), // data can be `string` or {object}!
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(response => response.json()).catch(err => err);
};

export { restaurantApi, searchRestaurantApi }