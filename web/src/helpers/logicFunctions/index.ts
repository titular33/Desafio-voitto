export const getNoFibonacciNumber = (n: number): number => {
  let gabarito= [];
    if (n === 0) {
      throw new Error('Não é possível obter o número');
    }
    else{
      let fibonacci =[];
      let a = 0, b = 1, f = 1;
      for(let i = 0; i <= n + 10; i++) {
          f = a + b;
          a = b;
          b = f;
          fibonacci.push (f);
      }
      for(let j = 0; j <= n + 15; j++) 
      {
        if(!fibonacci.includes(j)) {
        gabarito.push (j);
    }
  }
  return gabarito[n];
}
}
