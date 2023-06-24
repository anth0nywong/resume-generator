const { app, BrowserWindow, Notification, ipcMain } = require("electron");
const { generator, savedPath } = require("./generator");
const path = require("path");
const exec = require("child_process").exec;

let win;
let progressInterval;

function showNotification(data, filePath) {
  console.log("show Notification");
  endProgressBar();
  const popOut = new Notification({
    title: "Generation Finished",
    body: "Your file is saved at " + filePath,
  });
  console.log(filePath);
  popOut.on("click", () => {
    console.log("Notification is clicked");
    exec(' "' + filePath + '"');
  });
  exec(' "' + filePath + '"');
  popOut.show();
}

// Create window when the app is turned on, and load html for display
const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: true,
    webPreferences: {
      enableRemoteModule: false, // turn off remote
      preload: path.join(__dirname, "preload.js"), // use a preload script
    },
  });

  win.loadFile("index.html");
};

const startProgressBar = () => {
  clearInterval(progressInterval);
  const INCREMENT = 0.05;
  const INTERVAL_DELAY = 100; // ms

  let c = 0;
  progressInterval = setInterval(() => {
    // update progress bar to next value
    // values between 0 and 1 will show progress, >1 will show indeterminate or stick at 100%
    win.setProgressBar(c);

    // increment or reset progress bar
    if (c < 2) {
      c += INCREMENT;
    } else {
      c = -INCREMENT * 5; // reset to a bit less than 0 to show reset state
    }
  }, INTERVAL_DELAY);
};

const endProgressBar = () => {
  clearInterval(progressInterval);
  win.setProgressBar(1);
};

app.whenReady().then(createWindow);

ipcMain.on("toMain", async (event, args) => {
  startProgressBar();
  let today = new Date().toJSON();
  today = today.replaceAll(":", "-");
  console.log(today);
  let currentDateTime = today.slice(0, 10) + "-" + today.slice(11, 19);

  console.log(currentDateTime); // "2022-06-17"
  const path =
    __dirname +
    "/output/" +
    args.title.name +
    "_resume_" +
    currentDateTime +
    ".pdf";
  await generator(args, path, (err) => {
    if (err) {
      console.log(err);
    }
    showNotification(args, path);
  });
});

app.on("before-quit", () => {
  clearInterval(progressInterval);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
