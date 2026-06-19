import { invokeFTPConnect } from './api/ftp-connect'
import { invokeCreateSubwindow } from '@/features/subwindow/preload'
import { pageRegistry } from '@/app/routing/pageRegistry'

export const api = {
    ftp: {
        connect: invokeFTPConnect,
    },
    window: {
        create: invokeCreateSubwindow<typeof pageRegistry>,
    },
}

export type IpcApi = typeof api
