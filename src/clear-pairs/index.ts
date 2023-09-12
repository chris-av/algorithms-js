export default function clearPairs(arr: number[]): "Alice" | "Bob" {
  let isAlice = false;
  let alive = true;
  while (alive) {

    for (let i = 0; i < arr.length; i++) {
      const num1 = arr[i];
      const num2 = arr[i + 1];

      // found a pair
      if (num1 === num2) {
        arr.splice(i, 2);     // remove the pairs
        isAlice = !isAlice;   // toggle the turn
        break;
      }

      // you did not find a pair
      if (i === arr.length - 1 || arr.length === 0) {
        alive = false;
        break;
      }

    }


    // there are no pairs left, finish the game
    if (arr.length === 0) {
      alive = false;
      break;
    }


  }

  return isAlice ? "Alice" : "Bob";

}
