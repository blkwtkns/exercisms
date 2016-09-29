class PhoneNumber {
  constructor(num) {
    this.num = num.replace(/[^0-9]/g, '');
  }

  number(){
    switch (this.num.length){
      case 10: 
        return this.num;
      case 11:
        if(this.num[0] === '1'){
          return this.num = this.num.substring(1);
        }
      default:
        return this.num = '0000000000';
    }
  }

  areaCode(){
    return this.num.substring(0, 3);
  }

  toString(){
    return '(' + this.num.substring(0, 3) + ') ' + this.num.substring(3, 6) + '-' + this.num.substring(6);
  }
}

module.exports = PhoneNumber;
