class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    getFullName() {
        return this.name + ' ' + this.age
    }

}

let user1 = new Cat('Skitty', '9years')
let user2 = new Cat('Pixel', '6years')

console.log(user1.getFullName(), user2.getFullName())