function sum(a, b) {
  [a, b].some((el) => {
    if (typeof el !== 'number') {
      throw new TypeError('если аргументы - не числа');
    }
  });

  return a + b;
}

module.exports = sum;
