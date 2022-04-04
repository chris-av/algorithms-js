module.exports = function(index) {
  let sequence = [ 0, 1, 1 ];

  if (index === 0) return [ 0 ];
  if (index === 1) return [ 0, 1 ];
  if (index === 2) return [ 0, 1, 1 ];

  while (sequence.length < index) {
    sequence.push( sequence[sequence.length - 2] + sequence[sequence.length - 1] );
    if (sequence.length === index) break;
  }

  return sequence;

}
