const jone = {
    name: "Jone",
    age: 22
};

const pete = {
    name: "Pete",
    age: 20
};


const bob = {
    name: "Bob",
    age: 27
};


function logUser(user) {
    console.log(`My name is ${user.name}. I am ${user.age} age`)
}

module.exports = {
    jone: jone,
    pete: pete,
    bob: bob,
    logUser: logUser,
}