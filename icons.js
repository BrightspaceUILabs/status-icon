import { val as alert } from '@brightspace-ui/core/generated/icons/tier1/alert.js';
import { val as failure } from '@brightspace-ui/core/generated/icons/tier1/close-circle.js';
import { val as success } from '@brightspace-ui/core/generated/icons/tier1/check-circle.js';

const icons = {
	'warning': alert,
	'success': success,
	'failure': failure,
};

icons['warning'] = icons['warning'].replace(/fill="#494c4e"/g, 'fill="rgb(255, 186, 89)"');
icons['success'] = icons['success'].replace(/fill="#494c4e"/g, 'fill="#46a661"');
icons['failure'] = icons['failure'].replace(/fill="#494c4e"/g, 'fill="rgb(205, 32, 38)"');

export { icons };
