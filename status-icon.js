import '@brightspace-ui/core/components/colors/colors.js';
import '@brightspace-ui/core/components/icons/icon.js';
import { css, html, LitElement } from 'lit-element/lit-element.js';
import { RtlMixin } from '@brightspace-ui/core/mixins/rtl-mixin.js';

function getIcon(state, mode) {
	switch (mode) {
		case 0:// success or fail state
			switch (state) {
				case 'success':
				case '1':
				case 1:
					return 'tier1:check-circle';
				default:
					return 'tier1:alert';
			}
		case 1: //multi state
			switch (state) {
				case 'success':
				case '1':
				case 1:
					return 'tier1:check-circle';
				case 'warning':
				case '2':
				case 2:
					return 'tier1:alert';
				default:
					return 'tier1:close-circle';
			}
		default:
			return 'tier1:close-circle';
	}
}

function getMessage(state, mode, success, failure, warning) {
	switch (mode) {
		case 0:
			switch (state) {
				case 'success':
				case '1':
				case 1:
					return success;
				default:
					return failure;
			}
		case 1:
			switch (state) {
				case 'success':
				case '1':
				case 1:
					return success;
				case 'warning':
				case '2':
				case 2:
					return warning;
				default:
					return failure;
			}
	}
}

class StatusIcon extends RtlMixin(LitElement) {

	static get properties() {
		return {
			state: { type: String, reflect: true, attribute: 'state' },
			mode: { type: Number, reflect: true, attribute: 'mode' },
			successMessage: { type: String, reflect: true, attribute: 'success-message' },
			failureMessage: { type: String, reflect: true, attribute: 'failure-message' },
			warningMessage: { type: String, reflect: true, attribute: 'warning-message' }
		};
	}

	static get styles() {
		return css`
			:host {
				align-items: center;
				display: inline-flex;
			}
			:host([hidden]) {
				display: none;
			}
			:host,
			d2l-icon {
				color: var(--d2l-color-cinnabar);
			}
			:host([state="warning"]),
			:host([state="2"]),
			:host([state="warning"]) d2l-icon,
			:host([state="2"]) d2l-icon {
				color: var(--d2l-color-citrine);
			}
			:host([state="success"]),
			:host([state="1"]),
			:host([state="success"]) d2l-icon,
			:host([state="1"]) d2l-icon {
				color: var(--d2l-color-olivine-minus-2);
			}
			span {
				margin-left: 0.1em;
			}
			:host([dir="rtl"]) span {
				margin-left: 0;
				margin-right: 0.1em;
			}
		`;
	}

	constructor() {
		super();
		this.state = 'failure';
		this.mode = 0;
	}

	render() {
		const icon = getIcon(this.state, this.mode);
		const message = getMessage(this.state, this.mode, this.successMessage, this.failureMessage, this.warningMessage);
		return html`
			<div>
				<d2l-icon icon="${icon}"></d2l-icon>
				<span style="vertical-align: middle" >${message} </span>
			</div>
		`;
	}

}
customElements.define('d2l-labs-status-icon', StatusIcon);
