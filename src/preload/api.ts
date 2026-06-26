import { ipcRenderer } from 'electron'
import { IpcMethodLike } from '@/shared/ipc'

import {
    FTP_CONNECT_METHOD_CHANNEL,
    FtpConnectMethod,
} from '@/backend/features/ftp-connect/model/ftp-connect.ipc-model'
import {
    FTP_GET_LIST_METHOD_CHANNEL,
    FtpGetListMethod,
} from '@/backend/features/ftp-get-list/model/ftp-get-list.ipc-model'
import {
    WINDOW_CREATE_METHOD_CHANNEL,
    WindowCreateMethod,
} from '@/backend/features/window-create/model/window-create.ipc-model'
import {
    WINDOW_GET_ID_METHOD_CHANNEL,
    WindowGetIdMethod,
} from '@/backend/features/get-window-id/model/window-get-id.ipc-model'
import {
    WINDOW_CLOSE_METHOD_CHANNEL,
    WindowCloseMethod,
} from '@/backend/features/close-window/model/window-close.ipc-model'
import {
    LOCAL_PATH_CONTENT_METHOD_CHANNEL,
    LocalPathContentMethod,
} from '@/backend/features/local-path-content/model/local-path-content.ipc-model'

export function makeIpcHandler<TMethodObj extends IpcMethodLike>(
    method: TMethodObj['method'],
): (props: TMethodObj['props'] extends object ? TMethodObj['props'] : void) => Promise<TMethodObj['response']> {
    return (props) => ipcRenderer.invoke(method, props)
}

export const api = {
    [FTP_CONNECT_METHOD_CHANNEL]: makeIpcHandler<FtpConnectMethod>('ftp:connect'),
    [FTP_GET_LIST_METHOD_CHANNEL]: makeIpcHandler<FtpGetListMethod>('ftp:get-list'),
    [WINDOW_CREATE_METHOD_CHANNEL]: makeIpcHandler<WindowCreateMethod>('window:create'),
    [WINDOW_GET_ID_METHOD_CHANNEL]: makeIpcHandler<WindowGetIdMethod>('window:get-id'),
    [WINDOW_CLOSE_METHOD_CHANNEL]: makeIpcHandler<WindowCloseMethod>('window:close'),
    [LOCAL_PATH_CONTENT_METHOD_CHANNEL]: makeIpcHandler<LocalPathContentMethod>('local:path-content'),
} as const

export type IpcApi = typeof api
