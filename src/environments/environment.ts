// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
declare const require: any
export const environment = {
	production: false,
	API: 'http://ec2-3-14-119-174.us-east-2.compute.amazonaws.com:5001/dashboardMrProfit',
	//API: 'localhost:5001/mock/dashboardMrProfit',
	VERSION: 'v1',
	VERSION_APP: require('../../package.json').version
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
