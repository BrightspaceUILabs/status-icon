import { css, html, LitElement } from 'lit-element/lit-element.js';
import { icons } from './icons.js';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg';

class StatusIcon extends LitElement {

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
		if (this.state === 0) {
			this.image = icons['failure'];
			this.message = this.failureMessage;
			this.textColour = 'rgb(205, 32, 38)'; //cinnabar
		} else if (this.state === 1) {
			this.image = icons['success'];
			this.message = this.successMessage;
			this.textColour = '#46a661'; //olivine
		} else {
			this.image = icons['warning'];
			this.message = this.warningMessage;
			this.textColour = 'rgb(255, 186, 89)'; //citrine
		}

		return html`
			<div>
				${unsafeSVG(this.image)}
				<span style="color: ${this.textColour}; margin:0, 0.4em; vertical-align: middle">${this.message} </span>
			</div>
		`;
	}
}
customElements.define('d2l-labs-status-icon', StatusIcon);
