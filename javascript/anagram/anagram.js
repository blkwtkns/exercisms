class Anagram{
  constructor(word){
    this.word = word;
  }

  static sortWord(word){
    return word.split('').sort((a, b) => {
      return a > b;
    }).join('');
  }

  matches(){
    let sorts = this.constructor.sortWord,
    args;

    !Array.isArray(arguments[0]) ? args = Array.from(arguments) : args = arguments[0];

    return args.filter((ele, idx) => {
      return sorts(this.word) === sorts(ele);
    })

  }
}

module.exports = Anagram;
