class Beersong {

  verse(num) {
    let cfg = {
      a: 'it',
      b: 'one',
      c: 'No more',
      d: ' bottle',
      e: ' bottles',
      f: ' of beer on the wall, ',
      g: ' of beer.\nTake ',
      h: ' down and pass it around, ',
      i: ' of beer on the wall.\n',
      j: ' of beer.\nGo to the store and buy some more, ',
      k: 'no more'
    };

    switch (num) {
      case 2:
        return num + cfg.e + cfg.f + num + cfg.e + cfg.g + cfg.b + cfg.h + (num - 1) + cfg.d + cfg.i;
      case 1:
        return num + cfg.d + cfg.f + num + cfg.d + cfg.g + cfg.a + cfg.h + cfg.k + cfg.e + cfg.i;
      case 0:
        return cfg.c + cfg.e + cfg.f + cfg.k + cfg.e + cfg.j + 99 + cfg.e + cfg.i;
      default:
        return num + cfg.e + cfg.f + num + cfg.e + cfg.g + cfg.b + cfg.h + (num - 1) + cfg.e + cfg.i;
    }

  }

  sing(start, end = 0) {

    let result = '',
      newline;
    for(let x = start; x >= end; x--){
      x > end ? newline = '\n' : newline = '';
      result += this.verse(x) + newline;
    }
    return result;
  }
}

module.exports = Beersong;
