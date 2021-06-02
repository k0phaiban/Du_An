import Vue from 'vue';

const ccTable = () => import(/* webpackChunkName:'ccTable' */ '@/components/table/ccTable.vue');
Vue.component('ccTable', ccTable);
const ccButton = () => import(/* webpackChunkName:'ccButton' */ '@/components/button/ccButton.vue');
Vue.component('ccButton', ccButton);
const ccChar = () => import(/* webpackChunkName:'ccChar' */ '@/components/char/ccChar.vue');
Vue.component('ccChar', ccChar);
const ccPieChar = () => import(/* webpackChunkName:'ccPieChar' */ '@/components/char/ccPieChar.vue');
Vue.component('ccPieChar', ccPieChar);
const ccBarChar = () => import(/* webpackChunkName:'ccBarChar' */ '@/components/char/ccBarChar.vue');
Vue.component('ccBarChar', ccBarChar);
const ccLineChar = () => import(/* webpackChunkName:'ccLineChar' */ '@/components/char/ccLineChar.vue');
Vue.component('ccLineChar', ccLineChar);
const ccTreeList = () => import(/* webpackChunkName:'ccTreeList' */ '@/components/tree-list/ccTreeList.vue');
Vue.component('ccTreeList', ccTreeList);
const ccGroup = () => import(/* webpackChunkName:'ccGroup' */ '@/components/group/ccGroup.vue');
Vue.component('ccGroup', ccGroup);
const ccRow = () => import(/* webpackChunkName:'ccRow' */ '@/components/group/ccRow.vue');
Vue.component('ccRow', ccRow);
const ccCol = () => import(/* webpackChunkName:'ccCol' */ '@/components/group/ccCol.vue');
Vue.component('ccCol', ccCol);
const ccInput = () => import(/* webpackChunkName:'ccInput' */ '@/components/input/ccInput.vue');
Vue.component('ccInput', ccInput);
const ccSelectBox = () => import(/* webpackChunkName:'ccSelectBox' */ '@/components/select-box/ccSelectBox.vue');
Vue.component('ccSelectBox', ccSelectBox);
const ccOrganizationUnit = () => import(/* webpackChunkName:'ccOrganizationUnit' */ '@/components/organization-unit/CCOrganizationUnit.vue');
Vue.component('ccOrganizationUnit', ccOrganizationUnit);
const ccIcon = () => import(/* webpackChunkName:'ccIcon' */ '@/components/button/ccIcon.vue');
Vue.component('ccIcon', ccIcon);

const ccPopup = () => import(/* webpackChunkName:'ccPopup' */ '@/components/popup/CCPopup.vue');
Vue.component('ccPopup', ccPopup);

const ccLoading = () => import(/* webpackChunkName:'ccLoading' */ '@/components/loading/ccLoading.vue');
Vue.component('ccLoading', ccLoading);
const ccRadio = () => import(/* webpackChunkName:'ccRadio' */ '@/components/radio/ccRadio.vue');
Vue.component('ccRadio', ccRadio);
