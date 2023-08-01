export const getCoffees = (reviews) => {
    var coffees = []

    for (var i = 0; i < reviews.length; i++) {
        // check if coffee name is in the array
        const alreadyExists = coffees.some(obj => obj.name == reviews[i].name)

        // if coffee shop not in the array:
        // create an object for both coffee shop and img
        if (!alreadyExists) {
            var object = {
                name: reviews[i].name,
                img: reviews[i].img
            }
            coffees.push(object)
        }
    }

    return coffees
}
