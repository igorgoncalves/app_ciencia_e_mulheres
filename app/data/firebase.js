
const firebase = require("nativescript-plugin-firebase");
let self = this


firebase.init({
}).then(function (instance) {
}).catch(function (error) {
  resolve("Error initializing Firebase: " + error);
})

// function init() {
//    return new Promise(resolve =>

//     )
//  }

//  async function instance(){
//    return await init()
//  }




export default {
  database: firebase,
}
