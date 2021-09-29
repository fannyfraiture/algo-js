class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    get sayHello() {
        return this.userInfo()
        
    }

    userInfo() {
        return this.firstname + " " + this.lastname;
    }
}

let georges = new Person ("Georges", "Mika");

console.log(("Hello, "), georges.userInfo());
