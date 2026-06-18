import { invokeConnectFtp } from '@/features/connect-to-ftp/preload'

export const api = {
    ftp: {
        connect: invokeConnectFtp,
    },
}

export type IpcApi = typeof api
