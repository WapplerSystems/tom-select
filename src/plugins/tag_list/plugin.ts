import TomSelect from '../../tom-select';
import { getDom } from '../../vanilla';
import { insertAfter } from '../drag_drop/plugin';
import { TLOptions } from './types';

export default function (this: TomSelect, userOptions: TLOptions) {
	const self = this;
	var taglist: HTMLElement;

	const options = Object.assign({
		className: 'ts-taglist',
		title: 'Clear All',
		html: data => {
			return `<ul class="${data.className}"></ul>`;
		},
		itemHtml: data => {
			return `<li class="ts-taglist-item"><button data-value="${data.value}">${data.text}</button></li>`;
		}
	}, userOptions);

	self.on('initialize', () => {
		taglist = getDom(options.html(options));
		insertAfter(self.control, taglist);
	});

	self.hook('after', 'setup', () => {

		for (let key in self.options) {
			let classList = '';

			let tag = getDom(options.itemHtml(self.options[key]));
			if (self.items.indexOf(self.options[key].value) > -1) {
				tag.style.display = 'none';
			}

			(tag.firstChild as HTMLElement).addEventListener('click', (evt) => {
				evt.preventDefault();
				self.addItem((evt.target as HTMLElement).getAttribute('data-value'));
			});

			taglist.append(tag);
		}

	});

	self.on('item_add', (value, item) => {
		(taglist.querySelectorAll(`li > button[data-value="${value}"]`)[0].parentNode as HTMLElement).style.display = 'none';
	});

	self.on('item_remove', (value, item) => {
		(taglist.querySelectorAll(`[data-value="${value}"]`)[0].parentNode as HTMLElement).style.display = '';
	});

};
