'use strict';

class Pangram {
  constructor(phrase){
    this.phrase = phrase.replace(/[^a-z]/gi, '').split('').map((ele) => {
      return ele.toLowerCase();
    });  
  } 

  isPangram(){
    let abcs = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return new Set(this.phrase).size === abcs.length;
    
  }
}


module.exports = Pangram;
