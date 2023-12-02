import { readdirSync } from "fs";
import { SingleColumnMenuResponse } from "terminal-kit/Terminal";

import { terminal } from "terminal-kit";

export interface Solver {
  init: () => void;
  solvePart1: () => string;
  solvePart2: () => string;
  [others: string]: unknown;
}

const solvers = readdirSync("./solver");

if (process.argv[2] == "--today") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const solver: Solver = require(`./solver/${solvers.pop()}`).default;

  solver.init();

  terminal(`Part 1: \n`);
  terminal(solver.solvePart1());
  terminal(`\n`);

  terminal(`Part 2: \n`);
  terminal(solver.solvePart2());
  terminal(`\n`);
  terminal.processExit(0);
} else {
  terminal("Choose a Solver: ");

  terminal.singleColumnMenu(
    solvers,
    (err, response: SingleColumnMenuResponse) => {
      if (err) {
        console.error(err);
        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const solver: Solver = require(
        `./solver/${response.selectedText}`,
      ).default;

      terminal(`Initializing ${response.selectedText}...\n`);
      solver.init();

      terminal(`Part 1: \n`);
      terminal(solver.solvePart1());
      terminal(`\n`);

      terminal(`Part 2: \n`);
      terminal(solver.solvePart2());
      terminal(`\n`);
      terminal.processExit(0);
    },
  );
}
