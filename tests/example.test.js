const puppeteer = require('puppeteer')


(async () => {
    try {
        const browser = await puppeteer.launch({headless: 'new'});
        const page = await broswer.newPage()
        await page.goto('http://example.com/')
        await page.waitForSelector('h1')
        await browser.close()
    } catch (error) {
      console.error(error);
      console.error(`can not launch`);
      process.exit();
    }
    console.log(`browser=${browser}`);
  
    var cnt_pages = (await browser.pages()).length;
    console.log(`cnt_pages ${cnt_pages}`);
  })();
  
describe('My First Puppeteer Test', () => {
    it('should launch the browser', async function(){
        const browser = await puppeteer.launch({headless: 'new'});
        const page = await broswer.newPage()
        await page.goto('http://example.com/')
        await page.waitForSelector('h1')
        await browser.close()
    })

})