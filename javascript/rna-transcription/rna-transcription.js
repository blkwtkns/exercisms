'use strict';

let DnaTranscriber = function() {};

DnaTranscriber.prototype.dnaToRnaKey = function() {
  return {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  }
}

DnaTranscriber.prototype.toRna = function(dna) {

  let dnaToRna = this.dnaToRnaKey();

  return dna.split('').map(function(ele, idx) {
    return dnaToRna[ele];
  }).join('');
}

module.exports = DnaTranscriber;
