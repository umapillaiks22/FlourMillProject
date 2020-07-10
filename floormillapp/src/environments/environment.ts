// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
 
  firebase : {
    apiKey: "AIzaSyCl3vywru3Tg3KfZj0xlpXik76ELaIMoRY",
    authDomain: "greens-cc2c3.firebaseapp.com",
    databaseURL: "https://greens-cc2c3.firebaseio.com",
    projectId: "greens-cc2c3",
    storageBucket: "greens-cc2c3.appspot.com",
    messagingSenderId: "270444022212",
    appId: "1:270444022212:web:5d492147f2bb968421fc91"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
