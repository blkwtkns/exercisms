const BigInt = require('./big-integer');

class Grains {
  
  static squareVal(num){
    return BigInt(2).pow(num - 1);
  }

  static bigVal(array){
    return array.reverse().join('');
  }

  square(num){
    let grainVal = Grains.squareVal(num).value;
    if(!Array.isArray(grainVal)){
      return `${grainVal}`;
    }else{
     return Grains.bigVal(grainVal);
    }
  }

  total(){
    let bigSum = BigInt(1),
      idx = 2;
    while(idx <= 64){
      bigSum = BigInt(Grains.squareVal(idx)).add(bigSum);
      idx++;
    }
    return Grains.bigVal(bigSum.value);
  }

}

module.exports = Grains;
