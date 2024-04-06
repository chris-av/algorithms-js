import fs from 'fs';
import path from 'path';

function getRules(): Map<string, number> {
  const filepath = path.resolve(__dirname, "rules.txt");
  const contents = fs.readFileSync(filepath);
  const text = contents.toString();
  const rules = new Map();
  for (const line of text.split("\n")) {
    const [ key, value ] = line.split(",");
    rules.set(key, parseInt(value));
  }
  return rules;
}


export default function romanToInt(roman: string): number {
  const rules = getRules();
  const numerals = roman.split("");
  let total = rules.get(numerals[0]) as number;
  for (let i = 1; i < numerals.length; i++) {
    const numeral = numerals[i];
    const numeral_prev = numerals[i-1];
    const curr = rules.get(numeral) as number;
    const prev = rules.get(numeral_prev) as number;
    if (
      ((numeral === "V" || numeral === "X") && numeral_prev === "I") ||
      ((numeral === "L" || numeral === "C") && numeral_prev === "X") ||
      ((numeral === "D" || numeral === "M") && numeral_prev === "C")
    ) {
      total -= prev;
      total += curr - prev;
    } else {
      total += curr;
    }
  }
  return total;
}
