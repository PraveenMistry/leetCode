/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  const arr = new Array(dominoes.length)
  let c = 0
  for (let i = 0; i < dominoes.length; i++) {
    if (c > 0 && dominoes[i] === '.') {
      c--
    } else if (dominoes[i] === 'R') {
      c = dominoes.length
    } else {
      c = 0
    }
    arr[i] = c
  }
  c = 0
  for (let j = dominoes.length - 1; j >= 0; j--) {
    if (c > 0 && dominoes[j] === '.') {
      c--
    } else if (dominoes[j] === 'L') {
      c = dominoes.length
    } else {
      c = 0
    }
    arr[j] -= c
  }
  return arr.map(n => n > 0 ? 'R' : n < 0 ? 'L' : '.').join('')
}