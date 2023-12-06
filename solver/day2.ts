import { Solver } from "../index";
import { readFileSync } from "fs";

let input: string[];

const solver: Solver = {
  init: () => {
    input = readFileSync("./input/day2.txt", "utf-8").split(/\r?\n/);
  },
  solvePart1: () => {
    const maxRed = 12;
    const maxGreen = 13;
    const maxBlue = 14;
    let sum = 0;

    input.forEach((line) => {
      let id = parseInt(line.slice(5, line.indexOf(":")));

      const rounds = line.slice(line.indexOf(": ") + 2).split("; ");
      rounds.forEach((round) => {
        const showings = round.split(", ");
        showings.forEach((show) => {
          const parts = show.split(" ");
          const count = parseInt(parts[0]);
          const color = parts[1];

          if (color == "red") {
            if (count > maxRed) {
              id = 0;
            }
          } else if (color == "green") {
            if (count > maxGreen) {
              id = 0;
            }
          } else if (color == "blue") {
            if (count > maxBlue) {
              id = 0;
            }
          }
        });
      });
      sum += id;
    });

    return sum.toString();
  },
  solvePart2: () => {

    let sum = 0;

    input.forEach((line) => {
      let maxRed = 0;
      let maxGreen = 0;
      let maxBlue = 0;

      const rounds = line.slice(line.indexOf(": ") + 2).split("; ");
      rounds.forEach((round) => {
        const showings = round.split(", ");
        showings.forEach((show) => {
          const parts = show.split(" ");
          const count = parseInt(parts[0]);
          const color = parts[1];

          if (color == "red") {
            if (count > maxRed) {
              maxRed = count;
            }
          } else if (color == "green") {
            if (count > maxGreen) {
              maxGreen = count;
            }
          } else if (color == "blue") {
            if (count > maxBlue) {
              maxBlue = count;
            }
          }
        });
      });
      sum += maxRed * maxGreen * maxBlue;
    });

    return sum.toString();
  },
};

export default solver;
