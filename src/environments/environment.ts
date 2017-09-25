// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAkIPVzQTDc09Oxj6inLhN0TWJizUQrvuk",
    authDomain: "angular4-online-shop.firebaseapp.com",
    databaseURL: "https://angular4-online-shop.firebaseio.com",
    projectId: "angular4-online-shop",
    storageBucket: "angular4-online-shop.appspot.com",
    messagingSenderId: "871263500312"
  }
};
