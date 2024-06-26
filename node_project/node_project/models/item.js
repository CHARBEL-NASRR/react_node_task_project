// models/Item.js

class Item {
    constructor(name, description, mobileNumber = null) {
        this.name = name;
        this.description = description;
        this.mobileNumber = mobileNumber;
    }

    setName(name) {
        this.name = name;
    }

    setDescription(description) {
        this.description = description;
    }

    setMobileNumber(mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getMobileNumber() {
        return this.mobileNumber;
    }
}

module.exports = Item;
