const puppeteer = require('puppeteer')
  
describe('My First Puppeteer Test', () => {
    it('should launch the browser', async function(){
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 10,
            devtools: false,
        })
        const page = await browser.newPage()
        await page.goto('https://devexpress.github.io/testcafe/example/')
        const title = await page.title('')
        const url = await page.url()

        console.log('TITLE: ' + title )
        console.log('URL:' + url)
        await browser.close()
    }).timeout(10000);
})


      