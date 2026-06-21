const { v4: uuidv4 } = require('uuid');

const username = "user" + uuidv4().substring(0,5);

module.exports = {

    firstName: "Marimuthu",
    lastName: "QA",
    address: "Chennai",
    city: "Chennai",
    state: "TamilNadu",
    zipCode: "600001",
    phone: "9876543210",
    ssn: "123456",
    username: "Marimuthu",
    password: "Password123"
}