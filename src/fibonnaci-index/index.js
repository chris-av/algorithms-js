function fibonnaci(index) {
  if (index === 0) return 0;
  if (index === 1) return 1;
  if (index === 2) return 1;

  return fibonnaci(index -1) + fibonnaci(index - 2);
}

module.exports = fibonnaci;
