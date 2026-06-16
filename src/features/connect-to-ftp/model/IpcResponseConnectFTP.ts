import { IpcResponse } from '@/shared/ipc/preload'

export type IpcResponseConnectFTP = IpcResponse<{
    connectionId: string
}>
