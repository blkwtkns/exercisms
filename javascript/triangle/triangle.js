class Triangle {

  constructor(...args) {
    this.sides = [...arguments];
    this.triangles = {
      '3': 'equilateral',
      '2': 'isosceles',
      '0': 'scalene'
    }
  }

  static legalTriangle(triangle) {
    let legal = true;

    triangle.forEach((ele, idx, array) => {
      if (ele <= 0) legal = false;
      let splice = array.slice();
      splice.splice(idx, 1);
      if (ele >= splice.reduce((a, b) => {
          return a + b;
        })) {
        legal = false;
      }
    })
    return legal;
  }

  kind() {
    if (Triangle.legalTriangle(this.sides)) {
      return this.triangles[this.sides.filter((ele, idx, array) => {
        let slice = array.slice();
        slice[idx] = null;
        return slice.indexOf(ele) > -1;
      }).length]
    } else {
      throw 'illegal triangle';
    }
  }
}

module.exports = Triangle;
