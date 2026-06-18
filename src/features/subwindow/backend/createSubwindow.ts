import { BrowserWindow, shell } from 'electron'

interface WindowSize {
    width: number
    height: number
}

export interface SubwindowProps {
    parent: BrowserWindow
    size?: WindowSize
    modal?: boolean
}

export function createSubwindow(props: SubwindowProps): BrowserWindow {
    const newWindow = new BrowserWindow({
        width: props.size?.width || 900,
        height: props.size?.height || 670,
        modal: props.modal || false,
        parent: props.parent,
        autoHideMenuBar: true,
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
