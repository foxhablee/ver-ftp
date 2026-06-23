import { type BrowserWindow, ipcMain } from 'electron'
import { ipcHandlerFTPConnect } from '@/backend/features/ftp-connect'
import { ipcHandlerSubwindowCreate } from '@/backend/features/subwindow'
import { ipcHandlerFtpGetList } from '@/backend/features/ftp-get-list/ipc/ftp-get-list'
import { ipcHandlerWindowGetId } from '@/backend/features/get-window-id'
import { ipcHandlerWindowClose } from '@/backend/features/close-window'
import { WINDOW_CLOSE_METHOD_CHANNEL } from '@/backend/features/close-window/model/window-close.ipc-model'
import { FTP_CONNECT_METHOD_CHANNEL } from '@/backend/features/ftp-connect/model/ftp-connect.ipc-model'
import { FTP_GET_LIST_METHOD_CHANNEL } from '@/backend/features/ftp-get-list/model/ftp-get-list.ipc-model'
import { WINDOW_CREATE_METHOD_CHANNEL } from '@/backend/features/subwindow/model/subwindow-create.ipc-model'
import { IPC_METHODS } from '@/shared/ipc'

interface Props {
    parentWindow: BrowserWindow
}

export function registerIpcHandlers({ parentWindow: parent }: Props): void {
    ipcMain.handle(FTP_CONNECT_METHOD_CHANNEL, ipcHandlerFTPConnect)
    ipcMain.handle(FTP_GET_LIST_METHOD_CHANNEL, ipcHandlerFtpGetList)
    ipcMain.handle(WINDOW_CREATE_METHOD_CHANNEL, ipcHandlerSubwindowCreate({ parent }))
    ipcMain.handle(IPC_METHODS.WINDOW_GET_ID, ipcHandlerWindowGetId)
    ipcMain.handle(WINDOW_CLOSE_METHOD_CHANNEL, ipcHandlerWindowClose({ parent }))
}
