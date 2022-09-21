const updatesArray = process.argv[2] ? JSON.parse(process.argv[2]) : [];

console.log(`${updatesArray.length} packages were updated.`);