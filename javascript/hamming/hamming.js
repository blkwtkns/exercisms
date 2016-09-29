'use strict';

let Hamming = function() {};

Hamming.prototype.compute = function(strand1, strand2){
  if(strand1.length !== strand2.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  return strand1.split('').filter(function(ele, idx){
    return ele !== strand2[idx];
  }).length;

}


module.exports = Hamming;
