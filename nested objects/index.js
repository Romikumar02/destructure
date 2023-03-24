const person = {
    name: 'Mithun',
    age:21,
    address: {
        street: 'B block B ,industrial Area',
        city: 'sector 62, Noida',
        State: 'Uttar pradesh,'
    },
}
// extracting the value from the given object
function extractnameandstreet(person){
    const person= { name,address:{street}}
    return {name, street}
}
console.log(extractnameandstreet(person));