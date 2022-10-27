//Pequeño ejemplo de web scraping con puppeteer

const puppeteer = require('puppeteer');

(async () => {
    console.log('Browser launch');
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');
    let title = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
        return h1.innerHTML;
    })
    console.log(title);
    console.log('Close browser');
    // browser.close();
    console.log('Browser closed');
})();