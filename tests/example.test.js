const puppeteer = require('puppeteer')
const expect = require('chai').expect
  
describe('My First Puppeteer Test', () => {
    it('should launch the browser', async function(){
        const browser = await puppeteer.launch({
            headless: 'new',
            slowMo: 10,
            devtools: false,
        })
        const page = await browser.newPage()
        await page.goto('https://example.com/')
        const title = await page.title('')
        const url = await page.url()
        // $ : single elements
        const text = await page.$eval('h1', element => element.textContent)
        // $$ : multiple elemetnts
        const count = await page.$$eval('p', element => element.length)
        
        expect(title).to.be.a('string', 'Example Domain')
        expect(url).to.include('example.com')
        expect(text).to.be.a('string', 'Example Domain  ')
        expect(count).to.equal(2)
        await browser.close()
    }).timeout(10000);
})
 

      