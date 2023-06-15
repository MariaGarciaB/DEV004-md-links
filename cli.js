#!/usr/bin/env node
import { argv } from "node:process";
import { mdLinks } from "./index.js";
import chalk from 'chalk';

export const optionsCli = () => {
  const isValidate = argv.includes("--validate");
  const isStats = argv.includes("--stats");
  const isFirstOption =
    process.argv[3] === "--stats" || process.argv[3] === "--validate";
  const isSecondOption =
    process.argv[4] === "--validate" || process.argv[4] === "--stats";
  const isBreakLinks = isFirstOption && isSecondOption;
  const ruta = argv[2];
  const options = { validate: isValidate, stats: isStats, combo: isBreakLinks };
  mdLinks(ruta, options).then((res) => {
    const totalLinks = res.length;
    const uniqueLinks = [...new Set(res.map((link) => link.href))].length;
    const breakLinks = res.filter((res) => res.status >= 400).length;
    if (isValidate && !isStats) {
      console.log(res);
    } else if (isStats && !isValidate) {
      console.log(`${chalk.yellow("Total: ") + chalk.yellow(totalLinks)}\n${chalk.green("Unique: ") + chalk.green(uniqueLinks)}`);
    } else if (options.combo) {
      console.log(
        `${chalk.yellow("Total: ") + chalk.yellow(totalLinks)}\n${chalk.green("Unique: ") + chalk.green(uniqueLinks)}\n${
          chalk.red("Broken: ") + chalk.red(breakLinks)
        }`
      );
    }else
    {
      console.log(
        `${"Opciones para revisar links y estadísticas de archivos .md:"}\n${
          "--validate \t \t Conocer links"}\n${"--stats \t \t Total de links y unicos"}\n${
          "--validate --stats \t Links archivo, links únicos y links rotos"}\n${
            "--stats --validate \t Links archivo, links únicos y links rotos"}`
      );
    }
  });
};
optionsCli();

