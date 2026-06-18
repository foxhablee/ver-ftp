import { invokeConnectFtp } from '@/features/connect-to-ftp/preload'
import { invokeCreateSubwindow } from '@/features/subwindow/preload'

export const api = {
    ftp: {
        connect: invokeConnectFtp,
    },
    window: {
        create: invokeCreateSubwindow,
    },
}

export type IpcApi = typeof api
