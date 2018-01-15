// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC-TXNyGZl67cqTR8DLYFAE-0G1M2Qmbhk',
    authDomain: 'ng5-experience.firebaseapp.com',
    databaseURL: 'https://ng5-experience.firebaseio.com',
    projectId: 'ng5-experience',
    storageBucket: 'ng5-experience.appspot.com',
    messagingSenderId: '549513887596'
  }
};
