function parseCount(value) {
  let res = Number.parseFloat(value);
  if (Number.isNaN(res)) {
    throw Error('Невалидное значение');
  }
  return res;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}


class Triangle {
  constructor(a, b, c) {
    if ((a + b < c) || (a + c < b) || (b + c < a)) {
      throw Error('Треугольник с такими сторонами не существует');
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return (this.a + this.b + this.c);
  }

  get area() {
    let p = this.perimeter / 2;
    return Number(
        (Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
  }
}


class InvalidTriangle {
  get perimeter() {
    return 'Ошибка! Треугольник не существует';
  }

  get area() {
    return 'Ошибка! Треугольник не существует';
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return new InvalidTriangle();
  }
}