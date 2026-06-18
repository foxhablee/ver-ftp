import type { IpcResponse } from '@/shared/ipc'

export const CHANNEL_FTP_CONNECT = 'ftp:connect' as const

export type IpcResponseConnectFTP = IpcResponse<{
    connectionId: string
}>
