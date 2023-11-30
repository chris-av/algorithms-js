// given an array of full names, trim spaces, and enforce title case
// [ "bob person", " sally Meow " ] --> [ "Bob Person", "Sally Meow" ]
export default function fixnames(names: string[]) {
  return names.map(name => {
    return name.trim().split(" ").map(part => {
      let partArr = part.split("");
      let firstLetter = partArr.shift();
      firstLetter = firstLetter?.toUpperCase();
      partArr = partArr.map(p => p.toLowerCase());
      const partStr = partArr.join("");
      return [firstLetter, partStr].join("");
    }).join(" ");
  });
}
