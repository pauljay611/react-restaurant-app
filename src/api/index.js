const restaurantApi = fetch('http://localhost:8080')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson);
        return myJson
    });

export default restaurantApi