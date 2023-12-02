import { Solver } from "../index";
import { readFileSync } from "fs";

let input: string[];

const solver: Solver = {
  init: () => {
    input = readFileSync("./input/day1.txt", "utf-8").split("\n");
  },
  solvePart1: () => {
    let sum = 0;
    input.forEach((line) => {
      let firstNum: number | undefined = undefined;
      let secondNum: number | undefined = undefined;

      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        const num = parseInt(char);
        if (!isNaN(num)) {
          if (firstNum == undefined) {
            firstNum = num;
          }
          secondNum = num;
        }
      }
      sum += (firstNum ?? 0) * 10 + (secondNum ?? 0);
    });

    return sum.toString();
  },
  solvePart2: () => {
    let sum = 0;
    let firstNum: number | undefined = undefined;
    let secondNum: number | undefined = undefined;
    let numberLine: string = "";
    const numWords = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    };

    input.forEach((line) => {
      firstNum = undefined;
      secondNum = undefined;
      numberLine = "";

      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (isNaN(parseInt(char))) {
          Object.entries(numWords).forEach(([word, num]) => {
            const substr = line.slice(i, i + word.length);
            if (substr == word) {
              numberLine += num.toString();
            }
          });
        } else {
          numberLine += char;
        }
      }

      for (let i = 0; i < numberLine.length; i++) {
        const char = numberLine[i];
        const num = parseInt(char);
        if (!isNaN(num)) {
          if (firstNum == undefined) {
            firstNum = num;
          }
          secondNum = num;
        }
      }
      sum += (firstNum ?? 0) * 10 + (secondNum ?? 0);
    });

    return sum.toString();
  },
};

export default solver;
