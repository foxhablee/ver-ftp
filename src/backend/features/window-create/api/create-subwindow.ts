import { BrowserWindow, shell } from 'electron'
import { PATHS } from '@/backend/shared/lib'
import { Subwindow } from '../model/window-create.ipc-model'

export function createSubwindow(props: Subwindow): BrowserWindow {
    const newWindow = new BrowserWindow({
        width: props.size?.width || 900,
        height: props.size?.height || 670,
        modal: props.modal || false,
        parent: props.parent,
        autoHideMenuBar: true,
        webPreferences: {
            preload: PATHS.PRELOAD,
            sandbox: true,
        },
        ...(process.platform !== 'darwin' ? { titleBarOverlay: true } : {}),
    })

    newWindow.on('ready-to-show', () => {
        newWindow.show()
    })

    newWindow.webContents.setWindowOpenHandler((details) => {
        shell.openExternal(details.url)
        return { action: 'deny' }
    })

    return newWindow
}
