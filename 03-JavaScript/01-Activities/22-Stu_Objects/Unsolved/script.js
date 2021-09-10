//WRITE YOUR CODE BELOW
var customerOrder = {
    name: "Coffee",
    sugar: 3,
    orderstatus: true
};

console.log(customerOrder.name);

console.log(customerOrder.sugar);

if (customerOrder.ready) {
    console.log('Ready for pick-up')
} else {
    console.log('Still in order queue')
}