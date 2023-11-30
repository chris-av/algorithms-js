import fixnames from './';

describe("fix names", () => {
  test("correctly formatted string should return same string", () => {
    const arr = [ "Firstname Lastname", "Bob Person" ];
    expect(fixnames(arr)).toEqual(arr)
  });
  test("trim whitespaces on the end", () => {
    const arr = [ " chris peterson  ", " l hanks " ];
    expect(fixnames(arr)).toEqual(["Chris Peterson", "L Hanks"]);
  });
  test("remove capitalizations in the middle of the word", () => {
    const arr = [ "jAmEs mChEnRy", "tOnY STArk" ];
    expect(fixnames(arr)).toEqual(["James Mchenry", "Tony Stark"]);
  });
});


