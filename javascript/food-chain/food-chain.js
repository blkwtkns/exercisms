class FoodChain {

  static lyrics() {

    return {
      animals: ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'],

      event: {
        fly: ['', `I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n`],
        spider: [`It wriggled and jiggled and tickled inside her.\n`, `She swallowed the spider to catch the fly.\n`],
        bird: [`How absurd to swallow a bird!\n`, `She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n`],
        cat: [`Imagine that, to swallow a cat!\n`, `She swallowed the cat to catch the bird.\n`],
        dog: [`What a hog, to swallow a dog!\n`, `She swallowed the dog to catch the cat.\n`],
        goat: [`Just opened her throat and swallowed a goat!\n`, `She swallowed the goat to catch the dog.\n`],
        cow: [`I don\'t know how she swallowed a cow!\n`, `She swallowed the cow to catch the goat.\n`],
        horse: ['', `She\'s dead, of course!\n`]
      },

      first: (animal) => {
        return `I know an old lady who swallowed a ${animal}.\n`;
      }
    }

  }

  verse(num) {
    let lyr = this.constructor.lyrics(),
      result = lyr.first(lyr.animals[num - 1]),
      idx = num - 1;
    for (; idx >= 0; idx--) {
      if (idx === 7) return result += lyr.event[lyr.animals[idx]][1];
      lyr.event[lyr.animals[idx]].forEach((el, id, arr) => {
        if (idx === num - 1) {
          result += el;
        } else if (idx !== num - 1 && id === 1) {
          result += el;
        }
      })
    }
    return result;

  }

  verses(from, to) {
    let result = '',
      count = from;

    while (count <= to) {
      result += this.verse(count) + '\n';
      count++;
    }

    return result;

  }

}

module.exports = FoodChain;
