'use strict'

function multiplyAddition(n) {
  //Var 1 первое что пришло в голову
  /*let result = 0;
  for (let i = 0; i < n + 1; i++) {
    result += i;
  }
  return result;*/

  //Var 2 recursion
  if (n === 1) return 1;
  return n + multiplyAddition(n-1);
}
