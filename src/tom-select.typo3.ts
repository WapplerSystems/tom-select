import TomSelect from './tom-select';

import change_listener from './plugins/change_listener/plugin';
import checkbox_options from './plugins/checkbox_options/plugin';
import clear_button from './plugins/clear_button/plugin';
import caret_position from './plugins/caret_position/plugin';
import dropdown_input from './plugins/dropdown_input/plugin';
import input_autogrow from './plugins/input_autogrow/plugin';
import no_backspace_delete from './plugins/no_backspace_delete/plugin';
import no_active_items from './plugins/no_active_items/plugin';
import remove_button from './plugins/remove_button/plugin';
import restore_on_backspace from './plugins/restore_on_backspace/plugin';
import tag_list from './plugins/tag_list/plugin';
import counter from './plugins/counter/plugin';

TomSelect.define('change_listener', change_listener);
TomSelect.define('checkbox_options', checkbox_options);
TomSelect.define('clear_button', clear_button);
TomSelect.define('caret_position', caret_position);
TomSelect.define('dropdown_input', dropdown_input);
TomSelect.define('input_autogrow', input_autogrow);
TomSelect.define('no_backspace_delete', no_backspace_delete);
TomSelect.define('no_active_items', no_active_items);
TomSelect.define('remove_button', remove_button);
TomSelect.define('restore_on_backspace', restore_on_backspace);
TomSelect.define('tag_list', tag_list);
TomSelect.define('counter', counter);

export default TomSelect;
