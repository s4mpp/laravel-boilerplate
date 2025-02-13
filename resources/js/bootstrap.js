import axios from 'axios';
import { Livewire, Alpine } from '../../vendor/livewire/livewire/dist/livewire.esm';

import.meta.glob([
	'../../img/**',
]);

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


Livewire.start()