import { cards } from "./cards";

function click() {
  let randomArr = [];
  while (randomArr.length < 16) {
    const num = Math.floor(Math.random() * 16);
    const item = cards[num];
    if (randomArr.indexOf(item) < 0) {
      randomArr.push(item);
    }
  }
  return randomArr;
}

export { click };
