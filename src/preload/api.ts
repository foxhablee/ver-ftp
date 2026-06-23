import { ipcRenderer } from 'electron'
import { IpcMethodLike } from '@/shared/ipc'

import { invokeFTPConnect } from './api/ftp-connect'
import { invokeCreateSubwindow } from './api/subwindow-create'
import { invokeFTPGetList } from './api/ftp-get-list'
import { invokeWindowGetId } from './api/window-get-id'
import { invokeWindowClose } from './api/window-close'

export function makeIpcHandler<TMethodObj extends IpcMethodLike>(
    method: TMethodObj['method'],
): (props: TMethodObj['props']) => Promise<TMethodObj['response']> {
    return (props: TMethodObj['props']) => ipcRenderer.invoke(method, props)
}

export const api = {
    ftp: {
        connect: invokeFTPConnect,
        getList: invokeFTPGetList,
    },
    window: {
        create: invokeCreateSubwindow,
        getId: invokeWindowGetId,
        close: invokeWindowClose,
    },
}

export type IpcApi = typeof api
