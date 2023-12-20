const { beforeEach } = require('mocha')
const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('My First Puppeteer Test', () => {
	let browser
	let page

    /*
        before: run only once
    */
	before(async function () {
		browser = await puppeteer.launch({
			headless: false,
			slowMo: 10,
			devtools: false,
		})
        page = await browser.newPage()
        await page.setDefaultTimeout(10000)
		await page.setDefaultNavigationTimeout(20000)
	})

    after(async function () {
        await browser.close()
    })

    /*
        beforeEach:Runs before each test step
    */
    beforeEach(async function() {})

    /*
        afterEach: Runs after each test step
        Example: you want to reset or prepare some state before / after each those test step
    */
    afterEach(async function () {})
   
	it('should launch the browser', async function () {
		await page.goto('http://example.com/')
		await page.waitForXPath('//h1')
		const title = await page.title()
		const url = await page.url()
		const text = await page.$eval('h1', element => element.textContent)
		const count = await page.$eval('p', element => element.length)

		expect(title).to.be.a('string', 'Example Domain')
		expect(url).to.include('example.com')
		expect(text).to.be.a('string', 'Example Domain')
		// expect(count).to.equal(2)

		await page.goto('http://zero.webappsecurity.com/')
		await page.waitForSelector('#signin_button')
		await page.click('#signin_button')
		await page.waitForSelector('#signin_button', {
			hidden: true,
			timeout: 3000,
		})
		
	})
})
