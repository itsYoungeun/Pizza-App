// OBLIGATORY TYPES
let myName: string = "Bob" // Typescript has inferred what datatype this is supposed to be from JS
let numberOfWheels: number = 4
let isStudent: boolean = false

// DEFINING CUSTOM TYPES
type Food = string
let favoriteFood: Food = "pizza"

type Address = {
    street: string,
    city: string,
    country: string,
}

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address?: Address,
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
    address: {
        street: "123 Main St",
        city: "Springfield",
        country: "USA",
    }
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "456 Elm St",
        city: "Springfield",
        country: "USA",
    }
}

function displayInfo(person: Person) {
    console.log(`${person.name} lives at ${person.address?.street}`)
}

displayInfo(person1)

// TYPING ARRAYS
let ages: number[] = [100, 101, 102]

let person3: Person = {
    name: "Bobby",
    age: 42,
    isStudent: true,
}

let person4: Person = {
    name: "Janet",
    age: 66,
    isStudent: false,
}

let people: Array<Person> = [person1, person2]
// let people: Person[] = [person1, person2]

// LITERAL TYPES
let thisName = "Bob"
const thisName2 = "BoB"

// UNIONS
type User = {
    username: string,
    role: "guest" | "member" | "admin",
}

type UserRole = "guest" | "member" | "admin"
let userRole: UserRole = "member"