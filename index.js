function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const poop = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < poop.length; i++) {
    poop[i].innerHTML = parseInt(poop[i].innerHTML) + n;
  }
}

function deepestChild() {

  const node = document.getElementById('grand-node').querySelectorAll('div')
  return node[node.length - 1]
}
