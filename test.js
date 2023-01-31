const puppeteer = require('puppeteer');

console.log('Taking screenshot');
const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/usr/bin/google-chrome',
    args: [
        "--no-sandbox",
        "--disable-gpu",
    ]
});
const page = await browser.newPage();
await page.goto('https://www.google.com');
const imageBuffer = await page.screenshot();
await browser.close();

console.log('Screenshot taken');
