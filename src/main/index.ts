require('reflect-metadata');
import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

const { createConnection } = require('typeorm');
import { Player } from '../data/entities/Player';
import {CreatePlayer1715538759362} from '../data/migrations/1715538759362-createPlayer';
import { DataSource, DataSourceOptions } from 'typeorm';

import { WebContentMessage } from '../types/WebContentMessage';
import { createRoutes } from './routes';
import { createRoutesDispatcher } from './dispatcher';


async function createWindow(): Promise<void>{
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  const connection = await createConnection({
    type: 'sqlite',
    database: '../data/database.db',
    entities: [
      Player
    ],
    migrations: [
      CreatePlayer1715538759362
    ],
    cli: {
      migrationsDir: '../data/migrations'
    }
  });

  await connection.runMigrations();
  
  const dataSource = new DataSource({
    type: 'sqlite',
    database: '../data/database.db',
    entities: ["src/data/entities/*.ts"],
    migrations: [
      CreatePlayer1715538759362
    ],
    cli: {
      migrationsDir: '../data/migrations'
    }
  } as DataSourceOptions)
  
  dataSource.initialize();

  const routes = createRoutesDispatcher(createRoutes(dataSource));
  
  ipcMain.on('query', async (event, route) => {
    try {
      console.log("chamei query")
      const data = await routes.dispatch(route)
      console.log(data)
      mainWindow.webContents.send('query-result', {
        status: true,
        data: data
      } as WebContentMessage);
    } catch (error) {
      console.error('Error executing query:', error);
      mainWindow.webContents.send('query-error', {
        status: false,
        data: `${error}`
      } as WebContentMessage); 
    }
  });

  mainWindow.on('ready-to-show', () => {
    mainWindow.maximize()
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('quit-app', (event, arg) => {
    app.quit();
  });

  // ipcMain.on()

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
