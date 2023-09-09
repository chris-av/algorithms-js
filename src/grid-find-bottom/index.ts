// create a function that is given an array of array that represents a square
// values are either 0 or 1, where 0 represents an opening and 1 represents a closure
// given an array, determine if there is a path that goes from the top of the box to the bottom
type CoordArr = Array<Array<number>>


export default function(arr: CoordArr) {

  function calculateAdjacent(coord: number[]) {
    return [
      [ coord[0] + 1, coord[1] ],
      [ coord[0], coord[1] +1 ],
      [ coord[0] - 1, coord[1] ],
      [ coord[0], coord[1] -1 ]
    ].filter(i => i[0] >= 0 && i[1] >= 0);
  }

  let alive = true;
  let end = arr.length;
  let row = 0;
  let col = arr[0].indexOf(0);
  let prev = [ row, col ];

  // if there is no opening at the top of the box
  // you are already  dead
  if (col === -1) return false;

  while (alive && row < end) {
    
    // you reach the last row and you have not surpassed the column limit
    // if you arrive here, you made it out alive!
    if (row === end-1 && col <= end-1) return true;

    // if you surpass teh column limit, you likely did not make it out alive
    if (col === end) return false;

    let choices = calculateAdjacent([ row, col ]);
    let validChoices = choices.filter(i => {
      // take only the choices there is a zero, not a one
      return arr[ i[0] ][ i[1] ] === 0;
    }).filter(i => {
      // make sure to exclude the valid choice
      // that has your current position
      let test1 = i[0] !== prev[0];
      let test2 = i[1] !== prev[1];
      return test1 || test2;
    });

    // if there is no where else to go, you are dead
    if (validChoices.length === 0) return false;

    prev = [ row, col ];
    row = validChoices[0][0];
    col = validChoices[0][1];

    // console.log({ current: [ row, col ], prev, choices, validChoices });
    // console.log('');

  }

  return alive;

}
