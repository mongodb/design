import fs from "fs";
import { execSync } from "child_process";

// Read the package.json file
fs.readFile("package.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading package.json:", err);
    return;
  }

  try {
    const packageJson = JSON.parse(data);
    const dependencies = packageJson.dependencies || {};
    const devDependencies = packageJson.devDependencies || {};
    const leafyGreenPackages = Object.keys(dependencies)
      .concat(Object.keys(devDependencies))
      .filter((pkg) => pkg.startsWith("@leafygreen-ui"));

    leafyGreenPackages.forEach((pkg) => {
      console.log(`Updating ${pkg}...`);
      execSync(`npm install ${pkg}@latest`, { stdio: "inherit" });
    });
  } catch (e) {
    console.error("Error updating packages:", e);
  }
});
