import { type BrowserWindow, ipcMain } from 'electron'
import { ipcHandlerFTPConnect } from '@/backend/features/ftp-connect'
import { ipcHandlerSubwindowCreate } from '@/backend/features/subwindow'
import { ipcHandlerFtpGetList } from '@/backend/features/ftp-get-list/ipc/ftp-get-list'
import { ipcHandlerWindowGetId } from '@/backend/features/get-window-id'
import { IPC_METHODS } from '@/shared/ipc'

interface Props {
    parentWindow: BrowserWindow
}

export function registerIpcHandlers({ parentWindow: parent }: Props): void {
    ipcMain.handle(IPC_METHODS.FTP_CONNECT, ipcHandlerFTPConnect)
    ipcMain.handle(IPC_METHODS.FTP_GET_LIST, ipcHandlerFtpGetList)
    ipcMain.handle(IPC_METHODS.SUBWINDOW_CREATE, ipcHandlerSubwindowCreate({ parent }))
    ipcMain.handle(IPC_METHODS.WINDOW_GET_ID, ipcHandlerWindowGetId)
}
