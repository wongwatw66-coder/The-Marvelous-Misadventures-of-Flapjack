let languages = ["Ruby","GO","PHP","JavaScript","python"];
console.log(languages.indexOf("JavaScript")); //3
console.log(languages.indexOf("TypeScript")); //-1(No exist)

languages.sort();
console.log(languages);
// Output: [ 'GO', 'JavaScript', 'PHP', 'Ruby', 'python' ]