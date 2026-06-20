import { invokeFTPConnect } from './api/ftp-connect'
import { invokeCreateSubwindow } from './api/subwindow-create'
import { invokeFTPGetList } from './api/ftp-get-list'

export const api = {
    ftp: {
        connect: invokeFTPConnect,
        getList: invokeFTPGetList,
    },
    window: {
        create: invokeCreateSubwindow,
    },
}

export type IpcApi = typeof api
