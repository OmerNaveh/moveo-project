const fs = require("fs");
const path = require("path");
const loopFilePath = "C:\\Dev\\Cyber4s\\moveo-project\\public\\loop_files";
const resolvedPath = path.resolve(__dirname, loopFilePath);
/*
 * Writes filenames from a dir to a json file
 * Runs in a Node environment
 */
const writeFileNames = (resolvedPath) => {
  const files = fs.readdirSync(resolvedPath);
  fs.writeFileSync("fileNamesArr.json", JSON.stringify(files));
};
writeFileNames(resolvedPath);
