import puppeteer from 'puppeteer';
import { VisualDiff } from '@brightspace-ui/visual-diff';

describe('d2l-labs-status-icon', () => {

	const visualDiff = new VisualDiff('status-icon', import.meta.url);

	let browser, page;

	before(async() => {
		browser = await puppeteer.launch();
		page = await visualDiff.createPage(browser);
		await page.setViewport({ width: 800, height: 800, deviceScaleFactor: 2 });
		await page.goto(`${visualDiff.getBaseUrl()}/test/status-icon.visual-diff.html`, { waitUntil: ['networkidle0', 'load'] });
		await page.bringToFront();
	});

	beforeEach(async() => {
		await visualDiff.resetFocus(page);
	});

	after(async() => await browser.close());

	['failure', 'warning', 'success'].forEach((state) => {
		it(state, async function() {
			const rect = await visualDiff.getRect(page, `d2l-labs-status-icon[state="${state}"]`);
			await visualDiff.screenshotAndCompare(page, this.test.fullTitle(), { clip: rect });
		});
	});

});
