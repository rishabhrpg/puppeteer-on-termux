const puppeteer = require('puppeteer');
const fs = require('fs');

screenshot('https://example.com').then(() => console.log('screenshot saved'));

async function screenshot(url) {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-gpu",
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({width: 1920, height: 1080});
  await page.goto(url, {
    timeout: 0,
    waitUntil: 'networkidle0',
  });
  const screenData = await page.screenshot({encoding: 'binary', type: 'jpeg', quality: 100});
  if (!!screenData) {
    fs.writeFileSync('screenshots/screenshot.jpg', screenData);
  } else {
    throw Error('Unable to take screenshot');
  }

  await page.close();
  await browser.close();
}
