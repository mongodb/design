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

const isJson = (val: any): boolean => {
  try {
    JSON.parse(val);
    return true;
  } catch (error) {
    return false;
  }
};

const cli = new Command('upgrade-packages')
  .arguments('[...updatesArray]')
  .option('-c, --commit', 'commit upgrades to git', false)
  .option('-v, --verbose', 'List all package updates', false)
  .option('-t, --tag <tag>', 'Install a specific tag', 'latest')
  .parse(process.argv);

const {
  commit,
  verbose,
  tag,
}: {
  commit: boolean;
  verbose: boolean;
  tag: string;
} = cli.opts();

const updatesArray = isJson(cli.args[0]) ? JSON.parse(cli.args[0]) : [];
let updateCommands: Array<string>;

if (exists(updatesArray) && isValidUpdatesArray(updatesArray)) {
  updateCommands = updatesArray.map(
    ({ name, version }: ComponentUpdateObject) => `${name}@^${version}`,
  );
  console.log(chalk.green(`Updating ${updateCommands.length} packages`));
} else {
  const allLGPkgs = Object.keys(PkgJson.dependencies).filter(pkg =>
    pkg.startsWith('@leafygreen-ui'),
  );
  updateCommands = allLGPkgs.map(pkg => `${pkg}@${tag}`);
  console.log(chalk.green(`Updating all leafygreen packages with tag @${tag}`));
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
