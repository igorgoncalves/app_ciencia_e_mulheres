import Vue from 'nativescript-vue'
import App from './components/App'
import Vuex from 'vuex'
import store from './store'

require("nativescript-localstorage")

const Parse = require('parse')
Parse.serverURL = 'https://app-mulheres.back4app.io'; // This is your Server URL
Parse.initialize(
  'mwlgA0T7jJtWlwDfFZJRbD4tZNdfzXTMM2DZSeTd', // This is your Application ID
  '0XmIT4BJekgc8wBoouC35lziUwdJ0sieKMxy0vB9' // This is your Javascript key
);

// new Parse.Object("Test", {"text" : "testing"}).save()
// 	.then(function (obj) {
// 		console.log("Success", obj);
// 	})
// 	.catch(function (e) {
// 		alert("Error saving test object!" + e.message);
// 	});

Vue.use(Vuex);

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)


new Vue({
  render: h => h('frame', [h(App)]),
  store
}).$start()



