//options

console.log(
  `1.To find greatest among three numbers.
2.To display even numbers less than 20.
3.To calculate area of a triangle.
4.To find if the entered year is a leap year or not
5.To display a table of number n.
6.To find the entered number is a perfect number or not.
Choose any one`
);


let ch = Number(prompt("Enter Your choice.."));

switch (ch) {
  case 1:
    var a = 0, b = 0, c = 0;
    a = Number(prompt(`Enter a number`));
    b = Number(prompt(`Enter a number`));
    c = Number(prompt(`Enter a number`));

    let largest = a > b ? a > c ? a : b : c;
    alert(largest)
    break;

  case 2:
    alert('hogaya')
    break;

  case 3:
    var a = 0, b = 0;
    a = Number(prompt(`Enter a number`));
    b = Number(prompt(`Enter a number`));
    alert(`Area is ${0.5 * a * b}`)
    break;

  case 4:
    let year = parseInt(prompt('Enter Year'));
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      alert('Leap')
    } else {
      alert('Not Leap')
    }
    break;

  case 5:
    let num = parseInt(prompt('Enter a table number'))
    let counter = 1;
    let interval = setInterval(() => {
      console.log(`${num} X ${counter} = ${num * counter}`);
      counter++;
      if (counter > 10) {
        clearInterval(interval)
      }
    }, 1000);
    break;

  case 6:
    let perfect = parseInt(prompt('Enter a Number'));
    let sum = 0;
    for (let i = 0; i < perfect; i++) {
      if (perfect % i === 0) {
        sum += i;
      }
    }
    alert(`You:${perfect} and sum:${sum}`)
    break;


  default:
    break;
}