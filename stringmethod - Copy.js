const language = 'JavaScript';
const pattern = /language/;
console.log(pattern.test("language"))
console.log(language.match(/[aeiou]/g))
console.log(language.search(/[aeiou]/i))
console.log(language.replace(/[aeiou]/ig, '*'))