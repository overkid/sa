import { createApp } from 'vue';
// eslint-disable-next-line import-x/order
import App from './App.vue';
// eslint-disable-next-line import-x/order
import { router } from './router/index';

import './styles/main.scss';

// UI KIT
import UIButton from 'mikhail-uikit-is422k/dist/UIButton/UIButton.js';
import UIField from 'mikhail-uikit-is422k/dist/UIField/UIField.js';
import UIInput from 'mikhail-uikit-is422k/dist/UIInput/UIInput.js';
import UISelect from 'mikhail-uikit-is422k/dist/UISelect/UISelect.js';

import 'mikhail-uikit-is422k/dist/UIButton/UIButton.css';
import 'mikhail-uikit-is422k/dist/UIField/UIField.css';
import 'mikhail-uikit-is422k/dist/UIInput/UIInput.css';
import 'mikhail-uikit-is422k/dist/UISelect/UISelect.css';

// APP INIT
const app = createApp(App);

app.use(router);

app.component('UIButton', UIButton);
app.component('UIField', UIField);
app.component('UIInput', UIInput);
app.component('UISelect', UISelect);

app.mount('#app');
