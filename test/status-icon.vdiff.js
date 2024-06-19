import { expect, fixture, html } from '@brightspace-ui/testing';
import '../status-icon.js';

describe('d2l-labs-status-icon', () => {

	['failure', 'warning', 'success'].forEach((state) => {
		it(state, async() => {
			const elem = await fixture(html`<d2l-labs-status-icon state=${state}></d2l-labs-status-icon>`);
			await expect(elem).to.be.golden();
		});
	});
});
