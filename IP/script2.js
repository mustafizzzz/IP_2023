const ch = parseInt(prompt('Enter a choice...'));

switch (ch) {
  case 1:
    var array = [];
    let ans = 0
    for (let i = 0; i < 4; i++) {
      array[i] = parseInt(prompt(`Enter marks ${i} : `));
    }
    var avg = () => {
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        sum += array[i];

      }
      ans = sum / array.length;
      alert(`Avg: ${ans}`);
    }
    avg();
    break;

  case 2:
    let num = parseInt(prompt('Enter a number'));
    var fibArr = [0, 1];
    var fibfnc = (num) => {
      for (let i = 2; i < num; i++) {
        var nfib = fibArr[i - 1] + fibArr[i - 2];
        fibArr.push(nfib);
      }
      alert(`Series is :${fibArr}`)
    }
    fibfnc(num);
    break;

  case 3:
    let str1 = prompt('enter a name');
    str1 = str1.toLocaleLowerCase();
    // alert(str1)
    let temp = str1.split('').reverse().join('');
    var checkPal = (st1, st2) => {
      if (str1 === temp) {
        alert('Palindrome')

      } else {
        alert('not Palindrome')

      }
    }

    checkPal(str1, temp);
    break;


  default:
    break;
}