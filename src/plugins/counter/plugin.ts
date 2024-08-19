import TomSelect from '../../tom-select';
import { COptions } from './types';

export default function (this: TomSelect, userOptions: COptions) {
	this.require('checkbox_options');
	const self = this;

	self.settings.shouldOpen = true;
	let oldPlaceholder = self.settings.placeholder;

	const options = Object.assign({
		placeholderText: '1 option selected|%d options selected'
	}, userOptions);

	self.hook('before', 'setup', () => {
		self.focus_node = self.control;
		self.settings.placeholder = getPlaceholder(self.items.length);
	});

	self.on('initialize', () => {
		self.settings.placeholder = getPlaceholder(self.items.length);
		self.inputState();
	});


	self.on('item_add', (value, item) => {
		self.settings.placeholder = getPlaceholder(self.items.length);
	});

	self.on('item_remove', (value, item) => {
		self.settings.placeholder = getPlaceholder(self.items.length);
		self.inputState();
	});

	const getPlaceholder = (num) => {
		if (num === 0) {
			return oldPlaceholder;
		}
		if (num === 1) {
			return options.placeholderText.split('|')[0];
		}
		return options.placeholderText.split('|')[1].replace('%d', String(self.items.length));
	};


};
