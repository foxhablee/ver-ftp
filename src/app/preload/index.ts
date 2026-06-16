import { contextBridge } from 'electron'
import { ipcConnectFTP } from '@/features/connect-to-ftp/preload'

const api = {
    ftp: {
        connect: ipcConnectFTP,
    },
}

export type IpcApi = typeof api

try {
    contextBridge.exposeInMainWorld('api', api)
} catch (error) {
    console.error(error)
}
