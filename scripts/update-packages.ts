/* eslint-disable no-console */
import chalk from 'chalk';
import { spawnSync } from 'child_process';
import { Command } from 'commander';

import PkgJson from '../package.json';

interface ComponentUpdateObject {
  name: string;
  version: string;
}

const isComponentUpdateObject = (obj: any): obj is ComponentUpdateObject =>
  typeof obj === 'object' &&
  Object.prototype.hasOwnProperty.call(obj, 'name') &&
  Object.prototype.hasOwnProperty.call(obj, 'version');
const isValidUpdatesArray = (arr: any): arr is Array<ComponentUpdateObject> =>
  Array.isArray(arr) && arr.every(isComponentUpdateObject);

function exists(arg?: string | Array<any>) {
  return arg !== undefined && arg.length > 0;
}

const cli = new Command('update-packages')
  .arguments('{ "packages": [updatesArray]')
  .option('-c, --commit', 'commit upgrades to git', false)
  .option('-v, --verbose', 'List all package updates', false)
  .parse(process.argv);

const { commit, verbose } = cli.opts();

const updatesArray: Array<ComponentUpdateObject> = cli.args[0]
  ? JSON.parse(cli.args[0]).packages
  : [];
let updateCommands: Array<string>;

if (exists(updatesArray) && isValidUpdatesArray(updatesArray)) {
  updateCommands = updatesArray.map(
    ({ name, version }: ComponentUpdateObject) => `${name}@^${version}`,
  );
  console.log(chalk.green(`Upgrading ${updateCommands.length} packages`));
} else {
  const allLGPkgs = Object.keys(PkgJson.dependencies).filter(pkg =>
    pkg.startsWith('@leafygreen-ui'),
  );
  updateCommands = allLGPkgs.map(pkg => `${pkg}@latest`);
  console.log(chalk.green('Upgrading all leafygreen packages'));
}

if (verbose) {
  updateCommands.forEach(cmd => console.log(chalk.bold(`\t${cmd}`)));
}

spawnSync('yarn', ['upgrade', ...updateCommands], { stdio: 'inherit' });

if (commit) {
  const gitAddCmd = spawnSync('git', ['add', '.'], { stdio: 'inherit' });

  if (gitAddCmd.error) {
    console.error(gitAddCmd.error);
  } else if (gitAddCmd.stdout) {
    console.log(
      chalk.green.bold('\n✅ Added updated package versions to git.'),
    );
  }

  const gitCommitCmd = spawnSync(
    'git',
    ['commit', '-m', `${'Updating released @leafygreen-ui package versions'}`],
    { stdio: 'inherit' },
  );

  if (gitCommitCmd.error) {
    console.error(gitCommitCmd.error);
  } else if (gitCommitCmd.stdout) {
    console.log(
      chalk.green.bold('\n✅ Committed updated package versions to git.'),
    );
  }
}
