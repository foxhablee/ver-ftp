import { invokeFTPConnect } from './api/ftp-connect'
import { invokeCreateSubwindow } from '@/features/subwindow/preload'
import { pageRegistry } from '@/shared/model'

export const api = {
    ftp: {
        connect: invokeFTPConnect,
    },
    window: {
        create: invokeCreateSubwindow<typeof pageRegistry>,
    },
}

export type IpcApi = typeof api
