const puppeteer = require('puppeteer')

describe('Device Emulation', () => {
	let browser
	let page

	before(async function () {
        //this.enableTimeouts(false)
		browser = await puppeteer.launch({
			headless: false,
			slowMo: 10,
			devtools: false,
		})
        page = await browser.newPage()
        await page.setDefaultTimeout(10000)
        await page.setDefaultNavigationTimeout(20000)
	})

    after(async function(){
        await browser.close()
    })

    it('Dekstop Device Test', async function(){
        await page.setViewport({width: 1650, height: 1050, })
        await page.goto('https://www.example.com')
        await page.waitForTimeout(5000)
    })

    it('Tablet Device Test', async function(){
        const tablet = puppeteer.KnownDevices['iPad landscape']
        await page.emulate(tablet) 
        await page.goto('https://www.example.com')
        await page.waitForTimeout(5000)
    })

    it('Mobile Device Test', async function(){
        const mobile = puppeteer.KnownDevices['iPhone X']
        await page.emulate(mobile)
        await page.goto('https://www.example.com')
        await page.waitForTimeout(5000)
    })
})
