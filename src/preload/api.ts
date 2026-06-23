import { ipcRenderer } from 'electron'
import { IpcMethodLike } from '@/shared/ipc'

import { FtpConnectMethod } from '@/backend/features/ftp-connect/model/ftp-connect.ipc-model'
import { FtpGetListMethod } from '@/backend/features/ftp-get-list/model/ftp-get-list.ipc-model'
import { WindowCreateMethod } from '@/backend/features/subwindow/model/subwindow-create.ipc-model'
import { WindowGetIdMethod } from '@/backend/features/get-window-id/model/window-get-id.ipc-model'
import { WindowCloseMethod } from '@/backend/features/close-window/model/window-close.ipc-model'

export function makeIpcHandler<TMethodObj extends IpcMethodLike>(
    method: TMethodObj['method'],
): (props: TMethodObj['props'] extends object ? TMethodObj['props'] : void) => Promise<TMethodObj['response']> {
    return (props) => ipcRenderer.invoke(method, props)
}

export const api = {
    ftp: {
        connect: makeIpcHandler<FtpConnectMethod>('ftp:connect'),
        getList: makeIpcHandler<FtpGetListMethod>('ftp:get-list'),
    },
    window: {
        create: makeIpcHandler<WindowCreateMethod>('window:create'),
        getId: makeIpcHandler<WindowGetIdMethod>('window:get-id'),
        close: makeIpcHandler<WindowCloseMethod>('window:close'),
    },
}

export type IpcApi = typeof api
