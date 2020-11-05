import { css, html, LitElement } from 'lit-element/lit-element.js';

class Statusicon extends LitElement {

	static get properties() {
		return {
			prop1: { type: String },
			state: { type: Number, attribute: 'state' },
			successMessage: { type: String, attribute: 'successmessage' },
			failureMessage: { type: String, attribute: 'failuremessage' },
			warningMessage: { type: String, attribute: 'warningmessage' }

		};
	}

	static get styles() {
		return css`
			:host {
				display: inline-block;
			}
			:host([hidden]) {
				display: none;
			}
		`;
	}

	constructor() {
		super();
		this.prop1 = 'statusicon';

	}

	render() {
		console.log(this.state);
		if (this.state == 0) {
			this.message = this.failureMessage;
		} else if (this.state == 1) {
			this.message = this.successMessage;
		} else {
			this.message = this.warningMessage;
		}
		return html`
			<h2>Hello ${this.prop1}!</h2>
			<div class="frs">
				${this.message}
			</div>
		`;
	}
}
customElements.define('d2l-labs-statusicon', Statusicon);
