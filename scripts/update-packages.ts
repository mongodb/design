import { spawnSync } from 'child_process';
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
      let { stdout, stderr } = spawnSync('yarn', ['upgrade', `${name}@^${version}`])
      if (stderr) {
        console.error(stderr)
      } else if (stdout) {
        console.log(
          chalk.green.bold(
            `\n✅ Upgraded ${name} to ${version}.`
          )
        );
      }
    })
  }

  let gitAddCmd = spawnSync('git', ['add', '.'])
  if (gitAddCmd.stderr) {
    console.error(gitAddCmd.stderr)
  } else if (gitAddCmd.stdout) {
    console.log(
      chalk.green.bold(
        `\n✅ Added updated package versions to git.`,
      )
    );
  }

  let gitCommitCmd = spawnSync('git', ['commit', '-m', `${"Updating released @leafygreen-ui package versions"}`])
  if (gitCommitCmd.stderr) {
    console.error(gitCommitCmd.stderr)
  } else if (gitCommitCmd.stdout) {
    console.log(
      chalk.green.bold(
        `\n✅ Committed updated package versions to git.`,
      )
    );
  }

} catch (error) {
  console.error(error)
}

export { }