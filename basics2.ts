// FUNCTION RETURN TYPES
// type UserRole = "guest" | "member" | "admin"

// type User = {
//     username: string,
//     role: UserRole
// }

// const users: User[] = [
//     { username: "john_doe", role: "member"},
//     { username: "jane_doe", role: "admin"},
//     { username: "guest_user", role: "guest"},
// ];

// function fetchUserDetails(username: string): User {
//     const user = users.find(user => user.username === username)
//     if (!user) {
//         throw new Error(`User with username ${username} not found`)
//     }
//     return user
// }

// UTILITY TYPES & PARTIAL
// type User = {
//     id: number,
//     username: string,
//     role: "member" | "contributor" | "admin"
// }

// type UpdatedUser = Partial<User>

// const users: User[] = [
//     { id: 1, username: "john_doe", role: "member" },
//     { id: 2, username: "jane_smith", role: "contributor" },
//     { id: 3, username: "alice_jones", role: "admin" },
//     { id: 4, username: "charlie_brown", role: "member" },
// ]

// function updateUser(id: number, updates: UpdatedUser) {
//     const foundUser = users.find(user => user.id === id)
//     if (!foundUser) {
//         console.error("User not found!")
//         return
//     }
//     Object.assign(foundUser, updates)
// }

// updateUser(1, { username: "new_john_doe" });
// updateUser(4, { role: "contributor" });

// console.log(users)

// OMIT UTILITY TYPE
// function updateUser(id: number, updates: UpdatedUser) {
//     const foundUser = users.find(user => user.id === id)
//     if (!foundUser) {
//         console.error("User not found!")
//         return
//     }
//     Object.assign(foundUser, updates)
// }

// function addNewUser(newUser: Omit<User, "id" | "user">): User {
//     const user: User = {
//         id: nextUserId++,
//         ...newUser
//     }
//     users.push(user)
//     return user
// }

// addNewUser({ username: "joe_schmoe", role: "member" })

// console.log(users)

// GENERICS
// const gameScores = [14, 21, 33, 42, 59]
// const favoriteThings = ["raindrops on roses", "whiskers on kittens", 
//     "bright copper kettles", "warm woolen mittens"];
// const voters = [{ name: "Alice", age: 42}, { name: "Bob", age: 77 }]

// function getLastItem<Type>(array: Type[]): Type | undefined {
//     return array[array.length - 1]
// }

// console.log(getLastItem(gameScores))
// console.log(getLastItem(favoriteThings))
// console.log(getLastItem(voters))