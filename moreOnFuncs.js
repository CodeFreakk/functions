function greet({greetings = 'What\'s Poppin,',job, age = 18}){
    return `${greetings}  ${job} i am ${age} years old`
}
console.log(greet({job : "Weeb Developer"}))
const randomnumber = {
    sides: 6,
    roll() {
    return Math.floor(this.sides * Math.random()) + 1;
    }
    }
const dice = {
    sides :6,
    roll()
    {
        return Math.floor(this.sides  * Math.random()) + 1;
    }
}
console.log(dice.roll())
const superman = '{"name": "Clark kent", "name2power": ["Super Strength","Flying","Laser Eyes","Super Fast"]}'
console.log(JSON.stringify(superman))
