export const getCoffeeShops = (reviews) => {
    var coffeeShops = []

    for (var i = 0; i < reviews.length; i++) {
        // check if coffee shop name is in the array
        const alreadyExists = coffeeShops.some(obj => obj.name == reviews[i].shop)

        // if coffee shop not in the array:
        // create an object for both coffee shop and img
        if (!alreadyExists) {
            var object = {
                name: reviews[i].shop,
                img: reviews[i].img
            }
            coffeeShops.push(object)
        }
    }
    console.log(coffeeShops)

    return coffeeShops
}
