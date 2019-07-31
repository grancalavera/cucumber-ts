import { version } from "../../package.json";
import { setWorldConstructor } from "cucumber";
import program from "commander";

program
  .version(version)
  .parse(process.argv)
  .option(
    "-F, --simulate-failure",
    "Simulates a failure on the `incrementBy` operation"
  )
  .option("--test-help", "Displays help for custom test automation options");

if (program.ctmsHelp) {
  program.outputHelp();
  process.exit(0);
}

class CustomWorld {
  variable: number;

  constructor() {
    this.variable = 0;
  }

  setTo(number: number) {
    this.variable = number;
  }

  incrementBy(number: number) {
    this.variable += number;
    if (program.simulateFailure) {
      this.variable = this.variable * 2;
    }
  }
}

setWorldConstructor(CustomWorld);
