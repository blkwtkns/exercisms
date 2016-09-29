'use strict';

let Year = function(input) {
  this.value = input;
}

Year.prototype.isLeap = function() {

  return [this.value]
    .filter(function(ele) {
      return ele % 4 === 0;
    })
    .filter(function(ele) {
      if (ele % 100 === 0) {
        return ele % 400 === 0;
      } else {
        return ele;
      }
    }).length === 1;
}




module.exports = Year;
