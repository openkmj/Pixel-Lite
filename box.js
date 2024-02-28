const map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
const answer_map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];

const swapInScreen = (a, b) => {
  // set a visible
  // change number to map[b]
  // set b invisible
};

const render = () => {
  for (let i = 0; i < 16; i++) {
    document.getElementById(i).textContent = map[i];
  }

  for (let i = 0; ++i < 17; )
    document.body.innerHTML += `<button id=${i} onclick='handleClick(${i})'></button>`;
};

const swapInMap = (a, b) => {
  let tmp = map[a];
  map[a] = map[b];
  map[b] = tmp;
};

const move = (x) => {
  const s = map.indexOf(0);
  if (s === x - 1) {
    swapInMap(s, x - 1);
  } else if (s === x + 1) {
    swapInMap(s, x + 1);
  } else if (s === x + 4) {
    swapInMap(s, x + 4);
  } else if (s === x - 4) {
    swapInMap(s, x - 4);
  }
};

const isEnd = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (map[i][j] !== answer_map[i][j]) return false;
    }
  }
  return true;
};

const shuffle = () => {
  map.sort(() => Math.random() - 0.5);
  // and render ui
};

const handleClick = (x) => {
  move(x);
  if (isEnd()) {
    // win!
  }
};

const init = () => {};
