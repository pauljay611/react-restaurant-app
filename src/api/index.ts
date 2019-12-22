const restaurantApi = () => {
    return fetch('http://localhost:8080')
        .then(response => response.json())
};
const searchRestaurantApi = (keyword: string) => {
    return fetch('http://localhost:8080/restaurants', {
        method: 'POST',
        body: JSON.stringify({ keyword }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(response => response.json())
};

export { restaurantApi, searchRestaurantApi }