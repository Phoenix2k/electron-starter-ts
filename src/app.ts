import { BrowserWindow } from 'electron';

export default class App {
	// Initialize the application
	static init( app: Electron.App, browserWindow: typeof BrowserWindow ) {
		console.log( "It works!" );
	};
};
