import { invokeFTPConnect } from './api/ftp-connect'
import { invokeCreateSubwindow } from './api/subwindow-create'

export const api = {
    ftp: {
        connect: invokeFTPConnect,
    },
    window: {
        create: invokeCreateSubwindow,
    },
}

export type IpcApi = typeof api
