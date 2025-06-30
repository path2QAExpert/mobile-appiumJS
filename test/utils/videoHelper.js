
const fs = require('fs');
const path = require('path');
const { addAttachment } = require('@wdio/allure-reporter').default;
const config = require('../config');

function ensureDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

async function handleAfterEach(testTitle, driver) {
    const name = testTitle.replace(/\s+/g, '_');

    if (['screenshot', 'both'].includes(config.captureMode)) {
        const screenshot = await driver.takeScreenshot();
        addAttachment(`${name}_screenshot`, Buffer.from(screenshot, 'base64'), 'image/png');
        const screenshotPath = path.join(config.screenshotDir, `${name}.png`);
        fs.writeFileSync(screenshotPath, screenshot, 'base64');
    }

    if (['video', 'both'].includes(config.captureMode)) {
        const video = await driver.stopRecordingScreen();
        const buffer = Buffer.from(video, 'base64');
        addAttachment(`${name}_video`, buffer, 'video/mp4');
        const videoPath = path.join(config.videoDir, `${name}.mp4`);
        fs.writeFileSync(videoPath, buffer);
    }
}

async function handleBeforeEach(driver) {
    if (['video', 'both'].includes(config.captureMode)) {
        await driver.startRecordingScreen();
    }
}

function prepareDirectories() {
    ensureDir(config.videoDir);
    ensureDir(config.screenshotDir);
}

module.exports = {
    handleAfterEach,
    handleBeforeEach,
    prepareDirectories
};
