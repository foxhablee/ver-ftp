import { invokeFTPConnect } from './api/ftp-connect'
import { invokeCreateSubwindow } from './api/subwindow-create'
import { invokeFTPGetList } from './api/ftp-get-list'
import { invokeWindowGetId } from './api/window-get-id'
import { invokeWindowClose } from './api/window-close'

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
