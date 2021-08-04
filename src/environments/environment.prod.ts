declare const require: any

export const environment = {
	production: true,
	API: 'https://ec2-3-14-119-174.us-east-2.compute.amazonaws.com:5000/dashboardMrProfit',
	VERSION: 'v1',
	VERSION_APP: require('../../package.json').version
};
