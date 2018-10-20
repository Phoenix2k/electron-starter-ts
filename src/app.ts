'use strict';

import { BrowserWindow } from 'electron';

export default class App {
	public static BrowserWindow;
	public static Electron: Electron.App;
	public static mainWindow: Electron.BrowserWindow;

	// Initialize the application
	public static init( app: Electron.App, browserWindow: typeof BrowserWindow ) {
		App.BrowserWindow = browserWindow;
		App.Electron = app;
		App.Electron.on( 'activate', App.onActivate );
		App.Electron.on( 'ready', App.onReady );
		App.Electron.on( 'window-all-closed', App.onWindowAllClosed );
	}

	private static createWindow() {
		App.mainWindow = new App.BrowserWindow( {
			height: 600,
			width: 800,
		} );
		App.mainWindow.loadURL( 'file://' + __dirname + '/../../index.html' );
		App.mainWindow.on( 'closed', App.onClose );
	}

	private static onActivate() {
		// On OS X it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if ( null === App.mainWindow ) {
			App.createWindow();
		}
	}

	// Dereference the window object, usually you would store windows
	// in an array if your app supports multi windows, this is the time
	// when you should delete the corresponding element.
	private static onClose() {
		App.mainWindow = null;
	}

	// This method will be called when Electron has finished
	// initialization and is ready to create browser windows.
	// Some APIs can only be used after this event occurs.
	private static onReady() {
		App.createWindow();
	}

	private static onWindowAllClosed() {
		// On OS X it is common for applications and their menu bar
		// to stay active until the user quits explicitly with Cmd + Q
		if ( 'darwin' !== process.platform ) {
			App.Electron.quit();
		}
	}
}
