const puppeteer = require('puppeteer')
  
describe('My First Puppeteer Test', () => {
    it('should launch the browser', async function(){
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 10,
            devtools: false,
        })
        const page = await browser.newPage()
        await page.goto('https://example.com/')
        const title = await page.title('')
        const url = await page.url()
        const text = await page.$eval('h1', element => element.textContent)
        console.log('Text in he H1: ' + text)
        await browser.close()
    }).timeout(10000);
})


      