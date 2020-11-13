import '@brightspace-ui/core/components/colors/colors.js';
import '@brightspace-ui/core/components/icons/icon.js';
import { css, html, LitElement } from 'lit-element/lit-element.js';
import { RtlMixin } from '@brightspace-ui/core/mixins/rtl-mixin.js';

function getIcon(state) {
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
}

function getMessage(state, success, failure, warning) {
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

class StatusIcon extends RtlMixin(LitElement) {

	static get properties() {
		return {
			state: { type: String, reflect: true },
			successMessage: { type: String, reflect: true },
			failureMessage: { type: String, reflect: true },
			warningMessage: { type: String, reflect: true }
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
			:host([state="warning"],[state="2"]),
			:host([state="warning"],[state="2"]) d2l-icon {
				color: var(--d2l-color-citrine);
			}
			:host([state="success"],[state="1"]),
			:host([state="success"],[state="1"]) d2l-icon {
				color: var(--d2l-color-olivine-minus-2);
			}
			span {
				margin-left: 0.4em;
			}
			:host([dir="rtl"]) span {
				margin-left: 0;
				margin-right: 0.4em;
			}
		`;
	}

	constructor() {
		super();
		this.state = 'failure';
	}

	render() {
		const icon = getIcon(this.state);
		const message = getMessage(this.state, this.successMessage, this.failureMessage, this.warningMessage);
		return html`
			<div>
				<d2l-icon icon="${icon}"></d2l-icon>
				<span style="vertical-align: middle" >${message} </span>
			</div>
		`;
	}

}
customElements.define('d2l-labs-status-icon', StatusIcon);
