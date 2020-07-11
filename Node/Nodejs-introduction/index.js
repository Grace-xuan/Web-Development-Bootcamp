//jshint esversion:6

/* native module: fileSystem */
// const fs = require('fs');
// fs.copyFileSync("file1.txt","file2.txt");

/* external module */
const superheroes = require("superheroes");
var mySuperHeroName = superheroes.random();
console.log("My Superhero Name : "+mySuperHeroName);

const supervillains = require("supervillains");
var mySuperVillainName = supervillains.random();
console.log("My Supervillain Name : "+mySuperVillainName);
