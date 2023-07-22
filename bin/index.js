#!/usr/bin/env node

import program from 'commander';
import pageLoader from '../index.js';

program.version('1.0.0')
  .option('-o, --output [path]', 'output path', process.cwd())
  .option('-b, --progressBar [name]', 'progress bar name: default | silent', 'default')
  .arguments('<link>')
  .action((link) => pageLoader(link, program.output, program.progressBar)
    .then(({ filename }) => console.log(`Page was loaded to ${filename}`))
    .catch((err) => {
      console.error(err.toString());
      process.exit(1);
    }))
  .parse(process.argv);
