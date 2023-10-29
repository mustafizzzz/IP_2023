//class definitations

class Accholder {
  constructor(accnum, name, age, balance) {
    this.accnum = accnum;
    this.name = name;
    this.age = age;
    this.balance = balance;
  }

  displayDetails() {
    console.log(`AccountNumber:${this.accnum}`);
    console.log(`Name:${this.name}`);
    console.log(`age:${this.age}`);
    console.log(`balance:${this.balance}`);
  }
}

class Claculator {
  constructor(len, bre) {
    this.len = len;
    this.bre = bre;
  }
}

class RectAre extends Claculator {
  constructor(len, bre) {
    super(len, bre);
  }

  calArea() {
    return this.bre * this.len;
  }
}


class CircleArea extends Claculator {

  constructor(rad) {
    super(rad, rad);
  }

  calArea() {
    return Math.PI * this.len * this.bre;
  }


}

class CheckNum {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
}

class CheckNeon extends CheckNum { //9^2 =81  --> 8+1 = 9 Neon
  checkNeon() {
    let square = this.num1 * this.num1
    let sumOfDigits = 0;
    while (square > 0) {
      sumOfDigits += square % 10;
      square = Math.floor(square / 10);
    }

    return sumOfDigits === this.num1;
  }


}



class CheckSpy extends CheckNum { //1124--> 1+1+2+4 ==== 1*1*2*4 Spy
  checkSpy() {
    let numString = this.num1.toString();
    let sumOfDigits = 0;
    let proOfDigits = 1;
    for (let digit of numString) {
      let digitNum = parseInt(digit);
      sumOfDigits += digitNum;
      proOfDigits *= digitNum;
    }

    return sumOfDigits === proOfDigits;
  }


}



let ch = parseInt(prompt('Enter a choice..'))

switch (ch) {
  case 1:
    let acc1 = new Accholder(1234, 'Mustafiz', 25, 150000);
    let acc2 = new Accholder(1234, 'Mustafiz', 25, 150000);
    acc1.displayDetails();
    acc2.displayDetails();
    break;

  case 2:
    let rect1 = new RectAre(10, 10);
    let circ1 = new CircleArea(5);
    // console.log(`Len: ${circ1.bre}`);
    console.log(`Area Rect: ${rect1.calArea()}`);
    console.log(`Area Circ: ${circ1.calArea()}`);
    break;

  case 3:
    let neon1 = new CheckNeon(12, 10);
    let spy2 = new CheckSpy(1124, 52);
    console.log(`Neon : ${neon1.checkNeon()} , ${neon1.num1}`);
    console.log(`Spy : ${spy2.checkSpy()}, ${spy2.num1}`);
    break;


  default:
    break;
}