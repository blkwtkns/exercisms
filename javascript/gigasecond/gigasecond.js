'use strict';

let Gigasecond = function(date) {
  this.inputDate = date;
};

Gigasecond.prototype.date = function(){
  return new Date(this.inputDate.valueOf() + 1000000000000);
}


module.exports = Gigasecond;
