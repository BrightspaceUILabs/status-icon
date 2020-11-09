import { css, html, LitElement, svg } from 'lit-element/lit-element.js';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg';
import { icons } from './icons.js';

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
		if (this.state == 0) {
			this.image = icons["failure"];
			this.message = this.failureMessage;
			this.textColour = 'rgb(205, 32, 38)'; //cinnabar
		} else if (this.state == 1) {
			this.image = icons["success"];
			this.message = this.successMessage;
			this.textColour = '#46a661'; //olivine
		} else {
			this.image = icons["warning"];
			this.message = this.warningMessage;
			this.textColour = 'rgb(255, 186, 89)'; //citrine
		}


		return html`
				${unsafeSVG(this.image)}
				<span style="color: ${this.textColour}">${this.message} </span>
		`;
	}
}
customElements.define('d2l-labs-statusicon', Statusicon);
