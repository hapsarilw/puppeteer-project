const { beforeEach } = require('mocha')
const puppeteer = require('puppeteer')
const expect = require('chai').expect

const { click, getText, getCount, shouldNotExist } = require('../lib/helpers')

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
		await page.setDefaultNavigationTimeout(200000)
	})

	after(async function () {
		await browser.close()
	})

	/*
        beforeEach:Runs before each test step
    */
	beforeEach(async function () {})

	/*
        afterEach: Runs after each test step
        Example: you want to reset or prepare some state before / after each those test step
    */
	afterEach(async function () {

	})

	it('should launch the browser', async function () {
		await page.goto('http://example.com/')
		await page.waitForXPath('//h1')
		const title = await page.title()
		const url = await page.url()
		const text = await getText(page, 'h1')
		const count = await getCount(page, 'p') 

		expect(title).to.be.a('string', 'Example Domain')
		expect(url).to.include('example.com')
		expect(text).to.be.a('string', 'Example Domain')
		expect(count).to.equal(2)
		

		await page.goto('http://zero.webappsecurity.com/')
		await click(page, '#signin_button')
		await page.waitForTimeout(3000)
		await shouldNotExist(page, '#sigin_button')
	})
})
