const fs = require("fs");
const app = require("./App");
const port = process.env.PORT || 8000;

const projectName = "Lab Assignment";
const authorName = "Amir Faysal";

function addWatermarkToFile(filePath, projectName, authorName) {
  const watermark = `
/*
 * Project: ${projectName}
 * Author: ${authorName}
 * Copyright (c) ${new Date().getFullYear()} ${authorName}
 * All rights reserved.
 */
`;

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const codeWithWatermark = watermark + data;

    fs.writeFile(filePath, codeWithWatermark, "utf8", (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(" Copyright successfully!");
      startServer();
    });
  });
}

function addWatermarkToConsole(code, projectName, authorName) {
  const watermark = `
/*
 * Project: ${projectName}
 * Author: ${authorName}
 * Copyright (c) ${new Date().getFullYear()} ${authorName}
 */
`;

  console.log(watermark);
}

function startServer() {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

const appFilePath = "./App.js";
addWatermarkToFile(appFilePath, projectName, authorName);
addWatermarkToConsole(app, projectName, authorName);
