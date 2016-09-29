'use strict';

// let Isogram = function(word) {
// this.word = word;
// }

// Isogram.prototype.isIsogram = function() {
// let letterDict = {};

// return this.word
// .replace(' ', '')
// .replace(/[-]/g, '')
// .split('')
// .filter(function(ele) {

// if (!letterDict[ele.toLowerCase()]) {
// letterDict[ele.toLowerCase()] = 1;
// } else {
// letterDict[ele.toLowerCase()]++;
// }

// return letterDict[ele.toLowerCase()] === 2;
// })
// .length === 0;

// }

class Isogram {
  constructor(word){
    this.word = word;
  }

  isIsogram() {
    let letterDict = {};

    return this.word
      .replace(' ', '')
      .replace(/[-]/g, '')
      .split('')
      .filter((ele) => {

        if (!letterDict[ele.toLowerCase()]) {
          letterDict[ele.toLowerCase()] = 1;
        } else {
          letterDict[ele.toLowerCase()]++;
        }

        return letterDict[ele.toLowerCase()] === 2;
      })
      .length === 0;
  }

}

module.exports = Isogram;
