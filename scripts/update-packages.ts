import { spawn } from 'child_process';
import chalk from 'chalk';

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

try {
  const updatesArray = process.argv[2] ? JSON.parse(process.argv[2]) : [];

  if (exists(updatesArray) && isValidUpdatesArray(updatesArray)) {
    updatesArray.forEach(({ name, version }: ComponentUpdateObject) => {
      let cmd = spawn('yarn', ['upgrade', `${name}@^${version}`])
      cmd.on('close', code => {
        console.log(
          code === 0
            ? chalk.green.bold(
              `\n✅ Upgraded ${name} to ${version}.`,
            )
            : chalk.red.bold(`\nExit code ${code}\n`),
        );
      })
    })
  }

  let gitAddCmd = spawn('git', ['add', '.'])
  gitAddCmd.on('close', code => {
    console.log(
      code === 0
        ? chalk.green.bold(
          `\n✅ Added updated package versions to git.`,
        )
        : chalk.red.bold(`\nExit code ${code}\n`),
    );
  })

  let gitCommitCmd = spawn('git', ['commit', '-m', `${"Updating released @leafygreen-ui package versions"}`])
  gitCommitCmd.on('close', code => {
    console.log(
      code === 0
        ? chalk.green.bold(
          `\n✅ Committed updated package versions to git.`,
        )
        : chalk.red.bold(`\nExit code ${code}\n`),
    );
  })

} catch (error) {
  console.error(error)
}

export { }