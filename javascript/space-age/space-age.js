class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
    this.earthAge = SpaceAge.earthYears(this.seconds);
    this.planetAges = {
      Earth: this.earthAge,
      Mercury: this.earthAge / .2408467,
      Venus: this.earthAge / .61519726,
      Mars: this.earthAge / 1.8808158,
      Jupiter: this.earthAge / 11.862615,
      Saturn: this.earthAge / 29.447498,
      Uranus: this.earthAge / 84.016846,
      Neptune: this.earthAge / 164.79132
    }
    SpaceAge.solarAgeConstructor(this.planetAges);
  }

  static earthYears(time) {
    return time / 31557600;
  }

  static solarAgeConstructor(ages){
    Object.keys(ages).forEach( (ele) => {
      SpaceAge.prototype[`on${ele}`] = () => {
        return +ages[ele].toFixed(2);
      }
    })
  }
  
}

module.exports = SpaceAge;
