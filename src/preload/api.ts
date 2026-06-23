import { ipcRenderer } from 'electron'
import { IpcMethodLike } from '@/shared/ipc'

import { invokeCreateSubwindow } from './api/subwindow-create'
import { invokeFTPGetList } from './api/ftp-get-list'
import { invokeWindowGetId } from './api/window-get-id'
import { FtpConnectMethod } from '@/backend/features/ftp-connect/model/ftp-connect.ipc-model'
import { WindowCloseMethod } from '@/backend/features/close-window/model/window-close.ipc-model'

export function makeIpcHandler<TMethodObj extends IpcMethodLike>(
    method: TMethodObj['method'],
): (props: TMethodObj['props']) => Promise<TMethodObj['response']> {
    return (props: TMethodObj['props']) => ipcRenderer.invoke(method, props)
}

export const api = {
    ftp: {
        connect: makeIpcHandler<FtpConnectMethod>('ftp:connect'),
        getList: invokeFTPGetList,
    },
    window: {
        create: invokeCreateSubwindow,
        getId: invokeWindowGetId,
        close: makeIpcHandler<WindowCloseMethod>('window:close'),
    },
}

export type IpcApi = typeof api
