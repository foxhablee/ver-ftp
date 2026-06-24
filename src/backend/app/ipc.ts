import { type BrowserWindow, ipcMain } from 'electron'
import { FTP_CONNECT_METHOD_CHANNEL, ipcHandlerFTPConnect } from '@/backend/features/ftp-connect'
import { FTP_GET_LIST_METHOD_CHANNEL, ipcHandlerFtpGetList } from '@/backend/features/ftp-get-list'
import { WINDOW_CREATE_METHOD_CHANNEL, ipcHandlerWindowCreate } from '@/backend/features/window-create'
import { WINDOW_GET_ID_METHOD_CHANNEL, ipcHandlerWindowGetId } from '@/backend/features/get-window-id'
import { WINDOW_CLOSE_METHOD_CHANNEL, ipcHandlerWindowClose } from '@/backend/features/close-window'
import { LOCAL_PATH_CONTENT_METHOD_CHANNEL, ipcHandlerLocalPathContent } from '@/backend/features/local-path-content'

interface Props {
    parentWindow: BrowserWindow
}

export function registerIpcHandlers({ parentWindow: parent }: Props): void {
    ipcMain.handle(FTP_CONNECT_METHOD_CHANNEL, ipcHandlerFTPConnect)
    ipcMain.handle(FTP_GET_LIST_METHOD_CHANNEL, ipcHandlerFtpGetList)
    ipcMain.handle(WINDOW_CREATE_METHOD_CHANNEL, ipcHandlerWindowCreate({ parent }))
    ipcMain.handle(WINDOW_GET_ID_METHOD_CHANNEL, ipcHandlerWindowGetId)
    ipcMain.handle(WINDOW_CLOSE_METHOD_CHANNEL, ipcHandlerWindowClose({ parent }))
    ipcMain.handle(LOCAL_PATH_CONTENT_METHOD_CHANNEL, ipcHandlerLocalPathContent)
}
