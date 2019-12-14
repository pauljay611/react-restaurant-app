const restaurantApi = (restaurant) => {
    return fetch('http://localhost:8080')
        .then(response => response.json());
};

export { restaurantApi }