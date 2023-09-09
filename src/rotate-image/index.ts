// given a two dimensional array, rotate it
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [6, 9, 3],
// ]

type RotationDirection = "right" | "left";

export default function(image: Array<number[]>, rotation: RotationDirection) {
  let newImage = [];
  if (rotation === 'right') {

    for (let i = 0; i < image.length; i++) {
      let tmparr = [];
      for (let j = 0; j < image.length; j++) {
        tmparr.push( image[image.length - j - 1][i] )
      }
      newImage.push( tmparr );
    }

  } else if (rotation === 'left') {

    for (let i = 0; i < image.length; i++) {
      let tmparr = [];
      for (let j = 0; j < image.length; j++) {
        tmparr.push( image[j][image.length - i - 1] )
      }
      newImage.push( tmparr );
    }

  }
  return newImage;
}
