import { invokeConnectFtp } from '@/features/connect-to-ftp/preload'
import { invokeCreateSubwindow } from '@/features/subwindow/preload'
import { pageRegistry } from '@/app/routing/pageRegistry'

export const api = {
    ftp: {
        connect: invokeConnectFtp,
    },
    window: {
        create: invokeCreateSubwindow<typeof pageRegistry>,
    },
}

export type IpcApi = typeof api
