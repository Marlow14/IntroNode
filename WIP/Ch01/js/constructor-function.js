function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName
    this.getFullName = function () {
        return `${ firstName } ${ lastName }`;
    }
}

let Person1 = new Person('Chris', 'Marlow');

console.log(Person1.getFullName());
